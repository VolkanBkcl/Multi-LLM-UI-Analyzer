'use client';

import React, { useState } from 'react';
import { Code2, MonitorPlay } from 'lucide-react';
import { buildPreviewDocument } from '@/utils/preview';

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

  // SAF NATIVE IFRAME (0% EVAL, 100% CSP UYUMLU)
  // Önizleme belgesi, "Çalıştır" yeni-sekme yoluyla aynı yardımcıdan üretilir (tek kaynak):
  // tam HTML belgeleri olduğu gibi kullanılır, bileşen parçaları Tailwind CDN ile sarılır.
  const htmlContent = buildPreviewDocument(code);

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
