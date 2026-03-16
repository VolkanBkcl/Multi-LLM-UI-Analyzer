/**
 * LLM'den gelen Markdown formatındaki metinden sadece en büyük veya ilk kod bloğunu çıkarır.
 * Eğer kod bloğu bulamazsa metnin kendisini döndürür.
 */
export function extractCodeFromMarkdown(text: string): string {
  if (!text) return '';

  // 1. Önce en standart markdown kod bloklarını arayalım (```html ... ``` veya ```jsx ... ``` vb.)
  // Modeli bazen dil ismini yazmadan sadece ``` ile kod bloğu açabilir.
  const blockRegex = /```[\w]*\n([\s\S]*?)```/;
  const match = text.match(blockRegex);

  if (match && match[1]) {
    return match[1].trim(); // Sadece kodun kendisini döndür
  }

  // 2. Eğer markdown bloğu (```) hiç yoksa ama içeride <html> veya <button> gibi etiketlerle başlayan 
  // büyük bir yığın varsa, temel bir HTML ayıklaması deneyebiliriz (opsiyonel fallback)
  const htmlRegex = /(<[a-z][\s\S]*>)/i;
  const htmlMatch = text.match(htmlRegex);
  
  if (htmlMatch && htmlMatch[1]) {
     return htmlMatch[1].trim();
  }

  // Hiçbir şekilde kod bloğu veya HTML yapısı bulamazsa, LLM sadece düz metin (özür dilerim vb.) yazmıştır.
  // Bu durumda metnin tamamını temizleyerek geri ver.
  return text.trim();
}
