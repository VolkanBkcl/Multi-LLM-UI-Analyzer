export interface LLMProvider {
  generateCode(prompt: string): Promise<string>;
}
