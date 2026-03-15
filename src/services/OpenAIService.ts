import { LLMProvider, GenerationResult } from './LLMProvider';
import OpenAI from 'openai';

export class OpenAIService implements LLMProvider {
  private client: OpenAI;

  constructor() {
    this.client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async generateCode(prompt: string): Promise<GenerationResult> {
    const startTime = performance.now();
    try {
      const response = await this.client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
      });
      
      const executionTime = performance.now() - startTime;
      return {
        code: response.choices[0].message.content || '',
        executionTime,
        model: 'OpenAI',
      };
    } catch (error: any) {
      return {
        code: '',
        executionTime: performance.now() - startTime,
        error: error.message || 'Unknown error occurred in OpenAI Service',
        model: 'OpenAI',
      };
    }
  }
}
