# Loomina — Model Karşılaştırma Raporu

- **Tarih:** 02.06.2026 14:10:17
- **Karşılaştırılan Model Sayısı:** 3

## Kullanıcı Promptu

Create a clean menu item button component for a restaurant POS system. It should display a food icon placeholder, item name, price, and a small 'Quick Add' badge in the corner. Use Tailwind CSS. Do not write any explanations, output only the code.

## Karşılaştırma Tablosu

| Model | Genel | Okunabilirlik | Performans | Güvenlik | Sürdürülebilirlik | Prompt Uyumu |
|---|---|---|---|---|---|---|
| DeepSeek V4 Pro | 71 | 55 | 82 | 96 | 22 | 98 |
| Qwen3.6 Plus | 88 | 77 | 93 | 94 | 77 | 99 |
| Gemini 3.5 Flash | 84 | 90 | 96 | 98 | 39 | 95 |

---

# Loomina Analiz Raporu — DeepSeek V4 Pro

- **Model:** `deepseek/deepseek-v4-pro`
- **Tarih:** 02.06.2026 14:10:17
- **Üretim Süresi:** 66734 ms
- **Genel Skor:** 71/100
- **Karar Yöntemi:** Tahkim (J3)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3, x-ai/grok-4.3
- **J3 (Tahkimci) çağrılan metrikler:** Okunabilirlik, Performans

## Kullanıcı Promptu

Create a clean menu item button component for a restaurant POS system. It should display a food icon placeholder, item name, price, and a small 'Quick Add' badge in the corner. Use Tailwind CSS. Do not write any explanations, output only the code.

## Üretilen Kod

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurant POS - Menu Item Button</title>
    <script src="https://cdn.tailwindcss.com">
    </script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        body {
            font-family: 'Inter', sans-serif;
            background: #f1f5f9;
        }

        @keyframes badge-pulse {
            0%,
            100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.08);
            }
        }

        .menu-card {
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .menu-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.15), 0 4px 12px -4px rgba(0, 0, 0, 0.08);
        }

        .menu-card:active {
            transform: translateY(-1px) scale(0.985);
            transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .menu-card:hover .badge-quick-add {
            animation: badge-pulse 0.6s ease-in-out;
        }

        .icon-placeholder {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #fcd34d 100%);
        }

        .icon-placeholder svg {
            filter: drop-shadow(0 2px 4px rgba(251, 146, 60, 0.3));
        }

        .badge-quick-add {
            background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4), 0 1px 3px rgba(0, 0, 0, 0.1);
            transition: all 0.2s ease;
        }

        .menu-card:hover .badge-quick-add {
            box-shadow: 0 6px 20px rgba(99, 102, 241, 0.55), 0 2px 6px rgba(0, 0, 0, 0.12);
        }

        .price-tag {
            letter-spacing: -0.02em;
        }
    </style>
</head>
<body class="min-h-screen flex items-center justify-center p-6">

    <!-- Grid of Menu Item Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full max-w-6xl">

        <!-- Card 1: Burger -->
        <button
        class="menu-card relative w-full bg-white rounded-2xl p-5 text-left cursor-pointer border border-gray-100/80 shadow-lg shadow-gray-200/50 hover:shadow-xl group"
        aria-label="Classic Burger - $8.99 - Quick Add"
    >
        <!-- Quick Add Badge -->
        <div class="badge-quick-add absolute -top-2.5 -right-2.5 z-10 flex items-center gap-1 px-3 py-1.5 rounded-full text-white text-[11px] font-semibold uppercase tracking-wider leading-none">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
            </svg>
            <span>Quick Add</span>
        </div>

        <!-- Icon Placeholder -->
        <div class="icon-placeholder w-14 h-14 rounded-xl flex items-center justify-center mb-4">
            <svg class="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 6c0-1.1.9-2 2-2h2.4c.6 0 1.1.4 1.3 1l.4 1H20c.6 0 1.1.2 1.4.6.4.4.6.9.5 1.4l-1.2 7.2c-.2 1-.9 1.8-1.9 1.8H7.6c-1 0-1.8-.8-1.9-1.8L4 8.4V8H5c.6 0 1-.4 1-1s-.4-1-1-1H5c-1.1 0-2-.9-2-2zm5.4 2l1 5.6c.1.3.3.4.6.4h8.4c.3 0 .5-.2.6-.5L20 8H8.4zM7 21c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm10 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
            </svg>
        </div>

        <!-- Item Name -->
        <h3 class="text-gray-800 font-semibold text-[15px] leading-tight mb-1.5 group-hover:text-gray-900 transition-colors">
            Classic Burger
        </h3>

        <!-- Price -->
        <p class="price-tag text-indigo-600 font-bold text-lg">
            $8.99
        </p>
    </button>

    <!-- Card 2: Margherita Pizza -->
    <button
    class="menu-card relative w-full bg-white rounded-2xl p-5 text-left cursor-pointer border border-gray-100/80 shadow-lg shadow-gray-200/50 hover:shadow-xl group"
    aria-label="Margherita Pizza - $12.49 - Quick Add"
>
    <div class="badge-quick-add absolute -top-2.5 -right-2.5 z-10 flex items-center gap-1 px-3 py-1.5 rounded-full text-white text-[11px] font-semibold uppercase tracking-wider leading-none">
        <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
        </svg>
        <span>Quick Add</span>
    </div>
    <div class="icon-placeholder w-14 h-14 rounded-xl flex items-center justify-center mb-4">
        <svg class="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-11h2v2h-2zm0 4h2v6h-2z"/>
        </svg>
    </div>
    <h3 class="text-gray-800 font-semibold text-[15px] leading-tight mb-1.5 group-hover:text-gray-900 transition-colors">
        Margherita Pizza
    </h3>
    <p class="price-tag text-indigo-600 font-bold text-lg">$12.49</p>
</button>

<!-- Card 3: Chicken Wrap -->
<button
class="menu-card relative w-full bg-white rounded-2xl p-5 text-left cursor-pointer border border-gray-100/80 shadow-lg shadow-gray-200/50 hover:shadow-xl group"
aria-label="Chicken Wrap - $7.99 - Quick Add"
>
<div class="badge-quick-add absolute -top-2.5 -right-2.5 z-10 flex items-center gap-1 px-3 py-1.5 rounded-full text-white text-[11px] font-semibold uppercase tracking-wider leading-none">
    <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
    </svg>
    <span>Quick Add</span>
</div>
<div class="icon-placeholder w-14 h-14 rounded-xl flex items-center justify-center mb-4">
    <svg class="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 6h-2v9H5V6H3v9c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6zm-6-4H9c-1.1 0-2 .9-2 2v1h10V4c0-1.1-.9-2-2-2zm1 5H8v1h8V7z"/>
    </svg>
</div>
<h3 class="text-gray-800 font-semibold text-[15px] leading-tight mb-1.5 group-hover:text-gray-900 transition-colors">
    Chicken Wrap
</h3>
<p class="price-tag text-indigo-600 font-bold text-lg">$7.99</p>
</button>

<!-- Card 4: Sushi Roll -->
<button
class="menu-card relative w-full bg-white rounded-2xl p-5 text-left cursor-pointer border border-gray-100/80 shadow-lg shadow-gray-200/50 hover:shadow-xl group"
aria-label="Sushi Roll - $15.99 - Quick Add"
>
<div class="badge-quick-add absolute -top-2.5 -right-2.5 z-10 flex items-center gap-1 px-3 py-1.5 rounded-full text-white text-[11px] font-semibold uppercase tracking-wider leading-none">
    <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
    </svg>
    <span>Quick Add</span>
</div>
<div class="icon-placeholder w-14 h-14 rounded-xl flex items-center justify-center mb-4">
    <svg class="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="3" fill="#fef3c7"/>
    </svg>
</div>
<h3 class="text-gray-800 font-semibold text-[15px] leading-tight mb-1.5 group-hover:text-gray-900 transition-colors">
    Sushi Roll
</h3>
<p class="price-tag text-indigo-600 font-bold text-lg">$15.99</p>
</button>

<!-- Card 5: Pasta Alfredo -->
<button
class="menu-card relative w-full bg-white rounded-2xl p-5 text-left cursor-pointer border border-gray-100/80 shadow-lg shadow-gray-200/50 hover:shadow-xl group"
aria-label="Pasta Alfredo - $10.99 - Quick Add"
>
<div class="badge-quick-add absolute -top-2.5 -right-2.5 z-10 flex items-center gap-1 px-3 py-1.5 rounded-full text-white text-[11px] font-semibold uppercase tracking-wider leading-none">
    <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
    </svg>
    <span>Quick Add</span>
</div>
<div class="icon-placeholder w-14 h-14 rounded-xl flex items-center justify-center mb-4">
    <svg class="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
    </svg>
</div>
<h3 class="text-gray-800 font-semibold text-[15px] leading-tight mb-1.5 group-hover:text-gray-900 transition-colors">
    Pasta Alfredo
</h3>
<p class="price-tag text-indigo-600 font-bold text-lg">$10.99</p>
</button>

<!-- Card 6: Ice Cream Sundae -->
<button
class="menu-card relative w-full bg-white rounded-2xl p-5 text-left cursor-pointer border border-gray-100/80 shadow-lg shadow-gray-200/50 hover:shadow-xl group"
aria-label="Ice Cream Sundae - $5.49 - Quick Add"
>
<div class="badge-quick-add absolute -top-2.5 -right-2.5 z-10 flex items-center gap-1 px-3 py-1.5 rounded-full text-white text-[11px] font-semibold uppercase tracking-wider leading-none">
    <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
    </svg>
    <span>Quick Add</span>
</div>
<div class="icon-placeholder w-14 h-14 rounded-xl flex items-center justify-center mb-4">
    <svg class="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.5 6.5C17.5 4 15.5 2 12 2S6.5 4 6.5 6.5c0 1.8.9 3.4 2.3 4.3-1.4.9-2.3 2.5-2.3 4.3 0 2.8 2.2 5 5 5s5-2.2 5-5c0-1.8-.9-3.4-2.3-4.3 1.4-.9 2.3-2.5 2.3-4.3zM12 4c1.9 0 3.5 1.1 3.5 2.5S13.9 9 12 9 8.5 7.9 8.5 6.5 10.1 4 12 4zm0 16c-1.9 0-3.5-1.6-3.5-3.5S10.1 13 12 13s3.5 1.6 3.5 3.5S13.9 20 12 20z"/>
    </svg>
</div>
<h3 class="text-gray-800 font-semibold text-[15px] leading-tight mb-1.5 group-hover:text-gray-900 transition-colors">
    Ice Cream Sundae
</h3>
<p class="price-tag text-indigo-600 font-bold text-lg">$5.49</p>
</button>

<!-- Card 7: Grilled Salmon -->
<button
class="menu-card relative w-full bg-white rounded-2xl p-5 text-left cursor-pointer border border-gray-100/80 shadow-lg shadow-gray-200/50 hover:shadow-xl group"
aria-label="Grilled Salmon - $18.99 - Quick Add"
>
<div class="badge-quick-add absolute -top-2.5 -right-2.5 z-10 flex items-center gap-1 px-3 py-1.5 rounded-full text-white text-[11px] font-semibold uppercase tracking-wider leading-none">
    <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
    </svg>
    <span>Quick Add</span>
</div>
<div class="icon-placeholder w-14 h-14 rounded-xl flex items-center justify-center mb-4">
    <svg class="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-1-6.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm5 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/>
    </svg>
</div>
<h3 class="text-gray-800 font-semibold text-[15px] leading-tight mb-1.5 group-hover:text-gray-900 transition-colors">
    Grilled Salmon
</h3>
<p class="price-tag text-indigo-600 font-bold text-lg">$18.99</p>
</button>

<!-- Card 8: Caesar Salad -->
<button
class="menu-card relative w-full bg-white rounded-2xl p-5 text-left cursor-pointer border border-gray-100/80 shadow-lg shadow-gray-200/50 hover:shadow-xl group"
aria-label="Caesar Salad - $6.99 - Quick Add"
>
<div class="badge-quick-add absolute -top-2.5 -right-2.5 z-10 flex items-center gap-1 px-3 py-1.5 rounded-full text-white text-[11px] font-semibold uppercase tracking-wider leading-none">
    <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
    </svg>
    <span>Quick Add</span>
</div>
<div class="icon-placeholder w-14 h-14 rounded-xl flex items-center justify-center mb-4">
    <svg class="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/>
    </svg>
</div>
<h3 class="text-gray-800 font-semibold text-[15px] leading-tight mb-1.5 group-hover:text-gray-900 transition-colors">
    Caesar Salad
</h3>
<p class="price-tag text-indigo-600 font-bold text-lg">$6.99</p>
</button>

</div>

</body>
</html>
```

## Hakem Skor Dökümü (J1 / J2 / J3)

| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |
|---|---|---|---|---|---|
| Okunabilirlik | 72 | 42 | 55 | **55** | Medyan (J1·J2·J3) — tahkim |
| Performans | 100 | 76 | 82 | **82** | Medyan (J1·J2·J3) — tahkim |
| Güvenlik | 100 | 92 | — | **96** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 22 | 22 | — | **22** | Ortalama (J1-J2) |
| Prompt Uyumu | 98 | 97 | — | **98** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 55/100

**Öneriler:**
- Her kartta tekrar eden "Quick Add" rozeti ve "icon-placeholder" yapısı birer yardımcı bileşen (ör. `<MenuItem badge>`) haline getirilerek kod tekrarı (DRY) azaltılmalı.
- Satır içi SVG ikonları (burger, pizza vb.) bir dizi veya `<template>` içinde yönetmek ve dinamik olarak yerleştirmek, kod hacmini düşürüp bakımını kolaylaştıracaktır.
- Kartı tek bir şablona (data dizisi + map/ngFor/v-for) dönüştürerek 8 kez tekrarlanan ~30 satırlık bloğu sadeleştirin; bu hem okunabilirliği hem bakımı iyileştirir.
- Tüm kartlardaki girintilemeyi aynı seviyeye getirin, Tailwind class zincirlerini birden fazla satıra bölün ve uzun class listelerini `@apply` ile özel utility class'lara taşıyarak satır uzunluğunu düşürün.

### Performans — 82/100

**Öneriler:**
- Tailwind CSS CDN yerine build süreciyle sadece kullanılan sınıfları içeren optimize bir CSS çıktısı kullanılması sayfa yükleme süresini iyileştirebilir.
- Google Fonts yüklemesi gereksiz FOIT/FOUT'a neden olabilir; font-display: swap kullanılması veya fontların lokal olarak sunulması düşünülebilir.
- Google Fonts için `<style>` içindeki `@import` yerine `<head>` içinde `<link rel="preconnect">` + `<link rel="stylesheet">` kullanarak render-blocking'i ortadan kaldırın.
- `transition: all` yerine yalnızca değişen özellikleri (örn. `transform, box-shadow`) belirtin ve yinelenen SVG ikonlarını `<symbol>`/`<use>` ile tekilleştirerek DOM ve paint maliyetini düşürün.

### Güvenlik — 96/100

**Öneriler:**
- While not applicable here, if this component were to be integrated into a React app, avoid using dangerouslySetInnerHTML for dynamic content and sanitize any AI-generated or user-provided data with a library like DOMPurify.
- Ensure that if this component is used in a larger application, API communications use HTTPS and tokens are stored securely in HTTP-only cookies rather than localStorage.
- cdn.tailwindcss.com ve Google Fonts CDN bağlantılarına integrity ve crossorigin öznitelikleri ekleyerek SRI (Subresource Integrity) koruması sağlayın.
- Üretim (production) ortamı için Content-Security-Policy meta etiketi ekleyerek inline kaynak kullanımını sınırlandırın ve Tailwind CDN'i yerine build edilmiş CSS kullanın.

### Sürdürülebilirlik — 22/100

**Öneriler:**
- Kart yapısını bir JavaScript/React bileşeni veya en azından bir template haline getirip menü verilerini bir diziden render ederek tekrarı önleyin.
- Sabit ikon, renk ve stil tanımlarını ayrı bir CSS/JS konfigürasyon dosyasına çıkarın; magic string kullanımını bitirip Tailwind theme veya CSS custom property kullanın.
- Tek bir yeniden kullanılabilir bileşen (React/Vue/web component) tanımlayıp menü öğelerini bir veri dizisinden (`menuItems.map(...)`) render edin; böylece değişiklik tek yerden yapılır.
- Ortak stilleri (`.menu-card`, `.badge-quick-add`, `.icon-placeholder`) bir `constants.ts` veya design-token dosyasına çıkarın ve Tailwind theme.extend ile merkezileştirerek magic string'leri ortadan kaldırın.

### Prompt Uyumu — 98/100

- Programatik: 100/100 · Semantik: 95/100
- İhlaller: yok

**Öneriler:**
- Yemek ikonu için metin etiketi değil de daha uygun bir yedek metin (alt metin) kullanarak erişilebilirliği artırabilirsiniz.
- Butona 'hover' efekti zaten var ancak 'focus' durumu için görsel bir ipucu eklenmesi klavye kullanıcıları için faydalı olur.
- Prompt bir 'menu item button component' istiyor; 8 örnek yerine tek bir component (örn. React/HTML snippet) sunulup ardından kısa bir demo grid gösterilebilir, böylece talimata daha sıkı sadık kalınır.
- İkonlar 'placeholder' olarak istenmiş; daha açık bir placeholder stili (örn. arka plan sade, içinde '🍔' emoji veya initials) kullanılarak talimatın literal anlamı daha net karşılanabilir.


---

# Loomina Analiz Raporu — Qwen3.6 Plus

- **Model:** `qwen/qwen3.6-plus`
- **Tarih:** 02.06.2026 14:10:17
- **Üretim Süresi:** 46783 ms
- **Genel Skor:** 88/100
- **Karar Yöntemi:** Konsensüs (iki hakem ortalaması)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3
- **J3 (Tahkimci) çağrılan metrikler:** Yok — iki hakem tüm metriklerde uzlaştı.

## Kullanıcı Promptu

Create a clean menu item button component for a restaurant POS system. It should display a food icon placeholder, item name, price, and a small 'Quick Add' badge in the corner. Use Tailwind CSS. Do not write any explanations, output only the code.

## Üretilen Kod

```html
import React from 'react';

const MenuItemButton = ({ name, price, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative flex flex-col w-full p-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-indigo-300 hover:-translate-y-1 transition-all duration-200 cursor-pointer active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 group"
    >
      <span className="absolute top-2 right-2 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-md z-10">
        Quick Add
      </span>

      <div className="w-full h-24 bg-gray-50 rounded-lg mb-3 flex items-center justify-center group-hover:bg-indigo-50 transition-colors duration-200 overflow-hidden">
        {icon ? (
          <img src={icon} alt={name} className="w-full h-full object-cover" />
        ) : (
          <svg className="w-10 h-10 text-gray-300 group-hover:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )}
      </div>

      <div className="flex flex-col flex-1 justify-end text-left">
        <h3 className="text-sm font-semibold text-gray-800 truncate group-hover:text-indigo-600 transition-colors">
          {name}
        </h3>
        <p className="text-lg font-bold text-gray-900 mt-1">
          {price}
        </p>
      </div>
    </button>
  );
};

export default MenuItemButton;
```

## Hakem Skor Dökümü (J1 / J2 / J3)

| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |
|---|---|---|---|---|---|
| Okunabilirlik | 72 | 82 | — | **77** | Ortalama (J1-J2) |
| Performans | 95 | 90 | — | **93** | Ortalama (J1-J2) |
| Güvenlik | 100 | 88 | — | **94** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 82 | 72 | — | **77** | Ortalama (J1-J2) |
| Prompt Uyumu | 100 | 97 | — | **99** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 77/100

**Öneriler:**
- Tailwind sınıflarının uzunluğunu azaltmak ve anlamını netleştirmek için karmaşık grupları `classNames` veya CSS modülleri ile soyutlayın.
- Bileşen prop'ları için PropTypes veya TypeScript ile tip tanımı ekleyerek parametrelerin ne olduğunu açıklayın.
- Çok uzun className satırını mantıksal gruplara (layout, colors, hover, transition) ayırarak birden fazla satıra bölmek okunabilirliği artırır.
- Props için PropTypes veya kısa bir JSDoc ekleyerek beklenen tipleri (özellikle price formatı) belgelemek, başka geliştiriciler için anlamayı kolaylaştırır.

### Performans — 93/100

**Öneriler:**
- Eğer parent component sıkça re-render oluyor ve bu buton listelerde çok sayıda kullanılıyorsa, gereksiz render'ları önlemek için bileşeni React.memo ile sarmak faydalı olabilir.
- onClick prop'u parent'ta her render'da yeniden oluşan bir fonksiyon ise, parent'ta useCallback ile memoize edilmesi önerilir; böylece React.memo etkili çalışır.
- `transition-all` yerine yalnızca gerçekten değişen özellikleri listeleyen (örn. `transition-[box-shadow,transform,background-color,colors]`) bir utility kullanın; tarayıcı daha az özelliği izlemek zorunda kalır.
- Çok sayıda menü öğesi render edilecekse, SVG ikonu ayrı bir memoize edilmiş bileşene çıkararak her öğede tekrar eden DOM düğümü oluşumunu azaltın.

### Güvenlik — 94/100

**Öneriler:**
- Eğer ikon (icon) prop’u kullanıcı girdisinden alınıyorsa, javascript: veya data: gibi zararlı URL şemalarına karşı doğrulama eklemek iyi bir pratik olabilir.
- Fiyat (price) gibi verilerin backend'den geldiği durumda tür ve format kontrolü yapılması genel güvenliği artırır.
- Validate the `icon` prop URL (e.g., ensure it starts with `https://` or a relative path) to prevent loading resources from untrusted origins.
- If `name` or `price` could ever contain HTML or come from untrusted sources, consider explicit type/format validation at the prop boundary, though JSX escaping already mitigates this.

### Sürdürülebilirlik — 77/100

**Öneriler:**
- 'Quick Add' metnini prop olarak alıp varsayılan değer vererek veya ayrı bir sabitler dosyasına taşıyarak farklı bağlamlarda kullanımı kolaylaştırın.
- Varsayılan ikon SVG’sini ayrı bir Icon bileşeni olarak soyutlayıp, ikon seti güncellemelerinde tüm bileşenlerin etkilenmesini önleyin.
- 'Quick Add' metnini ve rengini bir `badge` prop'u olarak dışarıdan alın veya ayrı bir `<Badge>` alt bileşenine çıkararak yeniden kullanılabilirliği artırın.
- `name` ve `price` için varsayılan değerler (default props) veya TypeScript prop tipleri ekleyerek eksik veri durumlarında bileşenin güvenli çalışmasını sağlayın.

### Prompt Uyumu — 99/100

- Programatik: 100/100 · Semantik: 100/100
- İhlaller: yok

**Öneriler:**
- POS bağlamında daha uygun bir yemek ikonu (çatal‑bıçak vb.) kullanılması istenebilir, mevcut kamera ikonu biraz farklı çağrışım yapıyor.
- Fiyatın para birimi veya formatı (örn. '₺120,00') gösterilmesi kullanıcı deneyimini iyileştirebilir.
- The placeholder icon is a generic camera icon; using a more food-related SVG (utensils/plate) would better match the 'food icon placeholder' intent.
- Consider adding an explicit aria-label on the button to improve accessibility in a POS touch interface.


---

# Loomina Analiz Raporu — Gemini 3.5 Flash

- **Model:** `google/gemini-3.5-flash`
- **Tarih:** 02.06.2026 14:10:17
- **Üretim Süresi:** 12680 ms
- **Genel Skor:** 84/100
- **Karar Yöntemi:** Konsensüs (iki hakem ortalaması)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3
- **J3 (Tahkimci) çağrılan metrikler:** Yok — iki hakem tüm metriklerde uzlaştı.

## Kullanıcı Promptu

Create a clean menu item button component for a restaurant POS system. It should display a food icon placeholder, item name, price, and a small 'Quick Add' badge in the corner. Use Tailwind CSS. Do not write any explanations, output only the code.

## Üretilen Kod

```html
<button class="group relative flex flex-col justify-between w-full h-48 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-150 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-emerald-200 dark:hover:border-emerald-900/50 active:scale-[0.98] transition-all duration-200 select-none cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950">
  <!-- Top Row: Icon & Quick Add Badge -->
  <div class="flex items-start justify-between w-full">
    <!-- Food Icon Placeholder Container -->
    <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-200 ease-out">
      <!-- Lucide: Utensils / Food Plate Placeholder SVG -->
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
        <path d="M7 2v20" />
        <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
      </svg>
    </div>

    <!-- 'Quick Add' Badge -->
    <div class="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-200 shadow-sm">
      <span class="text-xs font-semibold tracking-wide uppercase">Add</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5">
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    </div>
  </div>

  <!-- Bottom Row: Item Info & Price -->
  <div class="w-full mt-auto">
    <!-- Item Name -->
    <h3 class="font-semibold text-slate-800 dark:text-slate-100 text-base leading-snug tracking-tight line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-150">
      Smoked Brisket Burger
    </h3>
    
    <!-- Price Tag -->
    <div class="flex items-baseline gap-1 mt-1.5">
      <span class="text-xs font-medium text-slate-400 dark:text-slate-500">$</span>
      <span class="text-lg font-bold text-slate-900 dark:text-white tracking-tight">14.50</span>
    </div>
  </div>

  <!-- Decorative Subtle Inner Border on Hover -->
  <div class="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-emerald-500/10 pointer-events-none transition-all duration-200"></div>
</button>
```

## Hakem Skor Dökümü (J1 / J2 / J3)

| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |
|---|---|---|---|---|---|
| Okunabilirlik | 97 | 82 | — | **90** | Ortalama (J1-J2) |
| Performans | 100 | 92 | — | **96** | Ortalama (J1-J2) |
| Güvenlik | 100 | 95 | — | **98** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 42 | 35 | — | **39** | Ortalama (J1-J2) |
| Prompt Uyumu | 94 | 95 | — | **95** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 90/100

**Öneriler:**
- Item name and price are hardcoded; wrap the button in a component and pass `name`, `price`, and `icon` as props to reduce duplication and improve maintainability.
- Group the complex `focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950` into a single Tailwind `@apply` class or a small CSS helper to avoid line clutter.
- Root button'un class string'i çok uzun; yorum satırlarıyla veya çok-satırlı dizi atamasıyla görsel yoğunluğu azaltın, ya da class isimlerini alfabetik sıraya koyun.
- `border-slate-150` gibi standart dışı Tailwind değerleri yerine varsayılan palette (örn. `border-slate-200`) kullanın veya açıklayıcı bir yorum ekleyin.

### Performans — 96/100

**Öneriler:**
- Büyük listelerde kullanılacaksa, SVG simgesi sabit bir değişkene alınarak yeniden oluşturma maliyeti önlenebilir.
- Çok sayıda buton ekranda yer alacaksa sanallaştırma (virtualization) düşünülebilir.
- 'transition-all' yerine yalnızca değişen özellikleri hedefleyen 'transition-colors' veya 'transition-transform' kullanın; bu, tarayıcının gereksiz özellikleri animasyon dışı bırakmasını sağlar.
- Hover sınırı için ayrı bir dekoratif <div> yerine, box-shadow veya outline tabanlı bir yaklaşım kullanarak gereksiz DOM düğümünü kaldırın.

### Güvenlik — 98/100

**Öneriler:**
- Eğer bileşen ileride dinamik veri (ürün adı, fiyat) alacaksa, XSS saldırılarını önlemek için DOMPurify gibi bir sanitizasyon kütüphanesi kullanılması önerilir.
- API çağrıları veya kimlik doğrulama eklenirse, token'ları güvenli bir şekilde saklamak için httpOnly cookie veya güvenli token yönetimi yöntemleri tercih edilmelidir.
- Bileşen prop'lar (item.name, item.price) ile dinamik hale getirildiğinde, fiyat gibi sayısal alanlarda tip doğrulaması (Number/typeof) ekleyerek yanlış tür girişini önleyin.
- Eğer ileride item icon'u URL prop'u olarak alınırsa, yalnızca güvenilir origin/cdn kısıtlaması uygulayarak ve SVG'lerde script çalıştırmayı engellemek için sanitizer kullanın.

### Sürdürülebilirlik — 39/100

**Öneriler:**
- Ürün adı, fiyat, ikon gibi değerler props olarak dışarıdan alınmalı, böylece bileşen farklı menü öğeleri için yeniden kullanılabilir hale gelir.
- Olası eksik veri (null/undefined) durumları için varsayılan değerler veya guard clause'lar eklenmeli, bileşenin test edilebilirliği artırılmalı.
- Convert to an actual reusable component (React/Vue) that accepts props like `name`, `price`, `icon`, and `onQuickAdd` callback to enable reuse across menu items.
- Extract repeated color and sizing values (emerald, amber, spacing, rounded sizes) into Tailwind theme tokens or a shared constants file to centralize design decisions and simplify future theming changes.

### Prompt Uyumu — 95/100

- Programatik: 100/100 · Semantik: 85/100
- İhlaller: yok

**Öneriler:**
- Rozet metnini 'Quick Add' olarak değiştirerek prompt'taki tam ifadeyi karşılayın.
- Rozetin köşe konumlandırması doğru; metin değişikliği ile tam uyum sağlanır.
- Rozet metnini 'Add' yerine tam olarak 'Quick Add' yapın veya daha kompakt bir 'Quick Add +' rozeti ile prompt'a birebir uyun.
- Komponentin yeniden kullanılabilirliği için fiyat, ürün adı ve ikon gibi değerleri React props veya benzeri bir yapı ile dışarıdan alın.
