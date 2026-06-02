import { loadAllRubrics } from './rubrics';
import { callOpenRouterJson, MODELS } from './judgeService';
import { ARBITRATION_PARAMS } from '@/lib/llmConfig';
import {
  METRIC_KEYS,
  type MetricKey,
  type JudgeResult,
  type ConsensusResult,
  type MetricDecision,
  type ArbitrationResult,
} from './types';

/**
 * Konsensüs kontrolü ve J3 tahkimi.
 * 0-100 ölçeğinde iki hakemin her metrik için puan farkı eşiği aşarsa uyuşmazlık sayılır.
 */

export const DISAGREEMENT_THRESHOLD = 20; // 0-100 ölçeğinde; tek noktadan ayarlanabilir.

/** İki hakemin sonuçlarını karşılaştırır; uyuşan metrikler için ortalama alır. */
export function checkConsensus(j1: JudgeResult, j2: JudgeResult): ConsensusResult {
  const disagreedMetrics: MetricKey[] = [];
  const consensus: Partial<Record<MetricKey, MetricDecision>> = {};

  for (const metric of METRIC_KEYS) {
    const s1 = j1[metric].score;
    const s2 = j2[metric].score;
    const diff = Math.abs(s1 - s2);

    if (diff > DISAGREEMENT_THRESHOLD) {
      disagreedMetrics.push(metric);
    } else {
      consensus[metric] = {
        score: Math.round((s1 + s2) / 2),
        j1Score: s1,
        j2Score: s2,
        method: 'consensus_average',
      };
    }
  }

  return {
    hasDisagreement: disagreedMetrics.length > 0,
    disagreedMetrics,
    consensus,
  };
}

/** Uyuşmazlık varsa J3 tahkimciyi (x-ai/grok-4.3) çağırır; tüm 5 metriği yeniden puanlar. */
export async function callArbitrator(
  code: string,
  userPrompt: string,
  systemConstraints: string,
  j1: JudgeResult,
  j2: JudgeResult,
  disagreedMetrics: MetricKey[],
): Promise<ArbitrationResult> {
  const rubrics = loadAllRubrics();

  const systemPrompt = `You are an arbitrator judge. Two independent reviewers have disagreed on the evaluation of the provided code. Make the final, binding decision on ALL 5 criteria.

Consider both reviewers' reasoning but form your own independent judgment. Do NOT average their scores — evaluate the code independently on a 0-100 integer scale.

Rubrics for all 5 criteria:
${rubrics}

Return ONLY this JSON (no surrounding text, no markdown):
{
  "arbitration_triggered_by": ${JSON.stringify(disagreedMetrics)},
  "j1_summary": "brief summary of reviewer 1 position",
  "j2_summary": "brief summary of reviewer 2 position",
  "final_reasoning": "your independent analysis for all 5 criteria",
  "scores": {
    "readability": <0-100>,
    "performance": <0-100>,
    "security": <0-100>,
    "maintainability": <0-100>,
    "promptAdherence": <0-100>
  }
}`;

  const userMessage = `Original user prompt: ${userPrompt}
System constraints: ${systemConstraints}
Generated code: ${code}

Reviewer 1 (${MODELS.J1}) results: ${JSON.stringify(j1)}
Reviewer 2 (${MODELS.J2}) results: ${JSON.stringify(j2)}`;

  const parsed = await callOpenRouterJson(MODELS.J3, systemPrompt, userMessage, {
    max_tokens: ARBITRATION_PARAMS.max_tokens,
  });

  // Skorları normalize et (0-100 integer).
  const scores = {} as Record<MetricKey, number>;
  for (const metric of METRIC_KEYS) {
    const raw = Number(parsed?.scores?.[metric]);
    scores[metric] = Number.isFinite(raw) ? Math.max(0, Math.min(100, Math.round(raw))) : 0;
  }

  return {
    arbitration_triggered_by: Array.isArray(parsed?.arbitration_triggered_by)
      ? parsed.arbitration_triggered_by
      : disagreedMetrics,
    j1_summary: typeof parsed?.j1_summary === 'string' ? parsed.j1_summary : '',
    j2_summary: typeof parsed?.j2_summary === 'string' ? parsed.j2_summary : '',
    final_reasoning: typeof parsed?.final_reasoning === 'string' ? parsed.final_reasoning : '',
    scores,
  };
}
