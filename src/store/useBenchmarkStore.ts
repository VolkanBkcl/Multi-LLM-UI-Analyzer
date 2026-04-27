import { create } from 'zustand';

export type ModelProvider = 
  | 'openai/gpt-4o'
  | 'anthropic/claude-3.7-sonnet'
  | 'google/gemini-pro-1.5'
  | 'deepseek/deepseek-chat'
  | 'deepseek/deepseek-reasoner'
  | 'meta-llama/llama-3.3-70b-instruct'
  | 'mistralai/mistral-large-2411'
  | 'anthropic/claude-3.5-haiku'
  | 'google/gemini-2.0-flash-lite-001'
  | 'cohere/command-r-plus-08-2024';

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