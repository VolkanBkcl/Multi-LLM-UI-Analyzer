import { SYSTEM_CONSTRAINTS } from '@/lib/prompts';

const RETRY_DELAYS_MS = [10000, 30000, 60000];

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class OpenRouterService {
  private apiKey: string;
  private baseUrl = 'https://openrouter.ai/api/v1/chat/completions';

  constructor() {
    const key = process.env.OPENROUTER_API_KEY;
    if (!key) {
      throw new Error('OPENROUTER_API_KEY bulunamadı. Lütfen .env.local dosyanızı kontrol edin.');
    }
    this.apiKey = key;
  }

  /**
   * OpenRouter API üzerinden model çağrısı yapar.
   * 429 rate-limit hatalarında RETRY_DELAYS_MS sürelerine göre otomatik yeniden dener.
   * @param modelId OpenRouter'daki tam model ID'si (örn: google/gemini-1.5-pro)
   * @param prompt Kullanıcının girdiği prompt
   * @returns Üretilen içerik (string)
   */
  async generateCode(modelId: string, prompt: string): Promise<string> {
    let lastError: Error | null = null;

    for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt++) {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
          'X-Title': 'Loomina',
        },
        body: JSON.stringify({
          model: modelId,
          stream: false,
          messages: [
            {
              role: 'system',
              content: SYSTEM_CONSTRAINTS,
            },
            { role: 'user', content: prompt },
          ],
        }),
      });

      if (response.status === 429) {
        const errorData = await response.json().catch(() => ({}));
        const errMsg = errorData?.error?.message || errorData?.message || 'İstek sınırı aşıldı';
        lastError = new Error(`Rate limit aşıldı (429): ${errMsg}`);

        if (attempt >= RETRY_DELAYS_MS.length) break;

        const retryAfterHeader = response.headers.get('Retry-After');
        const waitMs = retryAfterHeader
          ? Math.min(parseInt(retryAfterHeader, 10) * 1000, 70_000)
          : RETRY_DELAYS_MS[attempt];
        console.warn(`[OpenRouter] ${modelId} — 429 rate limit (${errMsg}), ${waitMs / 1000}s bekleniyor... (deneme ${attempt + 1}/${RETRY_DELAYS_MS.length})`);
        await sleep(waitMs);
        continue;
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errMsg = errorData?.error?.message || errorData?.message || JSON.stringify(errorData);
        throw new Error(`OpenRouter Hatası (${response.status}): ${errMsg}`);
      }

      const data = await response.json();

      if (!data.choices || data.choices.length === 0) {
        const errMsg = data?.error?.message || data?.message || 'API geçerli bir cevap döndürmedi.';
        throw new Error(errMsg);
      }

      const choice = data.choices[0];
      const finishReason = choice.finish_reason;

      if (finishReason === 'terminated' || finishReason === 'error') {
        throw new Error(`Model yanıtı tamamlanamadı (finish_reason: ${finishReason}). Lütfen tekrar deneyin.`);
      }

      const content = choice.message?.content;
      if (!content) {
        throw new Error('Model boş yanıt döndürdü. Lütfen tekrar deneyin.');
      }

      return content;
    }

    throw lastError ?? new Error('Rate limit aşıldı, tüm denemeler başarısız oldu. Lütfen birkaç dakika bekleyip tekrar deneyin.');
  }
}
