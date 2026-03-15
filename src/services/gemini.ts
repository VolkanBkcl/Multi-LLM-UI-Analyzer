export class GeminiService {
  async generate(prompt: string): Promise<string> {
    // Google Gemini API çağrısı
    await new Promise(r => setTimeout(r, 1200));
    return `[Gemini] "${prompt}" promptu için oluşturulan yanıt.`;
  }
}