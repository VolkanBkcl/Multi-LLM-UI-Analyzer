export interface GenerationResult {
  model: string;
  code: string | null;
  executionTime: number;
  error?: string;
}

export interface LLMProvider {
  generateCode(prompt: string): Promise<string>;
}
