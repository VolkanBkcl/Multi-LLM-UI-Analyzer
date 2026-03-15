import { LLMProvider, GenerationResult } from './LLMProvider';
import { GoogleGenerativeAI } from '@google/generative-ai';

export class GeminiService implements LLMProvider {
  private genAI: GoogleGenerativeAI;

  constructor() {
    const apiKey = process.env.GEMINI_API_KEY || '';
    this.genAI = new GoogleGenerativeAI(apiKey);
  }

  async generateCode(prompt: string): Promise<GenerationResult> {
    const startTime = performance.now();
    try {
      const model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      
      const executionTime = performance.now() - startTime;
      return {
        code: response.text(),
        executionTime,
        model: 'Gemini',
      };
    } catch (error: any) {
      return {
        code: '',
        executionTime: performance.now() - startTime,
        error: error.message || 'Unknown error occurred in Gemini Service',
        model: 'Gemini',
      };
    }
  }
}
