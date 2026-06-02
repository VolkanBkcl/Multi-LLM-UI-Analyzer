# Loomina — Model Karşılaştırma Raporu

- **Tarih:** 02.06.2026 13:53:36
- **Karşılaştırılan Model Sayısı:** 3

## Kullanıcı Promptu

Build a comprehensive student dashboard interface. The layout requires a top navigation bar with a user profile dropdown. The main content area should display a streak/gamification progress widget, a grid of 3 active courses with progress bars, and a sidebar for upcoming assignment deadlines. Provide the complete code using React and Tailwind CSS. Do not write any explanations, output only the code.

## Karşılaştırma Tablosu

| Model | Genel | Okunabilirlik | Performans | Güvenlik | Sürdürülebilirlik | Prompt Uyumu |
|---|---|---|---|---|---|---|
| DeepSeek V4 Pro | 75 | 84 | 64 | 90 | 38 | 99 |
| Qwen3.6 Plus | 79 | 89 | 76 | 96 | 35 | 99 |
| Gemini 3.5 Flash | 77 | 75 | 78 | 94 | 39 | 99 |

---

# Loomina Analiz Raporu — DeepSeek V4 Pro

- **Model:** `deepseek/deepseek-v4-pro`
- **Tarih:** 02.06.2026 13:53:36
- **Üretim Süresi:** 72041 ms
- **Genel Skor:** 75/100
- **Karar Yöntemi:** Konsensüs (iki hakem ortalaması)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3
- **J3 (Tahkimci) çağrılan metrikler:** Yok — iki hakem tüm metriklerde uzlaştı.

## Kullanıcı Promptu

Build a comprehensive student dashboard interface. The layout requires a top navigation bar with a user profile dropdown. The main content area should display a streak/gamification progress widget, a grid of 3 active courses with progress bars, and a sidebar for upcoming assignment deadlines. Provide the complete code using React and Tailwind CSS. Do not write any explanations, output only the code.

## Üretilen Kod

```html
import React, { useState, useRef, useEffect } from 'react';

const Dashboard = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Sample data
  const user = {
    name: 'Alex Johnson',
    email: 'alex.j@edu.com',
    avatar: 'https://i.pravatar.cc/150?img=68',
  };

  const streak = {
    current: 15,
    longest: 42,
    max: 30, // max for the progress circle
  };

  const courses = [
    {
      id: 1,
      title: 'Advanced React Patterns',
      instructor: 'Sarah Chen',
      progress: 68,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop',
      color: 'from-blue-600 to-blue-400',
    },
    {
      id: 2,
      title: 'Machine Learning Fundamentals',
      instructor: 'Dr. James Wilson',
      progress: 45,
      image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=400&h=200&fit=crop',
      color: 'from-purple-600 to-purple-400',
    },
    {
      id: 3,
      title: 'UI/UX Design Principles',
      instructor: 'Elena Rodriguez',
      progress: 92,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop',
      color: 'from-emerald-600 to-emerald-400',
    },
  ];

  const assignments = [
    { id: 1, title: 'React Hooks Lab', course: 'Advanced React', due: '2025-03-28', urgent: true },
    { id: 2, title: 'Neural Network Project', course: 'ML Fundamentals', due: '2025-03-30', urgent: true },
    { id: 3, title: 'User Research Report', course: 'UI/UX Design', due: '2025-04-02', urgent: false },
    { id: 4, title: 'Redux Toolkit Quiz', course: 'Advanced React', due: '2025-04-05', urgent: false },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Circular progress calculation
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progress = streak.current / streak.max;
  const offset = circumference - progress * circumference;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo / App Name */}
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                LearnHub
              </span>
            </div>

            {/* Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1 transition-colors hover:bg-gray-100"
              >
                <img
                  src={user.avatar}
                  alt="Profile"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="hidden sm:block text-sm font-medium text-gray-700">
                  {user.name}
                </span>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform ${profileOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 animate-appear">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="font-medium text-gray-800">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    View Profile
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Settings
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Achievements
                  </a>
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                      Sign out
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="flex-1 space-y-8">
            {/* Streak / Gamification Progress Widget */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center space-x-6">
                  {/* Circular Progress */}
                  <div className="relative w-28 h-28">
                    <svg className="transform -rotate-90 w-28 h-28">
                      <circle
                        cx="56"
                        cy="56"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-gray-200"
                      />
                      <circle
                        cx="56"
                        cy="56"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        className="text-amber-500 transition-all duration-1000 ease-out"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold text-gray-800">{streak.current}</span>
                      <span className="text-xs text-gray-500">Day Streak</span>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Learning Streak</h2>
                    <p className="text-gray-600 mt-1">You're on fire! 🔥</p>
                    <div className="mt-4 flex space-x-6">
                      <div>
                        <p className="text-sm text-gray-500">Longest</p>
                        <p className="text-lg font-semibold text-amber-600">{streak.longest} days</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Next Milestone</p>
                        <p className="text-lg font-semibold text-emerald-600">30 days</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Streak Flame Icon */}
                <div className="hidden sm:block bg-amber-50 rounded-full p-4">
                  <svg className="w-12 h-12 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2C12,2,8,8,8,13A4,4,0,0,0,16,13c0-5-4-11-4-11Zm0,16a3,3,0,0,1-3-3,5,5,0,0,1,3-5,5,5,0,0,1,3,5A3,3,0,0,1,12,18Z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Active Courses Grid */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Active Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
                  >
                    {/* Course Image */}
                    <div className="relative h-40">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <div className="absolute bottom-3 left-3 text-white font-semibold truncate pr-2">
                        {course.instructor}
                      </div>
                    </div>

                    {/* Course Info */}
                    <div className="p-5">
                      <h3 className="font-bold text-gray-800 text-lg truncate">{course.title}</h3>
                      <div className="mt-3 flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${course.color}`}
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-600">{course.progress}%</span>
                      </div>
                      <button className="mt-4 w-full py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium">
                        Continue Learning
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Upcoming Assignments */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-gray-800">Upcoming Deadlines</h2>
                <span className="text-sm text-blue-600 hover:underline cursor-pointer">View all</span>
              </div>
              <div className="space-y-4">
                {assignments.map((assignment) => (
                  <div
                    key={assignment.id}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className={`mt-0.5 w-2 h-2 rounded-full flex-shrink-0 ${assignment.urgent ? 'bg-red-500' : 'bg-amber-500'}`} />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-800 truncate">{assignment.title}</p>
                      <p className="text-sm text-gray-500">{assignment.course}</p>
                      <p className="text-xs mt-1 text-gray-400">
                        Due: {new Date(assignment.due).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </p>
                    </div>
                    {assignment.urgent && (
                      <span className="text-xs font-medium px-2 py-0.5 bg-red-100 text-red-600 rounded-full whitespace-nowrap">
                        Tomorrow
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  4 tasks this week
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple appear animation style */}
      <style jsx>{`
        @keyframes appear {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-appear {
          animation: appear 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
```

## Hakem Skor Dökümü (J1 / J2 / J3)

| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |
|---|---|---|---|---|---|
| Okunabilirlik | 85 | 82 | — | **84** | Ortalama (J1-J2) |
| Performans | 55 | 72 | — | **64** | Ortalama (J1-J2) |
| Güvenlik | 95 | 85 | — | **90** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 40 | 35 | — | **38** | Ortalama (J1-J2) |
| Prompt Uyumu | 99 | 98 | — | **99** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 84/100

**Öneriler:**
- Dashboard bileşeni çok uzun; Navbar, Streak Widget, Course Card ve Sidebar gibi alt bileşenlere bölünerek okunabilirlik artırılabilir.
- Gereksiz yorum satırları (örn. '// Sample data') kaldırılarak kodun temizliği sağlanabilir.
- The 'Tomorrow' badge in the assignment sidebar is hardcoded text but driven by a dynamic `urgent` boolean — either compute the label from the actual `due` date or rename the prop so the intent is clear.
- Extract the inline `<style jsx>` appear animation into a Tailwind keyframes config or a separate CSS file to keep styling consistent and avoid mixing paradigms.

### Performans — 64/100

**Öneriler:**
- Render içinde `new Date()` kullanımı, ilgili `assignment` listesini bileşen dışında `useMemo` ile hesaplayarak veya `due` değerini önceden biçimlendirerek engellenmeli.
- SVG `strokeDasharray` ve `strokeDashoffset` hesaplamaları, pahalı render hesaplamaları olduğu için `useMemo` içine alınmalı.
- user, streak, courses ve assignments gibi statik veriler bileşen dışında (modül seviyesinde) tanımlanarak her render'da yeniden oluşturulmaları engellenmelidir.
- new Date(assignment.due) ve tarih formatlama işlemleri useMemo ile sarılmalı veya formatlanmış tarih verisi önceden statik olarak hazırlanmalıdır.

### Güvenlik — 90/100

**Öneriler:**
- Dış kaynaklı resim ve linkler için rel='noopener noreferrer' eklenmeli, anchor etiketlerine target='_blank' durumunda güvenlik önlemi alınmalıdır.
- API istekleri veya kullanıcı girdisi olmadığı için şu an riskli değil, ancak ileride form eklenirse input doğrulama ve DOMPurify gibi sanitizasyon kütüphanesi entegre edilmelidir.
- Add `referrerPolicy='no-referrer'` and `loading='lazy'` on `<img>` tags, or wrap external images through a proxy/CDN to prevent third-party tracking and SSRF-adjacent risks.
- Add `rel='noopener noreferrer'` to anchor tags if they are ever wired to real URLs, and consider sanitizing any future user-supplied data with a library like DOMPurify before rendering.

### Sürdürülebilirlik — 38/100

**Öneriler:**
- Büyük Dashboard bileşenini StreakWidget, CourseCard, AssignmentItem, ProfileDropdown gibi daha küçük, bağımsız bileşenlere ayırın. Böylece her biri tek sorumluluk taşır ve test edilmesi kolaylaşır.
- Verileri (kullanıcı, kurslar, ödevler) ayrı bir constants.js dosyasına veya prop olarak dışarıdan alınacak şekilde taşıyın, böylece veri kaynağı değiştiğinde sadece o dosyayı güncellemek yeterli olur.
- Refactor by extracting sub-components (Navbar, ProfileDropdown, StreakWidget, CourseCard, AssignmentItem, Sidebar) and move data into a separate `constants.ts` or API layer to enforce SRP and enable reuse.
- Create a `useClickOutside` custom hook and a `formatDueDate` utility (replacing the hardcoded 'Tomorrow' label) to improve modifiability, testability, and remove magic strings.

### Prompt Uyumu — 99/100

- Programatik: 100/100 · Semantik: 98/100
- İhlaller: yok

**Öneriler:**
- Streak widget'ında uzun süredir devamsızlık ya da tamamlanan günleri görselleştiren küçük indikatörler eklenerek gamification hissi kuvvetlendirilebilir.
- Sidebar'daki 'Tomorrow' etiketi dinamik tarih karşılaştırması ile üretilebilir; şu an manuel olarak atanmış durumda, bu da ihlal sayılmaz ancak production-ready yaklaşımı iyileştirir.
- `<style jsx>` bloğu styled-jsx eklentisi gerektirir; animasyonu doğrudan Tailwind'in `transition`/`animate-*` utility'leri veya `keyframes` ile global stil olarak taşımak daha taşınabilir olur.
- Dropdown'da 'View Profile/Settings/Achievements' bağlantıları şu anda `<a href="#">` olarak boş; fonksiyonel bir dashboard için bunları yönlendirme veya callback prop'larına bağlamak istenir.


---

# Loomina Analiz Raporu — Qwen3.6 Plus

- **Model:** `qwen/qwen3.6-plus`
- **Tarih:** 02.06.2026 13:53:36
- **Üretim Süresi:** 100967 ms
- **Genel Skor:** 79/100
- **Karar Yöntemi:** Tahkim (J3)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3, x-ai/grok-4.3
- **J3 (Tahkimci) çağrılan metrikler:** Sürdürülebilirlik

## Kullanıcı Promptu

Build a comprehensive student dashboard interface. The layout requires a top navigation bar with a user profile dropdown. The main content area should display a streak/gamification progress widget, a grid of 3 active courses with progress bars, and a sidebar for upcoming assignment deadlines. Provide the complete code using React and Tailwind CSS. Do not write any explanations, output only the code.

## Üretilen Kod

```html
import React, { useState, useEffect, useRef } from 'react';
import { 
  Bell, 
  ChevronDown, 
  BookOpen, 
  Trophy, 
  Calendar, 
  Clock, 
  MoreVertical, 
  Star, 
  TrendingUp,
  User,
  Settings,
  LogOut,
  CheckCircle2,
  AlertCircle,
  Flame
} from 'lucide-react';

const StudentDashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const user = {
    name: 'Alex Johnson',
    email: 'alex.johnson@university.edu',
    avatar: 'AJ',
    level: 12
  };

  const streakData = {
    current: 14,
    longest: 21,
    xp: 2450,
    xpToNext: 3000,
    rank: 'Gold',
    badges: [
      { name: 'Early Bird', icon: '🌅', earned: true },
      { name: 'Quiz Master', icon: '🧠', earned: true },
      { name: 'Night Owl', icon: '🦉', earned: false },
      { name: 'Perfect Score', icon: '💯', earned: true }
    ]
  };

  const courses = [
    {
      id: 1,
      title: 'Advanced Machine Learning',
      instructor: 'Dr. Sarah Chen',
      progress: 78,
      totalModules: 12,
      completedModules: 9,
      nextLesson: 'Neural Network Optimization',
      color: 'bg-indigo-500',
      lightColor: 'bg-indigo-100',
      textColor: 'text-indigo-700',
      grade: 'A-'
    },
    {
      id: 2,
      title: 'Full-Stack Web Development',
      instructor: 'Prof. Michael Torres',
      progress: 45,
      totalModules: 16,
      completedModules: 7,
      nextLesson: 'State Management with Redux',
      color: 'bg-emerald-500',
      lightColor: 'bg-emerald-100',
      textColor: 'text-emerald-700',
      grade: 'A'
    },
    {
      id: 3,
      title: 'Data Structures & Algorithms',
      instructor: 'Dr. Emily Watson',
      progress: 92,
      totalModules: 10,
      completedModules: 9,
      nextLesson: 'Graph Traversal Algorithms',
      color: 'bg-violet-500',
      lightColor: 'bg-violet-100',
      textColor: 'text-violet-700',
      grade: 'A+'
    }
  ];

  const assignments = [
    {
      id: 1,
      title: 'ML Final Project Proposal',
      course: 'Advanced Machine Learning',
      dueDate: 'Tomorrow',
      dueTime: '11:59 PM',
      priority: 'high',
      status: 'in-progress'
    },
    {
      id: 2,
      title: 'React Portfolio Website',
      course: 'Full-Stack Web Development',
      dueDate: 'In 3 days',
      dueTime: '5:00 PM',
      priority: 'medium',
      status: 'not-started'
    },
    {
      id: 3,
      title: 'Binary Search Tree Implementation',
      course: 'Data Structures & Algorithms',
      dueDate: 'In 5 days',
      dueTime: '11:59 PM',
      priority: 'medium',
      status: 'not-started'
    },
    {
      id: 4,
      title: 'Midterm Exam Review',
      course: 'Advanced Machine Learning',
      dueDate: 'In 1 week',
      dueTime: '10:00 AM',
      priority: 'low',
      status: 'not-started'
    },
    {
      id: 5,
      title: 'Database Schema Design',
      course: 'Full-Stack Web Development',
      dueDate: 'In 2 weeks',
      dueTime: '11:59 PM',
      priority: 'low',
      status: 'not-started'
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'low': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'in-progress': return <Clock className="w-4 h-4 text-amber-500" />;
      case 'completed': return <CheckCircle2 className="w-4 h-4 text-emerald-500" />;
      default: return <AlertCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  const xpPercentage = Math.min((streakData.xp / streakData.xpToNext) * 100, 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                EduTrack
              </span>
            </div>

            {/* Center Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {['Dashboard', 'Courses', 'Assignments', 'Grades'].map((item, index) => (
                <button
                  key={item}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    index === 0 
                      ? 'bg-indigo-50 text-indigo-700' 
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Notifications */}
              <button className="relative p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
              </button>

              {/* User Profile Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-100 transition-all duration-200"
                >
                  <div className="w-9 h-9 bg-gradient-to-br from-indigo-400 to-violet-500 rounded-lg flex items-center justify-center text-white font-semibold text-sm shadow-md shadow-indigo-500/20">
                    {user.avatar}
                  </div>
                  <div className="hidden sm:block text-left">
                    <p className="text-sm font-semibold text-slate-800 leading-tight">{user.name}</p>
                    <p className="text-xs text-slate-500">Level {user.level}</p>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-200/80 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-4 py-3 border-b border-slate-100">
                      <p className="text-sm font-semibold text-slate-900">{user.name}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{user.email}</p>
                    </div>
                    <div className="py-2">
                      <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                        <User className="w-4 h-4 text-slate-400" />
                        <span>My Profile</span>
                      </button>
                      <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                        <Settings className="w-4 h-4 text-slate-400" />
                        <span>Settings</span>
                      </button>
                    </div>
                    <div className="border-t border-slate-100 py-2">
                      <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors">
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Welcome back, Alex! 👋</h1>
          <p className="text-slate-500 mt-1">You're making great progress. Keep up the momentum!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Streak / Gamification Widget */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Flame className="w-6 h-6" />
                        <span className="text-3xl font-bold">{streakData.current} Day Streak!</span>
                      </div>
                      <p className="text-white/80 text-sm">Longest streak: {streakData.longest} days • Rank: {streakData.rank}</p>
                    </div>
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Trophy className="w-8 h-8" />
                    </div>
                  </div>

                  {/* XP Progress */}
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Level Progress</span>
                      <span className="text-sm font-bold">{streakData.xp} / {streakData.xpToNext} XP</span>
                    </div>
                    <div className="w-full bg-white/30 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full bg-white rounded-full transition-all duration-1000 ease-out shadow-lg"
                        style={{ width: `${xpPercentage}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-white/80 mt-2">{streakData.xpToNext - streakData.xp} XP to next level</p>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="p-6">
                <h3 className="text-sm font-semibold text-slate-700 mb-4">Achievement Badges</h3>
                <div className="grid grid-cols-4 gap-4">
                  {streakData.badges.map((badge, index) => (
                    <div 
                      key={index}
                      className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-200 ${
                        badge.earned 
                          ? 'bg-amber-50 border border-amber-200 cursor-pointer hover:scale-105 hover:shadow-md' 
                          : 'bg-slate-50 border border-slate-200 opacity-50 grayscale'
                      }`}
                    >
                      <span className="text-2xl">{badge.icon}</span>
                      <span className="text-xs font-medium text-slate-700 text-center">{badge.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Active Courses Grid */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">Active Courses</h2>
                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors">
                  View All
                  <TrendingUp className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <div 
                    key={course.id}
                    className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 hover:shadow-lg hover:shadow-slate-900/5 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 ${course.lightColor} rounded-xl flex items-center justify-center ${course.textColor} group-hover:scale-110 transition-transform duration-300`}>
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-1 px-2.5 py-1 bg-slate-100 rounded-lg">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span className="text-sm font-bold text-slate-700">{course.grade}</span>
                      </div>
                    </div>

                    <h3 className="font-bold text-slate-900 mb-1 line-clamp-1">{course.title}</h3>
                    <p className="text-sm text-slate-500 mb-4">{course.instructor}</p>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-slate-600">
                          {course.completedModules} / {course.totalModules} modules
                        </span>
                        <span className="text-xs font-bold text-slate-700">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                        <div 
                          className={`h-full ${course.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">Next lesson</p>
                      <p className="text-sm font-medium text-slate-700 truncate">{course.nextLesson}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-indigo-600" />
                  <h2 className="text-lg font-bold text-slate-900">Upcoming Deadlines</h2>
                </div>
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                  <MoreVertical className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              <div className="space-y-4">
                {assignments.map((assignment, index) => (
                  <div 
                    key={assignment.id}
                    className="group p-4 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md hover:shadow-indigo-500/5 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-sm font-semibold text-slate-900 group-hover:text-indigo-700 transition-colors line-clamp-2 flex-1 pr-2">
                        {assignment.title}
                      </h3>
                      {getStatusIcon(assignment.status)}
                    </div>
                    
                    <p className="text-xs text-slate-500 mb-3">{assignment.course}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-xs font-medium text-slate-600">
                          {assignment.dueDate}
                        </span>
                      </div>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${getPriorityColor(assignment.priority)}`}>
                        {assignment.priority}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <h3 className="text-sm font-semibold text-slate-700 mb-4">Weekly Overview</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-indigo-50 rounded-xl p-4">
                    <p className="text-2xl font-bold text-indigo-700">4.2</p>
                    <p className="text-xs text-indigo-600 font-medium">Avg. GPA</p>
                  </div>
                  <div className="bg-emerald-50 rounded-xl p-4">
                    <p className="text-2xl font-bold text-emerald-700">87%</p>
                    <p className="text-xs text-emerald-600 font-medium">Completion</p>
                  </div>
                  <div className="bg-violet-50 rounded-xl p-4">
                    <p className="text-2xl font-bold text-violet-700">12</p>
                    <p className="text-xs text-violet-600 font-medium">Credits</p>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-4">
                    <p className="text-2xl font-bold text-amber-700">3</p>
                    <p className="text-xs text-amber-600 font-medium">Pending</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
```

## Hakem Skor Dökümü (J1 / J2 / J3)

| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |
|---|---|---|---|---|---|
| Okunabilirlik | 95 | 82 | — | **89** | Ortalama (J1-J2) |
| Performans | 72 | 80 | — | **76** | Ortalama (J1-J2) |
| Güvenlik | 100 | 92 | — | **96** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 20 | 42 | 35 | **35** | Medyan (J1·J2·J3) — tahkim |
| Prompt Uyumu | 99 | 98 | — | **99** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 89/100

**Öneriler:**
- Dashboard bileşenini daha modüler hale getirmek için StreakWidget, CourseCard, AssignmentList gibi alt bileşenlere ayırabilirsiniz.
- CheckCircle2 ikonu yalnızca 'completed' durumu için import edilmiş ancak hiçbir ödevde bu durum kullanılmadığından gereksiz import oluşturmuş; temizlenebilir.
- Bölümü (StreakWidget, CourseCard, AssignmentItem, NavBar gibi) küçük alt bileşenlere ayırarak StudentDashboard.jsx dosyasını 300 satırın altına indirin.
- streakData.badges map'inde key={index} yerine her rozet için benzersiz bir id alanı ekleyin ve onu key olarak kullanın.

### Performans — 76/100

**Öneriler:**
- Render performansı için, inline callback fonksiyonlarını `useCallback` ile memoize edin; özellikle handleClickOutside, setIsDropdownOpen gibi state güncelleyen fonksiyonlar.
- Listelerde `index` yerine unique `id` kullanın (ör. `streakData.badges` için `badge.name`; key olarak `index` kullanılması React'in yeniden render optimizasyonunu bozar).
- getPriorityColor ve getStatusIcon fonksiyonlarını component dışına (modül seviyesine) taşıyın; böylece her render'da yeniden oluşturulmazlar.
- user, streakData, courses ve assignments sabit verilerini component body dışına çıkararak her render'da gereksiz object allocation'ı önleyin.

### Güvenlik — 96/100

**Öneriler:**
- Eğer kullanıcı verisi API'den gelip JSX'te dinamik olarak render edilecekse, XSS riskini önlemek için tüm string içerikleri React'ın varsayılan kaçış mekanizmasından geçtiğinden emin olun. Kullanıcı tarafından sağlanan HTML içeriği render etmeniz gerekirse DOMPurify kullanın.
- Bu bir frontend demo olduğu için şu anda sorun olmasa da, gerçek bir oturum yönetimi eklendiğinde token'ları asla localStorage/sessionStorage'da saklamayın; httpOnly cookie kullanın. Ayrıca, ortam değişkeni kullanımı varsa, istemci tarafına açılmaması gerekenleri NEXT_PUBLIC_ veya VITE_ ön eki olmadan tanımlayın.
- İleride gerçek kimlik doğrulama entegrasyonunda token'ları httpOnly cookie'lerde saklamayı tercih edin; localStorage XSS senaryolarında risk taşır.
- Sign Out butonu için gerçek auth bağlandığında, logout sonrası tüm oturum verilerini temizleyin ve korumalı rotalara yönlendirmeden önce istemci tarafı bypass'a karşı sunucu tarafı oturum doğrulaması ekleyin.

### Sürdürülebilirlik — 35/100

**Öneriler:**
- Büyük bileşeni Header, StreakWidget, CourseCard, AssignmentsSidebar gibi küçük, tek sorumluluklu alt bileşenlere bölün. Sabit verileri (kullanıcı, kurslar, ödevler) ayrı bir constants.js dosyasına taşıyın.
- Gelecekteki API entegrasyonları için loading, error ve empty state yönetimi ekleyin; öncelik ve durumlar için enum benzeri sabitler tanımlayın.
- Dashboard'u Navbar, ProfileDropdown, StreakWidget, CourseCard, AssignmentItem, Sidebar gibi alt bileşenlere ve useClickOutside gibi custom hook'lara ayırarak modülarite ve test edilebilirliği artırın.
- Verileri (courses, assignments) ayrı bir `data.ts` dosyasına, `priority` ve `status` gibi magic string'leri TypeScript enum veya sabit nesnelere çıkararak değiştirilebilirliği iyileştirin.

### Prompt Uyumu — 99/100

- Programatik: 100/100 · Semantik: 98/100
- İhlaller: yok

**Öneriler:**
- Ödev kenar çubuğundaki 'status' durumu sadece ikonla gösterilmiş; metin etiketi eklenmesi erişilebilirliği artırır.
- Kurs kartlarındaki not (grade) gösterimi sabit kalıyor; varsa bu verinin dinamik olarak hesaplanması daha gerçekçi olur.
- Prompt, 'sidebar' konumunu (sol/sağ) belirtmediği için bu kısmı netleştirmek gereksiz belirsizliği ortadan kaldırır.
- Ödev sidebar'ı için 'filter' veya 'sort' etkileşimi gibi ek bir işlevsellik beklentisi varsa, bunu prompt'ta açıkça belirtmek yararlı olur.


---

# Loomina Analiz Raporu — Gemini 3.5 Flash

- **Model:** `google/gemini-3.5-flash`
- **Tarih:** 02.06.2026 13:53:36
- **Üretim Süresi:** 37739 ms
- **Genel Skor:** 77/100
- **Karar Yöntemi:** Konsensüs (iki hakem ortalaması)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3
- **J3 (Tahkimci) çağrılan metrikler:** Yok — iki hakem tüm metriklerde uzlaştı.

## Kullanıcı Promptu

Build a comprehensive student dashboard interface. The layout requires a top navigation bar with a user profile dropdown. The main content area should display a streak/gamification progress widget, a grid of 3 active courses with progress bars, and a sidebar for upcoming assignment deadlines. Provide the complete code using React and Tailwind CSS. Do not write any explanations, output only the code.

## Üretilen Kod

```html
import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, 
  Flame, 
  Trophy, 
  Calendar, 
  Clock, 
  Bell, 
  Search, 
  ChevronDown, 
  LogOut, 
  User, 
  Settings, 
  GraduationCap, 
  CheckCircle2, 
  Award, 
  BookOpenCheck,
  ChevronRight,
  TrendingUp,
  Sparkles
} from 'lucide-react';

// --- MOCK DATA ---
const COURSES_DATA = [
  {
    id: 1,
    title: "Advanced React & Next.js Masterclass",
    category: "Web Development",
    instructor: "Dr. Sarah Jenkins",
    progress: 78,
    totalLessons: 48,
    completedLessons: 37,
    color: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
    textDark: "text-blue-700"
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    category: "Design",
    instructor: "Marcus Aurelius",
    progress: 45,
    totalLessons: 32,
    completedLessons: 14,
    color: "from-purple-500 to-pink-600",
    bgLight: "bg-purple-50",
    textDark: "text-purple-700"
  },
  {
    id: 3,
    title: "Data Structures & Algorithms in Python",
    category: "Computer Science",
    instructor: "Prof. Alan Turing",
    progress: 92,
    totalLessons: 60,
    completedLessons: 55,
    color: "from-emerald-400 to-teal-600",
    bgLight: "bg-emerald-50",
    textDark: "text-emerald-700"
  }
];

const DEADLINES_DATA = [
  {
    id: 1,
    title: "E-Commerce Frontend Prototype",
    course: "Advanced React & Next.js",
    dueDate: "Today, 11:59 PM",
    timeLeft: "6 hours left",
    urgency: "high",
    points: "150 XP"
  },
  {
    id: 2,
    title: "User Journey Map & Wireframes",
    course: "UI/UX Design Fundamentals",
    dueDate: "Oct 27, 4:00 PM",
    timeLeft: "2 days left",
    urgency: "medium",
    points: "100 XP"
  },
  {
    id: 3,
    title: "Graph Traversal Algorithms Lab",
    course: "Data Structures & Algorithms",
    dueDate: "Oct 30, 11:59 PM",
    timeLeft: "5 days left",
    urgency: "low",
    points: "200 XP"
  },
  {
    id: 4,
    title: "Responsive Design System Assignment",
    course: "UI/UX Design Fundamentals",
    dueDate: "Nov 03, 11:59 PM",
    timeLeft: "9 days left",
    urgency: "low",
    points: "120 XP"
  }
];

const STREAK_DATA = {
  currentStreak: 18,
  multiplier: "1.5x XP",
  weeklyProgress: [
    { day: "Mon", completed: true },
    { day: "Tue", completed: true },
    { day: "Wed", completed: true },
    { day: "Thu", completed: true },
    { day: "Fri", completed: true },
    { day: "Sat", completed: false },
    { day: "Sun", completed: false }
  ],
  level: 12,
  currentXP: 2450,
  nextLevelXP: 3000
};

export default function StudentDashboard() {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);
  const notificationRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      
      {/* --- TOP NAVIGATION BAR --- */}
      <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200/80 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-md shadow-indigo-200">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-indigo-950 bg-clip-text text-transparent">
                AuraAcademy
              </span>
              <span className="hidden sm:inline-block ml-2 px-2 py-0.5 text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full">
                Pro
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, assignments, resources..."
                className="block w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl bg-slate-50/50 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 focus:bg-white"
              />
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            
            {/* Notification Center */}
            <div className="relative" ref={notificationRef}>
              <button 
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="relative p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all duration-200"
              >
                <Bell className="w-5.5 h-5.5" />
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-rose-500 rounded-full ring-2 ring-white animate-pulse"></span>
              </button>

              {/* Notification Dropdown */}
              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-slate-150 rounded-2xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-3 duration-200">
                  <div className="px-4 py-2 border-b border-slate-100 flex justify-between items-center">
                    <span className="font-semibold text-slate-800 text-sm">Notifications</span>
                    <button className="text-xs text-indigo-600 hover:underline">Mark all read</button>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    <div className="px-4 py-3 hover:bg-slate-50 transition-colors border-b border-slate-50 flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-indigo-600 mt-1.5 shrink-0"></div>
                      <div>
                        <p className="text-xs text-slate-600"><span className="font-semibold text-slate-800">Dr. Sarah Jenkins</span> posted a new announcement in React Masterclass.</p>
                        <span className="text-[10px] text-slate-400">10 mins ago</span>
                      </div>
                    </div>
                    <div className="px-4 py-3 hover:bg-slate-50 transition-colors border-b border-slate-50 flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0"></div>
                      <div>
                        <p className="text-xs text-slate-600">Assignment <span className="font-semibold text-slate-800">E-Commerce Prototype</span> is due tonight!</p>
                        <span className="text-[10px] text-slate-400">2 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* User Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center gap-2 p-1.5 hover:bg-slate-100 rounded-xl transition-all duration-200"
              >
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop" 
                    alt="User Profile" 
                    className="w-9 h-9 rounded-xl object-cover ring-2 ring-indigo-500/20"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full ring-2 ring-white"></div>
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-xs font-semibold text-slate-800 leading-none">Alex Morgan</p>
                  <p className="text-[10px] text-slate-400 mt-0.5 font-medium">Level {STREAK_DATA.level} Student</p>
                </div>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isProfileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-150 rounded-2xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-3 duration-200">
                  <div className="px-4 py-2.5 border-b border-slate-100">
                    <p className="text-xs text-slate-400 font-medium">Signed in as</p>
                    <p className="text-sm font-semibold text-slate-800 truncate">alex.morgan@aura.edu</p>
                  </div>
                  <div className="p-1">
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors">
                      <User className="w-4 h-4" />
                      <span>My Profile</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors">
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors">
                      <Award className="w-4 h-4" />
                      <span>Achievements</span>
                    </button>
                  </div>
                  <div className="border-t border-slate-100 p-1 mt-1">
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-rose-600 hover:bg-rose-50 rounded-xl transition-colors">
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT LAYOUT --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Welcome Section */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              Welcome back, Alex! <Sparkles className="w-6 h-6 text-amber-500 fill-amber-500 animate-pulse" />
            </h1>
            <p className="text-slate-500 mt-1">You have 2 classes today. Keep up the great momentum!</p>
          </div>
          <div className="flex items-center gap-3 bg-white p-2.5 rounded-2xl border border-slate-200/80 shadow-sm self-start">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Global Rank</p>
              <p className="text-sm font-bold text-slate-800">Top 4% (Rank #142)</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT & CENTER COLUMN (Gamification & Active Courses) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* STREAK / GAMIFICATION WIDGET */}
            <section className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-indigo-100 relative overflow-hidden">
              {/* Background decorative shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-indigo-500/10 rounded-full translate-y-1/3 blur-xl pointer-events-none"></div>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Flame & Main Streak Stat */}
                <div className="md:col-span-5 flex items-center gap-4 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner animate-bounce">
                    <Flame className="w-10 h-10 text-amber-400 fill-amber-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-4xl font-black tracking-tight">{STREAK_DATA.currentStreak}</span>
                      <span className="text-xl font-bold">Days</span>
                    </div>
                    <p className="text-xs text-indigo-150 font-medium mt-0.5 uppercase tracking-wider flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> Active Streak ({STREAK_DATA.multiplier})
                    </p>
                  </div>
                </div>

                {/* Level / XP Progress Bar */}
                <div className="md:col-span-7 space-y-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-xs text-indigo-200 font-bold uppercase tracking-wider">Level {STREAK_DATA.level}</span>
                      <h3 className="text-lg font-bold leading-tight mt-0.5">Progress to Level {STREAK_DATA.level + 1}</h3>
                    </div>
                    <span className="text-xs font-bold bg-white/10 px-2 py-1 rounded-lg border border-white/10">
                      {STREAK_DATA.currentXP} / {STREAK_DATA.nextLevelXP} XP
                    </span>
                  </div>
                  
                  {/* Progress Line */}
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/5">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full transition-all duration-1000 shadow-inner"
                      style={{ width: `${(STREAK_DATA.currentXP / STREAK_DATA.nextLevelXP) * 100}%` }}
                    ></div>
                  </div>

                  {/* Weekly Check-in Days */}
                  <div className="grid grid-cols-7 gap-1.5 pt-2">
                    {STREAK_DATA.weeklyProgress.map((item, index) => (
                      <div key={index} className="flex flex-col items-center gap-1">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                          item.completed 
                            ? 'bg-emerald-400 text-slate-900 shadow-md shadow-emerald-900/20 ring-2 ring-emerald-300/30' 
                            : 'bg-white/10 text-white/50 border border-white/10'
                        }`}>
                          {item.completed ? <CheckCircle2 className="w-4 h-4" /> : item.day[0]}
                        </div>
                        <span className="text-[10px] text-indigo-200 font-semibold">{item.day}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            </section>

            {/* ACTIVE COURSES GRID */}
            <section className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <BookOpenCheck className="w-5.5 h-5.5 text-indigo-600" />
                  <h2 className="text-lg font-bold text-slate-900">Active Courses</h2>
                </div>
                <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors">
                  View all courses <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {COURSES_DATA.map((course) => (
                  <div 
                    key={course.id} 
                    className="bg-white rounded-2xl border border-slate-200/80 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                  >
                    {/* Course Header Color Stripe */}
                    <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
                    
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Category Tag */}
                        <div className="flex justify-between items-start mb-3">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg ${course.bgLight} ${course.textDark}`}>
                            {course.category}
                          </span>
                          <span className="text-xs font-semibold text-slate-400">
                            {course.completedLessons}/{course.totalLessons} Lessons
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-bold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors line-clamp-2 mb-1">
                          {course.title}
                        </h3>
                        <p className="text-xs text-slate-400 font-medium">by {course.instructor}</p>
                      </div>

                      {/* Progress Area */}
                      <div className="mt-5 pt-4 border-t border-slate-100">
                        <div className="flex justify-between items-center text-xs font-semibold text-slate-600 mb-1.5">
                          <span>Overall Progress</span>
                          <span className="text-slate-800 font-bold">{course.progress}%</span>
                        </div>
                        {/* Progress Bar Container */}
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${course.color} rounded-full transition-all duration-1000`}
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Action Footer */}
                    <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex justify-between items-center group-hover:bg-indigo-50/30 transition-colors">
                      <span className="text-xs font-bold text-slate-500 group-hover:text-slate-700">Resume learning</span>
                      <div className={`w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm`}>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* RIGHT COLUMN (Sidebar - Upcoming Deadlines) */}
          <div className="space-y-6">
            
            {/* UPCOMING DEADLINES SIDEBAR */}
            <section className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-indigo-600" />
                    <h2 className="text-lg font-bold text-slate-900">Deadlines</h2>
                  </div>
                  <span className="px-2.5 py-0.5 text-xs font-bold bg-rose-50 text-rose-600 rounded-full">
                    {DEADLINES_DATA.length} Pending
                  </span>
                </div>

                {/* Deadlines List */}
                <div className="space-y-4">
                  {DEADLINES_DATA.map((deadline) => (
                    <div 
                      key={deadline.id}
                      className="p-3.5 rounded-2xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50/50 transition-all duration-200 flex gap-3 group"
                    >
                      {/* Urgency Indicator Bar */}
                      <div className={`w-1.5 rounded-full shrink-0 ${
                        deadline.urgency === 'high' ? 'bg-rose-500' : 
                        deadline.urgency === 'medium' ? 'bg-amber-500' : 'bg-slate-300'
                      }`}></div>

                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start gap-1">
                          <h4 className="font-bold text-slate-800 text-xs truncate group-hover:text-indigo-600 transition-colors">
                            {deadline.title}
                          </h4>
                          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded shrink-0">
                            +{deadline.points}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 font-medium truncate mt-0.5">{deadline.course}</p>
                        
                        <div className="flex items-center gap-3 mt-2.5 text-[10px] font-bold text-slate-500">
                          <span className="flex items-center gap-1 text-slate-600">
                            <Clock className="w-3.5 h-3.5 text-slate-400" /> {deadline.dueDate}
                          </span>
                          <span className={`px-1.5 py-0.5 rounded-md ${
                            deadline.urgency === 'high' ? 'text-rose-600 bg-rose-50' : 'text-slate-500 bg-slate-100'
                          }`}>
                            {deadline.timeLeft}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* View All Button */}
              <button className="w-full mt-6 py-3 bg-slate-50 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 font-bold text-xs rounded-xl border border-slate-100 hover:border-indigo-100 transition-all duration-200">
                View Calendar Schedule
              </button>
            </section>

            {/* QUICK STATS CARD */}
            <section className="bg-gradient-to-tr from-slate-900 via-slate-800 to-indigo-950 rounded-3xl p-6 text-white relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full -translate-y-1/3 translate-x-1/3 blur-xl"></div>
              
              <h3 className="font-bold text-sm text-indigo-300 uppercase tracking-widest">Monthly Summary</h3>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
                  <span className="text-[10px] text-slate-400 font-medium">Study Hours</span>
                  <p className="text-lg font-extrabold mt-0.5">42.5 hrs</p>
                  <span className="text-[9px] text-emerald-400 font-bold flex items-center gap-0.5 mt-1">
                    ↑ 12% vs last week
                  </span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
                  <span className="text-[10px] text-slate-400 font-medium">Completed Labs</span>
                  <p className="text-lg font-extrabold mt-0.5">18 Labs</p>
                  <span className="text-[9px] text-emerald-400 font-bold flex items-center gap-0.5 mt-1">
                    100% success rate
                  </span>
                </div>
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
| Okunabilirlik | 70 | 80 | — | **75** | Ortalama (J1-J2) |
| Performans | 70 | 86 | — | **78** | Ortalama (J1-J2) |
| Güvenlik | 95 | 92 | — | **94** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 40 | 38 | — | **39** | Ortalama (J1-J2) |
| Prompt Uyumu | 99 | 98 | — | **99** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 75/100

**Öneriler:**
- Bileşeni daha küçük bileşenlere (ör. Navbar, GamificationWidget, CourseCard, DeadlinesSidebar) ayırarak dosya uzunluğunu azaltın ve okunabilirliği artırın.
- Kullanılmayan `BookOpen` importunu temizleyin.
- StudentDashboard bileşenini StreakWidget, ActiveCourseCard, DeadlinesSidebar, NotificationsDropdown ve ProfileDropdown gibi alt bileşenlere ayırarak tek sorumluluk ilkesini (SRP) güçlendirin ve ana dosyayı 150 satırın altına indirin.
- Urgency değerleri ('high', 'medium', 'low') ve renk/stil eşleştirmeleri için bir constants dosyası veya Tailwind class sözlüğü çıkararak sihirli stringleri ortadan kaldırın.

### Performans — 78/100

**Öneriler:**
- Dependency dizisi boş olan `useEffect`'teki `handleClickOutside` fonksiyonunu `useCallback` ile sarmalayarak stabil referans sağlayabilirsiniz. Aynı şekilde inline `onChange` ve `onClick` handler'larını `useCallback` ile memoize edin.
- Drop-down bileşenlerini `React.memo` veya ayrı bileşen olarak soyutlayıp, prop olarak geçilen veriler stabil olmadığında bileşenin tüm dalının gereksiz render edilmesini engelleyebilirsiniz.
- CourseCard, DeadlineItem ve WeeklyDay gibi alt bileşenleri React.memo ile sarıp, onClick handler'larını useCallback ile memoize ederek gereksiz re-render'ları önleyin.
- Bildirim ve profil dropdown'larını useEffect yerine tek bir ref-based hook (ör. useClickOutside) ile birleştirerek listener sayısını azaltın.

### Güvenlik — 94/100

**Öneriler:**
- Profil resmi URL'si gibi dış kaynakları sabit kodlamak yerine, API'den veya environment variable üzerinden yapılandırılabilir bir şekilde yönetin.
- Geliştirme aşamasında olsa bile, gerçek kullanıcı verisi (isim, e-posta) static text olarak değil, kimlik doğrulama sonucu dinamik olarak sağlanmalıdır.
- Search input'a maxLength ve input sanitization ekleyerek potansiyel abuse ve aşırı uzun girdi durumlarına karşı koruma sağlayın.
- Unsplash gibi üçüncü parti kaynaklardan gelen içerikler için Content Security Policy (CSP) header'ları yapılandırarak ek savunma katmanı ekleyin.

### Sürdürülebilirlik — 39/100

**Öneriler:**
- Navbar, CourseCard, DeadlineItem, StreakWidget gibi alt bileşenleri ayrı dosyalara çıkararak modülerliği artırın.
- Dropdown ve click-outside mantığını custom hook'lara (ör. useClickOutside) taşıyın; mock veriyi ayrı bir constants/data dosyasına alın.
- Parçala: Navbar, ProfileDropdown, NotificationDropdown, StreakWidget, CourseCard, DeadlinesSidebar, MonthlySummary gibi alt bileşenlere ayır ve `useClickOutside` gibi custom hook'lar ile tekrar eden davranışları soyutla.
- Geçersiz Tailwind sınıflarını (`w-5.5`, `bg-slate-150`, `text-indigo-150`) standart ölçeklere veya theme token'larına dönüştür; kullanılmayan `searchQuery` state'ini kaldır veya arama davranışını uygula.

### Prompt Uyumu — 99/100

- Programatik: 100/100 · Semantik: 98/100
- İhlaller: yok

**Öneriler:**
- Görev bitiş tarihleri sidebar'ında 'View Calendar Schedule' butonuna tıklama işlevi eklenerek etkileşim tamamlanabilir, ancak bu prompt'ta istenen bir özellik değildir.
- Kurs kartlarına tıklama ile detay sayfasına yönlendirme gibi prompt dışı etkileşimler ek isteğe bağlı olarak geliştirilebilir.
- Prompt yalnızca 3 ders ve atanmış ödev listesi istiyor; 'Quick Stats / Monthly Summary' gibi ek bölümler isteğe bağlı olduğundan minimum gereksinimi karşılamak adına daha sade tutulabilir.
- Bildirim (notification) dropdownu zorunlu bir bileşen değil; eğer sadece 'profil dropdown' istendiyse bu kısım çıkarılarak prompt sadakati daha net vurgulanabilir.
