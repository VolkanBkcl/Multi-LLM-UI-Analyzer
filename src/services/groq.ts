export class GroqService {
  async generate(prompt: string): Promise<string> {
    // Groq (Llama vs.) API çağrısı
    await new Promise(r => setTimeout(r, 800)); // Groq genelde daha hızlıdır
    return `[Groq] "${prompt}" promptu için oluşturulan yanıt.`;
  }
}