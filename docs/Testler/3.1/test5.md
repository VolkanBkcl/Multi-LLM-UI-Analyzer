# Loomina — Model Karşılaştırma Raporu

- **Tarih:** 02.06.2026 14:57:25
- **Karşılaştırılan Model Sayısı:** 3

## Kullanıcı Promptu

Create a simple Kanban task ticket component. It must include a task title, an assignee avatar, a priority badge (e.g., High, Medium), and a due date. Use Tailwind CSS for styling. Do not write any explanations, output only the code.

## Karşılaştırma Tablosu

| Model | Genel | Okunabilirlik | Performans | Güvenlik | Sürdürülebilirlik | Prompt Uyumu |
|---|---|---|---|---|---|---|
| DeepSeek V4 Pro | 79 | 83 | 85 | 92 | 38 | 95 |
| Qwen3.6 Plus | 90 | 92 | 96 | 92 | 73 | 99 |
| Gemini 3.5 Flash | 84 | 85 | 83 | 88 | 68 | 95 |

---

# Loomina Analiz Raporu — DeepSeek V4 Pro

- **Model:** `deepseek/deepseek-v4-pro`
- **Tarih:** 02.06.2026 14:57:25
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
| Okunabilirlik | 92 | 74 | — | **83** | Ortalama (J1-J2) |
| Performans | 100 | 78 | 85 | **85** | Medyan (J1·J2·J3) — tahkim |
| Güvenlik | 98 | 86 | — | **92** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 35 | 40 | — | **38** | Ortalama (J1-J2) |
| Prompt Uyumu | 93 | 96 | — | **95** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 83/100

**Öneriler:**
- Uzun class string'leri bir helper ile kısaltın veya bileşen parçalarını ayrı HTML elemanlarına bölerek okunurluğu artırın.
- CSS'deki .badge-high, .badge-medium gibi sınıflar Tailwind içinde de tanımlanabilir; özel CSS ile Tailwind karışımını azaltmak mümkünse tercih edilebilir.
- Remove obvious/redundant comments (e.g., 'Task title – clear, readable', trailing self-praising block) and keep only comments that explain non-obvious 'why' decisions.
- Replace the misleading 'dynamic' comment with accurate wording since the example is static, and consider extracting the repeated badge styling into a single base class to reduce duplication.

### Performans — 85/100

**Öneriler:**
- Tailwind CSS CDN yerine production build (PurgeCSS ile) kullanılarak yükleme süresi iyileştirilebilir.
- Sayfa yükleme performansı için kritik CSS inline olarak eklenip, kalan stiller asenkron yüklenebilir.
- Üretim için Tailwind CDN'i bırakıp build-time derlenmiş (PostCSS/CLI) minify CSS kullanın; bu hem payload'u hem ilk yükleme süresini ciddi şekilde düşürür.
- Görseli Unsplash yerine kendi CDN'inizden/WebP+srcset ile sunun ve kritik görseller için fetchpriority='high', geri kalanı için native lazy-loading ile LCP/CLS iyileştirmesi sağlayın.

### Güvenlik — 92/100

**Öneriler:**
- Gerçek bir uygulamada, kullanıcı tarafından sağlanan veriler (örneğin görev başlığı, kullanıcı adı) dinamik olarak ekleniyorsa, XSS riskine karşı çıktıyı sanitize etmek için DOMPurify gibi bir kütüphane kullanılmalıdır.
- Harici kaynaklardan (Unsplash, Google Fonts) yapılan istekler için modern tarayıcılar varsayılan olarak HTTPS kullansa da, güvenliği pekiştirmek için link etiketlerinde `href` değerlerinin `https://` ile başladığından emin olunmalıdır.
- Tailwind CDN ve Google Fonts gibi dış kaynaklara `integrity` ve `crossorigin` nitelikleri ekleyerek SRI (Subresource Integrity) koruması sağlayın.
- Bir Content-Security-Policy (CSP) meta etiketi ekleyerek inline script çalıştırmayı ve yetkisiz kaynak yüklemelerini kısıtlayın.

### Sürdürülebilirlik — 38/100

**Öneriler:**
- Verileri (görev başlığı, öncelik, tarih) props veya bir state objesi ile dışarıdan alarak bileşeni dinamik hale getirin ve yeniden kullanılabilirliği artırın.
- Magic string'ler (badge priority değerleri, tarih formatları) ve sabit stiller için enum/constants ve CSS değişkenleri kullanarak değiştirilebilirliği güçlendirin.
- Veriyi (title, assignee, priority, dueDate) bir JS objesine çıkarıp render fonksiyonu veya küçük bir framework bileşenine bağlayarak tek bir TicketCard bileşenini yeniden kullanılabilir hale getirin.
- Öncelik, durum ve etiket gibi tekrar eden değerleri constants.ts gibi ayrı bir dosyada enum/sabit dizi olarak tanımlayın; loading/error/empty state'leri için guard clause ve fallback UI ekleyin.

### Prompt Uyumu — 95/100

- Programatik: 100/100 · Semantik: 82/100
- İhlaller: yok

**Öneriler:**
- Yalnızca istenen dört öğeyi içeren daha sade bir bileşen üret; ekstra etiketler, yorum sayısı ve isim yazısı gibi unsurları çıkar.
- Prompt'ta 'basit' vurgusu yapıldığı için, özel CSS sınıfları yerine mümkün olduğunca saf Tailwind utility class'ları ile yetin.
- Remove the final explanatory HTML comment block and reduce/eliminate the inline descriptive comments to fully satisfy the 'output only the code' constraint.
- Consider showing a single, fully self-contained priority example (e.g., just Medium) without the unused High/Low CSS classes, to keep the component leaner and more focused on the prompt's request for a 'simple' ticket.


---

# Loomina Analiz Raporu — Qwen3.6 Plus

- **Model:** `qwen/qwen3.6-plus`
- **Tarih:** 02.06.2026 14:57:25
- **Üretim Süresi:** 65845 ms
- **Genel Skor:** 90/100
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
| Okunabilirlik | 94 | 90 | — | **92** | Ortalama (J1-J2) |
| Performans | 100 | 92 | — | **96** | Ortalama (J1-J2) |
| Güvenlik | 95 | 88 | — | **92** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 78 | 68 | — | **73** | Ortalama (J1-J2) |
| Prompt Uyumu | 100 | 98 | — | **99** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 92/100

**Öneriler:**
- Takvim SVG ikonuna anlamlı bir `aria-label` ekleyerek erişilebilirliği ve ikonun amacını netleştirebilirsiniz (örn. 'Takvim ikonu: Son tarih').
- Varsayılan avatar URL'si bir sabit olarak tanımlanabilir (örn. `DEFAULT_AVATAR_URL`) ve bileşen dışında tanımlanarak kodun anlaşılırlığı artırılabilir.
- Extract the inline calendar SVG into a small CalendarIcon component or a constant to reduce JSX clutter and improve scannability.
- Add PropTypes or convert to TypeScript with explicit prop types to make the contract immediately visible to other developers.

### Performans — 96/100

**Öneriler:**
- priorityStyles gibi sabit nesneler, her render'da yeniden oluşturulmasını önlemek için bileşen dışında tanımlanabilir.
- Move `priorityStyles` outside the component (module scope) to avoid re-allocating the lookup object on every render, even though the impact is negligible here.
- Consider wrapping the component in `React.memo` if it will be rendered in long Kanban lists to prevent re-renders when sibling cards update.

### Güvenlik — 92/100

**Öneriler:**
- Harici avatar URL'si için bir kontrol ekleyerek yalnızca HTTPS protokolüne izin verin veya bilinen güvenli alan adlarını doğrulayın.
- Kullanıcı tarafından sağlanan veriler (title, assigneeName, priority) render edilmeden önce, bileşenin kullanıldığı bağlamda beklenmedik karakterlere karşı bir input validation katmanı ekleyin.
- Validate or sanitize the `avatarUrl` prop (e.g., allowlist https URLs or use a safe avatar service) to prevent loading of arbitrary/untrusted external resources.
- Consider adding a default `alt` fallback string in case `assigneeName` is empty, to avoid broken accessibility without exposing unintended content.

### Sürdürülebilirlik — 73/100

**Öneriler:**
- priorityStyles gibi sabitleri '/constants/ticket-priority.ts' gibi ayrı bir dosyaya çıkararak yeniden kullanılabilirliği artırın.
- Avatar yükleme hatası veya geçersiz dueDate gibi durumlar için defansif kontroller ekleyerek hata direncini yükseltin.
- 'priorityStyles' nesnesini bileşen dışına (constants/priority.ts) taşıyın ve 'Priority' tipini burada tanımlayın; bu hem performansı hem de yeniden kullanılabilirliği artırır.
- PropTypes veya TypeScript interface ekleyerek assigneeName, avatarUrl, dueDate gibi opsiyonel alanlar için tip güvenliği sağlayın ve kırık avatar URL'leri için onError fallback ekleyin.

### Prompt Uyumu — 99/100

- Programatik: 100/100 · Semantik: 100/100
- İhlaller: yok

**Öneriler:**
- Görsel olarak zenginleştirmek için assignee avatarının yüklenememesi durumunda fallback bir baş harf gösterimi eklenebilir.
- Takvim ikonu erişilebilirlik için aria-label="Due date" ile desteklenebilir.
- Consider adding a small assignee role/label or tag count indicator next to the title to increase information density typical of real Kanban boards.
- Add an aria-label or semantic improvements (e.g., role='article') to the root element to better match accessibility best practices for a production-ready component.


---

# Loomina Analiz Raporu — Gemini 3.5 Flash

- **Model:** `google/gemini-3.5-flash`
- **Tarih:** 02.06.2026 14:57:25
- **Üretim Süresi:** 14909 ms
- **Genel Skor:** 84/100
- **Karar Yöntemi:** Tahkim (J3)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3, x-ai/grok-4.3
- **J3 (Tahkimci) çağrılan metrikler:** Güvenlik

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
| Okunabilirlik | 94 | 76 | — | **85** | Ortalama (J1-J2) |
| Performans | 88 | 78 | — | **83** | Ortalama (J1-J2) |
| Güvenlik | 55 | 92 | 88 | **88** | Medyan (J1·J2·J3) — tahkim |
| Sürdürülebilirlik | 78 | 58 | — | **68** | Ortalama (J1-J2) |
| Prompt Uyumu | 97 | 93 | — | **95** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 85/100

**Öneriler:**
- Yorum satırındaki TypeScript arayüz tanımını kaldırın; kodun çalışan kısmı daha temiz görünecektir.
- map içindeki 'idx' değişkenini açıkça 'index' olarak adlandırın; kısaltmalar okunabilirliği azaltır.
- Kaldırılan TypeScript interface yorum bloğunu kaldırın ya da gerçekten TypeScript'e geçirip aktif kullanın; yarı yarıya bırakılmış dokümantasyon okuyucuyu yanıltır.
- Üst aksan çizgisi için tekrar eden öncelik rengi üçlü koşulunu `currentPriority` üzerinden tek noktadan yönetin (ör. `currentPriority.dot` benzeri bir alan ekleyin) — DRY ihlalini ortadan kaldırır.

### Performans — 83/100

**Öneriler:**
- priorityStyles nesnesini bileşen dışına (modül seviyesine) taşıyarak her render'da yeniden oluşturulmasını engelleyebilirsiniz. Bu, bileşenin ileride daha büyük bir listede kullanılması durumunda performansa katkı sağlar.
- priority accent çizgisinin stilini belirlemek için tekrar priority kontrolü yapmak yerine, mevcut currentPriority stil haritasına bir 'bar' rengi ekleyerek koşullu render zincirini azaltabilirsiniz.
- `priorityStyles` sabit nesnesini bileşen dışına taşıyarak her render'da yeniden oluşturulmasını önleyin.
- Bileşen büyük listeler halinde kullanılacaksa `React.memo` ile sararak gereksiz yeniden render'ları engelleyin ve `tags` map'inde `key={tag}` kullanın.

### Güvenlik — 88/100

**Öneriler:**
- title, description ve tags gibi kullanıcı tarafından sağlanabilecek tüm metin alanları JSX'e enjekte edilmeden önce DOMPurify veya benzeri bir kütüphane ile sanitize edilmelidir.
- Görüntü URL'si (assignee.avatarUrl) yalnızca izin verilen alan adlarından (allowlist) gelip gelmediği kontrol edilmeli, rastgele URL'lerin render edilmesi engellenmelidir.
- avatarUrl herhangi bir kaynaktan geliyorsa, render öncesi bir URL allowlist veya doğrulama (örn. https:// ile başladığının kontrolü) ekleyerek potansiyel SSRF/kötü URL yönlendirmelerine karşı korunun.
- Kullanıcı tarafından sağlanan içerik ileride description veya tags alanlarına HTML/markdown destekli render eklenecekse, DOMPurify veya benzeri bir sanitization katmanı entegre edin.

### Sürdürülebilirlik — 68/100

**Öneriler:**
- Priority stil haritasını ve yardımcı sabitleri (renkler, SVG ikon path'leri) ayrı bir `constants.ts` veya `ticketStyles.ts` dosyasına taşıyarak modülariteyi artırın.
- Sihirli string'leri (örneğin 'High', 'Medium', 'Low') enum ile değiştirerek değiştirilebilirliği ve tip güvenliğini iyileştirin.
- TypeScript interface'i yorum satırı olmaktan çıkarıp gerçek tip tanımı olarak kullanın ve default value'ları kaldırıp props'ları required yapın.
- Priority renk mantığını tek bir `PRIORITY_CONFIG` sabitinde toplayıp hem badge hem accent line için aynı kaynaktan okuyun; ayrıca <Avatar> ve <PriorityBadge> gibi alt bileşenleri ayırarak yeniden kullanılabilirliği artırın.

### Prompt Uyumu — 95/100

- Programatik: 100/100 · Semantik: 92/100
- İhlaller: yok

**Öneriler:**
- Yalnızca istenen bileşenler (başlık, avatar, öncelik rozeti, son tarih) gösterilip, diğer alanlar çıkarılarak 'basit' gereksinimine daha sıkı uyulabilir.
- Yorum satırındaki TypeScript arayüzü, 'yalnızca kodu ver' talimatına aykırı olduğundan kaldırılmalıdır.
- Remove the commented-out TypeScript interface block and explanatory comments to honor the 'do not write any explanations' and 'simple component' instructions, keeping output to pure code only.
- Simplify the component by removing extra features (tags, comments/attachments counters) that go beyond the requested 'simple Kanban task ticket' to better match the prompt's simplicity intent.
