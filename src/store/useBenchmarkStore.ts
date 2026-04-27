import { create } from 'zustand';

export type ModelProvider = 'openai' | 'gemini' | 'groq';

export type AnalysisResult = {
  readability: number;
  performance: number;
  security: number;
  maintainability: number;
  suggestions: {
    readability: string[];
    performance: string[];
    security: string[];
    maintainability: string[];
  };
};

export type ModelResult = {
  model: ModelProvider;
  content: string;
  loading: boolean;
  error: string | null;
  timeTakenMs?: number;
  isAnalyzing?: boolean;
  analysisResult?: AnalysisResult | null;
  analysisError?: string | null;
};

interface BenchmarkState {
  prompt: string;
  results: Record<string, ModelResult>;
  isGenerating: boolean;
  setPrompt: (prompt: string) => void;
  startGeneration: (models: ModelProvider[]) => void;
  updateResult: (model: ModelProvider, data: Partial<ModelResult>) => void;
  finishGeneration: () => void;
}

export const useBenchmarkStore = create<BenchmarkState>((set) => ({
  prompt: '',
  results: {},
  isGenerating: false,
  setPrompt: (prompt) => set({ prompt }),
  startGeneration: (models) => {
    const initialResults: Record<string, ModelResult> = {};
    models.forEach((model) => {
      initialResults[model] = { model, content: '', loading: true, error: null };
    });
    set({ results: initialResults, isGenerating: true });
  },
  updateResult: (model, data) =>
    set((state) => ({
      results: {
        ...state.results,
        [model]: { ...state.results[model], ...data },
      },
    })),
  finishGeneration: () => set({ isGenerating: false }),
}));