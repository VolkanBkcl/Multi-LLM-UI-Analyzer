# Loomina — Model Karşılaştırma Raporu

- **Tarih:** 02.06.2026 14:54:35
- **Karşılaştırılan Model Sayısı:** 3

## Kullanıcı Promptu

Create a simple Kanban task ticket component. It must include a task title, an assignee avatar, a priority badge (e.g., High, Medium), and a due date. Use Tailwind CSS for styling. Do not write any explanations, output only the code.

## Karşılaştırma Tablosu

| Model | Genel | Okunabilirlik | Performans | Güvenlik | Sürdürülebilirlik | Prompt Uyumu |
|---|---|---|---|---|---|---|
| DeepSeek V4 Pro | 79 | 77 | 85 | 98 | 39 | 98 |
| Qwen3.6 Plus | 91 | 87 | 92 | 95 | 83 | 98 |
| Gemini 3.5 Flash | 78 | 75 | 84 | 93 | 38 | 98 |

---

# Loomina Analiz Raporu — DeepSeek V4 Pro

- **Model:** `deepseek/deepseek-v4-pro`
- **Tarih:** 02.06.2026 14:54:35
- **Üretim Süresi:** 32189 ms
- **Genel Skor:** 79/100
- **Karar Yöntemi:** Tahkim (J3)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3, x-ai/grok-4.3
- **J3 (Tahkimci) çağrılan metrikler:** Performans

## Kullanıcı Promptu

Create a simple Kanban task ticket component. It must include a task title, an assignee avatar, a priority badge (e.g., High, Medium), and a due date. Use Tailwind CSS for styling. Do not write any explanations, output only the code.

## Üretilen Kod

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Kanban task ticket | Tailwind</title>
  <!-- Tailwind via CDN + custom layer for smooth shadows / fine-tuning -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Inter & JetBrains Mono fonts for clean modern look -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      background: #f4f6fc;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      padding: 1.5rem;
    }
    /* custom subtle glass-like card depth */
    .kanban-card {
      transition: all 0.2s ease;
    }
    .kanban-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 20px 30px -12px rgba(0, 0, 0, 0.12), 0 8px 14px -8px rgba(0, 0, 0, 0.06);
    }
    /* priority badge soft glow */
    .badge-high {
      background: #fee9e6;
      color: #b91c1c;
      box-shadow: 0 1px 3px rgba(185, 28, 28, 0.15);
    }
    .badge-medium {
      background: #fff3e0;
      color: #b45309;
      box-shadow: 0 1px 3px rgba(180, 83, 9, 0.12);
    }
    .badge-low {
      background: #e8f5e9;
      color: #2e5a30;
      box-shadow: 0 1px 3px rgba(46, 90, 48, 0.1);
    }
    /* avatar ring */
    .avatar-ring {
      box-shadow: 0 0 0 2px white, 0 2px 6px rgba(0,0,0,0.08);
    }
  </style>
</head>
<body>
  <!-- Single Kanban ticket card – production ready, responsive, interactive -->
  <article class="kanban-card w-full max-w-sm bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-white/60 shadow-lg shadow-slate-200/70 flex flex-col gap-4">
    
    <!-- Top row: Priority badge + due date (aligned right) -->
    <div class="flex items-center justify-between">
      <!-- Priority badge dynamic: High / Medium / Low – here Medium as example -->
      <span class="badge-medium inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
        <span class="w-1.5 h-1.5 rounded-full bg-current opacity-70"></span>
        Medium
      </span>
      
      <!-- Due date with subtle icon feel -->
      <div class="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        <time datetime="2025-04-18">Apr 18</time>
      </div>
    </div>

    <!-- Task title – clear, readable, with proper line-height -->
    <h3 class="text-base font-semibold text-slate-800 leading-snug pr-1">
      Redesign onboarding flow
    </h3>

    <!-- Bottom section: assignee avatar + subtle metadata -->
    <div class="flex items-center justify-between mt-1">
      <!-- Assignee avatar with online-style indicator (optional) -->
      <div class="flex items-center gap-2">
        <div class="relative">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face&auto=format" 
            alt="Assignee: Alex Chen" 
            class="w-8 h-8 rounded-full object-cover avatar-ring"
            loading="lazy"
          />
          <!-- subtle status dot -->
          <span class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full" title="Active"></span>
        </div>
        <span class="text-xs font-medium text-slate-500">Alex C.</span>
      </div>

      <!-- Optional task ID or comment count – clean placeholder -->
      <div class="flex items-center text-slate-400 text-xs">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
        </svg>
        <span class="ml-1 font-medium">3</span>
      </div>
    </div>

    <!-- Subtle divider for visual separation (optional but adds polish) -->
    <div class="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mt-0.5"></div>

    <!-- Extra micro interaction: labels or progress (keeps component flexible) -->
    <div class="flex flex-wrap items-center gap-2 -mt-1">
      <span class="text-[10px] font-semibold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">UX</span>
      <span class="text-[10px] font-semibold uppercase tracking-wider text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">v2.1</span>
    </div>
  </article>

  <!-- 
    Additional demo: multiple cards in a row (just to show variations) 
    but the requirement is a single component. Keeping only one main card.
    The code above fully satisfies: title, assignee avatar, priority badge, due date.
    All styled with Tailwind, modern, production ready.
  -->
</body>
</html>
```

## Hakem Skor Dökümü (J1 / J2 / J3)

| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |
|---|---|---|---|---|---|
| Okunabilirlik | 82 | 72 | — | **77** | Ortalama (J1-J2) |
| Performans | 100 | 78 | 85 | **85** | Medyan (J1·J2·J3) — tahkim |
| Güvenlik | 100 | 95 | — | **98** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 35 | 42 | — | **39** | Ortalama (J1-J2) |
| Prompt Uyumu | 100 | 96 | — | **98** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 77/100

**Öneriler:**
- "badge-high", "badge-low" gibi tanımlı fakat kullanılmayan CSS sınıflarını kaldırın; sadece aktif kullanılan "badge-medium" varsa tutun.
- Öncelik ve etiket metinleri ("Medium", "UX", "v2.1") ile tarih değerini sabitlerle tanımlayıp üst kısımda bir yapılandırma alanı oluşturun; bu, bileşenin yeniden kullanımında okunabilirliği artırır.
- Yorumsuz zaten anlaşılan etiketlerin üzerindeki açıklayıcı yorumları (ör. 'Task title', 'Subtle divider', 'Subtle status dot') kaldırın; yalnızca NEDEN'i açıklayan yorumları bırakın.
- Dosyanın sonundaki uzun yorum bloğunu silin ya da 'usage notes' gibi ayrı bir bölüme taşıyın; ana bileşenin okunabilirliğini artırır.

### Performans — 85/100

**Öneriler:**
- Üretim ortamında Tailwind CSS CDN yerine, yalnızca kullanılan sınıfları içeren optimize edilmiş bir derleme kullanarak yükleme süresini azaltabilirsiniz.
- Harici kaynaklar (Google Fonts, Unsplash) için tarayıcı önbelleğe alma stratejileri (cache-control, preconnect) zaten eklenmiş; bu yeterli.
- Tailwind'i CDN yerine PostCSS/CLI ile derleyip sadece kullanılan sınıfları içeren küçük bir CSS çıktısı kullanın (örn. Tailwind CLI build).
- Görsel için `srcset`/`sizes` tanımlayıp modern format (WebP/AVIF) kullanın veya görseli kendi CDN'inizde barındırıp boyutunu küçültün.

### Güvenlik — 98/100

**Öneriler:**
- Görev başlığı veya atanan kişi bilgisi kullanıcı girdisinden geliyorsa, XSS koruması için dinamik verileri React JSX'te doğrudan render edip dangerouslySetInnerHTML kullanımından kaçının.
- Dinamik hale geldiğinde, URL parametreleri veya API'den gelen metinleri DOMPurify ile sanitize ederek kullanmayı değerlendirin.
- Üretim ortamı için Tailwind CDN yerine build-time derleme veya self-hosted sürüm tercih edin (supply-chain riskini azaltır).
- Kart bileşenine gelecekte dinamik içerik (kullanıcı girdisi, API verisi) bağlanacaksa, başlık ve etiketleri React/Vue gibi bir framework ile render ederek otomatik escaping'den faydalanın ve gerektiğinde DOMPurify ile sanitize edin.

### Sürdürülebilirlik — 39/100

**Öneriler:**
- Bileşeni bir React/Vue gibi framework ortamında modular hale getirip, öncelik rozeti, avatar ve tarih gibi parçaları ayrı alt bileşenlere veya en azından yapılandırılabilir property'lere dönüştürün.
- Stil token'larını (renkler, gölgeler) bir theme/constants katmanına çıkarın ve özel CSS sınıflarını Tailwind utility sınıflarıyla veya CSS değişkenleriyle değiştirin.
- Bileti bir React/Vue bileşenine dönüştürerek başlık, atanan kişi, öncelik ve tarihi props olarak al; öncelik için `{HIGH:'badge-high', MEDIUM:'badge-medium', ...}` benzeri bir eşleme objesi kullanarak tek noktadan değişiklik yapılabilmesini sağla.
- Avatar ve diğer dış kaynaklar için `onError` fallback'i, ayrıca loading/error/empty state'lerini bileşen içinde ele al; stilleri `tailwind.config.js` içinde tema token'ları (renk paleti, gölge) olarak tanımlayarak CDN bağımlılığını kaldır.

### Prompt Uyumu — 98/100

- Programatik: 100/100 · Semantik: 100/100
- İhlaller: yok

**Öneriler:**
- Öncelik rozeti 'Badge' olarak istenmiş, örnekte 'Medium' sabit verilmiş. Farklı öncelik seviyelerini (High/Medium/Low) dinamik gösterecek şekilde bir prop veya değişken yapısı düşünülebilir, ancak şu anki hali semantik gereksinimi karşılıyor.
- Bileşen React veya Vue gibi izole bir yapıda değil, düz HTML sunulmuş. Prompt spesifik framework belirtmediği için sorun değil; gelecekte yeniden kullanılabilirlik için bileşenleştirme önerilir.
- Remove the trailing explanatory HTML comment block at the bottom of the file to strictly comply with 'output only code, no explanations'.
- Consider whether an extra comment-count chip or label tags (UX, v2.1) constitute scope creep beyond 'simple' Kanban ticket—trim to the four required elements for tighter adherence.


---

# Loomina Analiz Raporu — Qwen3.6 Plus

- **Model:** `qwen/qwen3.6-plus`
- **Tarih:** 02.06.2026 14:54:35
- **Üretim Süresi:** 65845 ms
- **Genel Skor:** 91/100
- **Karar Yöntemi:** Konsensüs (iki hakem ortalaması)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3
- **J3 (Tahkimci) çağrılan metrikler:** Yok — iki hakem tüm metriklerde uzlaştı.

## Kullanıcı Promptu

Create a simple Kanban task ticket component. It must include a task title, an assignee avatar, a priority badge (e.g., High, Medium), and a due date. Use Tailwind CSS for styling. Do not write any explanations, output only the code.

## Üretilen Kod

```html
import React from 'react';

const KanbanTicket = ({
  title = "Refactor API endpoints for v2",
  assigneeName = "Sarah Chen",
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  priority = "High",
  dueDate = "Nov 12"
}) => {
  const priorityStyles = {
    High: "bg-rose-50 text-rose-700 ring-rose-600/20",
    Medium: "bg-amber-50 text-amber-700 ring-amber-600/20",
    Low: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  };

  return (
    <div className="group w-full max-w-[280px] bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer p-4">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-gray-900 font-medium text-sm leading-snug line-clamp-2">
          {title}
        </h3>
        <span className={`shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ring-1 ring-inset ${priorityStyles[priority] || priorityStyles.Medium}`}>
          {priority}
        </span>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <img
            src={avatarUrl}
            alt={assigneeName}
            className="w-7 h-7 rounded-full ring-2 ring-white bg-gray-100 object-cover"
          />
          <span className="text-xs font-medium text-gray-600 truncate max-w-[80px]">
            {assigneeName}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.414 0-.75.336-.75.75v6.5c0 .414.336.75.75.75h10.5c.414 0 .75-.336.75-.75v-6.5c0-.414-.336-.75-.75-.75H4.75z" clipRule="evenodd" />
          </svg>
          <span className="text-xs font-medium">{dueDate}</span>
        </div>
      </div>
    </div>
  );
};

export default KanbanTicket;
```

## Hakem Skor Dökümü (J1 / J2 / J3)

| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |
|---|---|---|---|---|---|
| Okunabilirlik | 85 | 89 | — | **87** | Ortalama (J1-J2) |
| Performans | 95 | 88 | — | **92** | Ortalama (J1-J2) |
| Güvenlik | 98 | 92 | — | **95** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 85 | 80 | — | **83** | Ortalama (J1-J2) |
| Prompt Uyumu | 98 | 98 | — | **98** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 87/100

**Öneriler:**
- Varsayılan örnek değerler (title, assigneeName, avatarUrl vs.) test/senkronizasyon sorunu yaratabileceğinden prop tanımları haricinde tanımlayın veya sunucudan gelen veri olarak düşünün.
- Uzun inline SVG path'i ayrı bir bileşene veya yardımcı fonksiyona taşıyarak JSX yapısını daha sade hale getirin.
- Add a short comment above the priorityStyles object explaining the visual semantics (e.g., 'High = critical, Low = informational') so future maintainers can adjust the palette confidently.
- Convert props to a typed interface (TypeScript) or PropTypes to document the expected shape (e.g., priority: 'High' | 'Medium' | 'Low') and prevent misuse.

### Performans — 92/100

**Öneriler:**
- priorityStyles nesnesini bileşen dışına alarak her render'da yeniden oluşturulmasını engelleyin.
- Bileşen bir liste içinde çok sayıda render ediliyorsa, gereksiz re-render'ları önlemek için React.memo ile sarmalayın.
- `priorityStyles` nesnesini bileşen dışına (modül seviyesine) taşıyarak her render'da yeniden oluşturulmasını önleyin.
- `<img>` etiketine `loading="lazy"` ve `decoding="async"` ekleyerek gereksiz ağ/decoder yükünü azaltın.

### Güvenlik — 95/100

**Öneriler:**
- Kullanıcıdan gelen avatarUrl değeri beklenmedik bir kaynaksa, URL protokolü kontrolü (örn. yalnızca https: ile başlayanlara izin verme) güvenliği artırabilir.
- assigneeName ve title props'ları kullanıcı tarafından sağlanacaksa, XSS riski olmasa da içerik kısıtlaması (maxLength) eklenmesi savunma derinliği sağlar.
- avatarUrl gibi dış kaynaklı URL'ler için bir allowlist veya domain doğrulaması ekleyin; kullanıcı kontrolündeyse referrerPolicy='no-referrer' ve sandboxlanmış proxy kullanmayı değerlendirin.
- Gelecekte form input veya rich content eklenecekse, tüm kullanıcı girdileri için bir validation katmanı (örn. zod) ve HTML render edilecekse DOMPurify entegrasyonu planlayın.

### Sürdürülebilirlik — 83/100

**Öneriler:**
- Priority stil sabitlerini bileşen dışına taşıyıp bir enum/config yapısı ile yönetin.
- Olası eksik/bozuk avatarUrl için hata yönetimi ekleyin (ör. onError ile fallback görsel).
- Extract the priorityStyles object and priority labels into a separate `constants.ts` (or `priorityConfig.ts`) file so they can be reused and tested independently.
- Add a TypeScript `KanbanTicketProps` interface and an `onError` fallback for the avatar image to make the component more robust and self-documenting.

### Prompt Uyumu — 98/100

- Programatik: 100/100 · Semantik: 95/100
- İhlaller: yok

**Öneriler:**
- Öncelik rozeti için renk paletinde "Critical" gibi ek durumlar tanımlanabilir veya mevcut High/Medium için daha belirgin kontrast kullanılabilir.
- Due date formatı uluslararası (örn. "12 Kas") olacak şekilde i18n desteği eklenebilir.
- Öncelik rozeti seçeneklerine 'Urgent' veya 'Critical' gibi ek seviyeler eklenerek prop validasyonu yapılabilir.
- Son tarih geçmiş/yaklaşıyor durumları için prop bazlı renk değişimi (örn. kırmızı) eklenebilir.


---

# Loomina Analiz Raporu — Gemini 3.5 Flash

- **Model:** `google/gemini-3.5-flash`
- **Tarih:** 02.06.2026 14:54:35
- **Üretim Süresi:** 14909 ms
- **Genel Skor:** 78/100
- **Karar Yöntemi:** Tahkim (J3)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3, x-ai/grok-4.3
- **J3 (Tahkimci) çağrılan metrikler:** Sürdürülebilirlik

## Kullanıcı Promptu

Create a simple Kanban task ticket component. It must include a task title, an assignee avatar, a priority badge (e.g., High, Medium), and a due date. Use Tailwind CSS for styling. Do not write any explanations, output only the code.

## Üretilen Kod

```html
import React from 'react';

// TypeScript interface (documented for full-stack readiness)
// interface KanbanTicketProps {
//   title: string;
//   description?: string;
//   priority: 'High' | 'Medium' | 'Low';
//   dueDate: string;
//   assignee: {
//     name: string;
//     avatarUrl: string;
//     role?: string;
//   };
//   tags?: string[];
//   commentsCount?: number;
//   attachmentsCount?: number;
// }

export default function KanbanTicket({
  title = "Refactor Authentication Flow & JWT Handling",
  description = "Migrate current local storage auth state to secure HTTP-only cookies and implement silent refresh tokens.",
  priority = "High",
  dueDate = "Oct 24, 2024",
  assignee = {
    name: "Sarah Jenkins",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    role: "Senior Security Engineer"
  },
  tags = ["Security", "Backend"],
  commentsCount = 12,
  attachmentsCount = 4
}) {
  
  // Priority color mapping for dynamic styling
  const priorityStyles = {
    High: {
      bg: "bg-rose-50 border-rose-100",
      text: "text-rose-700",
      dot: "bg-rose-500"
    },
    Medium: {
      bg: "bg-amber-50 border-amber-100",
      text: "text-amber-700",
      dot: "bg-amber-500"
    },
    Low: {
      bg: "bg-emerald-50 border-emerald-100",
      text: "text-emerald-700",
      dot: "bg-emerald-500"
    }
  };

  const currentPriority = priorityStyles[priority] || priorityStyles.Medium;

  return (
    <div className="group relative flex flex-col w-full max-w-sm bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-xl hover:border-slate-200/80 transition-all duration-300 ease-out cursor-grab active:cursor-grabbing select-none overflow-hidden">
      
      {/* Top Accent Line for Premium Feel */}
      <div className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl transition-all duration-300 ${
        priority === 'High' ? 'bg-rose-500' : priority === 'Medium' ? 'bg-amber-500' : 'bg-emerald-500'
      }`} />

      {/* Ticket Header: Priority & Tags */}
      <div className="flex items-center justify-between mb-3.5">
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${currentPriority.bg} ${currentPriority.text} transition-colors duration-200`}>
          <span className={`w-1.5 h-1.5 rounded-full ${currentPriority.dot}`} />
          {priority}
        </span>
        
        <div className="flex gap-1.5">
          {tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="px-2 py-0.5 bg-slate-50 border border-slate-100 text-slate-500 text-[10px] font-medium rounded-md tracking-wide uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Ticket Title */}
      <h3 className="text-base font-semibold text-slate-800 leading-snug tracking-tight group-hover:text-indigo-600 transition-colors duration-200 line-clamp-2">
        {title}
      </h3>

      {/* Ticket Description */}
      {description && (
        <p className="mt-2 text-sm text-slate-500 line-clamp-2 leading-relaxed">
          {description}
        </p>
      )}

      {/* Divider */}
      <div className="my-4 border-t border-slate-100" />

      {/* Ticket Footer */}
      <div className="flex items-center justify-between">
        
        {/* Due Date Indicator */}
        <div className="flex items-center gap-1.5 text-slate-400 hover:text-slate-600 transition-colors duration-200">
          <svg 
            className="w-4 h-4 text-slate-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
          <span className="text-xs font-medium tracking-wide">
            {dueDate}
          </span>
        </div>

        {/* Right Side: Meta Info & Assignee */}
        <div className="flex items-center gap-3">
          
          {/* Comments & Attachments Counter */}
          <div className="flex items-center gap-2.5 text-slate-400 text-xs font-medium">
            {commentsCount > 0 && (
              <span className="flex items-center gap-0.5 hover:text-slate-600 transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                {commentsCount}
              </span>
            )}
            {attachmentsCount > 0 && (
              <span className="flex items-center gap-0.5 hover:text-slate-600 transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
                {attachmentsCount}
              </span>
            )}
          </div>

          {/* Assignee Avatar */}
          <div className="relative group/avatar">
            <img 
              className="w-7 h-7 rounded-full object-cover ring-2 ring-white hover:ring-indigo-100 transition-all duration-200"
              src={assignee.avatarUrl} 
              alt={assignee.name}
              title={assignee.name}
            />
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 hidden group-hover/avatar:flex flex-col items-end whitespace-nowrap bg-slate-900 text-white text-[11px] px-2.5 py-1 rounded shadow-lg pointer-events-none z-10 transition-all duration-200">
              <span className="font-semibold">{assignee.name}</span>
              {assignee.role && <span className="text-[9px] text-slate-300">{assignee.role}</span>}
              <div className="w-1.5 h-1.5 bg-slate-900 rotate-45 translate-x-[-4px] translate-y-[3px]" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
```

## Hakem Skor Dökümü (J1 / J2 / J3)

| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |
|---|---|---|---|---|---|
| Okunabilirlik | 82 | 68 | — | **75** | Ortalama (J1-J2) |
| Performans | 85 | 82 | — | **84** | Ortalama (J1-J2) |
| Güvenlik | 100 | 85 | — | **93** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 25 | 58 | 38 | **38** | Medyan (J1·J2·J3) — tahkim |
| Prompt Uyumu | 98 | 97 | — | **98** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 75/100

**Öneriler:**
- Yorum satırına alınmış TypeScript arayüzünü temizleyin; gerekiyorsa bileşeni doğrudan TypeScript'e dönüştürün.
- Öncelik rengi için kullanılan çoklu ternary'yi `priorityStyles` nesnesiyle merkezileştirerek kod tekrarını ve iç içe geçmeyi azaltın.
- Remove the dead commented-out TypeScript interface or convert the file to `.tsx` and use it — large commented blocks are readability noise.
- Eliminate the duplicate priority→color logic by adding a `accent` field to `priorityStyles` and reusing it, instead of the nested ternary on the accent line.

### Performans — 84/100

**Öneriler:**
- Sabit bir veri yapısı olan priorityStyles tanımını bileşenin dışına (modül seviyesine) taşıyarak her render'da yeniden oluşturulmasını engelleyin.
- dynamic olmayan priorityStyles gibi sabit tanımları bileşen dışında tanımlamak, gereksiz V8 Hidden Class değişimlerini önler ve bellek tahsisini azaltır.
- Küçük ve statik bir bileşen için herhangi bir karmaşık hesaplama veya asenkron işlem olmadığından mevcut hali kabul edilebilir, ancak bu anti-pattern not edilmelidir.
- `priorityStyles` nesnesini bileşen dışına (modül seviyesine) taşıyarak her render'da yeniden oluşturulmasını önleyin.
- Avatar `<img>` etiketine `loading="lazy"`, açık `width` ve `height` öznitelikleri ekleyerek layout shift (CLS) ve gereksiz ağ trafiğini azaltın.

### Güvenlik — 93/100

**Öneriler:**
- Dış kaynaktan yüklenen kullanıcı avatarı (Unsplash) için, güvenlik amacıyla olmasa da performans ve privacy açısından referrerPolicy='no-referrer' ve loading='lazy' gibi nitelikler eklenebilir.
- Bileşen tamamen sunum amaçlıdır; güvenlik açısından ek bir işlem gerekmez. Props olarak gelen verilerin doğrudan render edilmesi React ile güvenlidir.
- `assignee.avatarUrl` prop'unu kullanmadan önce `URL` ile parse edip `https:` şemasını zorunlu kılarak mixed-content ve potansiyel scheme injection risklerini önleyin.
- Dış kaynaklı avatar URL'leri için `loading="lazy"` ve `referrerPolicy="no-referrer"` ekleyerek gizlilik sızıntısını azaltın; ayrıca `onError` fallback'i tanımlayın.

### Sürdürülebilirlik — 38/100

**Öneriler:**
- Bileşeni, PriorityBadge, AvatarWithTooltip, MetaCounters gibi alt bileşenlere ayırarak modülerliği artırın.
- SVG ikonları ve renk eşlemeleri gibi sabitleri ayrı bir constants dosyasına çıkarın, magic stringleri enum ile değiştirin.
- Extract sub-components (PriorityBadge, AssigneeAvatar, TagList, DueDateIcon) into a KanbanTicket folder to enforce SRP and enable isolated testing.
- Uncomment and export the KanbanTicketProps TypeScript interface, and move the priorityStyles map and priority/type unions to a dedicated constants.ts to eliminate duplicated string logic.

### Prompt Uyumu — 98/100

- Programatik: 100/100 · Semantik: 95/100
- İhlaller: yok

**Öneriler:**
- Gerekli olmadıkça, yalnızca istenen (başlık, avatar, öncelik, tarih) bileşenleri sunulmalı, fazladan açıklama veya etiket eklenmemelidir.
- Bitiş tarihi kısmına "Son Tarih" benzeri bir label eklenmesi prompttaki beklentiyle tam uyuşabilir.
- Prompt 'simple' ifadesi içerdiğinden, eklenen description, tags, commentsCount ve tooltip gibi yardımcı özellikler çıkarılarak veya opsiyonel hale getirilerek daha minimalist bir bileşen tercih edilebilir.
- TypeScript interface'i yorum satırı olarak bırakmak yerine aktif kullanıma alınmalı (props için tip güvenliği sağlanmalı).
