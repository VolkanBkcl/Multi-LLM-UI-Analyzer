# Loomina — Model Karşılaştırma Raporu

- **Tarih:** 02.06.2026 14:07:55
- **Karşılaştırılan Model Sayısı:** 3

## Kullanıcı Promptu

Create a clean menu item button component for a restaurant POS system. It should display a food icon placeholder, item name, price, and a small 'Quick Add' badge in the corner. Use Tailwind CSS. Do not write any explanations, output only the code.

## Karşılaştırma Tablosu

| Model | Genel | Okunabilirlik | Performans | Güvenlik | Sürdürülebilirlik | Prompt Uyumu |
|---|---|---|---|---|---|---|
| DeepSeek V4 Pro | 69 | 43 | 88 | 94 | 24 | 98 |
| Qwen3.6 Plus | 89 | 92 | 94 | 85 | 74 | 98 |
| Gemini 3.5 Flash | 80 | 85 | 90 | 98 | 35 | 94 |

---

# Loomina Analiz Raporu — DeepSeek V4 Pro

- **Model:** `deepseek/deepseek-v4-pro`
- **Tarih:** 02.06.2026 14:07:55
- **Üretim Süresi:** 66734 ms
- **Genel Skor:** 69/100
- **Karar Yöntemi:** Konsensüs (iki hakem ortalaması)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3
- **J3 (Tahkimci) çağrılan metrikler:** Yok — iki hakem tüm metriklerde uzlaştı.

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
| Okunabilirlik | 38 | 48 | — | **43** | Ortalama (J1-J2) |
| Performans | 98 | 78 | — | **88** | Ortalama (J1-J2) |
| Güvenlik | 100 | 88 | — | **94** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 25 | 22 | — | **24** | Ortalama (J1-J2) |
| Prompt Uyumu | 98 | 97 | — | **98** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 43/100

**Öneriler:**
- Tekrarlanan kart yapısını bir `<template>` veya JavaScript yardımıyla DRY hale getirin; `menu-card`, `badge-quick-add` gibi stil sınıfları zaten tanımlı olduğundan her kartta aynı `class` atıflarını tekrar etmekten kaçının.
- İç içe SVG yolları ve kart yapısındaki girintilemeyi tutarlı hale getirin; `style` bloğunu harici bir CSS dosyasına taşıyarak 300+ satırlık HTML karmaşasını azaltın.
- Kart yapısını bir JavaScript dizisi + render döngüsüyle veri-odaklı hale getirerek 8 kez tekrarlanan HTML'i tek bir şablona indirgeyin.
- Tüm kart butonlarında girintilemeyi tutarlı (tercihen 4 boşluk) yapın ve 'Quick Add' ikonu gibi tekrar eden SVG'leri bir sembol/sprite veya fonksiyon olarak soyutlayın.

### Performans — 88/100

**Öneriler:**
- Tailwind CSS CDN yerine üretim için ağaç silkeleme (tree shaking) yapılmış optimize bir yapı kullanılması sayfa yükleme performansını artırabilir.
- Üretim ortamında Tailwind CDN yerine derlenmiş (PurgeCSS uygulanmış) bir CSS bundle kullanın; runtime JIT derleme maliyetini ortadan kaldırır.
- 8 özdeş kartı statik tekrardan kırmak için küçük bir veri dizisinden template ile render edin; bu DOM ağırlığını ve bakım yükünü azaltır.

### Güvenlik — 94/100

**Öneriler:**
- İleride dinamik veri (API'den gelen ürün adı, fiyat) eklenecekse, JSX içinde doğrudan string interpolation yerine React'in varsayılan kaçış mekanizmasını kullanın.
- Tailwind CDN'si production'da kullanılmamalı; güvenlik ve performans için build aşamasında Tailwind'i projeye dahil edin.
- Tailwind CDN scriptine `integrity` ve `crossorigin="anonymous"` öznitelikleri ekleyerek Subresource Integrity (SRI) koruması sağlayın, ideal olarak production için Tailwind'i build pipeline'a dahil edin.
- `<style>` bloğu içindeki `@import` ile yüklenen Google Fonts bağlantısını `<head>` içinde `<link rel="preconnect">` ve `integrity` özniteliği ile değiştirerek hem performansı hem tedarik zinciri güvenliğini artırın.

### Sürdürülebilirlik — 24/100

**Öneriler:**
- Menü verisini (isim, fiyat, ikon) ayrı bir dizi/dosyaya (ör. menuData.ts) çıkarın ve kartları map() ile render edin; böylece yeni ürün eklemek tek satır değişiklik olur.
- Menü kartını <MenuItemCard> adlı ayrı bir bileşene dönüştürün; böylece yapı ve stil tek yerden yönetilir, tekrar eden JSX ortadan kalkar.
- Refactor the card into a single reusable component (e.g., a JS/TS function or template) that accepts `{name, price, icon}` props, then render it from a `menuItems` data array to eliminate duplication.
- Extract design tokens (colors, shadows, badge gradient, animation timings) into a Tailwind theme config or CSS custom properties, and lift the Quick Add badge / icon placeholder into named subcomponents to enable single-point updates and easier testing.

### Prompt Uyumu — 98/100

- Programatik: 100/100 · Semantik: 95/100
- İhlaller: yok

**Öneriler:**
- Yemek ikonları şu an rastgele SVG sembolleri kullanıyor; gerçek bir POS sistemi için her öğeye uygun ikon seçimi yapılmalıdır.
- Kod sadece sunum amaçlı statik butonlar içeriyor, ancak üretime hazır bir bileşen için tıklanabilirlik, miktar güncellemesi gibi işlevler eklenmelidir.
- Prompt tek bir component istediğinden, tek bir örnek kart render edip altına 2-3 ek örnek koymak daha sadık olur.
- İkon placeholder'ları için gerçek food emoji veya Lucide/Feather ikon kütüphanesi kullanmak POS bağlamına daha uygun olur.


---

# Loomina Analiz Raporu — Qwen3.6 Plus

- **Model:** `qwen/qwen3.6-plus`
- **Tarih:** 02.06.2026 14:07:55
- **Üretim Süresi:** 46783 ms
- **Genel Skor:** 89/100
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
| Okunabilirlik | 95 | 89 | — | **92** | Ortalama (J1-J2) |
| Performans | 95 | 92 | — | **94** | Ortalama (J1-J2) |
| Güvenlik | 85 | 85 | — | **85** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 80 | 68 | — | **74** | Ortalama (J1-J2) |
| Prompt Uyumu | 98 | 98 | — | **98** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 92/100

**Öneriler:**
- Fiyat için prop tipini veya varsayılan formatı belirten bir değişken adı (örn. formattedPrice) veya varsayılan bir değer (`$0.00`) eklenerek bağlam artırılabilir.
- SVG ikonun path'leri için okunabilirliği artırmak adına ayrı bir `FoodPlaceholderIcon` bileşenine çıkartılabilir.
- Break the long button className into logical groups (e.g., layout, colors, hover/focus, transitions) using a template literal or classnames helper to improve scannability.
- Extract the placeholder food icon SVG into a small named subcomponent (e.g., `FoodIconPlaceholder`) so the main component reads as intent rather than markup noise.

### Performans — 94/100

**Öneriler:**
- Bileşen şu anda basit olduğu için ekstra optimizasyon gereksizdir; ancak ileride liste içinde kullanılırsa React.memo ile sarılması faydalı olabilir.
- onClick prop'u her render'da yeni bir fonksiyon referansı oluşturuyorsa, üst bileşende useCallback ile memoize edilmesi önerilir.
- Çok sayıda menü öğesi render ediliyorsa parent'ta React.memo ile sararak gereksiz re-render'ları önleyin.
- icon prop'u için lazy loading veya sabit bir ikon seti (sprite) kullanarak ağ isteklerini azaltabilirsiniz.

### Güvenlik — 85/100

**Öneriler:**
- Validate the 'icon' prop to ensure it uses a safe scheme (e.g., http:, https:, or data:image/) before rendering
- Consider using a static placeholder if icon is not trusted, avoiding direct user-supplied URLs
- Validate the `icon` prop URL against an allowlist or use a safe image-loading helper to prevent loading of untrusted or non-HTTPS resources.
- Consider wrapping numeric `price` parsing in a utility with explicit type coercion to avoid rendering raw, unvalidated strings that could later flow into other components.

### Sürdürülebilirlik — 74/100

**Öneriler:**
- Hardcoded 'Quick Add' metnini prop olarak al (ör. badge) veya isteğe bağlı yap.
- PropTypes veya TypeScript ile prop doğrulaması ekle.
- Add PropTypes or TypeScript interface for name, price, icon, onClick to improve testability and catch contract violations early.
- Make the badge text and visibility configurable via props (e.g., `badge` prop) and extract hardcoded strings/constants to a separate file; also format the price with a currency helper and add a fallback for missing name.

### Prompt Uyumu — 98/100

- Programatik: 100/100 · Semantik: 95/100
- İhlaller: yok

**Öneriler:**
- İyileştirmeye gerek yok, bileşen istenenleri tam karşılıyor.
- Opsiyonel: Quick Add badge pozisyonu ve renk kontrastı için daha belirgin bir gölge veya farklı renk denenebilir.
- Quick Add badge could optionally include a plus (+) icon to visually reinforce the add action for POS users.
- Consider formatting the price with a currency symbol/locale-aware toFixed(2) in a wrapper, or making the price prop strongly typed to avoid passing strings like '$4.99' or numbers inconsistently.


---

# Loomina Analiz Raporu — Gemini 3.5 Flash

- **Model:** `google/gemini-3.5-flash`
- **Tarih:** 02.06.2026 14:07:55
- **Üretim Süresi:** 12680 ms
- **Genel Skor:** 80/100
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
| Okunabilirlik | 88 | 82 | — | **85** | Ortalama (J1-J2) |
| Performans | 100 | 80 | — | **90** | Ortalama (J1-J2) |
| Güvenlik | 100 | 95 | — | **98** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 35 | 35 | — | **35** | Ortalama (J1-J2) |
| Prompt Uyumu | 93 | 95 | — | **94** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 85/100

**Öneriler:**
- SVG içindeki `V2v0a5` ifadesi, sıfır değerli 'a' (ark) yayı ile ilgili bir sorunu işaret ediyor olabilir. Doğru path verisini kullanarak bu garip ifadeyi düzeltin.
- Sınıf adlarındaki 'slate-150' Tailwind'in standart paletinde yoktur; özel bir yapılandırma gerektirir. Bu özel rengi tanımlayan bir yorum eklemek veya standart bir varyant kullanmak kodu kendi kendini belgeleyen hale getirir.
- Parça uzun className ifadelerini (özellikle kök <button> satırını) satır satıra bölün veya @apply ile semantic utility sınıflarına çıkarın; bu, okunabilirliği ciddi şekilde artırır.
- `<h3>` ve 'Price Tag' gibi etiketlerin anlamını zaten taşıdığı yerdeki gereksiz yorumları kaldırıp yalnızca niyeti açıklayan ('neden' odaklı) yorumları bırakın.

### Performans — 90/100

**Öneriler:**
- Performans iyileştirmesi gerektirecek bir durum bulunmamaktadır.
- `transition-all` ifadelerini (`transition-all duration-200`) spesifik geçiş sınıflarıyla değiştirin — örneğin `transition-[transform,background-color,color,box-shadow]` veya `transition-colors` + `transition-transform` kombinasyonu kullanarak yalnızca gerekli özelliklerin animasyonunu sağlayın.
- Çok sayıda menü öğesi aynı anda render ediliyorsa, SVG ikonlarını `<use>` + `<symbol>` ile sprite olarak birleştirerek DOM düğümü sayısını ve tekrar eden path verilerini azaltın.

### Güvenlik — 98/100

**Öneriler:**
- Statik içerikli olduğu için güvenlidir, ancak ileride dinamik veri eklendiğinde dangerouslySetInnerHTML kullanımından kaçınılmalıdır.
- Kullanıcı adı veya fiyat gibi değişkenler dış kaynaktan alınıyorsa, XSS riskine karşı içerik otomatik olarak escape edilmelidir.
- Öğe adı ve fiyat gibi değerler props veya data attribute olarak dışarıdan alındığında, bunları doğrudan render etmek yerine React/framework escape mekanizmasına bırakın; ayrıca fiyat gibi sayısal alanlarda tür doğrulaması (typeof === 'number' veya parseFloat) uygulayın.
- POS sisteminde bu buton tıklandığında gerçek bir işlem tetikleyeceğinden, onclick/handler içinde gelen ürün ID'sinin beklenen format ve aralıkta olduğunu doğrulayan bir input validation katmanı ekleyin (server-side ve client-side).

### Sürdürülebilirlik — 35/100

**Öneriler:**
- Bileşeni props alacak şekilde yeniden düzenleyin (ör. name, price, icon, onQuickAdd).
- Sabit metinleri ve stil sınıflarını bileşen dışına çıkararak veya bir yapılandırma nesnesi kullanarak değiştirilebilirliği artırın.
- Convert to a proper React/Vue component accepting `name`, `price`, `icon`, and `onClick` props, extracting the icon and badge into reusable subcomponents (IconBadge, PriceTag) for use across the POS.
- Add typed prop validation and state variants (e.g., `disabled` for out-of-stock, `selected`, `loading`) with corresponding visual treatment, and pull repeated Tailwind class groups into a small set of utility components or design tokens.

### Prompt Uyumu — 94/100

- Programatik: 100/100 · Semantik: 82/100
- İhlaller: yok

**Öneriler:**
- Rozet metnini 'Quick Add' olarak değiştirin.
- İkon yer tutucusu zaten mevcut, ancak daha belirgin bir yemek simgesi tercih edilebilir (opsiyonel).
- Change the badge text from 'Add' to 'Quick Add' to match the prompt verbatim, e.g., <span>Quick Add</span>.
- Consider making the item name and price dynamic via props/placeholders ({{name}}, {{price}}) to make it a true reusable POS component rather than a single hardcoded item.
