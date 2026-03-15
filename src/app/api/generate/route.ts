import { NextResponse } from 'next/server';
import { LLMProviderFactory } from '@/services/provider';
import { ModelProvider } from '@/store/useBenchmarkStore';

interface GenerateRequest {
  prompt: string;
  models: ModelProvider[];
}

export async function POST(req: Request) {
  try {
    const body: GenerateRequest = await req.json();
    const { prompt, models } = body;

    if (!prompt || !models || models.length === 0) {
      return NextResponse.json({ error: 'Prompt ve model listesi zorunludur' }, { status: 400 });
    }

    // Aynı anda (paralel) tüm servislere istek atıyoruz (Provider Pattern)
    const promises = models.map(async (model) => {
      try {
        const service = LLMProviderFactory.getService(model);
        const startTime = Date.now();
        const content = await service.generate(prompt);
        const timeTakenMs = Date.now() - startTime;
        
        return { model, content, timeTakenMs, error: null };
      } catch (error: any) {
        return { model, content: null, timeTakenMs: 0, error: error.message };
      }
    });

    const results = await Promise.all(promises);

    return NextResponse.json({ results });
  } catch (error: any) {
    return NextResponse.json({ error: 'Sunucu Hatası', details: error.message }, { status: 500 });
  }
}