import { checkProgrammaticRules } from './promptAlignmentChecker';
import { evaluateAllMetrics, MODELS } from './judgeService';
import { checkConsensus, callArbitrator } from './consensusService';
import {
  METRIC_KEYS,
  type MetricKey,
  type DecisionMethod,
  type EvaluationResult,
  type ArbitrationResult,
} from './types';

/**
 * Ana değerlendirme akışı.
 * 1) Programatik prompt-uyum ön denetimi
 * 2) J1 & J2 paralel — her metrik ayrı çağrı
 * 3) Konsensüs / J3 tahkimi
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

  const finalScores = {} as Record<MetricKey, number>;
  let decisionMethod: DecisionMethod;
  let arbitration: ArbitrationResult | null = null;
  let j3Model: string | null = null;

  if (!hasDisagreement) {
    // 3a. Konsensüs — ortalama kullan.
    for (const metric of METRIC_KEYS) {
      finalScores[metric] = consensus[metric]!.score;
    }
    decisionMethod = 'dual_judge_consensus';
  } else {
    // 3b. Uyuşmazlık — J3 tahkimciyi çağır (tüm 5 metriği yeniden puanlar).
    try {
      arbitration = await callArbitrator(
        code,
        userPrompt,
        systemConstraints,
        j1Results,
        j2Results,
        disagreedMetrics,
      );
      for (const metric of METRIC_KEYS) {
        finalScores[metric] = arbitration.scores[metric];
      }
      decisionMethod = 'arbitration_j3';
      j3Model = MODELS.J3;
    } catch (err) {
      // J3 de başarısız olursa fallback: uyuşan metriklerde ortalama,
      // uyuşmayanlarda yine iki hakemin ortalaması.
      console.error('Arbitrator failed, falling back to average:', (err as Error)?.message);
      for (const metric of METRIC_KEYS) {
        finalScores[metric] =
          consensus[metric]?.score ??
          Math.round((j1Results[metric].score + j2Results[metric].score) / 2);
      }
      decisionMethod = 'arbitration_failed_fallback_average';
    }
  }

  // 4. Öneriler: tahkim varsa J1+J2'yi, yoksa yine her ikisini birleştir.
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
    promptAlignmentDetail: {
      programmaticScore: programmatic.programmaticScore,
      semanticScore: j1Results.promptAlignmentDetail?.semanticScore ?? 0,
      violations: programmatic.violations,
      totalRules: programmatic.totalRules,
      passedRules: programmatic.passedRules,
    },
  };
}
