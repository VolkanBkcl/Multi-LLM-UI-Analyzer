# Loomina — Model Karşılaştırma Raporu

- **Tarih:** 02.06.2026 14:40:18
- **Karşılaştırılan Model Sayısı:** 3

## Kullanıcı Promptu

Build a dynamic table management floor plan interface for a restaurant. The screen should display a grid of tables color-coded by their current status (e.g., green for vacant, red for occupied, yellow for reserved). Include a sticky bottom control bar with actions for 'Split Bill', 'Merge Tables', and 'Process Payment'. Provide the complete code using React and Tailwind CSS. Do not write any explanations, output only the code.

## Karşılaştırma Tablosu

| Model | Genel | Okunabilirlik | Performans | Güvenlik | Sürdürülebilirlik | Prompt Uyumu |
|---|---|---|---|---|---|---|
| DeepSeek V4 Pro | 82 | 80 | 77 | 98 | 55 | 99 |
| Qwen3.6 Plus | 85 | 84 | 76 | 98 | 70 | 99 |
| Gemini 3.5 Flash | 76 | 74 | 80 | 93 | 37 | 98 |

---

# Loomina Analiz Raporu — DeepSeek V4 Pro

- **Model:** `deepseek/deepseek-v4-pro`
- **Tarih:** 02.06.2026 14:40:18
- **Üretim Süresi:** 100898 ms
- **Genel Skor:** 82/100
- **Karar Yöntemi:** Tahkim (J3)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3, x-ai/grok-4.3
- **J3 (Tahkimci) çağrılan metrikler:** Sürdürülebilirlik

## Kullanıcı Promptu

Build a dynamic table management floor plan interface for a restaurant. The screen should display a grid of tables color-coded by their current status (e.g., green for vacant, red for occupied, yellow for reserved). Include a sticky bottom control bar with actions for 'Split Bill', 'Merge Tables', and 'Process Payment'. Provide the complete code using React and Tailwind CSS. Do not write any explanations, output only the code.

## Üretilen Kod

```html
import React, { useState, useCallback } from 'react';
import { CreditCard, Combine, Scissors, Users, Clock, Coffee, UtensilsCrossed, X, Check, ChevronRight } from 'lucide-react';

// --- Status & Color Mapping ---
const STATUS_MAP = {
  vacant: { bg: 'bg-emerald-50', border: 'border-emerald-200', badge: 'bg-emerald-500', text: 'text-emerald-600', label: 'Vacant', icon: Coffee },
  occupied: { bg: 'bg-rose-50', border: 'border-rose-200', badge: 'bg-rose-500', text: 'text-rose-600', label: 'Occupied', icon: UtensilsCrossed },
  reserved: { bg: 'bg-amber-50', border: 'border-amber-200', badge: 'bg-amber-500', text: 'text-amber-600', label: 'Reserved', icon: Clock },
  merged: { bg: 'bg-violet-100', border: 'border-violet-400', badge: 'bg-violet-600', text: 'text-violet-700', label: 'Merged', icon: Users },
};

// --- Initial Table Data ---
const INITIAL_TABLES = [
  { id: 1, label: 'T1', capacity: 2, status: 'occupied', shape: 'circle', pos: [1, 1] },
  { id: 2, label: 'T2', capacity: 2, status: 'vacant', shape: 'circle', pos: [1, 2] },
  { id: 3, label: 'T3', capacity: 4, status: 'vacant', shape: 'square', pos: [1, 3] },
  { id: 4, label: 'T4', capacity: 4, status: 'occupied', shape: 'square', pos: [2, 1] },
  { id: 5, label: 'T5', capacity: 6, status: 'reserved', shape: 'rectangle', pos: [2, 2] },
  { id: 6, label: 'T6', capacity: 6, status: 'vacant', shape: 'rectangle', pos: [2, 3] },
  { id: 7, label: 'T7', capacity: 8, status: 'reserved', shape: 'large-rect', pos: [3, 1] },
  { id: 8, label: 'T8', capacity: 8, status: 'occupied', shape: 'large-rect', pos: [3, 2] },
  { id: 9, label: 'T9', capacity: 2, status: 'vacant', shape: 'circle', pos: [4, 1] },
  { id: 10, label: 'T10', capacity: 4, status: 'vacant', shape: 'square', pos: [4, 2] },
  { id: 11, label: 'T11', capacity: 6, status: 'vacant', shape: 'rectangle', pos: [4, 3] },
  { id: 12, label: 'T12', capacity: 2, status: 'occupied', shape: 'circle', pos: [3, 3] },
];

const GRID_COLS = 3;
const GRID_ROWS = 4;

// --- Component ---
const RestaurantFloorPlan = () => {
  const [tables, setTables] = useState(INITIAL_TABLES);
  const [selectedTables, setSelectedTables] = useState([]);
  const [mergedGroups, setMergedGroups] = useState({});
  const [actionFeedback, setActionFeedback] = useState(null);
  const [splitBillTarget, setSplitBillTarget] = useState(null);
  const [paymentTarget, setPaymentTarget] = useState(null);

  // --- Helpers ---
  const toggleTableSelection = (tableId) => {
    const table = tables.find(t => t.id === tableId);
    if (table?.status === 'merged') return;
    if (selectedTables.includes(tableId)) {
      setSelectedTables(prev => prev.filter(id => id !== tableId));
    } else {
      setSelectedTables(prev => [...prev, tableId]);
    }
  };

  const showFeedback = (message) => {
    setActionFeedback(message);
    setTimeout(() => setActionFeedback(null), 2000);
  };

  // --- Actions ---
  const handleMergeTables = () => {
    if (selectedTables.length < 2) {
      showFeedback('Select at least two tables to merge');
      return;
    }
    const selectedSet = new Set(selectedTables);
    // Check if any selected table is already in a merged group or occupied/reserved
    const invalid = selectedTables.some(id => {
      const table = tables.find(t => t.id === id);
      return table?.status === 'occupied' || table?.status === 'reserved' || Object.values(mergedGroups).some(group => group.includes(id));
    });
    if (invalid) {
      showFeedback('Only vacant, non-merged tables can be merged');
      return;
    }

    const newGroupId = `merged-${Date.now()}`;
    const updatedMerged = { ...mergedGroups, [newGroupId]: [...selectedTables] };
    
    setTables(prev => prev.map(t => {
      if (selectedSet.has(t.id)) {
        return { ...t, status: 'merged', mergedGroupId: newGroupId };
      }
      return t;
    }));
    setMergedGroups(updatedMerged);
    setSelectedTables([]);
    showFeedback('Tables merged successfully');
  };

  const handleSplitBill = () => {
    if (selectedTables.length !== 1) {
      showFeedback('Select exactly one occupied table to split bill');
      return;
    }
    const table = tables.find(t => t.id === selectedTables[0]);
    if (table?.status !== 'occupied') {
      showFeedback('Select an occupied table for splitting');
      return;
    }
    setSplitBillTarget(table);
    setSelectedTables([]);
  };

  const handleProcessPayment = () => {
    if (selectedTables.length !== 1) {
      showFeedback('Select exactly one occupied table for payment');
      return;
    }
    const table = tables.find(t => t.id === selectedTables[0]);
    if (table?.status !== 'occupied') {
      showFeedback('Select an occupied table to process payment');
      return;
    }
    setPaymentTarget(table);
    setSelectedTables([]);
  };

  const finalizePayment = () => {
    if (!paymentTarget) return;
    setTables(prev => prev.map(t => 
      t.id === paymentTarget.id ? { ...t, status: 'vacant' } : t
    ));
    setPaymentTarget(null);
    showFeedback('Payment processed, table is now vacant');
  };

  const finalizeSplit = (parts) => {
    if (!splitBillTarget) return;
    // For demo purposes, just set table back to vacant after split
    setTables(prev => prev.map(t =>
      t.id === splitBillTarget.id ? { ...t, status: 'vacant' } : t
    ));
    setSplitBillTarget(null);
    showFeedback(`Bill split into ${parts} parts and settled`);
  };

  const handleUnmerge = (groupId) => {
    const groupTables = mergedGroups[groupId] || [];
    setTables(prev => prev.map(t => {
      if (groupTables.includes(t.id)) {
        return { ...t, status: 'vacant', mergedGroupId: null };
      }
      return t;
    }));
    const updatedMerged = { ...mergedGroups };
    delete updatedMerged[groupId];
    setMergedGroups(updatedMerged);
    showFeedback('Tables unmerged');
  };

  // --- Rendering ---
  const getTableStyle = (table) => {
    const colors = STATUS_MAP[table.status] || STATUS_MAP.vacant;
    const isSelected = selectedTables.includes(table.id);
    const isMerged = table.status === 'merged';

    let shapeClasses = 'rounded-2xl';
    if (table.shape === 'circle') shapeClasses = 'rounded-full aspect-square w-20 h-20';
    else if (table.shape === 'square') shapeClasses = 'rounded-2xl w-24 h-24';
    else if (table.shape === 'rectangle') shapeClasses = 'rounded-2xl w-28 h-20';
    else if (table.shape === 'large-rect') shapeClasses = 'rounded-2xl w-36 h-20';

    const borderEffect = isSelected 
      ? 'border-4 border-sky-400 shadow-lg shadow-sky-200/50 ring-2 ring-sky-300 ring-offset-2 scale-105' 
      : `border-2 ${colors.border} shadow-md`;
    
    const mergedEffect = isMerged ? 'border-violet-500 border-4 shadow-violet-200/60' : '';

    return `${colors.bg} ${shapeClasses} ${borderEffect} ${mergedEffect} flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl relative select-none`;
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Table Map</h1>
            <p className="text-sm text-slate-500">Main Dining Room · Floor 1</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
              <span className="w-3 h-3 rounded-full bg-rose-500"></span> Occupied
              <span className="w-3 h-3 rounded-full bg-emerald-500 ml-2"></span> Vacant
              <span className="w-3 h-3 rounded-full bg-amber-500 ml-2"></span> Reserved
              <span className="w-3 h-3 rounded-full bg-violet-600 ml-2"></span> Merged
            </div>
            <div className="h-6 w-px bg-slate-200"></div>
            <div className="text-sm text-slate-700 font-semibold">
              Selected: {selectedTables.length}
            </div>
          </div>
        </div>
      </header>

      {/* Feedback Toast */}
      {actionFeedback && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-slate-800 text-white px-6 py-3 rounded-full shadow-2xl text-sm font-medium animate-bounce">
          {actionFeedback}
        </div>
      )}

      {/* Floor Plan Grid */}
      <main className="flex-1 p-6 overflow-auto flex items-start justify-center">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/80 p-8 max-w-4xl w-full aspect-[4/3] relative overflow-hidden">
          {/* Grid Background */}
          <div 
            className="absolute inset-0 p-8 grid gap-6"
            style={{
              gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
              gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
            }}
          >
            {Array.from({ length: GRID_COLS * GRID_ROWS }).map((_, idx) => (
              <div key={idx} className="border border-dashed border-slate-200 rounded-xl bg-slate-50/30"></div>
            ))}
          </div>

          {/* Tables positioned over grid */}
          <div className="relative w-full h-full z-10">
            {tables.map(table => {
              const colors = STATUS_MAP[table.status] || STATUS_MAP.vacant;
              const Icon = colors.icon;
              const col = ((table.pos[1] - 1) / GRID_COLS) * 100;
              const row = ((table.pos[0] - 1) / GRID_ROWS) * 100;
              
              return (
                <div
                  key={table.id}
                  className={`absolute ${getTableStyle(table)}`}
                  style={{ 
                    left: `calc(${col}% + ${(100/GRID_COLS)/2}% - ${table.shape === 'circle' ? '40px' : table.shape === 'square' ? '48px' : table.shape === 'rectangle' ? '56px' : '72px'})`,
                    top: `calc(${row}% + ${(100/GRID_ROWS)/2}% - ${table.shape === 'large-rect' ? '40px' : '40px'})`,
                  }}
                  onClick={() => toggleTableSelection(table.id)}
                >
                  {table.status === 'merged' ? (
                    <div className="flex flex-col items-center gap-1">
                      <Users size={24} className={colors.text} />
                      <span className="text-xs font-bold text-violet-700">MERGED</span>
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleUnmerge(table.mergedGroupId); }}
                        className="text-[10px] bg-white/80 px-2 py-0.5 rounded-full text-violet-700 font-bold hover:bg-white transition"
                      >
                        Unmerge
                      </button>
                    </div>
                  ) : (
                    <>
                      <Icon size={22} className={`${colors.text} mb-1`} />
                      <span className={`text-sm font-bold ${colors.text}`}>{table.label}</span>
                      <span className={`text-[10px] font-semibold ${colors.text} opacity-80`}>
                        {table.capacity}p
                      </span>
                    </>
                  )}
                  {/* Selection indicator */}
                  {selectedTables.includes(table.id) && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center shadow-md">
                      <Check size={14} className="text-white" strokeWidth={3} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Sticky Bottom Control Bar */}
      <div className="sticky bottom-0 bg-white border-t border-slate-200 shadow-2xl px-6 py-4 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-sm text-slate-500 font-medium">
            {selectedTables.length > 0 ? `${selectedTables.length} table(s) selected` : 'Select a table to perform actions'}
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleSplitBill}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 text-white font-semibold shadow-md hover:bg-amber-600 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={selectedTables.length !== 1}
            >
              <Scissors size={18} /> Split Bill
            </button>
            <button
              onClick={handleMergeTables}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 text-white font-semibold shadow-md hover:bg-violet-700 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={selectedTables.length < 2}
            >
              <Combine size={18} /> Merge Tables
            </button>
            <button
              onClick={handleProcessPayment}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 text-white font-semibold shadow-md hover:bg-slate-900 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={selectedTables.length !== 1}
            >
              <CreditCard size={18} /> Process Payment
            </button>
          </div>
        </div>
      </div>

      {/* Modal: Payment */}
      {paymentTarget && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center" onClick={() => setPaymentTarget(null)}>
          <div className="bg-white rounded-3xl p-6 shadow-2xl max-w-sm w-full mx-4 animate-in slide-in-from-bottom-4" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-slate-800">Process Payment</h3>
              <button onClick={() => setPaymentTarget(null)} className="p-1 rounded-full hover:bg-slate-100"><X size={20} /></button>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 mb-6">
              <p className="text-sm text-slate-600">Table {paymentTarget.label} · {paymentTarget.capacity} seats</p>
              <p className="text-2xl font-bold text-slate-800 mt-1">$148.50</p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setPaymentTarget(null)} className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-medium">Cancel</button>
              <button onClick={finalizePayment} className="flex-1 py-2.5 rounded-xl bg-slate-800 text-white font-semibold flex items-center justify-center gap-2">
                Charge <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Split Bill */}
      {splitBillTarget && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center" onClick={() => setSplitBillTarget(null)}>
          <div className="bg-white rounded-3xl p-6 shadow-2xl max-w-sm w-full mx-4 animate-in slide-in-from-bottom-4" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-slate-800">Split Bill</h3>
              <button onClick={() => setSplitBillTarget(null)} className="p-1 rounded-full hover:bg-slate-100"><X size={20} /></button>
            </div>
            <p className="text-sm text-slate-600 mb-4">How many ways to split Table {splitBillTarget.label}?</p>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[2, 3, 4].map(parts => (
                <button key={parts} onClick={() => finalizeSplit(parts)} className="py-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 font-bold hover:bg-amber-100 transition">
                  {parts} Ways
                </button>
              ))}
            </div>
            <button onClick={() => setSplitBillTarget(null)} className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-600 font-medium">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantFloorPlan;
```

## Hakem Skor Dökümü (J1 / J2 / J3)

| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |
|---|---|---|---|---|---|
| Okunabilirlik | 82 | 78 | — | **80** | Ortalama (J1-J2) |
| Performans | 78 | 75 | — | **77** | Ortalama (J1-J2) |
| Güvenlik | 100 | 95 | — | **98** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 78 | 42 | 55 | **55** | Medyan (J1·J2·J3) — tahkim |
| Prompt Uyumu | 100 | 98 | — | **99** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 80/100

**Öneriler:**
- 'pos' özelliğini 'gridRow' ve 'gridColumn' gibi açıklayıcı adlarla yeniden düzenleyin veya en azından yorum ekleyin.
- Grid hücre boyutu ve konumlandırma için kullanılan sabit değerleri (40px, 48px, vb.) anlamlı sabitlerle (örneğin CIRCLE_SIZE) tanımlayarak sihirli sayıları açıklayın.
- Extract the table positioning logic (especially the shape-based offset calculations with nested ternaries) into a separate helper like `getTableOffset(table)` returning `{width, height, left, top}` values, replacing magic numbers with named constants.
- Split the component: extract the two modals (Payment, SplitBill) and the floor plan grid into separate sub-components to keep `RestaurantFloorPlan` under ~150 lines and improve scannability.

### Performans — 77/100

**Öneriler:**
- `getTableStyle` gibi render sırasında sürekli hesaplanan stilleri `useMemo` ile sararak veya tablo başına bir `useCallback`/`useMemo` kullanarak her render'da yeniden hesaplamayı önleyin.
- `showFeedback` içindeki `setTimeout` geri çağrısını bir `useRef` ile takip edip `useEffect` cleanup'ında `clearTimeout` ile temizleyerek bellek sızıntısı riskini giderin.
- `showFeedback` içindeki `setTimeout` referansını saklayın ve `useEffect` cleanup'ında `clearTimeout` çağırın; ayrıca bileşen unmount olduğunda zamanlayıcıyı temizleyin.
- Tablolar için `React.memo` ile sarılmış bir `TableCard` bileşenine çıkarın ve `getTableStyle` ile `pos` hesaplamasını `useMemo` ile memoize edin; böylece seçim dışı state değişimlerinde gereksiz re-render önlenir.

### Güvenlik — 98/100

**Öneriler:**
- Gelecekte kullanıcı girdisi veya sunucudan gelen dinamik veri eklenirse DOMPurify gibi sanitasyon kütüphaneleri kullanın.
- Güvenlik açısından mevcut durumda herhangi bir sorun yoktur; statik yapı korunduğu sürece ek önlem gerekmez.
- Gelecekte backend entegrasyonu eklendiğinde ödeme veya API anahtarlarını `localStorage` yerine HttpOnly cookie ile saklayın.
- Kullanıcı girdisi alanları (ör. rezervasyon adı, notlar) eklendiğinde DOMPurify veya backend tarafı sanitization uygulayın.

### Sürdürülebilirlik — 55/100

**Öneriler:**
- Bileşen mantığını custom hook'lara (ör. useTableManagement, useModal) ayırarak test edilebilirliği artırın.
- Sabit pozisyon hesaplamalarını ve stilleri ayrı bir utils dosyasına taşıyarak değişiklikleri kolaylaştırın.
- Bileşeni Table, StatusLegend, ControlBar, Modal ve useFloorPlanState gibi alt bileşenlere ve custom hook'a bölerek SRP'yi uygulayın; iş mantığını sunumdan ayırın.
- Status ve shape değerleri için TypeScript union veya enum kullanın; ortak Modal bileşenini soyutlayarak Payment ve SplitBill modal'larındaki tekrar eden JSX'i ortadan kaldırın.

### Prompt Uyumu — 99/100

- Programatik: 100/100 · Semantik: 100/100
- İhlaller: yok

**Öneriler:**
- Prompt'ta işaret edilen "restoran" temasını daha da güçlendirmek için masa durumlarını geçici değiştirirken arka plan veya genel renk paletini biraz daha restoran atmosferine uyarlayabilirsiniz.
- Yerleşim haritasındaki masaların konumlandırma hesaplaması (özellikle 'circle' ve 'large-rect' boyutları) kenar durumlarda taşma yapabilir; daha esnek bir grid/css grid sistemi kullanılabilir.
- Grid uses absolute positioning with manual offsets which is fragile across screen sizes—consider using CSS grid with explicit row/column placement for tables to improve responsiveness.
- Add a small visual indicator (e.g., timer or reservation name) on reserved/occupied tables to better convey which reserved table belongs to whom and how long the table has been occupied.


---

# Loomina Analiz Raporu — Qwen3.6 Plus

- **Model:** `qwen/qwen3.6-plus`
- **Tarih:** 02.06.2026 14:40:18
- **Üretim Süresi:** 133546 ms
- **Genel Skor:** 85/100
- **Karar Yöntemi:** Konsensüs (iki hakem ortalaması)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3
- **J3 (Tahkimci) çağrılan metrikler:** Yok — iki hakem tüm metriklerde uzlaştı.

## Kullanıcı Promptu

Build a dynamic table management floor plan interface for a restaurant. The screen should display a grid of tables color-coded by their current status (e.g., green for vacant, red for occupied, yellow for reserved). Include a sticky bottom control bar with actions for 'Split Bill', 'Merge Tables', and 'Process Payment'. Provide the complete code using React and Tailwind CSS. Do not write any explanations, output only the code.

## Üretilen Kod

```html
import React, { useState, useCallback, useMemo } from 'react';

const TABLE_STATUSES = {
  VACANT: 'vacant',
  OCCUPIED: 'occupied',
  RESERVED: 'reserved',
  MAINTENANCE: 'maintenance'
};

const STATUS_CONFIG = {
  [TABLE_STATUSES.VACANT]: {
    color: 'bg-emerald-500',
    bgLight: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
    icon: '🟢',
    label: 'Vacant'
  },
  [TABLE_STATUSES.OCCUPIED]: {
    color: 'bg-rose-500',
    bgLight: 'bg-rose-50',
    border: 'border-rose-200',
    text: 'text-rose-700',
    icon: '🔴',
    label: 'Occupied'
  },
  [TABLE_STATUSES.RESERVED]: {
    color: 'bg-amber-400',
    bgLight: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-700',
    icon: '🟡',
    label: 'Reserved'
  },
  [TABLE_STATUSES.MAINTENANCE]: {
    color: 'bg-gray-400',
    bgLight: 'bg-gray-50',
    border: 'border-gray-200',
    text: 'text-gray-600',
    icon: '⚫',
    label: 'Maintenance'
  }
};

const initialTables = [
  { id: 'T1', name: 'Table 1', status: TABLE_STATUSES.OCCUPIED, seats: 4, guests: 3, total: 145.50 },
  { id: 'T2', name: 'Table 2', status: TABLE_STATUSES.VACANT, seats: 2, guests: 0, total: 0 },
  { id: 'T3', name: 'Table 3', status: TABLE_STATUSES.RESERVED, seats: 6, guests: 0, total: 0, reservationTime: '19:00' },
  { id: 'T4', name: 'Table 4', status: TABLE_STATUSES.OCCUPIED, seats: 4, guests: 4, total: 230.75 },
  { id: 'T5', name: 'Table 5', status: TABLE_STATUSES.VACANT, seats: 2, guests: 0, total: 0 },
  { id: 'T6', name: 'Table 6', status: TABLE_STATUSES.OCCUPIED, seats: 8, guests: 7, total: 412.00 },
  { id: 'T7', name: 'Table 7', status: TABLE_STATUSES.MAINTENANCE, seats: 4, guests: 0, total: 0 },
  { id: 'T8', name: 'Table 8', status: TABLE_STATUSES.VACANT, seats: 4, guests: 0, total: 0 },
  { id: 'T9', name: 'Table 9', status: TABLE_STATUSES.RESERVED, seats: 2, guests: 0, total: 0, reservationTime: '20:30' },
  { id: 'T10', name: 'Table 10', status: TABLE_STATUSES.OCCUPIED, seats: 6, guests: 5, total: 189.25 },
  { id: 'T11', name: 'Table 11', status: TABLE_STATUSES.VACANT, seats: 2, guests: 0, total: 0 },
  { id: 'T12', name: 'Table 12', status: TABLE_STATUSES.OCCUPIED, seats: 4, guests: 2, total: 98.00 },
];

const TableCard = ({ table, isSelected, onSelect }) => {
  const config = STATUS_CONFIG[table.status];
  
  return (
    <button
      onClick={() => onSelect(table)}
      className={`
        relative group w-full aspect-square rounded-2xl p-3 flex flex-col items-center justify-center
        transition-all duration-300 ease-out cursor-pointer
        ${isSelected 
          ? 'ring-4 ring-blue-500 ring-offset-2 scale-105 shadow-xl shadow-blue-200' 
          : 'hover:scale-105 hover:shadow-lg shadow-md'
        }
        ${config.bgLight} ${config.border} border-2
      `}
    >
      <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${config.color} animate-pulse`} />
      
      <div className="text-2xl mb-1 opacity-80">🪑</div>
      <div className={`font-bold text-sm ${config.text}`}>{table.name}</div>
      <div className="text-xs text-gray-500 mt-1">{table.seats} seats</div>
      
      {table.status === TABLE_STATUSES.OCCUPIED && (
        <>
          <div className="text-xs text-gray-600 mt-1">{table.guests} guests</div>
          <div className="text-xs font-semibold text-gray-800 mt-1">
            ${table.total.toFixed(2)}
          </div>
        </>
      )}
      
      {table.status === TABLE_STATUSES.RESERVED && table.reservationTime && (
        <div className="text-xs text-amber-600 mt-1 font-medium">
          {table.reservationTime}
        </div>
      )}
      
      {table.status === TABLE_STATUSES.MAINTENANCE && (
        <div className="text-xs text-gray-500 mt-1">Out of service</div>
      )}
      
      <div className={`
        absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
      `} />
    </button>
  );
};

const StatusLegend = () => (
  <div className="flex flex-wrap gap-3 mb-4">
    {Object.entries(STATUS_CONFIG).map(([key, config]) => (
      <div key={key} className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-sm border border-gray-100">
        <div className={`w-3 h-3 rounded-full ${config.color}`} />
        <span className="text-xs font-medium text-gray-600">{config.label}</span>
      </div>
    ))}
  </div>
);

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 transform transition-all animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default function RestaurantFloorPlan() {
  const [tables, setTables] = useState(initialTables);
  const [selectedTables, setSelectedTables] = useState([]);
  const [activeModal, setActiveModal] = useState(null);
  const [notification, setNotification] = useState(null);

  const handleSelectTable = useCallback((table) => {
    if (table.status === TABLE_STATUSES.MAINTENANCE) {
      showNotification('Table is under maintenance', 'error');
      return;
    }
    
    setSelectedTables(prev => {
      const exists = prev.find(t => t.id === table.id);
      if (exists) {
        return prev.filter(t => t.id !== table.id);
      }
      if (prev.length >= 3) {
        showNotification('Maximum 3 tables can be selected', 'warning');
        return prev;
      }
      return [...prev, table];
    });
  }, []);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleSplitBill = () => {
    if (selectedTables.length !== 1 || selectedTables[0].status !== TABLE_STATUSES.OCCUPIED) {
      showNotification('Please select one occupied table', 'error');
      return;
    }
    setActiveModal('splitBill');
  };

  const handleMergeTables = () => {
    if (selectedTables.length < 2) {
      showNotification('Please select at least 2 tables to merge', 'error');
      return;
    }
    setActiveModal('mergeTables');
  };

  const handleProcessPayment = () => {
    const occupiedSelected = selectedTables.filter(t => t.status === TABLE_STATUSES.OCCUPIED);
    if (occupiedSelected.length === 0) {
      showNotification('Please select at least one occupied table', 'error');
      return;
    }
    setActiveModal('payment');
  };

  const handleConfirmPayment = () => {
    setTables(prev => prev.map(t => 
      selectedTables.find(s => s.id === t.id) && t.status === TABLE_STATUSES.OCCUPIED
        ? { ...t, status: TABLE_STATUSES.VACANT, guests: 0, total: 0 }
        : t
    ));
    setSelectedTables([]);
    setActiveModal(null);
    showNotification('Payment processed successfully!', 'success');
  };

  const handleConfirmMerge = () => {
    const mergedTable = {
      id: `M-${selectedTables.map(t => t.id).join('-')}`,
      name: `Merged (${selectedTables.length} tables)`,
      status: TABLE_STATUSES.OCCUPIED,
      seats: selectedTables.reduce((sum, t) => sum + t.seats, 0),
      guests: selectedTables.reduce((sum, t) => sum + t.guests, 0),
      total: selectedTables.reduce((sum, t) => sum + t.total, 0)
    };
    
    setTables(prev => {
      const filtered = prev.filter(t => !selectedTables.find(s => s.id === t.id));
      return [...filtered, mergedTable];
    });
    setSelectedTables([]);
    setActiveModal(null);
    showNotification('Tables merged successfully!', 'success');
  };

  const stats = useMemo(() => ({
    vacant: tables.filter(t => t.status === TABLE_STATUSES.VACANT).length,
    occupied: tables.filter(t => t.status === TABLE_STATUSES.OCCUPIED).length,
    reserved: tables.filter(t => t.status === TABLE_STATUSES.RESERVED).length,
    maintenance: tables.filter(t => t.status === TABLE_STATUSES.MAINTENANCE).length,
    totalRevenue: tables.filter(t => t.status === TABLE_STATUSES.OCCUPIED).reduce((sum, t) => sum + t.total, 0)
  }), [tables]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-24">
      {/* Notification */}
      {notification && (
        <div className={`
          fixed top-4 right-4 z-50 px-6 py-3 rounded-xl shadow-lg transform transition-all duration-300 animate-in slide-in-from-top-2
          ${notification.type === 'success' ? 'bg-emerald-500 text-white' : 
            notification.type === 'error' ? 'bg-rose-500 text-white' : 
            'bg-amber-500 text-white'}
        `}>
          <div className="flex items-center gap-2">
            <span className="text-lg">
              {notification.type === 'success' ? '✓' : notification.type === 'error' ? '✕' : '⚠'}
            </span>
            <span className="font-medium">{notification.message}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                R
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Restaurant Floor Plan</h1>
                <p className="text-xs text-gray-500">Real-time table management</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-lg">
                <span className="text-indigo-600 font-semibold">${stats.totalRevenue.toFixed(2)}</span>
                <span className="text-xs text-indigo-400">Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm text-gray-600 font-medium">Live</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-emerald-600">{stats.vacant}</div>
            <div className="text-xs text-gray-500 font-medium">Vacant</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-rose-600">{stats.occupied}</div>
            <div className="text-xs text-gray-500 font-medium">Occupied</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-amber-600">{stats.reserved}</div>
            <div className="text-xs text-gray-500 font-medium">Reserved</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-gray-600">{stats.maintenance}</div>
            <div className="text-xs text-gray-500 font-medium">Maintenance</div>
          </div>
        </div>

        {/* Legend */}
        <StatusLegend />

        {/* Floor Plan Grid */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800">Floor Plan</h2>
            {selectedTables.length > 0 && (
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                {selectedTables.length} selected
              </span>
            )}
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tables.map(table => (
              <TableCard
                key={table.id}
                table={table}
                isSelected={selectedTables.some(t => t.id === table.id)}
                onSelect={handleSelectTable}
              />
            ))}
          </div>
        </div>

        {/* Quick Actions Info */}
        <div className="mt-6 bg-blue-50 rounded-xl p-4 border border-blue-100">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600">ℹ️</span>
            </div>
            <div>
              <h3 className="font-semibold text-blue-800 text-sm">How to use</h3>
              <p className="text-xs text-blue-600 mt-1">
                Click tables to select them. Use the bottom bar to split bills, merge tables, or process payments. 
                You can select up to 3 tables at once.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Bottom Control Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={handleSplitBill}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              Split Bill
            </button>
            
            <button
              onClick={handleMergeTables}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              Merge Tables
            </button>
            
            <button
              onClick={handleProcessPayment}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Process Payment
            </button>
            
            {selectedTables.length > 0 && (
              <button
                onClick={() => setSelectedTables([])}
                className="px-4 py-3 bg-gray-100 text-gray-600 rounded-xl font-medium hover:bg-gray-200 transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Split Bill Modal */}
      <Modal
        isOpen={activeModal === 'splitBill'}
        onClose={() => setActiveModal(null)}
        title="Split Bill"
      >
        {selectedTables.length === 1 && (
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-2">Selected Table</div>
              <div className="font-semibold text-gray-800">{selectedTables[0].name}</div>
              <div className="text-2xl font-bold text-gray-900 mt-2">${selectedTables[0].total.toFixed(2)}</div>
            </div>
            
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">Split Method</label>
              <div className="grid grid-cols-2 gap-2">
                {['Equal Split', 'By Items', 'Custom Amount', 'By Percentage'].map(method => (
                  <button
                    key={method}
                    className="px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-colors"
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex gap-3 pt-4">
              <button
                onClick={() => setActiveModal(null)}
                className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setActiveModal(null);
                  showNotification('Bill split successfully!', 'success');
                }}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-semibold hover:from-violet-600 hover:to-purple-700 transition-all shadow-md"
              >
                Confirm Split
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Merge Tables Modal */}
      <Modal
        isOpen={activeModal === 'mergeTables'}
        onClose={() => setActiveModal(null)}
        title="Merge Tables"
      >
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-2">Selected Tables</div>
            <div className="space-y-2">
              {selectedTables.map(table => (
                <div key={table.id} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0">
                  <div>
                    <div className="font-medium text-gray-800">{table.name}</div>
                    <div className="text-xs text-gray-500">{table.seats} seats • {table.guests} guests</div>
                  </div>
                  <div className="font-semibold text-gray-900">${table.total.toFixed(2)}</div>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">Total</span>
              <span className="text-xl font-bold text-gray-900">
                ${selectedTables.reduce((sum, t) => sum + t.total, 0).toFixed(2)}
              </span>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
            <p className="text-xs text-blue-700">
              Merged tables will be combined into a single table with combined seating capacity and total bill.
            </p>
          </div>
          
          <div className="flex gap-3 pt-4">
            <button
              onClick={() => setActiveModal(null)}
              className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmMerge}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all shadow-md"
            >
              Merge Tables
            </button>
          </div>
        </div>
      </Modal>

      {/* Payment Modal */}
      <Modal
        isOpen={activeModal === 'payment'}
        onClose={() => setActiveModal(null)}
        title="Process Payment"
      >
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-2">Tables to Process</div>
            <div className="space-y-2">
              {selectedTables.filter(t => t.status === TABLE_STATUSES.OCCUPIED).map(table => (
                <div key={table.id} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0">
                  <div>
                    <div className="font-medium text-gray-800">{table.name}</div>
                    <div className="text-xs text-gray-500">{table.guests} guests</div>
                  </div>
                  <div className="font-semibold text-gray-900">${table.total.toFixed(2)}</div>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">Total Amount</span>
              <span className="text-2xl font-bold text-emerald-600">
                ${selectedTables.filter(t => t.status === TABLE_STATUSES.OCCUPIED).reduce((sum, t) => sum + t.total, 0).toFixed(2)}
              </span>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Payment Method</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { icon: '💳', label: 'Card' },
                { icon: '💵', label: 'Cash' },
                { icon: '📱', label: 'Digital' }
              ].map(method => (
                <button
                  key={method.label}
                  className="flex flex-col items-center gap-1 p-3 bg-white border-2 border-gray-200 rounded-xl hover:border-emerald-500 transition-colors"
                >
                  <span className="text-2xl">{method.icon}</span>
                  <span className="text-xs font-medium text-gray-700">{method.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex gap-3 pt-4">
            <button
              onClick={() => setActiveModal(null)}
              className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmPayment}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-green-700 transition-all shadow-md"
            >
              Confirm Payment
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
```

## Hakem Skor Dökümü (J1 / J2 / J3)

| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |
|---|---|---|---|---|---|
| Okunabilirlik | 90 | 78 | — | **84** | Ortalama (J1-J2) |
| Performans | 80 | 72 | — | **76** | Ortalama (J1-J2) |
| Güvenlik | 100 | 95 | — | **98** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 78 | 62 | — | **70** | Ortalama (J1-J2) |
| Prompt Uyumu | 100 | 98 | — | **99** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 84/100

**Öneriler:**
- Fonksiyon isimleri daha açıklayıcı hale getirilebilir: örn. `handleSelectTable` → `handleTableSelectionToggle`.
- Uzun dosya, bileşenlerin ayrı dosyalara çıkarılması ve import sıralamasının düzenlenmesiyle okunabilirlik artırılabilir.
- Main bileşeni (~350 satır) daha küçük parçalara ayırın: SplitBillModal, MergeTablesModal ve PaymentModal'ı ayrı bileşenler olarak çıkarın.
- 3000 (ms) ve 3 (maks. seçim) gibi sihirli sayıları MAX_SELECTABLE_TABLES, NOTIFICATION_TIMEOUT_MS gibi anlamlı sabitler olarak tanımlayın.

### Performans — 76/100

**Öneriler:**
- showNotification içinde setTimeout return değeri bir ref'te saklanıp, useEffect cleanup ile clearTimeout çağrılarak bellek sızıntısı önlenmeli.
- TableCard bileşeni React.memo ile sarılarak selectedTables değişimlerinde gereksiz yeniden render'lar azaltılabilir; fakat 12 masa için kritik değil.
- `showNotification` içindeki `setTimeout` referansını bir ref'te tutun ve `useEffect` cleanup'ında `clearTimeout` çağırın; ayrıca bileşen unmount olduysa setState çağrısını bir `isMounted` flag ile engelleyin.
- `TableCard`'ı `React.memo` ile sarıp, prop olarak geçilen callback'leri (`handleSelectTable` gibi) `useCallback` ile memoize ederek parent state değişimlerinde gereksiz re-render'ların önüne geçin.

### Güvenlik — 98/100

**Öneriler:**
- Kullanıcı girdisi olan formlar eklenirse client-side input validation (örn. email formatı, uzunluk kontrolü) ekleyin.
- İleride API entegrasyonu yapılırsa API anahtarlarını çevre değişkenlerinde saklayın, kod içinde sabit tanımlamayın.
- Modal'larda escape tuşu ile kapatma ve focus trap eklenerek UI güvenliği artırılabilir.
- Gelecekte backend entegrasyonu yapılırsa API anahtarları environment variable olarak (.env) tanımlanmalı ve token'lar httpOnly cookie'de saklanmalıdır.

### Sürdürülebilirlik — 70/100

**Öneriler:**
- Ana bileşeni daha küçük parçalara ayırın: FloorPlanGrid, BottomControlBar, StatsBar gibi alt bileşenler oluşturun ve iş mantığını (seçim, bildirim, modal yönetimi) özel bir hook'a (useTableManagement) taşıyın.
- Modal içeriklerini (SplitBill, MergeTables, Payment) ayrı bileşenlere çıkararak ana bileşenin karmaşıklığını azaltın ve her bir modalın bağımsız test edilebilirliğini artırın.
- İş mantığını (handleSplitBill, handleMergeTables, handleProcessPayment, selectedTables yönetimi) custom hook'lara (useTableSelection, useTableActions) çıkararak ana bileşeni sadece sunum (presentation) katmanına indirgeyin.
- SplitBillModal, MergeTablesModal, ProcessPaymentModal bileşenlerini ayrı dosyalar olarak ayırarak ana bileşenin monolitik yapısını kırın; ayrıca initialTables verisini ayrı bir data dosyasına (ör. data/tables.js) taşıyın.

### Prompt Uyumu — 99/100

- Programatik: 100/100 · Semantik: 100/100
- İhlaller: yok

**Öneriler:**
- Masa statü renkleri prompt'ta belirtildiği gibi 'green for vacant, red for occupied, yellow for reserved' olarak net tanımlanmış ancak kod ayrıca 'maintenance' eklemiş; bu ek gereksinim olmasa da sorun değil.
- Floor plan'in 'grid of tables' düzeni ve sticky bar'ın konumu tam olarak istenen yapıda, herhangi bir eksik veya sapma yok.
- 'Split Bill' modal allows selecting a split method but only confirms generically; consider implementing the actual split logic (e.g., divide total by guests) for true production-readiness.
- Consider visually distinguishing the 'grid' as a floor plan layout (e.g., positioning tables in a spatial arrangement) rather than a uniform CSS grid, to better reflect a real restaurant floor plan.


---

# Loomina Analiz Raporu — Gemini 3.5 Flash

- **Model:** `google/gemini-3.5-flash`
- **Tarih:** 02.06.2026 14:40:18
- **Üretim Süresi:** 53251 ms
- **Genel Skor:** 76/100
- **Karar Yöntemi:** Konsensüs (iki hakem ortalaması)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3
- **J3 (Tahkimci) çağrılan metrikler:** Yok — iki hakem tüm metriklerde uzlaştı.

## Kullanıcı Promptu

Build a dynamic table management floor plan interface for a restaurant. The screen should display a grid of tables color-coded by their current status (e.g., green for vacant, red for occupied, yellow for reserved). Include a sticky bottom control bar with actions for 'Split Bill', 'Merge Tables', and 'Process Payment'. Provide the complete code using React and Tailwind CSS. Do not write any explanations, output only the code.

## Üretilen Kod

```html
import React, { useState, useMemo, useEffect } from 'react';

// --- MOCK DATA ---
const INITIAL_SECTIONS = [
  { id: 'main', name: 'Main Dining' },
  { id: 'patio', name: 'Patio & Garden' },
  { id: 'bar', name: 'Bar Lounge' },
];

const INITIAL_TABLES = [
  // MAIN DINING
  { id: 'T1', section: 'main', name: 'Table 1', capacity: 4, status: 'occupied', shape: 'square', x: 1, y: 1, currentBill: 124.50, server: 'Alex M.', timeElapsed: '45m', items: [{ name: 'Ribeye Steak', price: 42 }, { name: 'Cabernet Sauvignon', price: 18 }, { name: 'Truffle Fries', price: 14 }, { name: 'Chocolate Lava Cake', price: 12 }, { name: 'Craft IPA', price: 8 }] },
  { id: 'T2', section: 'main', name: 'Table 2', capacity: 2, status: 'vacant', shape: 'round', x: 1, y: 2, currentBill: 0, server: '', timeElapsed: '', items: [] },
  { id: 'T3', section: 'main', name: 'Table 3', capacity: 6, status: 'reserved', shape: 'rectangle', x: 1, y: 3, currentBill: 0, server: 'Sarah K.', timeElapsed: '19:30', items: [] },
  { id: 'T4', section: 'main', name: 'Table 4', capacity: 4, status: 'occupied', shape: 'square', x: 2, y: 1, currentBill: 89.20, server: 'Alex M.', timeElapsed: '1h 10m', items: [{ name: 'Margherita Pizza', price: 19 }, { name: 'Caesar Salad', price: 15 }, { name: 'Aperol Spritz', price: 14 }] },
  { id: 'T5', section: 'main', name: 'Table 5', capacity: 8, status: 'occupied', shape: 'rectangle', x: 2, y: 2, currentBill: 342.10, server: 'David L.', timeElapsed: '2h 15m', items: [{ name: 'Seafood Platter', price: 120 }, { name: 'Chardonnay Bottle', price: 65 }, { name: 'Oysters (Dozen)', price: 36 }, { name: 'Filet Mignon', price: 48 }] },
  { id: 'T6', section: 'main', name: 'Table 6', capacity: 2, status: 'vacant', shape: 'round', x: 2, y: 3, currentBill: 0, server: '', timeElapsed: '', items: [] },
  { id: 'T7', section: 'main', name: 'Table 7', capacity: 4, status: 'vacant', shape: 'square', x: 3, y: 1, currentBill: 0, server: '', timeElapsed: '', items: [] },
  { id: 'T8', section: 'main', name: 'Table 8', capacity: 4, status: 'reserved', shape: 'square', x: 3, y: 2, currentBill: 0, server: 'Sarah K.', timeElapsed: '20:00', items: [] },
  
  // PATIO
  { id: 'P1', section: 'patio', name: 'Patio 1', capacity: 2, status: 'occupied', shape: 'round', x: 1, y: 1, currentBill: 45.00, server: 'Emma W.', timeElapsed: '30m', items: [{ name: 'Garden Burger', price: 18 }, { name: 'Lemonade', price: 5 }] },
  { id: 'P2', section: 'patio', name: 'Patio 2', capacity: 4, status: 'vacant', shape: 'square', x: 1, y: 2, currentBill: 0, server: '', timeElapsed: '', items: [] },
  { id: 'P3', section: 'patio', name: 'Patio 3', capacity: 4, status: 'vacant', shape: 'square', x: 2, y: 1, currentBill: 0, server: '', timeElapsed: '', items: [] },
  { id: 'P4', section: 'patio', name: 'Patio 4', capacity: 6, status: 'reserved', shape: 'rectangle', x: 2, y: 2, currentBill: 0, server: 'Emma W.', timeElapsed: '18:00', items: [] },

  // BAR
  { id: 'B1', section: 'bar', name: 'Bar Slip 1', capacity: 1, status: 'occupied', shape: 'round', x: 1, y: 1, currentBill: 28.00, server: 'Marcus T.', timeElapsed: '15m', items: [{ name: 'Old Fashioned', price: 16 }, { name: 'Spiced Nuts', price: 6 }] },
  { id: 'B2', section: 'bar', name: 'Bar Slip 2', capacity: 1, status: 'occupied', shape: 'round', x: 1, y: 2, currentBill: 16.00, server: 'Marcus T.', timeElapsed: '10m', items: [{ name: 'Negroni', price: 16 }] },
  { id: 'B3', section: 'bar', name: 'Bar Slip 3', capacity: 1, status: 'vacant', shape: 'round', x: 1, y: 3, currentBill: 0, server: '', timeElapsed: '', items: [] },
  { id: 'B4', section: 'bar', name: 'Bar Slip 4', capacity: 1, status: 'vacant', shape: 'round', x: 1, y: 4, currentBill: 0, server: '', timeElapsed: '', items: [] },
  { id: 'B5', section: 'bar', name: 'Bar Lounge 1', capacity: 4, status: 'occupied', shape: 'square', x: 2, y: 2, currentBill: 94.00, server: 'Marcus T.', timeElapsed: '50m', items: [{ name: 'Charcuterie Board', price: 28 }, { name: 'Pinot Noir', price: 15 }] },
];

// --- ICONS ---
const Icons = {
  Users: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Clock: () => (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Dollar: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Merge: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  Split: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
    </svg>
  ),
  Server: () => (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  Check: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  Plus: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  ),
  ChevronRight: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  ),
  X: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
};

export default function RestaurantFloorPlan() {
  const [sections] = useState(INITIAL_SECTIONS);
  const [activeSection, setActiveSection] = useState('main');
  const [tables, setTables] = useState(INITIAL_TABLES);
  const [selectedTableIds, setSelectedTableIds] = useState([]);
  const [isMultiSelectMode, setIsMultiSelectMode] = useState(false);
  const [multiSelectAction, setMultiSelectAction] = useState(null); // 'merge' | 'split'
  
  // Modals state
  const [activeModal, setActiveModal] = useState(null); // 'payment' | 'split' | 'merge'
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Computed Values
  const filteredTables = useMemo(() => {
    return tables.filter(t => t.section === activeSection);
  }, [tables, activeSection]);

  const stats = useMemo(() => {
    const total = tables.length;
    const vacant = tables.filter(t => t.status === 'vacant').length;
    const occupied = tables.filter(t => t.status === 'occupied').length;
    const reserved = tables.filter(t => t.status === 'reserved').length;
    return { total, vacant, occupied, reserved };
  }, [tables]);

  const lastSelectedTable = useMemo(() => {
    if (selectedTableIds.length === 0) return null;
    return tables.find(t => t.id === selectedTableIds[selectedTableIds.length - 1]);
  }, [selectedTableIds, tables]);

  // Handle Table Click
  const handleTableClick = (tableId) => {
    const table = tables.find(t => t.id === tableId);
    if (!table) return;

    if (isMultiSelectMode) {
      if (selectedTableIds.includes(tableId)) {
        setSelectedTableIds(selectedTableIds.filter(id => id !== tableId));
      } else {
        // Enforce logical constraints based on action
        if (multiSelectAction === 'merge') {
          // Can only merge tables in the same section
          const firstTable = tables.find(t => t.id === selectedTableIds[0]);
          if (firstTable && firstTable.section !== table.section) return;
        }
        setSelectedTableIds([...selectedTableIds, tableId]);
      }
    } else {
      setSelectedTableIds([tableId]);
    }
  };

  // Quick State Change Helper
  const updateTableStatus = (tableId, newStatus) => {
    setTables(prev => prev.map(t => {
      if (t.id === tableId) {
        const isOccupied = newStatus === 'occupied';
        return {
          ...t,
          status: newStatus,
          currentBill: isOccupied ? (t.currentBill || 45.00) : 0,
          server: isOccupied ? (t.server || 'Alex M.') : '',
          timeElapsed: isOccupied ? '5m' : '',
          items: isOccupied ? (t.items.length ? t.items : [{ name: 'Chef Special Platter', price: 32 }, { name: 'House Wine', price: 13 }]) : []
        };
      }
      return t;
    }));
  };

  // Actions
  const handleStartMergeMode = () => {
    setIsMultiSelectMode(true);
    setMultiSelectAction('merge');
    setSelectedTableIds([]);
  };

  const handleStartSplitMode = () => {
    // Split bill can be triggered directly on single selected occupied table
    if (selectedTableIds.length === 1) {
      const table = tables.find(t => t.id === selectedTableIds[0]);
      if (table && table.status === 'occupied') {
        setActiveModal('split');
      }
    }
  };

  const handleStartPaymentMode = () => {
    if (selectedTableIds.length === 1) {
      const table = tables.find(t => t.id === selectedTableIds[0]);
      if (table && table.status === 'occupied') {
        setActiveModal('payment');
      }
    }
  };

  const executeMerge = () => {
    if (selectedTableIds.length < 2) return;
    
    const mergedNames = selectedTableIds.map(id => tables.find(t => t.id === id).name).join(' + ');
    const totalCapacity = selectedTableIds.reduce((sum, id) => sum + tables.find(t => t.id === id).capacity, 0);
    const totalBill = selectedTableIds.reduce((sum, id) => sum + tables.find(t => t.id === id).currentBill, 0);
    const combinedItems = selectedTableIds.flatMap(id => tables.find(t => t.id === id).items);

    // Create a new master table and remove/disable others
    setTables(prev => {
      const baseTableId = selectedTableIds[0];
      return prev.map(t => {
        if (t.id === baseTableId) {
          return {
            ...t,
            name: `${t.name} (Merged)`,
            capacity: totalCapacity,
            currentBill: totalBill,
            items: combinedItems,
            status: 'occupied',
            server: t.server || 'Alex M.',
            timeElapsed: 'Merged'
          };
        }
        if (selectedTableIds.slice(1).includes(t.id)) {
          return { ...t, status: 'vacant', currentBill: 0, items: [], server: '', timeElapsed: '' };
        }
        return t;
      });
    });

    cancelMultiSelect();
  };

  const cancelMultiSelect = () => {
    setIsMultiSelectMode(false);
    setMultiSelectAction(null);
    setSelectedTableIds([]);
  };

  const finalizePayment = () => {
    setPaymentSuccess(true);
    setTimeout(() => {
      if (selectedTableIds.length === 1) {
        updateTableStatus(selectedTableIds[0], 'vacant');
      }
      setActiveModal(null);
      setPaymentSuccess(false);
      setSelectedTableIds([]);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* HEADER */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-40 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <span className="font-bold text-white text-lg">B</span>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                BistroFlow Engine
              </h1>
              <p className="text-xs text-slate-400 font-medium">Live Floor Plan & POS</p>
            </div>
          </div>

          {/* STATS COUNTER */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl px-4 py-2 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Vacant</p>
                <p className="text-sm font-bold text-emerald-400">{stats.vacant} <span className="text-slate-500 text-xs font-normal">/ {stats.total}</span></p>
              </div>
            </div>

            <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl px-4 py-2 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
              <div>
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Occupied</p>
                <p className="text-sm font-bold text-rose-400">{stats.occupied} <span className="text-slate-500 text-xs font-normal">/ {stats.total}</span></p>
              </div>
            </div>

            <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl px-4 py-2 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <div>
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Reserved</p>
                <p className="text-sm font-bold text-amber-400">{stats.reserved} <span className="text-slate-500 text-xs font-normal">/ {stats.total}</span></p>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* SUB-HEADER / SECTION TABS */}
      <div className="bg-slate-900 border-b border-slate-800 px-6 py-3">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Section Selector */}
          <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 w-full sm:w-auto">
            {sections.map(sec => (
              <button
                key={sec.id}
                onClick={() => setActiveSection(sec.id)}
                className={`flex-1 sm:flex-initial px-5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 ${
                  activeSection === sec.id
                    ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/10'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                }`}
              >
                {sec.name}
              </button>
            ))}
          </div>

          {/* Mode Indicators */}
          {isMultiSelectMode && (
            <div className="flex items-center gap-3 bg-indigo-950/60 border border-indigo-500/30 px-4 py-2 rounded-xl animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <p className="text-xs font-medium text-indigo-300">
                {multiSelectAction === 'merge' ? 'Select tables to merge' : 'Select table for action'}
              </p>
              <button 
                onClick={cancelMultiSelect}
                className="text-xs bg-slate-900 hover:bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700 transition"
              >
                Cancel
              </button>
              {multiSelectAction === 'merge' && selectedTableIds.length >= 2 && (
                <button 
                  onClick={executeMerge}
                  className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1 rounded-md transition font-semibold"
                >
                  Merge ({selectedTableIds.length})
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pb-32">
        
        {/* LEFT/CENTER: Interactive Floor Plan */}
        <div className="lg:col-span-8 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 shadow-xl backdrop-blur-sm min-h-[500px]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Floor Map</h3>
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500" /> Vacant</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-rose-500/20 border border-rose-500" /> Occupied</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500" /> Reserved</span>
            </div>
          </div>

          {/* Interactive Grid Map */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {filteredTables.map(table => {
              const isSelected = selectedTableIds.includes(table.id);
              
              // Dynamic Status Styling
              let statusClasses = '';
              let glowColor = '';
              if (table.status === 'vacant') {
                statusClasses = 'border-emerald-500/40 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-400';
                glowColor = 'rgba(16,185,129,0.15)';
              } else if (table.status === 'occupied') {
                statusClasses = 'border-rose-500/40 bg-rose-500/5 hover:bg-rose-500/10 text-rose-400';
                glowColor = 'rgba(244,63,94,0.15)';
              } else if (table.status === 'reserved') {
                statusClasses = 'border-amber-500/40 bg-amber-500/5 hover:bg-amber-500/10 text-amber-400';
                glowColor = 'rgba(245,158,11,0.15)';
              }

              // Shape styling
              const shapeClass = table.shape === 'round' 
                ? 'rounded-full aspect-square' 
                : table.shape === 'rectangle'
                  ? 'rounded-2xl aspect-[2/1] col-span-1 md:col-span-2'
                  : 'rounded-2xl aspect-square';

              return (
                <button
                  key={table.id}
                  onClick={() => handleTableClick(table.id)}
                  style={{
                    boxShadow: isSelected ? `0 0 25px ${glowColor}, inset 0 0 12px ${glowColor}` : 'none'
                  }}
                  className={`relative flex flex-col items-center justify-between p-5 border-2 transition-all duration-300 ${shapeClass} ${statusClasses} ${
                    isSelected ? 'border-indigo-500 ring-2 ring-indigo-500/30 scale-[1.02] z-10' : ''
                  }`}
                >
                  {/* Top Details */}
                  <div className="w-full flex justify-between items-start">
                    <span className="text-xs font-bold tracking-wider opacity-60">{table.id}</span>
                    <span className="flex items-center gap-1 text-[11px] font-semibold bg-slate-950/40 px-2 py-0.5 rounded-full">
                      <Icons.Users /> {table.capacity}
                    </span>
                  </div>

                  {/* Middle Label */}
                  <div className="text-center my-3">
                    <p className="text-base font-bold text-slate-100">{table.name}</p>
                    {table.currentBill > 0 && (
                      <p className="text-sm font-extrabold text-slate-200 mt-0.5">${table.currentBill.toFixed(2)}</p>
                    )}
                  </div>

                  {/* Bottom Details */}
                  <div className="w-full flex justify-between items-center text-[10px] font-medium opacity-80">
                    {table.status === 'occupied' ? (
                      <>
                        <span className="truncate max-w-[80px]">{table.server}</span>
                        <span className="flex items-center gap-1"><Icons.Clock /> {table.timeElapsed}</span>
                      </>
                    ) : table.status === 'reserved' ? (
                      <>
                        <span>Reserved</span>
                        <span className="flex items-center gap-1"><Icons.Clock /> {table.timeElapsed}</span>
                      </>
                    ) : (
                      <span className="w-full text-center text-emerald-500/80 font-bold uppercase tracking-wide">Available</span>
                    )}
                  </div>

                  {/* Selection Checkbox indicator */}
                  {isMultiSelectMode && (
                    <div className={`absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      isSelected 
                        ? 'bg-indigo-600 border-indigo-400 text-white scale-110' 
                        : 'bg-slate-950 border-slate-700 text-transparent'
                    }`}>
                      <Icons.Check />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT: Selected Table Detail Panel */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Active Info / Quick Actions */}
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
            {lastSelectedTable ? (
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                  <div>
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">{lastSelectedTable.id}</span>
                    <h3 className="text-lg font-bold text-slate-100">{lastSelectedTable.name}</h3>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    lastSelectedTable.status === 'occupied' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' :
                    lastSelectedTable.status === 'reserved' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                    'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  }`}>
                    {lastSelectedTable.status}
                  </div>
                </div>

                {/* Quick Status Setter */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <button 
                    onClick={() => updateTableStatus(lastSelectedTable.id, 'vacant')}
                    className={`py-2 rounded-xl text-xs font-bold border transition ${
                      lastSelectedTable.status === 'vacant'
                        ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400'
                        : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:text-slate-300'
                    }`}
                  >
                    Vacant
                  </button>
                  <button 
                    onClick={() => updateTableStatus(lastSelectedTable.id, 'occupied')}
                    className={`py-2 rounded-xl text-xs font-bold border transition ${
                      lastSelectedTable.status === 'occupied'
                        ? 'bg-rose-500/10 border-rose-500 text-rose-400'
                        : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:text-slate-300'
                    }`}
                  >
                    Occupied
                  </button>
                  <button 
                    onClick={() => updateTableStatus(lastSelectedTable.id, 'reserved')}
                    className={`py-2 rounded-xl text-xs font-bold border transition ${
                      lastSelectedTable.status === 'reserved'
                        ? 'bg-amber-500/10 border-amber-500 text-amber-400'
                        : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:text-slate-300'
                    }`}
                  >
                    Reserved
                  </button>
                </div>

                {/* Table Details / Bill List */}
                {lastSelectedTable.status === 'occupied' ? (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs text-slate-400 bg-slate-950/40 p-3 rounded-xl border border-slate-800">
                      <span className="flex items-center gap-1.5"><Icons.Server /> Server: <strong className="text-slate-200">{lastSelectedTable.server}</strong></span>
                      <span className="flex items-center gap-1.5"><Icons.Clock /> Seated: <strong className="text-slate-200">{lastSelectedTable.timeElapsed}</strong></span>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Current Order</h4>
                      <div className="bg-slate-950/40 rounded-xl border border-slate-800/80 divide-y divide-slate-800/60 overflow-hidden">
                        {lastSelectedTable.items.map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center p-3 text-sm">
                            <span className="text-slate-300 font-medium">{item.name}</span>
                            <span className="text-slate-100 font-semibold">${item.price.toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-slate-800 pt-4 flex justify-between items-center">
                      <span className="text-sm font-bold text-slate-400">Total Bill</span>
                      <span className="text-xl font-extrabold text-white">${lastSelectedTable.currentBill.toFixed(2)}</span>
                    </div>
                  </div>
                ) : lastSelectedTable.status === 'reserved' ? (
                  <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800 space-y-3">
                    <p className="text-sm text-slate-300 font-medium">Reservation Details</p>
                    <div className="text-xs space-y-2 text-slate-400">
                      <p className="flex justify-between"><span>Host Server:</span> <strong className="text-slate-200">{lastSelectedTable.server}</strong></p>
                      <p className="flex justify-between"><span>Arrival Time:</span> <strong className="text-slate-200">{lastSelectedTable.timeElapsed}</strong></p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-slate-500 border-2 border-dashed border-slate-800 rounded-xl">
                    <p className="text-sm">Table is empty and ready for seating.</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-16 text-slate-500">
                <div className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center mx-auto mb-3">
                  <Icons.Users />
                </div>
                <p className="text-sm font-medium">Select a table to view details, active orders, and run operations.</p>
              </div>
            )}
          </div>

        </div>

      </main>

      {/* STICKY BOTTOM CONTROL BAR */}
      <footer className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md border-t border-slate-800 py-4 px-6 z-40 shadow-2xl shadow-slate-950/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Selected status summary */}
          <div className="text-sm text-slate-400 font-medium">
            {selectedTableIds.length === 0 ? (
              <span>No tables selected</span>
            ) : (
              <span className="text-slate-200">
                Selected: <strong className="text-indigo-400">{selectedTableIds.map(id => tables.find(t => t.id === id)?.name).join(', ')}</strong>
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-end">
            
            {/* Split Bill */}
            <button
              onClick={handleStartSplitMode}
              disabled={selectedTableIds.length !== 1 || lastSelectedTable?.status !== 'occupied'}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold border transition-all duration-200 ${
                selectedTableIds.length === 1 && lastSelectedTable?.status === 'occupied'
                  ? 'bg-slate-850 hover:bg-slate-800 border-slate-700 text-slate-200 hover:text-white shadow-lg'
                  : 'bg-slate-900/40 border-slate-800 text-slate-600 cursor-not-allowed'
              }`}
            >
              <Icons.Split />
              Split Bill
            </button>

            {/* Merge Tables */}
            <button
              onClick={handleStartMergeMode}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold border transition-all duration-200 ${
                isMultiSelectMode && multiSelectAction === 'merge'
                  ? 'bg-indigo-600 hover:bg-indigo-500 border-indigo-500 text-white shadow-lg shadow-indigo-600/10'
                  : 'bg-slate-850 hover:bg-slate-800 border-slate-700 text-slate-200 hover:text-white'
              }`}
            >
              <Icons.Merge />
              Merge Tables
            </button>

            {/* Process Payment */}
            <button
              onClick={handleStartPaymentMode}
              disabled={selectedTableIds.length !== 1 || lastSelectedTable?.status !== 'occupied'}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-extrabold transition-all duration-200 ${
                selectedTableIds.length === 1 && lastSelectedTable?.status === 'occupied'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black shadow-lg shadow-emerald-500/20 hover:opacity-90 active:scale-95'
                  : 'bg-slate-800 text-slate-600 cursor-not-allowed'
              }`}
            >
              <Icons.Dollar />
              Process Payment
            </button>

          </div>

        </div>
      </footer>

      {/* --- MODAL: SPLIT BILL --- */}
      {activeModal === 'split' && lastSelectedTable && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-scale-up">
            <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-950/40">
              <div>
                <h3 className="text-lg font-bold text-white">Split Bill - {lastSelectedTable.name}</h3>
                <p className="text-xs text-slate-400">Select split preference below</p>
              </div>
              <button onClick={() => setActiveModal(null)} className="text-slate-400 hover:text-white transition">
                <Icons.X />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Summary */}
              <div className="flex justify-between items-center bg-slate-950/40 p-4 rounded-2xl border border-slate-800">
                <span className="text-sm font-semibold text-slate-400">Total Bill Amount</span>
                <span className="text-xl font-bold text-white">${lastSelectedTable.currentBill.toFixed(2)}</span>
              </div>

              {/* Split Methods */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Choose Split Option</h4>
                
                <button 
                  onClick={() => {
                    alert('Splitting evenly by 2: $' + (lastSelectedTable.currentBill / 2).toFixed(2) + ' each.');
                    setActiveModal(null);
                  }}
                  className="w-full flex items-center justify-between p-4 rounded-2xl border border-slate-800 bg-slate-950/20 hover:bg-slate-950/50 hover:border-slate-700 transition text-left"
                >
                  <div>
                    <p className="text-sm font-bold text-slate-200">Split Evenly (2 Ways)</p>
                    <p className="text-xs text-slate-400">Equal share per guest</p>
                  </div>
                  <span className="text-sm font-extrabold text-indigo-400">${(lastSelectedTable.currentBill / 2).toFixed(2)} ea</span>
                </button>

                <button 
                  onClick={() => {
                    alert('Splitting evenly by 3: $' + (lastSelectedTable.currentBill / 3).toFixed(2) + ' each.');
                    setActiveModal(null);
                  }}
                  className="w-full flex items-center justify-between p-4 rounded-2xl border border-slate-800 bg-slate-950/20 hover:bg-slate-950/50 hover:border-slate-700 transition text-left"
                >
                  <div>
                    <p className="text-sm font-bold text-slate-200">Split Evenly (3 Ways)</p>
                    <p className="text-xs text-slate-400">Equal share per guest</p>
                  </div>
                  <span className="text-sm font-extrabold text-indigo-400">${(lastSelectedTable.currentBill / 3).toFixed(2)} ea</span>
                </button>

                <button 
                  onClick={() => {
                    alert('Custom item split screen triggered.');
                    setActiveModal(null);
                  }}
                  className="w-full flex items-center justify-between p-4 rounded-2xl border border-slate-800 bg-slate-950/20 hover:bg-slate-950/50 hover:border-slate-700 transition text-left"
                >
                  <div>
                    <p className="text-sm font-bold text-slate-200">Split by Item</p>
                    <p className="text-xs text-slate-400">Assign specific items to guests</p>
                  </div>
                  <Icons.ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL: PROCESS PAYMENT --- */}
      {activeModal === 'payment' && lastSelectedTable && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-scale-up">
            
            {paymentSuccess ? (
              <div className="p-12 text-center flex flex-col items-center justify-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-emerald-500/10 border border-emerald-500 text-emerald-400 flex items-center justify-center animate-bounce">
                  <Icons.Check />
                </div>
                <h3 className="text-xl font-bold text-white">Payment Successful</h3>
                <p className="text-sm text-slate-400">Receipt printed. Table {lastSelectedTable.name} is now vacant.</p>
              </div>
            ) : (
              <>
                <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-950/40">
                  <div>
                    <h3 className="text-lg font-bold text-white">Process Payment</h3>
                    <p className="text-xs text-slate-400">{lastSelectedTable.name} • Server: {lastSelectedTable.server}</p>
                  </div>
                  <button onClick={() => setActiveModal(null)} className="text-slate-400 hover:text-white transition">
                    <Icons.X />
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  {/* Bill Breakdown */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-slate-400">
                      <span>Subtotal</span>
                      <span className="text-slate-200">${(lastSelectedTable.currentBill * 0.85).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-slate-400">
                      <span>Tax (15%)</span>
                      <span className="text-slate-200">${(lastSelectedTable.currentBill * 0.15).toFixed(2)}</span>
                    </div>
                    <div className="border-t border-slate-800 pt-3 flex justify-between items-center">
                      <span className="text-base font-bold text-slate-100">Total Amount</span>
                      <span className="text-2xl font-extrabold text-emerald-400">${lastSelectedTable.currentBill.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Method</h4>
                    <div className="grid grid-cols-3 gap-2">
                      <button className="flex flex-col items-center justify-center p-3 rounded-xl border border-indigo-500/30 bg-indigo-500/5 hover:bg-indigo-500/10 text-indigo-400 transition">
                        <span className="text-xs font-bold">Credit Card</span>
                      </button>
                      <button className="flex flex-col items-center justify-center p-3 rounded-xl border border-slate-800 bg-slate-950/40 hover:bg-slate-950/80 text-slate-300 transition">
                        <span className="text-xs font-bold">Cash</span>
                      </button>
                      <button className="flex flex-col items-center justify-center p-3 rounded-xl border border-slate-800 bg-slate-950/40 hover:bg-slate-950/80 text-slate-300 transition">
                        <span className="text-xs font-bold">Mobile</span>
                      </button>
                    </div>
                  </div>

                  {/* Tips Selector */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tips</h4>
                    <div className="grid grid-cols-4 gap-2">
                      <button className="py-2 text-xs font-bold rounded-lg bg-slate-950/40 border border-slate-800 hover:border-slate-700 text-slate-300">15%</button>
                      <button className="py-2 text-xs font-bold rounded-lg bg-slate-950/40 border border-slate-800 hover:border-slate-700 text-slate-300">18%</button>
                      <button className="py-2 text-xs font-bold rounded-lg bg-indigo-600 text-white border border-indigo-500">20%</button>
                      <button className="py-2 text-xs font-bold rounded-lg bg-slate-950/40 border border-slate-800 hover:border-slate-700 text-slate-300">Custom</button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={finalizePayment}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-extrabold text-base transition-all duration-200 hover:opacity-95 active:scale-95 shadow-lg shadow-emerald-500/10"
                  >
                    Complete Transaction
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
```

## Hakem Skor Dökümü (J1 / J2 / J3)

| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |
|---|---|---|---|---|---|
| Okunabilirlik | 75 | 72 | — | **74** | Ortalama (J1-J2) |
| Performans | 88 | 72 | — | **80** | Ortalama (J1-J2) |
| Güvenlik | 100 | 85 | — | **93** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 35 | 38 | — | **37** | Ortalama (J1-J2) |
| Prompt Uyumu | 98 | 97 | — | **98** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 74/100

**Öneriler:**
- Bileşeni daha küçük alt bileşenlere ayırarak sorumlulukları dağıtın (FloorPlanGrid, TableCard, BillModal vb.).
- Satır uzunluklarını 120 karakterin altına düşürmek için SVG path'lerini ayrı sabitlere alın veya veri satırlarını bölün; kullanılmayan useEffect import'unu kaldırın.
- Bileşeni daha küçük alt bileşenlere ayırın (TableCard, TableDetailPanel, ControlBar, SplitModal, PaymentModal) ki tek dosya ~500 satır olmasın; her biri tek sorumluluk üstlensin.
- Kullanılmayan `useEffect` importunu ve `Icons.Plus` simgesini kaldırın; ayrıca durum-renk eşlemesini bir `STATUS_STYLES` lookup nesnesine çıkararak if-else zincirini ortadan kaldırın.

### Performans — 80/100

**Öneriler:**
- İsteğe bağlı olarak: Render içinde oluşturulan `style` objeleri (örneğin `boxShadow` hesaplaması) `useCallback` ile veya doğrudan CSS sınıfları kullanılarak optimize edilebilir; bu mikro-performans iyileştirmesi yeniden render maliyetini azaltır.
- `finalizePayment` içindeki `setTimeout` callback'i, bileşen unmount olursa temizlenmeli; `useEffect` içinde return ile `clearTimeout` çağrılarak bellek sızıntısı önlenmelidir.
- finalizePayment içindeki setTimeout'u useRef + useEffect cleanup (clearTimeout) ile sarmalayarak unmount durumunda state güncellemelerini engelleyin.
- executeMerge ve handleTableClick içindeki tekrar eden tables.find() çağrılarını bir Map (id -> table) oluşturarak O(n+m) karmaşıklığa indirin.

### Güvenlik — 93/100

**Öneriler:**
- Gerçek uygulamaya dönüştürüldüğünde kullanıcı girdileri için input doğrulaması eklenmeli.
- Hassas veriler (ödeme bilgileri) işlenirken konsola yazdırılmamalı ve HTTPS zorunlu tutulmalı.
- Ödeme modali gerçek bir ödeme sağlayıcısına (Stripe vb.) bağlandığında tüm iletişim HTTPS üzerinden yapılmalı ve client-side'da kart bilgisi hiç tutulmamalı; hassas veri doğrudan sağlayıcının tokenize API'sine iletilmeli.
- alert() yerine gerçek bir bildirim/toast sistemi kullanılmalı ve gelecekte kullanıcı kaynaklı içerik (rezervasyon adı, özel notlar) render edilecekse DOMPurify ile sanitize edilmelidir.

### Sürdürülebilirlik — 37/100

**Öneriler:**
- Bileşenleri küçük, yeniden kullanılabilir parçalara ayırın (TableCard, Modal, StatsBar, SectionTabs) ve iş mantığını custom hook'lara (useTableSelection, useTableActions) taşıyın.
- Durum sabitleri, renkler ve yapılandırma değerleri için ayrı bir constants.ts dosyası oluşturun; magic string'leri enum veya sabitlerle değiştirin.
- Bileşeni TableCard, StatsCounter, Header, SectionTabs, StickyFooter, SplitBillModal ve PaymentModal gibi alt bileşenlere ayırarak SRP'yi uygulayın; iş mantığını (merge, split, payment) useFloorPlan gibi custom hook'lara taşıyın.
- Status ('occupied'|'vacant'|'reserved') ve action ('merge'|'split'|'payment') tiplerini ayrı bir constants.ts dosyasında enum/sabit dizi olarak tanımlayarak magic string'leri ortadan kaldırın ve renk paletini merkezi bir tema dosyasında toplayın.

### Prompt Uyumu — 98/100

- Programatik: 100/100 · Semantik: 95/100
- İhlaller: yok

**Öneriler:**
- 'Split Bill' ve 'Merge Tables' butonlarının işlevselliği daha gerçekçi hale getirilebilir; şu anki uyarı kutuları yerine fatura bölme veya masa birleştirme sonrası durumu güncelleyen bir akış eklenebilir.
- Sticky bar üzerindeki 'Process Payment' butonu sadece seçili masada çalışıyor; prompt'ta belirtilen kontrol çubuğunun tüm durumları kapsaması için boşta (disabled) iken bile görünür ve işlevsel olması iyileştirilebilir.
- Kontrol bar'ı 'sticky bottom-0' yerine semantik olarak da 'sticky' kullanarak uygulamak prompt'a tam sözcüksel uyum sağlar.
- Reserved durumu için sarı tonunu (yellow-400/500) tercih ederek prompt'taki birebir renk adını yansıtmak daha tutarlı olur.
