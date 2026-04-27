'use client';

import React, { useState } from 'react';
import { Code2, MonitorPlay } from 'lucide-react';

interface CodePreviewProps {
  code: string | null;
}

export default function CodePreview({ code }: CodePreviewProps) {
  const [showEditor, setShowEditor] = useState(false);

  if (!code || code.trim() === '') {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-zinc-500 bg-zinc-900/40 rounded-2xl border border-dashed border-zinc-800 w-full transition-all">
        <MonitorPlay className="w-8 h-8 mb-3 opacity-20" />
        <p className="text-[10px] uppercase font-black tracking-[0.15em] text-zinc-600">İçerik Bulunamadı</p>
      </div>
    );
  }

  // 1. SAF NATIVE IFRAME (0% EVAL, 100% CSP UYUMLU)
  // Sandpack paketi tamamen dıslandı. Chrome DevTools hataları bitti.
  // Gelen salt metin, Markdown parçalarından (```html gibi) temizleniyor.
  const cleanCode = code
    .replace(/```html\n?/gi, '')
    .replace(/```javascript\n?/gi, '<script>\n')
    .replace(/```css\n?/gi, '<style>\n')
    .replace(/```/g, '\n</script></style>');

  // Tailwind entegrasyonlu ve karanlık mod destekli saf şablon
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en" class="dark">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://cdn.tailwindcss.com"></script>
      <script>
        tailwind.config = { darkMode: 'class' }
      </script>
      <style>
        body { margin: 0; padding: 16px; font-family: system-ui, sans-serif; }
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #3f3f46; border-radius: 4px; }
      </style>
    </head>
    <body class="bg-white text-black dark:bg-zinc-950 dark:text-zinc-100 min-h-screen">
      ${cleanCode}
    </body>
    </html>
  `;

  return (
    <div className="flex flex-col h-full rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950 w-full group transition-all duration-300 shadow-2xl">
      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/60 border-b border-zinc-800/50 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500/50 animate-pulse"></div>
          <span className="text-[9px] uppercase font-black tracking-[0.2em] text-zinc-400">Native Sandbox (No-Eval)</span>
        </div>
        
        <button
          onClick={() => setShowEditor(!showEditor)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-[9.5px] font-bold text-zinc-300 transition-all border border-zinc-700/50 hover:border-zinc-500/50 hover:scale-105 active:scale-95"
        >
          <Code2 className="w-3.5 h-3.5" />
          {showEditor ? 'Kodu Gizle' : 'Kodu Göster'}
        </button>
      </div>
      
      <div className="flex-1 flex flex-col w-full relative h-full">
        {showEditor && (
          <div className="h-[250px] border-b border-zinc-800/80 w-full bg-zinc-900 p-4 overflow-hidden">
            <textarea 
               readOnly 
               className="w-full h-full bg-transparent text-zinc-300 font-mono text-[11px] focus:outline-none resize-none"
               value={code}
            />
          </div>
        )}
        
        <div className="flex-1 w-full bg-zinc-950 transition-all min-h-[350px] h-full"> 
          <iframe
            srcDoc={htmlContent}
            sandbox="allow-scripts allow-forms allow-popups allow-modals"
            className="w-full h-full border-none bg-zinc-950"
            title="Safe Native Preview"
          />
        </div>
      </div>
    </div>
  );
}
