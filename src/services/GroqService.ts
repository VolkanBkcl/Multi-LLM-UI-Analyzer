import { LLMProvider, GenerationResult } from './LLMProvider';
import Groq from 'groq-sdk';

export class GroqService implements LLMProvider {
  private groq: Groq;

  constructor() {
    this.groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });
  }

  async generateCode(prompt: string): Promise<GenerationResult> {
    const startTime = performance.now();
    try {
      const response = await this.groq.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'llama3-8b-8192',
      });

      const executionTime = performance.now() - startTime;
      return {
        code: response.choices[0]?.message?.content || '',
        executionTime,
        model: 'Groq',
      };
    } catch (error: any) {
      return {
        code: '',
        executionTime: performance.now() - startTime,
        error: error.message || 'Unknown error occurred in Groq Service',
        model: 'Groq',
      };
    }
  }
}
