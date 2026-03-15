export class OpenAIService {
  async generate(prompt: string): Promise<string> {
    // Burada ileride resmi OpenAI SDK'sı veya axios kullanılacak
    // Örnek bekleme süresi:
    await new Promise(r => setTimeout(r, 1500));
    return `[OpenAI] "${prompt}" promptu için oluşturulan yanıt.`;
  }
}