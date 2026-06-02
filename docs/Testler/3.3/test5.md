# Loomina — Model Karşılaştırma Raporu

- **Tarih:** 02.06.2026 15:29:10
- **Karşılaştırılan Model Sayısı:** 3

## Kullanıcı Promptu

Build a detailed sprint performance dashboard. It needs a collapsible side navigation. The main workspace should include a top section for an AI-supported roadmap timeline, a placeholder for a sprint burndown chart, and a team workload distribution widget showing avatars and active task counts. Provide the complete code using React and Tailwind CSS. Do not write any explanations, output only the code.

## Karşılaştırma Tablosu

| Model | Genel | Okunabilirlik | Performans | Güvenlik | Sürdürülebilirlik | Prompt Uyumu |
|---|---|---|---|---|---|---|
| DeepSeek V4 Pro | 89 | 86 | 87 | 94 | 78 | 99 |
| Qwen3.6 Plus | 76 | 78 | 78 | 93 | 34 | 98 |
| Gemini 3.5 Flash | 76 | 77 | 78 | 92 | 38 | 97 |

---

# Loomina Analiz Raporu — DeepSeek V4 Pro

- **Model:** `deepseek/deepseek-v4-pro`
- **Tarih:** 02.06.2026 15:29:10
- **Üretim Süresi:** 78686 ms
- **Genel Skor:** 89/100
- **Karar Yöntemi:** Tahkim (J3)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3, x-ai/grok-4.3
- **J3 (Tahkimci) çağrılan metrikler:** Sürdürülebilirlik

## Kullanıcı Promptu

Build a detailed sprint performance dashboard. It needs a collapsible side navigation. The main workspace should include a top section for an AI-supported roadmap timeline, a placeholder for a sprint burndown chart, and a team workload distribution widget showing avatars and active task counts. Provide the complete code using React and Tailwind CSS. Do not write any explanations, output only the code.

## Üretilen Kod

```html
import React, { useState } from 'react';

// Inline SVG Icons
const HomeIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);
const SprintIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);
const BacklogIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);
const ChartIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);
const SettingsIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const ChevronLeftIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);
const ChevronRightIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);
const SparkleIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const navItems = [
  { icon: HomeIcon, label: 'Dashboard', active: true },
  { icon: SprintIcon, label: 'Sprints' },
  { icon: BacklogIcon, label: 'Backlog' },
  { icon: ChartIcon, label: 'Reports' },
  { icon: SettingsIcon, label: 'Settings' },
];

const teamMembers = [
  { name: 'Elena Torres', tasks: 8, initials: 'ET', color: 'bg-pink-500' },
  { name: 'Marcus Chen', tasks: 12, initials: 'MC', color: 'bg-indigo-500' },
  { name: 'Priya Patel', tasks: 5, initials: 'PP', color: 'bg-emerald-500' },
  { name: 'David Kim', tasks: 9, initials: 'DK', color: 'bg-amber-500' },
  { name: 'Sofia Rodriguez', tasks: 4, initials: 'SR', color: 'bg-purple-500' },
];

const sprintRoadmap = [
  { label: 'Sprint 1', date: 'Jan 8 - 21', status: 'completed', aiRecommendation: null },
  { label: 'Sprint 2', date: 'Jan 22 - Feb 4', status: 'completed', aiRecommendation: null },
  { label: 'Sprint 3', date: 'Feb 5 - 18', status: 'active', aiRecommendation: null },
  { label: 'Sprint 4', date: 'Feb 19 - Mar 4', status: 'planned', aiRecommendation: 'Increase QA capacity' },
];

function Sidebar({ collapsed, toggle }) {
  return (
    <aside
      className={`${
        collapsed ? 'w-16' : 'w-64'
      } transition-all duration-300 bg-slate-900 text-slate-300 flex flex-col h-screen sticky top-0 shadow-2xl z-20`}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-slate-700">
        {!collapsed && (
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            SprintOS
          </span>
        )}
        <button
          onClick={toggle}
          className="p-1.5 rounded-lg hover:bg-slate-800 transition-colors text-slate-400 hover:text-white"
        >
          {collapsed ? <ChevronRightIcon className="w-5 h-5" /> : <ChevronLeftIcon className="w-5 h-5" />}
        </button>
      </div>
      <nav className="flex-1 py-4">
        {navItems.map((item, i) => (
          <a
            key={i}
            href="#"
            className={`flex items-center px-4 py-3 mx-2 rounded-xl transition-all duration-200 group ${
              item.active
                ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 shadow-sm'
                : 'hover:bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <item.icon className={`w-5 h-5 flex-shrink-0 ${item.active ? 'text-cyan-400' : ''}`} />
            {!collapsed && <span className="ml-3 font-medium">{item.label}</span>}
          </a>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-700">
        {!collapsed && (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-xs font-bold text-white">
              AL
            </div>
            <div className="text-sm">
              <p className="font-medium text-white">Alex Lee</p>
              <p className="text-slate-400 text-xs">Scrum Master</p>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}

function RoadmapTimeline() {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-700/50">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <SparkleIcon className="w-6 h-6 text-cyan-400" />
          AI-Powered Sprint Roadmap
        </h2>
        <span className="px-3 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30">
          AI Optimizer Active
        </span>
      </div>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute top-8 left-0 right-0 h-1 bg-slate-700 rounded-full" />
        <div className="flex justify-between relative">
          {sprintRoadmap.map((sprint, idx) => (
            <div key={idx} className="flex flex-col items-center w-1/5">
              <div
                className={`w-5 h-5 rounded-full border-2 z-10 ${
                  sprint.status === 'completed'
                    ? 'bg-emerald-500 border-emerald-400 shadow-lg shadow-emerald-500/30'
                    : sprint.status === 'active'
                    ? 'bg-cyan-500 border-cyan-400 shadow-lg shadow-cyan-500/30 animate-pulse'
                    : 'bg-slate-600 border-slate-500'
                }`}
              />
              <div className="mt-3 text-center">
                <p className="text-white font-medium text-sm">{sprint.label}</p>
                <p className="text-slate-400 text-xs">{sprint.date}</p>
                {sprint.aiRecommendation && (
                  <div className="mt-2 px-2 py-1 bg-amber-500/10 rounded-md border border-amber-500/20 flex items-center gap-1">
                    <SparkleIcon className="w-3 h-3 text-amber-400" />
                    <span className="text-amber-300 text-xs">{sprint.aiRecommendation}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BurndownPlaceholder() {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-700/50 h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">Sprint Burndown</h2>
        <span className="text-sm text-slate-400">Sprint 3 (current)</span>
      </div>
      <div className="relative w-full h-48 bg-slate-900/60 rounded-lg p-4 flex items-center justify-center border border-slate-700">
        {/* Simple chart placeholder */}
        <svg viewBox="0 0 300 120" className="w-full h-full opacity-70">
          {/* Axes */}
          <line x1="40" y1="20" x2="40" y2="110" stroke="#475569" strokeWidth="1.5" />
          <line x1="40" y1="110" x2="280" y2="110" stroke="#475569" strokeWidth="1.5" />
          {/* Ideal line */}
          <line x1="40" y1="30" x2="280" y2="100" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="4" opacity="0.7" />
          {/* Actual placeholder line (curved) */}
          <path d="M40 35 Q100 60, 140 70 T 240 85 Q 260 90, 280 95" stroke="#f59e0b" strokeWidth="2" fill="none" />
          <text x="150" y="90" fill="#94a3b8" fontSize="8" textAnchor="middle">Burndown chart will render here</text>
        </svg>
      </div>
      <div className="flex justify-between mt-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-cyan-500 rounded" />
          <span className="text-slate-300">Ideal</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-amber-500 rounded" />
          <span className="text-slate-300">Actual</span>
        </div>
      </div>
    </div>
  );
}

function TeamWorkload() {
  const maxTasks = Math.max(...teamMembers.map((m) => m.tasks));
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-700/50 h-full">
      <h2 className="text-xl font-semibold text-white mb-6">Team Workload</h2>
      <div className="space-y-5">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-full ${member.color} flex items-center justify-center text-white font-bold shadow-md`}>
              {member.initials}
            </div>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="text-slate-300 text-sm font-medium">{member.name}</span>
                <span className="text-slate-400 text-sm">{member.tasks} tasks</span>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${member.color} transition-all duration-500`}
                  style={{ width: `${(member.tasks / maxTasks) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-slate-950 text-white overflow-hidden">
      <Sidebar
        collapsed={sidebarCollapsed}
        toggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top header bar */}
        <header className="h-16 bg-slate-900/80 backdrop-blur-md border-b border-slate-700 flex items-center justify-between px-6 shadow-md z-10">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-lg font-bold text-white">Sprint Dashboard</h1>
              <p className="text-xs text-slate-400">Sprint 3 • Feb 5 - Feb 18</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search tasks..."
                className="w-64 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
            <button className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors">
              <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
          </div>
        </header>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* AI Roadmap Timeline */}
          <RoadmapTimeline />

          {/* Middle row: Burndown and Workload */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BurndownPlaceholder />
            <TeamWorkload />
          </div>
        </div>
      </main>
    </div>
  );
}
```

## Hakem Skor Dökümü (J1 / J2 / J3)

| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |
|---|---|---|---|---|---|
| Okunabilirlik | 92 | 80 | — | **86** | Ortalama (J1-J2) |
| Performans | 85 | 88 | — | **87** | Ortalama (J1-J2) |
| Güvenlik | 95 | 92 | — | **94** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 92 | 62 | 78 | **78** | Medyan (J1·J2·J3) — tahkim |
| Prompt Uyumu | 100 | 98 | — | **99** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 86/100

**Öneriler:**
- Null 'aiRecommendation' alanlarını kaldırarak veriyi sadeleştirebilirsiniz. Sadece gereken sprint için tanımlayın.
- BurndownPlaceholder bileşeninde SVG içindeki 'Burndown chart will render here' metni kullanıcıya gösterildiğinden, bunu daha anlaşılır veya görsel bir placeholder ile değiştirebilirsiniz.
- Statü string'lerini ('completed', 'active', 'planned') bir sabitler objesine çıkarın ve nested ternary yerine bir yardımcı fonksiyonla sınıf eşlemesi yapın; bu, hem okunabilirliği artırır hem de hataya daha az açık hale getirir.
- Sprint roadmap ve navItems için array index yerine benzersiz `id` alanı ekleyip bunu React `key` olarak kullanın; ayrıca bildirim zili SVG'sini diğer ikonlarla tutarlı olacak şekilde ayrı bir bileşene taşıyın.

### Performans — 87/100

**Öneriler:**
- Listelerde `key` olarak index yerine benzersiz, sabit bir kimlik (örn. `item.label`) kullanarak re-render performansını iyileştirin.
- `TeamWorkload` içindeki `maxTasks` hesaplaması render başına yeniden yapılması maliyetli olmasa da, `useMemo` ile memoize edilebilir.
- TeamWorkload içindeki maxTasks hesabını useMemo ile sararak küçük ama anlamlı bir optimizasyon yapılabilir; ayrıca Sidebar'a geçirilen toggle fonksiyonu useCallback ile memoize edilebilir.
- Büyük ölçekli sprint/team verileri için React.lazy + Suspense veya liste virtualization (react-window) düşünülmeli, şu anki 5-4 elemanlı statik listeler için gerekli değil ancak ölçeklenebilirlik için iyi olur.

### Güvenlik — 94/100

**Öneriler:**
- Arama girişi gibi form alanlarına istemci tarafı doğrulama (maxLength, tür kontrolü) eklenmeli.
- Güvenlik açığı bulunmamakla birlikte, gelecekte API entegrasyonu yapılırsa HTTPS zorunluluğu ve token yönetimi dikkate alınmalı.
- Arama input'unun aktif olması durumunda, kullanıcı girdisi render edilmeden önce escape/sanitize edilmeli ve uzunluk sınırı uygulanmalıdır.
- İleride API entegrasyonu eklendiğinde, dış kaynaklara yalnızca HTTPS üzerinden fetch yapılmalı ve API hata mesajları doğrudan kullanıcıya gösterilmemelidir.

### Sürdürülebilirlik — 78/100

**Öneriler:**
- Sprint durumları için 'completed', 'active' gibi metinler yerine bir enum tanımlayarak yanlış yazım riskini azaltın.
- Burndown chart placeholder'ını veriyi props olarak alan bir SVG veya chart bileşeni ile değiştirin; böylece ileride gerçek veri entegrasyonu kolaylaşır.
- Her bileşeni ve sabit veriyi (navItems, teamMembers, sprintRoadmap) ayrı dosyalara taşıyın; status gibi magic string'ler için ortak bir constants.ts veya enum kullanın.
- Yeniden kullanılabilir bir Card/Button bileşeni ve iş mantığını (ör. maxTasks hesabı) soyutlayan useTeamWorkload gibi custom hook'lar ekleyerek modifiability ve testability'yi artırın.

### Prompt Uyumu — 99/100

- Programatik: 100/100 · Semantik: 100/100
- İhlaller: yok

**Öneriler:**
- Burndown yer tutucusu daha belirgin bir şekilde 'veri bekleniyor' mesajı içerecek şekilde geliştirilebilir.
- Takım iş yükü widget'ında görevlerin 'aktif' olduğunu vurgulamak için veriye bir 'active' bayrağı eklenebilir.
- Burndown chart placeholder could include a couple of sample data points/labels to feel more concrete while still being labeled as a placeholder.
- Roadmap timeline could add interactive tooltips on hover for AI recommendations to enhance the AI-supported aspect further.


---

# Loomina Analiz Raporu — Qwen3.6 Plus

- **Model:** `qwen/qwen3.6-plus`
- **Tarih:** 02.06.2026 15:29:10
- **Üretim Süresi:** 134040 ms
- **Genel Skor:** 76/100
- **Karar Yöntemi:** Konsensüs (iki hakem ortalaması)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3
- **J3 (Tahkimci) çağrılan metrikler:** Yok — iki hakem tüm metriklerde uzlaştı.

## Kullanıcı Promptu

Build a detailed sprint performance dashboard. It needs a collapsible side navigation. The main workspace should include a top section for an AI-supported roadmap timeline, a placeholder for a sprint burndown chart, and a team workload distribution widget showing avatars and active task counts. Provide the complete code using React and Tailwind CSS. Do not write any explanations, output only the code.

## Üretilen Kod

```html
import React, { useState } from 'react';

const Dashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeNav, setActiveNav] = useState('dashboard');

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: 'sprints', label: 'Sprints', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { id: 'backlog', label: 'Backlog', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
    { id: 'team', label: 'Team', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
    { id: 'reports', label: 'Reports', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { id: 'settings', label: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
  ];

  const roadmapMilestones = [
    { id: 1, title: 'Discovery Phase', status: 'completed', date: 'Oct 1 - Oct 14', aiNote: 'AI detected 3 scope risks' },
    { id: 2, title: 'Core Architecture', status: 'completed', date: 'Oct 15 - Oct 28', aiNote: 'Performance optimization suggested' },
    { id: 3, title: 'MVP Features', status: 'in-progress', date: 'Oct 29 - Nov 18', aiNote: 'Velocity trending +12%' },
    { id: 4, title: 'Integration Testing', status: 'upcoming', date: 'Nov 19 - Dec 2', aiNote: 'Predicted 2-day delay risk' },
    { id: 5, title: 'Beta Release', status: 'upcoming', date: 'Dec 3 - Dec 16', aiNote: 'Resource allocation optimal' },
  ];

  const burndownData = {
    days: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10', 'Day 11', 'Day 12', 'Day 13', 'Day 14'],
    ideal: [120, 111, 103, 94, 86, 77, 69, 60, 51, 43, 34, 26, 17, 8],
    actual: [120, 118, 112, 105, 98, 88, 82, 74, 65, 58, 49, 42, 36, 28],
  };

  const teamMembers = [
    { name: 'Sarah Chen', role: 'Tech Lead', tasks: 8, avatar: 'SC', color: 'bg-indigo-500', status: 'active' },
    { name: 'Marcus Johnson', role: 'Frontend Dev', tasks: 6, avatar: 'MJ', color: 'bg-emerald-500', status: 'active' },
    { name: 'Priya Patel', role: 'Backend Dev', tasks: 12, avatar: 'PP', color: 'bg-amber-500', status: 'overloaded' },
    { name: 'Alex Rivera', role: 'UI/UX Designer', tasks: 4, avatar: 'AR', color: 'bg-pink-500', status: 'active' },
    { name: 'Jordan Kim', role: 'QA Engineer', tasks: 9, avatar: 'JK', color: 'bg-cyan-500', status: 'active' },
    { name: 'Emma Wilson', role: 'DevOps', tasks: 3, avatar: 'EW', color: 'bg-violet-500', status: 'available' },
    { name: 'David Brown', role: 'Product Owner', tasks: 5, avatar: 'DB', color: 'bg-orange-500', status: 'active' },
    { name: 'Lisa Zhang', role: 'Scrum Master', tasks: 2, avatar: 'LZ', color: 'bg-teal-500', status: 'available' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'in-progress': return 'bg-indigo-100 text-indigo-700 border-indigo-200';
      case 'upcoming': return 'bg-slate-100 text-slate-600 border-slate-200';
      default: return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  const getWorkloadIndicator = (tasks) => {
    if (tasks >= 10) return { label: 'Overloaded', color: 'text-red-500', bg: 'bg-red-500' };
    if (tasks >= 6) return { label: 'Balanced', color: 'text-emerald-500', bg: 'bg-emerald-500' };
    return { label: 'Available', color: 'text-blue-500', bg: 'bg-blue-500' };
  };

  const chartWidth = 800;
  const chartHeight = 250;
  const padding = { top: 20, right: 20, bottom: 30, left: 50 };
  const innerWidth = chartWidth - padding.left - padding.right;
  const innerHeight = chartHeight - padding.top - padding.bottom;

  const xScale = (index) => padding.left + (index / (burndownData.days.length - 1)) * innerWidth;
  const yScale = (value) => padding.top + innerHeight - (value / 120) * innerHeight;

  const idealPath = burndownData.ideal.map((val, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(val)}`).join(' ');
  const actualPath = burndownData.actual.map((val, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(val)}`).join(' ');

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-800">
      {/* Sidebar */}
      <aside
        className={`relative flex flex-col bg-slate-900 text-white transition-all duration-300 ease-in-out ${
          isSidebarCollapsed ? 'w-20' : 'w-64'
        } shadow-xl`}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          {!isSidebarCollapsed && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-bold text-lg tracking-tight">SprintAI</span>
            </div>
          )}
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="p-2 rounded-lg hover:bg-slate-700 transition-colors"
          >
            <svg className={`w-5 h-5 transition-transform duration-300 ${isSidebarCollapsed ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 py-4 px-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                activeNav === item.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              {!isSidebarCollapsed && <span className="font-medium text-sm">{item.label}</span>}
            </button>
          ))}
        </nav>

        {!isSidebarCollapsed && (
          <div className="p-4 border-t border-slate-700">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-4">
              <p className="text-sm font-semibold mb-1">Pro Plan</p>
              <p className="text-xs text-indigo-100 mb-3">AI insights enabled</p>
              <div className="w-full bg-indigo-800 rounded-full h-1.5">
                <div className="bg-white rounded-full h-1.5 w-3/4"></div>
              </div>
              <p className="text-xs text-indigo-200 mt-2">75% sprint capacity</p>
            </div>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Sprint 24 Performance</h1>
              <p className="text-sm text-slate-500 mt-0.5">Oct 29 - Nov 18, 2024 • Day 8 of 14</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                On Track
              </div>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">
                Generate Report
              </button>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* AI Roadmap Timeline */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">AI-Supported Roadmap Timeline</h2>
                  <p className="text-xs text-slate-500">Machine learning predictions based on team velocity</p>
                </div>
              </div>
              <span className="text-xs font-medium px-2.5 py-1 bg-violet-100 text-violet-700 rounded-full">AI Active</span>
            </div>

            <div className="relative">
              <div className="absolute top-6 left-0 right-0 h-1 bg-slate-200 rounded-full">
                <div className="h-full bg-gradient-to-r from-emerald-400 via-indigo-500 to-slate-300 rounded-full w-3/5"></div>
              </div>
              <div className="relative flex justify-between">
                {roadmapMilestones.map((milestone, index) => (
                  <div key={milestone.id} className="flex flex-col items-center w-full group">
                    <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${
                      milestone.status === 'completed' ? 'bg-emerald-500 border-emerald-200' :
                      milestone.status === 'in-progress' ? 'bg-indigo-500 border-indigo-200 animate-pulse' :
                      'bg-white border-slate-300'
                    }`}>
                      {milestone.status === 'completed' ? (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : milestone.status === 'in-progress' ? (
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      ) : (
                        <span className="text-slate-400 text-xs font-bold">{index + 1}</span>
                      )}
                    </div>
                    <div className="mt-3 text-center">
                      <p className="font-semibold text-sm text-slate-900">{milestone.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{milestone.date}</p>
                      <span className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full border ${getStatusColor(milestone.status)}`}>
                        {milestone.status === 'in-progress' ? 'In Progress' : milestone.status === 'completed' ? 'Completed' : 'Upcoming'}
                      </span>
                    </div>
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="bg-slate-800 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                        <span className="text-violet-300 font-medium">AI Insight:</span> {milestone.aiNote}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Burndown Chart & Team Workload */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Sprint Burndown Chart */}
            <section className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Sprint Burndown Chart</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Story points remaining vs. ideal trajectory</p>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-0.5 bg-slate-400 rounded-full"></span>
                    <span className="text-slate-600">Ideal</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-0.5 bg-indigo-500 rounded-full"></span>
                    <span className="text-slate-600">Actual</span>
                  </div>
                </div>
              </div>

              <div className="w-full overflow-x-auto">
                <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full min-w-[600px]">
                  {/* Grid lines */}
                  {[0, 30, 60, 90, 120].map((val) => (
                    <g key={val}>
                      <line
                        x1={padding.left}
                        y1={yScale(val)}
                        x2={chartWidth - padding.right}
                        y2={yScale(val)}
                        stroke="#e2e8f0"
                        strokeWidth="1"
                        strokeDasharray={val === 0 ? '0' : '4 4'}
                      />
                      <text x={padding.left - 10} y={yScale(val) + 4} textAnchor="end" className="text-xs fill-slate-400">
                        {val}
                      </text>
                    </g>
                  ))}

                  {/* X-axis labels */}
                  {burndownData.days.map((day, i) => (
                    <text
                      key={i}
                      x={xScale(i)}
                      y={chartHeight - 5}
                      textAnchor="middle"
                      className="text-xs fill-slate-400"
                    >
                      {day}
                    </text>
                  ))}

                  {/* Ideal line */}
                  <path d={idealPath} fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 4" />

                  {/* Actual line */}
                  <path d={actualPath} fill="none" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

                  {/* Data points */}
                  {burndownData.actual.map((val, i) => (
                    <circle key={i} cx={xScale(i)} cy={yScale(val)} r="4" fill="#6366f1" stroke="white" strokeWidth="2" />
                  ))}

                  {/* Area under actual */}
                  <path
                    d={`${actualPath} L ${xScale(burndownData.actual.length - 1)} ${yScale(0)} L ${xScale(0)} ${yScale(0)} Z`}
                    fill="url(#gradient)"
                    opacity="0.15"
                  />

                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="mt-4 flex items-center justify-between text-sm">
                <div className="flex gap-6">
                  <div>
                    <p className="text-slate-500 text-xs">Total Story Points</p>
                    <p className="font-bold text-lg text-slate-900">120</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">Completed</p>
                    <p className="font-bold text-lg text-emerald-600">92 (77%)</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">Remaining</p>
                    <p className="font-bold text-lg text-indigo-600">28</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-slate-500 text-xs">AI Prediction</p>
                  <p className="font-semibold text-sm text-violet-600">Will complete on Nov 17</p>
                </div>
              </div>
            </section>

            {/* Team Workload Distribution */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Team Workload</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Active task distribution</p>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">{teamMembers.length} members</span>
              </div>

              <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
                {teamMembers.map((member) => {
                  const workload = getWorkloadIndicator(member.tasks);
                  return (
                    <div key={member.name} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
                      <div className={`w-10 h-10 rounded-full ${member.color} flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
                        {member.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-semibold text-sm text-slate-900 truncate">{member.name}</p>
                          <span className="text-xs font-medium text-slate-500">{member.tasks} tasks</span>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-xs text-slate-500 truncate">{member.role}</p>
                          <div className="flex items-center gap-1.5">
                            <span className={`w-2 h-2 rounded-full ${workload.bg}`}></span>
                            <span className={`text-xs font-medium ${workload.color}`}>{workload.label}</span>
                          </div>
                        </div>
                        <div className="mt-2 w-full bg-slate-100 rounded-full h-1.5">
                          <div
                            className={`h-1.5 rounded-full transition-all duration-500 ${
                              member.tasks >= 10 ? 'bg-red-500' : member.tasks >= 6 ? 'bg-emerald-500' : 'bg-blue-500'
                            }`}
                            style={{ width: `${Math.min((member.tasks / 12) * 100, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 font-medium">Total Active Tasks</span>
                  <span className="font-bold text-lg text-slate-900">{teamMembers.reduce((sum, m) => sum + m.tasks, 0)}</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                  <span>Avg per member</span>
                  <span className="font-semibold">{(teamMembers.reduce((sum, m) => sum + m.tasks, 0) / teamMembers.length).toFixed(1)}</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
```

## Hakem Skor Dökümü (J1 / J2 / J3)

| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |
|---|---|---|---|---|---|
| Okunabilirlik | 78 | 78 | — | **78** | Ortalama (J1-J2) |
| Performans | 85 | 70 | — | **78** | Ortalama (J1-J2) |
| Güvenlik | 95 | 90 | — | **93** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 30 | 38 | — | **34** | Ortalama (J1-J2) |
| Prompt Uyumu | 98 | 97 | — | **98** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 78/100

**Öneriler:**
- Uzun SVG path verilerini ve sabit veri setlerini (burndownData, teamMembers) ayrı dosyalara veya constants klasörüne taşıyın.
- Grafik çizim kodunu (burndown chart) Dashboard dışına, `BurndownChart` gibi ayrı bir bileşene ayırarak ana bileşenin karmaşıklığını azaltın.
- Split the Dashboard into smaller sub-components (Sidebar, RoadmapTimeline, BurndownChart, TeamWorkload) to improve analyzability and reduce nesting.
- Extract magic numbers into named constants (e.g., TOTAL_STORY_POINTS = 120, MAX_TASKS_PER_MEMBER = 12) and reuse them across yScale, grid lines, and workload progress bars.

### Performans — 78/100

**Öneriler:**
- Statik dizileri (navItems, roadmapMilestones, burndownData, teamMembers) bileşen dışına taşıyarak her render'da yeniden oluşturulmasını engelleyin.
- getStatusColor ve getWorkloadIndicator gibi saf yardımcı fonksiyonları bileşen dışında tanımlayarak gereksiz fonksiyon oluşturulmasını önleyin.
- Statik veri dizilerini ve yardımcı fonksiyonları bileşen dışına (modül seviyesine) taşıyarak her render'da yeniden oluşturulmalarını önleyin.
- idealPath/actualPath gibi pahalı hesaplamaları useMemo ile sararak yalnızca veri değiştiğinde yeniden hesaplanmalarını sağlayın.

### Güvenlik — 93/100

**Öneriler:**
- Eğer gelecekte kullanıcı girdisi (ör. AI rapor metni) render edilecekse, XSS riskine karşı `DOMPurify` ile sanitizasyon eklenmeli.
- Dinamik `style={{ width: ... }}` değerleri türetilirken kullanıcı kaynaklı veri kullanılması gerekiyorsa CSS injection'a karşı oransal hesaplama yapılıp sabit limitler uygulanmalı.
- Gelecekte kullanıcı girdisi veya API verisi işlenecekse, `dangerouslySetInnerHTML` veya `innerHTML` kullanımından kaçınıp DOMPurify ile sanitize edin.
- Kimlik doğrulama eklenecekse token'ları `localStorage` yerine HttpOnly cookie veya güvenli bir state yönetim çözümünde saklayın.

### Sürdürülebilirlik — 34/100

**Öneriler:**
- Dashboard'ı en az Sidebar, RoadmapTimeline, BurndownChart ve TeamWorkload bileşenlerine ayırın.
- Grafik hesaplamaları ve veri dönüşümleri için custom hook (örn. useBurndownChart) oluşturun; sabit verileri constants.ts'e taşıyın.
- Sidebar, Header, RoadmapTimeline, BurndownChart, TeamWorkload, TeamMemberCard gibi alt bileşenlere ayırın; her bölüm kendi dosyasında olsun ve prop ile veri alsın.
- navItems, roadmapMilestones, burndownData, teamMembers verilerini src/data/ altında sabit dosyalara, status gibi magic string'leri ise src/constants.ts içinde enum/enum-like objelere taşıyın.

### Prompt Uyumu — 98/100

- Programatik: 100/100 · Semantik: 95/100
- İhlaller: yok

**Öneriler:**
- Grafik eksenlerine daha belirgin etiketler eklenerek okunabilirlik artırılabilir.
- Sidebar menü öğelerinin tıklanmasıyla ana içerikte değişiklik sağlanarak daha tam bir kullanıcı deneyimi sunulabilir.
- Prompt'taki 'placeholder' ifadesi ile sistem kısıtı çelişiyor; bu durumu açıklığa kavuşturmak için roadmap timeline'ı ile burndown chart'ın görsel hiyerarşisini daha belirgin ayıran bir section başlığı eklenebilir.
- Team workload widget'ında toplam görev dağılımını özetleyen küçük bir pasta/bar grafik eklenerek 'distribution' vurgusu daha güçlü yansıtılabilir.


---

# Loomina Analiz Raporu — Gemini 3.5 Flash

- **Model:** `google/gemini-3.5-flash`
- **Tarih:** 02.06.2026 15:29:10
- **Üretim Süresi:** 45206 ms
- **Genel Skor:** 76/100
- **Karar Yöntemi:** Konsensüs (iki hakem ortalaması)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3
- **J3 (Tahkimci) çağrılan metrikler:** Yok — iki hakem tüm metriklerde uzlaştı.

## Kullanıcı Promptu

Build a detailed sprint performance dashboard. It needs a collapsible side navigation. The main workspace should include a top section for an AI-supported roadmap timeline, a placeholder for a sprint burndown chart, and a team workload distribution widget showing avatars and active task counts. Provide the complete code using React and Tailwind CSS. Do not write any explanations, output only the code.

## Üretilen Kod

```html
import React, { useState } from 'react';

// --- Inline SVG Icons for zero external dependency installation issues ---
const Icons = {
  Dashboard: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" />
    </svg>
  ),
  Timeline: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  Burndown: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  Team: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Settings: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Sparkles: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  ChevronLeft: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  ),
  ChevronRight: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  ),
  Notification: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
  Search: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  Info: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
};

export default function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [aiAnalysisRunning, setAiAnalysisRunning] = useState(false);
  const [aiInsight, setAiInsight] = useState(
    "Sprint 14 velocity is projected to increase by 12% based on historical backend optimization cycles. Recommend pulling forward Card #3."
  );

  // Sample data for AI-supported Roadmap Timeline
  const roadmapItems = [
    {
      id: 1,
      phase: "Sprint 13 (Current)",
      title: "Core API Optimization",
      status: "In Progress",
      progress: 68,
      aiConfidence: "94%",
      color: "from-blue-500 to-indigo-600",
      badge: "On Track"
    },
    {
      id: 2,
      phase: "Sprint 14",
      title: "AI-Powered Smart Triage",
      status: "AI Predicted",
      progress: 15,
      aiConfidence: "88%",
      color: "from-purple-500 to-pink-600",
      badge: "Capacity Optimized"
    },
    {
      id: 3,
      phase: "Sprint 15",
      title: "Real-time Metrics Pipeline",
      status: "Scheduled",
      progress: 0,
      aiConfidence: "82%",
      color: "from-emerald-500 to-teal-600",
      badge: "Low Risk"
    },
    {
      id: 4,
      phase: "Sprint 16",
      title: "Multi-tenant Access Control",
      status: "Proposed",
      progress: 0,
      aiConfidence: "71%",
      color: "from-amber-500 to-orange-600",
      badge: "Needs Review"
    }
  ];

  // Sample data for Team Workload Distribution
  const teamWorkload = [
    {
      name: "Sarah Jenkins",
      role: "Lead Backend Engineer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      tasks: 8,
      completed: 5,
      capacity: 85,
      status: "Optimal"
    },
    {
      name: "Marcus Chen",
      role: "Senior Frontend Architect",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      tasks: 11,
      completed: 4,
      capacity: 105,
      status: "Overloaded"
    },
    {
      name: "Elena Rostova",
      role: "Full Stack Developer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      tasks: 6,
      completed: 4,
      capacity: 60,
      status: "Under Capacity"
    },
    {
      name: "David Kalu",
      role: "DevOps Specialist",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      tasks: 5,
      completed: 3,
      capacity: 75,
      status: "Optimal"
    }
  ];

  const triggerAiAnalysis = () => {
    setAiAnalysisRunning(true);
    setTimeout(() => {
      setAiAnalysisRunning(false);
      setAiInsight("AI analysis complete: Team velocity is stabilizing. Marcus's overload can be mitigated by offloading 'Task-402' to Elena with 0% impact on Sprint deadline.");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex font-sans antialiased selection:bg-indigo-500 selection:text-white">
      
      {/* COLLAPSIBLE SIDE NAVIGATION */}
      <aside 
        className={`bg-slate-900 border-r border-slate-800 flex flex-col justify-between transition-all duration-300 ease-in-out ${
          isSidebarCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        <div>
          {/* Logo Section */}
          <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="p-2 bg-indigo-600 rounded-lg text-white shrink-0 shadow-lg shadow-indigo-500/30">
                <Icons.Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              {!isSidebarCollapsed && (
                <span className="font-bold text-lg bg-gradient-to-r from-white via-slate-200 to-indigo-400 bg-clip-text text-transparent whitespace-nowrap">
                  AetherOS
                </span>
              )}
            </div>
            <button 
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              {isSidebarCollapsed ? <Icons.ChevronRight /> : <Icons.ChevronLeft />}
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1">
            {[
              { name: 'Dashboard', icon: Icons.Dashboard },
              { name: 'Timeline', icon: Icons.Timeline },
              { name: 'Burndown', icon: Icons.Burndown },
              { name: 'Team', icon: Icons.Team },
              { name: 'Settings', icon: Icons.Settings },
            ].map((item) => {
              const IconComponent = item.icon;
              const isActive = activeTab === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.name)}
                  className={`w-full flex items-center gap-4 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-indigo-600/15 text-indigo-400 border-l-4 border-indigo-500 pl-2' 
                      : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                  }`}
                >
                  <span className={`${isActive ? 'text-indigo-400' : 'text-slate-400'}`}>
                    <IconComponent />
                  </span>
                  {!isSidebarCollapsed && <span className="truncate">{item.name}</span>}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-slate-800">
          <div className="flex items-center gap-3 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" 
              alt="User" 
              className="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-500/30"
            />
            {!isSidebarCollapsed && (
              <div className="truncate">
                <p className="text-sm font-semibold text-slate-200">Alex Rivers</p>
                <p className="text-xs text-slate-500">Product Owner</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* MAIN WORKSPACE */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* TOP HEADER */}
        <header className="h-16 border-b border-slate-800 px-8 flex items-center justify-between bg-slate-900/40 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-4 w-1/3">
            <div className="relative w-full max-w-xs">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500">
                <Icons.Search />
              </span>
              <input 
                type="text" 
                placeholder="Search metrics, tasks, members..." 
                className="w-full pl-10 pr-4 py-1.5 bg-slate-800/50 border border-slate-700/60 rounded-lg text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* AI Status Indicator */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs text-indigo-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>AI Engine Active v2.4</span>
            </div>

            {/* Notification Bell */}
            <button className="relative p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
              <Icons.Notification />
              <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-slate-900"></span>
            </button>

            <div className="h-8 w-px bg-slate-800"></div>

            {/* Sprint Info Dropdown */}
            <div className="text-right">
              <p className="text-xs text-slate-500 font-medium">CURRENT SPRINT</p>
              <p className="text-sm font-bold text-slate-200">Sprint 13 (Aether-Tech)</p>
            </div>
          </div>
        </header>

        {/* CONTAINER WORKSPACE */}
        <div className="p-8 space-y-8 max-w-[1600px] w-full mx-auto">
          
          {/* TOP SECTION: AI-SUPPORTED ROADMAP TIMELINE */}
          <section className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 shadow-xl relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-10 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <Icons.Sparkles className="w-5 h-5 text-indigo-400" />
                  <h2 className="text-lg font-bold text-slate-100 tracking-tight">AI-Supported Roadmap Timeline</h2>
                </div>
                <p className="text-sm text-slate-400">Predictive timeline based on real-time developer metrics & capacity forecasting.</p>
              </div>
              <button 
                onClick={triggerAiAnalysis}
                disabled={aiAnalysisRunning}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 active:scale-95 disabled:scale-100 disabled:opacity-50 text-white text-sm font-semibold rounded-lg shadow-lg shadow-indigo-500/25 transition-all"
              >
                <Icons.Sparkles className={`w-4 h-4 ${aiAnalysisRunning ? 'animate-spin' : ''}`} />
                {aiAnalysisRunning ? 'Analyzing...' : 'Recalculate AI Forecast'}
              </button>
            </div>

            {/* Timeline Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
              {roadmapItems.map((item, idx) => (
                <div 
                  key={item.id}
                  className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-5 hover:border-slate-600/60 transition-all duration-300 flex flex-col justify-between relative group"
                >
                  {/* Subtle connection line for visual timeline flow */}
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-[2px] bg-slate-800 z-10 group-hover:bg-indigo-500/30 transition-colors"></div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">{item.phase}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold border ${
                        item.status === 'In Progress' ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300' :
                        item.status === 'AI Predicted' ? 'bg-purple-500/10 border-purple-500/30 text-purple-300 animate-pulse' :
                        'bg-slate-800 border-slate-700 text-slate-400'
                      }`}>
                        {item.status}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-200 group-hover:text-white transition-colors line-clamp-1 mb-2">
                      {item.title}
                    </h3>

                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>Sprint Progress</span>
                        <span>{item.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${item.color} transition-all duration-500`}
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 text-slate-400">
                      <span>AI Confidence:</span>
                      <span className="font-semibold text-indigo-400">{item.aiConfidence}</span>
                    </div>
                    <span className="text-[11px] font-medium text-slate-500 bg-slate-800/80 px-2 py-1 rounded">
                      {item.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Real-time AI Insight Bar */}
            <div className="mt-6 bg-indigo-950/40 border border-indigo-900/40 rounded-xl p-4 flex items-start gap-3">
              <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400 shrink-0">
                <Icons.Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">AI Copilot Recommendation</span>
                <p className="text-sm text-slate-300 leading-relaxed">{aiInsight}</p>
              </div>
            </div>
          </section>

          {/* SPLIT WIDGETS SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* SPRINT BURNDOWN CHART (7 Columns) */}
            <section className="lg:col-span-7 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <Icons.Burndown />
                      <h2 className="text-lg font-bold text-slate-100">Sprint Burndown Chart</h2>
                    </div>
                    <p className="text-sm text-slate-400">Visualizing ideal vs. actual task burn rate.</p>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-0.5 bg-dashed border-t-2 border-slate-500 inline-block"></span>
                      <span className="text-slate-400">Ideal Burn</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-1 bg-indigo-500 inline-block rounded"></span>
                      <span className="text-slate-200 font-medium">Actual Burn</span>
                    </div>
                  </div>
                </div>

                {/* SVG-based highly polished Burndown Chart */}
                <div className="relative w-full h-64 bg-slate-950/40 border border-slate-800/50 rounded-xl p-4 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                    {/* Grid Lines */}
                    <line x1="0" y1="40" x2="500" y2="40" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="0" y1="80" x2="500" y2="80" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="0" y1="120" x2="500" y2="120" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="0" y1="160" x2="500" y2="160" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />

                    {/* Ideal Line (Dashed) */}
                    <line x1="10" y1="20" x2="490" y2="180" stroke="#64748b" strokeWidth="2" strokeDasharray="6 6" />

                    {/* Actual Burn Gradient Fill */}
                    <path
                      d="M 10 20 
                         L 80 35 
                         L 150 75 
                         L 220 82 
                         L 290 120 
                         L 360 145 
                         L 430 152 
                         L 490 180 
                         L 490 200 
                         L 10 200 Z"
                      fill="url(#burndown-grad)"
                      opacity="0.15"
                    />

                    {/* Actual Burn Line */}
                    <path
                      d="M 10 20 
                         C 80 30, 120 60, 150 75 
                         S 200 75, 220 82 
                         S 270 120, 290 120 
                         S 340 145, 360 145 
                         S 410 150, 430 152 
                         S 470 175, 490 180"
                      fill="none"
                      stroke="#6366f1"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />

                    {/* Interactive Node Indicators */}
                    <circle cx="150" cy="75" r="5" fill="#818cf8" stroke="#1e1b4b" strokeWidth="2" />
                    <circle cx="290" cy="120" r="5" fill="#818cf8" stroke="#1e1b4b" strokeWidth="2" />
                    <circle cx="430" cy="152" r="5" fill="#818cf8" stroke="#1e1b4b" strokeWidth="2" />

                    {/* Gradients */}
                    <defs>
                      <linearGradient id="burndown-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Absolute Chart Overlay Details */}
                  <div className="absolute top-4 left-6 bg-slate-900/90 border border-slate-800/80 rounded-lg px-2.5 py-1 text-[11px] text-slate-300 flex items-center gap-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    <span>Day 6: 12 SP ahead of schedule</span>
                  </div>
                </div>
              </div>

              {/* Chart Legend / Footer Metrics */}
              <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-slate-800/60 text-center">
                <div>
                  <p className="text-xs text-slate-500">Total Scope</p>
                  <p className="text-base font-bold text-slate-200">120 Story Points</p>
                </div>
                <div className="border-x border-slate-800/80">
                  <p className="text-xs text-slate-500">Remaining Tasks</p>
                  <p className="text-base font-bold text-indigo-400">34 Story Points</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Days Remaining</p>
                  <p className="text-base font-bold text-slate-200">4 Days</p>
                </div>
              </div>
            </section>

            {/* TEAM WORKLOAD DISTRIBUTION (5 Columns) */}
            <section className="lg:col-span-5 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <Icons.Team />
                      <h2 className="text-lg font-bold text-slate-100">Team Workload</h2>
                    </div>
                    <p className="text-sm text-slate-400">Current allocation & capacity index.</p>
                  </div>
                  <span className="text-xs text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full font-medium">
                    Active Sprint
                  </span>
                </div>

                {/* Team Grid Stack */}
                <div className="space-y-4">
                  {teamWorkload.map((member) => (
                    <div 
                      key={member.name}
                      className="p-3 bg-slate-850/40 border border-slate-800/50 rounded-xl hover:bg-slate-800/30 transition-all flex items-center justify-between gap-4"
                    >
                      {/* Avatar & Name details */}
                      <div className="flex items-center gap-3 min-w-0">
                        <img 
                          src={member.avatar} 
                          alt={member.name} 
                          className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-800"
                        />
                        <div className="min-w-0">
                          <h4 className="text-sm font-bold text-slate-200 truncate">{member.name}</h4>
                          <p className="text-xs text-slate-500 truncate">{member.role}</p>
                        </div>
                      </div>

                      {/* Capacity and Progress Bar */}
                      <div className="w-32 hidden sm:block">
                        <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                          <span>Capacity</span>
                          <span className={member.capacity > 100 ? 'text-rose-400 font-bold' : 'text-slate-300'}>
                            {member.capacity}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all duration-500 ${
                              member.status === 'Overloaded' ? 'bg-rose-500' :
                              member.status === 'Under Capacity' ? 'bg-amber-500' :
                              'bg-indigo-500'
                            }`}
                            style={{ width: `${Math.min(member.capacity, 100)}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Status / Task Count */}
                      <div className="text-right shrink-0">
                        <p className="text-sm font-bold text-slate-200">{member.completed}/{member.tasks} Tasks</p>
                        <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                          member.status === 'Overloaded' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' :
                          member.status === 'Under Capacity' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                          'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        }`}>
                          {member.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workload insights warning panel */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Icons.Info />
                  1 team member is currently overloaded
                </span>
                <button className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">
                  Rebalance Smartly →
                </button>
              </div>
            </section>

          </div>

        </div>
      </main>
    </div>
  );
}
```

## Hakem Skor Dökümü (J1 / J2 / J3)

| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |
|---|---|---|---|---|---|
| Okunabilirlik | 82 | 72 | — | **77** | Ortalama (J1-J2) |
| Performans | 85 | 70 | — | **78** | Ortalama (J1-J2) |
| Güvenlik | 95 | 88 | — | **92** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 38 | 38 | — | **38** | Ortalama (J1-J2) |
| Prompt Uyumu | 97 | 97 | — | **97** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 77/100

**Öneriler:**
- SVG path tanımları 120 karakteri aşıyor ve okunmasını zorlaştırıyor; bunları kod biçimlendirme araçları (Prettier) ile otomatik olarak kısaltın.
- Team workload ve roadmap gibi büyük veri bloklarını ayrı sabit dosyalara veya yardımcı işlevlere taşıyarak ana bileşeni kısaltın.
- App bileşenini Sidebar, Header, RoadmapTimeline, BurndownChart ve TeamWorkload gibi alt bileşenlere bölerek dosyayı 150 satır altına indirin ve her birinin sorumluluğunu netleştirin.
- 'bg-slate-850' gibi geçersiz Tailwind sınıflarını düzeltin; ayrıca status renklerini (Overloaded/Under Capacity/Optimal) erken-return veya bir yardımcı fonksiyonla tek noktadan yönetin.

### Performans — 78/100

**Öneriler:**
- triggerAiAnalysis içindeki setTimeout için cleanup mekanizması ekleyin; bileşen unmount olursa state güncellemesini engelleyin.
- Mevcut veri seti küçük olduğu için memoization gereksiz, ancak ileride büyük veri veya karmaşık hesaplamalar eklenirse useMemo/useCallback düşünülebilir.
- `triggerAiAnalysis` içindeki `setTimeout` için `useRef` ile id saklanıp `useEffect` cleanup'ında `clearTimeout` çağrılmalı; bu hem hafıza sızıntısını hem unmount sonrası state update'i önler.
- Statik veri dizileri (`roadmapItems`, `teamWorkload`, navigasyon listesi) bileşen dışında modül seviyesinde tanımlanarak her render'da yeniden oluşturulması engellenebilir; ayrıca avatar görselleri için `loading="lazy"` eklenmeli.

### Güvenlik — 92/100

**Öneriler:**
- Kullanıcıdan veri alan bir arama kutusu olmasına rağmen bir işlem yapılmadığı için şu an risk yok; ileride bu girdi sunucuya gönderilirse input doğrulama eklenmelidir.
- Eğer projeye kimlik doğrulama eklenirse, token yönetimi için `localStorage` yerine güvenli cookie yöntemleri tercih edilmelidir.
- Search input için en azından XSS'e yol açmayacak şekilde (örn. max-length ve karakter filtreleme) temel client-side doğrulama ekleyin.
- Harici kaynaklardan gelen avatar/resimler için URL doğrulaması veya Content Security Policy (CSP) meta etiketi tanımlayarak yalnızca güvenilir kaynaklara izin verin.

### Sürdürülebilirlik — 38/100

**Öneriler:**
- Dashboard'ı Sidebar, Header, RoadmapTimeline, BurndownChart, TeamWorkload gibi bağımsız bileşenlere ayırarak SRP sağlayın ve her bileşeni kendi dosyasına taşıyın.
- Veri, sabit metinler ve durum değerleri için constants.ts/constants.js gibi paylaşılan dosyalar oluşturun; AI tahmini ve durum yönetimi için özel hook'lar (useAiAnalysis vb.) yazın.
- Sidebar, Header, RoadmapTimeline, BurndownChart, TeamWorkloadCard gibi alt bileşenleri ayrı dosyalara çıkararak SRP'yi uygulayın ve her birini bağımsız olarak test edilebilir hale getirin.
- roadmapItems, teamWorkload verisini ve status/role enum'larını ayrı bir constants.ts dosyasına taşıyın; AI insight ve tetikleme mantığını özel bir useAiAnalysis hook'unda izole edin.

### Prompt Uyumu — 97/100

- Programatik: 100/100 · Semantik: 92/100
- İhlaller: yok

**Öneriler:**
- Burndown chart kısmını prompt'ta belirtildiği gibi bir placeholder (örneğin, basit bir metin veya gri bir kutu) ile değiştirin, ya da tam chart sunmak yerine yer tutucu bir bileşen kullanın.
- Yan menüdeki sekme isimleri (Dashboard, Timeline, Burndown, Team) ile üst kısımdaki AI analiz butonu arasındaki etkileşim iyileştirilebilir; örneğin 'Burndown' tıklandığında burndown chart bölümüne scroll yapılabilir.
- Prompt'ta 'placeholder for a sprint burndown chart' denilmiş; kullanıcı niyeti literal bir placeholder olmasa da açıkça chart alanını etiketleyen bir başlık/border ile 'Burndown' widget'ını daha net şekilde ayırın.
- Team workload widget'ında sürat limiti veya toplam task sayısı gibi ek KPI'lar ekleyerek 'detailed' (ayrıntılı) dashboard gereksinimini daha güçlü karşılayın.
