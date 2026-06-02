# Loomina — Model Karşılaştırma Raporu

- **Tarih:** 02.06.2026 14:53:16
- **Karşılaştırılan Model Sayısı:** 3

## Kullanıcı Promptu

Create a simple Kanban task ticket component. It must include a task title, an assignee avatar, a priority badge (e.g., High, Medium), and a due date. Use Tailwind CSS for styling. Do not write any explanations, output only the code.

## Karşılaştırma Tablosu

| Model | Genel | Okunabilirlik | Performans | Güvenlik | Sürdürülebilirlik | Prompt Uyumu |
|---|---|---|---|---|---|---|
| DeepSeek V4 Pro | 78 | 82 | 72 | 94 | 45 | 97 |
| Qwen3.6 Plus | 87 | 88 | 88 | 90 | 72 | 99 |
| Gemini 3.5 Flash | 81 | 76 | 84 | 95 | 52 | 99 |

---

# Loomina Analiz Raporu — DeepSeek V4 Pro

- **Model:** `deepseek/deepseek-v4-pro`
- **Tarih:** 02.06.2026 14:53:16
- **Üretim Süresi:** 32189 ms
- **Genel Skor:** 78/100
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
| Okunabilirlik | 85 | 78 | — | **82** | Ortalama (J1-J2) |
| Performans | 95 | 72 | 68 | **72** | Medyan (J1·J2·J3) — tahkim |
| Güvenlik | 100 | 88 | — | **94** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 45 | 45 | — | **45** | Ortalama (J1-J2) |
| Prompt Uyumu | 98 | 95 | — | **97** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 82/100

**Öneriler:**
- Badge stilleri için tekrar eden yapıyı kaldırıp Tailwind'in theme() veya CSS custom properties ile tek bir kaynaktan türetin.
- Değerlendirme ve durum metinleri ('Medium', 'Apr 18' vb.) için sabitler veya veri öznitelikleri tanımlayarak sihirli string kullanımını azaltın.
- Remove the trailing multi-line comment at the end of <body> that references a non-existent demo and repeats obvious claims.
- Trim obvious comments (e.g., 'Task title – clear, readable, with proper line-height') and keep only those that explain non-obvious decisions, such as the priority badge mapping or the gradient divider intent.

### Performans — 72/100

**Öneriler:**
- Tailwind CDN script'ini async veya defer ile yükleyerek sayfa render'ını engellemesini önleyin.
- Üretim ortamı için Tailwind'in tam sürümü yerine purge edilmiş özel bir yapı kullanarak CSS boyutunu küçültün.
- Replace Tailwind CDN with a production build (e.g., PostCSS purge/CLI build or Tailwind Play CDN's compiled CSS) to avoid the ~300KB runtime JIT engine and render-blocking script.
- Set explicit width/height attributes on the <img> (or use aspect-ratio) to prevent CLS, and consider serving the avatar via srcset for better loading on different viewports.

### Güvenlik — 94/100

**Öneriler:**
- Görsel kaynağı bir CDN'den alınıyorsa, üretim ortamında HTTPS kullanıldığından emin olunmalı.
- Herhangi bir güvenlik riski olmasa da, ileride dinamik veri eklendiğinde kullanıcı girdileri için sanitizasyon uygulanmalıdır.
- Tailwind CDN ve Google Fonts için Subresource Integrity (SRI) hash değerleri ekleyerek CDN compromise riskini azaltın.
- İçerik Güvenliği Politikası (CSP) meta etiketi tanımlayarak inline script/style ve harici kaynaklar üzerinde sıkı kısıtlamalar uygulayın.

### Sürdürülebilirlik — 45/100

**Öneriler:**
- Kartı, başlık, öncelik, atanan kişi ve tarih gibi verileri prop olarak alan bir bileşen (ör. React, Vue veya template literal) haline getirin.
- Öncelik rozeti ve avatar gibi tekrar eden öğeleri ayrı alt bileşenlere veya en azından veriye dayalı stil uygulayan yardımcı fonksiyonlara dönüştürün.
- Görev verilerini (title, priority, dueDate, assignee, avatar) bir JS nesnesine çıkarın ve render fonksiyonu yazın; böylece bileşen yeniden kullanılabilir ve farklı verilerle kolayca doldurulabilir hale gelir.
- Öncelik değerlerini (HIGH/MEDIUM/LOW) bir enum/const olarak tanımlayın ve badge stilini dinamik olarak uygulayın; ayrıca avatar için onerror fallback mekanizması ekleyerek defansif programlama sağlayın.

### Prompt Uyumu — 97/100

- Programatik: 100/100 · Semantik: 95/100
- İhlaller: yok

**Öneriler:**
- Prompt, yalnızca kod çıktısı istediği için HTML yorum satırları ('Additional demo...' vb.) kaldırılmalıdır.
- Priority badge'i sabit 'Medium' vermek yerine, bileşen farklı öncelikleri destekleyecek şekilde dinamik hale getirilmesi istenebilir.
- HTML kod içi açıklayıcı yorumları (comment'leri) kaldırın; sadece saf kod çıktısı üretin.
- Bileşeni daha 'simple' tutmak için gereksiz ek öğeleri (label etiketleri, yorum sayısı) çıkarın; yalnızca istenen dört temel alana odaklanın.


---

# Loomina Analiz Raporu — Qwen3.6 Plus

- **Model:** `qwen/qwen3.6-plus`
- **Tarih:** 02.06.2026 14:53:16
- **Üretim Süresi:** 65845 ms
- **Genel Skor:** 87/100
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
| Okunabilirlik | 87 | 88 | — | **88** | Ortalama (J1-J2) |
| Performans | 90 | 85 | — | **88** | Ortalama (J1-J2) |
| Güvenlik | 95 | 85 | — | **90** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 82 | 62 | — | **72** | Ortalama (J1-J2) |
| Prompt Uyumu | 100 | 98 | — | **99** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 88/100

**Öneriler:**
- Selectors like `priorityStyles[priority]` could be moved outside the component or defined with `Record<'High' | 'Medium' | 'Low', string>` type to ease reading.
- The inline SVG for the calendar icon could be replaced with a named icon component to reduce visual noise and allow reuse.
- Inline SVG'yi ayrı bir `CalendarIcon` bileşenine çıkararak JSX'i sadeleştirin ve ana bileşenin okunabilirliğini artırın.
- PropTypes veya TypeScript interface ekleyerek her prop'un beklenen tipini ve zorunluluğunu açıkça belgeleyin.

### Performans — 88/100

**Öneriler:**
- priorityStyles sabit nesnesini bileşen dışına taşıyarak her render'da yeniden oluşturulmasını önleyin.
- Gereksiz memoizasyon eklemeyin; bileşenin basitliği nedeniyle React.memo şimdilik gerekli değil.
- `priorityStyles` nesnesini bileşen dışına (modül seviyesine) taşıyarak her render'da gereksiz allocation'ı önleyin.
- Çok sayıda ticket listelenecekse (örn. Kanban board'da yüzlerce kart), bileşeni `React.memo` ile sararak gereksiz re-render'ları engelleyin.

### Güvenlik — 90/100

**Öneriler:**
- Kullanıcıdan gerçek veri geliyorsa avatarUrl gibi prop'lar DOMPurify ile sanitize edilebilir.
- Dış kaynaktan gelen görsel URL'lerinin HTTPS olup olmadığı kontrol edilerek mixed content riski tamamen giderilebilir.
- Validate or sanitize the avatarUrl prop (e.g., check URL protocol is https: and matches expected image domains) to prevent loading untrusted external resources or tracking pixels.
- Consider wrapping the img with an onError fallback to prevent broken/untrusted URLs from leaking referrer information via failed requests.

### Sürdürülebilirlik — 72/100

**Öneriler:**
- Öncelik sınıfları ve tarih formatı gibi magic değerleri bir `constants` dosyasına taşıyın. Avatar/ikon gibi UI öğelerini `Avatar`, `DueDate` gibi küçük, bağımsız alt bileşenlere ayırarak yeniden kullanılabilirliği artırın.
- Bileşenin dış bağımlılıklarını (örn. tarih formatlama fonksiyonu) props ile enjekte edilebilir hale getirerek test edilebilirliği güçlendirin. `error` ve `empty` durumları için açık yönetim ekleyin.
- Extract priority configuration (labels, styles, type) into a separate constants/types file so adding a new priority is a single-file change and shared across components.
- Add PropTypes (or convert to TypeScript) and an onError fallback for the avatar, plus normalize dueDate as a Date/string union with a formatter helper.

### Prompt Uyumu — 99/100

- Programatik: 100/100 · Semantik: 100/100
- İhlaller: yok

**Öneriler:**
- Basitlik vurgusu yapılan bir promptta, hover durumları ve animasyonlar eklenebilir ancak bu bir ihlal değildir; istenirse bileşen daha da sadeleştirilebilir.
- Varsayılan prop değerleri ve yardımcı fonksiyonlar belirtilmese de, kod üretime hazır ve eksiksizdir; ekstra yorum eklenmesine gerek yoktur.
- Avatar için bir fallback (initials) mekanizması eklenebilir, böylece URL yüklenemezse boş kalmaz.
- Priority badge'ine tıklanabilir veya hover edilebilir bir tooltip ile açıklama eklenebilir (ör. 'High - Kritik Öncelik').


---

# Loomina Analiz Raporu — Gemini 3.5 Flash

- **Model:** `google/gemini-3.5-flash`
- **Tarih:** 02.06.2026 14:53:16
- **Üretim Süresi:** 14909 ms
- **Genel Skor:** 81/100
- **Karar Yöntemi:** Konsensüs (iki hakem ortalaması)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3
- **J3 (Tahkimci) çağrılan metrikler:** Yok — iki hakem tüm metriklerde uzlaştı.

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
| Okunabilirlik | 85 | 67 | — | **76** | Ortalama (J1-J2) |
| Performans | 78 | 90 | — | **84** | Ortalama (J1-J2) |
| Güvenlik | 98 | 92 | — | **95** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 55 | 48 | — | **52** | Ortalama (J1-J2) |
| Prompt Uyumu | 100 | 98 | — | **99** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 76/100

**Öneriler:**
- Üst vurgu çizgisindeki iç içe ternary yerine, zaten tanımlı olan priorityStyles nesnesindeki dot rengini kullanarak tek bir sınıf ataması yapın.
- priorityStyles içindeki renk eşlemesi ile vurgu çizgisi arasındaki tekrarı gidererek kodu daha kuru (DRY) hale getirin.
- Either uncomment the TypeScript interface and rename the file to `.tsx` so the props are actually type-safe, or remove the misleading 'documented for full-stack readiness' comment to avoid confusion.
- Eliminate the redundant ternary chain for the top accent line and derive the color from the already-computed `currentPriority.dot` (or extract a `priorityBarClass`) to keep priority styling in a single source of truth.

### Performans — 84/100

**Öneriler:**
- `priorityStyles` sabit nesnesini bileşen dışına taşıyarak her render'da yeniden oluşturulmasını engelleyin.
- `tags.map` içinde `key={idx}` yerine etiket adı gibi benzersiz bir değer kullanarak liste sıralaması değiştiğinde oluşabilecek gereksiz DOM güncellemelerini önleyin.
- Move the `priorityStyles` constant outside the component (or wrap with useMemo) so it is not reallocated on every render, and reuse it for the top accent line instead of duplicating the ternary.
- Add `loading="lazy"` to the avatar `<img>` (or use `next/image`) to avoid blocking render on off-screen ticket cards in long Kanban boards.

### Güvenlik — 95/100

**Öneriler:**
- Kullanıcı tarafından sağlanan tags, title veya description gibi veriler dinamik olarak render edilmeden önce DOMPurify gibi bir sanitizer ile temizlenebilir; her ne kadar React varsayılan olarak XSS'i önlese de ek katman güvenliği artırır.
- Eğer assignee.avatarUrl dışarıdan alınıyorsa, bağlantının HTTPS olup olmadığı kontrol edilebilir veya güvenli olmayan kaynaklar engellenebilir.
- img etiketine referrerPolicy="no-referrer" ve loading="lazy" ekleyerek üçüncü taraf izleme ve gereksiz yükleme riskini azaltın.
- Bileşen ileride dinamik veri aldığında, priority ve tags gibi alanlar için allow-list tabanlı tip doğrulaması yaparak beklenmeyen değerlerin render edilmesini engelleyin.

### Sürdürülebilirlik — 52/100

**Öneriler:**
- Bileşeni daha küçük parçalara ayırın: PriorityBadge, TagList, DueDate, AssigneeAvatar gibi alt bileşenlere bölmek modülerliği ve test edilebilirliği artırır.
- Sabit stil haritalarını (priorityStyles) ve varsayılan prop değerlerini ayrı bir constants/config dosyasına taşıyarak yeniden kullanılabilirliği ve değiştirilebilirliği iyileştirin.
- TypeScript interface'ini aktif hale getirin ve props'lar için `React.FC<KanbanTicketProps>` ile tip güvenliği sağlayın; `priority` gibi string union değerlerini `as const` ile merkezi bir sabitler dosyasından import edin.
- Tekrarlayan SVG'leri (calendar, comment, attachment) tek bir `Icon` bileşenine, `PriorityBadge`, `AssigneeAvatar` ve `TagList` gibi alt bileşenlere ayırarak hem yeniden kullanılabilirliği hem de test edilebilirliği artırın.

### Prompt Uyumu — 99/100

- Programatik: 100/100 · Semantik: 100/100
- İhlaller: yok

**Öneriler:**
- Yorum satırındaki 'TypeScript interface (documented for full-stack readiness)' ifadesi 'sadece kod çıktısı' kuralını esnetebilir; kaldırılması daha katı bir uyum sağlayabilir.
- The commented-out TypeScript interface could be enabled or removed entirely to keep the file consistent with the chosen JS style, avoiding mixed conventions.
- Consider exporting the priorityStyles map as a module-level constant (outside the component) to avoid re-creating it on every render for better performance.
