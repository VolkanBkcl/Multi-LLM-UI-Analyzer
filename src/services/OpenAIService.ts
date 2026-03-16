import { LLMProvider } from './LLMProvider';
import OpenAI from 'openai';

export class OpenAIService implements LLMProvider {
  private client: OpenAI;

  constructor() {
    this.client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async generateCode(prompt: string): Promise<string> {
    const controller = new AbortController();
    const TIMEOUT_MS = 15000;
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
      const response = await this.client.chat.completions.create(
        {
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: prompt }],
        },
        { signal: controller.signal }
      );
      
      clearTimeout(timeoutId);
      return response.choices[0]?.message?.content || '';
    } catch (error: any) {
      clearTimeout(timeoutId);
      if (error.name === 'AbortError') {
        throw new Error('Timeout: OpenAI modeli belirlenen süre içinde yanıt vermedi.');
      }
      throw error;
    }
  }
}
