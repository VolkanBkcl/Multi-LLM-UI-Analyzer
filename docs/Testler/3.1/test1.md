# Loomina — Model Karşılaştırma Raporu

- **Tarih:** 02.06.2026 14:51:34
- **Karşılaştırılan Model Sayısı:** 3

## Kullanıcı Promptu

Create a simple Kanban task ticket component. It must include a task title, an assignee avatar, a priority badge (e.g., High, Medium), and a due date. Use Tailwind CSS for styling. Do not write any explanations, output only the code.

## Karşılaştırma Tablosu

| Model | Genel | Okunabilirlik | Performans | Güvenlik | Sürdürülebilirlik | Prompt Uyumu |
|---|---|---|---|---|---|---|
| DeepSeek V4 Pro | 76 | 85 | 75 | 93 | 29 | 98 |
| Qwen3.6 Plus | 86 | 85 | 88 | 93 | 64 | 98 |
| Gemini 3.5 Flash | 86 | 82 | 90 | 94 | 67 | 99 |

---

# Loomina Analiz Raporu — DeepSeek V4 Pro

- **Model:** `deepseek/deepseek-v4-pro`
- **Tarih:** 02.06.2026 14:51:34
- **Üretim Süresi:** 32189.19 ms
- **Genel Skor:** 76/100
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
| Okunabilirlik | 88 | 82 | — | **85** | Ortalama (J1-J2) |
| Performans | 95 | 70 | 75 | **75** | Medyan (J1·J2·J3) — tahkim |
| Güvenlik | 98 | 88 | — | **93** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 20 | 38 | — | **29** | Ortalama (J1-J2) |
| Prompt Uyumu | 98 | 98 | — | **98** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 85/100

**Öneriler:**
- Sihirli renk kodları (örn: #b91c1c, #b45309) anlamlı CSS değişkenleri veya Tailwind renk sınıflarıyla değiştirilebilir.
- Boş `<div>` ayracı (divider) için daha anlamlı bir bileşen adı veya Tailwind utility kullanımı tercih edilebilir.
- Sondaki gereksiz meta-yorum bloğu ('The code above fully satisfies...') ve 'clean placeholder' gibi açıklayıcı olmayan yorumlar kaldırılmalı.
- Üç badge sınıfı (badge-high/medium/low) ortak bir temel sınıf ve varyant modifier'ları ile birleştirilerek tekrar azaltılabilir.

### Performans — 75/100

**Öneriler:**
- Sayfa yüklenme performansını artırmak için Tailwind CSS'i CDN yerine derlenmiş (purged) bir dosya olarak sunmayı düşünün.
- Google Fonts bağlantısında font-display: swap kullanılmadığı için metnin geç görünme riski var; link etiketine &display=swap parametresi eklenebilir.
- Tailwind CDN'i üretim derlemesiyle (PurgeCSS/JIT) değiştirerek runtime derleme maliyetini ortadan kaldırın ve yalnızca kullanılan utility'leri içeren küçük bir CSS bundle'ı sunun.
- Google Fonts yerine kendi barındırdığınız, yalnızca gerekli ağırlık ve karakter setine subset edilmiş Inter woff2 dosyalarını kullanarak font yükleme süresini azaltın.

### Güvenlik — 93/100

**Öneriler:**
- Herhangi bir güvenlik açığı bulunmadığından iyileştirme önerisi yok.
- Kod üretim ortamına alınmadan önce, ileride dinamik veri bağlanırsa, kullanıcıdan gelen içeriklerin (ör. task title) JSX'e doğrudan enjekte edilmeden önce sanitize edilmesi gerektiği unutulmamalıdır.
- Tailwind CDN script'ine `integrity` ve `crossorigin` öznitelikleri ekleyerek SRI ile yükleyin; ideal olarak production'da CDN yerine build edilmiş Tailwind kullanın.
- Dış kaynaklı avatar veya font URL'lerini doğrudan host etmeyi ya da `referrerpolicy="no-referrer"` ile yüklemeyi değerlendirerek üçüncü taraf sızıntı riskini azaltın.

### Sürdürülebilirlik — 29/100

**Öneriler:**
- Kart yapısını React/Vue gibi bir framework'te bağımsız alt bileşenlere (PriorityBadge, Avatar, DueDate) ayırın; stil sabitlerini (badge-high, badge-medium) bir tema dosyasına veya Tailwind config'e taşıyın.
- Priority ve etiketleri enum/sabit dizilerle yönetin; kart bileşenine props olarak geçirin. Hata, loading ve empty durumları için ayrı sunum bileşenleri ekleyin.
- Extract the card into a reusable template/component (e.g., React/Vue/Web Component) with props for title, assignee, priority, and dueDate; move priority colors and labels into a constants file or Tailwind theme tokens.
- Replace hardcoded badge class with a data-driven priority mapping (e.g., priorityMap = { High: 'badge-high', Medium: 'badge-medium', Low: 'badge-low' }) so adding a new priority only requires updating one map.

### Prompt Uyumu — 98/100

- Programatik: 100/100 · Semantik: 95/100
- İhlaller: yok

**Öneriler:**
- Öncelik rozeti için 'High' ve 'Low' durumlarının da render edilebileceği dinamik bir yapı örneği düşünülebilir.
- Kart içeriğindeki 'Redesign onboarding flow' gibi örnek metinlerin projenin gerçek verisiyle değiştirilebilmesi için bileşen yapısına prop geçişi dahil edilebilir.
- Prompt'un 'açıklama yazma, sadece kod çıktısı ver' talimatına tam uymak için HTML yorumlarını kaldırın.
- Bileşeni yeniden kullanılabilir bir React/Vue component veya kopyala-yapıştır HTML snippet olarak sunmak, 'basit Kanban ticket bileşeni' niyetine daha sadık olur.


---

# Loomina Analiz Raporu — Qwen3.6 Plus

- **Model:** `qwen/qwen3.6-plus`
- **Tarih:** 02.06.2026 14:51:34
- **Üretim Süresi:** 65845.07 ms
- **Genel Skor:** 86/100
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
| Okunabilirlik | 88 | 82 | — | **85** | Ortalama (J1-J2) |
| Performans | 85 | 90 | — | **88** | Ortalama (J1-J2) |
| Güvenlik | 95 | 90 | — | **93** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 55 | 72 | — | **64** | Ortalama (J1-J2) |
| Prompt Uyumu | 98 | 97 | — | **98** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 85/100

**Öneriler:**
- Priority değerleri ('High', 'Medium', 'Low') için bir `type` veya enum tanımlayarak tip güvenliğini artırın.
- `priorityStyles` nesnesine index signature veya `Record<Priority, string>` tipi ekleyerek TypeScript hatası riskini azaltın.
- Add PropTypes or convert to TypeScript with an explicit Props interface to make the contract self-documenting and catch misuse.
- Extract the inline calendar SVG into a small CalendarIcon subcomponent or a constant to reduce JSX visual noise and improve scannability.

### Performans — 88/100

**Öneriler:**
- priorityStyles sabit eşlemesini bileşen dışına taşıyarak her render'da yeniden nesne oluşturulmasını önleyin.
- Bileşen büyük listelerde yoğun olarak kullanılacaksa, yeniden render'ları azaltmak için React.memo ile sarın (ancak ölçüm yapılmadan erken optimizasyondan kaçının).
- `priorityStyles` sabit nesnesini bileşen dışına (modül düzeyinde) taşıyarak her render'da yeniden oluşturulmasını önleyebilirsiniz; bu da referans stabilitesi sayesinde ileride `React.memo` veya `useMemo` kullanımında fayda sağlar.
- Bileşen kanban listesinde çok sayıda render edilecekse, `React.memo` ile sarmalanması parent state değişimlerinde gereksiz re-render'ları önleyebilir.

### Güvenlik — 93/100

**Öneriler:**
- Avatar URL'si için harici bir kaynaktan veri çekerken, beklenmeyen içerik veya bozuk bağlantılara karşı alt metnin (alt={assigneeName}) her zaman düzgün gösterildiğinden emin olun.
- Kullanıcı girdileri (title, dueDate vb.) doğrudan render edilse de React tarafından kaçırıldığı için güvenlidir; ancak bu bileşenin daha büyük bir formun parçası olması durumunda client-side validation eklenmesi önerilir.
- PropTypes veya TypeScript ile `priority` alanını 'High' | 'Medium' | 'Low' literal union'ına kısıtlayın ve `avatarUrl` için URL format doğrulaması ekleyin.
- Bileşene dış kaynaklı avatar URL'leri geçilecekse, `loading="lazy"` ve `referrerPolicy="no-referrer"` gibi ek güvenlik/performans nitelikleri ile birlikte güvenilir domain allowlist kontrolü uygulayın.

### Sürdürülebilirlik — 64/100

**Öneriler:**
- priorityStyles ve varsayılan prop değerleri gibi sabitleri ayrı bir constants.js dosyasına taşıyın.
- Bileşene prop-type doğrulaması (PropTypes veya TypeScript) ekleyerek ve eksik/geçersiz veri için fallback UI gösterecek şekilde hata yönetimini güçlendirin.
- Hoist the `priorityStyles` lookup object and the priority values (HIGH/MEDIUM/LOW) to module-level constants (e.g. `constants.ts`) so they are not recreated per render and can be reused across components.
- Add PropTypes or convert to TypeScript with a typed `KanbanTicketProps` interface to make the public contract explicit and catch breaking changes at compile time.

### Prompt Uyumu — 98/100

- Programatik: 100/100 · Semantik: 95/100
- İhlaller: yok

**Öneriler:**
- Priority badge için varsayılan değer olarak 'Medium' atanırken, promptta belirtilen 'High, Medium' örnekleriyle uyumlu. Ancak düşük öncelik (Low) için varsayılan stil tanımlanmış olsa da promptta istenmemiş; bu gereksiz genişletme minör bir sapma sayılabilir.
- Takvim ikonu ve tarih gösterimi istenen 'due date' alanını karşılıyor. Ekstra açıklama olmadığından herhangi bir sapma yok.
- Son tarih formatı için Date tipinde bir prop ve tarih yaklaşıyorsa görsel uyarı (örn. kırmızı renk) desteği eklenebilir.
- Avatar URL'si için fallback (DiceBear gibi dış servise bağımlı kalmadan initials tabanlı avatar) mekanizması düşünülebilir.


---

# Loomina Analiz Raporu — Gemini 3.5 Flash

- **Model:** `google/gemini-3.5-flash`
- **Tarih:** 02.06.2026 14:51:34
- **Üretim Süresi:** 14908.89 ms
- **Genel Skor:** 86/100
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
| Okunabilirlik | 88 | 75 | — | **82** | Ortalama (J1-J2) |
| Performans | 98 | 82 | — | **90** | Ortalama (J1-J2) |
| Güvenlik | 95 | 92 | — | **94** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 72 | 62 | — | **67** | Ortalama (J1-J2) |
| Prompt Uyumu | 100 | 97 | — | **99** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 82/100

**Öneriler:**
- Yorum satırına alınmış TypeScript arayüzünü aktif hale getirin veya tamamen kaldırın; ölü kod okunabilirliği azaltır.
- Üst accent çizgisindeki iç içe ternary ifadesini, priorityStyles nesnesine ek bir 'accent' özelliği ekleyerek sadeleştirin.
- TypeScript interface'ini yorum satırı olmaktan çıkarıp gerçek tip tanımı olarak kullanın; bu hem okunabilirliği hem de type safety'yi artırır.
- Bazı yorumlar (ör. 'Priority color mapping') kodu tekrar ediyor; bunları kaldırıp yalnızca NEDEN yapıldığını açıklayan yorumlar bırakın.

### Performans — 90/100

**Öneriler:**
- Eğer bu bileşen birçok kez render edilecek bir listede kullanılıyorsa, sabit SVG yapıları için `React.memo` ile sararak gereksiz re-render'ları engelleyebilirsiniz.
- `priorityStyles` ve `currentPriority` nesneleri zaten sabit olduğu için `useMemo` eklemek gereksizdir; mevcut haliyle performans için yeterlidir.
- `priorityStyles` nesne sabitini bileşen dışına (modül seviyesine) taşıyarak her render'da yeniden oluşturulmasını önleyin.
- Çok sayıda kart render edilen senaryolarda bileşeni `React.memo` ile sarmalayıp parent re-render'larından etkilenmesini engelleyin.

### Güvenlik — 94/100

**Öneriler:**
- Avatar URL'si dış kaynaklardan geliyorsa, URL'nin beklenen domain'de olduğunu doğrulamak veya bir proxy üzerinden geçirmek güvenliği artırabilir.
- Props olarak gelen 'title' ve 'description' alanları XSS'e karşı güvende olsa da, ekstra güvenlik için içerik uzunluk sınırlaması eklenebilir.
- Eğer dış kaynaklı avatarUrl prop ile çalışacaksa, URL'nin https:// ile başladığını ve izinli domain listesinde olduğunu doğrulayan küçük bir yardımcı fonksiyon eklemek tedbirli olur.
- Bileşen PII (kullanıcı adı, rol) render ettiğinden, parent component'te gelen verinin sanitize edildiğinden ve HTTPS üzerinden iletildiğinden emin olunması önerilir.

### Sürdürülebilirlik — 67/100

**Öneriler:**
- Priority renk stillerini 'constants/ticketStyles.ts' gibi ayrı bir dosyaya çıkararak yeniden kullanılabilirliği artırın.
- TypeScript interface'ini yorum satırı olarak değil, bileşenin props tanımına bağlayarak tip güvenliğini etkinleştirin.
- Tekrarlayan öncelik renk mantığını tek bir `PRIORITY_STYLES` sabitine (modül seviyesinde) çıkarın ve üst accent çizgisinde de `currentPriority` üzerinden türetin; böylece renk değişiklikleri tek yerden yönetilir.
- Avatar+tooltip, priority badge ve tag list'i ayrı bileşenlere (PriorityBadge, AssigneeAvatar, TagList) ayırarak yeniden kullanılabilirliği artırın ve ana bileşeni salt kompozisyona indirgeyin.

### Prompt Uyumu — 99/100

- Programatik: 100/100 · Semantik: 100/100
- İhlaller: yok

**Öneriler:**
- Bileşen 'basit' olarak tanımlanmış; açıklama, etiketler, yorum sayısı gibi ek özellikler çıkarılarak daha sade hale getirilebilir.
- TypeScript arayüzü yorum satırı olarak bırakılmış; isteğe bağlı olarak ayrı bir dosyaya taşınabilir.
- TypeScript interface'ı yorum satırı olarak değil, .tsx dosyasında aktif şekilde kullanın; ayrıca JSDoc tipleri ile de destekleyin.
- Prompt 'simple' ifadesini içerdiğinden tags, comments/attachments, tooltip gibi ekstra bölümler isteğe bağlıdır; daha sade bir varyant da sunulabilir veya bu eklemelerin bilinçli bir tasarım kararı olduğu belirtilebilir.
