import { NextResponse } from 'next/server';
import { runEvaluation } from '@/lib/evaluation/orchestrator';
import { SYSTEM_CONSTRAINTS } from '@/lib/prompts';

// fs ile rubrik dosyalarını okuduğumuz için Node.js runtime zorunlu.
export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const { code, prompt } = await request.json();

    if (!code) {
      return NextResponse.json({ error: 'Analiz edilecek kod sağlanmadı.' }, { status: 400 });
    }

    const result = await runEvaluation(code, prompt ?? '', SYSTEM_CONSTRAINTS);

    return NextResponse.json({ result });
  } catch (error: any) {
    console.error('Kod analiz hatası:', error);
    return NextResponse.json(
      { error: 'Analiz işlemi başarısız oldu.', details: error.message },
      { status: 500 },
    );
  }
}
