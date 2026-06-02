# Loomina — Model Karşılaştırma Raporu

- **Tarih:** 02.06.2026 13:21:37
- **Karşılaştırılan Model Sayısı:** 3

## Kullanıcı Promptu

Design a responsive course video player layout. The left side should feature the main video player placeholder and video title. The right side must contain a scrollable curriculum sidebar with accordion-style modules and lessons. Use clean HTML and inline CSS. Do not write any explanations, output only the code.

## Karşılaştırma Tablosu

| Model | Genel | Okunabilirlik | Performans | Güvenlik | Sürdürülebilirlik | Prompt Uyumu |
|---|---|---|---|---|---|---|
| DeepSeek V4 Pro | 69 | 42 | 83 | 98 | 27 | 94 |
| Qwen3.6 Plus | 78 | 86 | 92 | 98 | 42 | 72 |
| Gemini 3.5 Flash | 76 | 85 | 89 | 94 | 38 | 74 |

---

# Loomina Analiz Raporu — DeepSeek V4 Pro

- **Model:** `deepseek/deepseek-v4-pro`
- **Tarih:** 02.06.2026 13:21:37
- **Üretim Süresi:** 215769 ms
- **Genel Skor:** 69/100
- **Karar Yöntemi:** Tahkim (J3)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3, x-ai/grok-4.3
- **J3 (Tahkimci) çağrılan metrikler:** Okunabilirlik

## Kullanıcı Promptu

Design a responsive course video player layout. The left side should feature the main video player placeholder and video title. The right side must contain a scrollable curriculum sidebar with accordion-style modules and lessons. Use clean HTML and inline CSS. Do not write any explanations, output only the code.

## Üretilen Kod

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Course Video Player</title>
</head>
<body style="margin:0;padding:0;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;background-color:#0f1117;color:#e1e4e8;min-height:100vh;display:flex;align-items:center;justify-content:center;">

    <div style="display:flex;width:100%;max-width:1400px;height:92vh;margin:0 auto;padding:20px;gap:20px;box-sizing:border-box;">

        <!-- LEFT SIDE - Video Player & Title -->
        <div style="flex:1 1 65%;display:flex;flex-direction:column;min-width:0;gap:16px;">
            <!-- Video Player Placeholder -->
            <div style="position:relative;width:100%;aspect-ratio:16/9;background:linear-gradient(135deg,#1a1d27 0%,#1f2233 50%,#1a1d27 100%);border-radius:16px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.5),0 0 0 1px rgba(255,255,255,0.05);cursor:pointer;transition:box-shadow 0.3s ease;">
                <!-- Subtle grid pattern overlay -->
                <div style="position:absolute;inset:0;background-image:radial-gradient(circle,rgba(255,255,255,0.03) 1px,transparent 1px);background-size:24px 24px;pointer-events:none;"></div>
                <!-- Gradient vignette -->
                <div style="position:absolute;inset:0;background:radial-gradient(ellipse at center,transparent 55%,rgba(0,0,0,0.55) 100%);pointer-events:none;"></div>
                <!-- Play Button -->
                <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:80px;height:80px;background:rgba(99,102,241,0.9);border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 32px rgba(99,102,241,0.5),0 0 0 8px rgba(99,102,241,0.15);transition:all 0.3s ease;z-index:2;">
                    <svg width="32" height="36" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 14L2 26V2L22 14Z" fill="white" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                    </svg>
                </div>
                <!-- Duration badge -->
                <div style="position:absolute;bottom:16px;right:16px;background:rgba(0,0,0,0.75);backdrop-filter:blur(8px);color:#fff;padding:6px 12px;border-radius:8px;font-size:13px;font-weight:600;letter-spacing:0.5px;z-index:2;">12:34</div>
                <!-- Top bar -->
                <div style="position:absolute;top:0;left:0;right:0;height:60px;background:linear-gradient(to bottom,rgba(0,0,0,0.45),transparent);pointer-events:none;z-index:1;"></div>
            </div>

            <!-- Video Title & Info -->
            <div style="display:flex;flex-direction:column;gap:10px;">
                <h2 style="margin:0;font-size:1.35rem;font-weight:700;color:#f1f5f9;line-height:1.3;letter-spacing:-0.2px;">Introduction to React: Building Modern User Interfaces</h2>
                <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
                    <span style="display:flex;align-items:center;gap:6px;font-size:0.85rem;color:#94a3b8;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        12:34
                    </span>
                    <span style="display:flex;align-items:center;gap:6px;font-size:0.85rem;color:#94a3b8;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        2.4k views
                    </span>
                    <span style="display:flex;align-items:center;gap:6px;font-size:0.85rem;color:#818cf8;font-weight:600;">Section 3 · Lesson 7</span>
                </div>
            </div>
        </div>

        <!-- RIGHT SIDE - Curriculum Sidebar -->
        <div style="flex:0 0 380px;display:flex;flex-direction:column;min-width:320px;background:#161820;border-radius:16px;box-shadow:0 8px 40px rgba(0,0,0,0.4),0 0 0 1px rgba(255,255,255,0.06);overflow:hidden;">
            <!-- Sidebar Header -->
            <div style="padding:20px 24px;border-bottom:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:space-between;flex-shrink:0;">
                <h3 style="margin:0;font-size:1.05rem;font-weight:700;color:#f1f5f9;letter-spacing:-0.1px;">📋 Course Curriculum</h3>
                <span style="font-size:0.78rem;color:#818cf8;background:rgba(99,102,241,0.12);padding:4px 10px;border-radius:20px;font-weight:600;">24 lessons</span>
            </div>

            <!-- Scrollable Accordion List -->
            <div style="flex:1;overflow-y:auto;overflow-x:hidden;padding:8px 12px 16px 12px;scroll-behavior:smooth;">
                <!-- Custom scrollbar styling via inline style wrapper -->
                <style>
                    ::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-track{background:transparent;}::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.12);border-radius:10px;}::-webkit-scrollbar-thumb:hover{background:rgba(255,255,255,0.22);}
                </style>

                <!-- Module 1 -->
                <div style="margin-bottom:4px;">
                    <button onclick="toggleAccordion(this)" style="width:100%;display:flex;align-items:center;justify-content:space-between;background:rgba(255,255,255,0.03);border:none;color:#e2e8f0;padding:14px 16px;border-radius:12px;cursor:pointer;font-size:0.9rem;font-weight:600;text-align:left;transition:all 0.2s ease;font-family:inherit;letter-spacing:-0.1px;"
                    onmouseover="this.style.background='rgba(255,255,255,0.06)'" onmouseout="if(!this.classList.contains('active-acc'))this.style.background='rgba(255,255,255,0.03)'">
                    <span>Module 1: Getting Started</span>
                    <svg class="acc-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2.5" style="transition:transform 0.3s ease;transform:rotate(0deg);"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                <div class="acc-content" style="max-height:0;overflow:hidden;transition:max-height 0.4s cubic-bezier(0.4,0,0.2,1);">
                    <div style="padding:4px 8px 8px 20px;display:flex;flex-direction:column;gap:2px;">
                        <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;font-size:0.84rem;color:#cbd5e1;cursor:pointer;transition:all 0.15s ease;background:transparent;" onmouseover="this.style.background='rgba(255,255,255,0.04)'" onmouseout="this.style.background='transparent'"><span style="width:18px;height:18px;border-radius:50%;border:2px solid #4ade80;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><span style="font-size:10px;color:#4ade80;">✓</span></span>Welcome & Course Overview</div>
                        <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;font-size:0.84rem;color:#cbd5e1;cursor:pointer;transition:all 0.15s ease;background:transparent;" onmouseover="this.style.background='rgba(255,255,255,0.04)'" onmouseout="this.style.background='transparent'"><span style="width:18px;height:18px;border-radius:50%;border:2px solid #4ade80;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><span style="font-size:10px;color:#4ade80;">✓</span></span>Setting Up Your Environment</div>
                        <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;font-size:0.84rem;color:#f1f5f9;cursor:pointer;transition:all 0.15s ease;background:rgba(99,102,241,0.12);border-left:3px solid #818cf8;font-weight:500;" onmouseover="this.style.background='rgba(99,102,241,0.18)'" onmouseout="this.style.background='rgba(99,102,241,0.12)'"><span style="width:18px;height:18px;border-radius:50%;border:2px solid #818cf8;display:flex;align-items:center;justify-content:center;flex-shrink:0;animation:pulse-dot 2s infinite;"><span style="width:8px;height:8px;background:#818cf8;border-radius:50%;"></span></span>First React Component</div>
                    </div>
                </div>
            </div>

            <!-- Module 2 -->
            <div style="margin-bottom:4px;">
                <button onclick="toggleAccordion(this)" style="width:100%;display:flex;align-items:center;justify-content:space-between;background:rgba(255,255,255,0.03);border:none;color:#e2e8f0;padding:14px 16px;border-radius:12px;cursor:pointer;font-size:0.9rem;font-weight:600;text-align:left;transition:all 0.2s ease;font-family:inherit;letter-spacing:-0.1px;"
                onmouseover="this.style.background='rgba(255,255,255,0.06)'" onmouseout="if(!this.classList.contains('active-acc'))this.style.background='rgba(255,255,255,0.03)'">
                <span>Module 2: JSX & Components</span>
                <svg class="acc-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2.5" style="transition:transform 0.3s ease;transform:rotate(0deg);"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="acc-content" style="max-height:0;overflow:hidden;transition:max-height 0.4s cubic-bezier(0.4,0,0.2,1);">
                <div style="padding:4px 8px 8px 20px;display:flex;flex-direction:column;gap:2px;">
                    <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;font-size:0.84rem;color:#cbd5e1;cursor:pointer;transition:all 0.15s ease;background:transparent;" onmouseover="this.style.background='rgba(255,255,255,0.04)'" onmouseout="this.style.background='transparent'"><span style="width:8px;height:8px;background:#475569;border-radius:50%;flex-shrink:0;"></span>Understanding JSX Syntax</div>
                    <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;font-size:0.84rem;color:#cbd5e1;cursor:pointer;transition:all 0.15s ease;background:transparent;" onmouseover="this.style.background='rgba(255,255,255,0.04)'" onmouseout="this.style.background='transparent'"><span style="width:8px;height:8px;background:#475569;border-radius:50%;flex-shrink:0;"></span>Functional vs Class Components</div>
                    <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;font-size:0.84rem;color:#cbd5e1;cursor:pointer;transition:all 0.15s ease;background:transparent;" onmouseover="this.style.background='rgba(255,255,255,0.04)'" onmouseout="this.style.background='transparent'"><span style="width:8px;height:8px;background:#475569;border-radius:50%;flex-shrink:0;"></span>Props & Component Composition</div>
                </div>
            </div>
        </div>

        <!-- Module 3 -->
        <div style="margin-bottom:4px;">
            <button onclick="toggleAccordion(this)" style="width:100%;display:flex;align-items:center;justify-content:space-between;background:rgba(255,255,255,0.03);border:none;color:#e2e8f0;padding:14px 16px;border-radius:12px;cursor:pointer;font-size:0.9rem;font-weight:600;text-align:left;transition:all 0.2s ease;font-family:inherit;letter-spacing:-0.1px;"
            onmouseover="this.style.background='rgba(255,255,255,0.06)'" onmouseout="if(!this.classList.contains('active-acc'))this.style.background='rgba(255,255,255,0.03)'">
            <span>Module 3: State & Events</span>
            <svg class="acc-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2.5" style="transition:transform 0.3s ease;transform:rotate(0deg);"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="acc-content" style="max-height:0;overflow:hidden;transition:max-height 0.4s cubic-bezier(0.4,0,0.2,1);">
            <div style="padding:4px 8px 8px 20px;display:flex;flex-direction:column;gap:2px;">
                <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;font-size:0.84rem;color:#cbd5e1;cursor:pointer;transition:all 0.15s ease;background:transparent;" onmouseover="this.style.background='rgba(255,255,255,0.04)'" onmouseout="this.style.background='transparent'"><span style="width:8px;height:8px;background:#475569;border-radius:50%;flex-shrink:0;"></span>useState Hook Deep Dive</div>
                <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;font-size:0.84rem;color:#cbd5e1;cursor:pointer;transition:all 0.15s ease;background:transparent;" onmouseover="this.style.background='rgba(255,255,255,0.04)'" onmouseout="this.style.background='transparent'"><span style="width:8px;height:8px;background:#475569;border-radius:50%;flex-shrink:0;"></span>Handling Form Events</div>
                <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;font-size:0.84rem;color:#cbd5e1;cursor:pointer;transition:all 0.15s ease;background:transparent;" onmouseover="this.style.background='rgba(255,255,255,0.04)'" onmouseout="this.style.background='transparent'"><span style="width:8px;height:8px;background:#475569;border-radius:50%;flex-shrink:0;"></span>Lifting State Up</div>
                <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;font-size:0.84rem;color:#cbd5e1;cursor:pointer;transition:all 0.15s ease;background:transparent;" onmouseover="this.style.background='rgba(255,255,255,0.04)'" onmouseout="this.style.background='transparent'"><span style="width:8px;height:8px;background:#475569;border-radius:50%;flex-shrink:0;"></span>Controlled Components</div>
            </div>
        </div>
    </div>

    <!-- Module 4 -->
    <div style="margin-bottom:4px;">
        <button onclick="toggleAccordion(this)" style="width:100%;display:flex;align-items:center;justify-content:space-between;background:rgba(255,255,255,0.03);border:none;color:#e2e8f0;padding:14px 16px;border-radius:12px;cursor:pointer;font-size:0.9rem;font-weight:600;text-align:left;transition:all 0.2s ease;font-family:inherit;letter-spacing:-0.1px;"
        onmouseover="this.style.background='rgba(255,255,255,0.06)'" onmouseout="if(!this.classList.contains('active-acc'))this.style.background='rgba(255,255,255,0.03)'">
        <span>Module 4: Side Effects & APIs</span>
        <svg class="acc-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2.5" style="transition:transform 0.3s ease;transform:rotate(0deg);"><polyline points="6 9 12 15 18 9"/></svg>
    </button>
    <div class="acc-content" style="max-height:0;overflow:hidden;transition:max-height 0.4s cubic-bezier(0.4,0,0.2,1);">
        <div style="padding:4px 8px 8px 20px;display:flex;flex-direction:column;gap:2px;">
            <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;font-size:0.84rem;color:#cbd5e1;cursor:pointer;transition:all 0.15s ease;background:transparent;" onmouseover="this.style.background='rgba(255,255,255,0.04)'" onmouseout="this.style.background='transparent'"><span style="width:8px;height:8px;background:#475569;border-radius:50%;flex-shrink:0;"></span>useEffect Basics</div>
            <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;font-size:0.84rem;color:#cbd5e1;cursor:pointer;transition:all 0.15s ease;background:transparent;" onmouseover="this.style.background='rgba(255,255,255,0.04)'" onmouseout="this.style.background='transparent'"><span style="width:8px;height:8px;background:#475569;border-radius:50%;flex-shrink:0;"></span>Fetching Data</div>
            <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;font-size:0.84rem;color:#cbd5e1;cursor:pointer;transition:all 0.15s ease;background:transparent;" onmouseover="this.style.background='rgba(255,255,255,0.04)'" onmouseout="this.style.background='transparent'"><span style="width:8px;height:8px;background:#475569;border-radius:50%;flex-shrink:0;"></span>Cleanup Functions</div>
        </div>
    </div>
</div>

<!-- Module 5 -->
<div style="margin-bottom:4px;">
    <button onclick="toggleAccordion(this)" style="width:100%;display:flex;align-items:center;justify-content:space-between;background:rgba(255,255,255,0.03);border:none;color:#e2e8f0;padding:14px 16px;border-radius:12px;cursor:pointer;font-size:0.9rem;font-weight:600;text-align:left;transition:all 0.2s ease;font-family:inherit;letter-spacing:-0.1px;"
    onmouseover="this.style.background='rgba(255,255,255,0.06)'" onmouseout="if(!this.classList.contains('active-acc'))this.style.background='rgba(255,255,255,0.03)'">
    <span>Module 5: Routing & Navigation</span>
    <svg class="acc-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2.5" style="transition:transform 0.3s ease;transform:rotate(0deg);"><polyline points="6 9 12 15 18 9"/></svg>
</button>
<div class="acc-content" style="max-height:0;overflow:hidden;transition:max-height 0.4s cubic-bezier(0.4,0,0.2,1);">
    <div style="padding:4px 8px 8px 20px;display:flex;flex-direction:column;gap:2px;">
        <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;font-size:0.84rem;color:#cbd5e1;cursor:pointer;transition:all 0.15s ease;background:transparent;" onmouseover="this.style.background='rgba(255,255,255,0.04)'" onmouseout="this.style.background='transparent'"><span style="width:8px;height:8px;background:#475569;border-radius:50%;flex-shrink:0;"></span>React Router Setup</div>
        <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;font-size:0.84rem;color:#cbd5e1;cursor:pointer;transition:all 0.15s ease;background:transparent;" onmouseover="this.style.background='rgba(255,255,255,0.04)'" onmouseout="this.style.background='transparent'"><span style="width:8px;height:8px;background:#475569;border-radius:50%;flex-shrink:0;"></span>Dynamic Routes</div>
        <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;font-size:0.84rem;color:#cbd5e1;cursor:pointer;transition:all 0.15s ease;background:transparent;" onmouseover="this.style.background='rgba(255,255,255,0.04)'" onmouseout="this.style.background='transparent'"><span style="width:8px;height:8px;background:#475569;border-radius:50%;flex-shrink:0;"></span>Navigation Guards</div>
        <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;font-size:0.84rem;color:#cbd5e1;cursor:pointer;transition:all 0.15s ease;background:transparent;" onmouseover="this.style.background='rgba(255,255,255,0.04)'" onmouseout="this.style.background='transparent'"><span style="width:8px;height:8px;background:#475569;border-radius:50%;flex-shrink:0;"></span>Nested Layouts</div>
    </div>
</div>
</div>
</div>
</div>
</div>

<!-- Pulse animation style -->
<style>
    @keyframes pulse-dot {
        0%,
        100% {
            box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.5);
        }
        50% {
            box-shadow: 0 0 0 8px rgba(99, 102, 241, 0);
        }
    }
</style>

<script>
    function toggleAccordion(btn) {
        const content = btn.nextElementSibling;
        const arrow = btn.querySelector('.acc-arrow');
        const isOpen = content.style.maxHeight !== '0px' && content.style.maxHeight !== '';

        // Close all other accordions
        document.querySelectorAll('.acc-content').forEach(acc => {
            if (acc !== content) {
                acc.style.maxHeight = '0px';
                const siblingArrow = acc.previousElementSibling.querySelector('.acc-arrow');
                if (siblingArrow) siblingArrow.style.transform = 'rotate(0deg)';
                acc.previousElementSibling.classList.remove('active-acc');
                acc.previousElementSibling.style.background = 'rgba(255,255,255,0.03)';
            }
        });

        if (isOpen) {
            content.style.maxHeight = '0px';
            arrow.style.transform = 'rotate(0deg)';
            btn.classList.remove('active-acc');
            btn.style.background = 'rgba(255,255,255,0.03)';
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            arrow.style.transform = 'rotate(180deg)';
            btn.classList.add('active-acc');
            btn.style.background = 'rgba(99,102,241,0.12)';
        }
    }

    // Open first module by default
    document.addEventListener('DOMContentLoaded', function() {
        const firstBtn = document.querySelector('button[onclick="toggleAccordion(this)"]');
        if (firstBtn) {
            const content = firstBtn.nextElementSibling;
            const arrow = firstBtn.querySelector('.acc-arrow');
            content.style.maxHeight = content.scrollHeight + 'px';
            arrow.style.transform = 'rotate(180deg)';
            firstBtn.classList.add('active-acc');
            firstBtn.style.background = 'rgba(99,102,241,0.12)';
        }
    });
</script>

</body>
</html>
```

## Hakem Skor Dökümü (J1 / J2 / J3)

| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |
|---|---|---|---|---|---|
| Okunabilirlik | 82 | 38 | 42 | **42** | Medyan (J1·J2·J3) — tahkim |
| Performans | 90 | 75 | — | **83** | Ortalama (J1-J2) |
| Güvenlik | 100 | 95 | — | **98** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 25 | 28 | — | **27** | Ortalama (J1-J2) |
| Prompt Uyumu | 94 | 94 | — | **94** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 42/100

**Öneriler:**
- onmouseover/onmouseout içindeki inline stil değişikliklerini CSS sınıfı (hover) ile yönetin, böylece HTML daha temiz ve okunaklı olur.
- Sık kullanılan renk değerlerini ('#818cf8', '#475569' vb.) ve boyutları (padding, border-radius) anlamlı CSS değişkenleri veya sabitlerle tanımlayarak kodun bakımını kolaylaştırın.
- Tekrarlayan modül/ders markup'ını JavaScript ile bir diziden render ederek DRY ihlalini ortadan kaldırın ve inline stilleri <style> bloğunda sınıflara taşıyarak satır uzunluğunu düşürün.
- Inline onclick/onmouseover/onmouseout gibi handler'ları kaldırıp addEventListener ile bağlayın; <style> etiketlerini <head> içine alarak standart yapıya dönün.

### Performans — 83/100

**Öneriler:**
- Inline mouseover/mouseout işleyicileri yerine CSS :hover kullanarak olay dinleyici sayısını azaltın ve tarayıcı üzerindeki yükü hafifletin.
- Accordion içerikleri için scrollHeight hesaplaması sık yapılıyorsa, değeri bir değişkende saklayarak gereksiz DOM erişimlerini önleyin.
- `@media (prefers-reduced-motion: reduce)` ile pulse animasyonunu ve arka plan efektlerini azaltarak sürekli repaint maliyetini düşürün.
- Sidebar'a `contain: layout paint` ve responsive breakpoint'ler (ör. <900px altında alt alta istifleme) ekleyerek layout/paint hesaplamasını daraltın ve küçük ekranlardaki gereksiz hesaplamayı önleyin.

### Güvenlik — 98/100

**Öneriler:**
- İleride dinamik içerik eklenecekse, DOM'a eklemeden önce DOMPurify gibi bir kütüphane ile sanitize edilmelidir.
- Kullanıcıdan alınan veriler işlenecekse, metin içerikleri innerHTML yerine textContent ile güncellenmelidir.
- Üretim ortamında Content-Security-Policy header'ı ile inline event handler'ları kısıtlamak veya addEventListener kullanarak scriptleri ayırmak iyi bir savunma katmanı sağlar.
- Harici kaynak (font, video, CDN) eklenecekse yalnızca HTTPS üzerinden yükleyin ve SRI (Subresource Integrity) hash doğrulaması uygulayın.

### Sürdürülebilirlik — 27/100

**Öneriler:**
- Tüm yapıyı React veya Vue gibi bir framework ile bileşenlere ayırın; Accordion, VideoPlayer, CurriculumSidebar gibi yeniden kullanılabilir bileşenler oluşturun.
- Stil tanımlarını (renkler, boşluklar, animasyonlar) değişkenler veya tema dosyaları ile yönetin, inline CSS'ten kaçının.
- Define reusable CSS classes (e.g., .lesson-row, .module-btn, .badge) in the <style> blocks and apply them via class attribute instead of repeating inline styles for every lesson/module; use CSS custom properties (--primary, --bg, --text) to centralize the color palette.
- Refactor the accordion logic to use a data array and a render() function (or template) so modules/lessons are defined once as data, making additions and edits a single-line change rather than large copy-paste blocks.

### Prompt Uyumu — 94/100

- Programatik: 100/100 · Semantik: 85/100
- İhlaller: yok

**Öneriler:**
- Accordion açılırken kullanılan `maxHeight` hesaplamasını düzeltmek için `scrollHeight` doğru şekilde alınmalı; içerik alanı `overflow:hidden` iken `scrollHeight` doğru değeri vermeyebilir, geçici olarak `overflow:visible` yapıp ölçüm sonrası eski haline dönebilirsiniz.
- İlk modülün otomatik açılması için DOMContentLoaded'deki kod çalışıyor ancak diğer modüllerin manuel tıklanmasında içerik yüksekliği güncellenmediğinden accordion görsel olarak çalışmıyor; `toggleAccordion` fonksiyonunda `content.style.maxHeight = content.scrollHeight + 'px'` satırı tekrar kontrol edilip aktif hale getirilmeli.
- '24 lessons' rozetini modüllerdeki gerçek ders toplamıyla (17) eşleştirin veya ders sayılarını 24'e tamamlayın.
- Mobil görünüm için açık bir media query (örn. @media (max-width: 900px)) ekleyerek iki sütunu dikey istifleyin ve sidebar sabit yüksekliğe geçsin.


---

# Loomina Analiz Raporu — Qwen3.6 Plus

- **Model:** `qwen/qwen3.6-plus`
- **Tarih:** 02.06.2026 13:21:37
- **Üretim Süresi:** 154322 ms
- **Genel Skor:** 78/100
- **Karar Yöntemi:** Tahkim (J3)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3, x-ai/grok-4.3
- **J3 (Tahkimci) çağrılan metrikler:** Sürdürülebilirlik

## Kullanıcı Promptu

Design a responsive course video player layout. The left side should feature the main video player placeholder and video title. The right side must contain a scrollable curriculum sidebar with accordion-style modules and lessons. Use clean HTML and inline CSS. Do not write any explanations, output only the code.

## Üretilen Kod

```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Course Video Player</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background: #0f1117;
      color: #e4e4e7;
      height: 100vh;
      overflow: hidden;
    }

    .container {
      display: flex;
      height: 100vh;
      gap: 1px;
      background: #1a1c24;
    }

    /* Left Side - Video Player */
    .video-section {
      flex: 1;
      display: flex;
      flex-direction: column;
      background: #12141c;
      overflow-y: auto;
    }

    .video-wrapper {
      position: relative;
      width: 100%;
      aspect-ratio: 16 / 9;
      background: linear-gradient(145deg, #1a1c24 0%, #232636 50%, #1a1c24 100%);
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .video-wrapper:hover .play-btn {
      transform: translate(-50%, -50%) scale(1.1);
      box-shadow: 0 0 0 20px rgba(99, 102, 241, 0.15);
    }

    .video-wrapper::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 30% 40%, rgba(99, 102, 241, 0.08) 0%, transparent 50%);
      pointer-events: none;
    }

    .play-btn {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #6366f1 0%, #818cf8 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 30px rgba(99, 102, 241, 0.4);
      transition: all 0.3s ease;
      z-index: 2;
    }

    .play-btn::after {
      content: '';
      width: 0;
      height: 0;
      border-left: 24px solid #ffffff;
      border-top: 14px solid transparent;
      border-bottom: 14px solid transparent;
      margin-left: 6px;
    }

    .video-controls {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 20px 24px;
      background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .progress-bar {
      flex: 1;
      height: 4px;
      background: rgba(255,255,255,0.2);
      border-radius: 2px;
      overflow: hidden;
      cursor: pointer;
    }

    .progress-fill {
      width: 35%;
      height: 100%;
      background: linear-gradient(90deg, #6366f1, #818cf8);
      border-radius: 2px;
      position: relative;
    }

    .progress-fill::after {
      content: '';
      position: absolute;
      right: -6px;
      top: 50%;
      transform: translateY(-50%);
      width: 12px;
      height: 12px;
      background: #fff;
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.2s;
    }

    .progress-bar:hover .progress-fill::after {
      opacity: 1;
    }

    .time-display {
      font-size: 12px;
      color: rgba(255,255,255,0.8);
      font-variant-numeric: tabular-nums;
    }

    .control-icons {
      display: flex;
      gap: 12px;
      align-items: center;
    }

    .control-icon {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(255,255,255,0.8);
      cursor: pointer;
      transition: color 0.2s;
    }

    .control-icon:hover {
      color: #fff;
    }

    .video-info {
      padding: 24px 32px;
    }

    .video-title {
      font-size: 22px;
      font-weight: 600;
      color: #f4f4f5;
      margin-bottom: 12px;
      line-height: 1.4;
    }

    .video-meta {
      display: flex;
      align-items: center;
      gap: 24px;
      color: #a1a1aa;
      font-size: 14px;
      margin-bottom: 20px;
    }

    .video-meta span {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .video-meta .icon {
      width: 16px;
      height: 16px;
      opacity: 0.7;
    }

    .instructor {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px 0;
      border-top: 1px solid #272936;
    }

    .instructor-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: linear-gradient(135deg, #6366f1, #a855f7);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 14px;
      color: #fff;
    }

    .instructor-info h4 {
      font-size: 14px;
      font-weight: 500;
      color: #e4e4e7;
    }

    .instructor-info p {
      font-size: 12px;
      color: #71717a;
      margin-top: 2px;
    }

    /* Right Side - Curriculum Sidebar */
    .sidebar {
      width: 400px;
      background: #161822;
      display: flex;
      flex-direction: column;
      border-left: 1px solid #272936;
    }

    .sidebar-header {
      padding: 20px 24px;
      border-bottom: 1px solid #272936;
      background: #181a24;
    }

    .sidebar-header h3 {
      font-size: 16px;
      font-weight: 600;
      color: #f4f4f5;
      margin-bottom: 4px;
    }

    .sidebar-header p {
      font-size: 13px;
      color: #71717a;
    }

    .progress-overview {
      padding: 16px 24px;
      background: #181a24;
      border-bottom: 1px solid #272936;
    }

    .progress-stats {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }

    .progress-stats span {
      font-size: 13px;
      color: #a1a1aa;
    }

    .progress-stats strong {
      color: #6366f1;
      font-weight: 600;
    }

    .progress-track {
      height: 6px;
      background: #272936;
      border-radius: 3px;
      overflow: hidden;
    }

    .progress-track-fill {
      width: 28%;
      height: 100%;
      background: linear-gradient(90deg, #6366f1, #818cf8);
      border-radius: 3px;
    }

    .curriculum {
      flex: 1;
      overflow-y: auto;
      padding: 8px 0;
    }

    .curriculum::-webkit-scrollbar {
      width: 6px;
    }

    .curriculum::-webkit-scrollbar-track {
      background: transparent;
    }

    .curriculum::-webkit-scrollbar-thumb {
      background: #3f3f46;
      border-radius: 3px;
    }

    .curriculum::-webkit-scrollbar-thumb:hover {
      background: #52525b;
    }

    /* Accordion Module */
    .module {
      border-bottom: 1px solid #1f212e;
    }

    .module-header {
      padding: 16px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      transition: background 0.2s;
      user-select: none;
    }

    .module-header:hover {
      background: rgba(99, 102, 241, 0.05);
    }

    .module-header.active {
      background: rgba(99, 102, 241, 0.08);
    }

    .module-info {
      flex: 1;
    }

    .module-info h4 {
      font-size: 14px;
      font-weight: 600;
      color: #e4e4e7;
      margin-bottom: 4px;
    }

    .module-info span {
      font-size: 12px;
      color: #71717a;
    }

    .module-toggle {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #71717a;
      transition: transform 0.3s ease;
    }

    .module-header.active .module-toggle {
      transform: rotate(180deg);
    }

    .module-toggle svg {
      width: 16px;
      height: 16px;
    }

    .module-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s ease;
      background: #12141c;
    }

    .module-content.active {
      max-height: 1000px;
    }

    .lesson {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 24px 12px 32px;
      cursor: pointer;
      transition: all 0.2s;
      position: relative;
    }

    .lesson::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      background: transparent;
      transition: background 0.2s;
    }

    .lesson:hover {
      background: rgba(99, 102, 241, 0.06);
    }

    .lesson:hover::before {
      background: #6366f1;
    }

    .lesson.active {
      background: rgba(99, 102, 241, 0.1);
    }

    .lesson.active::before {
      background: #6366f1;
    }

    .lesson-icon {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 12px;
    }

    .lesson-icon.play {
      background: rgba(99, 102, 241, 0.2);
      color: #818cf8;
    }

    .lesson-icon.check {
      background: rgba(34, 197, 94, 0.2);
      color: #22c55e;
    }

    .lesson-icon.lock {
      background: rgba(113, 113, 122, 0.2);
      color: #71717a;
    }

    .lesson-info {
      flex: 1;
      min-width: 0;
    }

    .lesson-info h5 {
      font-size: 13px;
      font-weight: 500;
      color: #d4d4d8;
      margin-bottom: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .lesson.active .lesson-info h5 {
      color: #818cf8;
    }

    .lesson-info span {
      font-size: 11px;
      color: #52525b;
    }

    .lesson-duration {
      font-size: 12px;
      color: #71717a;
      flex-shrink: 0;
    }

    /* Responsive */
    @media (max-width: 1024px) {
      .sidebar {
        width: 340px;
      }
    }

    @media (max-width: 768px) {
      .container {
        flex-direction: column;
      }

      .video-section {
        height: auto;
      }

      .sidebar {
        width: 100%;
        height: 50vh;
        border-left: none;
        border-top: 1px solid #272936;
      }

      .video-info {
        padding: 16px 20px;
      }

      .video-title {
        font-size: 18px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Left Side - Video Player -->
    <div class="video-section">
      <div class="video-wrapper">
        <div class="play-btn"></div>
        <div class="video-controls">
          <div class="progress-bar">
            <div class="progress-fill"></div>
          </div>
          <span class="time-display">12:34 / 45:00</span>
          <div class="control-icons">
            <div class="control-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
            </div>
            <div class="control-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>
            </div>
            <div class="control-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            </div>
            <div class="control-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
            </div>
          </div>
        </div>
      </div>

      <div class="video-info">
        <h1 class="video-title">Introduction to Modern Web Development: Building Scalable Applications</h1>
        <div class="video-meta">
          <span>
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            12.4K views
          </span>
          <span>
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            Updated Dec 2024
          </span>
          <span>
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            48 comments
          </span>
        </div>
        <div class="instructor">
          <div class="instructor-avatar">JD</div>
          <div class="instructor-info">
            <h4>John Doe</h4>
            <p>Senior Software Engineer at TechCorp</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Side - Curriculum Sidebar -->
    <div class="sidebar">
      <div class="sidebar-header">
        <h3>Course Curriculum</h3>
        <p>6 modules · 24 lessons · 8h 32m total</p>
      </div>
      <div class="progress-overview">
        <div class="progress-stats">
          <span>Your progress</span>
          <span><strong>28%</strong> complete</span>
        </div>
        <div class="progress-track">
          <div class="progress-track-fill"></div>
        </div>
      </div>

      <div class="curriculum">
        <!-- Module 1 -->
        <div class="module">
          <div class="module-header active" onclick="toggleModule(this)">
            <div class="module-info">
              <h4>Module 1: Getting Started</h4>
              <span>4 lessons · 45 min</span>
            </div>
            <div class="module-toggle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
          </div>
          <div class="module-content active">
            <div class="lesson active">
              <div class="lesson-icon play">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
              <div class="lesson-info">
                <h5>Welcome to the Course</h5>
                <span>Now playing</span>
              </div>
              <span class="lesson-duration">12:34</span>
            </div>
            <div class="lesson">
              <div class="lesson-icon check">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div class="lesson-info">
                <h5>Setting Up Your Environment</h5>
                <span>Completed</span>
              </div>
              <span class="lesson-duration">15:20</span>
            </div>
            <div class="lesson">
              <div class="lesson-icon check">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div class="lesson-info">
                <h5>Project Structure & Architecture</h5>
                <span>Completed</span>
              </div>
              <span class="lesson-duration">10:45</span>
            </div>
            <div class="lesson">
              <div class="lesson-icon play">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
              <div class="lesson-info">
                <h5>Course Resources & Tools</h5>
                <span>Not started</span>
              </div>
              <span class="lesson-duration">6:21</span>
            </div>
          </div>
        </div>

        <!-- Module 2 -->
        <div class="module">
          <div class="module-header" onclick="toggleModule(this)">
            <div class="module-info">
              <h4>Module 2: HTML & CSS Fundamentals</h4>
              <span>5 lessons · 1h 12m</span>
            </div>
            <div class="module-toggle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
          </div>
          <div class="module-content">
            <div class="lesson">
              <div class="lesson-icon play">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
              <div class="lesson-info">
                <h5>Semantic HTML Deep Dive</h5>
                <span>Not started</span>
              </div>
              <span class="lesson-duration">18:30</span>
            </div>
            <div class="lesson">
              <div class="lesson-icon play">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
              <div class="lesson-info">
                <h5>Modern CSS Layouts with Grid</h5>
                <span>Not started</span>
              </div>
              <span class="lesson-duration">22:15</span>
            </div>
            <div class="lesson">
              <div class="lesson-icon play">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
              <div class="lesson-info">
                <h5>Flexbox Mastery</h5>
                <span>Not started</span>
              </div>
              <span class="lesson-duration">16:40</span>
            </div>
            <div class="lesson">
              <div class="lesson-icon play">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
              <div class="lesson-info">
                <h5>Responsive Design Principles</h5>
                <span>Not started</span>
              </div>
              <span class="lesson-duration">12:50</span>
            </div>
            <div class="lesson">
              <div class="lesson-icon play">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
              <div class="lesson-info">
                <h5>Custom Properties & Theming</h5>
                <span>Not started</span>
              </div>
              <span class="lesson-duration">22:10</span>
            </div>
          </div>
        </div>

        <!-- Module 3 -->
        <div class="module">
          <div class="module-header" onclick="toggleModule(this)">
            <div class="module-info">
              <h4>Module 3: JavaScript Essentials</h4>
              <span>6 lessons · 1h 45m</span>
            </div>
            <div class="module-toggle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
          </div>
          <div class="module-content">
            <div class="lesson">
              <div class="lesson-icon play">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
              <div class="lesson-info">
                <h5>ES6+ Modern Syntax</h5>
                <span>Not started</span>
              </div>
              <span class="lesson-duration">20:00</span>
            </div>
            <div class="lesson">
              <div class="lesson-icon play">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
              <div class="lesson-info">
                <h5>DOM Manipulation Patterns</h5>
                <span>Not started</span>
              </div>
              <span class="lesson-duration">25:30</span>
            </div>
            <div class="lesson">
              <div class="lesson-icon play">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
              <div class="lesson-info">
                <h5>Async JavaScript & Promises</h5>
                <span>Not started</span>
              </div>
              <span class="lesson-duration">28:15</span>
            </div>
            <div class="lesson">
              <div class="lesson-icon play">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
              <div class="lesson-info">
                <h5>Event Loop & Concurrency</h5>
                <span>Not started</span>
              </div>
              <span class="lesson-duration">18:40</span>
            </div>
```

## Hakem Skor Dökümü (J1 / J2 / J3)

| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |
|---|---|---|---|---|---|
| Okunabilirlik | 90 | 82 | — | **86** | Ortalama (J1-J2) |
| Performans | 96 | 88 | — | **92** | Ortalama (J1-J2) |
| Güvenlik | 100 | 95 | — | **98** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 35 | 60 | 42 | **42** | Medyan (J1·J2·J3) — tahkim |
| Prompt Uyumu | 78 | 65 | — | **72** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 86/100

**Öneriler:**
- `toggleModule` işlevini sayfada tanımlayın veya akordiyon işlevi için daha açıklayıcı bir yaklaşım (örn. data öznitelikleri ve olay dinleyicileri) kullanın.
- Modül ve ders tekrarlarını azaltmak için küçük bir şablon sistemi veya CSS değişkenleri kullanarak kodu daha kuru (DRY) hale getirin.
- `toggleModule(this)` için çağrılan JavaScript fonksiyonunu HTML'in sonuna ekleyin, aksi halde accordion davranışı havada kalır ve okunabilirlik düşer.
- Tekrarlanan SVG ikonlarını (play, check) `<symbol>`/`<use>` yapısıyla soyutlayarak HTML'i önemli ölçüde sadeleştirin.

### Performans — 92/100

**Öneriler:**
- `intersection observer` veya `content-visibility: auto` gibi tekniklerle çok uzun ders listelerinde lazy rendering uygulanabilir.
- Çok sayıda SVG inline kullanımı DOM boyutunu büyütüyorsa, dışarıdan sprite veya `<use>` ile yükleme düşünülebilir.
- 'transition: all' yerine yalnızca hedeflenen özellikleri (örn. 'transition: background 0.2s, color 0.2s') listeleyin.
- Akordeon için 'max-height' geçişi yerine 'grid-template-rows: 0fr -> 1fr' tekniğini veya içeriğe 'transform: translateY' + 'opacity' geçişi uygulamayı değerlendirin.

### Güvenlik — 98/100

**Öneriler:**
- Mevcut kodda güvenlik riski bulunmamaktadır. İleride etkileşim eklenirken `innerHTML` veya `eval()` kullanımından kaçınılmalıdır.
- Gelecekte sunucu entegrasyonu yapılırsa, API anahtarları istemci koduna gömülmemeli ve kullanıcı verileri güvenli yöntemlerle işlenmelidir.
- Modül açma/kapama için onclick inline handler yerine addEventListener kullanmak, ileride dinamik içerik eklendiğinde XSS yüzeyini azaltır
- Eğer ileride API entegrasyonu eklenirse, mutlaka Content Security Policy (CSP) meta etiketi tanımlayın ve dış kaynakları 'self' veya belirli origin'lerle sınırlandırın

### Sürdürülebilirlik — 42/100

**Öneriler:**
- Course verilerini (modül, ders, süre, durum) bir JavaScript veri yapısına (dizi veya obje) taşıyıp DOM'u bu veriyi döngüyle render edecek şekilde yeniden yapılandırın. Bu, yeni modül/ders eklemeyi tek satır veri girişine indirger.
- UI davranışlarını (accordion toggle, ders seçimi) HTML içindeki `onclick` yerine ayrı bir JavaScript dosyasında olay dinleyicileri (event listeners) ile yönetin. Bu, sunum ve mantık katmanlarını ayırarak hem test edilebilirliği hem de okunabilirliği artırır.
- CSS değişkenlerini (custom properties) kullanarak renk paletini ve tema değerlerini tek bir yerde tanımlayın (örn. --color-primary: #6366f1); bu, marka rengi değişikliklerini tek dosyada düzeltmeyi sağlar.
- Tekrar eden SVG ikonlarını ve module/lesson yapılarını bir template/loop (ör. JS template literals veya kısa bir data-driven render fonksiyonu) ile üretin; böylece yeni modül/lessons eklemek için HTML kopyala-yapıştır yapmak gerekmez.

### Prompt Uyumu — 72/100

- Programatik: 67/100 · Semantik: 95/100
- İhlaller: inline_css_not_detected

**Öneriler:**
- Ders listesindeki 'Welcome to the Course' vb. metinler tamamen yer tutucu olmasa da, gerçek bir video bağlantısı veya iframe eklenmediği için video oynatıcı tam anlamıyla işlevsel değil; production-ready beklentisini karşılamak için bir video embed (ör. YouTube embed) eklenmesi önerilir.
- Kodun tamamını (kalan 3 modülü ve gerekirse 4–6. modülleri) eksiksiz teslim edin, sidebar başlığında belirtilen içerikle tutarlı olun.
- `toggleModule` JavaScript fonksiyonunu (modül açma/kapama, `.active` sınıfı toggle'ı) tanımlayarak accordion etkileşimini gerçek anlamda çalışır hale getirin.


---

# Loomina Analiz Raporu — Gemini 3.5 Flash

- **Model:** `google/gemini-3.5-flash`
- **Tarih:** 02.06.2026 13:21:37
- **Üretim Süresi:** 33014 ms
- **Genel Skor:** 76/100
- **Karar Yöntemi:** Tahkim (J3)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3, x-ai/grok-4.3
- **J3 (Tahkimci) çağrılan metrikler:** Sürdürülebilirlik

## Kullanıcı Promptu

Design a responsive course video player layout. The left side should feature the main video player placeholder and video title. The right side must contain a scrollable curriculum sidebar with accordion-style modules and lessons. Use clean HTML and inline CSS. Do not write any explanations, output only the code.

## Üretilen Kod

```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Modern Course Player</title>
  <style>
    :root {
      --bg-main: #0f172a;
      --bg-card: #1e293b;
      --bg-hover: #334155;
      --accent: #6366f1;
      --accent-hover: #4f46e5;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --border: #334155;
      --success: #10b981;
      --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: var(--font-family);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    body {
      background-color: var(--bg-main);
      color: var(--text-main);
      height: 100vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    /* Header */
    header {
      background-color: var(--bg-card);
      border-bottom: 1px solid var(--border);
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 10;
    }

    .logo-area {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .logo-icon {
      background: linear-gradient(135deg, var(--accent), #a855f7);
      width: 36px;
      height: 36px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      color: #fff;
    }

    .logo-text {
      font-size: 1.25rem;
      font-weight: 700;
      letter-spacing: -0.025em;
    }

    .back-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.875rem;
      transition: color 0.2s;
    }

    .back-btn:hover {
      color: var(--text-main);
    }

    /* Main Container */
    .container {
      display: flex;
      flex: 1;
      overflow: hidden;
      position: relative;
    }

    @media (max-width: 1024px) {
      .container {
        flex-direction: column;
        overflow-y: auto;
      }
    }

    /* Left Side: Video Player Section */
    .video-section {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 2rem;
      overflow-y: auto;
      gap: 1.5rem;
    }

    @media (max-width: 1024px) {
      .video-section {
        flex: none;
        overflow-y: visible;
        padding: 1rem;
      }
    }

    .video-wrapper {
      position: relative;
      width: 100%;
      padding-top: 56.25%; /* 16:9 Aspect Ratio */
      background: radial-gradient(circle at center, #1e293b 0%, #0f172a 100%);
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.3);
      border: 1px solid var(--border);
    }

    .video-placeholder {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      group: hover;
    }

    .play-button {
      width: 80px;
      height: 80px;
      background: var(--accent);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 30px rgba(99, 102, 241, 0.4);
      transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.2s;
    }

    .video-placeholder:hover .play-button {
      transform: scale(1.1);
      background-color: var(--accent-hover);
    }

    .play-button svg {
      width: 32px;
      height: 32px;
      fill: #fff;
      transform: translateX(3px);
    }

    .video-duration-badge {
      position: absolute;
      bottom: 1.5rem;
      right: 1.5rem;
      background: rgba(15, 23, 42, 0.8);
      backdrop-filter: blur(8px);
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
      font-size: 0.875rem;
      font-weight: 500;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .video-meta {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .tags {
      display: flex;
      gap: 0.5rem;
    }

    .tag {
      background: rgba(99, 102, 241, 0.15);
      color: #a5b4fc;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .video-title {
      font-size: 1.75rem;
      font-weight: 800;
      line-height: 1.25;
      letter-spacing: -0.02em;
    }

    .video-desc {
      color: var(--text-muted);
      font-size: 1rem;
      line-height: 1.6;
      max-width: 800px;
    }

    /* Tabs Area */
    .tabs-container {
      margin-top: 1rem;
      border-bottom: 1px solid var(--border);
      display: flex;
      gap: 2rem;
    }

    .tab {
      padding: 1rem 0;
      color: var(--text-muted);
      font-weight: 600;
      font-size: 0.95rem;
      cursor: pointer;
      position: relative;
      transition: color 0.2s;
    }

    .tab.active {
      color: var(--accent);
    }

    .tab.active::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: var(--accent);
      border-radius: 2px;
    }

    /* Right Side: Scrollable Sidebar */
    .sidebar {
      width: 400px;
      background-color: var(--bg-card);
      border-left: 1px solid var(--border);
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    @media (max-width: 1024px) {
      .sidebar {
        width: 100%;
        height: auto;
        border-left: none;
        border-top: 1px solid var(--border);
      }
    }

    .sidebar-header {
      padding: 1.5rem;
      border-bottom: 1px solid var(--border);
    }

    .sidebar-title {
      font-size: 1.125rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .progress-container {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .progress-bar-bg {
      flex: 1;
      height: 6px;
      background-color: var(--border);
      border-radius: 3px;
      overflow: hidden;
    }

    .progress-bar-fill {
      height: 100%;
      width: 42%;
      background: linear-gradient(90deg, var(--accent), #a855f7);
      border-radius: 3px;
    }

    .progress-text {
      font-size: 0.825rem;
      color: var(--text-muted);
      font-weight: 600;
      white-space: nowrap;
    }

    .curriculum-list {
      flex: 1;
      overflow-y: auto;
    }

    /* Accordion Styles */
    .module-item {
      border-bottom: 1px solid var(--border);
    }

    .module-header {
      width: 100%;
      padding: 1.25rem 1.5rem;
      background-color: rgba(30, 41, 59, 0.5);
      border: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      text-align: left;
      color: var(--text-main);
      transition: background-color 0.2s;
    }

    .module-header:hover {
      background-color: rgba(30, 41, 59, 0.8);
    }

    .module-info {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      padding-right: 1rem;
    }

    .module-name {
      font-size: 0.95rem;
      font-weight: 600;
      line-height: 1.4;
    }

    .module-meta {
      font-size: 0.75rem;
      color: var(--text-muted);
    }

    .chevron-icon {
      width: 20px;
      height: 20px;
      fill: var(--text-muted);
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      flex-shrink: 0;
    }

    /* Modern Accordion Open/Close using CSS Grid */
    .module-lessons {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      background-color: rgba(15, 23, 42, 0.3);
    }

    .module-item.open .module-lessons {
      grid-template-rows: 1fr;
    }

    .module-item.open .chevron-icon {
      transform: rotate(180deg);
    }

    .lessons-inner {
      overflow: hidden;
    }

    /* Lesson Items */
    .lesson-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1rem 1.5rem;
      border-bottom: 1px solid rgba(51, 65, 85, 0.5);
      cursor: pointer;
      transition: background-color 0.2s, color 0.2s;
      text-decoration: none;
      color: var(--text-muted);
    }

    .lesson-item:hover {
      background-color: rgba(51, 65, 85, 0.3);
      color: var(--text-main);
    }

    .lesson-item.active {
      background-color: rgba(99, 102, 241, 0.1);
      color: var(--text-main);
      border-left: 3px solid var(--accent);
      padding-left: calc(1.5rem - 3px);
    }

    .status-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.125rem;
      flex-shrink: 0;
    }

    .status-icon svg {
      width: 16px;
      height: 16px;
    }

    .status-completed {
      fill: var(--success);
    }

    .status-playing {
      fill: var(--accent);
    }

    .status-locked {
      fill: var(--text-muted);
    }

    .lesson-details {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      flex: 1;
    }

    .lesson-title {
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.4;
    }

    .lesson-duration {
      display: flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.75rem;
      color: var(--text-muted);
    }

    .lesson-duration svg {
      width: 12px;
      height: 12px;
      fill: currentColor;
    }

    /* Custom Scrollbar for Sidebar */
    .curriculum-list::-webkit-scrollbar {
      width: 6px;
    }

    .curriculum-list::-webkit-scrollbar-track {
      background: transparent;
    }

    .curriculum-list::-webkit-scrollbar-thumb {
      background-color: var(--border);
      border-radius: 3px;
    }
  </style>
</head>
<body>

  <!-- Navigation Bar -->
  <header>
    <div class="logo-area">
      <div class="logo-icon">C</div>
      <span class="logo-text">CodexAcademy</span>
    </div>
    <a href="#" class="back-btn">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
      Back to Dashboard
    </a>
  </header>

  <!-- Main Layout -->
  <div class="container">
    
    <!-- Left: Video & Details -->
    <section class="video-section">
      <div class="video-wrapper">
        <div class="video-placeholder">
          <div class="play-button">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
          <span class="video-duration-badge">14:32</span>
        </div>
      </div>

      <div class="video-meta">
        <div class="tags">
          <span class="tag">Development</span>
          <span class="tag">Next.js</span>
        </div>
        <h1 class="video-title">Building Responsive Layouts with CSS Grid & Flexbox</h1>
        <p class="video-desc">
          In this module, we dive deep into building modern, highly responsive production-level layouts. We will cover the core architectures of Flexbox and CSS Grid, learn how to manage dynamic content heights, and handle complex real-world layouts with zero layout shifts.
        </p>
      </div>

      <!-- Video Tabs -->
      <div class="tabs-container">
        <div class="tab active">Overview</div>
        <div class="tab">Resources (3)</div>
        <div class="tab">Q&A</div>
        <div class="tab">Notes</div>
      </div>
    </section>

    <!-- Right: Curriculum Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-header">
        <h2 class="sidebar-title">Course Curriculum</h2>
        <div class="progress-container">
          <div class="progress-bar-bg">
            <div class="progress-bar-fill"></div>
          </div>
          <span class="progress-text">5 / 12 Lessons</span>
        </div>
      </div>

      <div class="curriculum-list">

        <!-- Module 1 (Completed / Open) -->
        <div class="module-item open">
          <button class="module-header" onclick="toggleModule(this)">
            <div class="module-info">
              <span class="module-name">Module 1: Getting Started</span>
              <span class="module-meta">3 Lessons • 28 mins</span>
            </div>
            <svg class="chevron-icon" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
          </button>
          <div class="module-lessons">
            <div class="lessons-inner">
              
              <div class="lesson-item">
                <div class="status-icon">
                  <svg class="status-completed" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                </div>
                <div class="lesson-details">
                  <span class="lesson-title">1. Course Introduction & Goals</span>
                  <span class="lesson-duration">
                    <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                    04:12
                  </span>
                </div>
              </div>

              <div class="lesson-item">
                <div class="status-icon">
                  <svg class="status-completed" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                </div>
                <div class="lesson-details">
                  <span class="lesson-title">2. Setting Up Your Development Workspace</span>
                  <span class="lesson-duration">
                    <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                    12:45
                  </span>
                </div>
              </div>

              <div class="lesson-item">
                <div class="status-icon">
                  <svg class="status-completed" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                </div>
                <div class="lesson-details">
                  <span class="lesson-title">3. Understanding Modern CSS Layouts</span>
                  <span class="lesson-duration">
                    <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                    11:20
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- Module 2 (Active / Open) -->
        <div class="module-item open">
          <button class="module-header" onclick="toggleModule(this)">
            <div class="module-info">
              <span class="module-name">Module 2: Advanced Layout Design</span>
              <span class="module-meta">4 Lessons • 54 mins</span>
            </div>
            <svg class="chevron-icon" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
          </button>
          <div class="module-lessons">
            <div class="lessons-inner">

              <div class="lesson-item">
                <div class="status-icon">
                  <svg class="status-completed" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                </div>
                <div class="lesson-details">
                  <span class="lesson-title">4. Deep Dive: CSS Flexbox Architecture</span>
                  <span class="lesson-duration">
                    <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                    15:10
                  </span>
                </div>
              </div>

              <div class="lesson-item active">
                <div class="status-icon">
                  <svg class="status-playing" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                </div>
                <div class="lesson-details">
                  <span class="lesson-title">5. Building Responsive Layouts with CSS Grid</span>
                  <span class="lesson-duration">
                    <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                    14:32
                  </span>
                </div>
              </div>

              <div class="lesson-item">
                <div class="status-icon">
                  <svg class="status-locked" viewBox="0 0 24 24">
```

## Hakem Skor Dökümü (J1 / J2 / J3)

| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |
|---|---|---|---|---|---|
| Okunabilirlik | 88 | 82 | — | **85** | Ortalama (J1-J2) |
| Performans | 95 | 82 | — | **89** | Ortalama (J1-J2) |
| Güvenlik | 98 | 90 | — | **94** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 25 | 55 | 38 | **38** | Medyan (J1·J2·J3) — tahkim |
| Prompt Uyumu | 78 | 69 | — | **74** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 85/100

**Öneriler:**
- Tanımsız 'toggleModule' fonksiyonunu sağlayın veya referansı kaldırın.
- 'group: hover;' gibi geçersiz CSS kuralını düzeltin veya kaldırın.
- `.video-placeholder` içindeki geçersiz `group: hover;` satırını kaldırın; yinelenen SVG ikonlarını bir CSS sprite veya <symbol>/<use> yapısıyla soyutlayarak DRY ihlalini azaltın.

### Performans — 89/100

**Öneriler:**
- Accordion işlevselliği için 'onclick' içinde çağrılan 'toggleModule' fonksiyonu tanımlanmamış; bu durum konsol hatasına neden olur. İlgili fonksiyonu bir script bloğunda tanımlayın veya işlevselliği kaldırın.
- Sayfanın performansı üzerinde ölçülebilir bir etkisi olmamakla birlikte, büyük SVG path'leri ve tekrarlanan yapısal bloklar (ders satırları) için bir template veya JavaScript loop mekanizması kullanılarak HTML boyutu küçültülebilir ve bakımı kolaylaştırılabilir.
- Tekrar eden SVG ikonlarını (status-completed, status-locked, saat ikonu) tek bir <svg><symbol> sprite'ında toplayıp <use href="#icon-clock"/> ile referans vererek DOM boyutunu ve parse süresini azaltın.
- backdrop-filter: blur(8px) yerine video-duration-badge için yarı-opak düz arka plan + ince border kullanarak GPU paint maliyetinden kaçının.

### Güvenlik — 94/100

**Öneriler:**
- Dahili onclick olay dinleyicileri (inline event handlers) yerine gerçek geliştirmede addEventListener kullanmak Content Security Policy (CSP) uyumluluğunu artırır, ancak mevcut statik demo için acil bir risk değildir.
- Header'daki back linki href='#' yerine gerçek bir URL'ye yönlendirilmeli veya client-side router ile değiştirilmelidir.
- Eğer ileride dinamik içerik eklenirse, kullanıcı girdilerini render etmeden önce DOMPurify veya framework'ün kendi escaping mekanizması ile sanitize edin.
- Bir meta CSP (Content-Security-Policy) etiketi ekleyerek inline script ve stil kullanımını kısıtlayarak ek bir savunma katmanı oluşturun.

### Sürdürülebilirlik — 38/100

**Öneriler:**
- Veri (modüller, dersler) sabit bir JavaScript dizisine çıkarılıp haritalanarak render'lanmalı, böylece tek kaynaktan yönetilebilir.
- Acordion toggle, içerik listesi ve ilerleme çubuğu gibi tekrar eden yapılar, işlevselliği merkezileştiren ve test edilebilirliği kolaylaştıran bağımsız fonksiyon/hook'lara ayrılmalıdır.
- Her ders (lesson) öğesini bir `<template>` ile soyutlayıp `cloneNode` ile çoğaltın ya da veriyi JS dizisinden render edin; bu sayede ekleme/değişiklik tek noktadan yapılır.
- Eksik bırakılan `toggleModule` fonksiyonunu ve tüm SVG path'lerini tamamlayın; ayrıca medya sorguları ve tema değişkenlerini modüllere (örn. `tokens.css`, `layout.css`) ayırarak tek dosya bağımlılığını azaltın.

### Prompt Uyumu — 74/100

- Programatik: 67/100 · Semantik: 95/100
- İhlaller: inline_css_not_detected

**Öneriler:**
- Sidebar'daki modül başlıklarının tıklanabilirliğini daha belirgin hale getirmek için hover durumunda imleci 'pointer' yapabilirsiniz.
- Video placeholder'ı gerçek bir video oynatıcıya dönüştürüldüğünde, erişilebilirlik için klavye ile oynat/duraklat desteği eklenmelidir.
- toggleModule(this) için gerekli JavaScript fonksiyonunu <script> bloğu içinde tanımlayın (classList toggle ile .open ekleyip kaldırmalı).
- Kodun sonunu kapatın: eksik kalan Module 3'ü, kalan lesson'ları ve status-locked SVG path'ini tamamlayın, böylece üretime hazır bütünlüklü bir çıktı elde edin.
