/**
 * Üretilen kodu tarayıcıda render edilebilir bir HTML belgesine dönüştürür.
 *
 * Üç tür çıktı desteklenir:
 *   1) Tam HTML belgesi (kendi <!DOCTYPE html> + Tailwind'ini taşır) → olduğu gibi kullanılır.
 *   2) React/JSX (component veya bare JSX) → Babel Standalone + React/ReactDOM + lucide-react
 *      (esm.sh importmap) + Tailwind enjekte edilerek gerçek bir React uygulaması olarak render edilir.
 *   3) Statik HTML parçası → Tailwind CDN içeren standart bir belgeye sarılır.
 *
 * Böylece HTML, JSX ve "sadece bileşen" döndüren modeller önizlemede adil ve doğru render edilir.
 */

const stripMarkdownFences = (raw: string): string =>
  (raw ?? '')
    .replace(/```(tsx|jsx|javascript|js|html|css)\n?/gi, '')
    .replace(/```/g, '')
    .trim();

/** Kod React/JSX mi? (statik HTML `class=` kullanır; JSX `className=` kullanır → ayrışır.) */
const isReactCode = (code: string): boolean =>
  /\bfrom\s+['"]react['"]/.test(code) ||
  /\bimport\s+React\b/.test(code) ||
  /\bexport\s+default\b/.test(code) ||
  /\buse(State|Effect|Ref|Memo|Callback)\s*\(/.test(code) ||
  /className=/.test(code);

const isFullHtmlDocument = (code: string): boolean =>
  /<!doctype html/i.test(code) || /<html[\s>]/i.test(code);

/**
 * React kodunu mount edilebilir hale getirir:
 *  - `export default X` → `var __LoominaDefault = X` (ESM'de default export'a dışarıdan erişilemez)
 *  - diğer named `export` anahtar sözcükleri kaldırılır (tüketilmiyor)
 *  - bare JSX fragment (kod `<` ile başlıyorsa) bir bileşene sarılır
 */
const transformReactCode = (code: string): string => {
  // <script> kaçışı (kod string içinde </script> taşıyabilir)
  let out = code.replace(/<\/script>/gi, '<\\/script>');

  const hasDefault = /export\s+default\b/.test(out);
  if (hasDefault) {
    out = out.replace(/export\s+default\s+/, 'var __LoominaDefault = ');
  }
  // named export anahtar sözcüklerini kaldır: `export const X` → `const X`
  out = out.replace(/\bexport\s+(?=(?:const|let|var|function|class|async)\b)/g, '');

  // export default yoksa ve kod doğrudan JSX ile başlıyorsa → bir bileşene sar
  if (!hasDefault && /^\s*</.test(out)) {
    out = `var __LoominaDefault = () => (\n<>\n${out}\n</>\n);`;
  }

  return out;
};

/** React/JSX çıktıları için Babel + importmap + Tailwind içeren sandbox belgesi. */
const buildReactPreviewDocument = (code: string): string => {
  const transformed = transformReactCode(code);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Loomina Önizleme (React)</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script type="importmap">
  {
    "imports": {
      "react": "https://esm.sh/react@18",
      "react/jsx-runtime": "https://esm.sh/react@18/jsx-runtime",
      "react-dom": "https://esm.sh/react-dom@18",
      "react-dom/client": "https://esm.sh/react-dom@18/client",
      "lucide-react": "https://esm.sh/lucide-react@0.460.0?deps=react@18",
      "framer-motion": "https://esm.sh/framer-motion?deps=react@18"
    }
  }
  </script>
  <style>
    body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
    #root { min-height: 100vh; }
    #loomina-error {
      display: none; white-space: pre-wrap; font-family: ui-monospace, monospace;
      font-size: 13px; color: #b91c1c; background: #fef2f2; border: 1px solid #fecaca;
      border-radius: 12px; padding: 16px; margin: 16px;
    }
  </style>
  <script>
    window.__loominaShowError = function (err) {
      var el = document.getElementById('loomina-error');
      if (!el) return;
      el.style.display = 'block';
      var msg = (err && (err.stack || err.message)) || String(err);
      el.textContent = 'Önizleme hatası:\\n' + msg;
    };
    window.addEventListener('error', function (e) { window.__loominaShowError(e.error || e.message); });
    window.addEventListener('unhandledrejection', function (e) { window.__loominaShowError(e.reason); });
  </script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>
  <pre id="loomina-error"></pre>
  <script type="text/babel" data-type="module" data-presets="react">
${transformed}

import __React from 'react';
import { createRoot as __createRoot } from 'react-dom/client';
(function () {
  try {
    if (typeof __LoominaDefault === 'undefined') {
      throw new Error('Render edilecek bir bileşen bulunamadı (kod "export default" içermiyor).');
    }
    __createRoot(document.getElementById('root')).render(__React.createElement(__LoominaDefault));
  } catch (err) {
    window.__loominaShowError && window.__loominaShowError(err);
  }
})();
  </script>
</body>
</html>`;
};

/** Statik HTML parçası için Tailwind CDN içeren standart belge. */
const buildHtmlPreviewDocument = (code: string): string => `<!DOCTYPE html>
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

export const buildPreviewDocument = (rawCode: string): string => {
  const code = stripMarkdownFences(rawCode);

  // 1) Zaten tam HTML belgesi → dokunma (kendi Tailwind'ini taşıyor olabilir)
  if (isFullHtmlDocument(code)) return code;

  // 2) React/JSX → Babel sandbox
  if (isReactCode(code)) return buildReactPreviewDocument(code);

  // 3) Statik HTML parçası → Tailwind enjeksiyonlu sarmalayıcı
  return buildHtmlPreviewDocument(code);
};

export const openCodeInNewTab = (code: string) => {
  if (!code) return;

  // Tailwind/React enjeksiyonu ile normalize edilmiş belgeyi Blob olarak oluştur.
  const html = buildPreviewDocument(code);
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  // Yeni sekmede güvenlik önlemleriyle (noopener noreferrer) aç
  const newTab = window.open(url, '_blank', 'noopener,noreferrer');

  if (newTab) {
    // Hafıza sızıntısını (memory leak) önlemek için Blob URL'sini bir süre sonra temizle.
    // React sandbox'ın Babel + CDN modüllerini indirmesi için daha uzun bir gecikme veriyoruz.
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 15000);
  } else {
    // Eğer tarayıcı popup açılışını engellediyse, hafızayı hemen temizle
    URL.revokeObjectURL(url);
    alert("Yeni sekme açılamadı. Lütfen tarayıcınızın açılır pencere (popup) engelleyicisini devre dışı bırakın.");
  }
};
