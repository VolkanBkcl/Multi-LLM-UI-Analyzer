import { create } from 'zustand';
import { getSupabaseBrowserClient } from '@/lib/supabase';

export type ModelProvider = 
  | 'openai/gpt-4o'
  | 'openai/gpt-oss-120b:free'
  | 'anthropic/claude-3.7-sonnet'
  | 'anthropic/claude-3.5-haiku'
  | 'google/gemini-3.1-pro-preview'
  | 'google/gemini-3-flash-preview'
  | 'deepseek/deepseek-reasoner'
  | 'deepseek/deepseek-chat'
  | 'meta-llama/llama-3.3-70b-instruct'
  | 'meta-llama/llama-3.3-70b-instruct:free'
  | 'qwen/qwen3-coder:free'
  | 'mistralai/mistral-large-2411'
  | 'nvidia/nemotron-3-super-120b-a12b:free'
  | 'cohere/command-r-plus-08-2024';

export type AnalysisResult = {
  readability: number;
  performance: number;
  security: number;
  maintainability: number;
  promptAdherence: number;
  judgeModels?: string[];
  suggestions: {
    readability: string[];
    performance: string[];
    security: string[];
    maintainability: string[];
    promptAdherence: string[];
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
  currentSessionId: string | null;
  setPrompt: (prompt: string) => void;
  startGeneration: (models: ModelProvider[]) => void;
  updateResult: (model: ModelProvider, data: Partial<ModelResult>) => void;
  finishGeneration: () => void;
  restoreSession: (
    sessionId: string,
    models: ModelProvider[],
    responses: { model: string; content: string; time_taken_ms: number }[]
  ) => void;
  saveSessionToSupabase: (userId: string, prompt: string, models: ModelProvider[]) => Promise<string | null>;
  saveResponseToSupabase: (sessionId: string, model: ModelProvider, content: string, timeTakenMs: number) => Promise<string | null>;
  saveVoteToSupabase: (userId: string, voteKey: string) => Promise<void>;
  saveFavoriteToSupabase: (userId: string, responseId: string) => Promise<void>;
}

export const useBenchmarkStore = create<BenchmarkState>((set, get) => ({
  prompt: '',
  results: {},
  isGenerating: false,
  currentSessionId: null,

  setPrompt: (prompt) => set({ prompt }),

  startGeneration: (models) => {
    const initialResults: Record<string, ModelResult> = {};
    models.forEach((model) => {
      initialResults[model] = { model, content: '', loading: true, error: null };
    });
    set({ results: initialResults, isGenerating: true, currentSessionId: null });
  },

  updateResult: (model, data) =>
    set((state) => ({
      results: {
        ...state.results,
        [model]: { ...state.results[model], ...data },
      },
    })),

  finishGeneration: () => set({ isGenerating: false }),

  restoreSession: (sessionId, models, responses) => {
    const restoredResults: Record<string, ModelResult> = {};
    models.forEach((model) => {
      const saved = responses.find((r) => r.model === model);
      restoredResults[model] = {
        model,
        content: saved?.content ?? "",
        loading: false,
        error: saved ? null : "Bu model için kayıtlı yanıt bulunamadı.",
        timeTakenMs: saved?.time_taken_ms ?? 0,
      };
    });
    set({ results: restoredResults, isGenerating: false, currentSessionId: sessionId });
  },

  saveSessionToSupabase: async (userId, prompt, models) => {
    try {
      const supabase = getSupabaseBrowserClient();
      const { data, error } = await supabase
        .from('sessions')
        .insert({ user_id: userId, prompt, models })
        .select('id')
        .single();
      if (error) { console.error('[Supabase] Session kayıt hatası:', error.message); return null; }
      set({ currentSessionId: data.id });
      return data.id;
    } catch (e) {
      console.error('[Supabase] Session kayıt exception:', e);
      return null;
    }
  },

  saveResponseToSupabase: async (sessionId, model, content, timeTakenMs) => {
    try {
      const supabase = getSupabaseBrowserClient();
      const { data, error } = await supabase
        .from('responses')
        .insert({ session_id: sessionId, model, content, time_taken_ms: Math.round(Number(timeTakenMs)) })
        .select('id')
        .single();
      if (error) { console.error('[Supabase] Response kayıt hatası:', error.message); return null; }
      return data.id;
    } catch (e) {
      console.error('[Supabase] Response kayıt exception:', e);
      return null;
    }
  },

  saveVoteToSupabase: async (userId, voteKey) => {
    const sessionId = get().currentSessionId;
    if (!sessionId) return;
    try {
      const supabase = getSupabaseBrowserClient();
      const { error } = await supabase
        .from('votes')
        .insert({ session_id: sessionId, user_id: userId, vote_key: voteKey });
      if (error) console.error('[Supabase] Oy kayıt hatası:', error.message);
    } catch (e) {
      console.error('[Supabase] Oy kayıt exception:', e);
    }
  },

  saveFavoriteToSupabase: async (userId, responseId) => {
    try {
      const supabase = getSupabaseBrowserClient();
      const { error } = await supabase
        .from('favorites')
        .insert({ user_id: userId, response_id: responseId });
      if (error) console.error('[Supabase] Favori kayıt hatası:', error.message);
    } catch (e) {
      console.error('[Supabase] Favori kayıt exception:', e);
    }
  },
}));