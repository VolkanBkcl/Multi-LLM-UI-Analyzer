"use client";

import { useBenchmarkStore, ModelProvider } from '@/store/useBenchmarkStore';
import { useState } from 'react';
import { Play, Loader2, TrendingUp, Info, CheckCircle2 } from 'lucide-react';

const AVAILABLE_MODELS: ModelProvider[] = ['openai', 'gemini', 'groq'];

export default function Dashboard() {
  const { prompt, setPrompt, results, isGenerating, startGeneration, updateResult, finishGeneration } = useBenchmarkStore();
  const [selectedModels, setSelectedModels] = useState<ModelProvider[]>(['openai', 'gemini', 'groq']);
  
  const [votes, setVotes] = useState({ openai: 0, gemini: 0, groq: 0 });
  const handleVote = (modelId: string) => {
    setVotes((prev: typeof votes) => ({ ...prev, [modelId]: prev[modelId as keyof typeof prev] + 1 }));
  };
  const totalVotes = votes.openai + votes.gemini + votes.groq;
  const getPercentage = (count: number) => totalVotes === 0 ? 0 : Math.round((count / totalVotes) * 100);

  const handleGenerate = async () => {
    if (!prompt.trim() || selectedModels.length === 0) return;
    startGeneration(selectedModels);
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, models: selectedModels }),
      });
      const data = await res.json();
      if (data.results) {
        data.results.forEach((r: any) => {
          // Backend ekibinin güncel formatı (GenerationResult): code ve executionTime
          updateResult(r.model.toLowerCase(), { 
            content: r.code, 
            loading: false, 
            error: r.error, 
            timeTakenMs: r.executionTime 
          });
        });
      }
    } catch (error: any) {
      selectedModels.forEach((model) => updateResult(model, { loading: false, error: 'Hata oluştu' }));
    } finally {
      finishGeneration();
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6 flex flex-col overflow-hidden font-sans">
      
      <header className="max-w-7xl mx-auto w-full mb-6">
        <h1 className="text-2xl font-black text-blue-500 uppercase tracking-tighter italic italic">Loomina</h1>
      </header>

      <div className="flex-1 max-w-7xl mx-auto w-full flex gap-6 overflow-hidden">
        
        <main className="flex-1 space-y-6 overflow-y-auto pb-44 pr-2 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedModels.map((model: ModelProvider) => (
              <div key={model} className="flex flex-col rounded-[2rem] border border-zinc-800 bg-zinc-900/30 overflow-hidden transition-all hover:border-blue-500/30 group">
                
                {/* ÜST BAŞLIK VE YENİ BELİRGİN SEÇİM BUTONU */}
                <div className="bg-zinc-900/60 px-5 py-3 border-b border-zinc-800/50 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-[10px] uppercase tracking-[0.2em] text-zinc-400">{model}</span>
                    
                    {/* İŞTE O BUTON: DAHA BELİRGİN VE MAVİ */}
                    <button 
                      onClick={() => handleVote(model)}
                      className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500 hover:text-white transition-all text-[8px] font-bold text-blue-400 group-hover:scale-110"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      SEÇ
                    </button>
                  </div>
                  
                  {results[model]?.timeTakenMs && <span className="text-[9px] text-blue-500 font-mono">{results[model].timeTakenMs}ms</span>}
                </div>

                <div className="p-6 flex-1 flex flex-col min-h-[350px]">
                  <div className="text-sm text-zinc-300 leading-relaxed font-light italic w-full">
                    {results[model]?.loading ? (
                      <div className="m-auto flex flex-col items-center gap-2">
                        <Loader2 className="animate-spin h-5 w-5 text-blue-500" />
                        <span className="text-[9px] text-zinc-600 uppercase tracking-widest italic">Yükleniyor</span>
                      </div>
                    ) : results[model]?.error ? (
                      <div className="text-red-500 text-xs p-2">{results[model]?.error}</div>
                    ) : results[model]?.content ? (
                      <div className="bg-zinc-800/50 dark:bg-zinc-950 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 overflow-x-auto not-italic">
                        <pre className="text-[11px] font-mono text-zinc-300 whitespace-pre-wrap break-words">
                          <code>{results[model].content}</code>
                        </pre>
                      </div>
                    ) : (
                      <div className="m-auto opacity-10 text-[10px] uppercase tracking-widest italic text-center mt-10">Bekleniyor</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <aside className="hidden xl:block w-60 bg-zinc-900/40 border border-zinc-800/50 rounded-[2rem] p-5 h-fit sticky top-0 backdrop-blur-md shadow-2xl">
          <div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="text-blue-500 w-3.5 h-3.5" />
              <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-300">Tercihler</h3>
            </div>

            <div className="group relative">
              <div className="w-5 h-5 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center cursor-help hover:border-blue-500 transition-all">
                <Info className="w-3 h-3 text-zinc-500 group-hover:text-blue-400" />
              </div>
              <div className="absolute right-7 top-1/2 -translate-y-1/2 w-44 p-3 bg-zinc-900 border border-zinc-700 text-[9px] text-zinc-400 rounded-xl shadow-2xl invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-[100] leading-relaxed normal-case tracking-normal">
                Bu oran, kullanıcıların hangi yapay zekanın daha kullanışlı cevap verdiğini gösterir.
                <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-zinc-700"></div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {AVAILABLE_MODELS.map(m => (
              <div key={m} className="space-y-1.5">
                <div className="flex justify-between text-[9px] font-bold uppercase tracking-tighter">
                  <span className="text-zinc-600">{m}</span>
                  <span className="text-blue-500">{getPercentage(votes[m as keyof typeof votes])}%</span>
                </div>
                <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 transition-all duration-1000" style={{ width: `${getPercentage(votes[m as keyof typeof votes])}%` }} />
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-zinc-950 via-zinc-950 to-transparent z-[90]">
        <div className="max-w-3xl mx-auto flex gap-3 bg-zinc-900/80 border border-zinc-800 p-2 rounded-3xl shadow-2xl backdrop-blur-xl focus-within:border-blue-500/30 transition-all">
          <input
            type="text"
            value={prompt}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrompt(e.target.value)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleGenerate()}
            placeholder="Modelleri karşılaştırın ve en iyisini seçin..."
            className="flex-1 bg-transparent px-5 py-2 outline-none text-sm placeholder:text-zinc-700"
          />
          <button onClick={handleGenerate} disabled={isGenerating || !prompt.trim()} className="bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-800 text-white p-4 rounded-2xl transition-all shadow-lg shadow-blue-600/10">
            {isGenerating ? <Loader2 className="animate-spin w-4 h-4" /> : <Play className="fill-current w-4 h-4" />}
          </button>
        </div>
      </footer>
    </div>
  );
}