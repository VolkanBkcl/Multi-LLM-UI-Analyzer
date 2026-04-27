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
   * OpenRouter API üzerinden model çağrısı yapar
   * @param modelId OpenRouter'daki tam model ID'si (örn: google/gemini-1.5-pro)
   * @param prompt Kullanıcının girdiği prompt
   * @returns Üretilen içerik (string)
   */
  async generateCode(modelId: string, prompt: string): Promise<string> {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        // İsteğe bağlı OpenRouter headers (Sitenizin adını ve adresini gösterir)
        'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
        'X-Title': 'Loomina',
      },
      body: JSON.stringify({
        model: modelId,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`OpenRouter Hatası (${response.status}): ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    
    if (!data.choices || data.choices.length === 0) {
      throw new Error('API geçerli bir cevap döndürmedi.');
    }

    return data.choices[0].message.content;
  }
}
