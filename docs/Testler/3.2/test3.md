# Loomina — Model Karşılaştırma Raporu

- **Tarih:** 02.06.2026 15:08:14
- **Karşılaştırılan Model Sayısı:** 3

## Kullanıcı Promptu

Design a responsive drag-and-drop Kanban board layout. It should feature 3 distinct columns ('To Do', 'In Progress', 'Done'). Each column needs a header with a task count and should contain at least 2 placeholder task cards. Place a 'Create New Task' input field at the top. Use clean HTML and inline CSS. Do not write any explanations, output only the code.

## Karşılaştırma Tablosu

| Model | Genel | Okunabilirlik | Performans | Güvenlik | Sürdürülebilirlik | Prompt Uyumu |
|---|---|---|---|---|---|---|
| DeepSeek V4 Pro | 71 | 62 | 78 | 89 | 29 | 96 |
| Qwen3.6 Plus | 71 | 72 | 90 | 53 | 40 | 98 |
| Gemini 3.5 Flash | 78 | 89 | 90 | 85 | 49 | 79 |

---

# Loomina Analiz Raporu — DeepSeek V4 Pro

- **Model:** `deepseek/deepseek-v4-pro`
- **Tarih:** 02.06.2026 15:08:14
- **Üretim Süresi:** 114850 ms
- **Genel Skor:** 71/100
- **Karar Yöntemi:** Tahkim (J3)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3, x-ai/grok-4.3
- **J3 (Tahkimci) çağrılan metrikler:** Okunabilirlik

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
| Okunabilirlik | 95 | 62 | 58 | **62** | Medyan (J1·J2·J3) — tahkim |
| Performans | 80 | 75 | — | **78** | Ortalama (J1-J2) |
| Güvenlik | 95 | 82 | — | **89** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 25 | 32 | — | **29** | Ortalama (J1-J2) |
| Prompt Uyumu | 100 | 92 | — | **96** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 62/100

**Öneriler:**
- Karmaşık olmasa da escapeHtml gibi yardımcı fonksiyonlara kısa birer yorum eklenebilir.
- Inline stiller uzun satırlara neden olmuş; önemli stil blokları <style> etiketi içine taşınarak okunabilirlik artırılabilir.
- Kart stillerini bir CSS sınıfına (örn. .card) çıkararak 7 kez tekrarlanan inline style'ları ortadan kaldırın; bu hem satır uzunluğunu hem de bakım yükünü azaltır.
- Kart oluşturma mantığını addTask içinde olduğu gibi bir renderCard(title, priority, columnType) yardımcı fonksiyonuna çıkararak HTML tekrarını giderin ve her yeni görev ekleme noktasında sürdürülebilirliği artırın.

### Performans — 78/100

**Öneriler:**
- Sürükle-bırak olay işleyicilerini yalnızca bir yöntemle (ör. addEventListener) bağlayarak mükerrer çağrıları önleyin.
- Kart taşıma veya ekleme sonrası sadece ilgili sütun sayaçlarını güncelleyerek gereksiz DOM taramasını azaltın.
- handleDragOver ve handleDragLeave içinde sürekli tetiklenen style yazımlarını throttle/requestAnimationFrame ile sınırlandırarak gereksiz reflow/repaint'leri azaltın.
- Kartlardaki inline onmouseover/onmouseout yerine CSS :hover sözde sınıfını kullanın; böylece her fare hareketinde tetiklenen JavaScript style mutation'ları ortadan kalkar.

### Güvenlik — 89/100

**Öneriler:**
- Kullanıcı girdisi için maksimum uzunluk sınırlaması eklenmeli (ör. 200 karakter) ve özel karakterler tamamen engellenmek yerine uygun şekilde encode edildiğinden emin olunmalı.
- Inline event handler'larda (onkeydown, onclick) doğrudan JavaScript çalıştırmak yerine addEventListener kullanarak script injection riskini daha da azaltabilirsiniz (bu kodda zaten güvenli olsa da en iyi pratik olarak).
- Görev inputuna `maxlength` (ör. 200 karakter) ve sunucu tarafı eşdeğeri uzunluk sınırı ekleyerek aşırı büyük girdileri kısıtlayın.
- `<iframe>` sandbox niteliğini yalnızca `allow-scripts` olarak daraltın; gerekmiyorsa `allow-same-origin` kaldırılarak depolama erişimi izole edilmeli.

### Sürdürülebilirlik — 29/100

**Öneriler:**
- Kart bileşenini, sütun bileşenini ve drag-drop mantığını ayrı JS modüllerine veya en azından ayrı fonksiyonlara bölerek modülariteyi artırın.
- Sabit değerleri (renkler, öncelik seçenekleri, sütun yapılandırması) bir `constants` nesnesinde toplayın ve stil tekrarlarını azaltmak için CSS sınıflarını kullanın.
- Refactor card rendering into a single `createCard(data)` function that returns an element, eliminating the 7x duplication of inline-styled card markup and centralizing style values.
- Extract color tokens (column colors, priority colors, shadows) into a single config object and generate all inline styles programmatically so a theme/color change happens in one place.

### Prompt Uyumu — 96/100

- Programatik: 100/100 · Semantik: 100/100
- İhlaller: yok

**Öneriler:**
- Sürükle-bırak sonrası kart sayımlarının güncellenmesi 'handleDrop' içinde 'updateAllCounts()' çağrılarak sağlanmış; ancak kolonlar arası taşıma sonrası kart stillerinin (üzeri çizili metin gibi) tutarlılığı için fonksiyonun daha merkezi bir şekilde çağrılması düşünülebilir.
- Yeni görev eklendiğinde otomatik atanan öncelik etiketi ('🔴 Yüksek' vb.) rastgele seçilmekte; prompt'ta belirtilmese de kullanıcı deneyimi için öncelik seçimi eklenmesi faydalı olabilir.
- Çıktıyı <iframe> sarmalayıcı olmadan doğrudan ham HTML olarak ver, böylece 'output only the code' talimatına birebir uyulsun.
- Tüm stilleri inline olarak yaz; animasyon ve responsive kuralları için bile inline style veya element.style ile geçersiz kılma yaklaşımı kullan, ek <style> bloğundan kaçın.


---

# Loomina Analiz Raporu — Qwen3.6 Plus

- **Model:** `qwen/qwen3.6-plus`
- **Tarih:** 02.06.2026 15:08:14
- **Üretim Süresi:** 190029 ms
- **Genel Skor:** 71/100
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
| Okunabilirlik | 78 | 65 | — | **72** | Ortalama (J1-J2) |
| Performans | 95 | 85 | — | **90** | Ortalama (J1-J2) |
| Güvenlik | 55 | 50 | — | **53** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 45 | 35 | — | **40** | Ortalama (J1-J2) |
| Prompt Uyumu | 98 | 98 | — | **98** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 72/100

**Öneriler:**
- Inline CSS'leri harici bir stil dosyasına veya <style> bloğuna taşıyarak HTML yapısını sadeleştirin.
- 'taskCounter' başlangıç değerini sabit olarak tanımlayın ve addTask fonksiyonuna kısa bir açıklama ekleyin.
- Tekrarlayan inline stilleri ortadan kaldırmak için kart ve sütun şablonlarını ortak bir `createCard()` / `createColumn()` yardımcı fonksiyonu ile üretin; bu hem okunabilirliği artırır hem DRY ihlalini giderir.
- Olay dinleyicilerini `setAttribute` ve inline `on*` karışımı yerine tutarlı biçimde `addEventListener` veya property ataması (`el.ondragstart = ...`) ile bağlayarak tek bir stil benimseyin.

### Performans — 90/100

**Öneriler:**
- Yeni görev kartlarına fare olayları eklerken olay yetkilendirmesi (event delegation) kullanarak her element için ayrı işlev atamasını önleyebilirsiniz.
- Sürükle-bırak sonrası görev sayılarını güncellerken yalnızca etkilenen sütunları hedeflemek, tüm sütunları taramaktan daha verimli olur.
- addTask() içinde innerHTML yerine document.createElement ile DOM düğümleri oluşturmak hem parse maliyetini azaltır hem XSS riskini ortadan kaldırır.
- updateCounts() fonksiyonunu sadece kaynak ve hedef kolonun count badge'ini güncelleyecek şekilde daraltmak (drop'ta hangi iki kolon etkilendiğini parametre olarak almak) gereksiz querySelectorAll çağrılarını önler.

### Güvenlik — 53/100

**Öneriler:**
- Kullanıcıdan alınan görev başlığını `innerHTML` yerine `textContent` ile ekleyerek XSS riskini ortadan kaldırın. Eğer HTML render edilmesi gerekiyorsa DOMPurify gibi bir kütüphane ile girdiyi sanitize edin.
- Input alanına girilen veriyi eklemeden önce temel bir doğrulama (örn. maksimum uzunluk, zararlı karakter filtreleme) yaparak istemci tarafı güvenliğini artırın.
- `addTask()` içinde `innerHTML` yerine `document.createTextNode` veya `textContent` kullanarak kullanıcı girdisini güvenli şekilde ekleyin.
- Girdi için maksimum uzunluk sınırı (örn. 200 karakter) ve temel karakter filtrelemesi/allowlist uygulayarak beklenmeyen payload'ları önleyin.

### Sürdürülebilirlik — 40/100

**Öneriler:**
- Stil ve mantığı modüllere ayırın: CSS sınıflarını kullanın, JavaScript'i ayrı bir dosyaya taşıyın, inline event handler'ları DOM manipülasyonuyla değiştirin.
- Tekrar eden görev kartı oluşturma mantığını bir fonksiyona veya template'e çıkarın; kart ID'lerini dinamik atayarak ve event'leri delegation ile yöneterek kod tekrarını azaltın.
- Move shared column/card styles into a small <style> block with classes (and CSS custom properties for colors) so a single edit propagates to all cards and columns.
- Generate columns and initial cards from a data array in JavaScript (with a createCard helper) instead of repeating HTML, eliminating the triplicated column markup and making additions trivial.

### Prompt Uyumu — 98/100

- Programatik: 100/100 · Semantik: 95/100
- İhlaller: yok

**Öneriler:**
- Görev kartlarının drag-and-drop sırasında hedef sütunun 'this' yerine doğrudan sütun elemanını alması daha güvenilir olabilir.
- 'Create New Task' alanına tıklanabilirliği artırmak için butona 'Enter' tuşu ile ekleme desteği eklenebilir.
- Input alanına Enter tuşu ile de görev ekleme desteği eklenebilir.
- Sürükleme sırasında hedef sütunun görsel olarak vurgulanması (highlight) iyileştirilebilir.


---

# Loomina Analiz Raporu — Gemini 3.5 Flash

- **Model:** `google/gemini-3.5-flash`
- **Tarih:** 02.06.2026 15:08:14
- **Üretim Süresi:** 23988 ms
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
| Okunabilirlik | 92 | 85 | — | **89** | Ortalama (J1-J2) |
| Performans | 100 | 80 | — | **90** | Ortalama (J1-J2) |
| Güvenlik | 90 | 80 | — | **85** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 40 | 58 | — | **49** | Ortalama (J1-J2) |
| Prompt Uyumu | 80 | 78 | — | **79** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 89/100

**Öneriler:**
- Sütun yapılarındaki tekrarı azaltmak için HTML yerine JavaScript ile dinamik oluşturmayı düşünün.
- Olay dinleyicilerini HTML öznitelikleri yerine addEventListener ile eklemek, kod yapısını daha temiz hale getirir.
- Sürüklenen sütun yapısı için tekrar eden inline olay işleyicilerini (ondragover, ondrop vb.) ortak bir `addColumnDropHandlers(columnEl)` yardımcı fonksiyonuna çıkararak HTML ve JS tekrarını azaltın.
- `createNewTask` içindeki `innerHTML` şablonu yerine `document.createElement` ile kart öğelerini oluşturarak hem okunabilirliği artırın hem de ID-enjeksiyonundan kaynaklanan karışıklığı ortadan kaldırın.

### Performans — 90/100

**Öneriler:**
- Drag olay işleyicilerinde sık kullanılan `closest` ve `contains` çağrıları, sütun DOM öğelerine doğrudan referans tutularak önbelleğe alınırsa mikro düzeyde iyileştirme sağlanabilir.
- İleride çok sayıda kart eklenirse sanal kaydırma (virtual scrolling) performansı korumak için düşünülmelidir.
- Kart olaylarını (silme, dragstart, dragend) event delegation ile cards-container seviyesinde toplayarak her karta ayrı closure atanmasını önleyin.
- Kolonlar için CSS 'contain: layout' özelliği ekleyerek tarayıcıdaki layout/paint maliyetini azaltın, özellikle sürükleme sırasında reflow'u sınırlandırın.

### Güvenlik — 85/100

**Öneriler:**
- `card.innerHTML` kullanımı yerine `textContent` veya `appendChild` ile güvenli DOM manipülasyonu tercih edilerek HTML yorumlama tamamen devre dışı bırakılabilir.
- `escapeHTML` fonksiyonu iyi bir sanitizasyon sağlasa da, uluslararası karakterler veya edge-case'ler için daha kapsamlı bir güvenlik kütüphanesi (örn. DOMPurify) kullanmak ileriye dönük koruma sağlayabilir.
- Input alanına `maxlength` attribute ekleyin ve JavaScript tarafında da uzunluk sınırı doğrulaması yapın (örn. 200 karakter).
- Kullanıcı girdisini `innerHTML` ile değil, `document.createElement` + `textContent` kullanarak DOM'a ekleyin; bu, escapeHTML fonksiyonuna olan bağımlılığı ortadan kaldırır ve XSS riskini yapısal olarak önler.

### Sürdürülebilirlik — 49/100

**Öneriler:**
- Yeniden kullanılabilir bileşenler oluşturarak kod tekrarını azaltın: kart, sütun ve görev oluşturucuyu ayrı fonksiyonlar/şablonlar halinde soyutlayın.
- İş mantığını sunum katmanından ayırın: state yönetimi ve modüler event handler'lar kullanın, DOM manipülasyonunu soyutlayarak test edilebilirliği artırın.
- Kolon ve kart yapısını veri odaklı hale getirin: columns dizisinden render edin; böylece yeni kolon eklemek için tek bir yerde değişiklik yeterli olur ve HTML tekrarı ortadan kalkar.
- Tüm event handler'ları JavaScript tarafında addEventListener ile bağlayın ve inline onclick/ondragstart gibi nitelikleri kaldırarak davranışı tek bir kaynaktan yönetilebilir hale getirin.

### Prompt Uyumu — 79/100

- Programatik: 67/100 · Semantik: 100/100
- İhlaller: inline_css_not_detected

**Öneriler:**
- Sürükle-bırak sırasında görsel bir düzenleme sıralaması (örneğin 'drag-over' efektinin daha belirgin hale getirilmesi) eklenerek kullanıcı deneyimi geliştirilebilir.
- Kartların herhangi bir sütuna ilk bırakıldığında sütunun boş olması durumunda 'cards-container' dışına düşmesini engellemek için drop alanı olarak tüm sütun kullanılabilir.
- 'Create New Task' input could optionally allow users to select the target column when adding, rather than always defaulting to To Do.
- Task count badge could update visually with a subtle animation when a card is added or moved for better UX feedback.
