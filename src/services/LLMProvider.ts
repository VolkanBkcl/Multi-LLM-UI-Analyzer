export interface GenerationResult {
  code: string;
  executionTime: number;
  error?: string;
  model: string;
}

export interface LLMProvider {
  generateCode(prompt: string): Promise<GenerationResult>;
}
