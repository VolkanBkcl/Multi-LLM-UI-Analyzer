import { checkProgrammaticRules } from './promptAlignmentChecker';
import { evaluateAllMetrics, MODELS } from './judgeService';
import { checkConsensus, callArbitrator } from './consensusService';
import {
  METRIC_KEYS,
  type MetricKey,
  type DecisionMethod,
  type EvaluationResult,
  type ArbitrationResult,
  type MetricBreakdownItem,
} from './types';

/** Bir sayı dizisinin medyanı (tek eleman sayısında ortadaki; çiftte ortalama). 0-100 integer döner. */
function median(nums: number[]): number {
  const sorted = [...nums].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : Math.round((sorted[mid - 1] + sorted[mid]) / 2);
}

/**
 * Ana değerlendirme akışı.
 * 1) Programatik prompt-uyum ön denetimi
 * 2) J1 & J2 paralel — her metrik ayrı çağrı
 * 3) Konsensüs / J3 tahkimi (seçici + medyan tie-breaker)
 * 4) Final skorların mevcut AnalysisResult şekline map'lenmesi
 */
export async function runEvaluation(
  code: string,
  userPrompt: string,
  systemConstraints: string,
): Promise<EvaluationResult> {
  // 1. Programatik prompt-uyum kontrolü (API çağrısı yok).
  const programmatic = checkProgrammaticRules(code, userPrompt, systemConstraints);

  // 2. J1 (deepseek-v4-pro) ve J2 (minimax-m3) paralel değerlendirme.
  const [j1Results, j2Results] = await Promise.all([
    evaluateAllMetrics(MODELS.J1, code, userPrompt, systemConstraints, programmatic.programmaticScore),
    evaluateAllMetrics(MODELS.J2, code, userPrompt, systemConstraints, programmatic.programmaticScore),
  ]);

  // 3. Konsensüs kontrolü.
  const { hasDisagreement, disagreedMetrics, consensus } = checkConsensus(j1Results, j2Results);

  const metricBreakdown = {} as Record<MetricKey, MetricBreakdownItem>;
  let decisionMethod: DecisionMethod;
  let arbitration: ArbitrationResult | null = null;
  let j3Model: string | null = null;

  const j1s = (m: MetricKey) => j1Results[m].score;
  const j2s = (m: MetricKey) => j2Results[m].score;

  if (!hasDisagreement) {
    // 3a. Tam konsensüs — her metrikte J1-J2 ortalaması.
    for (const metric of METRIC_KEYS) {
      metricBreakdown[metric] = {
        j1: j1s(metric),
        j2: j2s(metric),
        j3: null,
        final: consensus[metric]!.score,
        method: 'consensus_average',
      };
    }
    decisionMethod = 'dual_judge_consensus';
  } else {
    // 3b. Uyuşmazlık var — J3 tahkimciyi çağır.
    //   • Hemfikir metrikler (|J1-J2| ≤ eşik) → J1-J2 ortalaması KORUNUR (seçici tahkim / B).
    //   • Uyuşmazlık metrikleri → medyan(J1, J2, J3) — J3 tie-breaker, outlier'a dayanıklı (C).
    try {
      arbitration = await callArbitrator(
        code,
        userPrompt,
        systemConstraints,
        j1Results,
        j2Results,
        disagreedMetrics,
      );
      j3Model = MODELS.J3;
      for (const metric of METRIC_KEYS) {
        if (disagreedMetrics.includes(metric)) {
          const j3 = arbitration.scores[metric];
          metricBreakdown[metric] = {
            j1: j1s(metric),
            j2: j2s(metric),
            j3,
            final: median([j1s(metric), j2s(metric), j3]),
            method: 'median_tiebreaker',
          };
        } else {
          // Hemfikir: konsensüs ortalaması korunur (checkConsensus tarafından hesaplandı).
          metricBreakdown[metric] = {
            j1: j1s(metric),
            j2: j2s(metric),
            j3: null,
            final: consensus[metric]!.score,
            method: 'consensus_average',
          };
        }
      }
      decisionMethod = 'arbitration_j3';
    } catch (err) {
      // J3 başarısız → uyuşmazlık metrikleri için J1-J2 ortalamasına düş (medyan kalmaz).
      console.error('Arbitrator failed, falling back to average:', (err as Error)?.message);
      for (const metric of METRIC_KEYS) {
        const final =
          consensus[metric]?.score ?? Math.round((j1s(metric) + j2s(metric)) / 2);
        metricBreakdown[metric] = {
          j1: j1s(metric),
          j2: j2s(metric),
          j3: null,
          final,
          method: 'consensus_average',
        };
      }
      decisionMethod = 'arbitration_failed_fallback_average';
    }
  }

  const finalScores = {} as Record<MetricKey, number>;
  for (const metric of METRIC_KEYS) {
    finalScores[metric] = metricBreakdown[metric].final;
  }

  // 4. Öneriler: J1+J2 önerileri birleştirilir. Seçici+medyan tasarımda J1/J2 puanları final
  //    skora katkı verdiğinden (hemfikirde ortalama, uyuşmazlıkta medyanın parçası), öneri
  //    kaynağı artık skorlarla tutarlıdır.
  const mergeSuggestions = (metric: MetricKey): string[] => [
    ...(j1Results[metric].suggestions ?? []),
    ...(j2Results[metric].suggestions ?? []),
  ];

  const suggestions = {} as Record<MetricKey, string[]>;
  for (const metric of METRIC_KEYS) {
    suggestions[metric] = mergeSuggestions(metric);
  }

  const overallScore = Math.round(
    METRIC_KEYS.reduce((sum, m) => sum + finalScores[m], 0) / METRIC_KEYS.length,
  );

  return {
    readability: finalScores.readability,
    performance: finalScores.performance,
    security: finalScores.security,
    maintainability: finalScores.maintainability,
    promptAdherence: finalScores.promptAdherence,
    judgeModels: [MODELS.J1, MODELS.J2, ...(j3Model ? [j3Model] : [])],
    suggestions,

    overallScore,
    decisionMethod,
    disagreedMetrics,
    j1Model: MODELS.J1,
    j2Model: MODELS.J2,
    j3Model,
    j1Raw: j1Results,
    j2Raw: j2Results,
    arbitration,
    metricBreakdown,
    promptAlignmentDetail: {
      programmaticScore: programmatic.programmaticScore,
      semanticScore: j1Results.promptAlignmentDetail?.semanticScore ?? 0,
      violations: programmatic.violations,
      totalRules: programmatic.totalRules,
      passedRules: programmatic.passedRules,
    },
  };
}
