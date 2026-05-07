import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `Sen kıdemli bir yazılım geliştirici ve kod inceleme uzmanısın. Sana bir kullanıcı isteği (prompt) ve bu isteğe yanıt olarak üretilmiş bir kod verilecek. Kodu 5 temel kritere göre (okunabilirlik, performans, güvenlik, sürdürülebilirlik, prompt uyumu) analiz etmeli ve her birini 0-100 arasında puanlamalısın. Ayrıca her kategori için çok kısa (1-2 cümlelik) geliştirme önerileri sunmalısın.

"promptAdherence" (prompt uyumu) kriteri: Üretilen kodun kullanıcının isteğini ne kadar eksiksiz ve doğru karşıladığını ölçer.

SADECE VE SADECE AŞAĞIDAKİ JSON FORMATINDA YANIT VER. BAŞKA HİÇBİR METİN VEYA AÇIKLAMA EKLEME. Dönen yanıt doğrudan JSON.parse() ile işlenecektir, o yüzden json formatının dışına çıkma.

{
  "readability": Puan (0-100),
  "performance": Puan (0-100),
  "security": Puan (0-100),
  "maintainability": Puan (0-100),
  "promptAdherence": Puan (0-100),
  "suggestions": {
    "readability": ["Öneri 1", "Öneri 2"],
    "performance": ["Öneri 1", "Öneri 2"],
    "security": ["Öneri 1", "Öneri 2"],
    "maintainability": ["Öneri 1", "Öneri 2"],
    "promptAdherence": ["Öneri 1", "Öneri 2"]
  }
}`;

const JUDGE_MODELS = [
  "deepseek/deepseek-v4-pro",
  "x-ai/grok-4.3",
];

const SUPPORTS_JSON_FORMAT = new Set([
  "deepseek/deepseek-v4-pro",
  "x-ai/grok-4.3",
]);

type JudgeResult = {
  model: string;
  readability: number;
  performance: number;
  security: number;
  maintainability: number;
  promptAdherence: number;
  suggestions: {
    readability: string[];
    performance: string[];
    security: string[];
    maintainability: string[];
    promptAdherence: string[];
  };
};

async function callJudge(model: string, code: string, prompt: string): Promise<JudgeResult> {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      ...(SUPPORTS_JSON_FORMAT.has(model) ? { response_format: { type: "json_object" } } : {}),
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `Kullanıcının isteği:\n${prompt}\n\nÜretilen kod:\n${code}` }
      ]
    })
  });

  if (!response.ok) {
    throw new Error(`${model} — OpenRouter API Hatası: ${response.statusText}`);
  }

  const data = await response.json();
  const resultText = data.choices?.[0]?.message?.content || '';

  if (!resultText) {
    throw new Error(`${model} — LLM yanıtı boş döndü.`);
  }

  const cleanedJsonStr = resultText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
  const parsed = JSON.parse(cleanedJsonStr);

  return { model, ...parsed };
}

export async function POST(request: Request) {
  try {
    const { code, prompt } = await request.json();

    if (!code) {
      return NextResponse.json({ error: 'Analiz edilecek kod sağlanmadı.' }, { status: 400 });
    }

    const settled = await Promise.allSettled(
      JUDGE_MODELS.map((model) => callJudge(model, code, prompt ?? ''))
    );

    const successful = settled
      .filter((r): r is PromiseFulfilledResult<JudgeResult> => r.status === "fulfilled")
      .map((r) => r.value);

    if (successful.length === 0) {
      const errors = settled
        .filter((r): r is PromiseRejectedResult => r.status === "rejected")
        .map((r) => r.reason?.message || String(r.reason))
        .join('; ');
      throw new Error(`Tüm hakem modelleri başarısız oldu: ${errors}`);
    }

    const avg = (key: keyof Pick<JudgeResult, 'readability' | 'performance' | 'security' | 'maintainability' | 'promptAdherence'>) =>
      Math.round(successful.reduce((sum, r) => sum + (Number(r[key]) || 0), 0) / successful.length);

    const mergeSuggestions = (key: keyof JudgeResult['suggestions']) =>
      successful.flatMap((r) => r.suggestions?.[key] ?? []);

    const analysisResult = {
      readability: avg('readability'),
      performance: avg('performance'),
      security: avg('security'),
      maintainability: avg('maintainability'),
      promptAdherence: avg('promptAdherence'),
      judgeModels: successful.map((r) => r.model),
      suggestions: {
        readability: mergeSuggestions('readability'),
        performance: mergeSuggestions('performance'),
        security: mergeSuggestions('security'),
        maintainability: mergeSuggestions('maintainability'),
        promptAdherence: mergeSuggestions('promptAdherence'),
      },
    };

    return NextResponse.json({ result: analysisResult });

  } catch (error: any) {
    console.error("Kod analiz hatası:", error);
    return NextResponse.json(
      { error: 'Analiz işlemi başarısız oldu.', details: error.message },
      { status: 500 }
    );
  }
}
