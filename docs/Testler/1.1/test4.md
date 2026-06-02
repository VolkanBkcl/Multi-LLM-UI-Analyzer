# Loomina — Model Karşılaştırma Raporu

- **Tarih:** 02.06.2026 13:05:47
- **Karşılaştırılan Model Sayısı:** 3

## Kullanıcı Promptu

Create a modern course card component for an online education platform. It must include a thumbnail image placeholder, course title, instructor name, price tag, and a prominent 'Enroll Now' button. Add a subtle hover effect. Use Tailwind CSS for styling. Do not write any explanations, output only the code.

## Karşılaştırma Tablosu

| Model | Genel | Okunabilirlik | Performans | Güvenlik | Sürdürülebilirlik | Prompt Uyumu |
|---|---|---|---|---|---|---|
| DeepSeek V4 Pro | 83 | 92 | 95 | 95 | 33 | 99 |
| Qwen3.6 Plus | 81 | 85 | 85 | 93 | 41 | 100 |
| Gemini 3.5 Flash | 81 | 82 | 91 | 98 | 34 | 98 |

---

# Loomina Analiz Raporu — DeepSeek V4 Pro

- **Model:** `deepseek/deepseek-v4-pro`
- **Tarih:** 02.06.2026 13:05:47
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
| Okunabilirlik | 98 | 85 | — | **92** | Ortalama (J1-J2) |
| Performans | 96 | 93 | — | **95** | Ortalama (J1-J2) |
| Güvenlik | 95 | 95 | — | **95** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 35 | 30 | — | **33** | Ortalama (J1-J2) |
| Prompt Uyumu | 100 | 98 | — | **99** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 92/100

**Öneriler:**
- Bileşen içerisindeki SVG ikonu, tekrar kullanılabilir bir ikon bileşenine dönüştürülerek kod tekrarı azaltılabilir.
- Kurs kartının verileri (başlık, fiyat, eğitmen) sabit yazılmak yerine props ile alınarak bileşenin yeniden kullanılabilirliği artırılabilir.
- Wrap long Tailwind class strings onto multiple lines or extract repeated class groups into small helpers to keep lines under ~120 characters.
- Remove or condense obvious section comments (e.g., '<!-- Course Title -->') so only non-trivial markup is commented, reducing visual noise.

### Performans — 95/100

**Öneriler:**
- Bu bileşen React ile kullanılacaksa, tekrar kullanıma uygunluğu artırmak için 'Enroll Now' butonuna tıklama işleyicisinin her render'da yeniden oluşmasını önlemek amacıyla useCallback ile sarılması düşünülebilir.
- Eğer bu kart bir liste içinde çok sayıda render edilecekse, hover efektlerinin GPU'da kalmasını sağlamak için will-change: transform ipucu eklenebilir.
- `transition-all` yerine yalnızca gerçekten değişen özellikleri belirtin (örn. `transition-[transform,shadow,colors]`) tarayıcının her özellik için animasyon kontrolü yapmasını azaltır.
- Gelecekte gerçek görseller eklendiğinde lazy loading (`loading="lazy"`) ve responsive `srcset` kullanarak ağ ve render maliyetini düşürün.

### Güvenlik — 95/100

**Öneriler:**
- Kullanıcıdan veya API'den gelen verilerle (kurs adı, eğitmen) render yapılacaksa, XSS'i önlemek için verileri JSX'te doğrudan kullanmayı sürdürün; dinamik HTML yerleştirme gerekiyorsa DOMPurify ile sanitize edin.
- Kurs fiyatı gibi verileri doğrudan state'e yazarken tür ve format doğrulaması ekleyerek beklenmeyen değerlerin görüntülenmesini engelleyin.
- Enroll Now butonu gerçek API çağrılarına bağlanacaksa, kimlik doğrulama token'larını localStorage yerine httpOnly cookie ile yönetin.
- Dinamik kurs/eğitmen verileri props ile gelecekse, dangerouslySetInnerHTML'den kaçının; gerekirse HTML içeriği DOMPurify ile sanitize edin.

### Sürdürülebilirlik — 33/100

**Öneriler:**
- Kartı alt bileşenlere ayırın: Thumbnail, InstructorInfo, Rating, PriceTag gibi. Bu, her parçanın bağımsız test edilmesini ve yeniden kullanılmasını sağlar.
- Sabit metinleri (kategori, fiyat, eğitmen adı) bir constants.js veya props üzerinden alın; magic string'leri kaldırın.
- Veriyi (title, instructor, price, rating) bir props/data objesine taşıyın ve card'ı parametrik bir component haline getirerek her bölümü (Thumbnail, Price, EnrollButton) alt bileşenlere ayırın.
- Sabit değerleri (kategori adları, fiyat etiketleri, renk paleti) ayrı bir `constants.ts` veya Tailwind config dosyasında toplayarak magic string'leri ortadan kaldırın.

### Prompt Uyumu — 99/100

- Programatik: 100/100 · Semantik: 100/100
- İhlaller: yok

**Öneriler:**
- Görsel yer tutucusu olarak bir SVG ikonu yerine, daha gerçekçi bir görünüm için bir img etiketi ve placeholder resim URL'si kullanılabilir.
- Thumnail alanı için gerçek bir <img> etiketine uygun aspect ratio ve object-cover sınıfları eklenebilir, böylece production'da doğrudan görsel kaynağına bağlanabilir.
- Fiyat etiketinde para birimi sembolü '$' yerine locale-aware format (Intl.NumberFormat) veya 'USD' göstergesi eklemek uluslararası platformlarda daha tutarlı olur.


---

# Loomina Analiz Raporu — Qwen3.6 Plus

- **Model:** `qwen/qwen3.6-plus`
- **Tarih:** 02.06.2026 13:05:47
- **Üretim Süresi:** 41240 ms
- **Genel Skor:** 81/100
- **Karar Yöntemi:** Tahkim (J3)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3, x-ai/grok-4.3
- **J3 (Tahkimci) çağrılan metrikler:** Performans

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
| Okunabilirlik | 88 | 82 | — | **85** | Ortalama (J1-J2) |
| Performans | 100 | 78 | 85 | **85** | Medyan (J1·J2·J3) — tahkim |
| Güvenlik | 98 | 87 | — | **93** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 40 | 42 | — | **41** | Ortalama (J1-J2) |
| Prompt Uyumu | 100 | 99 | — | **100** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 85/100

**Öneriler:**
- Yıldız derecelendirme SVG'leri bir döngü veya yardımcı fonksiyonla oluşturularak kod tekrarı azaltılabilir.
- Fiyat, puan ve 'Best Seller' gibi metinler sabit değişkenlere atanarak bileşenin farklı verilerle yeniden kullanımı kolaylaştırılabilir.
- Düzeltme 1: Tekrarlanan 5 yıldız SVG'sini bir helper fonksiyon veya <use> ile <symbol> referansı kullanarak tek bir tanıma indirgeyerek DRY ihlalini giderin.
- Düzeltme 2: Çok uzun Tailwind class dizilimlerini (özellikle ana kart container'ı) satır sonlarına bölerek okunabilirliği artırın.

### Performans — 85/100

**Öneriler:**
- Üretim ortamında Tailwind CDN yerine derlenmiş CSS kullanmak sayfa yükleme performansını artırabilir.
- Büyük ölçekli kullanımda SVG ikonların inline yerine sprite veya harici dosya olarak sunulması önbellekleme avantajı sağlayabilir.
- Üretim için Tailwind CDN yerine PostCSS veya Tailwind CLI ile derlenmiş bir CSS bundle kullanın; bu ilk yükleme süresini ve JS maliyetini önemli ölçüde azaltır.
- Font yüklemesini kritik içerik için `preload` ile önceliklendirin ve sadece kullanılan ağırlıkları (400,600,700) isteyerek gereksiz ağ trafiğini önleyin.

### Güvenlik — 93/100

**Öneriler:**
- İleride dinamik veri (kullanıcı yorumu, eğitmen adı vb.) render edilecekse XSS riskine karşı DOMPurify gibi bir kütüphane ile sanitizasyon yapın.
- Butona tıklama sonucu bir API isteği yapılacaksa, yanıt mesajları doğrudan kullanıcıya gösterilmeden önce filtrelenmeli (stack trace sızıntısını önlemek için).
- cdn.tailwindcss.com ve Google Fonts link etiketlerine integrity ve crossorigin="anonymous" öznitelikleri ekleyerek SRI koruması sağlayın.
- Üretim ortamında Tailwind CDN'i yerine derlenmiş bir CSS dosyası kullanarak üçüncü taraf CDN'e olan bağımlılığı ve potansiyel tedarik zinciri riskini azaltın.

### Sürdürülebilirlik — 41/100

**Öneriler:**
- Kartı, props ile veri alan bağımsız bir bileşen (React/Vue) olarak yeniden yazın.
- Kurs verilerini (başlık, eğitmen, fiyat vb.) sabit bir yapılandırma dosyasına veya prop olarak dışarıdan alınacak şekilde ayırın.
- Extract repeated markup (5 star SVGs, badge, avatar) into reusable sub-components or a partial/loop, and move hardcoded course data into a constants/config object so the card can be rendered with different data.
- Replace the inline CDN Tailwind script with a proper build configuration that defines design tokens (colors, spacing, shadows) in tailwind.config.js to centralize style changes.

### Prompt Uyumu — 100/100

- Programatik: 100/100 · Semantik: 100/100
- İhlaller: yok

**Öneriler:**
- Thumbnail için gerçek bir görsel yolu veya daha belirgin bir placeholder (ör. 'img' etiketi) kullanılabilir, ancak mevcut SVG ve gradient yeterlidir.
- Fiyat etiketi ve buton düzeni istenen şekilde; ek bir iyileştirme olarak mobil görünümde butonun tam genişlikte olması düşünülebilir.
- Price could be wrapped in a semantic element or have aria-label for better screen reader support.
- Thumbnail could include an actual <img> tag with alt text and a fallback, even if the gradient is decorative.


---

# Loomina Analiz Raporu — Gemini 3.5 Flash

- **Model:** `google/gemini-3.5-flash`
- **Tarih:** 02.06.2026 13:05:47
- **Üretim Süresi:** 15610 ms
- **Genel Skor:** 81/100
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
| Okunabilirlik | 82 | 82 | — | **82** | Ortalama (J1-J2) |
| Performans | 100 | 82 | — | **91** | Ortalama (J1-J2) |
| Güvenlik | 100 | 95 | — | **98** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 30 | 38 | — | **34** | Ortalama (J1-J2) |
| Prompt Uyumu | 98 | 98 | — | **98** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 82/100

**Öneriler:**
- Uzun SVG path'lerini ayrı bir ikon bileşeni veya sabit dosyasına taşıyarak JSX içindeki görsel karmaşayı azaltın.
- Fiyat etiketi ve buton arasındaki boşluk yönetimi için 'gap-4' yerine daha açıklayıcı bir Tailwind değeri veya özel bir spacing token'ı kullanmayı değerlendirin.
- Eğitmen adını bir <p> veya açıkça 'Instructor' etiketiyle birlikte göstererek semantik rolünü netleştirin (örn. <span>Instructor</span> + <p>Sarah Jenkins</p>).
- 'Image Placeholder' yorumunu 'Course Thumbnail' olarak değiştirin ya da kaldırın; gerçek bir Unsplash URL'si kullanıldığı için yer tutucu değil.

### Performans — 91/100

**Öneriler:**
- Kod statik ve herhangi bir performans anti-pattern'i içermediği için mevcut haliyle en verimli yapıdadır. İleride dinamik hale getirilirse (örneğin React ile), render optimizasyonları (memoization) ve async temizlikler için ilgili kontrollerin yapılması önerilir.
- Statik imaj ve SVG'ler tarayıcıda ek yük oluşturmaz, ancak `loading='lazy'` kullanımı olumlu bir optimizasyondur.
- Kart container'ında `transition-all` yerine `transition-[transform,box-shadow,border-color]` gibi sadece değişen özellikleri listeleyerek tarayıcıya daha az iş yükü verin.
- `backdrop-blur-sm` yerine yarı-saydam düz renk (ör. bg-indigo-600/90) kullanmak, özellikle düşük performanslı cihazlarda paint maliyetini azaltır.

### Güvenlik — 98/100

**Öneriler:**
- Eğer bu kartın içeriği ileride dinamik olarak bir API'den gelecekse, kullanıcı girdisi veya API yanıtı doğrudan innerHTML veya dangerouslySetInnerHTML ile render edilmemeli; sadece güvenli JSX interpolation kullanılmalı.
- Kurs fiyatı gibi veriler bir yönetim panelinden geliyorsa, sayısal format ve tip doğrulaması client-side'da yapılmalı, gelen string değerler sayıya dönüştürülmelidir.
- Eğer ileride dinamik veri (API'den gelen kurs bilgileri) eklenecekse, React'in otomatik escaping özelliğine güvenmek yerine gelen içeriklerin beklenen tiplerde olduğunu doğrulayın.
- Görsel kaynakları için `referrerPolicy` ve `crossOrigin` attributeları eklemeyi ve bir Content Security Policy tanımlamayı değerlendirin.

### Sürdürülebilirlik — 34/100

**Öneriler:**
- Kurs verisini (başlık, fiyat, eğitmen vb.) bir obje veya props olarak alacak şekilde bileşeni yeniden düzenleyin; böylece farklı kurs kartları dinamik olarak oluşturulabilir.
- Durum yönetimi (loading, hata, boş veri) ve buton etkileşimi için state ekleyin; buton tıklamasını yönetecek bir event handler tanımlayın.
- Gerçek bir bileşen yapısına dönüştürün: course verisini props veya bir config objesinden alın; Badge, Rating, PriceTag, EnrollButton ve CourseMeta gibi alt bileşenleri ayrı dosyalara ayırarak SRP'yi uygulayın.
- Sık kullanılan değerleri (renk paleti, tipografi, kategori listesi, ikon seti) constants.ts veya Tailwind theme config dosyasına çıkararak magic string'leri ortadan kaldırın ve değiştirilebilirliği artırın.

### Prompt Uyumu — 98/100

- Programatik: 100/100 · Semantik: 95/100
- İhlaller: yok

**Öneriler:**
- Prompt'ta istenmeyen ekstra öğeler (kategori rozeti, puan, süre, ders sayısı) çıkarılarak daha sade bir kart oluşturulabilir.
- Thumbnail için 'placeholder' ifadesi kullanılmış, ancak gerçek bir görsel URL'si verilmiş; isteğe bağlı olarak daha belirgin bir placeholder (ör. gri arka plan üzerinde ikon) kullanılabilir.
- Thumbnail için gerçek bir görsel URL'si yerine prompt 'placeholder' istediği için daha nötr bir placeholder (örn. gradient arka plan + ikon) tercih edilebilir; talimatta 'placeholder' ifadesi literal alınmış olabilir.
- Eğitmen adı ve fiyat gibi içerik değerlerini kolay değiştirilebilir şekilde (örn. açıkça yorum satırlarıyla işaretlenmiş prop benzeri yapı veya tek bir config objesi) sunmak, 'subtle' özelleştirme kolaylığı sağlar.
