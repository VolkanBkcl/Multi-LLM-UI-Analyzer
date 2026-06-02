# Loomina — Model Karşılaştırma Raporu

- **Tarih:** 02.06.2026 14:09:03
- **Karşılaştırılan Model Sayısı:** 3

## Kullanıcı Promptu

Create a clean menu item button component for a restaurant POS system. It should display a food icon placeholder, item name, price, and a small 'Quick Add' badge in the corner. Use Tailwind CSS. Do not write any explanations, output only the code.

## Karşılaştırma Tablosu

| Model | Genel | Okunabilirlik | Performans | Güvenlik | Sürdürülebilirlik | Prompt Uyumu |
|---|---|---|---|---|---|---|
| DeepSeek V4 Pro | 68 | 43 | 82 | 96 | 23 | 98 |
| Qwen3.6 Plus | 89 | 87 | 91 | 93 | 74 | 99 |
| Gemini 3.5 Flash | 84 | 82 | 96 | 98 | 48 | 97 |

---

# Loomina Analiz Raporu — DeepSeek V4 Pro

- **Model:** `deepseek/deepseek-v4-pro`
- **Tarih:** 02.06.2026 14:09:03
- **Üretim Süresi:** 66734 ms
- **Genel Skor:** 68/100
- **Karar Yöntemi:** Tahkim (J3)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3, x-ai/grok-4.3
- **J3 (Tahkimci) çağrılan metrikler:** Performans

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
| Performans | 95 | 68 | 82 | **82** | Medyan (J1·J2·J3) — tahkim |
| Güvenlik | 100 | 92 | — | **96** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 20 | 25 | — | **23** | Ortalama (J1-J2) |
| Prompt Uyumu | 98 | 97 | — | **98** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 43/100

**Öneriler:**
- Her menü kartı için bir JavaScript/HTML bileşen (veya şablon) oluşturarak kopyala-yapıştır kod tekrarını (DRY ihlali) tamamen ortadan kaldırın. Bu, kodu çok daha kısa ve yönetilebilir yapar.
- Girintilemeyi tutarlı hale getirin (CSS ve HTML blokları karışık girintili), 300 satırı aşan bu yapıyı işlevsel parçalara bölerek dosyayı kısaltın ve Tailwind utility sınıflarını kullanarak özel CSS animasyon ihtiyacını azaltın.
- Make indentation consistent across all 8 card blocks (or better, extract a reusable template/component so the markup isn't repeated).
- Either create a single reusable component definition or, at minimum, normalize the indentation of all cards so the structure is immediately scannable.

### Performans — 82/100

**Öneriler:**
- Component tabanlı bir kullanım düşünülüyorsa, veri listesi için her render'da tekrar oluşturulan kart yapısı yerine bir döngü kullanılabilir ancak mevcut statik yapıda bu bir performans sorunu değildir.
- Google Fonts yüklemesini `<link rel="preconnect">` + `<link rel="stylesheet">` ile HTML head'ine taşıyın; `@import` render-blocking'dir.
- 8 kart yapısını bir `menuItems` dizisinden `.map()` ile üreten minimal bir script (veya template engine) ile veri-odaklı hale getirip gereksiz HTML tekrarını ortadan kaldırın; büyük menüler için virtualization (örn. IntersectionObserver ile lazy mount) ekleyin.

### Güvenlik — 96/100

**Öneriler:**
- Harici CDN kaynakları (Tailwind CSS) için Subresource Integrity (SRI) özniteliği ekleyerek olası tedarik zinciri saldırılarına karşı koruma sağlayabilirsiniz.
- Google Fonts yerine fontları projeye dahil ederek dış bağımlılığı azaltabilir ve gizlilik riskini düşürebilirsiniz.
- cdn.tailwindcss.com ve Google Fonts için Subresource Integrity (integrity attribute) ve crossorigin="anonymous" ekleyerek CDN kaynak bütünlüğünü sağlayın.
- Üretim ortamında Tailwind'i CDN yerine build-time derlemesiyle (PostCSS) dahil ederek üçüncü taraf runtime bağımlılığını kaldırın.

### Sürdürülebilirlik — 23/100

**Öneriler:**
- Menü kartını JavaScript/React gibi bir framework ile veya en azından bir HTML template/Web Component olarak tekil bir bileşene dönüştürün. Veriyi (isim, fiyat, ikon) harici bir diziden alarak tekrarı ortadan kaldırın.
- Benzer SVG ikonları ve stilleri (badge, kart) ortak bir bileşen veya CSS sınıfı olarak soyutlayın; sabit renk/boyut değerlerini Tailwind config'de veya CSS değişkenlerinde tanımlayın.
- Tek bir MenuItemButton bileşen şablonu tanımlayıp (React/Vue/Web Component) veriyi bir dizi/obje üzerinden map ile render edin; böylece 8 kopya yerine tek kaynak olur.
- Sabit değerleri (badge metni, fiyat formatlama, ikon eşlemesi) constants.ts veya config dosyasına çıkararak magic string'leri ortadan kaldırın.

### Prompt Uyumu — 98/100

- Programatik: 100/100 · Semantik: 95/100
- İhlaller: yok

**Öneriler:**
- Kod, tek bir buton bileşeni yerine çoklu kart ızgarası olarak yorumlanmış. Eğer istenen yalnızca tek bir bileşen örneği idiyse, ihlal oluşabilir; bu belirsizliği gidermek daha kesin olur.
- Tailwind kullanımı sağlanmış ancak özel CSS'de bazı renkler ve stiller var. Tamamen Tailwind utility sınıflarına bağlı kalmak, kod tutarlılığını artırabilir.
- Prompt tek bir 'component' istemiş; 8 örnek kart yerine tek bir yeniden kullanılabilir bileşen (örn. JavaScript template veya React component) ile gösterilebilirdi.
- İkonlar için gerçek placeholder (örn. image alanı veya initials) kullanmak, 'icon placeholder' ifadesine daha saf bir şekilde uyardı; şu an her yiyecek için elle çizilmiş SVG var.


---

# Loomina Analiz Raporu — Qwen3.6 Plus

- **Model:** `qwen/qwen3.6-plus`
- **Tarih:** 02.06.2026 14:09:03
- **Üretim Süresi:** 46783 ms
- **Genel Skor:** 89/100
- **Karar Yöntemi:** Tahkim (J3)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3, x-ai/grok-4.3
- **J3 (Tahkimci) çağrılan metrikler:** Sürdürülebilirlik

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
| Okunabilirlik | 90 | 84 | — | **87** | Ortalama (J1-J2) |
| Performans | 95 | 87 | — | **91** | Ortalama (J1-J2) |
| Güvenlik | 100 | 85 | — | **93** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 90 | 65 | 74 | **74** | Medyan (J1·J2·J3) — tahkim |
| Prompt Uyumu | 100 | 98 | — | **99** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 87/100

**Öneriler:**
- 'price' prop'unu daha anlamlı hale getirmek için prop tipini belirtmek veya varsayılan para birimiyle göstermek (örn. '$' + price) okunabilirliği artırabilir.
- SVG path verisi okumayı zorlaştırıyor; ikon için ayrı bir SVG bileşeni oluşturup import etmek veya anlamlı bir değişkene atamak daha temiz olur.
- Break the long className string on the main <button> into multiple lines or extract Tailwind classes into a small `BUTTON_CLASSES` constant to improve scannability.
- Add PropTypes (or convert to TypeScript) so each prop's expected type (e.g., `price: number` vs. `price: string`) is documented and self-evident to other developers.

### Performans — 91/100

**Öneriler:**
- Use React.memo to prevent unnecessary re-renders if this component is rendered in large lists, since it is purely dependent on props.
- Consider lazy loading the image if icon URLs are external or large, using loading='lazy' on the <img> element.
- POS grid'inde çok sayıda öğe render edileceğinden bileşeni React.memo ile sararak prop'lar değişmediğinde gereksiz re-render'ları önleyin.
- Çok sayıda menü öğesinin listelendiği senaryolarda React.lazy + Suspense veya grid virtualization (örn. react-window) kullanmayı değerlendirin.

### Güvenlik — 93/100

**Öneriler:**
- Eğer icon URL'si kullanıcı tarafından sağlanıyorsa, veri URI'si veya zararlı URL'leri engellemek için client-side doğrulama eklenebilir.
- `icon` prop'u için URL doğrulaması ekleyin (ör. `https://` ile başlayıp başlamadığını kontrol edin veya allowlist kullanın) veya icon'u string URL yerine import edilen sabit bir asset olarak kabul edin.
- Görsel kaynakları yüklerken `referrerPolicy="no-referrer"` ve `loading="lazy"` gibi ek güvenlik/performans attribute'larını ekleyin.

### Sürdürülebilirlik — 74/100

**Öneriler:**
- 'Quick Add' rozet metnini bir prop ('badgeText') olarak alıp varsayılan değerle esnek hale getirin.
- Varsayılan yiyecek SVG'sini ayrı bir <FoodPlaceholderIcon> bileşenine çıkararak farklı yerlerde yeniden kullanımı kolaylaştırın.
- Make the badge configurable via props (e.g., `badge` veya `showBadge` prop) so the bileşen farklı varyasyonlarda yeniden kullanılabilir.
- Add prop-types or TypeScript types and extract magic strings (badge label, color tokens) to a constants file for better analyzability and modifiability.

### Prompt Uyumu — 99/100

- Programatik: 100/100 · Semantik: 100/100
- İhlaller: yok

**Öneriler:**
- Eğer tasarım prompında 'modern gölgelendirmeler' istenmişse, kart gölge geçişleri biraz daha yumuşatılabilir.
- Quick Add rozet metni statik olarak verilmiş, ancak promp da bir zorunluluk olmadığı için esneklik açısından prop olarak alınabilir.
- Quick Add badge'ı tıklamayı engelleyebilecek absolute katman olduğundan, etkileşim sırasında gerekirse pointer-events ayarıyla buton davranışının bozulmadığından emin olun.
- Fiyat alanını sayısal (number) olarak kabul edip toLocaleString ile para birimi formatlaması yaparak daha sağlam bir POS veri yapısı sunabilirsiniz.


---

# Loomina Analiz Raporu — Gemini 3.5 Flash

- **Model:** `google/gemini-3.5-flash`
- **Tarih:** 02.06.2026 14:09:03
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
| Okunabilirlik | 85 | 78 | — | **82** | Ortalama (J1-J2) |
| Performans | 100 | 92 | — | **96** | Ortalama (J1-J2) |
| Güvenlik | 100 | 95 | — | **98** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 55 | 40 | — | **48** | Ortalama (J1-J2) |
| Prompt Uyumu | 98 | 95 | — | **97** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 82/100

**Öneriler:**
- Ürün adı ve fiyat değerlerini 'Smoked Brisket Burger' ve '14.50' gibi sabit yazmak yerine prop/state'ten alarak bileşeni yeniden kullanılabilir hale getirin.
- Sınıf zincirleri çok uzun; Tailwind'in @apply yönergesini veya bileşen tabanlı stil kütüphanesi kullanarak en azından ortak stilleri (ör. hover geçişleri) bir yardımcı sınıfta toplayın.
- Remove obvious comments like 'Item Name' and 'Price Tag' that just restate what the markup already shows, keeping only comments that explain non-obvious decisions (e.g., the Lucide SVG identifier is useful).
- Add accessibility attributes such as aria-label on the button (e.g., 'Add Smoked Brisket Burger to order, $14.50') and role='button' if needed, since these also improve readability of intent for future maintainers.

### Performans — 96/100

**Öneriler:**
- Mevcut haliyle performans optimizasyonu gerekmemektedir; Tailwind JIT kullanılarak nihai CSS boyutunun küçük olduğundan emin olunmalıdır.
- Çok sayıda buton render edilecekse, inline SVG'lerin her butonda tekrar render edilmesi yerine bir ikon bileşeni oluşturularak paylaşılması bellek kullanımını azaltabilir.
- Çok sayıda menü öğesi render edilecekse, inline SVG'leri bir sprite sheet veya tek bir sembol tanımına çıkararak toplam DOM ağırlığını azaltın.
- Bu bileşeni liste halinde kullanırken parent seviyesinde virtualization (örn. react-virtuoso) uygulayarak DOM düğüm sayısını sınırlayın.

### Güvenlik — 98/100

**Öneriler:**
- Bileşen dinamik veri alacak şekilde genişletildiğinde kullanıcı girdisi DOMPurify ile sanitize edilmelidir.
- Ürün adı ve fiyat gibi değerler şu an hardcoded; bunlar props olarak alındığında, server-side validation ve sanitization'a ek olarak React'in otomatik escaping'inin korunduğundan emin olun.
- Butonun POS sistemine gerçek 'Quick Add' aksiyonu bağlandığında, double-submit ve clickjacking'e karşı disabled state ve rate limiting gibi önlemler ekleyin.

### Sürdürülebilirlik — 48/100

**Öneriler:**
- Ürün adı, fiyat, ikon ve badge metni gibi değişken verileri props olarak alacak şekilde bileşeni yeniden düzenleyin.
- Renk ve stil token'larını (ör. emerald-500, amber-50) Tailwind tema yapılandırmasına veya CSS custom property'lere taşıyarak merkezi yönetim sağlayın.
- Refactor into a real component (React/Vue/Svelte) that accepts props like name, price, icon, and showQuickAdd, so the same block is reusable across the POS menu.
- Extract repeated UI patterns (icon container, badge, price) into smaller subcomponents or slots, and move color values into Tailwind theme tokens instead of scattering emerald/amber shades across the markup.

### Prompt Uyumu — 97/100

- Programatik: 100/100 · Semantik: 95/100
- İhlaller: yok

**Öneriler:**
- Rozet metni 'Quick Add' olarak istenmiş, ancak sadece 'Add' yazıyor; tam metin kullanılmalı.
- İkon yer tutucusu olarak SVG kullanılmış, ancak prompt'ta 'food icon placeholder' ifadesi daha basit bir placeholder beklenebilir; yine de işlevsel olarak uygundur.
- Change the badge text to 'Quick Add' to exactly match the prompt specification rather than the shortened 'Add'.
- Consider accepting optional props (name, price, icon) so the component is truly reusable across menu items, which better matches a 'component' request.
