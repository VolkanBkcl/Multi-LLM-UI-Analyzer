"use client";

import { useBenchmarkStore, ModelProvider, ModelResult } from "@/store/useBenchmarkStore";
import { useState, useRef, useEffect } from "react";
import {
  Zap, Send, Loader2, Trophy, BarChart2, Clock, Sparkles,
  ThumbsUp, Minus, RefreshCw, Copy,
  Maximize2, MessageSquarePlus, Search, Globe, Code, Image,
  ChevronDown, ChevronRight, X, Eye,
  PieChart, ExternalLink, Plus
} from "lucide-react";
import { openCodeInNewTab } from "@/utils/preview";

// ─── Types ──────────────────────────────────────────────────
type VoteKey = ModelProvider | "tie" | "both_bad";
type VoteState = Record<ModelProvider, number> & { tie: number; both_bad: number };

// ─── Constants ──────────────────────────────────────────────
const AVAILABLE_MODELS: ModelProvider[] = [
  'openai/gpt-4o',
  'anthropic/claude-3.7-sonnet',
  'google/gemini-pro-1.5',
  'deepseek/deepseek-chat',
  'deepseek/deepseek-reasoner',
  'meta-llama/llama-3.3-70b-instruct',
  'mistralai/mistral-large-2411',
  'anthropic/claude-3.5-haiku',
  'google/gemini-2.0-flash-lite-001',
  'cohere/command-r-plus-08-2024'
];

const MODEL_DISPLAY: Record<ModelProvider, string> = {
  'openai/gpt-4o': "GPT-4o",
  'anthropic/claude-3.7-sonnet': "Claude 3.7",
  'google/gemini-pro-1.5': "Gemini 1.5 Pro",
  'deepseek/deepseek-chat': "DeepSeek V3",
  'deepseek/deepseek-reasoner': "DeepSeek R1",
  'meta-llama/llama-3.3-70b-instruct': "Llama 3.3 70B",
  'mistralai/mistral-large-2411': "Mistral Large 2",
  'anthropic/claude-3.5-haiku': "Claude 3.5 Haiku",
  'google/gemini-2.0-flash-lite-001': "Gemini 2.0 Flash Lite",
  'cohere/command-r-plus-08-2024': "Command R+"
};

const MODEL_COLORS: Record<ModelProvider, string> = {
  'openai/gpt-4o': "#10a37f",
  'anthropic/claude-3.7-sonnet': "#d97757",
  'google/gemini-pro-1.5': "#8e24aa",
  'deepseek/deepseek-chat': "#4d6bfe",
  'deepseek/deepseek-reasoner': "#4d6bfe",
  'meta-llama/llama-3.3-70b-instruct': "#0668E1",
  'mistralai/mistral-large-2411': "#f2a900",
  'anthropic/claude-3.5-haiku': "#d97757",
  'google/gemini-2.0-flash-lite-001': "#8e24aa",
  'cohere/command-r-plus-08-2024': "#39594d"
};

const MODEL_BADGE_CLS: Record<ModelProvider, string> = {
  'openai/gpt-4o': "bg-[#10a37f]/10 text-[#10a37f] border-[#10a37f]/20",
  'anthropic/claude-3.7-sonnet': "bg-[#d97757]/10 text-[#d97757] border-[#d97757]/20",
  'google/gemini-pro-1.5': "bg-[#8e24aa]/10 text-[#8e24aa] border-[#8e24aa]/20",
  'deepseek/deepseek-chat': "bg-[#4d6bfe]/10 text-[#4d6bfe] border-[#4d6bfe]/20",
  'deepseek/deepseek-reasoner': "bg-[#4d6bfe]/10 text-[#4d6bfe] border-[#4d6bfe]/20",
  'meta-llama/llama-3.3-70b-instruct': "bg-[#0668E1]/10 text-[#0668E1] border-[#0668E1]/20",
  'mistralai/mistral-large-2411': "bg-[#f2a900]/10 text-[#f2a900] border-[#f2a900]/20",
  'anthropic/claude-3.5-haiku': "bg-[#d97757]/10 text-[#d97757] border-[#d97757]/20",
  'google/gemini-2.0-flash-lite-001': "bg-[#8e24aa]/10 text-[#8e24aa] border-[#8e24aa]/20",
  'cohere/command-r-plus-08-2024': "bg-[#39594d]/10 text-[#39594d] border-[#39594d]/20"
};



// ─── Sidebar ────────────────────────────────────────────────
function Sidebar({ open, onClose, votes, models, totalVotes, onNewChat, activeCategory, onCategoryChange, searchQuery, onSearchChange }: {
  open: boolean; onClose: () => void;
  votes: VoteState; models: ModelProvider[]; totalVotes: number;
  onNewChat: () => void; activeCategory: string; onCategoryChange: (c: string) => void;
  searchQuery: string; onSearchChange: (q: string) => void;
}) {
  const [lbOpen, setLbOpen] = useState(false);
  const [statsOpen, setStatsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pct = (k: string) => totalVotes === 0 ? 0 : Math.round(((votes as Record<string, number>)[k] / totalVotes) * 100);

  return (
    <>
      {open && <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={onClose} />}
      <aside className={`fixed top-0 left-0 h-full z-50 w-64 border-r border-[--border-soft] bg-[--surface] flex flex-col transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static lg:z-auto`}>
        <div className="flex items-center gap-2.5 px-5 h-14 border-b border-[--border-soft] shrink-0">
          <div className="w-6 h-6 rounded-md bg-[--accent] flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-sm font-black tracking-tight text-white">Loomina</span>
          <button onClick={onClose} className="ml-auto lg:hidden p-1 text-zinc-500 hover:text-white"><X className="w-4 h-4" /></button>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          <SidebarBtn icon={<MessageSquarePlus className="w-4 h-4" />} label="Yeni Sohbet" active={activeCategory === "chat"} onClick={() => { onNewChat(); onCategoryChange("chat"); }} />

          {/* Leaderboard */}
          <button onClick={() => setLbOpen(!lbOpen)} className="w-full flex items-center gap-2.5 px-3 py-2 text-xs rounded-lg transition-all text-left text-zinc-500 hover:text-zinc-300 hover:bg-white/5">
            <BarChart2 className="w-4 h-4" /><span className="flex-1 truncate">Liderlik Tablosu</span>
            <ChevronRight className={`w-3 h-3 transition-transform duration-200 ${lbOpen ? "rotate-90" : ""}`} />
          </button>
          {lbOpen && (
            <div className="ml-3 pl-3 border-l border-[--border-soft] space-y-0.5 animate-fade-in">
              <SidebarBtn icon={<PieChart className="w-3.5 h-3.5" />} label="Overview" active={activeCategory === "overview"} onClick={() => onCategoryChange("overview")} />
            </div>
          )}

          <SidebarBtn icon={<Search className="w-4 h-4" />} label="Arama" active={searchOpen} onClick={() => setSearchOpen(!searchOpen)} />
          {searchOpen && (
            <div className="px-2 pb-2 animate-fade-in">
              <input type="text" value={searchQuery} onChange={e => onSearchChange(e.target.value)} placeholder="Sohbetlerde ara..." className="w-full px-3 py-2 text-xs bg-[--surface-2] border border-[--border-soft] rounded-lg text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-[--accent] transition-colors" />
            </div>
          )}

          {/* Stats */}
          <button onClick={() => setStatsOpen(!statsOpen)} className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs rounded-lg transition-all text-left ${statsOpen ? "bg-white/5 text-white font-semibold" : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"}`}>
            <Trophy className="w-4 h-4 text-amber-400" /><span className="flex-1 truncate">Oylama İstatistikleri</span>
            {totalVotes > 0 && <span className="text-[9px] bg-[--accent]/20 text-[--accent] px-1.5 py-0.5 rounded-full font-bold">{totalVotes}</span>}
          </button>
          {statsOpen && totalVotes > 0 && (
            <div className="ml-3 pl-3 border-l border-[--border-soft] space-y-2 py-2 animate-fade-in">
              {models.map(m => (
                <div key={m} className="space-y-1">
                  <div className="flex items-center justify-between px-2">
                    <span className="text-[10px] font-semibold" style={{ color: MODEL_COLORS[m] }}>{MODEL_DISPLAY[m]}</span>
                    <span className="text-[10px] text-zinc-500 font-mono">{pct(m)}%</span>
                  </div>
                  <div className="mx-2 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct(m)}%`, background: MODEL_COLORS[m] }} />
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between px-2 pt-1">
                <span className="text-[10px] text-zinc-600">Berabere</span><span className="text-[10px] text-zinc-500 font-mono">{pct("tie")}%</span>
              </div>
              <div className="flex items-center justify-between px-2">
                <span className="text-[10px] text-zinc-600">Hepsi Kötü</span><span className="text-[10px] text-zinc-500 font-mono">{pct("both_bad")}%</span>
              </div>
            </div>
          )}

          <div className="pt-6 pb-2 px-2"><span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Bugün</span></div>
          <SidebarBtn icon={<Clock className="w-3.5 h-3.5" />} label="Açık kaynak avantajları..." small onClick={() => onCategoryChange("chat")} />
        </nav>
        <div className="px-5 py-3 border-t border-[--border-soft] text-[10px] text-zinc-600 flex gap-3">
          <a href="#" className="hover:text-zinc-400 transition-colors">Kullanım Şartları</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">Gizlilik</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">Çerezler</a>
        </div>
      </aside>
    </>
  );
}

function SidebarBtn({ icon, label, active, small, onClick }: { icon: React.ReactNode; label: string; active?: boolean; small?: boolean; onClick?: () => void }) {
  return (
    <button onClick={onClick} className={`w-full flex items-center gap-2.5 px-3 rounded-lg transition-all text-left ${small ? "py-1.5 text-[11px]" : "py-2 text-xs"} ${active ? "bg-white/5 text-white font-semibold" : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"}`}>
      {icon}<span className="truncate">{label}</span>
    </button>
  );
}

// ─── AI Review UI ───────────────────────────────────────────
function CategoryScore({ title, score, suggestions }: { title: string, score: number, suggestions: string[] }) {
  const isGood = score >= 8;
  const isWarn = score >= 5 && score < 8;
  
  const colorCls = isGood ? "bg-emerald-500" : isWarn ? "bg-amber-500" : "bg-red-500";
  const textCls = isGood ? "text-emerald-400" : isWarn ? "text-amber-400" : "text-red-400";
  const bgCls = isGood ? "bg-emerald-500/10 border-emerald-500/20" : isWarn ? "bg-amber-500/10 border-amber-500/20" : "bg-red-500/10 border-red-500/20";

  return (
    <div className={`p-2.5 rounded-lg border ${bgCls}`}>
       <div className="flex items-center justify-between mb-1.5">
          <span className={`text-[11px] font-bold ${textCls}`}>{title}</span>
          <span className={`text-[10px] font-black px-1.5 py-0.5 rounded ${colorCls} text-white`}>{score}/10</span>
       </div>
       <div className="h-1.5 w-full bg-black/40 rounded-full overflow-hidden mb-2">
         <div className={`h-full ${colorCls} transition-all duration-1000`} style={{ width: `${score * 10}%` }} />
       </div>
       {suggestions && suggestions.length > 0 && (
         <ul className="space-y-1 mt-2">
           {suggestions.map((s, i) => (
              <li key={i} className="text-[10px] text-zinc-400 flex items-start gap-1">
                <span className="mt-0.5 opacity-50">-</span>
                <span className="leading-tight">{s}</span>
              </li>
           ))}
         </ul>
       )}
    </div>
  );
}

// ─── Model Card ─────────────────────────────────────────────
function ModelCard({ model, result, animDelay }: { model: ModelProvider; result: ModelResult | undefined; animDelay: string }) {
  const updateResult = useBenchmarkStore(state => state.updateResult);
  const [copied, setCopied] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const isLoading = result?.loading ?? false;
  const hasContent = !isLoading && !!result?.content && !result.error;
  const hasError = !isLoading && !!result?.error;

  const handleCopy = () => {
    if (result?.content) {
      navigator.clipboard.writeText(result.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleAnalyze = async () => {
    if (!result?.content || result.isAnalyzing) return;
    
    updateResult(model, { isAnalyzing: true, analysisError: null });
    
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: result.content })
      });
      
      const data = await res.json();
      
      if (!res.ok || data.error) {
         throw new Error(data.error || "Analiz başarısız oldu.");
      }
      
      updateResult(model, { isAnalyzing: false, analysisResult: data.result });
    } catch (err: any) {
      updateResult(model, { isAnalyzing: false, analysisError: err.message });
    }
  };

  const lineCount = hasContent ? result!.content.split('\n').length : 0;

  return (
    <>
      <div className="arena-card flex flex-col overflow-hidden animate-fade-up" style={{ animationDelay: animDelay }}>
        <div className="flex items-center justify-between px-4 py-3 border-b border-[--border-soft]">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full" style={{ background: MODEL_COLORS[model], boxShadow: `0 0 8px ${MODEL_COLORS[model]}` }} />
            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${MODEL_BADGE_CLS[model]}`}>{MODEL_DISPLAY[model]}</span>
            {result?.timeTakenMs ? (<span className="text-[10px] text-zinc-600 font-mono flex items-center gap-1"><Clock className="w-3 h-3" />{result.timeTakenMs}ms</span>) : null}
          </div>
          <div className="flex items-center gap-1">
            <button onClick={() => hasContent && openCodeInNewTab(result!.content)} className={`flex items-center gap-1 px-2 py-1 text-[10px] font-semibold rounded-md transition-all border ${hasContent ? "border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 cursor-pointer" : "border-transparent text-zinc-700 cursor-not-allowed"}`} title="Yeni Sekmede Çalıştır" disabled={!hasContent}>
              <ExternalLink className="w-3 h-3" />Çalıştır
            </button>
            <button onClick={() => hasContent && setPreviewOpen(true)} className={`flex items-center gap-1 px-2 py-1 text-[10px] font-semibold rounded-md transition-all border ${hasContent ? "border-[--accent]/30 text-[--accent] hover:bg-[--accent]/10 cursor-pointer" : "border-transparent text-zinc-700 cursor-not-allowed"}`} title="Kodu İncele" disabled={!hasContent}>
              <Eye className="w-3 h-3" />Kodu İncele
            </button>
            <button className="p-1.5 text-zinc-600 hover:text-zinc-300 hover:bg-white/5 rounded-md transition-all" title="Yeniden oluştur"><RefreshCw className="w-3.5 h-3.5" /></button>
            <button onClick={handleCopy} className="p-1.5 text-zinc-600 hover:text-zinc-300 hover:bg-white/5 rounded-md transition-all" title="Kopyala">{copied ? <span className="text-[10px] text-emerald-400">✓</span> : <Copy className="w-3.5 h-3.5" />}</button>
            <button onClick={() => hasContent && setPreviewOpen(true)} className="p-1.5 text-zinc-600 hover:text-zinc-300 hover:bg-white/5 rounded-md transition-all" title="Tam ekran"><Maximize2 className="w-3.5 h-3.5" /></button>
          </div>
        </div>
        <div className="flex-1 p-5 min-h-[280px] max-h-[500px] overflow-y-auto">
          {isLoading && (
            <div className="flex flex-col items-center justify-center h-full gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-[--border-soft] animate-spin" style={{ borderTopColor: MODEL_COLORS[model] }} />
              <p className="text-[10px] text-zinc-600 uppercase tracking-widest animate-pulse">Yanıt oluşturuluyor…</p>
              <div className="w-full space-y-2 mt-2">{[80, 55, 90, 40].map((w, i) => <div key={i} className="shimmer h-3 rounded-full" style={{ width: `${w}%`, animationDelay: `${i * 0.15}s` }} />)}</div>
            </div>
          )}
          {hasError && <div className="flex items-start gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"><span>⚠</span><span>{result!.error}</span></div>}
          {hasContent && (
            <div className="animate-fade-in prose-sm text-zinc-300 leading-relaxed whitespace-pre-wrap break-words text-[13px]">{result!.content}</div>
          )}
          {!isLoading && !hasContent && !hasError && (
            <div className="flex flex-col items-center justify-center h-full gap-2 opacity-15 select-none">
              <Sparkles className="w-7 h-7" /><p className="text-[10px] uppercase tracking-widest">Yanıt bekleniyor</p>
            </div>
          )}
        </div>
        {hasContent && (
           <div className="px-4 py-3 border-t border-[--border-soft] bg-[--surface-2]">
             <div className="flex items-center justify-between">
                <div className="flex gap-3 text-[10px] text-zinc-500 font-mono">
                   <span>Satır: {lineCount}</span>
                   <span>Süre: {result!.timeTakenMs}ms</span>
                </div>
                <button 
                  onClick={handleAnalyze} 
                  disabled={result!.isAnalyzing}
                  className="px-3 py-1.5 text-[10px] font-bold rounded-md bg-[--accent]/10 text-[--accent] hover:bg-[--accent]/20 transition-all border border-[--accent]/20 flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {result!.isAnalyzing ? <Loader2 className="w-3 h-3 animate-spin"/> : <Sparkles className="w-3 h-3"/>}
                  {result!.isAnalyzing ? "Analiz Ediliyor..." : "Analiz Sonucunu Göster"}
                </button>
             </div>
             
             {result!.analysisError && (
               <div className="mt-3 text-[10px] text-red-400 p-2 bg-red-500/10 rounded border border-red-500/20">
                 {result!.analysisError}
               </div>
             )}
             
             {result!.analysisResult && (
               <div className="mt-4 space-y-3 animate-fade-in border-t border-[--border-soft] pt-3">
                  <h4 className="text-xs font-bold text-zinc-300 mb-2">AI Kod İnceleme Sonucu</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                     <CategoryScore title="Okunabilirlik" score={result!.analysisResult.readability} suggestions={result!.analysisResult.suggestions?.readability} />
                     <CategoryScore title="Performans" score={result!.analysisResult.performance} suggestions={result!.analysisResult.suggestions?.performance} />
                     <CategoryScore title="Güvenlik" score={result!.analysisResult.security} suggestions={result!.analysisResult.suggestions?.security} />
                     <CategoryScore title="Sürdürülebilirlik" score={result!.analysisResult.maintainability} suggestions={result!.analysisResult.suggestions?.maintainability} />
                  </div>
               </div>
             )}
           </div>
        )}
      </div>

      {/* Preview Modal */}
      {previewOpen && hasContent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in" onClick={() => setPreviewOpen(false)}>
          <div className="relative w-[90vw] max-w-4xl max-h-[85vh] bg-[--surface] border border-[--border] rounded-2xl shadow-2xl flex flex-col animate-fade-up" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-[--border-soft] shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: MODEL_COLORS[model], boxShadow: `0 0 8px ${MODEL_COLORS[model]}` }} />
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${MODEL_BADGE_CLS[model]}`}>{MODEL_DISPLAY[model]}</span>
                <span className="text-xs text-zinc-500">Önizleme</span>
                {result?.timeTakenMs && <span className="text-[10px] text-zinc-600 font-mono"><Clock className="w-3 h-3 inline mr-1" />{result.timeTakenMs}ms</span>}
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => openCodeInNewTab(result!.content)} className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg border border-[--border-soft] text-zinc-400 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all">
                  <ExternalLink className="w-3.5 h-3.5" />Yeni Sekmede Çalıştır
                </button>
                <button onClick={handleCopy} className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg border border-[--border-soft] text-zinc-400 hover:text-white hover:bg-white/5 transition-all">
                  <Copy className="w-3.5 h-3.5" />{copied ? "Kopyalandı" : "Kopyala"}
                </button>
                <button onClick={() => setPreviewOpen(false)} className="p-2 text-zinc-500 hover:text-white hover:bg-white/5 rounded-lg transition-all"><X className="w-4 h-4" /></button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <pre className="text-sm text-zinc-200 leading-relaxed whitespace-pre-wrap break-words font-mono bg-[--surface-2] rounded-xl p-5 border border-[--border-soft]">{result!.content}</pre>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ─── Battle Voting (dynamic model count) ────────────────────
const VOTE_BTN_STYLES: Record<ModelProvider, string> = {
  'openai/gpt-4o': "vote-btn-a",
  'anthropic/claude-3.7-sonnet': "vote-btn-b",
  'google/gemini-pro-1.5': "vote-btn-tie",
  'deepseek/deepseek-chat': "vote-btn-a",
  'deepseek/deepseek-reasoner': "vote-btn-b",
  'meta-llama/llama-3.3-70b-instruct': "vote-btn-a",
  'mistralai/mistral-large-2411': "vote-btn-b",
  'anthropic/claude-3.5-haiku': "vote-btn-tie",
  'google/gemini-2.0-flash-lite-001': "vote-btn-a",
  'cohere/command-r-plus-08-2024': "vote-btn-b",
};

function BattleVoting({ models, hasResults, onVote, voted }: { models: ModelProvider[]; hasResults: boolean; onVote: (k: VoteKey) => void; voted: VoteKey | null }) {
  const disabled = !hasResults || voted !== null;
  const allLabel = models.length === 2 ? "İkisi de" : "Hepsi";
  return (
    <div className={`transition-all duration-500 ${hasResults ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {models.map(m => (
          <button key={m} className={`vote-btn ${VOTE_BTN_STYLES[m] || ""}`} onClick={() => onVote(m)} disabled={disabled}>
            {MODEL_DISPLAY[m]} Daha İyi{voted === m && " ✓"}
          </button>
        ))}
        <button className="vote-btn vote-btn-tie" onClick={() => onVote("tie")} disabled={disabled}><ThumbsUp className="w-3.5 h-3.5" />{allLabel} İyi{voted === "tie" && " ✓"}</button>
        <button className="vote-btn" style={{ borderColor: "rgba(239,68,68,0.25)", color: "#f87171", background: "rgba(239,68,68,0.1)" }} onClick={() => onVote("both_bad")} disabled={disabled}><Minus className="w-3.5 h-3.5" />{allLabel} Kötü{voted === "both_bad" && " ✓"}</button>
      </div>
      {voted !== null && <p className="text-center text-[11px] text-zinc-500 mt-3 animate-fade-in">Oyunuz kaydedildi — teşekkürler!</p>}
    </div>
  );
}

// ─── Main Page ──────────────────────────────────────────────
export default function Dashboard() {
  const { prompt, setPrompt, results, isGenerating, startGeneration, updateResult, finishGeneration } = useBenchmarkStore();
  const [selectedModels, setSelectedModels] = useState<ModelProvider[]>(["openai/gpt-4o", "google/gemini-pro-1.5"]);
  const [votes, setVotes] = useState<VoteState>(() => {
    const initial: any = { tie: 0, both_bad: 0 };
    AVAILABLE_MODELS.forEach(m => initial[m] = 0);
    return initial;
  });
  const [voted, setVoted] = useState<VoteKey | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modeOpen, setModeOpen] = useState(false);
  const [hasBeenGenerated, setHasBeenGenerated] = useState(false);
  const [lastPrompt, setLastPrompt] = useState("");
  const [activeCategory, setActiveCategory] = useState("chat");
  const [activeMode, setActiveMode] = useState("Battle Mode");
  const [searchQuery, setSearchQuery] = useState("");
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const modelDropdownRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  // Use a ref to always have access to the latest prompt value
  const promptRef = useRef(prompt);
  promptRef.current = prompt;
  const selectedModelsRef = useRef(selectedModels);
  selectedModelsRef.current = selectedModels;

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);
  // Check if any model has content OR error (both mean results came back)
  const hasAnyResult = selectedModels.some(m => {
    const r = results[m];
    return r && !r.loading && (!!r.content || !!r.error);
  });
  // Show cards whenever generating or results exist
  const showCards = isGenerating || hasBeenGenerated;

  useEffect(() => { if (isGenerating) setVoted(null); }, [isGenerating]);

  // Close mode dropdown when clicking outside
  useEffect(() => {
    if (!modeOpen) return;
    const handler = () => setModeOpen(false);
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, [modeOpen]);

  // Close model dropdown when clicking outside
  useEffect(() => {
    if (!modelDropdownOpen) return;
    const handler = (e: MouseEvent) => {
      if (modelDropdownRef.current && !modelDropdownRef.current.contains(e.target as Node)) {
        setModelDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [modelDropdownOpen]);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 160) + "px";
  };

  const handleVote = (key: VoteKey) => {
    if (voted !== null) return;
    setVoted(key);
    setVotes(prev => ({ ...prev, [key]: (prev as Record<string, number>)[key] + 1 }));
  };

  const handleNewChat = () => {
    setPrompt("");
    setHasBeenGenerated(false);
    setLastPrompt("");
    setVoted(null);
    const initialVotes: any = { tie: 0, both_bad: 0 };
    AVAILABLE_MODELS.forEach(m => initialVotes[m] = 0);
    setVotes(initialVotes);
    if (textareaRef.current) { textareaRef.current.style.height = "auto"; }
  };

  const toggleModel = (model: ModelProvider) => {
    setSelectedModels(prev => {
      if (prev.includes(model)) {
        return prev.length > 1 ? prev.filter(m => m !== model) : prev;
      }
      if (prev.length >= 3) {
        // En fazla 3 model seçilebilir, yeni gelirse en eski olanı at.
        return [...prev.slice(1), model];
      }
      return [...prev, model];
    });
  };

  const handleGenerate = async () => {
    const currentPrompt = promptRef.current;
    const currentModels = selectedModelsRef.current;
    if (!currentPrompt.trim() || currentModels.length === 0 || isGenerating) return;

    console.log("[Loomina] Generating for prompt:", currentPrompt, "models:", currentModels);
    setHasBeenGenerated(true);
    setLastPrompt(currentPrompt);
    startGeneration(currentModels);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: currentPrompt, models: currentModels }),
      });
      const data = await res.json();
      console.log("[Loomina] API response:", data);

      if (data.results) {
        data.results.forEach((r: any) => {
          const modelKey = (r.modelName || r.model || "").toLowerCase();
          if (modelKey) {
            updateResult(modelKey, {
              content: r.generatedCode || r.code || "",
              loading: false,
              error: r.errorMessage || r.error || (r.status === "error" ? "Bilinmeyen Hata" : null),
              timeTakenMs: r.latency || r.executionTime || 0,
            });
          }
        });
      }
      if (data.error) {
        console.error("[Loomina] API error:", data.error);
        currentModels.forEach(model =>
          updateResult(model, { loading: false, error: data.error })
        );
      }
    } catch (err) {
      console.error("[Loomina] Fetch error:", err);
      currentModels.forEach(model =>
        updateResult(model, { loading: false, error: "Bağlantı hatası oluştu." })
      );
    } finally {
      finishGeneration();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleGenerate();
    }
  };

  const colClass = selectedModels.length <= 2
    ? "grid-cols-1 md:grid-cols-2"
    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} votes={votes} models={selectedModels} totalVotes={totalVotes} onNewChat={handleNewChat} activeCategory={activeCategory} onCategoryChange={setActiveCategory} searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Bar */}
        <header className="h-12 border-b border-[--border-soft] bg-[--surface]/60 backdrop-blur-md flex items-center px-4 gap-3 shrink-0 z-30">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-1.5 text-zinc-500 hover:text-white rounded-md hover:bg-white/5 transition-all">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setModeOpen(!modeOpen)} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white rounded-lg hover:bg-white/5 transition-all">
              <Zap className="w-3.5 h-3.5 text-[--accent]" />{activeMode}<ChevronDown className="w-3 h-3 text-zinc-500" />
            </button>
            {modeOpen && (
              <div className="absolute top-full left-0 mt-1 w-44 bg-[--surface-2] border border-[--border] rounded-xl shadow-2xl py-1 z-50 animate-fade-in">
                {["Battle Mode", "Yan Yana", "Direkt"].map((mode) => (
                  <button key={mode} onClick={() => { setActiveMode(mode); setModeOpen(false); }} className={`w-full text-left px-4 py-2 text-xs transition-all ${mode === activeMode ? "text-white bg-white/5 font-semibold" : "text-zinc-400 hover:text-white hover:bg-white/5"}`}>
                    {mode === "Battle Mode" && <Zap className="w-3 h-3 inline mr-1.5 text-[--accent]" />}{mode}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="flex-1" />
          <button className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-white text-zinc-900 hover:bg-zinc-200 transition-all">Giriş Yap</button>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-64">
            {/* Empty state — only shown before first generation */}
            {!showCards && (
              <div className="flex flex-col items-center justify-center py-20 animate-fade-up">
                <div className="w-12 h-12 rounded-2xl bg-[--accent] flex items-center justify-center mb-5 shadow-lg shadow-[--accent-glow]">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-3xl font-black tracking-tight text-white mb-2">Loomina</h1>
                <p className="text-sm text-zinc-500 mb-1">Modelleri karşılaştır, en iyisini seç.</p>
              </div>
            )}

            {/* User prompt bubble */}
            {showCards && lastPrompt && (
              <div className="flex justify-end mb-6 animate-fade-up">
                <div className="max-w-lg px-4 py-2.5 rounded-2xl rounded-br-md bg-[--surface-2] text-sm text-zinc-200">{lastPrompt}</div>
              </div>
            )}

            {/* Model cards */}
            {showCards && (
              <div className={`grid ${colClass} gap-4 mb-6`}>
                {selectedModels.map((model, i) => (
                  <ModelCard key={model} model={model} result={results[model]} animDelay={`${i * 80}ms`} />
                ))}
              </div>
            )}

            {/* Battle Voting */}
            {showCards && (
              <BattleVoting models={selectedModels} hasResults={hasAnyResult} onVote={handleVote} voted={voted} />
            )}
          </div>
        </main>

        {/* Footer - Prompt area */}
        <footer className="fixed bottom-0 right-0 left-0 lg:left-64 z-40">
          <div className="px-4 sm:px-6 pt-6 pb-4" style={{ background: "linear-gradient(to top, var(--background) 60%, transparent)" }}>
            <div className="max-w-3xl mx-auto space-y-2">

              <div className="arena-card !overflow-visible shadow-2xl relative">
                <div className="px-4 pt-3">
                  <textarea
                    ref={textareaRef}
                    value={prompt}
                    onChange={handleTextareaChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Bir şey sor..."
                    rows={1}
                    className="w-full bg-transparent resize-none outline-none text-sm text-zinc-100 placeholder:text-zinc-600 leading-relaxed"
                    style={{ maxHeight: "160px" }}
                  />
                </div>

                <div className="flex items-center justify-between px-3 py-2 border-t border-[--border-soft]">
                  <div className="flex items-center gap-1.5 relative">
                    {selectedModels.map(m => (
                      <div key={m} className={`flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-md transition-all border ${MODEL_BADGE_CLS[m]}`}>
                        {MODEL_DISPLAY[m]}
                        <button onClick={() => toggleModel(m)} className="opacity-50 hover:opacity-100 ml-1" title="Kaldır"><X className="w-3 h-3" /></button>
                      </div>
                    ))}
                    
                    <div className="relative" ref={modelDropdownRef}>
                      <button
                        type="button"
                        onClick={() => setModelDropdownOpen(prev => !prev)}
                        className="flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-md text-zinc-400 hover:text-white hover:bg-white/10 border border-transparent transition-all"
                      >
                        <Plus className="w-3 h-3" /> Model Ekle
                      </button>
                      
                      {modelDropdownOpen && (
                        <div className="absolute bottom-full left-0 mb-2 z-[100] animate-fade-in">
                          <div className="w-56 bg-zinc-900 border border-[--border-soft] rounded-xl shadow-2xl p-2 max-h-72 overflow-y-auto">
                            <div className="text-[10px] text-zinc-400 px-2 py-1.5 font-bold mb-1 border-b border-[--border-soft] uppercase tracking-wider">En fazla 3 model seçilebilir</div>
                            <div className="space-y-0.5 mt-1">
                              {AVAILABLE_MODELS.map(m => {
                                const active = selectedModels.includes(m);
                                return (
                                  <button
                                    key={m}
                                    onClick={() => toggleModel(m)}
                                    className={`w-full text-left text-[11px] px-2.5 py-2 rounded-lg flex items-center justify-between transition-colors ${active ? "bg-white/10 text-white font-bold" : "text-zinc-400 hover:bg-white/5 hover:text-white"}`}
                                  >
                                    <span className="flex items-center gap-1.5">
                                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: MODEL_COLORS[m] }} />
                                      {MODEL_DISPLAY[m]}
                                    </span>
                                    {active && <span className="text-emerald-400 text-xs">✓</span>}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="w-px h-4 bg-[--border-soft] mx-1.5" />
                    {[Globe, Image, Code].map((Icon, i) => (
                      <button key={i} type="button" className="p-1.5 text-zinc-600 hover:text-zinc-400 rounded-md hover:bg-white/5 transition-all"><Icon className="w-3.5 h-3.5" /></button>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-mono ${prompt.length > 2000 ? "text-red-400" : "text-zinc-700"}`}>{prompt.length > 0 ? prompt.length : ""}</span>
                    <button
                      type="button"
                      onClick={() => { console.log("[Loomina] Send clicked, prompt:", promptRef.current); handleGenerate(); }}
                      disabled={isGenerating || !prompt.trim()}
                      className="flex items-center justify-center w-8 h-8 rounded-lg transition-all disabled:opacity-25 disabled:cursor-not-allowed cursor-pointer"
                      style={{ background: prompt.trim() && !isGenerating ? "var(--accent)" : "var(--surface-2)" }}
                      aria-label="Gönder"
                    >
                      {isGenerating ? <Loader2 className="w-4 h-4 text-white animate-spin" /> : <Send className="w-4 h-4 text-white" />}
                    </button>
                  </div>
                </div>
              </div>

              <p className="text-center text-[10px] text-zinc-700">Yanıtlar üçüncü taraf yapay zeka tarafından üretilir ve hatalı olabilir.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}