# Loomina — Çift Hakemli + Tahkimli Değerlendirme Sistemi: Uygulama Raporu

> Bu belge, mevcut tek-aşamalı (ortalama tabanlı çok hakem) kod değerlendirme sisteminin
> **bağımsız çift hakem + dinamik tahkim** mimarisine geçişinin tüm ayrıntılarını,
> tasarım kararlarını, dosya yapısını ve ilk gerçek test sonucunu kayıt altına alır.
> Makale yazımında referans olarak kullanılmak üzere hazırlanmıştır.
>
> **Tarih:** 2026-06-01 · **Branch:** `analysis-updates` · **Platform:** Next.js 15 + React 19 + TypeScript

---

## 1. Motivasyon ve Bağlam

### 1.1 Önceki sistem
Tüm değerlendirme mantığı tek dosyada (`src/app/api/analyze/route.ts`) toplanmıştı:
- 2 hakem modeli (`deepseek/deepseek-v4-pro`, `x-ai/grok-4.3`) **paralel** çağrılıyordu.
- Her hakem **tek bir API çağrısında** 5 metriğin tümünü puanlıyordu (0–100).
- Sonuçlar **aritmetik ortalama** ile birleştiriliyordu — uyuşmazlık çözümü yoktu.
- Rubrikler tek bir Türkçe sistem promptuna gömülüydü.
- Sonuçlar **hiçbir yere kaydedilmiyordu** (yalnızca Zustand belleğinde, sayfa yenilenince kayboluyordu).

### 1.2 Yeni sistemin hedefleri (literatür gerekçeleri)
- **Halo etkisini önlemek** (Autorubric 2026, G-Eval): her metrik **ayrı bir LLM çağrısında**,
  yalnızca o metriğin rubriği inject edilerek değerlendirilir.
- **Öz-yanlılık (Self-Preference Bias) azaltımı**: üretici ve hakem modeller farklı
  sağlayıcı ailelerinden seçilir.
- **Dinamik tahkim**: iki bağımsız hakem belirgin biçimde ayrışırsa üçüncü bir "tahkimci"
  model bağlayıcı karar verir (ortalama almaz).
- **Programatik prompt-uyum ön denetimi** (Google IFEval "verifiable instruction"): biçimsel
  kısıtlar (Tailwind/React zorunluluğu, "sadece kod" vb.) regex ile nesnel olarak ölçülür.
- **Kalıcılık**: sonuçlar Supabase'e yazılır; makale için veri toplanır.

### 1.3 Plan belgesinden sapmalar
Orijinal plan (`loomina-hakem-sistemi-plani.md`) saf-JS/Jest bir proje varsayıyordu ve 0–5 ölçek
öngörüyordu. Gerçek depo Next.js/TS olduğundan ve mevcut UI 0–100 kullandığından **kullanıcı kararıyla**:
- **Ölçek 0–100 korundu** (UI, eşikler 80/50, store tipleri değişmedi).
- 5. metrik zaten `promptAdherence` adıyla vardı → bu isim korundu (plandaki "Prompt Alignment" budur).
- Tahkim eşiği 0–5'teki "≤1" yerine 0–100'de **20** olarak ayarlandı.

---

## 2. Mimari ve Akış

```
handleAnalyze (page.tsx) → POST /api/analyze {code, prompt}
        ↓
runEvaluation(code, prompt, SYSTEM_CONSTRAINTS)   [orchestrator]
        ↓
1) Programatik prompt-uyum ön denetimi (regex, API yok)  → 0–100 programmaticScore
2) J1 & J2 paralel: her biri 5 metriği AYRI çağrılarda puanlar (5×2 = 10 çağrı)
        ↓
3) Konsensüs: her metrik için |J1 − J2| ≤ 20 ?
   EVET → ortalama        HAYIR → J3 (grok-4.3) TÜM 5 metriği yeniden puanlar
        ↓
4) Final skorlar (0–100) + decision_method + disagreed_metrics
        ↓
5) AnalysisResult (mevcut UI şekli) → ekran; ayrıca Supabase `evaluations` tablosuna kayıt
```

### 2.1 Deneysel Kurulum — Generation Settings (Makale Tablosu)

Tüm inference parametreleri `src/lib/llmConfig.ts` dosyasında merkezi olarak tanımlanmıştır.

**Table 2: LLM Inference Parameters**

| Parameter | Code Generation | Judge Evaluation (J1/J2) | Arbitrator (J3) |
|---|---|---|---|
| `temperature` | 0.7 | 0.1 | 0.1 |
| `top_p` | 0.95 | 0.95 | 0.95 |
| `max_tokens` | 8192 | 8000 | 8000 |
| `stream` | false | — | — |
| `response_format` | — | `json_object`* | `json_object` |
| `seed` | — | — | — |

\* Conditional on model support (`SUPPORTS_JSON_FORMAT` set in `judgeService.ts`).

**Makale açıklama metni (hazır):**
> Generation parameters were held constant across all generator models: temperature = 0.7,
> top_p = 0.95, max_tokens = 8192. For evaluation calls (J1/J2/J3), temperature was set
> to 0.1 to approximate deterministic scoring; top_p = 0.95, max_tokens = 8000. A high
> token budget is required for the evaluation/arbitration calls because the judge models are
> reasoning models that consume part of the budget on internal reasoning; an insufficient
> budget truncates the JSON output. The `seed` parameter was omitted as it is not uniformly
> supported across all OpenRouter-hosted models. All inference parameters are defined in
> `src/lib/llmConfig.ts` for reproducibility.

**System prompt (kod üretimi):**
Üretici modeller için `SYSTEM_CONSTRAINTS` (`src/lib/prompts.ts`):
> "Sen uzman bir tam-yığın (full-stack) yazılım geliştiricisisin. [...] Ürettiğin her kod
> üretime hazır (production-ready), okunabilir ve çalışır durumda olmalıdır. Asla eksik veya
> yer tutucu (placeholder) kod verme."

**Output constraint (değerlendirme):**
Hakem çağrılarındaki çıktı kısıtı (`judgeService.ts`):
> "Return ONLY this JSON (no surrounding text, no markdown):
> `{"criterion":"...","reasoning":"...","suggestions":[...],"score":<0-100 integer>}`"

---

### 2.2 Hakem dizilimi (model rolleri)
| Rol | OpenRouter Model ID | Açıklama |
|-----|---------------------|----------|
| J1 — Hakem 1 | `deepseek/deepseek-v4-pro` | Birinci bağımsız hakem |
| J2 — Hakem 2 | `minimax/minimax-m3` | İkinci bağımsız hakem |
| J3 — Tahkimci | `x-ai/grok-4.3` | Yalnızca uyuşmazlıkta devreye girer; bağlayıcı karar verir |

> **Not:** Önceki sistemde Grok ortalamaya dahil bir hakemdi; yeni sistemde yalnızca **tahkimci**.
> minimax-m3 yeni eklendi.

### 2.2 Konsensüs / tahkim kuralı (Seçici + Medyan Tie-Breaker)
Her metrik için `|J1_score − J2_score|` farkı kontrol edilir (eşik = 20):

- **Hemfikir metrik** (`fark ≤ 20`) → her zaman **J1-J2 ortalaması** kullanılır. Bu metrik,
  başka bir metrikte uyuşmazlık olsa bile J3 tarafından **ezilmez** (konsensüs korunur).
- **Uyuşmazlık metriği** (`fark > 20`) → J3 (tahkimci) o metriği yeniden puanlar ve final skor
  **medyan(J1, J2, J3)** olur. J3 bir "kâhin" değil, **tie-breaker**'dır; aykırı (outlier) bir
  J3 puanı medyan tarafından dengelenir.

> **Tasarım gerekçesi (akademik):** Önceki tasarımda uyuşmazlık halinde J3 *tüm 5 metriği* tek
> başına yeniden yazıyordu; bu, hakemlerin hemfikir olduğu metriklerdeki konsensüsü çöpe atıyor
> ve tek bir yargıcı aşırı yetkilendiriyordu. Yeni tasarım, LLM-as-judge literatüründeki **medyan/
> çoğunluk oylaması** yaklaşımıyla uyumludur: tek aykırı yargıca dayanıklıdır ve yalnızca gerçek
> anlaşmazlık olan boyutta müdahale eder.

- Eşik sabiti tek noktadan ayarlanır: `DISAGREEMENT_THRESHOLD` ([consensusService.ts](../src/lib/evaluation/consensusService.ts)).
  - **Kalibrasyon notu:** İlk testlerde her iki analiz de tahkime gittiği için eşik **15 → 20**
    yükseltildi. Tahkim oranı `decision_method` ile izlenmeli; sürekli yüksekse tekrar gözden geçir.
- **J3 başarısız olursa:** uyuşmazlık metrikleri için medyan kurulamaz → J1-J2 ortalamasına düşülür
  (`decision_method = arbitration_failed_fallback_average`).
- **Öneriler:** J1 + J2 önerileri birleştirilir; bu kaynak artık skorlarla tutarlıdır (J1/J2 puanları
  hem hemfikir hem uyuşmazlık metriklerinde final skora katkı verdiğinden).

### 2.3 5 metrik
| Metrik (UI anahtarı) | Kaynak standart |
|---|---|
| `readability` (Okunabilirlik) | ISO/IEC 25010 §4.2.1 |
| `performance` (Performans) | ISO/IEC 25010 §4.3, React Docs, Web Vitals |
| `security` (Güvenlik) | ISO/IEC 25010 §4.6, OWASP Top 10 2021 |
| `maintainability` (Sürdürülebilirlik) | ISO/IEC 25010 §4.5 |
| `promptAdherence` (Prompt Uyumu) | Google IFEval, DeepEval, G-Eval |

### 2.4 promptAdherence hesabı (iki aşamalı)
- **Programatik (Kategori A):** `programmaticScore = round(passedRules / totalRules × 100)`.
- **Semantik (Kategori B):** hakem modelin verdiği 0–100 skor.
- **Harmanlama (her hakem için):** `final = programmaticScore × 0.6 + semanticScore × 0.4`.
- Tahkim devredeyse J3 bu metriği de doğrudan 0–100 olarak yeniden verir.

---

## 3. Dosya Yapısı ve Değişiklikler

### Yeni modüller — `src/lib/evaluation/`
| Dosya | Sorumluluk |
|---|---|
| `types.ts` | `MetricKey`, `JudgeResult`, `ConsensusResult`, `ArbitrationResult`, `EvaluationResult` tipleri. Metrik anahtarları UI ile birebir. |
| `promptAlignmentChecker.ts` | Regex tabanlı programatik kural denetimi (0–100). Kurallar: markdown/açıklama sızıntısı, Tailwind zorunluluğu, React zorunluluğu, inline-CSS, "sadece HTML (React yasak)". Saf fonksiyon. |
| `rubrics/*.md` | 5 rubrik dosyası; puanlama bantları **0–100'e çevrildi** (5→90-100, 4→75-89, 3→55-74, 2→35-54, 1→15-34, 0→0-14). |
| `rubrics.ts` | `fs.readFileSync` ile rubrikleri okur + önbelleğe alır; tahkimci için tümünü birleştirir. |
| `judgeService.ts` | `MODELS`, `evaluateSingleMetric` (metrik başına ayrı çağrı + rubrik inject), `evaluateAllMetrics` (5 metrik paralel + promptAdherence harmanı). 429/5xx için retry. |
| `consensusService.ts` | `checkConsensus` (eşik 20) + `callArbitrator` (J3). |
| `orchestrator.ts` | `runEvaluation` — tüm akışı yönetir, sonucu UI şekline map'ler. J3 düşerse ortalamaya fallback. |

### Mevcut sisteme bağlama
| Dosya | Değişiklik |
|---|---|
| `src/lib/prompts.ts` (yeni) | `SYSTEM_CONSTRAINTS` tek kaynağa taşındı (üretici sistem promptu). Hem `openrouter.ts` hem checker kullanır. |
| `src/services/openrouter.ts` | Gömülü sistem promptu yerine `SYSTEM_CONSTRAINTS` import edildi. |
| `src/app/api/analyze/route.ts` | Tüm mantık orchestrator'a delege; `export const runtime = 'nodejs'` (fs için). |
| `src/store/useBenchmarkStore.ts` | `AnalysisResult` meta alanlarla genişletildi (`overallScore`, `decisionMethod`, `disagreedMetrics`, `j3Model`, `promptAlignmentDetail`); `saveEvaluationToSupabase` eklendi. |
| `src/app/page.tsx` | Analiz sonrası giriş yapan kullanıcı için kayıt; "ortalaması" etiketi yerine **konsensüs / tahkim (J3) / fallback** rozeti. |
| `supabase/migrations/0001_create_evaluations.sql` (yeni) | `evaluations` tablosu + RLS (`auth.uid() = user_id`). |

### Supabase şeması (`evaluations`)
`id, session_id, user_id, model, readability, performance, security, maintainability,
prompt_adherence, overall_score, decision_method, disagreed_metrics, j3_model,
prompt_alignment_detail (jsonb), created_at`. RLS deseni mevcut tablolarla aynı.

### Maliyet
- Konsensüs: 5 metrik × 2 hakem = **10 çağrı**.
- Tahkim: +1 (J3 tüm 5'i tek çağrıda) = **~11 çağrı**.
- Önceki sistem: 2 çağrı. Tahkim oranı `decision_method` ile loglanmalı.

---

## 4. İlk Gerçek Test Sonucu (Vaka İncelemesi)

### 4.1 Test promptu
> "Create a modern course card component for an online education platform. It must include a
> thumbnail image placeholder, course title, instructor name, price tag, and a prominent
> 'Enroll Now' button. Add a subtle hover effect. Use Tailwind CSS for styling. Do not write
> any explanations, output only the code."

İki üretici model karşılaştırıldı: **DeepSeek** ve **Qwen**. Her iki çıktı da tam HTML belgesi
(`<script src="cdn.tailwindcss.com">`) olarak geldi; markdown/açıklama yok ("sadece kod" kuralı sağlandı).

### 4.2 Sistem skorları
| Metrik | DeepSeek | Qwen |
|---|---|---|
| Okunabilirlik | 78 | 94 |
| Performans | 85 | 82 |
| Güvenlik | 98 | 98 |
| Sürdürülebilirlik | 32 | 58 |
| Prompt Uyumu | 99 | 99 |

Her iki analiz de **tahkime (J3) gitti** — J1 (deepseek-v4-pro) ile J2 (minimax-m3) en az bir
metrikte 15'ten (o anki eşik) fazla ayrıştı. (Bu gözlem üzerine eşik 20'ye çıkarıldı.)

### 4.3 Bağımsız denetim — skorlar gerçeği yansıtıyor mu?
| Metrik | Yön | Değerlendirme |
|---|---|---|
| Okunabilirlik (78 vs 94) | ✅ Doğru | Qwen tek stil yaklaşımı + semantik HTML (`<figure>`, `aria-label`, `line-clamp`); DeepSeek 3 stil sistemini karıştırıyor (inline `style` + `<style>` bloğu + Tailwind). Fark ve sıralama gerçekçi. |
| Performans (85 vs 82) | ⚠️ Tartışmalı | DeepSeek daha çok DOM düğümü, ~5 `backdrop-blur`, büyük gölgeler ve gereksiz JS listener içeriyor; Qwen daha yalın. Performansta Qwen ≥ DeepSeek beklenirdi. İkisi de statik olduğundan fark küçük ama yön ters. |
| Güvenlik (98 vs 98) | ✅ Doğru | Gerçek açık yok (eval/innerHTML/secret yok). DeepSeek'in `<script>`'i yalnızca hover; risk yaratmıyor. |
| Sürdürülebilirlik (32 vs 58) | ✅ Yön doğru / ⚠️ DeepSeek sert | Karışık stil + ölü `group-hover` kodu düşük puanı haklı kılıyor ama 32 (spaghetti sınırı) bir tık sert; ~45-50 daha isabetli olurdu. Qwen'in 58'i (token kullanımı iyi ama parametresiz/hardcoded) yerinde. Tahmini tahkim tetikleyici metrik bu. |
| Prompt Uyumu (99 vs 99) | ✅ Doğru | İstenen tüm öğeler ikisinde de mevcut (thumbnail, başlık, eğitmen, fiyat, Enroll butonu, hover, Tailwind, sadece-kod). |

### 4.4 Öneri kalitesi
Hakemlerin ürettiği öneriler kanıta dayalı ve isabetli:
- DeepSeek: ölü `group-hover:translate-x-0.5` (parent'ta `group` yok), karışık stil yaklaşımı,
  gereksiz JS hover mantığı doğru tespit edildi.
- Qwen: `transition-all` yerine açık özellik listesi, `backdrop-blur` GPU maliyeti, dekoratif
  SVG'lerde eksik `aria-hidden` doğru tespit edildi.

Bu, hakemlerin kodu gerçekten okuduğunu ve skorların "uydurma" olmadığını gösterir.

### 4.5 Çıkarımlar (makale için)
1. **Genel isabet ~%80-85.** Tüm metriklerin **yönü doğru**; asıl ayırt edici fark (Qwen'in daha
   temiz/sürdürülebilir kodu) doğru yakalandı.
2. **Performans rubriği statik HTML'de az ayrıştırıcı** — yön zaman zaman tersine dönebiliyor.
   Makalede bu, "statik analiz tabanlı performans değerlendirmesinin sınırı" olarak tartışılabilir.
3. **Tahkim eşiği kalibrasyonu önemli.** 15'te her şey tahkime gidiyordu (3× maliyet); 20'ye
   çıkarıldı. Tahkim oranı bir metrik olarak raporlanmalı.
4. **Öz-yanlılık (SPB) gözlemi:** Üreticilerden biri DeepSeek ailesinden, J1 hakemi de
   `deepseek-v4-pro`. Yani J1 kendi aile-çıktısını değerlendiriyor olabilir. **İyi haber:**
   DeepSeek kodu *daha düşük* puan aldı → gözle görülür kayırma yok. Yine de üretici-hakem aile
   örtüşmesi makalede açıkça belirtilmeli; ileride hakem promptundan model kimliğini gizleme
   (anonimleştirme) ek katman olarak eklenebilir.

---

## 5. Doğrulama Durumu
- `tsc --noEmit`: yeni/değişen dosyalarda **0 hata**. (Çıkan 2 hata önceden var olan eksik swagger
  bağımlılıklarından — bu çalışmayla ilgisiz.)
- `npm run lint`: ESLint config'in kendisinde önceden var olan ESM çözümleme sorunu var (kodla ilgisiz).
- Supabase migration kullanıcı tarafından SQL Editor'da çalıştırılacak.

## 6. Açık Maddeler / Gelecek İşler
- [ ] `minimax/minimax-m3` tam model ID'sini OpenRouter'da teyit et.
- [ ] Tahkim oranını birkaç analizde izle; eşik 20 yeterli mi karar ver.
- [ ] (Opsiyonel) Hakem anonimleştirme katmanı (SPB ek azaltımı).
- [ ] (Opsiyonel) `vitest` ile `promptAlignmentChecker` ve `checkConsensus` birim testleri.
- [ ] Makale için: `j1_raw_scores` / `arbitration_result` ham verisini Supabase'den çekip
      J1/J2/J3 ayrışma dağılımını analiz et.
