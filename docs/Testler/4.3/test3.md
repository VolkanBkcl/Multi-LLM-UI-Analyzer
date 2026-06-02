# Loomina — Model Karşılaştırma Raporu

- **Tarih:** 02.06.2026 17:02:05
- **Karşılaştırılan Model Sayısı:** 3

## Kullanıcı Promptu

Build an advanced AI developer workspace layout. The screen should be divided into three resizable panes: a left sidebar for chat history sessions, a central pane for the active AI conversation, and a right sidebar intended for real-time code execution preview or data visualization based on the AI's output. Provide the complete code using React and Tailwind CSS. Do not write any explanations, output only the code.

## Karşılaştırma Tablosu

| Model | Genel | Okunabilirlik | Performans | Güvenlik | Sürdürülebilirlik | Prompt Uyumu |
|---|---|---|---|---|---|---|
| DeepSeek V4 Pro | 54 | 40 | 55 | 88 | 47 | 39 |
| Qwen3.6 Plus | 66 | 78 | 71 | 58 | 45 | 78 |
| Gemini 3.5 Flash | 69 | 68 | 55 | 89 | 36 | 98 |

---

# Loomina Analiz Raporu — DeepSeek V4 Pro

- **Model:** `deepseek/deepseek-v4-pro`
- **Tarih:** 02.06.2026 17:02:05
- **Üretim Süresi:** 511050 ms
- **Genel Skor:** 54/100
- **Karar Yöntemi:** Tahkim (J3)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3, x-ai/grok-4.3
- **J3 (Tahkimci) çağrılan metrikler:** Okunabilirlik, Performans

## Kullanıcı Promptu

Build an advanced AI developer workspace layout. The screen should be divided into three resizable panes: a left sidebar for chat history sessions, a central pane for the active AI conversation, and a right sidebar intended for real-time code execution preview or data visualization based on the AI's output. Provide the complete code using React and Tailwind CSS. Do not write any explanations, output only the code.

## Üretilen Kod

````html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Developer Workspace</title>
    <script src="https://cdn.tailwindcss.com">
    </script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        surface: {
                            DEFAULT: '#0d0d12',
                            light: '#141419',
                            lighter: '#1a1a21',
                            hover: '#1f1f28',
                            border: '#252530',
                        },
                        accent: {
                            DEFAULT: '#6366f1',
                            light: '#818cf8',
                            glow: '#4f46e5',
                        }
                    },
                    animation: {
                        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
                        'slide-up': 'slideUp 0.3s ease-out',
                        'fade-in': 'fadeIn 0.2s ease-out',
                        'glow': 'glow 2s ease-in-out infinite',
                    },
                    keyframes: {
                        pulseSoft: {
                            '0%, 100%': { opacity: '1' },
                            '50%': { opacity: '0.5' },
                        },
                        slideUp: {
                            '0%': { opacity: '0', transform: 'translateY(8px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' },
                        },
                        fadeIn: {
                            '0%': { opacity: '0' },
                            '100%': { opacity: '1' },
                        },
                        glow: {
                            '0%, 100%': { boxShadow: '0 0 8px rgba(99,102,241,0.3)' },
                            '50%': { boxShadow: '0 0 20px rgba(99,102,241,0.6)' },
                        },
                    },
                },
            },
        }
    </script>
    <script src="https://unpkg.com/react@18/umd/react.production.min.js">
    </script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js">
    </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js">
    </script>
    <style>
        * {
            box-sizing: border-box;
        }
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;
        }
        .resizer {
            cursor: col-resize;
            user-select: none;
            position: relative;
            z-index: 10;
            flex-shrink: 0;
        }
        .resizer::after {
            content: '';
            position: absolute;
            inset: 0 50%;
            width: 2px;
            background: #252530;
            transition: background 0.2s;
            border-radius: 1px;
        }
        .resizer:hover::after,
        .resizer.dragging::after {
            background: #6366f1;
            box-shadow: 0 0 12px rgba(99, 102, 241, 0.7);
            width: 3px;
        }
        .resizer:hover,
        .resizer.dragging {
            background: rgba(99, 102, 241, 0.05);
        }
        body.resizing {
            user-select: none !important;
            cursor: col-resize !important;
        }
        body.resizing * {
            cursor: col-resize !important;
        }
        .scrollbar-thin::-webkit-scrollbar {
            width: 5px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
            background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
            background: #252530;
            border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
            background: #3a3a48;
        }
        .code-line {
            display: flex;
            min-height: 1.5rem;
        }
        .line-number {
            color: #4a4a5a;
            user-select: none;
            min-width: 2.5rem;
            text-align: right;
            padding-right: 1rem;
            flex-shrink: 0;
        }
        .message-enter {
            animation: slideUp 0.3s ease-out;
        }
        @keyframes shimmer {
            0% {
                background-position: -200px 0;
            }
            100% {
                background-position: 200px 0;
            }
        }
        .thinking-dot {
            animation: bounce 1.4s ease-in-out infinite;
        }
        .thinking-dot:nth-child(2) {
            animation-delay: 0.2s;
        }
        .thinking-dot:nth-child(3) {
            animation-delay: 0.4s;
        }
        @keyframes bounce {
            0%,
            80%,
            100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-6px);
            }
        }
        .gradient-border {
            position: relative;
        }
        .gradient-border::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            padding: 1px;
            background: linear-gradient(135deg, #6366f1, #8b5cf6, #3b82f6);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
        }
        .glow-text {
            text-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
        }
    </style>
</head>
<body class="bg-surface text-gray-200 h-screen w-screen overflow-hidden">
    <div id="root"></div>

    <script type="text/babel">
        const { useState, useRef, useEffect, useCallback, useMemo } = React;

        // ─── SVG Icons ────────────────────────────────────
        const Icons = {
            Search: () => (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
            </svg>
        ),
        Plus: () => (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
    ),
    Send: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
),
Bot: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7" width="18" height="13" rx="3"/><circle cx="8.5" cy="13.5" r="1.5"/>
    <circle cx="15.5" cy="13.5" r="1.5"/><path d="M8 18h8"/>
</svg>
),
User: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4"/><path d="M4 22c0-4.4 3.6-8 8-8s8 3.6 8 8"/>
</svg>
),
Play: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="5 3 19 12 5 21 5 3"/>
    </svg>
),
Copy: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
</svg>
),
Check: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
    strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
</svg>
),
Trash: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
    <rect x="10" y="11" width="4" height="6"/><rect x="14" y="11" width="4" height="6"/>
</svg>
),
Code: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
</svg>
),
Terminal: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="6 8 10 12 6 16"/>
    <line x1="13" y1="16" x2="19" y2="16"/>
</svg>
),
Chart: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="12" width="4" height="8" rx="1"/><rect x="10" y="7" width="4" height="13" rx="1"/>
    <rect x="17" y="3" width="4" height="17" rx="1"/>
</svg>
),
Clock: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
</svg>
),
};

// ─── Utility Functions ──────────────────────────────
const extractCodeBlocks = (text) => {
    const regex = /```(\w*)\n?([\s\S]*?)```/g;
    const blocks = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
        blocks.push({ language: match[1] || 'plaintext', code: match[2].trim() });
    }
    return blocks;
};

const formatTime = (date) => {
    const now = new Date();
    const d = new Date(date);
    const diffMs = now - d;
    const diffMins = Math.floor(diffMs / 60000);
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) return `${diffDays}d ago`;
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

// ─── Syntax Highlighting (Simple) ───────────────────
const highlightCode = (code, language) => {
    const keywords = {
        python: ['def', 'return', 'import', 'from', 'class', 'if', 'else', 'elif', 'for', 'while', 'in', 'as',
            'try', 'except', 'with', 'yield', 'lambda', 'None', 'True', 'False', 'and', 'or', 'not', 'pass',
            'break', 'continue', 'self', 'print', 'range', 'len', 'list', 'dict', 'set', 'str', 'int', 'float'
        ],
        javascript: ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'import', 'from',
            'export', 'default', 'class', 'new', 'this', 'super', 'try', 'catch', 'finally', 'async', 'await',
            'true', 'false', 'null', 'undefined', 'console', 'log', 'map', 'filter', 'reduce', 'find'
        ],
        typescript: ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'import', 'from',
            'export', 'default', 'class', 'new', 'this', 'super', 'try', 'catch', 'finally', 'async', 'await',
            'true', 'false', 'null', 'undefined', 'interface', 'type', 'enum', 'readonly', 'extends', 'implements'
        ],
        html: ['html', 'head', 'body', 'div', 'span', 'script', 'style', 'link', 'meta', 'title'],
        css: ['color', 'background', 'margin', 'padding', 'border', 'font', 'display', 'flex', 'grid', 'position'],
        sql: ['SELECT', 'FROM', 'WHERE', 'INSERT', 'UPDATE', 'DELETE', 'CREATE', 'TABLE', 'JOIN', 'ON', 'AND',
            'OR', 'NOT', 'NULL', 'AS', 'ORDER', 'BY', 'GROUP', 'HAVING', 'LIMIT', 'OFFSET', 'INNER', 'LEFT',
            'RIGHT', 'OUTER'
        ],
    };

    const langKey = (language || 'plaintext').toLowerCase();
    const kwSet = new Set(keywords[langKey] || []);

    const lines = code.split('\n');
    return lines.map((line, i) => {
        const elements = [];
        let remaining = line;
        let key = 0;

        // Strings (double and single quotes)
        const stringRegex = /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g;
        const parts = [];
        let lastIdx = 0;
        let smatch;
        while ((smatch = stringRegex.exec(line)) !== null) {
            if (smatch.index > lastIdx) {
                parts.push({ type: 'text', value: line.slice(lastIdx, smatch.index) });
            }
            parts.push({ type: 'string', value: smatch[0] });
            lastIdx = smatch.index + smatch[0].length;
        }
        if (lastIdx < line.length) {
            parts.push({ type: 'text', value: line.slice(lastIdx) });
        }

        parts.forEach(part => {
            if (part.type === 'string') {
                elements.push(
                    <span key={key++} className="text-emerald-400">{part.value}</span>
                );
            } else {
                // Split by word boundaries for keyword highlighting
                const wordRegex = /(\b\w+\b|#[^\n]*|\/\/[^\n]*|[^\w]+)/g;
                const tokens = [];
                let wmatch;
                while ((wmatch = wordRegex.exec(part.value)) !== null) {
                    tokens.push(wmatch[1]);
                }
                tokens.forEach(token => {
                    if (kwSet.has(token)) {
                        elements.push(
                            <span key={key++} className="text-violet-400 font-medium">{token}</span>
                        );
                    } else if (/^#/.test(token) || /^\/\//.test(token)) {
                        elements.push(
                            <span key={key++} className="text-gray-500 italic">{token}</span>
                        );
                    } else if (/^\d+\.?\d*$/.test(token)) {
                        elements.push(
                            <span key={key++} className="text-amber-400">{token}</span>
                        );
                    } else {
                        elements.push(<span key={key++}>{token}</span>);
                    }
                });
            }
        });

        return (
            <div key={i} className="code-line hover:bg-white/[0.02] transition-colors">
                <span className="line-number">{i + 1}</span>
                <span className="flex-1">{elements.length > 0 ? elements : ' '}</span>
            </div>
        );
    });
};

// ─── Demo Data ──────────────────────────────────────
const demoSessionData = [
    { id: 's1', title: 'Data Dashboard with D3.js', preview: 'Building interactive visualizations...',
        date: Date.now() - 120000, messageCount: 8 },
    { id: 's2', title: 'API Rate Limiter Implementation', preview: 'Token bucket algorithm in Go...',
        date: Date.now() - 3600000, messageCount: 12 },
    { id: 's3', title: 'React Component Optimization', preview: 'Memoization and lazy loading...', date: Date
        .now() - 7200000, messageCount: 5 },
    { id: 's4', title: 'PostgreSQL Schema Design', preview: 'Normalization and indexing strategies...', date: Date
        .now() - 86400000, messageCount: 15 },
    { id: 's5', title: 'Kubernetes Deployment Config', preview: 'Multi-service orchestration...', date: Date.now() -
        172800000, messageCount: 9 },
    { id: 's6', title: 'WebSocket Real-time Chat', preview: 'Scaling with Redis pub/sub...', date: Date.now() -
        259200000, messageCount: 20 },
];

const demoMessages = [
    { id: 'm1', role: 'user',
        content: 'I need to create an interactive data dashboard using D3.js. Can you help me build a bar chart component that fetches data from an API and supports hover effects?',
        timestamp: Date.now() - 300000 },
    { id: 'm2', role: 'assistant',
        content: 'Absolutely! I\'ll help you build a professional D3.js bar chart component with smooth animations and interactive hover effects. Here\'s a complete implementation:\n\n```javascript\nimport * as d3 from "d3";\n\n// BarChart component with interactive features\nclass BarChart {\n  constructor(container, data, options = {}) {\n    this.container = container;\n    this.data = data;\n    this.margin = options.margin || { top: 30, right: 30, bottom: 50, left: 60 };\n    this.width = (options.width || 800) - this.margin.left - this.margin.right;\n    this.height = (options.height || 450) - this.margin.top - this.margin.bottom;\n    this.colorScale = options.colorScale || d3.scaleOrdinal(d3.schemeBlues[9]);\n    this.init();\n  }\n\n  init() {\n    this.svg = d3.select(this.container)\n      .append("svg")\n      .attr("width", this.width + this.margin.left + this.margin.right)\n      .attr("height", this.height + this.margin.top + this.margin.bottom)\n      .append("g")\n      .attr("transform", `translate(${this.margin.left},${this.margin.top})`);\n    \n    this.render();\n  }\n\n  render() {\n    const x = d3.scaleBand()\n      .domain(this.data.map(d => d.label))\n      .range([0, this.width])\n      .padding(0.25);\n\n    const y = d3.scaleLinear()\n      .domain([0, d3.max(this.data, d => d.value) * 1.1])\n      .range([this.height, 0]);\n\n    // X axis with staggered labels\n    this.svg.append("g")\n      .attr("transform", `translate(0,${this.height})`)\n      .call(d3.axisBottom(x))\n      .selectAll("text")\n      .attr("transform", "rotate(-30)")\n      .style("text-anchor", "end")\n      .style("font-size", "11px");\n\n    // Y axis with grid lines\n    this.svg.append("g")\n      .call(d3.axisLeft(y).ticks(8))\n      .style("font-size", "11px");\n\n    // Animated bars with hover effects\n    this.svg.selectAll(".bar")\n      .data(this.data)\n      .enter()\n      .append("rect")\n      .attr("class", "bar")\n      .attr("x", d => x(d.label))\n      .attr("width", x.bandwidth())\n      .attr("y", this.height)\n      .attr("height", 0)\n      .attr("fill", (d, i) => this.colorScale(i))\n      .attr("rx", 4)\n      .on("mouseover", this.handleMouseOver.bind(this))\n      .on("mouseout", this.handleMouseOut.bind(this))\n      .transition()\n      .duration(800)\n      .delay((d, i) => i * 80)\n      .attr("y", d => y(d.value))\n      .attr("height", d => this.height - y(d.value));\n  }\n\n  handleMouseOver(event, d) {\n    const bar = d3.select(event.currentTarget);\n    bar.transition().duration(200)\n      .attr("fill", "#6366f1")\n      .attr("filter", "drop-shadow(0 4px 12px rgba(99,102,241,0.5))");\n    \n    // Show tooltip\n    this.showTooltip(event, d);\n  }\n\n  handleMouseOut(event, d) {\n    const bar = d3.select(event.currentTarget);\n    const index = this.data.findIndex(item => item.label === d.label);\n    bar.transition().duration(200)\n      .attr("fill", this.colorScale(index))\n      .attr("filter", null);\n    \n    this.hideTooltip();\n  }\n\n  showTooltip(event, d) {\n    const tooltip = d3.select("#chart-tooltip");\n    tooltip.style("display", "block")\n      .style("left", `${event.pageX + 15}px`)\n      .style("top", `${event.pageY - 40}px`)\n      .html(`<strong>${d.label}</strong><br/>Value: ${d.value.toLocaleString()}`);\n  }\n\n  hideTooltip() {\n    d3.select("#chart-tooltip").style("display", "none");\n  }\n\n  update(newData) {\n    this.data = newData;\n    this.svg.selectAll("*").remove();\n    this.render();\n  }\n}\n\n// Usage example\nconst chartData = [\n  { label: "Jan", value: 45000 },\n  { label: "Feb", value: 52000 },\n  { label: "Mar", value: 48000 },\n  { label: "Apr", value: 61000 },\n  { label: "May", value: 55000 },\n  { label: "Jun", value: 72000 },\n];\n\nconst chart = new BarChart("#chart-container", chartData, {\n  width: 700,\n  height: 400,\n  colorScale: d3.scaleOrdinal([\n    "#3b82f6", "#60a5fa", "#93c5fd",\n    "#6366f1", "#818cf8", "#a5b4fc"\n  ])\n});\n```\n\nThis component features:\n- **Smooth entrance animations** with staggered delays\n- **Interactive hover effects** with color transitions and drop shadows\n- **Dynamic tooltips** that follow the cursor\n- **Responsive axes** with formatted labels\n- **An `update()` method** for live data refresh\n\nYou can extend this with brush selection for zooming or add transition animations when data updates. Would you like me to add any specific features?',
        timestamp: Date.now() - 240000 },
    { id: 'm3', role: 'user',
        content: 'This looks great! Could you also add a dark mode theme and show me how to make the tooltip more polished?',
        timestamp: Date.now() - 180000 },
    { id: 'm4', role: 'assistant',
        content: 'Great idea! Here\'s the enhanced version with a sleek dark theme and a polished tooltip component:\n\n```javascript\n// Enhanced BarChart with dark theme and polished tooltip\nclass DarkThemedBarChart extends BarChart {\n  constructor(container, data, options = {}) {\n    super(container, data, {\n      ...options,\n      colorScale: options.colorScale || \n        d3.scaleOrdinal(["#6366f1", "#8b5cf6", "#a78bfa", "#c4b5fd", "#818cf8", "#93c5fd"])\n    });\n    this.applyDarkTheme();\n  }\n\n  applyDarkTheme() {\n    const bg = "#0d0d12";\n    const textColor = "#cbd5e1";\n    const gridColor = "#1e293b";\n    \n    d3.select(this.container).select("svg")\n      .style("background", bg)\n      .style("border-radius", "12px");\n    \n    this.svg.selectAll(".domain, .tick line")\n      .attr("stroke", gridColor);\n    this.svg.selectAll(".tick text")\n      .attr("fill", textColor);\n    \n    // Add subtle grid lines\n    const yTicks = this.svg.selectAll(".tick line");\n    yTicks.attr("x2", this.width)\n      .attr("stroke-dasharray", "2,4")\n      .attr("stroke-opacity", 0.3);\n  }\n\n  showTooltip(event, d) {\n    const tooltip = d3.select("#chart-tooltip");\n    tooltip\n      .style("display", "block")\n      .style("left", `${event.pageX + 18}px`)\n      .style("top", `${event.pageY - 55}px`)\n      .style("background", "rgba(15,15,22,0.95)")\n      .style("backdrop-filter", "blur(12px)")\n      .style("border", "1px solid rgba(99,102,241,0.4)")\n      .style("border-radius", "10px")\n      .style("padding", "10px 16px")\n      .style("box-shadow", "0 8px 32px rgba(0,0,0,0.6), 0 0 20px rgba(99,102,241,0.2)")\n      .html(`\n        <div style="font-size:11px;color:#818cf8;margin-bottom:4px;text-transform:uppercase;letter-spacing:0.5px">\n          ${d.label}\n        </div>\n        <div style="font-size:16px;font-weight:700;color:#f1f5f9">\n          ${d.value.toLocaleString()}\n          <span style="font-size:11px;color:#94a3b8;font-weight:400"> units</span>\n        </div>\n      `);\n  }\n}\n\n// HTML structure for tooltip\n// <div id="chart-tooltip" style="position:fixed;pointer-events:none;z-index:9999;display:none;"></div>\n\n// Initialize with dark theme\nconst darkChart = new DarkThemedBarChart("#chart-container", chartData, {\n  width: 700,\n  height: 400\n});\n
````

## Hakem Skor Dökümü (J1 / J2 / J3)

| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |
|---|---|---|---|---|---|
| Okunabilirlik | 40 | 62 | 38 | **40** | Medyan (J1·J2·J3) — tahkim |
| Performans | 72 | 48 | 55 | **55** | Medyan (J1·J2·J3) — tahkim |
| Güvenlik | 95 | 80 | — | **88** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 54 | 40 | — | **47** | Ortalama (J1-J2) |
| Prompt Uyumu | 46 | 32 | — | **39** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 40/100

**Öneriler:**
- Kullanılmayan React hook'ları (useState, useRef vb.) ve ikon bileşenlerini kaldırın ya da bunları kullanan bir ana bileşen ekleyerek amacı netleştirin.
- Demo mesajlarındaki uzun satırları kısaltın veya kod bloklarını ayrı değişkenlere taşıyarak okunabilirliği artırın.
- Icons nesnesindeki JSX girintilemesini Prettier/standart bir formata getirin — özellikle Send ve Play ikonlarında svg child element'leri ebeveynle aynı hizaya gelsin.
- Zaman sabitlerini (MS_PER_MINUTE = 60000, MS_PER_HOUR = 3600000 vb.) açıklayıcı isimlerle tanımlayın ve highlightCode fonksiyonunu string/keyword/comment tespiti için ayrı helper'lara bölün.

### Performans — 55/100

**Öneriler:**
- highlightCode fonksiyonundan dönen JSX sonucunu, bağlı olduğu mesaj ID'si değişmediği sürece useMemo ile önbelleğe alın.
- extractCodeBlocks ve highlightCode gibi yardımcı fonksiyonlar useMemo içinde kullanılarak her render'da gereksiz hesaplama yapılması engellenmelidir.
- `highlightCode` ve `extractCodeBlocks` sonuçlarını `useMemo` ile her mesaj için memoize edin; kod içeriği değişmedikçe yeniden hesaplanmasın.
- Session arama filtresini ve `formatTime` çağrılarını `useMemo` ile sarın; ayrıca AI yanıt simülasyonundaki `setTimeout`'u `useRef` ile tutarak unmount veya yeni mesaj gönderiminde `clearTimeout` ile temizleyin.

### Güvenlik — 88/100

**Öneriler:**
- Gelecekte kullanıcı girdisi veya API'den gelen dinamik metin işlenecekse, DOMPurify ile sanitize edilmelidir.
- Harici bağlantılar (CDN) için Subresource Integrity (SRI) eklenerek tedarik zinciri saldırılarına karşı koruma sağlanabilir.
- Üretim için CDN script'lerini SRI (Subresource Integrity) hash'leri ile birlikte yükleyin veya paketleyici (Vite/Webpack) ile yerel bundle kullanın.
- Babel standalone'ı kaldırıp JSX'i build aşamasında derleyin; ayrıca ileride eklenecek kullanıcı/AI içeriği için DOMPurify ile sanitization katmanı hazırlayın.

### Sürdürülebilirlik — 47/100

**Öneriler:**
- Büyük bileşenleri (Workspace) mantık katmanına (custom hook) ve sunum katmanına ayırın; state yönetimi için useReducer veya Context API kullanarak props drilling'i azaltın.
- Sabitler (renkler, demo veriler, dil anahtar kelimeleri) ve yardımcı fonksiyonlar ayrı dosyalara taşınmalı; örneğin 'constants.ts', 'data.ts', 'utils.ts'.
- App bileşenini Sidebar, ChatPane, MessageBubble, SessionItem, CodePreview, Resizer gibi küçük, tek sorumluluklu bileşenlere ayırın; ortak UI parçalarını (Button, IconButton, Avatar) ayrı bileşen olarak soyutlayın.
- constants.js (renkler, dil listeleri, varsayılan panel genişlikleri) ve hooks/useResizablePanes.js, hooks/useChatSession.js gibi custom hook'lar çıkararak business logic'i sunum katmanından ayırın.

### Prompt Uyumu — 39/100

- Programatik: 33/100 · Semantik: 65/100
- İhlaller: explanation_or_markdown_in_output, react_not_detected

**Öneriler:**
- Sağ paneldeki görselleştirme sekmesini yapay zekâ çıktısına göre dinamik olarak güncelleyin; kod önizlemesi zaten AI mesajlarından alınıyor ancak grafik de AI çıktısından hareketle oluşturulmalı.
- Üretime hazır olması için React’ı modül olarak kullanın, Babel CDN yerine derlenmiş bir yapı sunarak performans ve güvenilirliği artırın.
- Demo veri dizilerinden sonra tüm React bileşenlerini (Sidebar, ChatPane, PreviewPane, App) ve resizer state/handlers'ı tam olarak ekleyin; dosyayı <script type='text/babel'> kapanışı ile bitirin.
- Çıktı uzunluğu nedeniyle kesilme riskine karşı kodun bütünlüğünü son satirda 'ReactDOM.createRoot(...).render(<App />)' ve </script></body></html> ile doğrulayın.


---

# Loomina Analiz Raporu — Qwen3.6 Plus

- **Model:** `qwen/qwen3.6-plus`
- **Tarih:** 02.06.2026 17:02:05
- **Üretim Süresi:** 167337 ms
- **Genel Skor:** 66/100
- **Karar Yöntemi:** Tahkim (J3)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3, x-ai/grok-4.3
- **J3 (Tahkimci) çağrılan metrikler:** Güvenlik, Sürdürülebilirlik

## Kullanıcı Promptu

Build an advanced AI developer workspace layout. The screen should be divided into three resizable panes: a left sidebar for chat history sessions, a central pane for the active AI conversation, and a right sidebar intended for real-time code execution preview or data visualization based on the AI's output. Provide the complete code using React and Tailwind CSS. Do not write any explanations, output only the code.

## Üretilen Kod

````html
import React, { useState, useRef, useCallback, useEffect } from 'react';

// --- Mock Data ---
const SESSIONS = [
  { id: 1, title: 'React Component Optimization', date: '2 hours ago', messages: 12 },
  { id: 2, title: 'Python Data Pipeline Debug', date: '5 hours ago', messages: 8 },
  { id: 3, title: 'API Authentication Flow', date: 'Yesterday', messages: 15 },
  { id: 4, title: 'CSS Grid Layout Help', date: '2 days ago', messages: 6 },
  { id: 5, title: 'Database Schema Design', date: '3 days ago', messages: 20 },
  { id: 6, title: 'TypeScript Generics Explained', date: 'Last week', messages: 9 },
];

const INITIAL_MESSAGES = [
  {
    id: 1,
    role: 'user',
    content: 'Can you help me optimize this React component for better performance?',
    timestamp: '10:30 AM',
  },
  {
    id: 2,
    role: 'ai',
    content: `Absolutely! Here are the key optimization strategies:\n\n1. **Memoization**: Use \`React.memo\` for pure components\n2. **useMemo & useCallback**: Cache expensive computations and function references\n3. **Virtualization**: Use react-window for long lists\n4. **Code Splitting**: Lazy load components with React.lazy\n\nHere's an optimized version:\n\n\`\`\`jsx\nimport React, { useMemo, useCallback } from 'react';\n\nconst OptimizedList = React.memo(({ items, onSelect }) => {\n  const sortedItems = useMemo(() => {\n    return [...items].sort((a, b) => a.name.localeCompare(b.name));\n  }, [items]);\n\n  const handleSelect = useCallback((id) => {\n    onSelect(id);\n  }, [onSelect]);\n\n  return (\n    <ul className="space-y-2">\n      {sortedItems.map(item => (\n        <li key={item.id} onClick={() => handleSelect(item.id)}>\n          {item.name}\n        </li>\n      ))}\n    </ul>\n  );\n});\n\nexport default OptimizedList;\n\`\`\``,
    timestamp: '10:30 AM',
  },
  {
    id: 3,
    role: 'user',
    content: 'How do I handle the case where items update frequently?',
    timestamp: '10:32 AM',
  },
  {
    id: 4,
    role: 'ai',
    content: 'For frequently updating items, consider implementing a virtualized list with `react-window` or `react-virtualized`. This renders only visible items, dramatically reducing DOM nodes. Additionally, batch state updates using `useReducer` or React 18\'s automatic batching to minimize re-renders.',
    timestamp: '10:32 AM',
  },
];

const CODE_PREVIEW = `import React, { useMemo, useCallback } from 'react';

const OptimizedList = React.memo(({ items, onSelect }) => {
  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => a.name.localeCompare(b.name));
  }, [items]);

  const handleSelect = useCallback((id) => {
    onSelect(id);
  }, [onSelect]);

  return (
    <ul className="space-y-2">
      {sortedItems.map(item => (
        <li 
          key={item.id} 
          onClick={() => handleSelect(item.id)}
          className="p-3 hover:bg-gray-100 rounded cursor-pointer transition-colors"
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
});

export default OptimizedList;`;

const CONSOLE_OUTPUT = [
  { type: 'info', text: '> Initializing React DevTools...' },
  { type: 'success', text: '✓ Component mounted successfully' },
  { type: 'info', text: '> Running performance benchmark...' },
  { type: 'success', text: '✓ Render time: 12ms (optimized)' },
  { type: 'info', text: '> Memory usage: 2.4MB' },
  { type: 'success', text: '✓ No re-render warnings detected' },
  { type: 'info', text: '> Virtualization enabled: true' },
  { type: 'success', text: '✓ All tests passed' },
];

// --- Icons (SVG) ---
const Icons = {
  Plus: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
  ),
  Search: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
  ),
  Send: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
  ),
  Code: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  ),
  Terminal: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
  ),
  Chart: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
  ),
  Copy: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
  ),
  Play: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
  ),
  MoreVertical: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
  ),
  Sparkles: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/><path d="M19 13l.75 2.25L22 16l-2.25.75L19 19l-.75-2.25L16 16l2.25-.75L19 13z"/></svg>
  ),
  Trash: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
  ),
  ChevronDown: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
  ),
};

// --- Simple Syntax Highlighter ---
const highlightSyntax = (code) => {
  const keywords = /\b(import|export|from|const|let|var|function|return|if|else|for|while|class|extends|new|this|default|async|await|try|catch|throw|typeof|instanceof|in|of)\b/g;
  const reactComponents = /\b(React|useState|useEffect|useMemo|useCallback|useRef|useContext|useReducer|React\.memo)\b/g;
  const strings = /(["'`])(?:(?=(\\?))\2.)*?\1/g;
  const comments = /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm;
  const jsx = /(<\/?)([\w.]+)([\s\S]*?)(\/?>)/g;
  const numbers = /\b(\d+)\b/g;

  return code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(comments, '<span class="text-gray-500">$1</span>')
    .replace(strings, '<span class="text-emerald-400">$&</span>')
    .replace(keywords, '<span class="text-purple-400">$1</span>')
    .replace(reactComponents, '<span class="text-cyan-400">$&</span>')
    .replace(jsx, '<span class="text-blue-400">$1$2</span>$3<span class="text-blue-400">$4</span>')
    .replace(numbers, '<span class="text-orange-400">$1</span>');
};

// --- Resize Handle Component ---
const ResizeHandle = ({ direction, onResize, minWidth, maxWidth }) => {
  const handleRef = useRef(null);
  const isDragging = useRef(false);
  const startPos = useRef(0);
  const startWidth = useRef(0);

  const onMouseDown = useCallback((e) => {
    isDragging.current = true;
    startPos.current = direction === 'horizontal' ? e.clientX : e.clientY;
    startWidth.current = direction === 'horizontal' ? minWidth : minWidth;
    document.body.style.cursor = direction === 'horizontal' ? 'col-resize' : 'row-resize';
    document.body.style.userSelect = 'none';

    const onMouseMove = (moveEvent) => {
      if (!isDragging.current) return;
      const delta = direction === 'horizontal' 
        ? moveEvent.clientX - startPos.current 
        : moveEvent.clientY - startPos.current;
      const newWidth = Math.min(Math.max(startWidth.current + delta, 200), 800);
      onResize(newWidth);
    };

    const onMouseUp = () => {
      isDragging.current = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }, [direction, onResize, minWidth, maxWidth]);

  return (
    <div
      ref={handleRef}
      onMouseDown={onMouseDown}
      className={`group relative z-10 flex-shrink-0 ${
        direction === 'horizontal' ? 'w-1.5 cursor-col-resize hover:bg-indigo-500/30 active:bg-indigo-500/50' : 'h-1.5 cursor-row-resize hover:bg-indigo-500/30 active:bg-indigo-500/50'
      } transition-colors duration-150`}
    >
      <div className={`absolute inset-0 ${direction === 'horizontal' ? 'w-0.5 left-0.5 bg-gray-700/30 group-hover:bg-indigo-400/50' : 'h-0.5 top-0.5 bg-gray-700/30 group-hover:bg-indigo-400/50'} transition-colors duration-150`} />
    </div>
  );
};

// --- Message Component ---
const Message = ({ message }) => {
  const isUser = message.role === 'user';
  
  const renderContent = (content) => {
    const parts = content.split(/(```[\s\S]*?```)/g);
    return parts.map((part, index) => {
      if (part.startsWith('```')) {
        const lang = part.match(/^```(\w+)?/)?.[1] || '';
        const code = part.replace(/^```\w*\n?/, '').replace(/```$/, '');
        return (
          <div key={index} className="my-3 rounded-lg overflow-hidden border border-gray-700/50 bg-gray-900/50">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800/50 border-b border-gray-700/50">
              <span className="text-xs text-gray-400 font-mono">{lang || 'code'}</span>
              <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-200 transition-colors px-2 py-1 rounded hover:bg-gray-700/50">
                <Icons.Copy />
                Copy
              </button>
            </div>
            <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed">
              <code dangerouslySetInnerHTML={{ __html: highlightSyntax(code) }} />
            </pre>
          </div>
        );
      }
      
      const formattedText = part
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-100 font-semibold">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em class="text-gray-300">$1</em>')
        .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-gray-700/50 text-cyan-400 text-sm font-mono border border-gray-600/30">$1</code>');
        
      return (
        <div
          key={index}
          className="whitespace-pre-wrap leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formattedText }}
        />
      );
    });
  };

  return (
    <div className={`flex gap-4 px-6 py-5 ${isUser ? 'bg-gray-800/20' : ''} animate-fadeIn`}>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        isUser 
          ? 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20' 
          : 'bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/20'
      }`}>
        {isUser ? (
          <span className="text-white text-xs font-bold">U</span>
        ) : (
          <Icons.Sparkles />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5">
          <span className={`text-sm font-semibold ${isUser ? 'text-indigo-400' : 'text-emerald-400'}`}>
            {isUser ? 'You' : 'AI Assistant'}
          </span>
          <span className="text-xs text-gray-500">{message.timestamp}</span>
        </div>
        <div className="text-gray-300 text-sm leading-relaxed">
          {renderContent(message.content)}
        </div>
      </div>
    </div>
  );
};

// --- Right Sidebar Tabs ---
const RightSidebar = ({ activeTab, setActiveTab }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    setShowOutput(false);
    setTimeout(() => {
      setIsRunning(false);
      setShowOutput(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full bg-gray-900 border-l border-gray-800">
      {/* Tabs */}
      <div className="flex items-center border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        {[
          { id: 'code', label: 'Code', icon: Icons.Code },
          { id: 'terminal', label: 'Terminal', icon: Icons.Terminal },
          { id: 'preview', label: 'Preview', icon: Icons.Chart },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-200 border-b-2 ${
              activeTab === tab.id
                ? 'border-indigo-500 text-indigo-400 bg-indigo-500/5'
                : 'border-transparent text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
            }`}
          >
            <tab.icon />
            {tab.label}
          </button>
        ))}
        <div className="flex-1" />
        <button className="p-2 text-gray-400 hover:text-gray-200 transition-colors">
          <Icons.MoreVertical />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {activeTab === 'code' && (
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-gray-500 font-mono">OptimizedList.jsx</span>
              <button
                onClick={handleRun}
                disabled={isRunning}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-600/50 text-white text-xs font-medium rounded transition-all duration-200 shadow-lg shadow-emerald-600/20 hover:shadow-emerald-500/30"
              >
                {isRunning ? (
                  <>
                    <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Running...
                  </>
                ) : (
                  <>
                    <Icons.Play />
                    Run
                  </>
                )}
              </button>
            </div>
            <pre className="text-sm font-mono leading-relaxed p-4 rounded-lg bg-gray-950 border border-gray-800 overflow-x-auto">
              <code dangerouslySetInnerHTML={{ __html: highlightSyntax(CODE_PREVIEW) }} />
            </pre>
          </div>
        )}

        {activeTab === 'terminal' && (
          <div className="p-4 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-800">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-gray-500 font-mono ml-2">output</span>
            </div>
            <div className="flex-1 font-mono text-sm space-y-1.5">
              {CONSOLE_OUTPUT.map((line, i) => (
                <div
                  key={i}
                  className={`${
                    line.type === 'success' ? 'text-emerald-400' : 'text-gray-400'
                  } ${showOutput ? 'animate-slideIn' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'forwards' }}
                >
                  {line.text}
                </div>
              ))}
              {isRunning && (
                <div className="text-gray-500 animate-pulse">> Executing...</div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'preview' && (
          <div className="p-4 h-full flex flex-col items-center justify-center">
            <div className="w-full max-w-sm bg-gray-950 rounded-xl border border-gray-800 p-6 shadow-2xl shadow-black/50">
              <h3 className="text-gray-200 font-semibold mb-4 text-sm">Component Preview</h3>
              <div className="space-y-2">
                {['React Hooks', 'Performance', 'Virtualization', 'Memoization'].map((item, i) => (
                  <div
                    key={item}
                    className="p-3 rounded-lg bg-gray-900 border border-gray-800 hover:border-indigo-500/50 hover:bg-indigo-500/5 cursor-pointer transition-all duration-200 group"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300 group-hover:text-indigo-300 transition-colors">{item}</span>
                      <span className="text-xs text-gray-600 group-hover:text-indigo-500/70 transition-colors">✓</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-800">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Render time</span>
                  <span className="text-emerald-400 font-mono">12ms</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5 mt-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full w-3/4 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Main App ---
export default function AIWorkspace() {
  const [leftWidth, setLeftWidth] = useState(280);
  const [rightWidth, setRightWidth] = useState(380);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [activeTab, setActiveTab] = useState('code');
  const [selectedSession, setSelectedSession] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = useCallback(() => {
    if (!inputValue.trim()) return;
    
    const newMessage = {
      id: messages.length + 1,
      role: 'user',
      content: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        role: 'ai',
        content: 'I understand your question. Let me analyze the code and provide an optimized solution. The key improvements would focus on reducing unnecessary re-renders and implementing efficient state management patterns.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  }, [inputValue, messages.length]);

  const filteredSessions = SESSIONS.filter(s => 
    s.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen w-full bg-gray-950 text-gray-100 overflow-hidden">
      {/* Global Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-8px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-slideIn { animation: slideIn 0.25s ease-out; }
        
        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(75, 85, 99, 0.4);
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(75, 85, 99, 0.6);
        }
      `}</style>

      {/* Left Sidebar - Chat History */}
      <div 
        className="flex-shrink-0 flex flex-col bg-gray-900 border-r border-gray-800"
        style={{ width: leftWidth }}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <Icons.Sparkles />
              </div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                DevAI
              </h1>
            </div>
            <button className="p-1.5 rounded-lg hover:bg-gray-800 transition-colors text-gray-400 hover:text-gray-200">
              <Icons.MoreVertical />
            </button>
          </div>
          
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-all duration-200 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30 font-medium text-sm">
            <Icons.Plus />
            New Chat
          </button>
        </div>

        {/* Search */}
        <div className="px-4 py-3 border-b border-gray-800">
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              <Icons.Search />
            </div>
            <input
              type="text"
              placeholder="Search sessions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
            />
          </div>
        </div>

        {/* Sessions List */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-3 space-y-1">
            {filteredSessions.map((session) => (
              <button
                key={session.id}
                onClick={() => setSelectedSession(session.id)}
                className={`w-full text-left p-3 rounded-lg transition-all duration-200 group ${
                  selectedSession === session.id
                    ? 'bg-indigo-500/10 border border-indigo-500/30'
                    : 'hover:bg-gray-800/50 border border-transparent'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium truncate ${
                      selectedSession === session.id ? 'text-indigo-300' : 'text-gray-300 group-hover:text-gray-100'
                    }`}>
                      {session.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500">{session.date}</span>
                      <span className="text-xs text-gray-600">•</span>
                      <span className="text-xs text-gray-500">{session.messages} msgs</span>
                    </div>
                  </div>
                  {selectedSession === session.id && (
                    <button className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-gray-700/50 text-gray-400 hover:text-red-400 transition-all">
                      <Icons.Trash />
                    </button>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800/50 cursor-pointer transition-colors">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xs font-bold shadow-lg shadow-cyan-500/20">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-200 truncate">John Doe</p>
              <p className="text-xs text-gray-500 truncate">Pro Plan</p>
            </div>
            <Icons.ChevronDown />
          </div>
        </div>
      </div>

      {/* Resize Handle 1 */}
      <ResizeHandle direction="horizontal" onResize={setLeftWidth} minWidth={200} maxWidth={600} />

      {/* Center Pane - Chat */}
      <div className="flex-1 flex flex-col min-w-0 bg-gray-950">
        {/* Chat Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-900/30 backdrop-blur-sm">
          <div>
            <h2 className="text-lg font-semibold text-gray-100">React Component Optimization</h2>
            <p className="text-xs text-gray-500 mt-0.5">AI Assistant • GPT-4 Turbo</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-gray-200 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-all border border-gray-700/50">
              Export
            </button>
            <button className="px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-gray-200 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-all border border-gray-700/50">
              Settings
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto">
          <div className="py-4 space-y-0">
            {messages.map((msg) => (
              <Message key={msg.id} message={msg} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-800 bg-gray-900/30 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-end gap-3 bg-gray-900 border border-gray-700/50 rounded-xl p-2 focus-within:border-indigo-500/50 focus-within:ring-2 focus-within:ring-indigo-500/10 transition-all shadow-lg shadow-black/20">
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Type your message..."
                rows={1}
                className="flex-1 bg-transparent text-gray-200 placeholder-gray-500 px-3 py-2 text-sm focus:outline-none resize-none max-h-32"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="flex-shrink-0 p-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 disabled:cursor-not-allowed text-white rounded-lg transition-all duration-200 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30 disabled:shadow-none"
              >
                <Icons.Send />
              </button>
            </div>
            <p className="text-xs text-gray-600 mt-2 text-center">
              AI can make mistakes. Verify important information.
            </p>
          </div>
        </div>
      </div>

      {/* Resize Handle 2 */}
      <ResizeHandle direction="horizontal" onResize={setRightWidth} minWidth={280} maxWidth={700} />

      {/* Right Sidebar - Preview */}
      <div 
        className="flex-shrink-0 flex flex-col"
        style={{ width: rightWidth }}
      >
        <RightSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
````

## Hakem Skor Dökümü (J1 / J2 / J3)

| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |
|---|---|---|---|---|---|
| Okunabilirlik | 78 | 78 | — | **78** | Ortalama (J1-J2) |
| Performans | 70 | 72 | — | **71** | Ortalama (J1-J2) |
| Güvenlik | 88 | 50 | 58 | **58** | Medyan (J1·J2·J3) — tahkim |
| Sürdürülebilirlik | 30 | 58 | 45 | **45** | Medyan (J1·J2·J3) — tahkim |
| Prompt Uyumu | 78 | 78 | — | **78** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 78/100

**Öneriler:**
- highlightSyntax gibi karmaşık string işleme fonksiyonlarını ayrı bir yardımcı modüle taşıyın ve regex desenlerini açıklayıcı sabitlerle tanımlayın.
- Message bileşenindeki renderContent içindeki iç içe geçmiş mantığı daha küçük yardımcı fonksiyonlara bölerek SRP'yi güçlendirin.
- Magic number'ları (200, 800, 1500, 1000, varsayılan genişlikler) dosya başında `const MIN_PANEL_WIDTH = 200` gibi sabitlerle tanımlayın.
- AIWorkspace ana bileşenini ChatHeader, ChatInput, SessionsList gibi alt bileşenlere ayırarak 150 satırın altına indirin; ResizeHandle'daki `startWidth.current` atamasındaki ölü dalı düzeltin.

### Performans — 71/100

**Öneriler:**
- handleSendMessage içindeki `setTimeout`, bileşen unmount olduğunda temizlenmiyor; `useEffect` cleanup ile timeout ID'sini saklayıp temizleyin veya AbortController kullanın.
- RightSidebar bileşeninde `handleRun` için debounce uygulayarak hızlı kullanıcı tıklamalarında gereksiz state güncellemelerini önleyin.
- useEffect içinde setTimeout referanslarını saklayıp cleanup fonksiyonunda clearTimeout çağırarak unmount sonrası state güncellemelerini önleyin.
- filteredSessions hesaplamasını useMemo ile sarın ve Message bileşenini React.memo ile sarmalayın; böylece mesaj listesi güncellenirken tüm mesajlar gereksiz yere yeniden render olmaz.

### Güvenlik — 58/100

**Öneriler:**
- dangerouslySetInnerHTML ile render edilen AI mesaj içeriği ve kod blokları için DOMPurify gibi bir sanitizasyon kütüphanesi kullanın; şu anda regex çıktıları doğrudan HTML'e enjekte ediliyor.
- Kullanıcıdan gelen arama metni (searchQuery) güvenli bir şekilde işleniyor, ancak inputValue veya gelecekte API'den dönecek dinamik AI yanıtları aynı escape/sanitize işlemine tabi tutulmalı.
- Kullanıcı girdisini ve AI yanıtlarını `dangerouslySetInnerHTML` ile render etmeden önce DOMPurify ile sanitize edin; özellikle `formattedText` dönüşümünden önce HTML escape uygulayın.
- Markdown/formatlama dönüşümlerini React'in doğal render mekanizmasını kullanarak yapın; `dangerouslySetInnerHTML` yerine güvenli bir parser (örn. `react-markdown` + `rehype-sanitize`) tercih edin.

### Sürdürülebilirlik — 45/100

**Öneriler:**
- Dev monolitik AIWorkspace bileşenini LeftSidebar, CenterChatPanel, RightPreviewPanel gibi alt bileşenlere ayırarak modülerliği artırın.
- Renkler, breakpoint'ler ve 'DevAI' gibi marka metinleri için sabit değişkenler (constants/theme) tanımlayın; ayrıca her veri listesi (boş, yükleniyor, hata) için state'ler ekleyerek dayanıklılığı artırın.
- Bileşenleri ayrı dosyalara bölün (Message, ResizeHandle, RightSidebar, Icons) ve 'useChat', 'useResizable' gibi custom hook'lar çıkararak mantık ile sunumu ayırın.
- Sahte async işlemler (AI yanıtı, kod çalıştırma) için loading, error ve empty state'lerini ekleyin; sabit string'leri (rol, tab id) enum/sabit dizilerle değiştirin.

### Prompt Uyumu — 78/100

- Programatik: 67/100 · Semantik: 95/100
- İhlaller: explanation_or_markdown_in_output

**Öneriler:**
- Sağ paneldeki içerik, AI çıktısına göre dinamik olarak güncellenecek şekilde iyileştirilebilir, böylece gerçek zamanlı ön izleme daha etkili olur.
- Önizleme sekmesi, AI tarafından önerilen kodu doğrudan render edecek şekilde daha interaktif hale getirilebilir.
- ResizeHandle'da 'minWidth' prop'u hem başlangıç genişliği hem de alt sınır olarak kullanılmış; ayrı 'currentWidth' prop'u ekleyerek iki kavramı net ayırın.
- Sağ sidebar'daki 'Preview' sekmesi sabit mock veri gösteriyor; AI çıktısındaki kodu/sayıları parse edip dinamik bir performans grafiği (örn. SVG bar/line chart) çizerek 'real-time data visualization' hissini güçlendirin.


---

# Loomina Analiz Raporu — Gemini 3.5 Flash

- **Model:** `google/gemini-3.5-flash`
- **Tarih:** 02.06.2026 17:02:05
- **Üretim Süresi:** 81450 ms
- **Genel Skor:** 69/100
- **Karar Yöntemi:** Konsensüs (iki hakem ortalaması)
- **Hakemler:** deepseek/deepseek-v4-pro, minimax/minimax-m3
- **J3 (Tahkimci) çağrılan metrikler:** Yok — iki hakem tüm metriklerde uzlaştı.

## Kullanıcı Promptu

Build an advanced AI developer workspace layout. The screen should be divided into three resizable panes: a left sidebar for chat history sessions, a central pane for the active AI conversation, and a right sidebar intended for real-time code execution preview or data visualization based on the AI's output. Provide the complete code using React and Tailwind CSS. Do not write any explanations, output only the code.

## Üretilen Kod

```html
import React, { useState, useRef, useEffect } from 'react';

// --- SVG ICONS ---
const Icons = {
  Chat: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  Code: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  Terminal: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  Chart: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  Play: () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  ),
  Settings: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Search: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  Plus: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  ),
  Send: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  ),
  Sparkles: () => (
    <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  Cpu: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
  Check: () => (
    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  ExternalLink: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
};

// --- INITIAL MOCK DATA ---
const initialSessions = [
  { id: '1', title: 'Interactive Revenue Dashboard', tag: 'React', time: '10m ago' },
  { id: '2', title: 'Optimize PostgreSQL Queries', tag: 'SQL', time: '2h ago' },
  { id: '3', title: 'FastAPI Webhook Handler', tag: 'Python', time: '1d ago' },
  { id: '4', title: 'Tailwind CSS Custom Config', tag: 'Config', time: '3d ago' }
];

const initialMessages = [
  {
    id: 'm1',
    sender: 'user',
    text: 'Hey! I need an interactive sales analytics dashboard component. Let\'s build it with modern styling, crisp charts, and key performance indicators.',
    timestamp: '10:24 AM'
  },
  {
    id: 'm2',
    sender: 'ai',
    text: 'I have designed a highly interactive Revenue & Sales Dashboard component. It includes real-time KPI metrics, a dynamic vector-based performance graph, and simulated server logs inside the console.\n\nYou can inspect the live dashboard in the **Preview** tab, check execution health in the **Console**, or view the granular telemetry metrics inside the **Visualizer** tab on the right.',
    timestamp: '10:25 AM',
    codeSnippet: `// SalesAnalyticsDashboard.jsx
import React, { useState } from 'react';

export default function SalesAnalyticsDashboard() {
  const [revenue, setRevenue] = useState(142380);
  const [activeUsers, setActiveUsers] = useState(1240);

  return (
    <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
      <h3 className="text-lg font-semibold text-white">Sales Overview</h3>
      <p className="text-xs text-slate-400">Real-time performance metrics</p>
    </div>
  );
}`
  }
];

export default function DeveloperWorkspace() {
  const containerRef = useRef(null);
  
  // Layout Resizing States (Percentages)
  const [leftWidth, setLeftWidth] = useState(20); // Left Sidebar
  const [rightWidth, setRightWidth] = useState(35); // Right Preview Pane
  
  // Interactive States
  const [sessions, setSessions] = useState(initialSessions);
  const [activeSessionId, setActiveSessionId] = useState('1');
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [activeRightTab, setActiveRightTab] = useState('preview'); // preview | console | visualizer
  const [selectedModel, setSelectedModel] = useState('GPT-4o');
  const [isTyping, setIsTyping] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Interactive simulation data (changes dynamically when user interacts)
  const [conversionRate, setConversionRate] = useState(3.2);
  const [consoleLogs, setConsoleLogs] = useState([
    { id: 1, type: 'info', text: 'Initializing Vite Development Server...' },
    { id: 2, type: 'success', text: 'Local server running at http://localhost:5173/' },
    { id: 3, type: 'info', text: 'HMR (Hot Module Replacement) enabled.' }
  ]);

  // Handle Left Sidebar Resizing
  const handleMouseDownLeft = (e) => {
    e.preventDefault();
    document.addEventListener('mousemove', handleMouseMoveLeft);
    document.addEventListener('mouseup', handleMouseUpLeft);
  };

  const handleMouseMoveLeft = (e) => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const newWidth = (e.clientX / containerWidth) * 100;
    if (newWidth > 15 && newWidth < 35) {
      setLeftWidth(newWidth);
    }
  };

  const handleMouseUpLeft = () => {
    document.removeEventListener('mousemove', handleMouseMoveLeft);
    document.removeEventListener('mouseup', handleMouseUpLeft);
  };

  // Handle Right Sidebar Resizing
  const handleMouseDownRight = (e) => {
    e.preventDefault();
    document.addEventListener('mousemove', handleMouseMoveRight);
    document.addEventListener('mouseup', handleMouseUpRight);
  };

  const handleMouseMoveRight = (e) => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const newWidth = ((containerWidth - e.clientX) / containerWidth) * 100;
    if (newWidth > 25 && newWidth < 50) {
      setRightWidth(newWidth);
    }
  };

  const handleMouseUpRight = () => {
    document.removeEventListener('mousemove', handleMouseMoveRight);
    document.removeEventListener('mouseup', handleMouseUpRight);
  };

  // Add Message & Simulate AI response
  const handleSendMessage = (e) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = {
      id: `m-user-${Date.now()}`,
      sender: 'user',
      text: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    const currentInput = inputValue.toLowerCase();
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response stream/delay
    setTimeout(() => {
      let aiText = "I have updated the application parameters based on your request. Let's inspect the telemetry and live changes.";
      let updatedChart = false;

      if (currentInput.includes('boost') || currentInput.includes('increase') || currentInput.includes('optimize')) {
        setConversionRate(4.8);
        aiText = "Performance optimization applied successfully. I have tweaked the rendering pipeline and asset preloading. The **Conversion Rate** has jumped to **4.8%**, and latency is reduced. Check the live updates in the Preview & Visualizer panels.";
        updatedChart = true;
      } else if (currentInput.includes('error') || currentInput.includes('break')) {
        setConsoleLogs(prev => [
          ...prev,
          { id: Date.now(), type: 'error', text: 'Uncaught TypeError: Cannot read properties of undefined (reading "map") at SalesAnalyticsDashboard.jsx:42' }
        ]);
        aiText = "Ah, it looks like a rendering mismatch occurred. I generated an intentional runtime trace in your console. Let's debug this together.";
        setActiveRightTab('console');
      } else {
        // Standard interactive response
        setConsoleLogs(prev => [
          ...prev,
          { id: Date.now(), type: 'info', text: `Re-compiling workspace assets...` },
          { id: Date.now() + 1, type: 'success', text: `Build finished in 84ms.` }
        ]);
      }

      const aiMsg = {
        id: `m-ai-${Date.now()}`,
        sender: 'ai',
        text: aiText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);

      if (updatedChart) {
        setActiveRightTab('visualizer');
      }
    }, 1500);
  };

  // Filtered Sessions for Search
  const filteredSessions = sessions.filter(s => 
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div 
      ref={containerRef} 
      className="flex h-screen w-screen overflow-hidden bg-[#0A0D14] text-slate-300 font-sans antialiased selection:bg-indigo-500/30 selection:text-indigo-200"
    >
      {/* ========================================================= */}
      {/* LEFT SIDEBAR: CHAT SESSIONS                               */}
      {/* ========================================================= */}
      <div 
        style={{ width: `${leftWidth}%` }} 
        className="flex flex-col min-w-[240px] max-w-[400px] bg-[#0F131E] border-r border-slate-800/80 h-full select-none"
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-slate-800/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Icons.Sparkles />
            </div>
            <span className="font-bold text-white tracking-wide text-sm">Aether.AI</span>
          </div>
          <span className="text-[10px] bg-indigo-500/10 text-indigo-400 font-semibold px-2 py-0.5 rounded-full border border-indigo-500/20">
            PRO
          </span>
        </div>

        {/* Action Button */}
        <div className="px-3 pt-4 pb-2">
          <button 
            onClick={() => {
              const newId = String(sessions.length + 1);
              setSessions([{ id: newId, title: 'Untitled AI Session', tag: 'Draft', time: 'Just now' }, ...sessions]);
              setActiveSessionId(newId);
              setMessages([{
                id: `m-${Date.now()}`,
                sender: 'ai',
                text: 'New clean session started. How can I help you build or analyze today?',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              }]);
            }}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-medium text-xs py-2.5 px-4 rounded-lg transition-all shadow-md shadow-indigo-900/20 active:scale-[0.98]"
          >
            <Icons.Plus />
            New Session
          </button>
        </div>

        {/* Search */}
        <div className="px-3 py-2">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500">
              <Icons.Search />
            </span>
            <input 
              type="text" 
              placeholder="Search chat history..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#161B2A] border border-slate-800/80 rounded-lg pl-9 pr-4 py-1.5 text-xs text-slate-300 placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 transition-all"
            />
          </div>
        </div>

        {/* Sessions List */}
        <div className="flex-1 overflow-y-auto px-2 space-y-1 py-2 custom-scrollbar">
          {filteredSessions.map((session) => {
            const isActive = session.id === activeSessionId;
            return (
              <button
                key={session.id}
                onClick={() => setActiveSessionId(session.id)}
                className={`w-full text-left p-2.5 rounded-lg flex flex-col gap-1 transition-all ${
                  isActive 
                    ? 'bg-slate-800/50 border border-slate-700/50 shadow-inner' 
                    : 'hover:bg-slate-800/20 border border-transparent'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-semibold truncate ${isActive ? 'text-white' : 'text-slate-400'}`}>
                    {session.title}
                  </span>
                  <span className="text-[9px] text-slate-500 shrink-0">{session.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] bg-slate-800 text-slate-400 border border-slate-700/60 px-1.5 py-0.5 rounded">
                    {session.tag}
                  </span>
                  <span className="text-[10px] text-slate-500 truncate">Active workspace sync</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* User Profile Footer */}
        <div className="p-3 border-t border-slate-800/60 bg-[#0C0F18] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 p-[1.5px]">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-[10px] font-bold text-emerald-400">
                DEV
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-slate-200">Alex Rivera</span>
              <span className="text-[9px] text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Local Engine Active
              </span>
            </div>
          </div>
          <button className="text-slate-500 hover:text-white transition-colors">
            <Icons.Settings />
          </button>
        </div>
      </div>

      {/* LEFT RESIZER HANDLE */}
      <div 
        onMouseDown={handleMouseDownLeft}
        className="w-1 hover:w-1.5 bg-transparent hover:bg-indigo-500/50 cursor-col-resize transition-all flex-shrink-0 relative z-10"
      />

      {/* ========================================================= */}
      {/* CENTRAL PANE: ACTIVE AI CONVERSATION                      */}
      {/* ========================================================= */}
      <div 
        style={{ width: `${100 - leftWidth - rightWidth}%` }} 
        className="flex flex-col bg-[#0B0E17] h-full relative"
      >
        {/* Workspace Header */}
        <div className="h-14 border-b border-slate-800/80 px-6 flex items-center justify-between bg-[#0F131E]/60 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-slate-400">Model:</span>
            <div className="relative">
              <select 
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="bg-slate-800/80 border border-slate-700 text-xs text-white rounded-md px-2.5 py-1 focus:outline-none focus:border-indigo-500 cursor-pointer appearance-none pr-6"
              >
                <option value="GPT-4o">GPT-4o (Omni)</option>
                <option value="Claude-3.5">Claude 3.5 Sonnet</option>
                <option value="Aether-Coder">Aether-Coder-v2</option>
              </select>
              <span className="absolute right-2 top-2.5 pointer-events-none text-[8px] text-slate-400">▼</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400 bg-slate-800/40 px-2.5 py-1 rounded-md border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              <span>Context: 12.4k / 128k tokens</span>
            </div>
          </div>
        </div>

        {/* Chat Message History */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex gap-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0">
                  <Icons.Sparkles />
                </div>
              )}

              <div className={`max-w-[85%] flex flex-col gap-1.5 ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                {/* Meta details */}
                <div className="flex items-center gap-2 text-[10px] text-slate-500">
                  <span className="font-semibold text-slate-400">{msg.sender === 'user' ? 'You' : selectedModel}</span>
                  <span>•</span>
                  <span>{msg.timestamp}</span>
                </div>

                {/* Message Bubble */}
                <div className={`p-4 rounded-xl text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-indigo-600 text-white rounded-tr-none shadow-lg shadow-indigo-900/10'
                    : 'bg-[#121724] text-slate-300 border border-slate-800/80 rounded-tl-none'
                }`}>
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Optional Mock Code block inside AI message */}
                  {msg.codeSnippet && (
                    <div className="mt-4 rounded-lg overflow-hidden border border-slate-800 bg-slate-950 font-mono text-[11px]">
                      <div className="bg-slate-900 px-4 py-1.5 border-b border-slate-800 flex justify-between items-center text-slate-400 text-[10px]">
                        <span>SalesAnalyticsDashboard.jsx</span>
                        <span className="text-emerald-400 font-semibold">React Component</span>
                      </div>
                      <pre className="p-4 overflow-x-auto text-slate-300">
                        <code>{msg.codeSnippet}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-4 justify-start">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0 animate-pulse">
                <Icons.Sparkles />
              </div>
              <div className="bg-[#121724] border border-slate-800/80 p-4 rounded-xl rounded-tl-none flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce"></span>
              </div>
            </div>
          )}
        </div>

        {/* Dynamic Prompts Suggestions */}
        <div className="px-6 py-2 flex gap-2 overflow-x-auto shrink-0 no-scrollbar">
          <button 
            onClick={() => setInputValue("Optimize rendering and increase performance boost.")}
            className="text-[10px] bg-slate-800/40 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white px-3 py-1.5 rounded-full transition-all shrink-0"
          >
            🚀 Optimize Performance Boost
          </button>
          <button 
            onClick={() => setInputValue("Simulate a code breakdown error inside console.")}
            className="text-[10px] bg-slate-800/40 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white px-3 py-1.5 rounded-full transition-all shrink-0"
          >
            ⚠️ Trigger React Error Trace
          </button>
          <button 
            onClick={() => setInputValue("Add a dynamic database telemetry log.")}
            className="text-[10px] bg-slate-800/40 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white px-3 py-1.5 rounded-full transition-all shrink-0"
          >
            📊 Log Telemetry Metadata
          </button>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-slate-800/80 bg-[#0F131E]/40 backdrop-blur-md">
          <form onSubmit={handleSendMessage} className="relative bg-[#161B2A] border border-slate-800 rounded-xl focus-within:border-indigo-500/50 transition-all p-2">
            <textarea
              rows={2}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              placeholder="Ask Aether to write code, generate charts, or run diagnostics..."
              className="w-full bg-transparent resize-none focus:outline-none text-xs text-slate-200 placeholder-slate-500 px-3 pt-2"
            />
            <div className="flex items-center justify-between border-t border-slate-800/60 pt-2 px-2">
              <span className="text-[10px] text-slate-500">
                Press <span className="text-slate-400 font-mono">Enter</span> to send, <span className="text-slate-400 font-mono">Shift+Enter</span> for new line
              </span>
              <button 
                type="submit"
                disabled={!inputValue.trim()}
                className="bg-indigo-600 hover:bg-indigo-500 text-white p-2 rounded-lg transition-all disabled:opacity-40 disabled:hover:bg-indigo-600"
              >
                <Icons.Send />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* RIGHT RESIZER HANDLE */}
      <div 
        onMouseDown={handleMouseDownRight}
        className="w-1 hover:w-1.5 bg-transparent hover:bg-indigo-500/50 cursor-col-resize transition-all flex-shrink-0 relative z-10"
      />

      {/* ========================================================= */}
      {/* RIGHT SIDEBAR: CODE EXECUTION PREVIEW & TELEMETRY         */}
      {/* ========================================================= */}
      <div 
        style={{ width: `${rightWidth}%` }} 
        className="flex flex-col min-w-[320px] max-w-[600px] bg-[#0F131E] border-l border-slate-800/80 h-full"
      >
        {/* Navigation Tabs */}
        <div className="flex items-center justify-between border-b border-slate-800/80 bg-[#121725] px-4 h-14 shrink-0">
          <div className="flex gap-1">
            <button
              onClick={() => setActiveRightTab('preview')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeRightTab === 'preview' 
                  ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Icons.Code />
              Preview
            </button>
            <button
              onClick={() => setActiveRightTab('console')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeRightTab === 'console' 
                  ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Icons.Terminal />
              Console
              {consoleLogs.some(l => l.type === 'error') && (
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
              )}
            </button>
            <button
              onClick={() => setActiveRightTab('visualizer')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeRightTab === 'visualizer' 
                  ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Icons.Chart />
              Visualizer
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button className="text-[10px] bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded font-medium flex items-center gap-1 transition-all">
              <Icons.Play />
              Deploy
            </button>
          </div>
        </div>

        {/* Tab Contents */}
        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          
          {/* 1. LIVE PREVIEW TAB */}
          {activeRightTab === 'preview' && (
            <div className="space-y-4">
              {/* Sandbox Container */}
              <div className="bg-[#0A0D14] border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
                {/* Simulated Browser Bar */}
                <div className="bg-[#121725] px-4 py-2 border-b border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <div className="bg-[#0A0D14] text-[10px] text-slate-400 px-4 py-0.5 rounded border border-slate-800/80 w-1/2 text-center truncate">
                    localhost:5173/dashboard
                  </div>
                  <Icons.ExternalLink />
                </div>

                {/* Live Render Output */}
                <div className="p-6 space-y-6 bg-gradient-to-b from-[#0F131E] to-[#0A0D14]">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-wide">Enterprise Sales Suite</h4>
                      <p className="text-[10px] text-slate-400">Interactive live metrics dashboard</p>
                    </div>
                    <span className="text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                      Live Preview
                    </span>
                  </div>

                  {/* Grid of Cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#161B2A] border border-slate-800 p-3 rounded-lg flex flex-col justify-between hover:border-slate-700/80 transition-all">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider">Gross Revenue</span>
                      <div className="flex items-baseline gap-1.5 mt-1">
                        <span className="text-lg font-bold text-white">$142,380</span>
                        <span className="text-[9px] text-emerald-400 font-semibold">+12.4%</span>
                      </div>
                    </div>

                    <div className="bg-[#161B2A] border border-slate-800 p-3 rounded-lg flex flex-col justify-between hover:border-slate-700/80 transition-all">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider">Active Users</span>
                      <div className="flex items-baseline gap-1.5 mt-1">
                        <span className="text-lg font-bold text-white">1,240</span>
                        <span className="text-[9px] text-emerald-400 font-semibold">+8.1%</span>
                      </div>
                    </div>

                    <div className="bg-[#161B2A] border border-slate-800 p-3 rounded-lg flex flex-col justify-between hover:border-slate-700/80 transition-all">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider">Conversion Rate</span>
                      <div className="flex items-baseline gap-1.5 mt-1">
                        <span className="text-lg font-bold text-white">{conversionRate}%</span>
                        <span className="text-[9px] text-indigo-400 font-semibold">Optimized</span>
                      </div>
                    </div>

                    <div className="bg-[#161B2A] border border-slate-800 p-3 rounded-lg flex flex-col justify-between hover:border-slate-700/80 transition-all">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider">API Health</span>
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-xs font-semibold text-slate-200">99.98%</span>
                      </div>
                    </div>
                  </div>

                  {/* Vector Chart Preview */}
                  <div className="bg-[#161B2A] border border-slate-800 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] text-slate-300 font-semibold">Weekly Telemetry Curve</span>
                      <span className="text-[9px] text-slate-500">Updated just now</span>
                    </div>
                    {/* SVG Line Chart */}
                    <svg className="w-full h-24 text-indigo-500" viewBox="0 0 300 100" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.3"/>
                          <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0.0"/>
                        </linearGradient>
                      </defs>
                      {/* Grid lines */}
                      <line x1="0" y1="20" x2="300" y2="20" stroke="#1E293B" strokeDasharray="3,3" />
                      <line x1="0" y1="50" x2="300" y2="50" stroke="#1E293B" strokeDasharray="3,3" />
                      <line x1="0" y1="80" x2="300" y2="80" stroke="#1E293B" strokeDasharray="3,3" />
                      
                      {/* Gradient path */}
                      <path 
                        d="M 0 80 Q 50 30, 100 60 T 200 20 T 300 40 L 300 100 L 0 100 Z" 
                        fill="url(#chartGrad)" 
                      />
                      {/* Stroke path */}
                      <path 
                        d="M 0 80 Q 50 30, 100 60 T 200 20 T 300 40" 
                        fill="none" 
                        stroke="rgb(99, 102, 241)" 
                        strokeWidth="2.5" 
                        strokeLinecap="round"
                      />
                      {/* Highlight dots */}
                      <circle cx="200" cy="20" r="4" fill="rgb(165, 180, 252)" />
                      <circle cx="300" cy="40" r="4" fill="rgb(165, 180, 252)" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Action logs underneath preview */}
              <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[11px] text-slate-300">Hot Module Replacement Active</span>
                </div>
                <button 
                  onClick={() => {
                    setConsoleLogs(prev => [...prev, { id: Date.now(), type: 'info', text: 'Manual Hot-Reload triggered...' }]);
                  }}
                  className="text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 px-2.5 py-1 rounded border border-slate-700 transition-all"
                >
                  Reload Sandbox
                </button>
              </div>
            </div>
          )}

          {/* 2. CONSOLE TAB */}
          {activeRightTab === 'console' && (
            <div className="bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs overflow-hidden shadow-2xl h-full flex flex-col">
              <div className="bg-slate-900/80 px-4 py-2 border-b border-slate-800/80 flex items-center justify-between">
                <span className="text-[10px] text-slate-400">Terminal Shell v1.0.4</span>
                <button 
                  onClick={() => setConsoleLogs([])}
                  className="text-[9px] text-rose-400 hover:text-rose-300 transition-colors"
                >
                  Clear Terminal
                </button>
              </div>
              <div className="p-4 space-y-2 overflow-y-auto flex-1 h-[320px] custom-scrollbar">
                {consoleLogs.map((log) => (
                  <div key={log.id} className="flex gap-2 items-start leading-relaxed">
                    <span className="text-slate-600 shrink-0">$&gt;</span>
                    <span className={`flex-1 ${
                      log.type === 'error' ? 'text-rose-400' : 
                      log.type === 'success' ? 'text-emerald-400' : 'text-slate-300'
                    }`}>
                      {log.text}
                    </span>
                  </div>
                ))}
                <div className="flex gap-2 items-center text-slate-500 animate-pulse">
                  <span>$&gt;</span>
                  <span className="w-1.5 h-3 bg-slate-500"></span>
                </div>
              </div>
            </div>
          )}

          {/* 3. VISUALIZER TAB */}
          {activeRightTab === 'visualizer' && (
            <div className="space-y-4">
              <div className="bg-[#121724] border border-slate-800/80 rounded-xl p-4">
                <h4 className="text-xs font-bold text-white mb-3 flex items-center gap-1.5">
                  <Icons.Cpu />
                  AI Execution Telemetry
                </h4>

                {/* Simulated Stats bars */}
                <div className="space-y-3.5">
                  <div>
                    <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                      <span>Model Token Generation Speed</span>
                      <span className="font-semibold text-indigo-400">84 tok/sec</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-indigo-500 h-full rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                      <span>Memory Allocation</span>
                      <span className="font-semibold text-indigo-400">2.1 GB / 8.0 GB</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-indigo-500 h-full rounded-full" style={{ width: '26%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                      <span>Inference Latency</span>
                      <span className="font-semibold text-emerald-400">120ms (Excellent)</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-400 h-full rounded-full" style={{ width: '12%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Visualization Grid */}
              <div className="bg-[#121724] border border-slate-800/80 rounded-xl p-4">
                <h4 className="text-xs font-bold text-white mb-3">Model Response Distribution</h4>
                {/* SVG Visualizer Bar Chart */}
                <div className="flex justify-between items-end h-28 pt-4 px-2">
                  {[45, 75, 55, 90, 60, 40, 85].map((val, i) => (
                    <div key={i} className="flex flex-col items-center gap-1.5 w-full">
                      <div className="w-3/5 bg-gradient-to-t from-indigo-600 to-violet-400 rounded-t-sm transition-all duration-500 hover:brightness-125" style={{ height: `${val}%` }}></div>
                      <span className="text-[9px] text-slate-500">M{i+1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
```

## Hakem Skor Dökümü (J1 / J2 / J3)

| Metrik | J1 | J2 | J3 | Final | Çözüm Yöntemi |
|---|---|---|---|---|---|
| Okunabilirlik | 68 | 68 | — | **68** | Ortalama (J1-J2) |
| Performans | 45 | 65 | — | **55** | Ortalama (J1-J2) |
| Güvenlik | 90 | 88 | — | **89** | Ortalama (J1-J2) |
| Sürdürülebilirlik | 40 | 32 | — | **36** | Ortalama (J1-J2) |
| Prompt Uyumu | 99 | 97 | — | **98** | Ortalama (J1-J2) |

> J3 sütunundaki "—", o metrikte iki hakemin uzlaştığını (fark ≤ 20) ve tahkimciye gidilmediğini gösterir. Uyuşmazlık olan metriklerde final skor medyan(J1, J2, J3) ile belirlenir.

## Analiz Sonuçları

### Okunabilirlik — 68/100

**Öneriler:**
- Bileşeni daha küçük parçalara ayırın (LeftSidebar, ChatArea, RightSidebar) – şu an 400+ satır tek bir bileşen olduğu için okunması ve bakımı zor.
- Kullanılmayan useEffect import'unu kaldırın; yeniden boyutlandırma mantığını özel bir hook'a taşıyarak DRY ihlalini giderin.
- Sol ve sağ resize mantığını ortak bir useResizablePane hook'unda birleştirerek kod tekrarını ortadan kaldırın.
- handleSendMessage içindeki yanıt seçeneklerini (boost/error/default) ayrı küçük fonksiyonlara bularak magic number'ları (15, 25, 50, 1500) bileşen dışında anlamlı sabitler (MIN_LEFT_WIDTH, MAX_RIGHT_WIDTH, AI_RESPONSE_DELAY_MS) olarak tanımlayın.

### Performans — 55/100

**Öneriler:**
- Global mousemove/mouseup dinleyicilerini useEffect içinde clean-up ile kaldır; isMounted flag veya AbortController ile setTimeout işlemlerini unmount durumunda iptal et.
- Bileşeni parçalara böl, alt bileşenleri React.memo ile sarmala; callback'leri useCallback ile memoize ederek yalnızca ilgili kısımların render edilmesini sağla.
- `handleSendMessage` içindeki `setTimeout` ID'sini bir `useRef` içinde saklayın ve `useEffect` cleanup fonksiyonunda `clearTimeout` çağırın; ayrıca `isMounted` flag veya AbortController mantığı ekleyin.
- Resize listener'larını `useEffect` içine taşıyıp `mousedown` ile attach edip component unmount'unda veya mouseup'ta (effect cleanup ile) güvenilir şekilde kaldırın; ayrıca `filteredSessions` için `useMemo(() => sessions.filter(...), [sessions, searchQuery])` kullanın.

### Güvenlik — 89/100

**Öneriler:**
- Kullanıcı girdisi doğrudan JSX içinde render ediliyor, bu React'in otomatik escaping'i sayesinde güvenli olsa da, ileride dangerouslySetInnerHTML kullanılırsa DOMPurify ile sanitize edilmelidir.
- API hata mesajları gibi dış kaynaklı içerikler kullanıcıya gösterilmeden önce temizlenmeli (sanitize edilmeli) ve stack trace sızıntısı önlenmelidir.
- Textarea için maxLength veya karakter sınırı ekleyerek aşırı büyük girdileri engelleyin (ör. maxLength={4000}).
- Gelecekte gerçek AI yanıtları veya kullanıcı içeriği işlenecekse, render öncesi DOMPurify veya benzeri bir sanitizer entegrasyonu için kod tabanını hazırlayın.

### Sürdürülebilirlik — 36/100

**Öneriler:**
- Büyük bileşeni (DeveloperWorkspace) ChatHistorySidebar, ConversationPane, CodePreviewPane gibi bağımsız alt bileşenlere ayırın; her biri kendi sorumluluğunu taşısın. Bu sayede değişiklikler yalıtılır ve bileşenler başka projelerde de kullanılabilir.
- Mantık (özellikle resize, simulateAI, session yönetimi) custom hook'lara (useResizable, useSimulatedAI, useSession) çıkarılmalı. Böylece sunum katmanı temizlenir ve test yazımı kolaylaşır.
- Bileşeni LeftSidebar, ChatPane, RightSidebar, ResizeHandle ve tab içerikleri (Preview/Console/Visualizer) gibi alt bileşenlere ayırın; resize mantığını useResizablePane gibi bir custom hook'a çıkararak kod tekrarını önleyin.
- Sekme adları, model listesi, min/max genişlikler gibi sabitleri config/constants dosyalarına taşıyarak tek bir değişiklik noktası oluşturun.

### Prompt Uyumu — 98/100

- Programatik: 100/100 · Semantik: 98/100
- İhlaller: yok

**Öneriler:**
- Sağ paneldeki önizleme ve görselleştirme, kullanıcının gönderdiği komutlara daha dinamik yanıt verecek şekilde geliştirilebilir.
- Kod yürütme önizlemesi daha gerçekçi hale getirilebilir; örneğin, AI yanıtıyla gelen kodu gerçek bir iframe'de çalıştırma simülasyonu eklenebilir.
- Sağ paneldeki 'Code execution preview' sekmesi sandbox mantığını daha açık yansıtmak için iframe veya gerçek bir kod çalıştırma stub'ı eklenebilir.
- Sol sidebar'a kullanıcıya ait pinlenmiş/favori oturumlar için ikinci bir bölüm veya session silme/düzenleme gibi CRUD aksiyonları eklenebilir.
