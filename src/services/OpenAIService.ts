import { LLMProvider, GenerationResult } from './LLMProvider';
import axios from 'axios';

export class OpenAIService implements LLMProvider {
  async generateCode(prompt: string): Promise<GenerationResult> {
    const startTime = performance.now();
    try {
      const response = await axios.post("https://openrouter.ai/api/v1/chat/completions", {
        // OpenAI - Test için gpt-4o veya openrouter/free kullanılabilir.
        // Orijinal sürümde OpenAI testlerini yönetmiştik.
        model: "openrouter/free", 
        messages: [{ role: "user", content: prompt }]
      }, {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      });
      
      const executionTime = Math.round(performance.now() - startTime);
      return {
        code: response.data.choices[0].message.content || '',
        executionTime,
        model: 'OpenAI (OpenRouter)',
      };
    } catch (error: any) {
      return {
        code: '',
        executionTime: Math.round(performance.now() - startTime),
        error: error.response?.data?.error?.message || error.message || 'OpenAI API Hatası',
        model: 'OpenAI (OpenRouter)',
      };
    }
  }
}
