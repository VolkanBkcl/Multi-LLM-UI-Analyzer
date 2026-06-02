import { loadRubric } from './rubrics';
import { METRIC_KEYS, type MetricKey, type SingleMetricResult, type JudgeResult } from './types';
import { EVALUATION_PARAMS } from '@/lib/llmConfig';

/**
 * Hakem (judge) model çağrıları. Halo etkisini önlemek için her metrik AYRI bir API
 * çağrısında, yalnızca o metriğin rubriği inject edilerek değerlendirilir.
 */

export const MODELS = {
  J1: 'deepseek/deepseek-v4-pro',
  J2: 'minimax/minimax-m3',
  J3: 'x-ai/grok-4.3',
} as const;

// response_format: {type:'json_object'} yalnızca bunu destekleyen modellerde gönderilir.
const SUPPORTS_JSON_FORMAT = new Set<string>([
  MODELS.J1,
  MODELS.J2,
  MODELS.J3,
]);

const RETRY_DELAYS_MS = [3000, 8000];
const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';

/** Metrik anahtarını rubrik/prompt içinde kullanılacak okunabilir isme çevirir. */
const METRIC_LABEL: Record<MetricKey, string> = {
  readability: 'readability (okunabilirlik)',
  performance: 'performance (performans)',
  security: 'security (güvenlik)',
  maintainability: 'maintainability (sürdürülebilirlik)',
  promptAdherence: 'prompt adherence (talimat uyumluluğu — yalnızca semantik/Kategori B boyutu)',
};

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Tek bir OpenRouter chat çağrısı; 429/5xx için kısa retry uygular ve JSON parse eder.
 *  overrideParams ile bireysel parametreler (ör. max_tokens) geçersiz kılınabilir. */
async function callOpenRouterJson(
  model: string,
  systemPrompt: string,
  userPrompt: string,
  overrideParams?: Record<string, number>,
): Promise<any> {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt++) {
    let response: Response;
    try {
      response = await fetch(OPENROUTER_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
          'X-Title': 'Loomina',
        },
        body: JSON.stringify({
          model,
          ...EVALUATION_PARAMS,
          ...overrideParams,
          ...(SUPPORTS_JSON_FORMAT.has(model) ? { response_format: { type: 'json_object' } } : {}),
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt },
          ],
        }),
      });
    } catch (err: any) {
      lastError = new Error(`${model} — ağ hatası: ${err?.message ?? err}`);
      if (attempt >= RETRY_DELAYS_MS.length) break;
      await sleep(RETRY_DELAYS_MS[attempt]);
      continue;
    }

    if (response.status === 429 || response.status >= 500) {
      lastError = new Error(`${model} — OpenRouter geçici hata: ${response.status}`);
      if (attempt >= RETRY_DELAYS_MS.length) break;
      await sleep(RETRY_DELAYS_MS[attempt]);
      continue;
    }

    if (!response.ok) {
      throw new Error(`${model} — OpenRouter API Hatası: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const choice = data.choices?.[0];
    const resultText: string = choice?.message?.content || '';
    const finishReason: string | undefined = choice?.finish_reason;

    // Boş içerik (genelde max_tokens reasoning'e harcanıp content'e kalmadığında) → retry.
    if (!resultText) {
      lastError = new Error(
        `${model} — LLM yanıtı boş döndü (finish_reason: ${finishReason ?? 'bilinmiyor'}).`,
      );
      if (attempt >= RETRY_DELAYS_MS.length) break;
      await sleep(RETRY_DELAYS_MS[attempt]);
      continue;
    }

    // Truncation veya etrafında metin olsa bile JSON'u dayanıklı şekilde ayıkla.
    try {
      return parseLooseJson(resultText);
    } catch (err: any) {
      lastError = new Error(
        `${model} — JSON ayrıştırma hatası (finish_reason: ${finishReason ?? 'bilinmiyor'}): ${err?.message ?? err}`,
      );
      if (attempt >= RETRY_DELAYS_MS.length) break;
      await sleep(RETRY_DELAYS_MS[attempt]);
      continue;
    }
  }

  throw lastError ?? new Error(`${model} — bilinmeyen hata.`);
}

/**
 * LLM çıktısından JSON'u dayanıklı şekilde ayıklar:
 * markdown fence'lerini siler, ilk '{' ile son '}' arasını alır (etraftaki metni atar).
 * Truncation durumunda JSON.parse yine de hata fırlatır → retry tetiklenir.
 */
function parseLooseJson(text: string): any {
  let t = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
  const start = t.indexOf('{');
  const end = t.lastIndexOf('}');
  if (start !== -1 && end !== -1 && end > start) {
    t = t.slice(start, end + 1);
  }
  return JSON.parse(t);
}

function clampScore(value: unknown): number {
  const n = Number(value);
  if (!Number.isFinite(n)) return 0;
  return Math.max(0, Math.min(100, Math.round(n)));
}

/** Tek bir model için tek bir metriği değerlendirir (halo etkisini önler). */
export async function evaluateSingleMetric(
  model: string,
  metric: MetricKey,
  code: string,
  userPrompt: string,
  systemConstraints: string,
): Promise<SingleMetricResult> {
  const rubric = loadRubric(metric);
  const label = METRIC_LABEL[metric];

  const systemPrompt = `You are a senior software engineer and code review expert. Your task is to evaluate the provided code on exactly ONE criterion: ${label}.

You must NOT consider any other quality dimensions in your assessment.
Evaluate strictly and objectively — do not favor any particular coding style or model family.

Score on a 0-100 integer scale using this rubric:
${rubric}

Think step by step:
1. Identify what the criterion requires
2. List what the code does well on this criterion
3. List what the code fails or misses on this criterion
4. Assign a score (0-100) based only on the evidence above

Also provide 1-2 short, actionable improvement suggestions in Turkish for this criterion.

IMPORTANT: Keep the "reasoning" field concise (2-4 sentences max). Do NOT write long analysis in the JSON.

Return ONLY this JSON (no surrounding text, no markdown):
{"criterion":"${metric}","reasoning":"...","suggestions":["...","..."],"score":<0-100 integer>}`;

  const userMessage = `Original user prompt: ${userPrompt}
System constraints: ${systemConstraints}
Generated code to evaluate:
${code}`;

  const parsed = await callOpenRouterJson(model, systemPrompt, userMessage);

  return {
    score: clampScore(parsed.score),
    reasoning: typeof parsed.reasoning === 'string' ? parsed.reasoning : '',
    suggestions: Array.isArray(parsed.suggestions)
      ? parsed.suggestions.filter((s: unknown): s is string => typeof s === 'string')
      : [],
  };
}

/**
 * Bir hakem modeli için tüm 5 metriği değerlendirir.
 * promptAdherence için semantik skor LLM'den alınır ve programatik skorla harmanlanır:
 *   final = programmatic*0.6 + semantic*0.4
 */
export async function evaluateAllMetrics(
  model: string,
  code: string,
  userPrompt: string,
  systemConstraints: string,
  programmaticAlignmentScore: number,
): Promise<JudgeResult> {
  // Tüm 5 metriği paralel değerlendir (her biri ayrı çağrı).
  const settled = await Promise.all(
    METRIC_KEYS.map((metric) =>
      evaluateSingleMetric(model, metric, code, userPrompt, systemConstraints),
    ),
  );

  const byMetric = {} as Record<MetricKey, SingleMetricResult>;
  METRIC_KEYS.forEach((metric, i) => {
    byMetric[metric] = settled[i];
  });

  // promptAdherence'ı programatik + semantik harmanla.
  const semanticAlignment = byMetric.promptAdherence;
  const blendedScore = Math.round(
    programmaticAlignmentScore * 0.6 + semanticAlignment.score * 0.4,
  );

  return {
    model,
    readability: byMetric.readability,
    performance: byMetric.performance,
    security: byMetric.security,
    maintainability: byMetric.maintainability,
    promptAdherence: {
      score: blendedScore,
      reasoning: semanticAlignment.reasoning,
      suggestions: semanticAlignment.suggestions,
    },
    promptAlignmentDetail: {
      programmaticScore: programmaticAlignmentScore,
      semanticScore: semanticAlignment.score,
      violations: [],
      totalRules: 0,
      passedRules: 0,
    },
  };
}

export { callOpenRouterJson };
