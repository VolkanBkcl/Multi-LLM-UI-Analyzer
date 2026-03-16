import { LLMProvider } from './LLMProvider';
import Groq from 'groq-sdk';

export class GroqService implements LLMProvider {
  private groq: Groq;

  constructor() {
    this.groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });
  }

  async generateCode(prompt: string): Promise<string> {
    const controller = new AbortController();
    const TIMEOUT_MS = 15000;
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
      const response = await this.groq.chat.completions.create(
        {
          messages: [{ role: 'user', content: prompt }],
          model: 'llama3-8b-8192',
        },
        { signal: controller.signal }
      );

      clearTimeout(timeoutId);
      return response.choices[0]?.message?.content || '';
    } catch (error: any) {
      clearTimeout(timeoutId);
      if (error.name === 'AbortError') {
        throw new Error('Timeout: Groq modeli belirlenen süre içinde yanıt vermedi.');
      }
      throw error;
    }
  }
}
