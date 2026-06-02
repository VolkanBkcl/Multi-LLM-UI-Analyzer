/**
 * LLM'den gelen Markdown formatındaki metinden kod bloğunu çıkarır.
 *
 * ÖNEMLİ: Üretilen kod (özellikle AI sohbet/IDE arayüzleri) kendi içinde markdown kod bloğu (```)
 * taşıyabilir — örn. bir mesaj string'i `content: "Here's the code:\n```jsx\n...\n```"`. Bu yüzden
 * NON-GREEDY (ilk kapanışa kadar) ayıklama erken keser ve kodun büyük kısmı kaybolur. Bunun yerine
 * İLK açılış fence'inden SON kapanış fence'ine kadar olan içeriği alırız (iç ```'leri kodun parçası sayar).
 *
 * Kod bloğu bulamazsa HTML yapısına, o da yoksa metnin kendisine düşer.
 */
export function extractCodeFromMarkdown(text: string): string {
  if (!text) return '';
  const trimmed = text.trim();

  const fences = [...trimmed.matchAll(/```/g)];
  if (fences.length >= 2) {
    const firstFenceIdx = fences[0].index ?? 0;
    // İlk fence satırındaki dil etiketini (```jsx) atla: o satırın sonundaki newline'dan sonrası kod.
    const newlineAfterOpen = trimmed.indexOf('\n', firstFenceIdx);
    const start = newlineAfterOpen === -1 ? firstFenceIdx + 3 : newlineAfterOpen + 1;
    const lastFenceIdx = fences[fences.length - 1].index ?? trimmed.length;
    if (lastFenceIdx > start) {
      return trimmed.slice(start, lastFenceIdx).trim();
    }
  }

  // Tek/0 fence → klasik (non-greedy) tek blok denemesi.
  const blockRegex = /```[\w]*\n([\s\S]*?)```/;
  const match = trimmed.match(blockRegex);
  if (match && match[1]) {
    return match[1].trim();
  }

  // Fence yoksa ama <html>/<div>/<button> gibi bir etiketle başlayan büyük bir yığın varsa onu al.
  const htmlRegex = /(<[a-z][\s\S]*>)/i;
  const htmlMatch = trimmed.match(htmlRegex);
  if (htmlMatch && htmlMatch[1]) {
    return htmlMatch[1].trim();
  }

  // Hiçbir kod yapısı yoksa metnin kendisini döndür (model düz metin / özür yazmış olabilir).
  return trimmed;
}
