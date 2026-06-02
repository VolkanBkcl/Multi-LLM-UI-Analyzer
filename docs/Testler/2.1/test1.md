# Loomina — Model Karşılaştırma Raporu

- **Tarih:** 02.06.2026 14:06:08
- **Karşılaştırılan Model Sayısı:** 3

## Kullanıcı Promptu

Create a clean menu item button component for a restaurant POS system. It should display a food icon placeholder, item name, price, and a small 'Quick Add' badge in the corner. Use Tailwind CSS. Do not write any explanations, output only the code.

## Karşılaştırma Tablosu

| Model | Genel | Okunabilirlik | Performans | Güvenlik | Sürdürülebilirlik | Prompt Uyumu |
|---|---|---|---|---|---|---|
| DeepSeek V4 Pro | 74 | 70 | 82 | 94 | 28 | 97 |
| Qwen3.6 Plus | 91 | 93 | 94 | 94 | 76 | 98 |
| Gemini 3.5 Flash | 82 | 87 | 95 | 98 | 35 | 94 |

---

# Loomina Analiz Raporu — DeepSeek V4 Pro

- **Model:** `deepseek/deepseek-v4-pro`
- **Tarih:** 02.06.2026 14:06:08
- **Üretim Süresi:** 66734.46 ms
- **Genel Skor:** 74/100
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
| Okunabilirlik | 78 | 62 | — | **70** | Ortalama (J1-J2) |
| Performans | 98 | 72 | 82 | **82** | Medyan (J1·J2·J3) — tahkim |
| Güvenlik | 100 | 88 | — | **94** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 35 | 20 | — | **28** | Ortalama (J1-J2) |
| Prompt Uyumu | 97 | 97 | — | **97** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 70/100

**Öneriler:**
- Kart yapısını bir dizi (array) üzerinden map ile oluşturarak kod tekrarını ortadan kaldırın; böylece bileşen sayısı arttığında bile kod kısa ve anlaşılır kalır.
- İkon SVG'leri ve fiyat gibi verileri bir veri yapısına (örneğin `menuItems` dizisi) taşıyıp, her kartı bu veriden üreterek yapısal netliği artırın.
- Menü öğelerini bir veri dizisi (name, price, icon) olarak tanımlayıp kartları bir döngü/şablon ile render edin; böylece 8 kat kod tekrarı ortadan kalkar ve yapısal değişiklikler tek noktadan yapılır.
- Tüm kart bloklarında girintilemeyi aynı standarda getirin (örneğin 2 veya 4 boşluk) ve her kartın iç içeriği için tutarlı bir girinti seviyesi kullanın.

### Performans — 82/100

**Öneriler:**
- Kod statik ve hafiftir; harika. Ancak Tailwind CDN'si üretim ortamında performans için önerilmez, bunun yerine build-time CSS (purge) kullanılmalıdır.
- Google Fonts import'u sayfa yüklenmesini bloke edebilir; font-display: swap ile veya fontu yerel olarak sunarak (self-host) FOUT/FOIT süresini azaltabilirsiniz.
- Google Fonts bağlantısını CSS @import yerine <head> içinde <link rel='preconnect'> + <link> etiketleriyle ve font-display:swap ile yükleyerek render bloklamasını azaltın.
- 8 kart yapısını bir dizi üzerinden map ile renderlayan (veya en azından tek bir <template>/kısmi ile DRY yapılmış) bir component yapısına dönüştürerek DOM ağırlığını ve tekrarı azaltın; ayrıca box-shadow hover'larında will-change: transform özelliği ekleyerek GPU compositing'den faydalanın.

### Güvenlik — 94/100

**Öneriler:**
- Production ortamında Content Security Policy (CSP) başlıkları eklenerek dış kaynak kullanımı kısıtlanabilir.
- Herhangi bir güvenlik açığı bulunmadığı için ek bir önlem gerekmemektedir.
- Add Subresource Integrity (SRI) hash to the Tailwind CDN script tag or self-host Tailwind to mitigate supply-chain risk.
- Consider adding Content-Security-Policy meta tag to further restrict resource loading and prevent future XSS regressions if dynamic data is introduced.

### Sürdürülebilirlik — 28/100

**Öneriler:**
- Menü kartı yapısını props alan (isim, fiyat, ikon vb.) yeniden kullanılabilir bir UI bileşenine dönüştürün ve veri setini bir config/constants dosyasından döngüyle render edin.
- Stil tanımlarını Tailwind yapılandırması (tailwind.config.js) üzerinden anlamsal (ör. 'btn-quick-add') sınıflara veya ayrı bir CSS modülüne taşıyarak değişikliklerin merkezi yönetimini sağlayın.
- Tek bir `MenuItemButton` bileşeni tanımlayıp ürün verisini bir dizi (array) üzerinden `.map()` ile render edin; böylece tek bir değişiklikle tüm kartlar güncellenir.
- Fiyat, etiket ve ikon gibi sabit değerleri `constants.ts` veya bir `menuItems` veri dosyasına çıkarın; magic string'leri ortadan kaldırın.

### Prompt Uyumu — 97/100

- Programatik: 100/100 · Semantik: 92/100
- İhlaller: yok

**Öneriler:**
- Sadece tek bir menü öğesi butonu oluşturarak bileşenin yeniden kullanılabilirliğini ve prompt sadakatini artırabilirsin.
- Simge için 'placeholder' ifadesi geçse de, daha anlamlı ve her öğeye özgü SVG ikonlar kullanılması, bileşenin bağımsız çalışmasını sağlar.
- Prompt tek bir 'menu item button component' istediğinden, tek bir örnek kart üretip gerekirse 2-3 varyasyon göstermek daha sadık olurdu.
- 8 kart için büyük ölçüde tekrarlanan markup yerine küçük bir JS dizisinden map'leyerek render etmek, üretime hazırlık ve okunabilirlik açısından daha iyi olurdu.


---

# Loomina Analiz Raporu — Qwen3.6 Plus

- **Model:** `qwen/qwen3.6-plus`
- **Tarih:** 02.06.2026 14:06:08
- **Üretim Süresi:** 46782.77 ms
- **Genel Skor:** 91/100
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
| Okunabilirlik | 97 | 88 | — | **93** | Ortalama (J1-J2) |
| Performans | 95 | 92 | — | **94** | Ortalama (J1-J2) |
| Güvenlik | 100 | 88 | — | **94** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 85 | 67 | — | **76** | Ortalama (J1-J2) |
| Prompt Uyumu | 98 | 98 | — | **98** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 93/100

**Öneriler:**
- className satırındaki 150+ karakterlik Tailwind sınıf listesi okunurluğu artırmak için birden fazla satıra bölünebilir.
- İsteğe bağlı: SVG placeholder'ı ayrı bir bileşene çıkarılırsa ana bileşen daha da sadeleşir ve gelecekte yeniden kullanılabilir.
- Bileşen prop'ları için kısa bir JSDoc veya TypeScript interface ekleyerek sözleşmeyi belgelendirin (örn. `icon: string | undefined`).
- Çok uzun className ifadesini, ilgili yardımcıya (örn. `clsx` veya template literal) çıkararak veya satır sonlarına bölerek tarama kolaylığını artırın.

### Performans — 94/100

**Öneriler:**
- Bileşende performans darboğazı oluşturacak bir unsur bulunmuyor. Mevcut haliyle yeterlidir.
- Bileşen çok büyük listelerde (örn. 100+ ürün) kullanılıyorsa ve parent sık re-render oluyorsa, gereksiz render'ları önlemek için React.memo ile sarmalanabilir.
- Inline SVG yolu daha karmaşık hale gelirse, performans ve okunabilirlik için ayrı bir Icon bileşenine veya sabite çıkarılabilir; ancak mevcut küçük boyut için bu zorunlu değildir.

### Güvenlik — 94/100

**Öneriler:**
- Eğer 'icon' prop'u dış bir kaynaktan geliyorsa, yalnızca HTTPS protokolünü kullanan URL'lere izin vererek güvenliği artırabilirsiniz.
- Bileşene PropTypes veya TypeScript ekleyerek yanlış türde veri girişini önlemek, beklenmeyen güvenlik risklerini azaltır.
- Validate or sanitize the `icon` prop URL (e.g., ensure it uses https:// and restricts to trusted domains/patterns) to prevent loading of unintended external resources.
- Consider adding `rel="noopener"` protections or a domain allowlist if the icon source could be user-influenced in future iterations.

### Sürdürülebilirlik — 76/100

**Öneriler:**
- 'Quick Add' etiketini bir prop veya sabit dosyaya taşıyarak değiştirilebilirliği artırın.
- İkon gösterimi (resim/fallback SVG) için ayrı bir bileşen oluşturarak modülerliği güçlendirin.
- Make the 'Quick Add' badge configurable via a prop (e.g., `badge` or `showBadge`) and extract the label to a constants file so it can be reused or localized easily.
- Add PropTypes or TypeScript type definitions for `name`, `price`, `icon`, and `onClick` to catch missing/invalid props at compile time and improve developer experience.

### Prompt Uyumu — 98/100

- Programatik: 100/100 · Semantik: 95/100
- İhlaller: yok

**Öneriler:**
- Yer tutucu ikonu, yemekle ilgili bir simge (çatal-bıçak gibi) ile değiştir.
- Erişilebilirlik için butona aria-label eklenebilir.
- Köşedeki 'Quick Add' badge'i için daha belirgin bir gölge veya hafif bir pulse animasyonu eklenebilir, böylece POS ekranında hızlı satış vurgusu daha net olur.
- icon prop'u yerine iconUrl/emoji gibi esnek bir prop yapısı düşünülebilir; fallback SVG kamera ikonu yerine çatal-bıçaç gibi daha yemek temalı bir placeholder kullanılabilir.


---

# Loomina Analiz Raporu — Gemini 3.5 Flash

- **Model:** `google/gemini-3.5-flash`
- **Tarih:** 02.06.2026 14:06:08
- **Üretim Süresi:** 12680.07 ms
- **Genel Skor:** 82/100
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
| Okunabilirlik | 92 | 82 | — | **87** | Ortalama (J1-J2) |
| Performans | 100 | 90 | — | **95** | Ortalama (J1-J2) |
| Güvenlik | 100 | 95 | — | **98** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 40 | 30 | — | **35** | Ortalama (J1-J2) |
| Prompt Uyumu | 94 | 93 | — | **94** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 87/100

**Öneriler:**
- SVG path d attribute içindeki 'v0a5' gibi anlamsız karakter dizilerini temizleyerek svg'nin ne çizdiğini açıklayan bir yorum ekleyin veya ikonun hangi yemek türünü temsil ettiğini belirtin.
- Fiyat bilgisi sabit kodlanmış ($14.50, Smoked Brisket Burger); bu veriyi dışarıdan props ile almak daha okunaklı ve yeniden kullanılabilir olacaktır.
- Bazı bölüm etiket yorumlarını kaldırın (ör. 'Item Name', 'Price Tag') çünkü bunlar zaten ilgili HTML etiketlerinden anlaşılıyor — sadece yapısal bölüm başlıklarını ('Top Row', 'Bottom Row') bırakmak daha temiz olur.
- Verileri (item adı, fiyat) doğrudan JSX/HTML içine gömmek yerine props veya data attribute olarak ayırın ki bileşen farklı menü öğeleriyle okunurken tekrar tekrar düzenlenmesi gerekmesin.

### Performans — 95/100

**Öneriler:**
- Bileşen büyük bir liste içinde render edilecekse, React.memo ile sararak gereksiz yeniden render'ı önleyin.
- Performans açısından ek bir iyileştirme gerekmiyor; mevcut haliyle üretim için uygun.
- `transition-all` yerine yalnızca gereken özellikleri (örn. `transition-[box-shadow,border-color,transform,colors]`) listeleyerek tarayıcının gereksiz style değişikliklerini izlemesini önleyin.
- Dekoratif hover border'ı ayrı bir div yerine `outline` veya `box-shadow inset` ile pseudo-element olmadan uygulayarak bir DOM düğümünden tasarruf edin.

### Güvenlik — 98/100

**Öneriler:**
- Bileşen ileride dinamik veri (isim, fiyat) alacaksa, React'in varsayılan XSS koruması yeterli olacaktır; ek sanitizasyona gerek yoktur.
- API'den gelen veriler doğrudan render edilmeden önce tip ve uzunluk kontrolleri yapılması önerilir.
- Bileşen ileride dinamik veri (API'den gelen ürün adı/fiyat) alacaksa, React'te JSX otomatik escape sağladığından ek bir önlem gerekmez; ancak üçüncü parti içerik render edilecekse DOMPurify kullanılmalıdır.
- Gelecekte kullanıcı girdisi veya URL parametresi ile çalışılacaksa (örn. ürün arama), girdi doğrulama (Zod/Yup) ve tip kontrolü eklenmelidir.

### Sürdürülebilirlik — 35/100

**Öneriler:**
- Bileşeni props (isim, fiyat, ikon, onClick) alacak şekilde parametrize edin.
- İkon ve badge gibi tekrar kullanılabilir alt bileşenlere ayırarak modülerliği artırın ve sabit değerleri constants dosyasına taşıyın.
- Wrap the markup in a reusable component (React/Vue/Web Component) with typed props (name, price, icon, showQuickAdd) and externalize the icon to a prop or constants file.
- Extract repeated values (currency symbol, color tokens, badge text) to a constants/config module and split the icon container and QuickAdd badge into small sub-components to avoid future duplication.

### Prompt Uyumu — 94/100

- Programatik: 100/100 · Semantik: 85/100
- İhlaller: yok

**Öneriler:**
- Rozet metnini 'Quick Add' olarak değiştirerek prompt'taki tam ifadeye uyun.
- Rozetin konumlandırması ve boyutu uygun, sadece metin düzeltmesi yeterli.
- The badge should explicitly read 'Quick Add' (or include both the icon and the full label) to match the prompt verbatim, since the label was specifically named.
- Consider exposing the icon, name, and price as props/variables so the component is reusable as a true POS menu button, rather than hardcoding a single sample item.
