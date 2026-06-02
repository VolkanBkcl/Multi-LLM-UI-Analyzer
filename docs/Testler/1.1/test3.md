# Loomina — Model Karşılaştırma Raporu

- **Tarih:** 02.06.2026 13:03:45
- **Karşılaştırılan Model Sayısı:** 3

## Kullanıcı Promptu

Create a modern course card component for an online education platform. It must include a thumbnail image placeholder, course title, instructor name, price tag, and a prominent 'Enroll Now' button. Add a subtle hover effect. Use Tailwind CSS for styling. Do not write any explanations, output only the code.

## Karşılaştırma Tablosu

| Model | Genel | Okunabilirlik | Performans | Güvenlik | Sürdürülebilirlik | Prompt Uyumu |
|---|---|---|---|---|---|---|
| DeepSeek V4 Pro | 83 | 86 | 94 | 98 | 42 | 96 |
| Qwen3.6 Plus | 82 | 88 | 78 | 96 | 48 | 99 |
| Gemini 3.5 Flash | 83 | 89 | 96 | 96 | 34 | 100 |

---

# Loomina Analiz Raporu — DeepSeek V4 Pro

- **Model:** `deepseek/deepseek-v4-pro`
- **Tarih:** 02.06.2026 13:03:45
- **Üretim Süresi:** 65368 ms
- **Genel Skor:** 83/100
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
| Okunabilirlik | 92 | 80 | — | **86** | Ortalama (J1-J2) |
| Performans | 100 | 88 | — | **94** | Ortalama (J1-J2) |
| Güvenlik | 100 | 95 | — | **98** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 60 | 28 | 42 | **42** | Medyan (J1·J2·J3) — tahkim |
| Prompt Uyumu | 94 | 98 | — | **96** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 86/100

**Öneriler:**
- Erişilebilirliği artırmak ve kod amacını netleştirmek için SVG ikonlarına `aria-hidden='true'` ve `role='img'` eklenebilir.
- Fiyat, puan gibi yer tutucu değerlerin ne amaçla sabit olduğu kısa bir yorumla belirtilerek, bu alanların dinamik olması gerektiği daha açık hale getirilebilir.
- Break very long Tailwind class strings across multiple lines or extract repeated patterns to improve line readability.
- Remove obvious comments like '<!-- Category -->' and '<!-- Course Title -->' since the surrounding markup already makes the role clear; keep only comments that explain non-obvious purpose (like the hover border glow).

### Performans — 94/100

**Öneriler:**
- Bu kod performans açısından zaten son derece hafif ve sorunsuzdur. Gelecekte dinamik hale getirilirse, örneğin buton tıklamalarında debounce kullanılabilir.
- SVG inline kullanımı ekstra HTTP isteğini önler, bu da performans için olumlu bir uygulamadır.
- Çok sayıda kart listelenecekse her kart için `will-change: transform` veya `content-visibility: auto` kullanılarak off-screen render maliyeti düşürülebilir.
- Hover sırasında aynı anda birçok özelliğe (shadow, translate, ring, bg) transition uygulanıyor; bunları tek bir `transform`/`opacity` animasyonuna indirgemek paint maliyetini azaltır.

### Güvenlik — 98/100

**Öneriler:**
- Eğer ileride dinamik veri (kullanıcı girdisi) eklenecekse, içerik JSX'e doğrudan eklenmeden önce React'in otomatik XSS koruması kullanılmalı veya `dangerouslySetInnerHTML` için DOMPurify ile sanitizasyon yapılmalıdır.
- API entegrasyonu eklendiğinde, token yönetimi için `localStorage` yerine HttpOnly cookie'ler tercih edilmeli ve hata mesajları kullanıcıya gösterilmeden önce stack trace bilgisi temizlenmelidir.
- Enroll Now butonuna tıklandığında kullanıcı kimlik doğrulaması gerekiyorsa, yetkilendirme kontrolünün client-side PrivateRoute yerine server-side enforce edildiğinden emin olun.
- Fiyat ve kurs bilgileri API'den gelecekse, render öncesi DOMPurify veya framework'ün escape mekanizması ile sanitize edildiğinden emin olun; şu an hardcoded olduğu için risk yok ancak dinamikleştirildiğinde XSS riski doğabilir.

### Sürdürülebilirlik — 42/100

**Öneriler:**
- Bileşeni React/Vue gibi bir framework'te prop alan bir yapıya dönüştür.
- Kartın alt bölümlerini (thumbnail, içerik, buton) bağımsız alt bileşenlere ayırarak yeniden kullanılabilirliği artır.
- Kodu React/Vue gibi bir bileşen yapısına taşıyarak course verisini props veya bir data objesi olarak dışarıdan alın; böylece yeniden kullanılabilirlik ve test edilebilirlik sağlanır.
- Thumbnail, fiyat, etiket gibi sık değişebilecek alanları küçük alt bileşenlere (CourseThumbnail, PriceTag, EnrollButton) ayırarak SRP'yi uygulayın ve magic string'leri constants dosyasına çıkarın.

### Prompt Uyumu — 96/100

- Programatik: 100/100 · Semantik: 85/100
- İhlaller: yok

**Öneriler:**
- Thumbnail alanında SVG simgesi yerine, 'image placeholder' ifadesine daha uygun olarak bir resim etiketi (<img>) veya görseli temsil eden bir yapı kullanılması önerilir.
- Kartın içeriği zenginleştirilmiş olsa da, prompt'ta istenmeyen ek öğeler (kategori, puan, ders sayısı) eklenmiş; talimatlara tam uyum için yalnızca istenen bileşenlere odaklanılması daha iyi olur.
- Thumbnail could include a course category icon or image-related placeholder text overlay to better convey it as a course thumbnail.
- Consider adding a duration/level badge (e.g., '12 hours • Beginner') to provide more context for learners.


---

# Loomina Analiz Raporu — Qwen3.6 Plus

- **Model:** `qwen/qwen3.6-plus`
- **Tarih:** 02.06.2026 13:03:45
- **Üretim Süresi:** 41240 ms
- **Genel Skor:** 82/100
- **Karar Yöntemi:** Tahkim (J3)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3, x-ai/grok-4.3
- **J3 (Tahkimci) çağrılan metrikler:** Performans, Sürdürülebilirlik

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
| Okunabilirlik | 90 | 85 | — | **88** | Ortalama (J1-J2) |
| Performans | 100 | 72 | 78 | **78** | Medyan (J1·J2·J3) — tahkim |
| Güvenlik | 100 | 92 | — | **96** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 65 | 35 | 48 | **48** | Medyan (J1·J2·J3) — tahkim |
| Prompt Uyumu | 100 | 98 | — | **99** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 88/100

**Öneriler:**
- Erişilebilirlik için kartı <article> veya <section> gibi anlamsal bir öğeyle sarmalayarak yapıyı daha anlaşılır kılın.
- Yıldız simgeleri kod tekrarını azaltmak için bir SVG <defs> veya tekrar kullanılabilir bir bileşen içinde tanımlanabilir.
- Yıldız SVG'lerini tek bir sembol/sprite veya kısa bir döngüyle (ör. tekrar eden 5 yıldız için 4 tam + 1 boş yıldız kalıbı) birleştirerek tekrarı azaltın.
- 'Card Container' ve 'Content' gibi yapısal olarak bariz olan yorumları kaldırıp yalnızca niyeti açıklayan yorumları (ör. 'group-hover davranışı için') bırakın.

### Performans — 78/100

**Öneriler:**
- Mevcut haliyle yüksek performanslıdır; ek optimizasyon gerekmez.
- Tailwind CDN yerine production build (PostCSS veya Tailwind CLI ile derlenmiş küçükük CSS) kullanın, böylece her sayfa yüklenişinde tarayıcıda stil üretimi yapılmaz.
- Google Fonts için `preconnect` ipucu ekleyin veya sistem font yığını (font stack) kullanarak harici font isteğini azaltın/kaldırın.

### Güvenlik — 96/100

**Öneriler:**
- Harici CDN kaynakları (Tailwind,Google Fonts) için Subresource Integrity (SRI) doğrulaması eklenebilir.
- Üretim ortamında Tailwind CDN kullanımı yerine npm/build süreciyle derlenmiş Tailwind CSS tercih ederek tedarik zinciri riskini azaltın.
- Bileşene ileride dinamik veri (kurs başlığı, eğitmen adı) bağlanacaksa, React prop'larını render ederken otomatik escape mekanizmasına güvenin ve kullanıcı girdisi için input validasyonu ekleyin.

### Sürdürülebilirlik — 48/100

**Öneriler:**
- Kart verilerini (başlık, eğitmen, fiyat vb.) ayrı bir JavaScript nesnesine veya sabitler dosyasına çıkararak veri ile sunumu ayırın; bu, kartın farklı verilerle kolayca kullanılmasını sağlar.
- Derecelendirme yıldızları veya eğitmen avatarı gibi tekrar eden arayüz bloklarını alt bileşenlere (örneğin, Rating, Avatar) ayırarak modülerliği artırın.
- Statik verileri bir `course` nesnesine veya framework (React/Vue) bileşenine props olarak taşıyarak tek bir Card bileşenini birçok kurs için yeniden kullanılabilir hale getirin.
- 5 yıldız SVG'sini bir döngü/map ile ya da ayrı bir `<Rating>` alt-bileşenine çıkararak tekrarı ortadan kaldırın; ayrıca sabit renkleri ve etiketleri `constants.ts` içinde toplayın.

### Prompt Uyumu — 99/100

- Programatik: 100/100 · Semantik: 100/100
- İhlaller: yok

**Öneriler:**
- Thumbnail kısmı için opsiyonel olarak gerçek resim ekleme imkanı sunulabilir.
- Fiyat etiketinin yanına 'indirim' gibi ek bilgiler eklenerek cazibe artırılabilir.
- Fiyat etiketi biraz daha görsel olarak ön plana çıkarılabilir (örneğin ayrı bir renkli kutu veya vurgu).
- Thumbnail için gerçek bir img etiketi fallback'i eklenip src ile birlikte verilebilir, böylece gerçek görsel entegrasyonu da desteklenir.


---

# Loomina Analiz Raporu — Gemini 3.5 Flash

- **Model:** `google/gemini-3.5-flash`
- **Tarih:** 02.06.2026 13:03:45
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
| Okunabilirlik | 95 | 83 | — | **89** | Ortalama (J1-J2) |
| Performans | 100 | 92 | — | **96** | Ortalama (J1-J2) |
| Güvenlik | 100 | 92 | — | **96** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 30 | 38 | — | **34** | Ortalama (J1-J2) |
| Prompt Uyumu | 100 | 99 | — | **100** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 89/100

**Öneriler:**
- Gereksiz yorum satırlarını (ör. '<!-- Course Card Container -->') kaldırarak kodu daha sade hale getirin.
- Erişilebilirlik için yıldız derecelendirmesine aria-label ekleyin (okunabilirliği dolaylı olarak artırır).
- Bazı açıklayıcı yorumlar zaten elementin kendisinden anlaşılıyor (ör. '<!-- Price Tag -->', '<!-- Rating -->'); bunları kaldırıp yalnızca bölüm ayırıcı yorumları (Card Content, Footer) bırakmak okunabilirliği artırır.
- Çok uzun Tailwind class dizilerini (özellikle Enroll Now button'da) birden fazla satıra bölmek veya `@apply` ile bileşen-düzeyinde soyutlamak, satır uzunluğunu azaltır ve niyeti daha açık hale getirir.

### Performans — 96/100

**Öneriler:**
- Thumbnail için `loading="lazy"` eklenmiş olması iyi; performansı daha da artırmak için `decoding="async"` de eklenebilir.
- Hover efektleri `group-hover:scale-105` gibi transform ile yapılmış, bu GPU'da işlenir ve yeniden boyama (repaint) maliyetini düşürür; mevcut haliyle optimize edilmiştir.
- `transition-all` yerine sadece `transition-[transform,box-shadow,opacity]` gibi spesifik özellikleri geçişlendirerek tarayıcı repaint yükünü azaltın.
- Mobil cihazlarda performans için `backdrop-blur-sm` ve `hover:shadow-xl` gibi pahalı efektleri `@media (hover: hover) ve (pointer: fine)` sorgusuyla sadece destekleyen cihazlara uygulayın.

### Güvenlik — 96/100

**Öneriler:**
- Bileşen ileride gerçek kullanıcı verisi render edecekse, özellikle resim 'alt' metni ve 'Enroll Now' tıklama eylemi gibi dinamik kısımlar için XSS koruması amacıyla input sanitizasyonu değerlendirilmeli.
- Eğer 'Enroll Now' butonu bir API çağrısı tetikleyecekse, token yönetimi asla localStorage'da açık metin tutulmamalı; httpOnly cookie veya güvenli bir auth akışı tercih edilmelidir.
- Gelecekte dinamik içerik (ör. kullanıcı adı, kurs başlığı) eklenirse, tüm girdileri DOMPurify veya React'in doğal escaping'i ile işleyin; asla dangerouslySetInnerHTML kullanmayın.
- Dış kaynaklardan gelen görseller için Content Security Policy (CSP) başlıkları yapılandırarak yalnızca güvenilir domain'lere izin verin.

### Sürdürülebilirlik — 34/100

**Öneriler:**
- Extract all static data (course title, instructor, price, category, etc.) into props or a constants/config file to enable reusability and reduce modification scope.
- Decompose the card into smaller, single-responsibility components (e.g., CourseImage, CourseMeta, PriceTag, EnrollButton) and move business logic into custom hooks for better modularity and testability.
- CourseCard'ı React (veya tercih edilen framework) bileşenine dönüştürüp verileri props olarak al; Rating, Badge, PriceTag, EnrollButton gibi alt bileşenlere ayırarak SRP'yi uygula.
- Sabit değerleri (kategoriler, fiyat formatlama, renk token'ları) ayrı bir `constants.ts`/`tokens.ts` dosyasına çıkar; magic string'leri enum/constant array ile değiştirerek modifiability'yi artır.

### Prompt Uyumu — 100/100

- Programatik: 100/100 · Semantik: 100/100
- İhlaller: yok

**Öneriler:**
- Kart bileşenini daha modüler hale getirmek için fiyat, eğitmen adı gibi veriler prop olarak alınabilir.
- Erişilebilirlik için butona aria-label eklenebilir.
- Karta bir seviye/ders listesi önizlemesi veya ilerleme çubuğu eklemek, online eğitim platformu bağlamını daha da güçlendirir.
- 'Enroll Now' butonuna, fiyat/CTA satırının altında tam genişlikte (full-width) bir alternatif varyant sunmak mobil kullanım için daha iyi dönüşüm sağlayabilir.
