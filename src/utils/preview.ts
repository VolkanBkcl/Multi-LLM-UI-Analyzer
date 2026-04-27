export const openCodeInNewTab = (code: string) => {
  if (!code) return;

  // LLM'den gelen kodun bir HTML sayfası olduğunu varsayarak Blob oluşturuyoruz
  const blob = new Blob([code], { type: 'text/html;charset=utf-8' });
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
