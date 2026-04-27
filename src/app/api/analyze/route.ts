import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `Sen kıdemli bir yazılım geliştirici ve kod inceleme uzmanısın. Sana verilen kodu 4 temel kritere göre (okunabilirlik, performans, güvenlik, sürdürülebilirlik) analiz etmeli ve 0-10 arasında puanlamalısın. Ayrıca her kategori için çok kısa (1-2 cümlelik) geliştirme önerileri sunmalısın.

SADECE VE SADECE AŞAĞIDAKİ JSON FORMATINDA YANIT VER. BAŞKA HİÇBİR METİN VEYA AÇIKLAMA EKLEME. Dönen yanıt doğrudan JSON.parse() ile işlenecektir, o yüzden json formatının dışına çıkma.

{
  "readability": Puan,
  "performance": Puan,
  "security": Puan,
  "maintainability": Puan,
  "suggestions": {
    "readability": ["Öneri 1", "Öneri 2"],
    "performance": ["Öneri 1", "Öneri 2"],
    "security": ["Öneri 1", "Öneri 2"],
    "maintainability": ["Öneri 1", "Öneri 2"]
  }
}`;

export async function POST(request: Request) {
  try {
    const { code } = await request.json();

    if (!code) {
      return NextResponse.json({ error: 'Analiz edilecek kod sağlanmadı.' }, { status: 400 });
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini",
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: `Lütfen şu kodu analiz et:\n\n${code}` }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`OpenRouter API Hatası: ${response.statusText}`);
    }

    const data = await response.json();
    const resultText = data.choices?.[0]?.message?.content || '';
    
    if (!resultText) {
       throw new Error('LLM yanıtı boş döndü.');
    }
    
    // Clean potential markdown backticks before JSON parsing
    const cleanedJsonStr = resultText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const analysisResult = JSON.parse(cleanedJsonStr);

    return NextResponse.json({ result: analysisResult });

  } catch (error: any) {
    console.error("Kod analiz hatası:", error);
    return NextResponse.json(
      { error: 'Analiz işlemi başarısız oldu.', details: error.message },
      { status: 500 }
    );
  }
}
