/**
 * Üretilen kodu tarayıcıda render edilebilir bir HTML belgesine dönüştürür.
 *
 * Modeller iki tür çıktı verebilir:
 *   1) Tam HTML belgesi (kendi <!DOCTYPE html> + Tailwind CDN'ini taşır) → olduğu gibi kullanılır.
 *   2) Yalnızca bileşen parçası (bir <div> + Tailwind class'ları, boilerplate yok) → bu durumda
 *      Tailwind runtime'ı enjekte edilmezse tüm utility class'lar ölü kalır ve kötü render olur.
 *      Bu yüzden parçaları Tailwind CDN içeren standart bir belgeye sararız.
 *
 * Böylece "sadece bileşen döndüren" modeller ile "tam sayfa döndüren" modeller önizlemede
 * adil ve doğru şekilde render edilir.
 */
export const buildPreviewDocument = (rawCode: string): string => {
  // Markdown fence kalıntılarını temizle (ör. ```html ... ```).
  const code = (rawCode ?? '')
    .replace(/```html\n?/gi, '')
    .replace(/```javascript\n?/gi, '<script>\n')
    .replace(/```css\n?/gi, '<style>\n')
    .replace(/```/g, '\n')
    .trim();

  // Zaten tam bir HTML belgesi mi? (kendi Tailwind'ini taşıyor olabilir → dokunma)
  const isFullDocument = /<!doctype html/i.test(code) || /<html[\s>]/i.test(code);
  if (isFullDocument) return code;

  // Bileşen parçası → Tailwind CDN içeren standart belgeye sar.
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Loomina Önizleme</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
  </style>
</head>
<body>
${code}
</body>
</html>`;
};

export const openCodeInNewTab = (code: string) => {
  if (!code) return;

  // Tailwind enjeksiyonu/boilerplate ile normalize edilmiş belgeyi Blob olarak oluştur.
  const html = buildPreviewDocument(code);
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  // Yeni sekmede güvenlik önlemleriyle (noopener noreferrer) aç
  const newTab = window.open(url, '_blank', 'noopener,noreferrer');

  if (newTab) {
    // Hafıza sızıntısını (memory leak) önlemek için Blob URL'sini bir süre sonra temizle
    // Yeni sayfanın içeriği yüklemesi için kısa bir gecikme veriyoruz
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 5000);
  } else {
    // Eğer tarayıcı popup açılışını engellediyse, hafızayı hemen temizle
    URL.revokeObjectURL(url);
    alert("Yeni sekme açılamadı. Lütfen tarayıcınızın açılır pencere (popup) engelleyicisini devre dışı bırakın.");
  }
};
