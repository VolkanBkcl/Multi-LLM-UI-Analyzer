# Loomina — Model Karşılaştırma Raporu

- **Tarih:** 02.06.2026 15:04:30
- **Karşılaştırılan Model Sayısı:** 3

## Kullanıcı Promptu

Design a responsive drag-and-drop Kanban board layout. It should feature 3 distinct columns ('To Do', 'In Progress', 'Done'). Each column needs a header with a task count and should contain at least 2 placeholder task cards. Place a 'Create New Task' input field at the top. Use clean HTML and inline CSS. Do not write any explanations, output only the code.

## Karşılaştırma Tablosu

| Model | Genel | Okunabilirlik | Performans | Güvenlik | Sürdürülebilirlik | Prompt Uyumu |
|---|---|---|---|---|---|---|
| DeepSeek V4 Pro | 75 | 82 | 71 | 90 | 37 | 97 |
| Qwen3.6 Plus | 59 | 58 | 87 | 15 | 34 | 99 |
| Gemini 3.5 Flash | 78 | 90 | 89 | 84 | 46 | 79 |

---

# Loomina Analiz Raporu — DeepSeek V4 Pro

- **Model:** `deepseek/deepseek-v4-pro`
- **Tarih:** 02.06.2026 15:04:30
- **Üretim Süresi:** 114849.5 ms
- **Genel Skor:** 75/100
- **Karar Yöntemi:** Konsensüs (iki hakem ortalaması)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3
- **J3 (Tahkimci) çağrılan metrikler:** Yok — iki hakem tüm metriklerde uzlaştı.

## Kullanıcı Promptu

Design a responsive drag-and-drop Kanban board layout. It should feature 3 distinct columns ('To Do', 'In Progress', 'Done'). Each column needs a header with a task count and should contain at least 2 placeholder task cards. Place a 'Create New Task' input field at the top. Use clean HTML and inline CSS. Do not write any explanations, output only the code.

## Üretilen Kod

```html
<iframe srcdoc="<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Kanban Board</title>
</head>
<body style='margin:0; padding:0; font-family: "Segoe UI", system-ui, -apple-system, sans-serif; background: linear-gradient(135deg, #f0f4f8 0%, #e2e8f0 30%, #f0f4f8 60%, #e8edf5 100%); background-attachment: fixed; min-height: 100vh; display: flex; flex-direction: column; align-items: center; box-sizing: border-box;'>

    <div style='width: 100%; max-width: 1300px; padding: 32px 24px 0 24px; box-sizing: border-box;'>
        <!-- Header -->
        <div style='display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; margin-bottom: 28px;'>
            <div>
                <h1 style='margin:0; font-size: 28px; font-weight: 700; color: #1a202c; letter-spacing: -0.5px;'>📋 Proje Panosu</h1>
                <p style='margin:4px 0 0 0; font-size: 14px; color: #64748b; font-weight: 400;'>Görevleri sürükleyerek durumlarını güncelleyin</p>
            </div>
            <div style='display: flex; align-items: center; gap: 10px; flex-wrap: wrap;'>
                <span id='totalCount' style='background: #1e293b; color:#fff; padding:8px 16px; border-radius: 24px; font-size: 13px; font-weight: 600; letter-spacing: 0.3px; box-shadow: 0 2px 8px rgba(30,41,59,0.25);'>Toplam: 7 görev</span>
            </div>
        </div>

        <!-- Create New Task Input -->
        <div style='display: flex; gap: 10px; margin-bottom: 28px; background: #fff; padding: 8px 8px 8px 20px; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04); align-items: center; transition: box-shadow 0.25s ease;' onmouseover='this.style.boxShadow="0 8px 30px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.06)"' onmouseout='this.style.boxShadow="0 4px 20px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)"'>
            <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#94a3b8' stroke-width='2.5' stroke-linecap='round' style='flex-shrink:0;'><line x1='12' y1='5' x2='12' y2='19'/><line x1='5' y1='12' x2='19' y2='12'/></svg>
            <input id='taskInput' type='text' placeholder='Yeni görev ekleyin ve Enter tuşuna basın...' 
                style='flex:1; border:none; outline:none; font-size:15px; color:#334155; background:transparent; padding:10px 4px; font-family: inherit; letter-spacing: 0.2px;'
                onkeydown='if(event.key==="Enter"){addTask();}'>
            <button onclick='addTask()' style='background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); color:#fff; border:none; padding:12px 24px; border-radius: 12px; font-size:14px; font-weight: 600; cursor:pointer; letter-spacing: 0.3px; transition: all 0.2s ease; box-shadow: 0 4px 14px rgba(99,102,241,0.35); white-space:nowrap; font-family: inherit;'
                onmouseover='this.style.transform="translateY(-1px)";this.style.boxShadow="0 6px 20px rgba(99,102,241,0.45)"'
                onmouseout='this.style.transform="translateY(0)";this.style.boxShadow="0 4px 14px rgba(99,102,241,0.35)"'
                onmousedown='this.style.transform="scale(0.97)"'
                onmouseup='this.style.transform="scale(1)"'
            >+ Ekle</button>
        </div>
    </div>

    <!-- Kanban Board -->
    <div style='width:100%; max-width:1300px; padding:0 24px 40px 24px; box-sizing:border-box; display:grid; grid-template-columns: repeat(3, 1fr); gap: 20px; align-items: start;' id='board'>

        <!-- To Do Column -->
        <div class='column' data-column='todo' 
            style='background: #ffffff; border-radius: 18px; padding: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03); display:flex; flex-direction:column; gap:12px; min-height: 400px; transition: box-shadow 0.3s ease, background 0.3s ease; border-top: 4px solid #f59e0b;'
            ondragover='handleDragOver(event)' ondragleave='handleDragLeave(event)' ondrop='handleDrop(event)'>
            <div style='display:flex; align-items:center; justify-content:space-between; margin-bottom:4px;'>
                <div style='display:flex; align-items:center; gap:10px;'>
                    <div style='width:10px; height:10px; border-radius:50%; background:#f59e0b; box-shadow: 0 0 8px rgba(245,158,11,0.5);'></div>
                    <h2 style='margin:0; font-size:16px; font-weight:700; color:#1e293b; letter-spacing:-0.3px;'>To Do</h2>
                    <span class='count-badge' style='background:#fef3c7; color:#b45309; padding:4px 11px; border-radius:14px; font-size:12px; font-weight:700; letter-spacing:0.2px;'>2</span>
                </div>
                <span style='font-size:20px; opacity:0.5;'>📌</span>
            </div>
            <div class='card' draggable='true' data-id='1' 
                style='background: #fefce8; border:1px solid #fef3c7; border-radius:12px; padding:15px 16px; cursor:grab; transition: all 0.2s ease; box-shadow: 0 1px 3px rgba(0,0,0,0.04); position:relative;'
                ondragstart='handleDragStart(event)' ondragend='handleDragEnd(event)'
                onmouseover='this.style.transform="translateY(-2px)";this.style.boxShadow="0 8px 25px rgba(0,0,0,0.08)"'
                onmouseout='this.style.transform="translateY(0)";this.style.boxShadow="0 1px 3px rgba(0,0,0,0.04)"'>
                <div style='display:flex; justify-content:space-between; align-items:flex-start;'>
                    <span style='font-weight:600; font-size:14px; color:#1e293b;'>Tasarım mockuplarını hazırla</span>
                    <span style='font-size:11px; color:#94a3b8; background:#f1f5f9; padding:3px 8px; border-radius:10px; font-weight:600; white-space:nowrap;'>🔴 Yüksek</span>
                </div>
                <p style='margin:6px 0 0 0; font-size:12px; color:#64748b; line-height:1.4;'>Ana sayfa ve dashboard için Figma tasarımları oluşturulacak.</p>
            </div>
            <div class='card' draggable='true' data-id='2' 
                style='background: #fefce8; border:1px solid #fef3c7; border-radius:12px; padding:15px 16px; cursor:grab; transition: all 0.2s ease; box-shadow: 0 1px 3px rgba(0,0,0,0.04); position:relative;'
                ondragstart='handleDragStart(event)' ondragend='handleDragEnd(event)'
                onmouseover='this.style.transform="translateY(-2px)";this.style.boxShadow="0 8px 25px rgba(0,0,0,0.08)"'
                onmouseout='this.style.transform="translateY(0)";this.style.boxShadow="0 1px 3px rgba(0,0,0,0.04)"'>
                <div style='display:flex; justify-content:space-between; align-items:flex-start;'>
                    <span style='font-weight:600; font-size:14px; color:#1e293b;'>API dokümantasyonu yaz</span>
                    <span style='font-size:11px; color:#94a3b8; background:#f1f5f9; padding:3px 8px; border-radius:10px; font-weight:600; white-space:nowrap;'>🟡 Orta</span>
                </div>
                <p style='margin:6px 0 0 0; font-size:12px; color:#64748b; line-height:1.4;'>REST API endpointleri için Swagger/OpenAPI dokümanı hazırlanacak.</p>
            </div>
        </div>

        <!-- In Progress Column -->
        <div class='column' data-column='inprogress' 
            style='background: #ffffff; border-radius: 18px; padding: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03); display:flex; flex-direction:column; gap:12px; min-height: 400px; transition: box-shadow 0.3s ease, background 0.3s ease; border-top: 4px solid #3b82f6;'
            ondragover='handleDragOver(event)' ondragleave='handleDragLeave(event)' ondrop='handleDrop(event)'>
            <div style='display:flex; align-items:center; justify-content:space-between; margin-bottom:4px;'>
                <div style='display:flex; align-items:center; gap:10px;'>
                    <div style='width:10px; height:10px; border-radius:50%; background:#3b82f6; box-shadow: 0 0 8px rgba(59,130,246,0.5);'></div>
                    <h2 style='margin:0; font-size:16px; font-weight:700; color:#1e293b; letter-spacing:-0.3px;'>In Progress</h2>
                    <span class='count-badge' style='background:#dbeafe; color:#1e40af; padding:4px 11px; border-radius:14px; font-size:12px; font-weight:700; letter-spacing:0.2px;'>3</span>
                </div>
                <span style='font-size:20px; opacity:0.5;'>⚙️</span>
            </div>
            <div class='card' draggable='true' data-id='3' 
                style='background: #eff6ff; border:1px solid #dbeafe; border-radius:12px; padding:15px 16px; cursor:grab; transition: all 0.2s ease; box-shadow: 0 1px 3px rgba(0,0,0,0.04); position:relative;'
                ondragstart='handleDragStart(event)' ondragend='handleDragEnd(event)'
                onmouseover='this.style.transform="translateY(-2px)";this.style.boxShadow="0 8px 25px rgba(0,0,0,0.08)"'
                onmouseout='this.style.transform="translateY(0)";this.style.boxShadow="0 1px 3px rgba(0,0,0,0.04)"'>
                <div style='display:flex; justify-content:space-between; align-items:flex-start;'>
                    <span style='font-weight:600; font-size:14px; color:#1e293b;'>Kullanıcı giriş modülü geliştir</span>
                    <span style='font-size:11px; color:#94a3b8; background:#f1f5f9; padding:3px 8px; border-radius:10px; font-weight:600; white-space:nowrap;'>🔴 Yüksek</span>
                </div>
                <p style='margin:6px 0 0 0; font-size:12px; color:#64748b; line-height:1.4;'>JWT tabanlı auth sistemi ve şifre sıfırlama akışı kodlanıyor.</p>
            </div>
            <div class='card' draggable='true' data-id='4' 
                style='background: #eff6ff; border:1px solid #dbeafe; border-radius:12px; padding:15px 16px; cursor:grab; transition: all 0.2s ease; box-shadow: 0 1px 3px rgba(0,0,0,0.04); position:relative;'
                ondragstart='handleDragStart(event)' ondragend='handleDragEnd(event)'
                onmouseover='this.style.transform="translateY(-2px)";this.style.boxShadow="0 8px 25px rgba(0,0,0,0.08)"'
                onmouseout='this.style.transform="translateY(0)";this.style.boxShadow="0 1px 3px rgba(0,0,0,0.04)"'>
                <div style='display:flex; justify-content:space-between; align-items:flex-start;'>
                    <span style='font-weight:600; font-size:14px; color:#1e293b;'>Veritabanı şeması oluştur</span>
                    <span style='font-size:11px; color:#94a3b8; background:#f1f5f9; padding:3px 8px; border-radius:10px; font-weight:600; white-space:nowrap;'>🟡 Orta</span>
                </div>
                <p style='margin:6px 0 0 0; font-size:12px; color:#64748b; line-height:1.4;'>PostgreSQL migration dosyaları ve seed data hazırlanıyor.</p>
            </div>
            <div class='card' draggable='true' data-id='5' 
                style='background: #eff6ff; border:1px solid #dbeafe; border-radius:12px; padding:15px 16px; cursor:grab; transition: all 0.2s ease; box-shadow: 0 1px 3px rgba(0,0,0,0.04); position:relative;'
                ondragstart='handleDragStart(event)' ondragend='handleDragEnd(event)'
                onmouseover='this.style.transform="translateY(-2px)";this.style.boxShadow="0 8px 25px rgba(0,0,0,0.08)"'
                onmouseout='this.style.transform="translateY(0)";this.style.boxShadow="0 1px 3px rgba(0,0,0,0.04)"'>
                <div style='display:flex; justify-content:space-between; align-items:flex-start;'>
                    <span style='font-weight:600; font-size:14px; color:#1e293b;'>CI/CD pipeline kurulumu</span>
                    <span style='font-size:11px; color:#94a3b8; background:#f1f5f9; padding:3px 8px; border-radius:10px; font-weight:600; white-space:nowrap;'>🟢 Düşük</span>
                </div>
                <p style='margin:6px 0 0 0; font-size:12px; color:#64748b; line-height:1.4;'>GitHub Actions ile test ve deploy otomasyonu yapılandırılıyor.</p>
            </div>
        </div>

        <!-- Done Column -->
        <div class='column' data-column='done' 
            style='background: #ffffff; border-radius: 18px; padding: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03); display:flex; flex-direction:column; gap:12px; min-height: 400px; transition: box-shadow 0.3s ease, background 0.3s ease; border-top: 4px solid #10b981;'
            ondragover='handleDragOver(event)' ondragleave='handleDragLeave(event)' ondrop='handleDrop(event)'>
            <div style='display:flex; align-items:center; justify-content:space-between; margin-bottom:4px;'>
                <div style='display:flex; align-items:center; gap:10px;'>
                    <div style='width:10px; height:10px; border-radius:50%; background:#10b981; box-shadow: 0 0 8px rgba(16,185,129,0.5);'></div>
                    <h2 style='margin:0; font-size:16px; font-weight:700; color:#1e293b; letter-spacing:-0.3px;'>Done</h2>
                    <span class='count-badge' style='background:#d1fae5; color:#065f46; padding:4px 11px; border-radius:14px; font-size:12px; font-weight:700; letter-spacing:0.2px;'>2</span>
                </div>
                <span style='font-size:20px; opacity:0.5;'>✅</span>
            </div>
            <div class='card' draggable='true' data-id='6' 
                style='background: #f0fdf4; border:1px solid #d1fae5; border-radius:12px; padding:15px 16px; cursor:grab; transition: all 0.2s ease; box-shadow: 0 1px 3px rgba(0,0,0,0.04); position:relative;'
                ondragstart='handleDragStart(event)' ondragend='handleDragEnd(event)'
                onmouseover='this.style.transform="translateY(-2px)";this.style.boxShadow="0 8px 25px rgba(0,0,0,0.08)"'
                onmouseout='this.style.transform="translateY(0)";this.style.boxShadow="0 1px 3px rgba(0,0,0,0.04)"'>
                <div style='display:flex; justify-content:space-between; align-items:flex-start;'>
                    <span style='font-weight:600; font-size:14px; color:#1e293b; text-decoration:line-through; text-decoration-color:#10b981; text-decoration-thickness:2px;'>Proje başlangıç toplantısı</span>
                    <span style='font-size:11px; color:#94a3b8; background:#f1f5f9; padding:3px 8px; border-radius:10px; font-weight:600; white-space:nowrap;'>✅ Tamam</span>
                </div>
                <p style='margin:6px 0 0 0; font-size:12px; color:#64748b; line-height:1.4;'>Tüm paydaşlarla gereksinimler netleştirildi ve onay alındı.</p>
            </div>
            <div class='card' draggable='true' data-id='7' 
                style='background: #f0fdf4; border:1px solid #d1fae5; border-radius:12px; padding:15px 16px; cursor:grab; transition: all 0.2s ease; box-shadow: 0 1px 3px rgba(0,0,0,0.04); position:relative;'
                ondragstart='handleDragStart(event)' ondragend='handleDragEnd(event)'
                onmouseover='this.style.transform="translateY(-2px)";this.style.boxShadow="0 8px 25px rgba(0,0,0,0.08)"'
                onmouseout='this.style.transform="translateY(0)";this.style.boxShadow="0 1px 3px rgba(0,0,0,0.04)"'>
                <div style='display:flex; justify-content:space-between; align-items:flex-start;'>
                    <span style='font-weight:600; font-size:14px; color:#1e293b; text-decoration:line-through; text-decoration-color:#10b981; text-decoration-thickness:2px;'>Repo yapılandırması</span>
                    <span style='font-size:11px; color:#94a3b8; background:#f1f5f9; padding:3px 8px; border-radius:10px; font-weight:600; white-space:nowrap;'>✅ Tamam</span>
                </div>
                <p style='margin:6px 0 0 0; font-size:12px; color:#64748b; line-height:1.4;'>Monorepo yapısı, linting kuralları ve branch stratejisi belirlendi.</p>
            </div>
        </div>
    </div>

    <script>
        let draggedCard = null;
        let nextId = 8;
        const priorityOptions = ['🔴 Yüksek', '🟡 Orta', '🟢 Düşük'];
        const columnColors = {
            'todo': { bg: '#fefce8', border: '#fef3c7' },
            'inprogress': { bg: '#eff6ff', border: '#dbeafe' },
            'done': { bg: '#f0fdf4', border: '#d1fae5' }
        };

        function handleDragStart(e) {
            draggedCard = e.target.closest('.card');
            if (!draggedCard) return;
            draggedCard.style.opacity = '0.5';
            draggedCard.style.transform = 'scale(0.95) rotate(1deg)';
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', draggedCard.dataset.id);
        }

        function handleDragEnd(e) {
            if (draggedCard) {
                draggedCard.style.opacity = '1';
                draggedCard.style.transform = '';
            }
            draggedCard = null;
            document.querySelectorAll('.column').forEach(col => {
                col.style.background = '#ffffff';
                col.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03)';
                col.style.transform = '';
            });
        }

        function handleDragOver(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            const column = e.target.closest('.column');
            if (column) {
                column.style.background = '#f8fafc';
                column.style.boxShadow = '0 8px 30px rgba(99,102,241,0.12), 0 2px 6px rgba(99,102,241,0.06)';
                column.style.transform = 'scale(1.01)';
            }
        }

        function handleDragLeave(e) {
            const column = e.target.closest('.column');
            if (column && !column.contains(e.relatedTarget)) {
                column.style.background = '#ffffff';
                column.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03)';
                column.style.transform = '';
            }
        }

        function handleDrop(e) {
            e.preventDefault();
            const column = e.target.closest('.column');
            if (!column || !draggedCard) return;

            column.style.background = '#ffffff';
            column.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03)';
            column.style.transform = '';

            const colType = column.dataset.column;
            const colColor = columnColors[colType];

            draggedCard.style.background = colColor.bg;
            draggedCard.style.border = '1px solid ' + colColor.border;

            const titleSpan = draggedCard.querySelector('div:first-child span:first-child');
            if (colType === 'done') {
                titleSpan.style.textDecoration = 'line-through';
                titleSpan.style.textDecorationColor = '#10b981';
                titleSpan.style.textDecorationThickness = '2px';
            } else {
                titleSpan.style.textDecoration = '';
                titleSpan.style.textDecorationColor = '';
                titleSpan.style.textDecorationThickness = '';
            }

            column.appendChild(draggedCard);
            updateAllCounts();
        }

        function updateAllCounts() {
            const columns = document.querySelectorAll('.column');
            let total = 0;
            columns.forEach(col => {
                const cards = col.querySelectorAll('.card');
                const count = cards.length;
                total += count;
                const badge = col.querySelector('.count-badge');
                if (badge) badge.textContent = count;
            });
            const totalEl = document.getElementById('totalCount');
            if (totalEl) totalEl.textContent = 'Toplam: ' + total + ' görev';
        }

        function addTask() {
            const input = document.getElementById('taskInput');
            const taskText = input.value.trim();
            if (!taskText) { input.focus(); return; }

            const todoColumn = document.querySelector('[data-column="todo"]');
            const colColor = columnColors['todo'];
            const randomPriority = priorityOptions[Math.floor(Math.random() * priorityOptions.length)];
            const id = nextId++;

            const card = document.createElement('div');
            card.className = 'card';
            card.draggable = true;
            card.dataset.id = id;
            card.style.cssText = 'background: ' + colColor.bg + '; border:1px solid ' + colColor.border + '; border-radius:12px; padding:15px 16px; cursor:grab; transition: all 0.2s ease; box-shadow: 0 1px 3px rgba(0,0,0,0.04); position:relative; animation: slideIn 0.35s ease-out;';
            card.innerHTML = `
                <div style='display:flex; justify-content:space-between; align-items:flex-start;'>
                    <span style='font-weight:600; font-size:14px; color:#1e293b;'>${escapeHtml(taskText)}</span>
                    <span style='font-size:11px; color:#94a3b8; background:#f1f5f9; padding:3px 8px; border-radius:10px; font-weight:600; white-space:nowrap;'>${randomPriority}</span>
                </div>
                <p style='margin:6px 0 0 0; font-size:12px; color:#64748b; line-height:1.4;'>Yeni eklenen görev — detay eklemek için tıklayın.</p>
            `;
            card.addEventListener('dragstart', handleDragStart);
            card.addEventListener('dragend', handleDragEnd);
            card.addEventListener('mouseover', function(){ this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(0,0,0,0.08)'; });
            card.addEventListener('mouseout', function(){ this.style.transform='translateY(0)'; this.style.boxShadow='0 1px 3px rgba(0,0,0,0.04)'; });

            todoColumn.appendChild(card);
            input.value = '';
            input.focus();
            updateAllCounts();

            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            @keyframes slideIn {
                from { opacity: 0; transform: translateY(-20px) scale(0.95); }
                to { opacity: 1; transform: translateY(0) scale(1); }
            }
            .card:active { cursor: grabbing !important; }
            @media (max-width: 900px) {
                #board {
                    grid-template-columns: 1fr !important;
                }
            }
            @media (min-width: 901px) and (max-width: 1100px) {
                #board {
                    grid-template-columns: repeat(3, 1fr) !important;
                    gap: 14px !important;
                }
            }
        `;
        document.head.appendChild(styleSheet);

        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('dragstart', handleDragStart);
            card.addEventListener('dragend', handleDragEnd);
        });

        updateAllCounts();
    </script>
</body>
</html>" style="width:100%; height:100vh; border:none; overflow:auto;" sandbox="allow-scripts allow-same-origin">
</iframe>
```

## Hakem Skor Dökümü (J1 / J2 / J3)

| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |
|---|---|---|---|---|---|
| Okunabilirlik | 82 | 82 | — | **82** | Ortalama (J1-J2) |
| Performans | 80 | 62 | — | **71** | Ortalama (J1-J2) |
| Güvenlik | 95 | 85 | — | **90** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 28 | 45 | — | **37** | Ortalama (J1-J2) |
| Prompt Uyumu | 98 | 95 | — | **97** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 82/100

**Öneriler:**
- Stillleri ayrı bir <style> bloğuna veya harici CSS dosyasına taşıyarak yapı ve sunumu ayırın.
- Ortak kart ve sütun stilleri için CSS sınıfları oluşturarak HTML içindeki tekrarları azaltın.
- Kart hover efektleri ve ortak kart stilleri için CSS class'ları (.card, .card:hover) tanımlayıp inline style tekrarını azaltın, böylece yapı daha kısa ve bakımı kolay olur.
- Yeni kart eklerken addEventListener ile yapılan mouseover/mouseout atamalarını bir initCardEvents(card) helper fonksiyonuna çıkararak kod tekrarını önleyin.

### Performans — 71/100

**Öneriler:**
- Kartlara aynı olay için hem inline hem de addEventListener ile çift dinleyici eklemeyin; yalnızca bir yöntemi kullanarak tutarlı ve verimli event binding yapın.
- Yeni eklenen kartlarla mevcut kartlar arasında event dinleyici yönetimini birleştirerek kod tekrarını ve olası bellek tüketimini azaltın.
- handleDragOver içindeki style mutasyonlarını throttle/requestAnimationFrame ile sınırlayın; sadece class toggle ile sürükleme vurgusunu yönetin (her fare olayında reflow yerine).
- mouseover/mouseout yerine mouseenter/mouseleave kullanın; event delegation ile drag ve hover handler'larını column seviyesinde toplayıp dinamik eklenen kartlar için tekrar listener bağlamayın.

### Güvenlik — 90/100

**Öneriler:**
- Görev metni için maksimum karakter sınırı ekleyerek aşırı uzun girdileri engelleyebilirsiniz.
- Input alanına `maxlength` (örn. 200) ve daha katı format doğrulaması ekleyerek potansiyel DoS ve injection yüzeyini daraltın.
- `escapeHtml` fonksiyonunu doğrudan bir replace haritası (div.innerHTML yaklaşımı yerine) ile yazarak bağımlılık yüzeyini azaltın ve içerikteki satır sonu gibi kontrol karakterlerini de temizleyin.

### Sürdürülebilirlik — 37/100

**Öneriler:**
- JavaScript mantığını DRY prensibiyle yeniden düzenleyin: kart oluşturma, stil güncelleme gibi işlemleri fonksiyonlara ayırın, sabitleri (renkler, öncelikler) ayrı bir constants objesinde toplayın.
- İşlevselliği bağımsız bileşenlere (TaskCard, Column, Board) ve bir state yönetim yapısına (örneğin basit bir store) ayırarak monolitik yapıyı kırın; bu, değişikliklerin izole edilmesini ve birim testlerin yazılmasını kolaylaştıracaktır.
- Render columns and cards from a data array (e.g., const initialTasks = [...]) so adding/moving tasks touches one place instead of duplicating 7 inline-styled card blocks.
- Extract the card markup into a createCardElement(task) helper and move repeated style strings into a CARD_STYLE constant or CSS classes (e.g., .kanban-card) to eliminate the ~7x duplication of identical inline styles.

### Prompt Uyumu — 97/100

- Programatik: 100/100 · Semantik: 95/100
- İhlaller: yok

**Öneriler:**
- Görev kartlarındaki 'placeholder' ifadesi, üretime hazır kod beklentisine uyması için 'Örnek görev kartı' gibi daha spesifik bir ifade ile değiştirilebilir.
- Drag-and-drop işlevselliği kısmen uygulanmış olsa da, sürükleme sırasında kartların görsel geri bildirimi (örneğin sürükleme gölgesi) daha belirgin hale getirilebilir.
- Remove the <iframe> wrapper and output the raw HTML directly as requested by the 'output only the code' instruction.
- Consider keeping UI text in English (or provide a language option) to match the English column names, ensuring full linguistic consistency across the board.


---

# Loomina Analiz Raporu — Qwen3.6 Plus

- **Model:** `qwen/qwen3.6-plus`
- **Tarih:** 02.06.2026 15:04:30
- **Üretim Süresi:** 190028.54 ms
- **Genel Skor:** 59/100
- **Karar Yöntemi:** Tahkim (J3)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3, x-ai/grok-4.3
- **J3 (Tahkimci) çağrılan metrikler:** Okunabilirlik

## Kullanıcı Promptu

Design a responsive drag-and-drop Kanban board layout. It should feature 3 distinct columns ('To Do', 'In Progress', 'Done'). Each column needs a header with a task count and should contain at least 2 placeholder task cards. Place a 'Create New Task' input field at the top. Use clean HTML and inline CSS. Do not write any explanations, output only the code.

## Üretilen Kod

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kanban Board</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f3f4f6; color: #111827; min-height: 100vh; box-sizing: border-box;">
  <div style="max-width: 1200px; margin: 0 auto; padding: 24px 16px; box-sizing: border-box;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; flex-wrap: wrap; gap: 16px;">
      <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #0f172a; letter-spacing: -0.5px;">Project Kanban</h1>
      <div style="display: flex; gap: 10px; width: 100%; max-width: 420px;">
        <input id="newTaskInput" type="text" placeholder="Create New Task" style="flex: 1; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 10px; font-size: 14px; outline: none; background: #ffffff; transition: all 0.2s ease; box-shadow: 0 1px 2px rgba(0,0,0,0.05);" onfocus="this.style.borderColor='#3b82f6'; this.style.boxShadow='0 0 0 3px rgba(59,130,246,0.15)'" onblur="this.style.borderColor='#d1d5db'; this.style.boxShadow='0 1px 2px rgba(0,0,0,0.05)'">
        <button onclick="addTask()" style="padding: 12px 20px; background: #3b82f6; color: #ffffff; border: none; border-radius: 10px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 6px -1px rgba(59,130,246,0.3); white-space: nowrap;" onmouseover="this.style.background='#2563eb'; this.style.transform='translateY(-1px)'" onmouseout="this.style.background='#3b82f6'; this.style.transform='translateY(0)'">Add Task</button>
      </div>
    </div>

    <div style="display: flex; gap: 20px; overflow-x: auto; padding-bottom: 10px; flex-wrap: wrap; align-items: flex-start;">
      <!-- To Do Column -->
      <div style="flex: 1; min-width: 280px; background: #ffffff; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); padding: 16px; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid #e5e7eb;">
          <h2 style="margin: 0; font-size: 16px; font-weight: 600; color: #374151;">To Do</h2>
          <span class="count-badge" style="background: #dbeafe; color: #1e40af; padding: 4px 10px; border-radius: 999px; font-size: 12px; font-weight: 700;">2</span>
        </div>
        <div class="kanban-column" id="todo" style="flex: 1; min-height: 120px; transition: background 0.2s ease; border-radius: 8px; padding: 4px;" ondragover="handleDragOver(event)" ondrop="handleDrop(event, this)">
          <div id="task-1" draggable="true" ondragstart="handleDragStart(event)" ondragend="handleDragEnd(event)" style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px; margin-bottom: 12px; cursor: grab; transition: all 0.2s ease; box-shadow: 0 1px 3px rgba(0,0,0,0.08);" onmouseover="this.style.boxShadow='0 4px 12px rgba(0,0,0,0.12)'; this.style.transform='translateY(-2px)'" onmouseout="this.style.boxShadow='0 1px 3px rgba(0,0,0,0.08)'; this.style.transform='translateY(0)'">
            <div style="font-size: 14px; font-weight: 500; color: #111827;">Research market competitors</div>
            <div style="font-size: 12px; color: #6b7280; margin-top: 6px; display: flex; align-items: center; gap: 4px;">📅 Due: Tomorrow</div>
          </div>
          <div id="task-2" draggable="true" ondragstart="handleDragStart(event)" ondragend="handleDragEnd(event)" style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px; margin-bottom: 12px; cursor: grab; transition: all 0.2s ease; box-shadow: 0 1px 3px rgba(0,0,0,0.08);" onmouseover="this.style.boxShadow='0 4px 12px rgba(0,0,0,0.12)'; this.style.transform='translateY(-2px)'" onmouseout="this.style.boxShadow='0 1px 3px rgba(0,0,0,0.08)'; this.style.transform='translateY(0)'">
            <div style="font-size: 14px; font-weight: 500; color: #111827;">Draft project proposal</div>
            <div style="font-size: 12px; color: #6b7280; margin-top: 6px; display: flex; align-items: center; gap: 4px;">📅 Due: Friday</div>
          </div>
        </div>
      </div>

      <!-- In Progress Column -->
      <div style="flex: 1; min-width: 280px; background: #ffffff; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); padding: 16px; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid #e5e7eb;">
          <h2 style="margin: 0; font-size: 16px; font-weight: 600; color: #374151;">In Progress</h2>
          <span class="count-badge" style="background: #fef3c7; color: #92400e; padding: 4px 10px; border-radius: 999px; font-size: 12px; font-weight: 700;">2</span>
        </div>
        <div class="kanban-column" id="inprogress" style="flex: 1; min-height: 120px; transition: background 0.2s ease; border-radius: 8px; padding: 4px;" ondragover="handleDragOver(event)" ondrop="handleDrop(event, this)">
          <div id="task-3" draggable="true" ondragstart="handleDragStart(event)" ondragend="handleDragEnd(event)" style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px; margin-bottom: 12px; cursor: grab; transition: all 0.2s ease; box-shadow: 0 1px 3px rgba(0,0,0,0.08);" onmouseover="this.style.boxShadow='0 4px 12px rgba(0,0,0,0.12)'; this.style.transform='translateY(-2px)'" onmouseout="this.style.boxShadow='0 1px 3px rgba(0,0,0,0.08)'; this.style.transform='translateY(0)'">
            <div style="font-size: 14px; font-weight: 500; color: #111827;">Design system setup</div>
            <div style="font-size: 12px; color: #6b7280; margin-top: 6px; display: flex; align-items: center; gap: 4px;">👤 Assigned: Alex</div>
          </div>
          <div id="task-4" draggable="true" ondragstart="handleDragStart(event)" ondragend="handleDragEnd(event)" style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px; margin-bottom: 12px; cursor: grab; transition: all 0.2s ease; box-shadow: 0 1px 3px rgba(0,0,0,0.08);" onmouseover="this.style.boxShadow='0 4px 12px rgba(0,0,0,0.12)'; this.style.transform='translateY(-2px)'" onmouseout="this.style.boxShadow='0 1px 3px rgba(0,0,0,0.08)'; this.style.transform='translateY(0)'">
            <div style="font-size: 14px; font-weight: 500; color: #111827;">API integration</div>
            <div style="font-size: 12px; color: #6b7280; margin-top: 6px; display: flex; align-items: center; gap: 4px;">👤 Assigned: Sam</div>
          </div>
        </div>
      </div>

      <!-- Done Column -->
      <div style="flex: 1; min-width: 280px; background: #ffffff; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); padding: 16px; display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid #e5e7eb;">
          <h2 style="margin: 0; font-size: 16px; font-weight: 600; color: #374151;">Done</h2>
          <span class="count-badge" style="background: #d1fae5; color: #065f46; padding: 4px 10px; border-radius: 999px; font-size: 12px; font-weight: 700;">2</span>
        </div>
        <div class="kanban-column" id="done" style="flex: 1; min-height: 120px; transition: background 0.2s ease; border-radius: 8px; padding: 4px;" ondragover="handleDragOver(event)" ondrop="handleDrop(event, this)">
          <div id="task-5" draggable="true" ondragstart="handleDragStart(event)" ondragend="handleDragEnd(event)" style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px; margin-bottom: 12px; cursor: grab; transition: all 0.2s ease; box-shadow: 0 1px 3px rgba(0,0,0,0.08);" onmouseover="this.style.boxShadow='0 4px 12px rgba(0,0,0,0.12)'; this.style.transform='translateY(-2px)'" onmouseout="this.style.boxShadow='0 1px 3px rgba(0,0,0,0.08)'; this.style.transform='translateY(0)'">
            <div style="font-size: 14px; font-weight: 500; color: #111827;">Setup CI/CD pipeline</div>
            <div style="font-size: 12px; color: #6b7280; margin-top: 6px; display: flex; align-items: center; gap: 4px;">✅ Completed: Yesterday</div>
          </div>
          <div id="task-6" draggable="true" ondragstart="handleDragStart(event)" ondragend="handleDragEnd(event)" style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px; margin-bottom: 12px; cursor: grab; transition: all 0.2s ease; box-shadow: 0 1px 3px rgba(0,0,0,0.08);" onmouseover="this.style.boxShadow='0 4px 12px rgba(0,0,0,0.12)'; this.style.transform='translateY(-2px)'" onmouseout="this.style.boxShadow='0 1px 3px rgba(0,0,0,0.08)'; this.style.transform='translateY(0)'">
            <div style="font-size: 14px; font-weight: 500; color: #111827;">User authentication</div>
            <div style="font-size: 12px; color: #6b7280; margin-top: 6px; display: flex; align-items: center; gap: 4px;">✅ Completed: 2 days ago</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
    let draggedElement = null;

    function handleDragStart(e) {
      draggedElement = e.target;
      e.dataTransfer.effectAllowed = 'move';
      setTimeout(() => e.target.style.opacity = '0.5', 0);
    }

    function handleDragEnd(e) {
      e.target.style.opacity = '1';
      draggedElement = null;
    }

    function handleDragOver(e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    }

    function handleDrop(e, column) {
      e.preventDefault();
      if (draggedElement) {
        column.appendChild(draggedElement);
        draggedElement.style.opacity = '1';
        updateCounts();
      }
    }

    function updateCounts() {
      document.querySelectorAll('.kanban-column').forEach(col => {
        const count = col.querySelectorAll('[draggable="true"]').length;
        const badge = col.parentElement.querySelector('.count-badge');
        if (badge) badge.textContent = count;
      });
    }

    let taskCounter = 6;
    function addTask() {
      const input = document.getElementById('newTaskInput');
      const title = input.value.trim();
      if (!title) return;

      taskCounter++;
      const newCard = document.createElement('div');
      newCard.id = 'task-' + taskCounter;
      newCard.draggable = true;
      newCard.setAttribute('ondragstart', 'handleDragStart(event)');
      newCard.setAttribute('ondragend', 'handleDragEnd(event)');
      newCard.style.cssText = 'background: #ffffff; border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px; margin-bottom: 12px; cursor: grab; transition: all 0.2s ease; box-shadow: 0 1px 3px rgba(0,0,0,0.08);';
      newCard.onmouseover = function() { this.style.boxShadow='0 4px 12px rgba(0,0,0,0.12)'; this.style.transform='translateY(-2px)'; };
      newCard.onmouseout = function() { this.style.boxShadow='0 1px 3px rgba(0,0,0,0.08)'; this.style.transform='translateY(0)'; };
      newCard.innerHTML = `<div style="font-size: 14px; font-weight: 500; color: #111827;">${title}</div><div style="font-size: 12px; color: #6b7280; margin-top: 6px; display: flex; align-items: center; gap: 4px;">🕒 Just created</div>`;

      document.getElementById('todo').appendChild(newCard);
      input.value = '';
      updateCounts();
    }
  </script>
</body>
</html>
```

## Hakem Skor Dökümü (J1 / J2 / J3)

| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |
|---|---|---|---|---|---|
| Okunabilirlik | 85 | 48 | 58 | **58** | Medyan (J1·J2·J3) — tahkim |
| Performans | 95 | 78 | — | **87** | Ortalama (J1-J2) |
| Güvenlik | 10 | 20 | — | **15** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 25 | 42 | — | **34** | Ortalama (J1-J2) |
| Prompt Uyumu | 100 | 98 | — | **99** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 58/100

**Öneriler:**
- Task kartları için tekrarlanan stil ve olay işleyicileri bir fonksiyon veya döngü ile oluşturarak kod tekrarını azaltın ve daha temiz bir yapı elde edin.
- `setAttribute('ondragstart', ...)` gibi string tabanlı event atamaları yerine doğrudan element.addEventListener() kullanımı daha okunaklı ve hataya daha az açık olacaktır.
- Inline style'ları <style> bloğunda veya .task-card, .kanban-column gibi CSS sınıflarında toplayarak 6 kez tekrarlanan kart stil bloklarını ortadan kaldırın; satır uzunlukları 120 karakterin altına inecektir.
- Kart oluşturma mantığını (createCard başlıklı bir yardımcı fonksiyon) soyutlayıp addTask içinde yalnızca çağrı bırakın; böylece hem HTML hem JS'deki tekrarı giderir, fare/olay dinleyicilerini de tek noktadan yönetirsiniz.

### Performans — 87/100

**Öneriler:**
- Fare hover efektleri için inline JavaScript yerine CSS :hover seçicisi kullanarak gereksiz stil hesaplamalarını azaltın.
- updateCounts fonksiyonu her sürükle-bırakta tüm kolonlarda sorgu yapıyor; büyük listelerde performans için sayaçları olay dinleyicilerle güncelleyebilirsiniz.
- updateCounts() içinde parentElement.querySelector yerine kolon–badge referanslarını önceden cache'leyerek her sürükle-bırak sonrası gereksiz DOM sorgusunu ortadan kaldırın.
- Yeni eklenen kartlar için her seferinde setAttribute ile inline handler yazmak yerine tek bir delegated event listener (column.addEventListener('dragstart', ...)) kullanarak hem bellek hem parse maliyetini azaltabilirsiniz.

### Güvenlik — 15/100

**Öneriler:**
- Kullanıcı girdisi innerHTML'e eklenmeden önce DOMPurify gibi bir kütüphane ile sanitize edilmeli veya textContent kullanılarak güvenli bir şekilde gösterilmeli.
- Form girdisi için uzunluk ve tür doğrulaması eklenerek beklenmeyen girdi boyutları sınırlanmalı.
- `addTask` içinde `innerHTML` yerine `document.createTextNode(title)` veya `textContent` kullanarak XSS riskini ortadan kaldırın.
- Girdiye maksimum uzunluk sınırı (örn. 120 karakter) koyun ve `setAttribute` ile `maxlength` uygulayarak kötü niyetli/çok büyük girdileri engelleyin.

### Sürdürülebilirlik — 34/100

**Öneriler:**
- HTML, CSS ve JS kodlarını ayrı dosyalara çıkarın; en azından <style> etiketi kullanarak CSS’i tekrar eden inline değerlerden kurtarın.
- Görev kartı oluşturma ve sürükle-bırak mantığını bir class veya fonksiyon modülü içinde soyutlayarak kod tekrarını azaltın ve test edilebilirliği artırın.
- Sütun ve kart yapılarını JavaScript'te bir render fonksiyonu veya template ile üretin; veriyi (sütun adı, görev listesi) ayrı bir yapıda tutun ki yeni sütun/ekleme için HTML kopyala-yapıştır yapılmasın.
- Renkleri, spacing ve radius değerlerini CSS custom property (--primary, --radius-md) veya bir constants nesnesi olarak tanımlayıp tek yerden yönetin; böylece tema/brand değişiklikleri tek dosyada yapılabilsin.

### Prompt Uyumu — 99/100

- Programatik: 100/100 · Semantik: 100/100
- İhlaller: yok

**Öneriler:**
- Task kartı sayıları dinamik olarak güncelleniyor; ancak başlangıçta 'count-badge' değerleri 2 olarak sabitlenmiş. İlk render'da da script ile güncelleyerek tutarlılık artırılabilir.
- 'Create New Task' input/buton alanı, çok küçük ekranlarda daha iyi görünmesi için mobil uyumluluk iyileştirilebilir (örneğin butonun tam genişlikte olması).
- Kolonlara özel renkli sol border (accent strip) ekleyerek görsel hiyerarşi daha da güçlendirilebilir.
- Sürükleme sırasında hedef kolonun arka plan rengini değiştiren görsel bir affordance eklenebilir.


---

# Loomina Analiz Raporu — Gemini 3.5 Flash

- **Model:** `google/gemini-3.5-flash`
- **Tarih:** 02.06.2026 15:04:30
- **Üretim Süresi:** 23988.07 ms
- **Genel Skor:** 78/100
- **Karar Yöntemi:** Konsensüs (iki hakem ortalaması)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3
- **J3 (Tahkimci) çağrılan metrikler:** Yok — iki hakem tüm metriklerde uzlaştı.

## Kullanıcı Promptu

Design a responsive drag-and-drop Kanban board layout. It should feature 3 distinct columns ('To Do', 'In Progress', 'Done'). Each column needs a header with a task count and should contain at least 2 placeholder task cards. Place a 'Create New Task' input field at the top. Use clean HTML and inline CSS. Do not write any explanations, output only the code.

## Üretilen Kod

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Kanban Board</title>
  <style>
    :root {
      --bg-color: #f4f5f7;
      --board-bg: #101214;
      --col-bg: #161a1d;
      --card-bg: #22272b;
      --text-main: #deebff;
      --text-muted: #9fadbc;
      --border-color: #30363d;
      --primary: #579dff;
      --primary-hover: #85b8ff;
      --todo-color: #0c66e4;
      --progress-color: #f18d13;
      --done-color: #1f845a;
      --shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: var(--font-family);
      background-color: var(--board-bg);
      color: var(--text-main);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem 1rem;
    }

    .container {
      width: 100%;
      max-width: 1200px;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    /* Input Header Section */
    .task-creator {
      background-color: var(--col-bg);
      border: 1px solid var(--border-color);
      padding: 1.5rem;
      border-radius: 12px;
      display: flex;
      gap: 1rem;
      align-items: center;
      box-shadow: var(--shadow);
      flex-wrap: wrap;
    }

    .task-creator input {
      flex: 1;
      min-width: 200px;
      background-color: var(--card-bg);
      border: 2px solid var(--border-color);
      color: var(--text-main);
      padding: 0.75rem 1rem;
      border-radius: 8px;
      font-size: 1rem;
      outline: none;
      transition: border-color 0.2s ease;
    }

    .task-creator input:focus {
      border-color: var(--primary);
    }

    .task-creator button {
      background-color: var(--primary);
      color: #1d2125;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.2s ease, transform 0.1s ease;
    }

    .task-creator button:hover {
      background-color: var(--primary-hover);
    }

    .task-creator button:active {
      transform: scale(0.98);
    }

    /* Kanban Board Layout */
    .board {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 1.5rem;
      align-items: start;
    }

    .column {
      background-color: var(--col-bg);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      min-height: 500px;
      box-shadow: var(--shadow);
      transition: background-color 0.2s ease;
    }

    .column.drag-over {
      background-color: #1e252b;
      border-style: dashed;
      border-color: var(--primary);
    }

    /* Column Header */
    .column-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 0.75rem;
      border-bottom: 2px solid var(--border-color);
    }

    .column-title-wrapper {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .column-indicator {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }

    #todo .column-indicator { background-color: var(--todo-color); }
    #inprogress .column-indicator { background-color: var(--progress-color); }
    #done .column-indicator { background-color: var(--done-color); }

    .column-title {
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--text-main);
    }

    .task-count {
      background-color: var(--card-bg);
      color: var(--text-muted);
      padding: 0.2rem 0.6rem;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
      border: 1px solid var(--border-color);
    }

    /* Cards Container */
    .cards-container {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      flex-grow: 1;
      min-height: 400px;
    }

    /* Task Card */
    .card {
      background-color: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 1rem;
      cursor: grab;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
      user-select: none;
    }

    .card:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow);
      border-color: #444c56;
    }

    .card:active {
      cursor: grabbing;
    }

    .card.dragging {
      opacity: 0.5;
      border: 2px dashed var(--primary);
    }

    .card-content {
      font-size: 0.95rem;
      line-height: 1.4;
      color: var(--text-main);
      word-break: break-word;
    }

    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;
      font-size: 0.75rem;
      color: var(--text-muted);
    }

    .card-tag {
      background-color: rgba(87, 157, 255, 0.1);
      color: var(--primary);
      padding: 0.15rem 0.4rem;
      border-radius: 4px;
      font-weight: 500;
    }

    .delete-btn {
      background: none;
      border: none;
      color: var(--text-muted);
      cursor: pointer;
      font-size: 1.1rem;
      line-height: 1;
      padding: 0.2rem;
      border-radius: 4px;
      transition: color 0.2s, background-color 0.2s;
    }

    .delete-btn:hover {
      color: #ff7373;
      background-color: rgba(255, 115, 115, 0.1);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .board {
        grid-template-columns: 1fr;
      }
      .column {
        min-height: auto;
      }
      .cards-container {
        min-height: 150px;
      }
    }
  </style>
</head>
<body>

  <div class="container">
    <!-- Task Creator -->
    <div class="task-creator">
      <input type="text" id="new-task-input" placeholder="Enter a new task..." aria-label="New task title">
      <button id="add-task-btn">Create New Task</button>
    </div>

    <!-- Kanban Board -->
    <div class="board">
      
      <!-- To Do Column -->
      <div class="column" id="todo" ondragover="allowDrop(event)" ondragenter="dragEnter(event)" ondragleave="dragLeave(event)" ondrop="drop(event)">
        <div class="column-header">
          <div class="column-title-wrapper">
            <span class="column-indicator"></span>
            <span class="column-title">To Do</span>
          </div>
          <span class="task-count" id="todo-count">0</span>
        </div>
        <div class="cards-container" id="todo-cards">
          <div class="card" draggable="true" id="task-1" ondragstart="dragStart(event)" ondragend="dragEnd(event)">
            <div class="card-content">Research user personas and target audience</div>
            <div class="card-footer">
              <span class="card-tag">Research</span>
              <button class="delete-btn" onclick="deleteTask('task-1')">&times;</button>
            </div>
          </div>
          <div class="card" draggable="true" id="task-2" ondragstart="dragStart(event)" ondragend="dragEnd(event)">
            <div class="card-content">Draft initial wireframes for dashboard layout</div>
            <div class="card-footer">
              <span class="card-tag">Design</span>
              <button class="delete-btn" onclick="deleteTask('task-2')">&times;</button>
            </div>
          </div>
        </div>
      </div>

      <!-- In Progress Column -->
      <div class="column" id="inprogress" ondragover="allowDrop(event)" ondragenter="dragEnter(event)" ondragleave="dragLeave(event)" ondrop="drop(event)">
        <div class="column-header">
          <div class="column-title-wrapper">
            <span class="column-indicator"></span>
            <span class="column-title">In Progress</span>
          </div>
          <span class="task-count" id="inprogress-count">0</span>
        </div>
        <div class="cards-container" id="inprogress-cards">
          <div class="card" draggable="true" id="task-3" ondragstart="dragStart(event)" ondragend="dragEnd(event)">
            <div class="card-content">Implement responsive navigation bar component</div>
            <div class="card-footer">
              <span class="card-tag">Frontend</span>
              <button class="delete-btn" onclick="deleteTask('task-3')">&times;</button>
            </div>
          </div>
          <div class="card" draggable="true" id="task-4" ondragstart="dragStart(event)" ondragend="dragEnd(event)">
            <div class="card-content">Set up MongoDB database schema and server routes</div>
            <div class="card-footer">
              <span class="card-tag">Backend</span>
              <button class="delete-btn" onclick="deleteTask('task-4')">&times;</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Done Column -->
      <div class="column" id="done" ondragover="allowDrop(event)" ondragenter="dragEnter(event)" ondragleave="dragLeave(event)" ondrop="drop(event)">
        <div class="column-header">
          <div class="column-title-wrapper">
            <span class="column-indicator"></span>
            <span class="column-title">Done</span>
          </div>
          <span class="task-count" id="done-count">0</span>
        </div>
        <div class="cards-container" id="done-cards">
          <div class="card" draggable="true" id="task-5" ondragstart="dragStart(event)" ondragend="dragEnd(event)">
            <div class="card-content">Configure project environment variables and build scripts</div>
            <div class="card-footer">
              <span class="card-tag">DevOps</span>
              <button class="delete-btn" onclick="deleteTask('task-5')">&times;</button>
            </div>
          </div>
          <div class="card" draggable="true" id="task-6" ondragstart="dragStart(event)" ondragend="dragEnd(event)">
            <div class="card-content">Establish coding standards and setup ESLint configuration</div>
            <div class="card-footer">
              <span class="card-tag">Setup</span>
              <button class="delete-btn" onclick="deleteTask('task-6')">&times;</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <script>
    // Update count of tasks in each column
    function updateCounts() {
      const columns = ['todo', 'inprogress', 'done'];
      columns.forEach(colId => {
        const container = document.getElementById(`${colId}-cards`);
        const countSpan = document.getElementById(`${colId}-count`);
        countSpan.textContent = container.children.length;
      });
    }

    // Drag and Drop Handlers
    function dragStart(e) {
      e.dataTransfer.setData("text/plain", e.target.id);
      setTimeout(() => {
        e.target.classList.add('dragging');
      }, 0);
    }

    function dragEnd(e) {
      e.target.classList.remove('dragging');
    }

    function allowDrop(e) {
      e.preventDefault();
    }

    function dragEnter(e) {
      e.preventDefault();
      const column = e.target.closest('.column');
      if (column) {
        column.classList.add('drag-over');
      }
    }

    function dragLeave(e) {
      const column = e.target.closest('.column');
      // Only remove if we are leaving the column node itself
      if (column && !column.contains(e.relatedTarget)) {
        column.classList.remove('drag-over');
      }
    }

    function drop(e) {
      e.preventDefault();
      const column = e.target.closest('.column');
      if (column) {
        column.classList.remove('drag-over');
        const cardId = e.dataTransfer.getData("text/plain");
        const card = document.getElementById(cardId);
        const container = column.querySelector('.cards-container');
        if (card && container) {
          container.appendChild(card);
          updateCounts();
        }
      }
    }

    // Task operations
    function deleteTask(cardId) {
      const card = document.getElementById(cardId);
      if (card) {
        card.remove();
        updateCounts();
      }
    }

    function createNewTask() {
      const input = document.getElementById('new-task-input');
      const text = input.value.trim();
      
      if (text === '') return;

      const cardId = 'task-' + Date.now();
      const card = document.createElement('div');
      card.className = 'card';
      card.draggable = true;
      card.id = cardId;
      card.ondragstart = dragStart;
      card.ondragend = dragEnd;

      card.innerHTML = `
        <div class="card-content">${escapeHTML(text)}</div>
        <div class="card-footer">
          <span class="card-tag">Task</span>
          <button class="delete-btn" onclick="deleteTask('${cardId}')">&times;</button>
        </div>
      `;

      document.getElementById('todo-cards').appendChild(card);
      input.value = '';
      updateCounts();
    }

    // Helper to escape HTML characters
    function escapeHTML(str) {
      return str.replace(/[&<>'"]/g, 
        tag => ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          "'": '&#39;',
          '"': '&quot;'
        }[tag] || tag)
      );
    }

    // Event Listeners
    document.getElementById('add-task-btn').addEventListener('click', createNewTask);
    document.getElementById('new-task-input').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        createNewTask();
      }
    });

    // Initialize counts on load
    window.onload = updateCounts;
  </script>
</body>
</html>
```

## Hakem Skor Dökümü (J1 / J2 / J3)

| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |
|---|---|---|---|---|---|
| Okunabilirlik | 92 | 88 | — | **90** | Ortalama (J1-J2) |
| Performans | 95 | 82 | — | **89** | Ortalama (J1-J2) |
| Güvenlik | 85 | 82 | — | **84** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 40 | 52 | — | **46** | Ortalama (J1-J2) |
| Prompt Uyumu | 80 | 77 | — | **79** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 90/100

**Öneriler:**
- HTML'deki id değerlerinde tutarlılık için ya tamamen kebab-case (`new-task-input`) ya da tamamen camelCase (`todoCards`) tercih edilmeli.
- Satır içi `ondragstart`, `onclick` gibi event handler'lar yerine tamamı JavaScript'te `addEventListener` ile eklenirse HTML daha temiz ve bakımı kolay olur.
- Replace repeated inline event handlers (ondragover, ondragstart, etc.) with event delegation in JS to reduce HTML repetition and improve maintainability.
- Add a short comment explaining the `setTimeout(..., 0)` usage in dragStart (e.g., 'defer class addition so the browser captures the original drag image').

### Performans — 89/100

**Öneriler:**
- Olay yetki devri (event delegation) kullanılarak her kart için ayrı silme butonu dinleyicisi eklemek yerine tek bir dinleyici ile bellek kullanımı azaltılabilir.
- Sürükleme sırasında sık tetiklenen dragEnter/dragLeave olaylarında DOM sorguları optimize edilebilir, ancak mevcut durumda performans etkisi yok denecek kadar azdır.
- Kartlar için event delegation kullanın: cards-container seviyesinde tek bir dragstart/dragend listener ile performansı ve bellek kullanımını iyileştirin.
- dragEnter/dragLeave flicker'ını önlemek için dragover üzerinden bir counter (enterCount/leaveCount) mekanizması kurun veya sadece column seviyesinde tek dragenter/dragleave listener'ı column'a bağlayın.

### Güvenlik — 84/100

**Öneriler:**
- Oluşturulan yeni kartlar `innerHTML` yerine `innerText` veya `textContent` ile güvenli şekilde eklenebilir; `escapeHTML` fonksiyonundan bağımsız olarak doğrudan DOM API'si kullanmak XSS riskini tamamen ortadan kaldırır.
- Yeni görev girişi için yalnızca `trim` kontrolü yerine, minimum/maksimum uzunluk ve özel karakter sınırlandırması eklenerek input doğrulama iyileştirilebilir.
- Add a maximum length check (e.g., `if (text.length > 200) return;`) in `createNewTask()` to prevent abuse via extremely long inputs and potential UI/layout issues.
- Consider using `textContent` and `createElement` chain instead of `innerHTML` template strings for task card creation, which would eliminate the need for manual HTML escaping and reduce XSS surface area entirely.

### Sürdürülebilirlik — 46/100

**Öneriler:**
- Kart oluşturma ve sürükle-bırak mantığını ayrı bir JavaScript modülüne veya sınıfa taşıyarak sunumdan ayırın.
- Sütun ID’lerini, sabit metinleri ve CSS sınıflarını bir yapılandırma dizisiyle yöneterek yeni sütun eklemeyi tek bir noktada yapılabilecek hale getirin.
- Tekrarlanan inline olay yöneticilerini (ondragstart, onclick) kaldırıp olay delegasyonu (event delegation) ve addEventListener kullanarak HTML ile JS arasındaki bağımlılığı azaltın.
- Sütun ve kart oluşturmayı yeniden kullanılabilir fabrika fonksiyonlarına çıkarın; sütun listesini bir veri dizisinde tutun, böylece yeni sütun/ekleme tek bir yerden yönetilebilsin ve localStorage ile kalıcılık eklenebilsin.

### Prompt Uyumu — 79/100

- Programatik: 67/100 · Semantik: 100/100
- İhlaller: inline_css_not_detected

**Öneriler:**
- CSS'i tamamen satır içi (inline) olarak style özelliği ile uygulamak prompt'taki format kısıtına tam uyum sağlar.
- Görev sayacı başlangıçta doğru görüntüleniyor; performans için gereksiz DOM manipülasyonları optimize edilebilir.
- Initialize the task count spans in the HTML to '2' (the static card count) to avoid the brief flash of '0' before window.onload fires.
- If 'inline CSS' was meant strictly, move at least the core layout properties (or all styling) into `style="..."` attributes on each element to remove any ambiguity.
