# Sprint 4: Supabase Entegrasyonu, Kimlik Doğrulama ve Kullanıcı Bazlı Veri Yönetimi

Bu sprintte uygulamaya kalıcı veri altyapısı ve kullanıcı yönetimi sistemi eklendi. Supabase ile tam entegrasyon kurularak giriş/kayıt sistemi, sohbet geçmişi, oylama verilerinin kalıcı saklanması ve tüm kullanıcılara ait global istatistikler hayata geçirildi.

---

## 1. Supabase Proje Kurulumu ve Bağlantı Altyapısı

### Neden Supabase?
Açık kaynaklı, PostgreSQL tabanlı bir Backend-as-a-Service (BaaS) platformu. Kimlik doğrulama, veritabanı, Row Level Security (RLS) ve realtime özelliklerini tek bir yerden sağlar.

### Yüklenen Paketler

```bash
npm install @supabase/supabase-js @supabase/ssr
```

- **`@supabase/supabase-js`**: Supabase ile iletişim kuran resmi istemci kütüphanesi.
- **`@supabase/ssr`**: Next.js App Router ile uyumlu, server/client taraflı cookie yönetimini destekleyen SSR paketi.

### Oluşturulan Dosyalar

**`src/lib/supabase.ts`** — Browser-side singleton client:
```typescript
import { createBrowserClient } from "@supabase/ssr";

let client = null;
export function getSupabaseBrowserClient() {
  if (client) return client;
  client = createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  return client;
}
```
Singleton pattern kullanılır; her component render'ında yeni bağlantı açılmaz.

**`src/lib/supabase-server.ts`** — Server Component ve API route'ları için cookie-aware client. Next.js'in `cookies()` API'sini kullanarak session bilgisini server tarafında okur.

### Ortam Değişkenleri (`.env.local`)

```env
NEXT_PUBLIC_SUPABASE_URL=https://<proje-id>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
```

> `NEXT_PUBLIC_` prefix'i ile tanımlanan değişkenler tarayıcıda erişilebilir. Anon key güvenlidir; RLS politikaları veri erişimini kısıtlar.

---

## 2. Veritabanı Şeması

Supabase Dashboard → SQL Editor'da çalıştırılan şema:

### Tablolar

| Tablo | Açıklama |
|-------|----------|
| `profiles` | Kullanıcı profili (ad, avatar). `auth.users`'ı extend eder. |
| `sessions` | Her prompt gönderimi bir session. Hangi modeller kullanıldı, ne soruldu. |
| `responses` | Her session için model başına LLM yanıtı ve süre. |
| `votes` | Kullanıcının o session'da hangi modeli daha iyi bulduğu. |
| `favorites` | Kullanıcının beğendiği yanıtlar. |

### Row Level Security (RLS)

Her tabloda RLS aktif. Kullanıcılar **yalnızca kendi verilerini** görebilir ve değiştirebilir:

```sql
-- Örnek: sessions tablosu — sadece kendi session'larına erişim
create policy "Kendi oturumlarını gör" on sessions
  for all using (auth.uid() = user_id);

-- responses tablosu — iki ayrı policy gerekir (SELECT + INSERT)
create policy "Oturuma ait yanıtları gör" on responses
  for select using (
    exists (select 1 from sessions
            where sessions.id = responses.session_id
            and sessions.user_id = auth.uid())
  );

create policy "Oturuma ait yanıtları ekle" on responses
  for insert with check (
    exists (select 1 from sessions
            where sessions.id = responses.session_id
            and sessions.user_id = auth.uid())
  );
```

### Otomatik Profil Oluşturma (Trigger)

Yeni kullanıcı kayıt olduğunda `profiles` tablosuna otomatik satır ekleyen bir PostgreSQL trigger tanımlandı:

```sql
create or replace function handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, name)
  values (new.id, new.raw_user_meta_data->>'name');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure handle_new_user();
```

### Global İstatistik RPC Fonksiyonları

RLS'yi bypass ederek tüm kullanıcıların aggregate istatistiklerini döndüren `security definer` fonksiyonlar:

```sql
-- Tüm kullanıcıların toplam oy dağılımı
create or replace function get_global_vote_stats()
returns table(vote_key text, total bigint)
language sql security definer as $$
  select vote_key, count(*)::bigint as total
  from votes group by vote_key order by total desc;
$$;

-- Toplam karşılaştırma / kullanıcı / oy sayısı
create or replace function get_global_overview()
returns table(total_sessions bigint, total_users bigint, total_votes bigint)
language sql security definer as $$
  select
    (select count(*)::bigint from sessions),
    (select count(distinct user_id)::bigint from sessions),
    (select count(*)::bigint from votes);
$$;
```

---

## 3. Kimlik Doğrulama (Auth) Sistemi

### Auth State Yönetimi — `src/store/useAuthStore.ts`

Zustand store'u ile uygulama genelinde auth durumu yönetildi:

```typescript
{
  user: User | null,       // Giriş yapmış kullanıcı objesi
  session: Session | null, // Supabase session
  loading: boolean,        // İlk yükleme durumu
  authModalOpen: boolean,  // Login/Register modal açık mı?
  authModalTab: "login" | "register",
  openAuthModal, closeAuthModal, signOut, initialize
}
```

`initialize()` fonksiyonu uygulama başladığında çağrılır; mevcut session'ı kontrol eder ve `onAuthStateChange` ile oturum değişikliklerini dinler.

### Auth Modal — `src/components/AuthModal.tsx`

Mevcut Loomina dark temasına uygun (CSS değişkenleri: `--surface`, `--accent`, `--border-soft`) modal bileşeni:

- **Giriş Yap sekmesi**: E-posta + Şifre, Şifremi Unuttum linki
- **Kayıt Ol sekmesi**: Ad Soyad + E-posta + Şifre + Şifre Tekrar
- Supabase `signInWithPassword` / `signUp` entegrasyonu
- Hata mesajları Türkçeye çevrildi (network hatası, yanlış şifre vb.)
- Şifre göster/gizle butonu
- Overlay'e tıklayınca kapanır

### Header Kullanıcı Menüsü — `UserMenu` Bileşeni

`page.tsx` içinde tanımlı:
- Giriş yapılmamışsa: beyaz "Giriş Yap" butonu → modal açar
- Giriş yapılmışsa: kullanıcının baş harflerinden oluşan avatar + isim + dropdown
- Dropdown: "Profilim" ve "Çıkış Yap" seçenekleri

---

## 4. Model Listesi Güncellemesi

### Kaldırılan Modeller (1 Haziran 2026 itibarıyla kullanım dışı)
- `google/gemini-pro-1.5` → Gemini 1.5 Pro
- `google/gemini-2.0-flash-lite-001` → Gemini 2.0 Flash Lite

### Eklenen Modeller

| Model ID | Görünen Ad | Açıklama |
|----------|------------|----------|
| `google/gemini-3-pro-preview` | Gemini 3 Pro | Google flagship, 1M context |
| `google/gemini-3-flash-preview` | Gemini 3 Flash | Hızlı, agentic odaklı, 1M context |
| `openai/gpt-oss-120b:free` | GPT-OSS 120B | OpenAI'ın ilk açık kaynak modeli, ücretsiz |
| `nvidia/nemotron-3-super-120b-a12b:free` | Nemotron 3 Super | NVIDIA 120B MoE, ücretsiz |

### Model Sıralama Mantığı (Provider Grupları)

Model seçim dropdown'ı artık provider bazında gruplandırılmış:
```
── OpenAI ──────────── GPT-4o, GPT-OSS 120B
── Anthropic ────────── Claude 3.7 Sonnet, Claude 3.5 Haiku
── Google ──────────── Gemini 3 Pro, Gemini 3 Flash
── DeepSeek ────────── DeepSeek R1, DeepSeek V3
── Meta ────────────── Llama 3.3 70B
── Mistral ─────────── Mistral Large 2
── NVIDIA ──────────── Nemotron 3 Super
── Cohere ──────────── Command R+
```

---

## 5. Veri Kayıt Akışı

Giriş yapmış kullanıcı için her prompt gönderiminde:

```
Kullanıcı prompt gönderir
  → sessions tablosuna kayıt (prompt + seçilen modeller)
  → LLM yanıtları geldikçe responses tablosuna kayıt (model başına)
  → Oy verilince votes tablosuna kayıt
  → Favori butonuna basınca favorites tablosuna kayıt
```

**Giriş yapmayan kullanıcılar** uygulamayı tam kapasitede kullanabilir; veriler yalnızca RAM'de (Zustand) tutulur ve sayfa yenilenince kaybolur.

---

## 6. Sidebar Güncellemeleri

### Global Liderlik Tablosu

Tüm kullanıcıların verilerinden oluşan canlı istatistikler:
- Toplam karşılaştırma sayısı, benzersiz kullanıcı sayısı, toplam oy sayısı
- Modellerin oy oranları (bar chart, sıralanmış)
- `get_global_vote_stats()` ve `get_global_overview()` RPC fonksiyonları ile çekilir

### Kişisel Sohbet Geçmişi

Giriş yapmış kullanıcı için son 30 sohbet tarih gruplarına göre listelenir:
- **Bugün / Dün / Bu Hafta / Daha Önce** kategorileri
- Arama kutusu geçmiş sohbetleri filtreler
- Bir sohbete tıklanınca prompt + tüm model yanıtları + oy durumu restore edilir

---

## 7. Geçmiş Sohbet Tam Yükleme (Session Restore)

Sidebar'daki bir sohbete tıklandığında:

1. Supabase `responses` tablosundan o session'ın tüm model yanıtları çekilir
2. Supabase `votes` tablosundan oy bilgisi çekilir
3. `restoreSession()` store aksiyonu çağrılır — `results` map doldurulur
4. Seçili modeller, prompt, oylama durumu restore edilir
5. Yükleme sırasında sidebar öğesinde spinner görünür

```typescript
// useBenchmarkStore.ts — restoreSession aksiyonu
restoreSession(sessionId, models, responses) → void
// results map'ini doldurur, currentSessionId set eder
```

---

## 8. Yeni Dosya ve Hook'lar

| Dosya | Açıklama |
|-------|----------|
| `src/lib/supabase.ts` | Browser Supabase client (singleton) |
| `src/lib/supabase-server.ts` | Server-side Supabase client |
| `src/store/useAuthStore.ts` | Auth state yönetimi (Zustand) |
| `src/components/AuthModal.tsx` | Login/Register modal bileşeni |
| `src/hooks/useGlobalStats.ts` | Global istatistik veri çekme hook'u |
| `src/hooks/useSessionHistory.ts` | Kullanıcı sohbet geçmişi hook'u |

---

## 9. Ekip Üyeleri İçin Kurulum Rehberi

Kodu ilk kez klonlayanlar veya `git pull` yapanlar için adım adım kurulum:

### Adım 1 — Bağımlılıkları Yükle

```bash
npm install
```

### Adım 2 — `.env.local` Dosyasını Oluştur

Proje kökünde `.env.local` dosyası oluştur ve ekipten Supabase değerlerini al:

```env
OPENROUTER_API_KEY=<ekipten al>

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://<proje-id>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<ekipten al>
```

> `.env.local` `.gitignore`'da olduğu için repoya push'lanmaz. Değerleri ekip içinde güvenli şekilde paylaşın (Slack DM, 1Password vb.).

### Adım 3 — Supabase Veritabanını Kur

Supabase Dashboard → SQL Editor'da aşağıdaki SQL bloklarını sırasıyla çalıştır:

**3a. Tablo Şeması** (tablolar yoksa):
```sql
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  name text, avatar_url text, created_at timestamptz default now()
);
create table sessions (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade,
  prompt text not null, models text[] not null,
  created_at timestamptz default now()
);
create table responses (
  id uuid default gen_random_uuid() primary key,
  session_id uuid references sessions on delete cascade,
  model text not null, content text, time_taken_ms integer,
  created_at timestamptz default now()
);
create table votes (
  id uuid default gen_random_uuid() primary key,
  session_id uuid references sessions on delete cascade,
  user_id uuid references auth.users on delete cascade,
  vote_key text not null, created_at timestamptz default now()
);
create table favorites (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade,
  response_id uuid references responses on delete cascade,
  created_at timestamptz default now(),
  unique(user_id, response_id)
);
```

**3b. RLS ve Politikalar:**
```sql
alter table profiles enable row level security;
alter table sessions enable row level security;
alter table responses enable row level security;
alter table votes enable row level security;
alter table favorites enable row level security;

create policy "Kendi profilini gör" on profiles for all using (auth.uid() = id);
create policy "Kendi oturumlarını gör" on sessions for all using (auth.uid() = user_id);
create policy "Oturuma ait yanıtları gör" on responses for select using (
  exists (select 1 from sessions where sessions.id = responses.session_id and sessions.user_id = auth.uid())
);
create policy "Oturuma ait yanıtları ekle" on responses for insert with check (
  exists (select 1 from sessions where sessions.id = responses.session_id and sessions.user_id = auth.uid())
);
create policy "Kendi oylarını yönet" on votes for all using (auth.uid() = user_id);
create policy "Kendi favorilerini yönet" on favorites for all using (auth.uid() = user_id);
```

**3c. Trigger (otomatik profil):**
```sql
create or replace function handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, name)
  values (new.id, new.raw_user_meta_data->>'name');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure handle_new_user();
```

**3d. RPC Fonksiyonları (global istatistikler):**
```sql
create or replace function get_global_vote_stats()
returns table(vote_key text, total bigint)
language sql security definer as $$
  select vote_key, count(*)::bigint as total
  from votes group by vote_key order by total desc;
$$;

create or replace function get_global_overview()
returns table(total_sessions bigint, total_users bigint, total_votes bigint)
language sql security definer as $$
  select
    (select count(*)::bigint from sessions),
    (select count(distinct user_id)::bigint from sessions),
    (select count(*)::bigint from votes);
$$;
```

### Adım 4 — Geliştirme Sunucusunu Başlat

```bash
npm run dev
```

`http://localhost:3000` adresinde uygulama çalışır.

### Adım 5 — Test Et

1. **Giriş Yap** butonuna tıkla → Kayıt Ol sekmesinde hesap oluştur
2. Bir prompt gönder, modeller yanıt versin
3. Supabase Dashboard → Table Editor → `sessions` ve `responses` tablolarında yeni satırlar göründüğünü doğrula
4. Sidebar → "Global Liderlik" bölümünü aç → istatistiklerin geldiğini kontrol et
5. Oy ver → sidebar geçmişinde sohbete tıkla → tam yüklemenin çalıştığını gör

---

## 10. Kullanılan Teknolojiler

| Teknoloji | Kullanım Amacı |
|-----------|---------------|
| Supabase | Veritabanı, Kimlik Doğrulama, RLS |
| `@supabase/supabase-js` | Supabase JS istemcisi |
| `@supabase/ssr` | Next.js SSR uyumlu cookie yönetimi |
| Zustand | Auth ve Benchmark state yönetimi |
| Next.js App Router | Server/Client component mimarisi |
| PostgreSQL RLS | Satır düzeyinde güvenlik politikaları |
| PostgreSQL Triggers | Otomatik profil oluşturma |
| PostgreSQL RPC | Güvenli aggregate sorgular (global stats) |
