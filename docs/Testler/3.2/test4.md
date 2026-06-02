# Loomina — Model Karşılaştırma Raporu

- **Tarih:** 02.06.2026 15:09:58
- **Karşılaştırılan Model Sayısı:** 3

## Kullanıcı Promptu

Design a responsive drag-and-drop Kanban board layout. It should feature 3 distinct columns ('To Do', 'In Progress', 'Done'). Each column needs a header with a task count and should contain at least 2 placeholder task cards. Place a 'Create New Task' input field at the top. Use clean HTML and inline CSS. Do not write any explanations, output only the code.

## Karşılaştırma Tablosu

| Model | Genel | Okunabilirlik | Performans | Güvenlik | Sürdürülebilirlik | Prompt Uyumu |
|---|---|---|---|---|---|---|
| DeepSeek V4 Pro | 72 | 64 | 78 | 92 | 27 | 97 |
| Qwen3.6 Plus | 67 | 72 | 89 | 38 | 37 | 97 |
| Gemini 3.5 Flash | 79 | 85 | 91 | 87 | 53 | 79 |

---

# Loomina Analiz Raporu — DeepSeek V4 Pro

- **Model:** `deepseek/deepseek-v4-pro`
- **Tarih:** 02.06.2026 15:09:58
- **Üretim Süresi:** 114850 ms
- **Genel Skor:** 72/100
- **Karar Yöntemi:** Tahkim (J3)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3, x-ai/grok-4.3
- **J3 (Tahkimci) çağrılan metrikler:** Okunabilirlik, Performans

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
| Okunabilirlik | 88 | 58 | 64 | **64** | Medyan (J1·J2·J3) — tahkim |
| Performans | 95 | 70 | 78 | **78** | Medyan (J1·J2·J3) — tahkim |
| Güvenlik | 95 | 88 | — | **92** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 25 | 28 | — | **27** | Ortalama (J1-J2) |
| Prompt Uyumu | 98 | 96 | — | **97** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 64/100

**Öneriler:**
- Kart ve sütun stilleri için CSS sınıfları tanımlayarak inline stil tekrarını azaltın.
- Sütun türüne göre dinamik stilleri programatik eklemek yerine CSS değişkenleri veya ön tanımlı sınıflarla daha sade bir yapı kurun.
- Kart stilleri ve hover/drag event handler'ları için CSS class'ları (örn. .kanban-card) ve ortak bir init fonksiyonu kullanarak inline tekrarı azaltın; bu satır uzunluklarını 120 karakterin altına indirecektir.
- Statik kartları da JavaScript'te bir veri dizisinden (tasks array) render ederek HTML ve JS'deki tekrarı ortadan kaldırın; böylece tek bir render fonksiyonu tüm kartları üretir.

### Performans — 78/100

**Öneriler:**
- Hover efektleri için JavaScript yerine CSS :hover kullanılarak tarayıcı optimizasyonundan faydalanılabilir ve gereksiz JS tetiklenmesi önlenebilir.
- Sürükleme esnasında kolon stilleri sürekli element.style üzerinden değiştirilmek yerine CSS sınıfı eklenip kaldırılarak paint/layout maliyeti azaltılabilir.
- Drag sırasında her `dragover` olayında stil değiştirmek yerine, sadece `dragenter`/`dragleave` olaylarında görsel feedback uygulayın; bu reflow/repaint sayısını önemli ölçüde azaltır.
- Kartlardaki `onmouseover`/`onmouseout` inline handler'larını kaldırıp, hover efektleri için `.card:hover { transform: ...; box-shadow: ...; }` gibi saf CSS kuralları kullanın; tarayıcı bu durumu compositör katmanında yönetir.

### Güvenlik — 92/100

**Öneriler:**
- Görev eklerken metin uzunluğu kontrolü eklenerek aşırı uzun girdiler engellenebilir (örn. maxLength özniteliği ve JS ile sınırlama).
- URL parametresi veya başka dış kaynak kullanılmasa da, ileride API eklenecekse HTTPS zorunluluğu ve hata mesajı filtrelemesi düşünülmelidir.
- `taskInput` alanına `maxlength` (örn. 200) ve içerik denetimi (boş/çok uzun/zararlı karakter) ekleyin.
- Sürükle-bırak veri aktarımında `dataTransfer.setData` yerine closure üzerinden id taşımak, XSS yüzeyini tamamen kapatır; sadece görsel efektler için inline `onmouseover`/`onmouseout` yerine CSS `:hover` kullanın.

### Sürdürülebilirlik — 27/100

**Öneriler:**
- Kart oluşturma, sürükle-bırak mantığı ve stil sabitleri ayrı JavaScript modüllerine veya fonksiyonlara çıkarılmalı; inline CSS yerine harici bir stil dosyası veya CSS-in-JS çözümü kullanılmalı.
- Kolon ve kart bileşenleri için tekrar eden HTML yapısı dinamik olarak render edilmeli; şu anki manuel kopyala-yapıştır yaklaşımı yerine bir render fonksiyonu veya bileşen sistemi kurulmalı.
- Kart ve sütun yapılarını `createCard()` ve `createColumn()` gibi tek fonksiyonlarla soyutlayın; aynı inline stilleri 7 kez tekrarlamak yerine tek bir stil şablonu veya CSS sınıfı kullanın (DRY).
- Tüm olay yöneticilerini inline `on*` attribute'ları yerine `addEventListener` ile bağlayın ve sütun/kart tanımlarını veri odaklı (data array + render fonksiyonu) hale getirerek yeni durum eklemeyi tek noktadan yönetilebilir kılın.

### Prompt Uyumu — 97/100

- Programatik: 100/100 · Semantik: 95/100
- İhlaller: yok

**Öneriler:**
- 'Create New Task' alanı promptta istenen 'input field' olarak tam karşılanabilmesi için buton yerine sadece giriş alanı olarak bırakılıp placeholder metni güncellenebilir.
- Sürükle-bırak hedef sütun vurgusu şu an sadece sütun arka planı değişerek oluyor; daha belirgin bir drop zone görseli (ör. kenarlık) eklenmesi kullanıcı deneyimini iyileştirir.
- Kodun tamamını tek bir <html> dosyası olarak doğrudan ver; iframe srcdoc sarmalayıcısı gereksiz katman ekliyor ve prompt'un 'yalnızca kod' beklentisiyle daha az uyumlu.
- Tüm CSS'i gerçekten inline (style attribute veya <style> bloğu içinde) tut; addTask ve animasyon kuralları için JS içinde dinamik styleSheet oluşturmak yerine statik <style> bloğu tercih et.


---

# Loomina Analiz Raporu — Qwen3.6 Plus

- **Model:** `qwen/qwen3.6-plus`
- **Tarih:** 02.06.2026 15:09:58
- **Üretim Süresi:** 190029 ms
- **Genel Skor:** 67/100
- **Karar Yöntemi:** Tahkim (J3)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3, x-ai/grok-4.3
- **J3 (Tahkimci) çağrılan metrikler:** Okunabilirlik, Güvenlik

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
| Okunabilirlik | 93 | 68 | 72 | **72** | Medyan (J1·J2·J3) — tahkim |
| Performans | 95 | 82 | — | **89** | Ortalama (J1-J2) |
| Güvenlik | 35 | 58 | 38 | **38** | Medyan (J1·J2·J3) — tahkim |
| Sürdürülebilirlik | 45 | 28 | — | **37** | Ortalama (J1-J2) |
| Prompt Uyumu | 97 | 97 | — | **97** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 72/100

**Öneriler:**
- Olay yönetimini daha tutarlı hale getirmek için HTML içindeki inline olay işleyicileri (onmouseover, onfocus vb.) JavaScript tarafına taşıyıp addEventListener kullanın.
- taskCounter başlangıç değerinin neden 6 olduğunu açıklayan kısa bir yorum ekleyin.
- Her kart için tekrar eden inline stilleri ortadan kaldırmak amacıyla bir CSS sınıfı (örn. .task-card) tanımlayıp classList ile uygulayın; bu hem okunabilirliği hem bakımı kolaylaştırır.
- JavaScript içinde handleDragStart, handleDrop gibi fonksiyonların veri aktarımı ve DOM manipülasyonu adımlarını açıklayan kısa yorum satırları ekleyin.

### Performans — 89/100

**Öneriler:**
- updateCounts fonksiyonu her seferinde tüm sütunları dolaşmak yerine sadece değişen sütunun sayısını güncelleyebilir, ancak mevcut hali küçük veri setleri için yeterlidir.
- Yeni oluşturulan kartlara inline stil yerine CSS sınıfı atanması, tarayıcının stil hesaplama yükünü azaltabilir.
- `addTask` içinde `innerHTML` ile şablon birleştirmek yerine `document.createElement` ve `textContent` kullanın; hem XSS riskini ortadan kaldırır hem de tarayıcının HTML parse maliyetini azaltır.
- `setAttribute('ondragstart', ...)` gibi string tabanlı atamalar yerine `newCard.ondragstart = handleDragStart` şeklinde doğrudan property ataması kullanın; bu hem daha hızlıdır hem de global scope kirliliğini önler.

### Güvenlik — 38/100

**Öneriler:**
- Kullanıcı girdisini render etmeden önce 'textContent' kullanın veya 'innerHTML' yerine DOMPurify gibi bir kütüphane ile sanitizasyon uygulayın.
- Alternatif olarak, yeni kart oluştururken 'innerHTML' kullanmak yerine güvenli DOM API'lerini (createElement, textContent) tercih edin.
- Replace `newCard.innerHTML = ...` with DOM construction using `document.createElement('textContent')` or `textContent` assignment to safely render user input without HTML parsing.
- Add input validation: enforce a maximum length (e.g., `if (title.length > 200) return;`) and strip/trim dangerous characters before rendering.

### Sürdürülebilirlik — 37/100

**Öneriler:**
- Satır içi CSS ve doğrudan DOM manipülasyonu yerine, stilleri ayrı bir <style> etiketine veya harici CSS dosyasına taşıyın; HTML yapısında ID'ler yerine class'lar kullanarak daha modüler hale getirin.
- Görev kartı oluşturma mantığını ve sürükle-bırak işleyicilerini ayrı fonksiyonlara ayırın; sütun ekleme gibi değişiklikleri kolaylaştırmak için yapılandırma odaklı bir yaklaşım benimseyin (örneğin sütun listesini bir diziyle tanımlayıp döngüyle oluşturun).
- Ortak kart görünümünü bir <style> bloğunda CSS sınıfı olarak tanımlayıp createTaskCard(title, meta) gibi tek bir render fonksiyonu ile 6 kartı ve addTask içindeki yeni kartı aynı yerden üretin; böylece stil değişikliği tek noktadan yapılır.
- Sütun ve durum listelerini COLUMNS gibi bir sabit diziye çıkarıp sütunları data-id ile render edin; addTask, drop ve updateCounts fonksiyonlarını sürüklenen kartın hedef sütununu veri özniteliğinden okuyacak şekilde genelleştirerek yeni sütun/durum eklemeyi tek satıra indirgeyin.

### Prompt Uyumu — 97/100

- Programatik: 100/100 · Semantik: 92/100
- İhlaller: yok

**Öneriler:**
- Yeni oluşturulan görev kartında 'Just created' gibi yer tutucu yerine kullanıcıdan alınan özel bilgi ile daha doğal bir açıklama eklenebilir.
- Fare olayları (hover/focus) için inline `onmouseover`/`onfocus` yerine CSS sınıfları veya global stil tanımlamaları kullanılarak daha temiz ve sürdürülebilir bir yapı oluşturulabilir.
- 'Create New Task' is implemented as an input placeholder rather than a visible label/heading; consider adding a small visible label or button text to make the action more explicit per the prompt intent.
- Add subtle column-level visual feedback during dragover (e.g., background tint) to better signal drop targets, strengthening the drag-and-drop UX.


---

# Loomina Analiz Raporu — Gemini 3.5 Flash

- **Model:** `google/gemini-3.5-flash`
- **Tarih:** 02.06.2026 15:09:58
- **Üretim Süresi:** 23988 ms
- **Genel Skor:** 79/100
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
| Okunabilirlik | 85 | 84 | — | **85** | Ortalama (J1-J2) |
| Performans | 100 | 82 | — | **91** | Ortalama (J1-J2) |
| Güvenlik | 85 | 88 | — | **87** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 48 | 58 | — | **53** | Ortalama (J1-J2) |
| Prompt Uyumu | 78 | 79 | — | **79** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 85/100

**Öneriler:**
- Inline event handler'ları (ondragover, onclick vb.) kaldırıp, tüm event dinleyicilerini JavaScript'te addEventListener ile yöneterek HTML ve JS arasındaki bağımlılığı azaltın.
- escapeHTML fonksiyonundaki regex'i güncelleyerek tüm özel HTML karakterlerini kapsayacak şekilde düzeltin (ör. /[&<>"']/g).
- Refactor inline event handlers (onclick, ondragstart, ondrop) by attaching listeners in JavaScript using event delegation to keep HTML clean and improve maintainability.
- Add the remaining hardcoded color values (e.g., #1d2125, #444c56, #ff7373) as CSS custom properties in :root to maintain a single source of truth for the color palette.

### Performans — 91/100

**Öneriler:**
- Eğer görev sayısı büyürse, drag olayları için olay delegasyonu (event delegation) kullanılabilir, böylece her kart için ayrı dinleyici eklenmesi önlenir.
- Yeni görev oluşturma işleminde innerHTML yerine DOM API kullanmak, büyük kart içeriklerinde daha verimli olabilir.
- Event delegation kullanın: kartlara tek tek ondragstart/ondragend atamak yerine cards-container'a bir kez listener ekleyip e.target.closest('.card') ile hedefi belirleyin; böylece yüzlerce kartta bellek ve listener overhead'i düşer.
- dragEnter olayının child'lara bubble etmesi nedeniyle sık tetiklenmesini azaltmak için dragover olayını throttling (requestAnimationFrame) ile sarın veya sadece column seviyesinde dinleyin.

### Güvenlik — 87/100

**Öneriler:**
- Kartın onclick delete işleyicisine gönderilen cardId'nin doğrudan string olarak gömülmesi yerine, data attribute üzerinden event delegation kullanarak silme işlemini gerçekleştirin. deleteBtn tıklamasını container düzeyinde dinleyin.
- Input alanına `maxlength` özelliği ekleyin (örn. 200 karakter) ve `createNewTask` içinde uzunluk doğrulaması yaparak potansiyel DoS/abuse riskini azaltın.
- `onclick="deleteTask('${cardId}')"` ile satır içi event handler kullanmak yerine `addEventListener` ile olay delegasyonu (event delegation) kullanarak daha güvenli ve sürdürülebilir bir yapı oluşturun.

### Sürdürülebilirlik — 53/100

**Öneriler:**
- JavaScript mantığını modüllere ayırın: drag-and-drop, task yönetimi ve UI güncellemeleri için ayrı fonksiyon/sınıflar oluşturarak test edilebilirliği artırın.
- Satır içi olay dinleyicileri yerine event delegation kullanın; böylece sütun ve kart yapısı değiştiğinde daha az kod değişikliği gerekir.
- Sütun yapılarını bir COLUMNS sabit dizisinden veya config nesnesinden dinamik olarak render ederek HTML tekrarını ortadan kaldırın ve sütun eklemeyi tek satır değişikliğe indirgeyin.
- Tüm state'i (görevler, sütunlar) tek bir veri yapısında tutun, DOM'u bu state'ten render edin; böylece yeni özellikler (filtre, sıralama, localStorage) eklemek tek bir render fonksiyonunu güncellemekle sınırlı kalır.

### Prompt Uyumu — 79/100

- Programatik: 67/100 · Semantik: 95/100
- İhlaller: inline_css_not_detected

**Öneriler:**
- Görev sayısı her sütunda başlangıçta 2 görünecek şekilde updateCounts fonksiyonu daha erken çağrılabilir.
- Kartlar için başlangıç sürükleme animasyonu ve ipuçları kullanıcı deneyimini artırabilir.
- Sütun başlığındaki görev sayısı, kart silindiğinde veya kart eklendiğinde otomatik güncelleniyor; ancak kart sürüklendiğinde hedef sütunun count'u doğru güncelleniyor — bu zaten mevcut, başka öneri gerekmiyor.
- Mobil görünümde 1fr kullanılmış; tablet için (768px-1024px arası) ara breakpoint eklenerek daha iyi responsive deneyim sağlanabilir.
