import { LLMProvider } from './LLMProvider';

export class GroqService implements LLMProvider {
  async generateCode(prompt: string): Promise<string> {
    const controller = new AbortController();
    const TIMEOUT_MS = 15000;
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
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Groq (OpenRouter) API Error - Durum Kodu: ${response.status}`);
      }

      const data = await response.json();
      return data.choices?.[0]?.message?.content || '';
    } catch (error: any) {
      clearTimeout(timeoutId);
      if (error.name === 'AbortError') {
        throw new Error('Timeout: Groq modeli belirlenen süre içinde yanıt vermedi.');
      }
      throw error;
    }
  }
}
