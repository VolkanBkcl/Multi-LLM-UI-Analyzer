# Loomina — Model Karşılaştırma Raporu

- **Tarih:** 02.06.2026 12:56:46
- **Karşılaştırılan Model Sayısı:** 3

## Kullanıcı Promptu

Create a modern course card component for an online education platform. It must include a thumbnail image placeholder, course title, instructor name, price tag, and a prominent 'Enroll Now' button. Add a subtle hover effect. Use Tailwind CSS for styling. Do not write any explanations, output only the code.

## Karşılaştırma Tablosu

| Model | Genel | Okunabilirlik | Performans | Güvenlik | Sürdürülebilirlik | Prompt Uyumu |
|---|---|---|---|---|---|---|
| DeepSeek V4 Pro | 86 | 90 | 96 | 98 | 45 | 99 |
| Qwen3.6 Plus | 80 | 88 | 89 | 96 | 29 | 99 |
| Gemini 3.5 Flash | 83 | 89 | 89 | 98 | 40 | 99 |

---

# Loomina Analiz Raporu — DeepSeek V4 Pro

- **Model:** `deepseek/deepseek-v4-pro`
- **Tarih:** 02.06.2026 12:56:46
- **Üretim Süresi:** 65368 ms
- **Genel Skor:** 86/100
- **Karar Yöntemi:** Tahkim (J3)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3, x-ai/grok-4.3
- **J3 (Tahkimci) çağrılan metrikler:** Sürdürülebilirlik

## Kullanıcı Promptu

Create a modern course card component for an online education platform. It must include a thumbnail image placeholder, course title, instructor name, price tag, and a prominent 'Enroll Now' button. Add a subtle hover effect. Use Tailwind CSS for styling. Do not write any explanations, output only the code.

## Üretilen Kod

```html
<div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6">
  <div
    class="group relative w-full max-w-sm rounded-2xl bg-white shadow-lg shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-200/40 overflow-hidden"
  >
    <!-- Thumbnail -->
    <div class="relative h-52 overflow-hidden bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400">
      <div class="absolute inset-0 flex items-center justify-center">
        <svg class="h-16 w-16 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
      </div>
      <div class="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10"></div>
      <span
        class="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-indigo-600 backdrop-blur-sm"
      >
        Featured
      </span>
    </div>

    <!-- Content -->
    <div class="p-6">
      <!-- Category -->
      <span class="mb-2 inline-block text-xs font-medium uppercase tracking-wider text-indigo-500">
        Development
      </span>

      <!-- Course Title -->
      <h3 class="mb-2 text-xl font-bold leading-tight text-slate-800 transition-colors duration-300 group-hover:text-indigo-600">
        The Complete Modern Web Development Bootcamp
      </h3>

      <!-- Instructor -->
      <div class="mb-4 flex items-center gap-3">
        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-xs font-bold text-white">
          JD
        </div>
        <p class="text-sm font-medium text-slate-500">by <span class="text-slate-700">Jane Doe</span></p>
      </div>

      <!-- Rating & Students -->
      <div class="mb-5 flex items-center gap-3">
        <div class="flex items-center gap-1">
          <svg class="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span class="text-sm font-semibold text-slate-700">4.8</span>
          <span class="text-sm text-slate-400">(2.4k)</span>
        </div>
        <span class="h-1 w-1 rounded-full bg-slate-300"></span>
        <span class="text-sm text-slate-400">48 lectures</span>
      </div>

      <!-- Price & Enroll -->
      <div class="flex items-center justify-between">
        <div>
          <span class="text-2xl font-extrabold text-slate-800">$89</span>
          <span class="ml-1 text-sm text-slate-400 line-through">$199</span>
        </div>
        <button
          class="relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-300 active:scale-95"
        >
          <span class="relative z-10">Enroll Now</span>
          <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-purple-600 to-indigo-600 transition-transform duration-300 group-hover:translate-x-0"></div>
        </button>
      </div>
    </div>

    <!-- Subtle border glow on hover -->
    <div class="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/5 transition-all duration-500 group-hover:ring-indigo-300/50"></div>
  </div>
</div>
```

## Hakem Skor Dökümü (J1 / J2 / J3)

| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |
|---|---|---|---|---|---|
| Okunabilirlik | 92 | 88 | — | **90** | Ortalama (J1-J2) |
| Performans | 100 | 92 | — | **96** | Ortalama (J1-J2) |
| Güvenlik | 100 | 96 | — | **98** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 60 | 32 | 45 | **45** | Medyan (J1·J2·J3) — tahkim |
| Prompt Uyumu | 100 | 98 | — | **99** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 90/100

**Öneriler:**
- Button içindeki `group-hover:translate-x-0` sınıfının kart hover'ına bağlı olduğunu açıklayan kısa bir yorum eklenebilir.
- Kart bileşeni için <article> gibi anlamsal HTML etiketi kullanımı yapısal netliği artırabilir.
- Bazı bölüm yorumlarını (ör. '<!-- Course Title -->' veya '<!-- Instructor -->') kaldırarak yalnızca daha büyük mantıksal blokları ('Thumbnail', 'Content', 'Footer') işaretleyerek yorum yoğunluğunu azaltın.
- Gelecekte JSX/React'e taşınırsa her bölünmüş bölümü (ör. <CourseThumbnail>, <CoursePrice>) ayrı alt bileşenlere ayırarak SRP'yi güçlendirin ve ana bileşeni daha da kısaltın.

### Performans — 96/100

**Öneriler:**
- Performans açısından iyileştirme gerektiren bir durum yok; bileşen saf statik sunumdur.
- Hover efektleri GPU hızlandırmalı transform kullanılarak verimli şekilde uygulanmış.
- Thumbnail alanı için gerçek bir görsel kullanılacaksa lazy loading (loading="lazy") ve boyutlandırma (srcset) ekleyerek Largest Contentful Paint iyileştirilebilir.
- Butonun hover'da translate animasyonu için transform yerine will-change: transform ipucu eklemek, yoğun listelemelerde katman oluşturma maliyetini azaltabilir.

### Güvenlik — 98/100

**Öneriler:**
- Gelecekte dinamik içerik eklenirse, kullanıcı girdisi için DOMPurify gibi sanitizasyon kullanılmalıdır.
- API anahtarları veya hassas veriler asla kod içine gömülmemelidir.
- Bileşene dinamik veri (API'den gelen kurs adı, eğitmen adı vb.) bağlandığında, tüm string'lerin React JSX içinde render edildiğinden emin olun ve dangerouslySetInnerHTML'dan kaçının.
- Enroll Now butonuna tıklama işlemi eklendiğinde, kimlik doğrulama token'larını localStorage yerine httpOnly cookie ile yönetin ve state'lerde hassas veri tutmaktan kaçının.

### Sürdürülebilirlik — 45/100

**Öneriler:**
- Kartı modüler hale getirmek için başlık, fiyat etiketi, buton gibi tekrar edecek parçaları ayrı alt bileşenlere taşıyın.
- Renk paleti, gölge gibi stil token'larını Tailwind theme yapılandırmasına çıkararak magic değerleri azaltın ve değiştirilebilirliği artırın.
- Bileşeni bir framework (React/Vue/Svelte) bileşenine çevirerek props ile course, instructor, price, rating gibi verileri dışarıdan alın; böylece yeniden kullanılabilirlik ve test edilebilirlik sağlanır.
- Ortak UI parçalarını (Badge, Avatar, RatingStars, PriceTag, EnrollButton) ayrı alt bileşenlere ve değişmez metinleri/renkleri constants dosyasına çıkararak modülarite ve değiştirilebilirliği artırın.

### Prompt Uyumu — 99/100

- Programatik: 100/100 · Semantik: 100/100
- İhlaller: yok

**Öneriler:**
- Thumbnail placeholder'ı daha belirgin bir görsel simge veya 'image' ikonu ile değiştirerek kullanıcıya daha net bir görsel alanı hissi verilebilir.
- Hover efektine ek olarak buton veya kart üzerinde hafif bir scale animasyonu eklenerek etkileşim daha da zenginleştirilebilir.
- Thumbnail could optionally include a labeled 'image placeholder' hint to make its placeholder nature more explicit.
- Consider adding a small accessibility improvement like aria-label on the Enroll Now button.


---

# Loomina Analiz Raporu — Qwen3.6 Plus

- **Model:** `qwen/qwen3.6-plus`
- **Tarih:** 02.06.2026 12:56:46
- **Üretim Süresi:** 41240 ms
- **Genel Skor:** 80/100
- **Karar Yöntemi:** Konsensüs (iki hakem ortalaması)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3
- **J3 (Tahkimci) çağrılan metrikler:** Yok — iki hakem tüm metriklerde uzlaştı.

## Kullanıcı Promptu

Create a modern course card component for an online education platform. It must include a thumbnail image placeholder, course title, instructor name, price tag, and a prominent 'Enroll Now' button. Add a subtle hover effect. Use Tailwind CSS for styling. Do not write any explanations, output only the code.

## Üretilen Kod

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Course Card</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Inter', sans-serif; }
  </style>
</head>
<body class="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-8">

  <div class="w-full max-w-sm group cursor-pointer">
    <!-- Card Container -->
    <div class="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-slate-100">
      
      <!-- Thumbnail -->
      <div class="relative overflow-hidden">
        <div class="w-full h-48 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
          <svg class="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <!-- Badge -->
        <div class="absolute top-4 left-4">
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-indigo-600 shadow-md backdrop-blur-sm">
            Best Seller
          </span>
        </div>
      </div>

      <!-- Content -->
      <div class="p-6">
        <!-- Category -->
        <div class="flex items-center gap-2 mb-3">
          <span class="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full uppercase tracking-wide">Development</span>
          <span class="text-xs text-slate-400">•</span>
          <span class="text-xs text-slate-500">12 Lessons</span>
        </div>

        <!-- Title -->
        <h3 class="text-lg font-bold text-slate-800 mb-2 leading-snug line-clamp-2 group-hover:text-indigo-600 transition-colors duration-200">
          Complete Web Development Bootcamp 2024
        </h3>

        <!-- Instructor -->
        <div class="flex items-center gap-3 mb-4">
          <div class="w-8 h-8 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center text-white text-xs font-bold shadow-sm">
            JD
          </div>
          <div>
            <p class="text-sm font-medium text-slate-700">John Doe</p>
            <p class="text-xs text-slate-400">Senior Instructor</p>
          </div>
        </div>

        <!-- Rating -->
        <div class="flex items-center gap-1.5 mb-4">
          <div class="flex items-center text-amber-400">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
            <svg class="w-4 h-4 fill-current text-slate-300" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
          </div>
          <span class="text-sm font-semibold text-slate-700">4.8</span>
          <span class="text-xs text-slate-400">(2.4k reviews)</span>
        </div>

        <!-- Divider -->
        <div class="border-t border-slate-100 my-4"></div>

        <!-- Price & Button Row -->
        <div class="flex items-center justify-between">
          <div class="flex items-baseline gap-2">
            <span class="text-2xl font-bold text-slate-800">$49.99</span>
            <span class="text-sm text-slate-400 line-through">$89.99</span>
          </div>
          <button class="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-95">
            Enroll Now
            <svg class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>

</body>
</html>
```

## Hakem Skor Dökümü (J1 / J2 / J3)

| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |
|---|---|---|---|---|---|
| Okunabilirlik | 96 | 80 | — | **88** | Ortalama (J1-J2) |
| Performans | 95 | 82 | — | **89** | Ortalama (J1-J2) |
| Güvenlik | 100 | 92 | — | **96** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 20 | 38 | — | **29** | Ortalama (J1-J2) |
| Prompt Uyumu | 100 | 98 | — | **99** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 88/100

**Öneriler:**
- Yıldız derecelendirmesi dinamik olacaksa SVG'leri döngü ile oluşturmayı düşünün; statik kullanımda sorun yok.
- Kart tıklanabilir olacaksa uygun bir etkileşim eklenebilir, ancak bu okunabilirlikten bağımsız.
- Yıldız SVG path'ini tek bir <svg> içinde <symbol>/<use> ile veya küçük bir JS döngüsüyle tekrarsız hale getirerek rating bloğunu sadeleştirin.
- Her bölümün üstündeki açıklayıcı HTML yorumlarını koruyun ancak '<!-- Thumbnail -->' gibi aşikar olanları kaldırarak yorum yoğunluğunu azaltın.

### Performans — 89/100

**Öneriler:**
- Harici font ve Tailwind CDN kullanımı render-blocking'e neden olabilir; font için font-display: swap eklenebilir, Tailwind production build tercih edilebilir.
- SVG ikonlar inline olarak tekrar ediyor; tekrar kullanım için <symbol> ve <use> ile optimize edilebilir.
- `transition-all` yerine yalnızca değişen property'leri listeleyin (örn. `transition-[transform,box-shadow,colors]`) böylece tarayıcı gereksiz özellikleri izlemez.
- Google Fonts URL'sine `&display=swap` ekleyerek font yüklenene kadar metnin görünmesini sağlayın ve CLS/FOUT etkisini azaltın.

### Güvenlik — 96/100

**Öneriler:**
- Bu statik bileşen için güvenlik iyileştirmesi gerekmez. Eğer ileride dinamik veri (kullanıcı yorumu, kurs başlığı vb.) render edilecekse, XSS koruması için DOMPurify gibi bir sanitizasyon kütüphanesi kullanılmalıdır.
- Harici kaynaklardan (CDN) yüklenen Tailwind ve Google Fonts için, üretim ortamında Subresource Integrity (SRI) hash'leri eklenerek tedarik zinciri saldırılarına karşı koruma sağlanabilir.
- İçeriğin dinamik hale gelmesi durumunda, kullanıcı girdilerini (ör. kurs başlığı, eğitmen adı) render etmeden önce mutlaka sanitize edin ve React gibi bir framework kullanarak JSX escaping'den yararlanın.
- Production ortamında CDN üzerinden Tailwind yüklemek yerine build sürecine entegre edin ve bir Content-Security-Policy meta etiketi ekleyerek ek güvenlik katmanı sağlayın.

### Sürdürülebilirlik — 29/100

**Öneriler:**
- Kart yapısını bir bileşen haline getirin (ör. React props ile veya Web Component) ve veri ile şablonu ayırın
- Yıldız derecelendirmesi, rozet, fiyat etiketi gibi kısımları ayrı yeniden kullanılabilir alt bileşenler olarak soyutlayın
- Değişken verileri (başlık, fiyat, eğitmen, puan) bir JS data objesine ya da props'a çıkararak, içeriği markup'tan ayırın ve card'ı gerçek bir bileşen (React/Vue) olarak yeniden yapılandırın.
- Yıldız, badge ve fiyat gibi tekrar eden UI bloklarını (RatingStars, CourseBadge, PriceTag) küçük alt bileşenlere ayırarak SRP'yi uygulayın ve ortak stilleri (renkler, gölgeler) Tailwind theme token'ları olarak merkezileştirin.

### Prompt Uyumu — 99/100

- Programatik: 100/100 · Semantik: 100/100
- İhlaller: yok

**Öneriler:**
- Kart bileşeni için daha belirgin bir 'hover' efekti eklenebilir; örneğin, buton rengi veya gölgesi değişebilir.
- Fiyat etiketi ve 'Enroll Now' butonu arasındaki hizalama mobil görünümde kontrol edilebilir.
- Thumbnail uses a CSS gradient placeholder rather than an actual <img> with src; consider adding an <img> tag with a fallback gradient so the placeholder is structurally explicit and accessible.
- Price is shown as a discounted value; if the prompt should also be satisfied for non-discount scenarios, consider making the struck-through price conditional or removing it to keep the card minimal.


---

# Loomina Analiz Raporu — Gemini 3.5 Flash

- **Model:** `google/gemini-3.5-flash`
- **Tarih:** 02.06.2026 12:56:46
- **Üretim Süresi:** 15610 ms
- **Genel Skor:** 83/100
- **Karar Yöntemi:** Konsensüs (iki hakem ortalaması)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3
- **J3 (Tahkimci) çağrılan metrikler:** Yok — iki hakem tüm metriklerde uzlaştı.

## Kullanıcı Promptu

Create a modern course card component for an online education platform. It must include a thumbnail image placeholder, course title, instructor name, price tag, and a prominent 'Enroll Now' button. Add a subtle hover effect. Use Tailwind CSS for styling. Do not write any explanations, output only the code.

## Üretilen Kod

```html
<div class="flex items-center justify-center min-h-screen bg-slate-50 p-6">
  <!-- Course Card Container -->
  <div class="group relative flex flex-col w-full max-w-[360px] bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-1">
    
    <!-- Thumbnail Image Wrapper -->
    <div class="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl bg-slate-100">
      <!-- Category Badge -->
      <span class="absolute top-3 left-3 z-10 bg-indigo-600/95 backdrop-blur-sm text-white text-xs font-semibold tracking-wide px-2.5 py-1 rounded-full shadow-sm">
        Development
      </span>
      
      <!-- Image Placeholder (Using a beautiful unsplash tech image) -->
      <img 
        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80" 
        alt="Web Development Course Thumbnail" 
        class="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
        loading="lazy"
      />
      
      <!-- Subtle Overlay on Hover -->
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    <!-- Card Content -->
    <div class="flex flex-col p-5 flex-grow">
      
      <!-- Instructor & Rating Row -->
      <div class="flex items-center justify-between gap-2">
        <span class="text-xs font-semibold text-slate-400 tracking-wider uppercase">
          Sarah Jenkins
        </span>
        
        <!-- Rating -->
        <div class="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-md">
          <svg class="w-3.5 h-3.5 text-amber-500 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span class="text-xs font-bold text-amber-700">4.9</span>
        </div>
      </div>

      <!-- Course Title -->
      <h3 class="mt-2.5 text-slate-800 font-bold text-lg leading-snug group-hover:text-indigo-600 transition-colors duration-200 line-clamp-2">
        The Ultimate Next.js & Tailwind CSS Masterclass
      </h3>

      <!-- Course Meta Stats -->
      <div class="flex items-center gap-4 mt-3.5 pb-4 border-b border-slate-100 text-xs text-slate-500 font-medium">
        <div class="flex items-center gap-1.5">
          <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>24.5 Hours</span>
        </div>
        <div class="flex items-center gap-1.5">
          <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
          <span>142 Lectures</span>
        </div>
      </div>

      <!-- Footer: Price & CTA Button -->
      <div class="flex items-center justify-between gap-4 mt-4">
        <!-- Price Tag -->
        <div class="flex flex-col">
          <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider leading-none">Price</span>
          <div class="flex items-baseline mt-1">
            <span class="text-2xl font-extrabold text-slate-900 tracking-tight">$84.99</span>
            <span class="text-sm font-medium text-slate-400 line-through ml-1.5">$129.99</span>
          </div>
        </div>

        <!-- Enroll Now Button -->
        <button class="relative inline-flex items-center justify-center px-5 py-3 overflow-hidden font-semibold text-sm text-white bg-indigo-600 rounded-xl shadow-md shadow-indigo-200 hover:shadow-lg hover:shadow-indigo-300 transition-all duration-300 ease-out active:scale-98 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Enroll Now
        </button>
      </div>

    </div>
  </div>
</div>
```

## Hakem Skor Dökümü (J1 / J2 / J3)

| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |
|---|---|---|---|---|---|
| Okunabilirlik | 95 | 82 | — | **89** | Ortalama (J1-J2) |
| Performans | 95 | 82 | — | **89** | Ortalama (J1-J2) |
| Güvenlik | 100 | 95 | — | **98** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 45 | 35 | — | **40** | Ortalama (J1-J2) |
| Prompt Uyumu | 100 | 98 | — | **99** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 89/100

**Öneriler:**
- SVG ikonları ayrı bir bileşen olarak dışa aktarmak, kodun tekrar kullanılabilirliğini artırabilir ve ana bileşeni daha temiz hale getirebilir.
- Eksik erişilebilirlik özellikleri (örneğin düğme için aria-label) eklemek, kodun genel kalitesini artırır.
- Replace the non-standard 'active:scale-98' class with a valid Tailwind scale utility like 'active:scale-95' to avoid silent failures and improve clarity.
- Remove or fix the misleading 'Image Placeholder' comment, or rename the section to 'Course Thumbnail' to accurately reflect that an actual image is used.

### Performans — 89/100

**Öneriler:**
- Büyük görsel için yükleme sürelerini azaltmak adına `srcset` ve `sizes` nitelikleri ekleyerek responsive image tekniği uygulanabilir.
- Görsel yer tutucusu olarak düşük çözünürlüklü bir placeholder veya blur-up tekniği kullanmak, LCP (Largest Contentful Paint) süresini iyileştirebilir.
- Görsele `decoding="async"` ekleyin ve Unsplash URL'sine farklı genişlikler için `srcset` parametreleri tanımlayarak responsive görsel kullanın.
- Kartın hover sırasında `-translate-y-1` ve `scale-105` gibi animasyonlarda `will-change: transform` ipucu ekleyerek tarayıcının katman oluşturmasını önceden optimize edin.

### Güvenlik — 98/100

**Öneriler:**
- Harici görsel kaynağı (Unsplash) için Content Security Policy (CSP) başlıklarının sunucu tarafında yapılandırılması önerilir.
- Kodda güvenlik açığı bulunmamaktadır.
- Bileşen gerçek verilerle kullanılacaksa prop olarak gelen değerler için XSS riski taşımayan tipler (React'in otomatik escape'i) tercih edilmeli, gerektiğinde DOMPurify ile sanitization eklenmelidir.
- Görsel kaynakları için allowed origins (CSP) ve srcset ile responsive güvenli yükleme pratikleri değerlendirilmelidir.

### Sürdürülebilirlik — 40/100

**Öneriler:**
- Kartı dinamik veri alabilen bir bileşen (ör. React, Vue) haline getirip başlık, fiyat, eğitmen gibi alanları prop olarak alacak şekilde soyutlayın.
- Tekrar eden stil gruplarını (ör. badge, buton) ayrı Tailwind bileşenleri veya özel utility sınıfları olarak tanımlayarak değişiklikleri tek noktadan yönetin.
- Bileşeni CourseCard, CourseThumbnail, RatingBadge, PriceTag, EnrollButton gibi alt bileşenlere ayırın ve veriyi props ile geçirerek yeniden kullanılabilirliği artırın.
- Görsel için onerror fallback, fiyat/kategori gibi tekrar eden değerler için constants.ts dosyası ekleyin ve rating/button için aria-label ile erişilebilirlik ile birlikte test edilebilir yapı kurun.

### Prompt Uyumu — 99/100

- Programatik: 100/100 · Semantik: 100/100
- İhlaller: yok

**Öneriler:**
- Kart bileşenini daha modüler hale getirmek için fiyat, eğitmen adı gibi verileri prop olarak alacak şekilde bir React bileşenine dönüştürebilirsiniz.
- Erişilebilirliği artırmak için 'Enroll Now' butonuna aria-label ekleyebilir ve görsel için daha açıklayıcı bir alt metin kullanabilirsiniz.
- Prompt istediği için tam anlamıyla bir 'placeholder' görsel yerine gerçek Unsplash URL'si kullanılmış; net bir placeholder davranışı isteniyorsa img etiketi yerine açıkça işaretlenmiş bir placeholder div tercih edilebilir.
- Enroll Now butonuna tıklama sonrası herhangi bir etkileşim (ör. toast, modal veya yönlendirme) tanımlanmamış; interaktif bir akış hedefleniyorsa butona bir onClick handler eklemek faydalı olur.
