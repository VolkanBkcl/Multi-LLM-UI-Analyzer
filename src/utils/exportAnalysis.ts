import type { AnalysisResult } from '@/store/useBenchmarkStore';

/**
 * Analiz sonuçlarını tam kapsamlı Markdown raporuna dönüştürür ve tarayıcıdan indirir.
 * Tamamen client-side; backend/API bağımlılığı yoktur.
 */

export interface AnalysisExportEntry {
  modelId: string;
  displayName: string;
  prompt: string;
  code: string;
  timeTakenMs?: number;
  analysis: AnalysisResult;
}

type MetricKey = 'readability' | 'performance' | 'security' | 'maintainability' | 'promptAdherence';

const METRIC_LABEL_TR: Record<MetricKey, string> = {
  readability: 'Okunabilirlik',
  performance: 'Performans',
  security: 'Güvenlik',
  maintainability: 'Sürdürülebilirlik',
  promptAdherence: 'Prompt Uyumu',
};

const METRIC_ORDER: MetricKey[] = [
  'readability',
  'performance',
  'security',
  'maintainability',
  'promptAdherence',
];

function decisionMethodLabel(method?: string): string {
  switch (method) {
    case 'dual_judge_consensus':
      return 'Konsensüs (iki hakem ortalaması)';
    case 'arbitration_j3':
      return 'Tahkim (J3)';
    case 'arbitration_failed_fallback_average':
      return 'Tahkim başarısız · ortalama';
    default:
      return method ?? '—';
  }
}

/** Kod içindeki en uzun backtick dizisinden bir uzun fence üretir (fence bütünlüğü). */
function makeCodeFence(code: string): string {
  const runs = code.match(/`+/g);
  const longest = runs ? Math.max(...runs.map((r) => r.length)) : 0;
  return '`'.repeat(Math.max(3, longest + 1));
}

function nowStamp(): string {
  return new Date().toLocaleString('tr-TR');
}

function todayForFilename(): string {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

function slugify(name: string): string {
  return name
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9._-]/g, '');
}

function suggestionsBlock(items?: string[]): string {
  if (!items || items.length === 0) return '_Öneri yok._';
  return items.map((s) => `- ${s}`).join('\n');
}

/** Tek model için tam analiz raporu (markdown gövdesi, başlık seviyesi # ile). */
export function buildAnalysisMarkdown(entry: AnalysisExportEntry): string {
  const { modelId, displayName, prompt, code, timeTakenMs, analysis } = entry;
  const fence = makeCodeFence(code);

  const lines: string[] = [];
  lines.push(`# Loomina Analiz Raporu — ${displayName}`);
  lines.push('');
  lines.push(`- **Model:** \`${modelId}\``);
  lines.push(`- **Tarih:** ${nowStamp()}`);
  if (typeof timeTakenMs === 'number') lines.push(`- **Üretim Süresi:** ${timeTakenMs} ms`);
  if (typeof analysis.overallScore === 'number') {
    lines.push(`- **Genel Skor:** ${analysis.overallScore}/100`);
  }
  lines.push(`- **Karar Yöntemi:** ${decisionMethodLabel(analysis.decisionMethod)}`);
  if (analysis.judgeModels && analysis.judgeModels.length > 0) {
    lines.push(`- **Hakemler:** ${analysis.judgeModels.join(', ')}`);
  }
  const disagreed = analysis.disagreedMetrics ?? [];
  if (disagreed.length > 0) {
    const tr = disagreed.map((m) => METRIC_LABEL_TR[m as MetricKey] ?? m).join(', ');
    lines.push(`- **J3 (Tahkimci) çağrılan metrikler:** ${tr}`);
  } else {
    lines.push('- **J3 (Tahkimci) çağrılan metrikler:** Yok — iki hakem tüm metriklerde uzlaştı.');
  }
  lines.push('');

  lines.push('## Kullanıcı Promptu');
  lines.push('');
  lines.push(prompt?.trim() ? prompt.trim() : '_Prompt bulunamadı._');
  lines.push('');

  lines.push('## Üretilen Kod');
  lines.push('');
  lines.push(`${fence}html`);
  lines.push(code ?? '');
  lines.push(fence);
  lines.push('');

  // Hakem skor dökümü (J1/J2/J3 + hangi yöntemle çözüldü)
  if (analysis.metricBreakdown) {
    lines.push('## Hakem Skor Dökümü (J1 / J2 / J3)');
    lines.push('');
    lines.push('| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |');
    lines.push('|---|---|---|---|---|---|');
    for (const metric of METRIC_ORDER) {
      const b = analysis.metricBreakdown[metric];
      if (!b) continue;
      const j3 = b.j3 === null || b.j3 === undefined ? '—' : String(b.j3);
      const method =
        b.method === 'median_tiebreaker' ? 'Medyan (J1·J2·J3) — tahkim' : 'Ortalama (J1-J2)';
      lines.push(
        `| ${METRIC_LABEL_TR[metric]} | ${b.j1} | ${b.j2} | ${j3} | **${b.final}** | ${method} |`,
      );
    }
    lines.push('');
    lines.push(
      '> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. ' +
        'Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.',
    );
    lines.push('');
  }

  lines.push('## Analiz Sonuçları');
  lines.push('');
  for (const metric of METRIC_ORDER) {
    const score = analysis[metric];
    lines.push(`### ${METRIC_LABEL_TR[metric]} — ${score}/100`);

    if (metric === 'promptAdherence' && analysis.promptAlignmentDetail) {
      const d = analysis.promptAlignmentDetail;
      lines.push('');
      lines.push(
        `- Programatik: ${d.programmaticScore}/100 · Semantik: ${d.semanticScore}/100`,
      );
      const violations =
        d.violations && d.violations.length > 0 ? d.violations.join(', ') : 'yok';
      lines.push(`- İhlaller: ${violations}`);
    }

    lines.push('');
    lines.push('**Öneriler:**');
    lines.push(suggestionsBlock(analysis.suggestions?.[metric]));
    lines.push('');
  }

  return lines.join('\n');
}

/** Birden fazla modeli tek dosyada birleştirir; başa karşılaştırma tablosu ekler. */
export function buildCombinedMarkdown(prompt: string, entries: AnalysisExportEntry[]): string {
  const lines: string[] = [];
  lines.push('# Loomina — Model Karşılaştırma Raporu');
  lines.push('');
  lines.push(`- **Tarih:** ${nowStamp()}`);
  lines.push(`- **Karşılaştırılan Model Sayısı:** ${entries.length}`);
  lines.push('');
  lines.push('## Kullanıcı Promptu');
  lines.push('');
  lines.push(prompt?.trim() ? prompt.trim() : '_Prompt bulunamadı._');
  lines.push('');

  // Karşılaştırma tablosu
  lines.push('## Karşılaştırma Tablosu');
  lines.push('');
  lines.push(
    '| Model | Genel | Okunabilirlik | Performans | Güvenlik | Sürdürülebilirlik | Prompt Uyumu |',
  );
  lines.push('|---|---|---|---|---|---|---|');
  for (const e of entries) {
    const a = e.analysis;
    const overall = typeof a.overallScore === 'number' ? a.overallScore : '—';
    lines.push(
      `| ${e.displayName} | ${overall} | ${a.readability} | ${a.performance} | ${a.security} | ${a.maintainability} | ${a.promptAdherence} |`,
    );
  }
  lines.push('');
  lines.push('---');
  lines.push('');

  // Her model için tam blok
  const blocks = entries.map((e) => buildAnalysisMarkdown(e));
  lines.push(blocks.join('\n\n---\n\n'));

  return lines.join('\n');
}

/** Markdown içeriğini tarayıcıdan .md dosyası olarak indirir. */
export function downloadMarkdown(filename: string, content: string): void {
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/** Tek model raporunu oluşturup indirir. */
export function downloadAnalysisMarkdown(entry: AnalysisExportEntry): void {
  const content = buildAnalysisMarkdown(entry);
  const filename = `loomina-analiz-${slugify(entry.displayName)}-${todayForFilename()}.md`;
  downloadMarkdown(filename, content);
}

/** Birleşik karşılaştırma raporunu oluşturup indirir. */
export function downloadCombinedAnalysisMarkdown(
  prompt: string,
  entries: AnalysisExportEntry[],
): void {
  const content = buildCombinedMarkdown(prompt, entries);
  const filename = `loomina-analiz-karsilastirma-${todayForFilename()}.md`;
  downloadMarkdown(filename, content);
}
