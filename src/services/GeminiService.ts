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
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=' + process.env.GEMINI_API_KEY, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        }),
        signal: controller.signal // İptal fırlatıcı sinyal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Gemini API Error - Durum Kodu: ${response.status}`);
      }

      const data = await response.json();
      
      // Google Gemini için örnek parser. Modelden modele parse işlemi değişebilir.
      const generatedCode = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
      
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
