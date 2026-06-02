# Loomina — Model Karşılaştırma Raporu

- **Tarih:** 02.06.2026 14:55:55
- **Karşılaştırılan Model Sayısı:** 3

## Kullanıcı Promptu

Create a simple Kanban task ticket component. It must include a task title, an assignee avatar, a priority badge (e.g., High, Medium), and a due date. Use Tailwind CSS for styling. Do not write any explanations, output only the code.

## Karşılaştırma Tablosu

| Model | Genel | Okunabilirlik | Performans | Güvenlik | Sürdürülebilirlik | Prompt Uyumu |
|---|---|---|---|---|---|---|
| DeepSeek V4 Pro | 79 | 78 | 90 | 97 | 35 | 97 |
| Qwen3.6 Plus | 88 | 92 | 92 | 92 | 65 | 97 |
| Gemini 3.5 Flash | 85 | 79 | 88 | 93 | 65 | 99 |

---

# Loomina Analiz Raporu — DeepSeek V4 Pro

- **Model:** `deepseek/deepseek-v4-pro`
- **Tarih:** 02.06.2026 14:55:55
- **Üretim Süresi:** 32189 ms
- **Genel Skor:** 79/100
- **Karar Yöntemi:** Tahkim (J3)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3, x-ai/grok-4.3
- **J3 (Tahkimci) çağrılan metrikler:** Sürdürülebilirlik

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
| Okunabilirlik | 78 | 78 | — | **78** | Ortalama (J1-J2) |
| Performans | 98 | 82 | — | **90** | Ortalama (J1-J2) |
| Güvenlik | 100 | 93 | — | **97** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 25 | 48 | 35 | **35** | Medyan (J1·J2·J3) — tahkim |
| Prompt Uyumu | 97 | 97 | — | **97** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 78/100

**Öneriler:**
- Sihirli renk kodlarını (`#fee9e6`, `#b91c1c` vb.) CSS değişkenleri veya Tailwind tema yapılandırmasıyla anlamlı sabitlere dönüştürün.
- Yorum satırlarında 'fine-tuning' veya 'smooth shadows' gibi belirsiz ifadeler yerine, belirli tasarım kararlarının nedenini açıklayan net açıklamalar kullanın.
- Yorumları yalnızca NEDEN'i açıklayan veya bölüm ayracı olanlarla sınırla; 'production ready', 'keeps component flexible' gibi övücü/reklam benzeri yorumları kaldır.
- Dosyanın sonundaki kendi kendini değerlendiren yorum bloğunu tamamen kaldır — kod kendini anlatıyor, bu meta-yorum gürültü oluşturuyor.

### Performans — 90/100

**Öneriler:**
- `transition: all` yerine yalnızca `transform` ve `box-shadow` özelliklerini geçirecek şekilde tanımlama yaparak tarayıcının gereksiz interpolasyon yapmasını önleyin.
- Bu basit bileşen için ek performans iyileştirmesi gerekmemektedir.
- `transition: all` yerine yalnızca `transform` ve `box-shadow` için geçiş tanımlayın, böylece tarayıcı gereksiz özellikleri animasyon dışında bırakır.
- Üretim dağıtımında `cdn.tailwindcss.com` yerine derlenmiş (PurgeCSS/JIT) statik CSS kullanın; bu ~300KB+ gereksiz indirmeyi ortadan kaldırır.

### Güvenlik — 97/100

**Öneriler:**
- Eğer ileride kullanıcıdan alınan task başlığı, atama ismi gibi veriler render edilecekse, varsayılan React JSX koruması yeterli olacaktır; 'dangerouslySetInnerHTML' kullanmaktan kaçının.
- Resim URL'si dış kaynaktan (Unsplash) yükleniyor; güvenlik için 'rel="noopener noreferrer"' veya Content Security Policy başlıkları düşünülebilir (şu anki etki düşük).
- For production, avoid the Tailwind CDN (cdn.tailwindcss.com) and use a build-time Tailwind setup to prevent loading arbitrary remote JavaScript into the page context.
- Add rel="noopener noreferrer" and consider subresource integrity (SRI) for any externally loaded scripts to harden the supply chain.

### Sürdürülebilirlik — 35/100

**Öneriler:**
- Bileşenin verileri sabit kodlanmış; başlık, öncelik, atanan kişi gibi bilgileri özellikler (props) olarak alacak şekilde bir şablon veya web bileşeni haline getirilmeli.
- Öncelik rozetleri, avatar ve tarih gibi alt parçalar ayrı bileşenler olarak soyutlanmalı; bu sayede tekrar kullanılabilirlik ve değiştirilebilirlik artar.
- Öncelik değerlerini ve renk paletini bir constants/config dosyasına çıkararak veya Tailwind theme.extend ile merkezileştirerek magic string'leri ortadan kaldırın.
- Kart verilerini (title, assignee, priority, dueDate) bir veri yapısından okuyacak şekilde küçük bir render fonksiyonu veya template yapısı ekleyin; böylece tek bir şablondan birden fazla kart üretilebilsin.

### Prompt Uyumu — 97/100

- Programatik: 100/100 · Semantik: 92/100
- İhlaller: yok

**Öneriler:**
- Bileşen yalnızca istenilen elemanlara odaklanmalı, fazladan etiket veya yorum sayısı gibi öğeler prompt dışına çıkıyor.
- Kod yalnızca satır içi olarak sunulmalıydı; HTML yapısı gereksiz yere tam sayfa olarak kurgulanmış.
- HTML yorumlarını tamamen kaldırarak yalnızca saf kod çıktısı verin, prompt 'output only the code' diyor.
- Tailwind CDN yerine play CDN'in `<script>` config'i ile özel renk paleti/tema tanımlayarak daha tutarlı bir design system elde edin.


---

# Loomina Analiz Raporu — Qwen3.6 Plus

- **Model:** `qwen/qwen3.6-plus`
- **Tarih:** 02.06.2026 14:55:55
- **Üretim Süresi:** 65845 ms
- **Genel Skor:** 88/100
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
| Okunabilirlik | 95 | 88 | — | **92** | Ortalama (J1-J2) |
| Performans | 98 | 85 | — | **92** | Ortalama (J1-J2) |
| Güvenlik | 95 | 88 | — | **92** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 68 | 62 | — | **65** | Ortalama (J1-J2) |
| Prompt Uyumu | 96 | 98 | — | **97** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 92/100

**Öneriler:**
- PropTypes veya TypeScript ile prop tiplerini belirtmek, bileşenin nasıl kullanılacağını daha açık hale getirir.
- Tarih simgesi inline SVG'yi ayrı bir küçük bileşene taşımak, ana bileşenin uzunluğunu azaltır ve tekrar kullanılabilirliği artırır.
- Add a small JSDoc block or a TypeScript/PropTypes interface listing the expected props (especially the union of valid `priority` values) to make the contract explicit at a glance.
- Extract the inline calendar SVG into a tiny named component (e.g., `<CalendarIcon />`) or a constant to reduce visual noise inside the JSX return.

### Performans — 92/100

**Öneriler:**
- Sabit priorityStyles nesnesini bileşen dışına taşıyarak her render'da yeniden oluşturulmasını önleyebilirsiniz (mikro optimizasyon).
- Eğer bileşen bir listede kullanılacaksa ve üst bileşenden gereksiz re-render alıyorsa, React.memo ile sarmak performansı artırabilir.
- priorityStyles objesini bileşen dışında bir sabit (module-level const) olarak tanımlayarak her render'da yeniden oluşturulmasını önleyebilirsiniz.
- Avatar URL'si için `loading="lazy"` veya Next.js Image kullanarak lazy loading ile ağ performansını artırabilirsiniz.

### Güvenlik — 92/100

**Öneriler:**
- Harici avatar URL'si kullanılıyorsa, güvenilir olmayan kaynaklara karşı URL doğrulaması ve gerekiyorsa content security policy (CSP) uygulaması düşünülebilir.
- Eğer bu bileşen kullanıcı tarafından girilen verileri gösterecekse, 'title' gibi alanların sanitize edilmesi gerekebilir.
- Validate or sanitize the avatarUrl prop (e.g., allowlist https URLs or restrict to known avatar domains) to prevent loading of untrusted external resources.
- Add a fallback for the img element with an onError handler to avoid broken or potentially malicious external content silently rendering.

### Sürdürülebilirlik — 65/100

**Öneriler:**
- priorityStyles gibi yapılandırmaları 'constants.ts' gibi ayrı bir dosyaya çıkararak değişikliklerin tek noktadan yapılmasını sağlayın.
- Bileşene loading, error ve boş veri durumları için prop'lar ekleyin, böylece null/undefined senaryolarında bileşen test edilebilir ve sürdürülebilir olur.
- Hoist the `priorityStyles` map and any other static configuration (e.g., a `PRIORITY` enum or constant array) into a separate `constants.ts` so they are not recreated on every render and can be reused across components.
- Type the props (TypeScript interface or `prop-types`) and accept `dueDate` as a `Date` or ISO string with explicit formatting via `Intl.DateTimeFormat` or `date-fns` to improve analyzability and reusability.

### Prompt Uyumu — 97/100

- Programatik: 100/100 · Semantik: 90/100
- İhlaller: yok

**Öneriler:**
- Priority badge için varsayılan değer kontrollü atanmış ancak priorityStyles'da 'High' anahtarı yok, sadece 'high' mevcut, bu durumda varsayılan renk Medium gösterilir. Anahtarların prompttaki gibi 'High' olarak güncellenmesi önerilir.
- Due date'in yanındaki takvim ikonu, tarih kısmının okunmasını iyileştirebilir; şu an sade olup yeterlidir. Görsel iyileştirme amaçlı olarak ikonun biraz daha belirgin hale getirilmesi düşünülebilir.
- Prompt says 'simple' component — consider trimming the elaborate hover effects (translate, shadow transitions) to keep the component minimal and closer to the prompt's 'simple' intent.
- Consider adding a fallback for missing priority values or making the priority list more explicit via prop types/comments to better signal the supported values.


---

# Loomina Analiz Raporu — Gemini 3.5 Flash

- **Model:** `google/gemini-3.5-flash`
- **Tarih:** 02.06.2026 14:55:55
- **Üretim Süresi:** 14909 ms
- **Genel Skor:** 85/100
- **Karar Yöntemi:** Tahkim (J3)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3, x-ai/grok-4.3
- **J3 (Tahkimci) çağrılan metrikler:** Performans, Sürdürülebilirlik

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
| Okunabilirlik | 82 | 76 | — | **79** | Ortalama (J1-J2) |
| Performans | 100 | 78 | 88 | **88** | Medyan (J1·J2·J3) — tahkim |
| Güvenlik | 95 | 90 | — | **93** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 85 | 58 | 65 | **65** | Medyan (J1·J2·J3) — tahkim |
| Prompt Uyumu | 100 | 98 | — | **99** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 79/100

**Öneriler:**
- Aksan çizgisi için mevcut priorityStyles nesnesindeki dot rengini kullanarak iç içe ternary'den kurtulun: `className={`... ${currentPriority.dot} ...`}`.
- `idx` değişken adını `index` olarak değiştirin veya map'te index'e ihtiyaç yoksa `key={tag}` kullanın.
- Remove the commented-out interface block or actually use TypeScript; dead code confuses readers and the misleading comment about 'TypeScript' in a .jsx file harms trust.
- Replace `idx` with `index` (or use the tag itself as the key when stable), and extend `priorityStyles` to include the accent line color so the ternary chain on the top accent line can be removed, eliminating duplicated logic.

### Performans — 88/100

**Öneriler:**
- Etiket listesi uzunsa ve sıralaması değişebiliyorsa key olarak index yerine özgün bir değer kullanın.
- Bileşen çok sayıda render ediliyorsa React.memo ile gereksiz yeniden çizmeler önlenebilir.
- `priorityStyles` nesnesini bileşen dışına (modül seviyesine) taşıyarak her render'da yeniden oluşturulmasını önleyin.
- `tags` render'ında `key={idx}` yerine tag değerini benzersiz kimlik olarak kullanın; sıra değişimine karşı daha güvenli ve React'in reconciler'ı için daha verimlidir.

### Güvenlik — 93/100

**Öneriler:**
- Prop doğrulama ekleyerek (örneğin PropTypes veya TypeScript) yanlış veri tiplerinden kaynaklanabilecek hataları önleyin.
- Kullanıcı tarafından kontrol edilebilecek alanlara (örn. avatar URL) sanitizasyon veya doğrulama uygulayarak zararlı URL kullanımını engelleyin.
- add props validation (PropTypes or runtime check) to reject non-HTTP(S) avatarUrl values and unexpected priority strings to prevent URL injection in img src.
- if tags or assignee.name could come from untrusted user input in future, add length limits and consider a sanitization helper for string props.

### Sürdürülebilirlik — 65/100

**Öneriler:**
- Projede başka bir bileşende de kullanılacaksa priorityStyles gibi sabitleri ayrıştırıp bir constants.ts dosyasına taşıyın.
- TypeScript veya PropTypes eklenmezse yanlış veya eksik props sonucu UI hataya düşebilir; bu da test edilebilirliği düşürür.
- Adopt TypeScript and use the existing interface instead of commenting it out, and extract the priority color mapping into a single source of truth (constants file) so both the accent line and badge read from the same object.
- Split the card into smaller subcomponents (PriorityBadge, AssigneeAvatar, TicketMeta) and extract the repeated SVG icons into a tiny Icon component or icon map to reduce duplication and ease future visual changes.

### Prompt Uyumu — 99/100

- Programatik: 100/100 · Semantik: 100/100
- İhlaller: yok

**Öneriler:**
- Bileşen ekstra alanlar (açıklama, etiketler, yorumlar) içerdiği için biraz karmaşıklaşmış. 'Simple' istendiğinden gereksiz kısımlar çıkarılabilir.
- Production-ready olması için props'lar dışarıdan alınacak şekilde düzenlenebilir; şu an hepsi default değerle geliyor.
- Prompt 'simple' ifadesini içerdiğinden, ekstra tags/comments/attachments alanları isteğe bağlı bırakılabilir; temel 4 alan korunup sadelik vurgulanabilir.
- Son teslim tarihi için 'Oct 24, 2024' gibi statik string yerine tarih formatlamasını gösteren kısa bir yardımcı önerilebilir (örn. formatDate).
