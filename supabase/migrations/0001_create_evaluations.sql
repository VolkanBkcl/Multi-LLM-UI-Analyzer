-- Loomina — Çift hakemli + tahkimli değerlendirme sonuçlarının kalıcı kaydı.
-- Skorlar 0-100 ölçeğindedir. RLS deseni mevcut sessions/votes/favorites tablolarıyla aynıdır:
-- kullanıcı yalnızca kendi (user_id) kayıtlarına erişir.

create table if not exists evaluations (
  id uuid primary key default gen_random_uuid(),
  session_id uuid references sessions(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  model text not null,                       -- değerlendirilen üretici model

  -- 5 metrik (0-100):
  readability int,
  performance int,
  security int,
  maintainability int,
  prompt_adherence int,

  overall_score numeric,                     -- 5 metriğin ortalaması (0-100)

  -- Çift hakem + tahkim meta verileri:
  decision_method text,                      -- dual_judge_consensus | arbitration_j3 | arbitration_failed_fallback_average
  disagreed_metrics text[],
  j3_model text,                             -- tahkimci modeli (NULL ise tahkim olmadı)
  prompt_alignment_detail jsonb,             -- {programmaticScore, semanticScore, violations, totalRules, passedRules}

  created_at timestamptz default now()
);

create index if not exists evaluations_session_id_idx on evaluations(session_id);
create index if not exists evaluations_user_id_idx on evaluations(user_id);

alter table evaluations enable row level security;

create policy "Kendi değerlendirmelerini yönet" on evaluations
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
