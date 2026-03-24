import { LLMProvider } from './LLMProvider';

export class GeminiService implements LLMProvider {
  /**
   * Promise yapısının patlamasını test etmek veya network bazlı takılmaları 
   * durdurmak için Native fetch AbortController kullanmak best-practice'dir.
   */
  async generateCode(prompt: string): Promise<string> {
    const controller = new AbortController();
    const TIMEOUT_MS = 15000; // 15 Saniye limit

    // Süre dolduğunda fetch'i iptal eder, catch bloğunda 'AbortError'a düşer
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "openrouter/free",
          messages: [{ role: "user", content: prompt }]
        }),
        signal: controller.signal // İptal fırlatıcı sinyal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Gemini (OpenRouter) API Error - Durum Kodu: ${response.status}`);
      }

      const data = await response.json();
      
      const generatedCode = data.choices?.[0]?.message?.content || '';
      
      return generatedCode;

    } catch (error: any) {
      clearTimeout(timeoutId);
      
      if (error.name === 'AbortError') {
         throw new Error('Timeout: Gemini modeli belirlenen süre içinde yanıt vermedi.');
      }
      
      // Standart hatalar
      throw error; 
    }
  }
}
