"use client";

import { useState, useEffect, useRef } from "react";
import { X, Zap, Eye, EyeOff, Loader2, Mail, Lock, User } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import { getSupabaseBrowserClient } from "@/lib/supabase";

export default function AuthModal() {
  const { authModalOpen, authModalTab, closeAuthModal, openAuthModal, setUser, setSession } = useAuthStore();

  const [tab, setTab] = useState<"login" | "register">(authModalTab);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTab(authModalTab);
  }, [authModalTab]);

  useEffect(() => {
    setError(null);
    setSuccessMsg(null);
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }, [tab, authModalOpen]);

  if (!authModalOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) closeAuthModal();
  };

  const translateError = (msg: string): string => {
    if (msg.includes("Invalid login credentials")) return "E-posta veya şifre hatalı.";
    if (msg.includes("Email not confirmed")) return "E-posta adresinizi doğrulamanız gerekiyor.";
    if (msg.includes("User already registered")) return "Bu e-posta zaten kayıtlı.";
    if (msg.includes("Password should be at least")) return "Şifre en az 6 karakter olmalıdır.";
    if (msg.includes("Unable to validate email")) return "Geçersiz e-posta adresi.";
    if (msg.includes("rate limit")) return "Çok fazla deneme. Lütfen bekleyin.";
    return msg;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) { setError("Tüm alanları doldurun."); return; }
    setLoading(true);
    setError(null);

    const supabase = getSupabaseBrowserClient();
    const { data, error: err } = await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);
    if (err) { setError(translateError(err.message)); return; }
    if (data.session) {
      setUser(data.session.user);
      setSession(data.session);
      closeAuthModal();
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) { setError("Tüm alanları doldurun."); return; }
    if (password !== confirmPassword) { setError("Şifreler eşleşmiyor."); return; }
    if (password.length < 6) { setError("Şifre en az 6 karakter olmalıdır."); return; }

    setLoading(true);
    setError(null);

    const supabase = getSupabaseBrowserClient();
    const { data, error: err } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });

    setLoading(false);
    if (err) { setError(translateError(err.message)); return; }

    if (data.user && !data.session) {
      setSuccessMsg("Kayıt başarılı! E-posta adresinize doğrulama linki gönderdik.");
      return;
    }
    if (data.session) {
      setUser(data.session.user);
      setSession(data.session);
      closeAuthModal();
    }
  };

  const handleForgotPassword = async () => {
    if (!email) { setError("Şifre sıfırlama için e-posta adresinizi girin."); return; }
    setLoading(true);
    setError(null);
    const supabase = getSupabaseBrowserClient();
    const { error: err } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset`,
    });
    setLoading(false);
    if (err) { setError(translateError(err.message)); return; }
    setSuccessMsg("Şifre sıfırlama linki e-postanıza gönderildi.");
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in"
    >
      <div className="relative w-full max-w-sm mx-4 animate-fade-up">
        {/* Card */}
        <div className="bg-[--surface] border border-[--border-soft] rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[--border-soft]">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-xl bg-[--accent] flex items-center justify-center shadow-lg">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-sm font-black tracking-tight text-white">Loomina</span>
            </div>
            <button
              onClick={closeAuthModal}
              className="p-1.5 text-zinc-500 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex px-6 pt-5 gap-1">
            {(["login", "register"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                  tab === t
                    ? "bg-[--accent] text-white shadow-md"
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                }`}
              >
                {t === "login" ? "Giriş Yap" : "Kayıt Ol"}
              </button>
            ))}
          </div>

          {/* Form */}
          <div className="px-6 py-5">
            {tab === "login" ? (
              <form onSubmit={handleLogin} className="space-y-3">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">E-posta</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-600" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ornek@email.com"
                      autoComplete="email"
                      className="w-full pl-9 pr-4 py-2.5 text-sm bg-[--surface-2] border border-[--border-soft] rounded-xl text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-[--accent] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">Şifre</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-600" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      autoComplete="current-password"
                      className="w-full pl-9 pr-10 py-2.5 text-sm bg-[--surface-2] border border-[--border-soft] rounded-xl text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-[--accent] transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-400 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="text-[11px] text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                    {error}
                  </div>
                )}
                {successMsg && (
                  <div className="text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-2">
                    {successMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 text-sm font-bold rounded-xl bg-[--accent] text-white hover:bg-[--accent-dim] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-1"
                >
                  {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                  Giriş Yap
                </button>

                <button
                  type="button"
                  onClick={handleForgotPassword}
                  disabled={loading}
                  className="w-full text-center text-[11px] text-zinc-600 hover:text-zinc-400 transition-colors pt-1"
                >
                  Şifremi Unuttum
                </button>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="space-y-3">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">Ad Soyad</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-600" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Adınız Soyadınız"
                      autoComplete="name"
                      className="w-full pl-9 pr-4 py-2.5 text-sm bg-[--surface-2] border border-[--border-soft] rounded-xl text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-[--accent] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">E-posta</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-600" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ornek@email.com"
                      autoComplete="email"
                      className="w-full pl-9 pr-4 py-2.5 text-sm bg-[--surface-2] border border-[--border-soft] rounded-xl text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-[--accent] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">Şifre</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-600" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="En az 6 karakter"
                      autoComplete="new-password"
                      className="w-full pl-9 pr-10 py-2.5 text-sm bg-[--surface-2] border border-[--border-soft] rounded-xl text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-[--accent] transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-400 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">Şifre Tekrar</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-600" />
                    <input
                      type={showConfirm ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      autoComplete="new-password"
                      className="w-full pl-9 pr-10 py-2.5 text-sm bg-[--surface-2] border border-[--border-soft] rounded-xl text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-[--accent] transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-400 transition-colors"
                    >
                      {showConfirm ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="text-[11px] text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                    {error}
                  </div>
                )}
                {successMsg && (
                  <div className="text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-2">
                    {successMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 text-sm font-bold rounded-xl bg-[--accent] text-white hover:bg-[--accent-dim] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-1"
                >
                  {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                  Kayıt Ol
                </button>
              </form>
            )}
          </div>

          {/* Footer switch */}
          <div className="px-6 pb-5 text-center">
            {tab === "login" ? (
              <p className="text-[11px] text-zinc-600">
                Hesabın yok mu?{" "}
                <button onClick={() => openAuthModal("register")} className="text-[--accent] hover:underline font-semibold">
                  Kayıt Ol
                </button>
              </p>
            ) : (
              <p className="text-[11px] text-zinc-600">
                Zaten hesabın var mı?{" "}
                <button onClick={() => openAuthModal("login")} className="text-[--accent] hover:underline font-semibold">
                  Giriş Yap
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
