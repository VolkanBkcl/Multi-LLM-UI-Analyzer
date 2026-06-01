/**
 * Çift hakemli + tahkimli değerlendirme sistemi tipleri.
 * Metrik anahtarları mevcut UI ve store (AnalysisResult) ile birebir aynı tutulur.
 */

export const METRIC_KEYS = [
  'readability',
  'performance',
  'security',
  'maintainability',
  'promptAdherence',
] as const;

export type MetricKey = (typeof METRIC_KEYS)[number];

/** Tek bir metriğin tek bir hakem tarafından değerlendirilmesinin sonucu. */
export interface SingleMetricResult {
  score: number; // 0-100
  reasoning: string;
  suggestions: string[];
}

/** promptAdherence için programatik + semantik kırılımı taşıyan detay. */
export interface PromptAlignmentDetail {
  programmaticScore: number; // 0-100
  semanticScore: number; // 0-100
  violations: string[];
  totalRules: number;
  passedRules: number;
}

/** Bir hakem modelinin tüm 5 metrik için sonuçları. */
export type JudgeResult = Record<MetricKey, SingleMetricResult> & {
  model: string;
  promptAlignmentDetail?: PromptAlignmentDetail;
};

export type DecisionMethod =
  | 'dual_judge_consensus'
  | 'arbitration_j3'
  | 'arbitration_failed_fallback_average';

/** Tek bir metrik için final karar (konsensüs ortalaması veya tahkim). */
export interface MetricDecision {
  score: number; // 0-100
  j1Score: number;
  j2Score: number;
  method: 'consensus_average' | 'arbitration';
}

export interface ConsensusResult {
  hasDisagreement: boolean;
  disagreedMetrics: MetricKey[];
  consensus: Partial<Record<MetricKey, MetricDecision>>;
}

/** J3 tahkimcinin döndürdüğü yapı. */
export interface ArbitrationResult {
  arbitration_triggered_by: string[];
  j1_summary: string;
  j2_summary: string;
  final_reasoning: string;
  scores: Record<MetricKey, number>;
}

/** Orchestrator'ın nihai çıktısı. */
export interface EvaluationResult {
  // Mevcut AnalysisResult ile uyumlu alanlar (0-100):
  readability: number;
  performance: number;
  security: number;
  maintainability: number;
  promptAdherence: number;
  judgeModels: string[];
  suggestions: Record<MetricKey, string[]>;

  // Çift hakem + tahkim meta verileri:
  overallScore: number; // 5 metriğin ortalaması (0-100)
  decisionMethod: DecisionMethod;
  disagreedMetrics: MetricKey[];
  j1Model: string;
  j2Model: string;
  j3Model: string | null;
  j1Raw: JudgeResult;
  j2Raw: JudgeResult;
  arbitration: ArbitrationResult | null;
  promptAlignmentDetail: PromptAlignmentDetail;
}
