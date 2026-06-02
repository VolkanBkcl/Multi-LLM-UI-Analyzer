# Loomina — Model Karşılaştırma Raporu

- **Tarih:** 02.06.2026 13:07:07
- **Karşılaştırılan Model Sayısı:** 3

## Kullanıcı Promptu

Create a modern course card component for an online education platform. It must include a thumbnail image placeholder, course title, instructor name, price tag, and a prominent 'Enroll Now' button. Add a subtle hover effect. Use Tailwind CSS for styling. Do not write any explanations, output only the code.

## Karşılaştırma Tablosu

| Model | Genel | Okunabilirlik | Performans | Güvenlik | Sürdürülebilirlik | Prompt Uyumu |
|---|---|---|---|---|---|---|
| DeepSeek V4 Pro | 83 | 93 | 90 | 99 | 32 | 99 |
| Qwen3.6 Plus | 82 | 81 | 90 | 98 | 40 | 99 |
| Gemini 3.5 Flash | 82 | 87 | 92 | 98 | 34 | 98 |

---

# Loomina Analiz Raporu — DeepSeek V4 Pro

- **Model:** `deepseek/deepseek-v4-pro`
- **Tarih:** 02.06.2026 13:07:07
- **Üretim Süresi:** 65368 ms
- **Genel Skor:** 83/100
- **Karar Yöntemi:** Konsensüs (iki hakem ortalaması)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3
- **J3 (Tahkimci) çağrılan metrikler:** Yok — iki hakem tüm metriklerde uzlaştı.

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
| Okunabilirlik | 96 | 90 | — | **93** | Ortalama (J1-J2) |
| Performans | 98 | 82 | — | **90** | Ortalama (J1-J2) |
| Güvenlik | 100 | 97 | — | **99** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 25 | 38 | — | **32** | Ortalama (J1-J2) |
| Prompt Uyumu | 98 | 99 | — | **99** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 93/100

**Öneriler:**
- Yıldız SVG kodu tekrar kullanılacaksa ayrı bir bileşen olarak çıkarılabilir.
- Thumbnail için placeholder yorumu biraz daha açıklayıcı olabilir (örn. 'Kurs görseli placeholder').
- Bazı çok uzun Tailwind class dizelerini (özellikle button ve thumbnail div'lerinde) satır sonlarında mantıksal gruplara bölerek okunabilirliği artırabilirsin.
- İnline SVG path'lerini ayrı küçük bileşenlere veya sembolik icon kütüphanesine çıkararak ana kart yapısını daha sade tutabilirsin.

### Performans — 90/100

**Öneriler:**
- Eğer bu bileşen React'te kullanılacaksa, render içinde inline SVG ve sabit metinler dışında pahalı bir işlem olmadığı için mevcut haliyle ekstra optimizasyon gereksizdir.
- Tailwind 'group-hover' ve 'transition' efektleri GPU tarafından verimli işlenir, performans açısından herhangi bir iyileştirme önerilmez.
- `transition-all` yerine yalnızca değişen özellikleri listeleyin (örn. `transition-[transform,box-shadow,colors]`) → tarayıcının gereksiz property interpolation yapmasını önler.
- Thumbnail ve 'Enroll Now' katmanlarındaki `backdrop-blur` ve büyük gradient overlay'leri düşük GPU'lu cihazlar için koşullu hale getirin veya kaldırın.

### Güvenlik — 99/100

**Öneriler:**
- Kullanıcı girdisi veya API verisi render edilmesi durumunda XSS riskini önlemek için `dangerouslySetInnerHTML` kullanılıyorsa DOMPurify ile sanitizasyon uygulayın.
- Form veya dosya yükleme eklenirse client-side input validasyonu ve dosya tipi/boyut kontrolü ekleyin, ancak sunucu tarafı doğrulamasının asıl güvenlik katmanı olduğunu unutmayın.
- Enroll Now butonu bir aksiyon tetiklediğinde, kullanıcı kimlik doğrulama durumunu server-side validate edin; client-side route guard'a güvenmeyin.
- Dinamik veri (ör. kurs başlığı, eğitmen adı) prop olarak geçilecekse, React'in varsayılan escaping'inin korunduğundan emin olun ve dangerouslySetInnerHTML kullanmaktan kaçının.

### Sürdürülebilirlik — 32/100

**Öneriler:**
- Kart bileşenini CourseThumbnail, CourseInfo, InstructorBadge, Rating, PriceTag gibi alt bileşenlere ayırarak modülerliği artırın.
- Kurs verilerini (başlık, fiyat, eğitmen) bir prop veya sabit dosyasından alın; magic string'leri ve sabit değerleri constants.ts gibi bir dosyaya taşıyın.
- Kartı bir React/Vue bileşen fonksiyonuna çevirip tüm alanları (title, instructor, price, rating, image) props olarak alacak şekilde tasarlayın; böylece her kurs için kodu kopyalamadan yeniden kullanılabilir.
- Avatar, Badge (Featured/Category), PriceTag ve EnrollButton gibi tekrar eden UI parçalarını ayrı alt bileşenlere ve ortak sabitlere (constants.ts) ayırarak modülerliği artırın.

### Prompt Uyumu — 99/100

- Programatik: 100/100 · Semantik: 95/100
- İhlaller: yok

**Öneriler:**
- Eksiksiz üretim: Prompt'ta doğrudan istenmeyen alt bileşenler (kategori, yıldız puanı, ders sayısı) eklenmiş. Sadece istenen öğelerle sınırlı kalarak daha sıkı talimat uyumu sağlanabilir.
- Yer tutucu görsel: Thumbnail için SVG simge yerine anlamsal bir 'image placeholder' (ör. img wrapper) kullanmak semantik uyumu artırabilir.
- Price tag could explicitly label currency (e.g., '$89.00') for clearer professional presentation in some locales.
- Consider adding aria-label or accessibility attributes to the Enroll Now button for better screen reader support.


---

# Loomina Analiz Raporu — Qwen3.6 Plus

- **Model:** `qwen/qwen3.6-plus`
- **Tarih:** 02.06.2026 13:07:07
- **Üretim Süresi:** 41240 ms
- **Genel Skor:** 82/100
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
| Okunabilirlik | 82 | 80 | — | **81** | Ortalama (J1-J2) |
| Performans | 100 | 80 | — | **90** | Ortalama (J1-J2) |
| Güvenlik | 100 | 95 | — | **98** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 45 | 35 | — | **40** | Ortalama (J1-J2) |
| Prompt Uyumu | 100 | 98 | — | **99** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 81/100

**Öneriler:**
- 5 yıldızlı derecelendirme için aynı SVG kodunu tekrarlamak yerine bir döngü veya template kullanarak kopyala-yapıştır (DRY ihlali) azaltılabilir.
- Yorumlar (ör. '<!-- Card Container -->') yapının ne olduğunu söylüyor ancak bağlam zaten açık; gereksiz yorumlar kaldırılıp sadece kritik noktalara açıklama eklenmeli.
- Replace the five duplicated star SVG paths with a reusable <symbol>/<use> pattern or a small inline template to eliminate copy-paste noise.
- Extract long Tailwind class strings into named utility groups or component classes if this card is to be reused, to keep the markup scannable.

### Performans — 90/100

**Öneriler:**
- Herhangi bir dinamik işlev eklenmediği için performans iyileştirmesine gerek yoktur. İleride React/Vue gibi bir framework’e taşınırsa liste render'larında key prop ve memoization kullanımına dikkat edilmelidir.
- Büyük veri listeleri render edilecekse sanallaştırma (virtualization) teknikleri araştırılmalıdır.
- Tailwind CDN scriptini kaldırıp, build aşamasında derlenmiş (purge edilmiş) Tailwind CSS dosyasını kullan; bu hem boyutu küçültür hem de render-blocking'i ortadan kaldırır.
- Google Fonts'ta sadece kullanılan ağırlıkları (ör. 400, 600, 700) seç ve font-display: swap ile birlikte <link rel='preload'> kullanarak kritik fontun daha hızlı yüklenmesini sağla.

### Güvenlik — 98/100

**Öneriler:**
- Harici CDN kaynakları için Subresource Integrity (SRI) ekleyerek tedarik zinciri saldırılarına karşı koruma sağlayın.
- Üretim ortamında Tailwind CSS'i yerel olarak derleyerek CDN bağımlılığını kaldırın.
- Tailwind CDN yerine production build sürecinde derlenmiş CSS kullanın ve CDN kullanılacaksa Subresource Integrity (SRI) hash ekleyin.
- Eğer ileride dinamik veri (kurs başlığı, eğitmen adı, fiyat) eklenecekse, tüm kullanıcı girdilerini React/framework escape mekanizması ile render edin; bu statik HTML'de doğrudan innerHTML kullanmaktan kaçının.

### Sürdürülebilirlik — 40/100

**Öneriler:**
- Yıldız derecelendirmesi gibi tekrar eden yapıları yeniden kullanılabilir bir bileşen veya şablon parçası haline getirin.
- Kurs başlığı, fiyat, eğitmen gibi sabit verileri bir yapılandırma objesine (ör. JavaScript nesnesi) taşıyarak değiştirilebilirliği artırın.
- Veriyi (başlık, eğitmen, fiyat, puan, kategori) bir JS data objesinden veya props'tan besleyerek sabit metinlerden kurtarın ve yıldız SVG'sini bir döngüyle tek seferde renderlayın.
- Kartı React/Vue/Svelte gibi bir framework'te küçük bileşenlere (Thumbnail, Badge, CategoryTag, InstructorInfo, Rating, PriceTag, EnrollButton) ayırın ve renk/gölge gibi tasarım değerlerini Tailwind theme.config veya CSS custom property token'ları olarak soyutlayın.

### Prompt Uyumu — 99/100

- Programatik: 100/100 · Semantik: 100/100
- İhlaller: yok

**Öneriler:**
- Thumbnail için placeholder görseli SVG yerine gerçek bir resim etiketi (<img>) ile sağlanabilir, ancak mevcut hali de kabul edilebilir.
- Kart bileşeni tek başına çalışır durumda, ancak bir bileşen kütüphanesi bağlamında yeniden kullanılabilirlik için veriler prop olarak alınabilir.
- Thumbnail is purely a gradient+icon placeholder; consider using a real placeholder image element (e.g., <img src='...'>) to better represent an actual course thumbnail.
- Hover effect could include a slight color shift on the card body (not just shadow/translate) to make the interaction feel even more polished.


---

# Loomina Analiz Raporu — Gemini 3.5 Flash

- **Model:** `google/gemini-3.5-flash`
- **Tarih:** 02.06.2026 13:07:07
- **Üretim Süresi:** 15610 ms
- **Genel Skor:** 82/100
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
| Okunabilirlik | 88 | 85 | — | **87** | Ortalama (J1-J2) |
| Performans | 98 | 85 | — | **92** | Ortalama (J1-J2) |
| Güvenlik | 100 | 95 | — | **98** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 25 | 42 | — | **34** | Ortalama (J1-J2) |
| Prompt Uyumu | 98 | 97 | — | **98** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 87/100

**Öneriler:**
- Uzun inline SVG'leri ayrı bir ikon bileşenine çıkararak kodun ana yapısını daha temiz ve taranabilir hale getirin.
- Erişilebilirlik için ikonlara `aria-label` veya `role='img'` ekleyin ve ikonların anlamını açıklayan metinler kullanın.
- Bölüm yorumlarını daha kısa ve öz tutun; örneğin 'Image Placeholder (Using a beautiful unsplash tech image)' yerine sadece 'Course Thumbnail' yeterli olacaktır.
- Çok uzun Tailwind class dizelerini (özellikle Enroll Now butonu) birden fazla satıra bölerek okunabilirliği artırın; @apply ile component class'larına çıkarmak da bir seçenektir.

### Performans — 92/100

**Öneriler:**
- Performansla ilgili doğrudan bir sorun olmamakla birlikte, ürün seviyesinde görsel optimizasyonu için `<img>` etiketine `srcset` ve `sizes` öznitelikleri eklenerek farklı ekran çözünürlüklerine uygun boyutlarda görsel sunulması sağlanabilir.
- Kartın içeriği büyük bir liste içinde render edilecekse, listeye `key` ataması yapılması veya sanal kaydırma (virtualization) kullanılması gerekebilir; şu anki tekil bileşen için bu geçerli değildir.
- `transition-all` yerine `transition-[transform,opacity,box-shadow,colors]` gibi yalnızca gerçekten değişen özellikleri listeleyerek tarayıcının gereksiz property animasyonlarını atlamasını sağlayın.
- `<img>` etiketine explicit `width` ve `height` attribute'ları ekleyerek ve `srcset`/`sizes` kullanarak Largest Contentful Paint ve Cumulative Layout Shift metriklerini iyileştirin.

### Güvenlik — 98/100

**Öneriler:**
- Kod zaten güvenli, ancak ileride kurs başlığı veya eğitmen adı gibi değişken veriler dinamik olarak render edilecekse, React'in varsayılan JSX otomatik XSS koruması kullanılmalı ve asla 'dangerouslySetInnerHTML' kullanılmamalıdır.
- Bu statik bileşende güvenlik riski bulunmamakla birlikte, tüm referansların HTTPS üzerinden yüklendiği teyit edilmelidir (unsplash görseli zaten HTTPS kullanmakta).
- Eğer ileride dinamik içerik (kurs başlığı, eğitmen adı, fiyat) props olarak gelecekse, dangerouslySetInnerHTML veya URL parametre enjeksiyonundan kaçınmak için girdi doğrulama ve sanitization ekleyin.
- Harici Unsplash görseli yerine kendi CDN'inizi kullanmak, üçüncü taraf izleme riskini ve gizlilik endişelerini ortadan kaldırır.

### Sürdürülebilirlik — 34/100

**Öneriler:**
- Bileşeni React/JSX olarak oluşturun; CourseCard, Thumbnail, Rating, Price gibi alt bileşenlere ayırın. Sabit metinleri ve URL'leri constants.ts dosyasına çıkarın.
- Loading, error ve empty state'leri yönetmek için mantık ekleyin ve props/API verileriyle test edilebilir hale getirin.
- CourseCard'ı React/Vue + TypeScript ile yazıp `Course` tipinde bir prop interface tanımlayın; tüm veriyi dışarıdan enjekte edilebilir hale getirerek modifiabiliteyi artırın.
- Star, RatingBadge, PriceTag, EnrollButton gibi tekrarlayan parçaları alt bileşenlere ve sabit renk/süre değerlerini (indigo-600, 300ms vb.) `constants.ts` / Tailwind theme token'larına çıkararak yeniden kullanılabilirliği sağlayın.

### Prompt Uyumu — 98/100

- Programatik: 100/100 · Semantik: 95/100
- İhlaller: yok

**Öneriler:**
- Prompt'ta istenmeyen ekstra bileşenler (kategori rozeti, puan, ders süresi) çıkarılarak yalnızca belirtilen öğelere odaklanılabilir.
- Thumbnail için 'placeholder' ifadesi kullanılmış; gerçek bir görsel yerine gri bir arka plan veya ikon kullanılması daha uygun olabilir.
- active:scale-98 yerine geçerli Tailwind arbitrary value sözdizimi olan active:scale-[0.98] kullanın.
- Thumbnail için gerçek bir placeholder bileşeni (ör. SVG/gradient arka plan) eklemeyi veya image yüklenemediğinde fallback davranışı tanımlamayı düşünün.
