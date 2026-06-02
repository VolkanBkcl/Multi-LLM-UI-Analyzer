# Loomina — Çok Hakemli Otomatik Kod Değerlendirme Sistemi (Metodoloji)

> Bu belge, Loomina platformunda üretilen kodun otomatik olarak değerlendirildiği **bağımsız çift
> hakem + dinamik tahkimli** sistemin tüm metodolojik ayrıntılarını anlatır. Makalenin "Yöntem /
> Methodology" bölümüne kaynak olacak şekilde hazırlanmıştır. Tüm değerler koddaki güncel haliyle
> (`src/lib/evaluation/`, `src/lib/llmConfig.ts`) tutarlıdır.

---

## 1. Genel Bakış

Loomina, bir kullanıcı promptuna karşılık birden fazla büyük dil modelinin (LLM) ürettiği frontend
kodunu karşılaştıran bir kıyaslama platformudur. Üretilen her kod parçası, **LLM-as-a-Judge**
paradigmasına dayanan otomatik bir değerlendirme hattından geçirilir.

Sistem üç temel ilkeye dayanır:

1. **Bağımsız çift hakem (dual independent judges):** Kod, iki farklı sağlayıcı ailesinden gelen
   iki LLM tarafından bağımsız olarak puanlanır.
2. **Dinamik tahkim (dynamic arbitration):** Hakemler belirli bir eşiğin ötesinde ayrışırsa,
   üçüncü bir model yalnızca anlaşmazlık olan boyutlarda tie-breaker olarak devreye girer.
3. **Boyut başına izole değerlendirme (per-criterion isolation):** Halo etkisini önlemek için her
   kalite metriği, yalnızca o metriğin rubriğiyle, ayrı bir API çağrısında puanlanır.

### 1.1 Değerlendirme akışı

```
Kullanıcı promptu → Üretici model kodu üretir
            │
            ▼
1) Programatik Prompt-Uyum Ön Denetimi  (regex tabanlı, LLM çağrısı yok)
            │
            ▼
2) J1 ve J2 PARALEL değerlendirme
   Her hakem 5 metriği AYRI çağrılarda puanlar (5 × 2 = 10 API çağrısı)
            │
            ▼
3) Konsensüs kontrolü — her metrik için |J1 − J2| ≤ 20 ?
      ├─ Tüm metrikler hemfikir → J1-J2 ortalaması
      └─ En az bir metrik uyuşmazlık → J3 (tahkimci) çağrılır
              • Hemfikir metrikler: J1-J2 ortalaması KORUNUR
              • Uyuşmazlık metrikleri: medyan(J1, J2, J3)
            │
            ▼
4) Final skorlar (0–100) + genel skor + karar yöntemi meta verisi
            │
            ▼
5) Supabase `evaluations` tablosuna kalıcı kayıt + UI'da gösterim + .md rapor
```

---

## 2. Hakem Modelleri ve Öz-Yanlılık Azaltımı

| Rol | OpenRouter Model ID | Görev |
|-----|---------------------|-------|
| **J1** — Hakem 1 | `deepseek/deepseek-v4-pro` | Birinci bağımsız hakem |
| **J2** — Hakem 2 | `minimax/minimax-m3` | İkinci bağımsız hakem |
| **J3** — Tahkimci | `x-ai/grok-4.3` | Yalnızca uyuşmazlıkta, tie-breaker |

### 2.1 Self-Preference Bias (SPB) mitigasyonu

LLM-as-a-Judge literatüründe iyi belgelenmiş bir risk, modellerin kendi ailelerinin ürettiği
çıktıları kayırmasıdır (Self-Preference Bias). Loomina'da üretici modeller (GPT, Claude, Gemini,
Llama, Qwen vb.) ile hakem modeller **kasıtlı olarak farklı sağlayıcı ailelerinden** seçilmiştir
(DeepSeek, MiniMax, xAI). Bu, SPB riskini yapısal olarak azaltır.

> **Bilinen sınır:** Üretici havuzunda DeepSeek ailesinden bir model de bulunduğundan, o model
> değerlendirildiğinde J1 (deepseek-v4-pro) ile üretici aynı aileye düşebilir. Bu durum makalede
> açıkça belirtilmelidir; ileride hakem promptundan model kimliğini gizleyen bir anonimleştirme
> katmanı eklenebilir.

---

## 3. Değerlendirme Metrikleri ve Rubrikler

Beş metrik, **0–100 tam sayı** ölçeğinde puanlanır. Her metriğin ayrıntılı rubriği
`src/lib/evaluation/rubrics/*.md` altında saklanır ve hakem promptuna inject edilir.

| # | Metrik (kod anahtarı) | Türkçe | Kaynak standart |
|---|------------------------|--------|-----------------|
| 1 | `readability` | Okunabilirlik | ISO/IEC 25010 §4.2.1 (Analyzability + Understandability) |
| 2 | `performance` | Performans | ISO/IEC 25010 §4.3, React Docs, Web Vitals |
| 3 | `security` | Güvenlik | ISO/IEC 25010 §4.6, OWASP Top 10 2021 |
| 4 | `maintainability` | Sürdürülebilirlik | ISO/IEC 25010 §4.5 (Modularity, Reusability, Testability…) |
| 5 | `promptAdherence` | Prompt Uyumu | Google IFEval, DeepEval, G-Eval |

### 3.1 Puanlama bantları (0–100, tüm metrikler ortak)

| Bant | Anlam |
|------|-------|
| 90–100 | Mükemmel — kriter tamamen karşılanmış |
| 75–89 | İyi — minör eksik |
| 55–74 | Yeterli — belirgin iyileştirme alanları |
| 35–54 | Geliştirilmeli — temel gereksinimler kısmen eksik |
| 15–34 | Yetersiz — kriter neredeyse hiç uygulanmamış |
| 0–14 | Başarısız — kriter ihlal edilmiş / katkı yok |

### 3.2 Rubriklerin yapısı

Her rubrik dosyası şunları içerir: (a) metriğin **tanımı**, (b) **değerlendirme boyutları ve
kontrol listesi** (örn. okunabilirlikte adlandırma kalitesi, yapısal netlik, kod hijyeni),
(c) 0–100 **puanlama kılavuzu**, (d) **hakem notları** (kapsam sınırları, örn. "güvenlik sorunları
okunabilirlik puanını kırmaz").

---

## 4. Boyut Başına İzole Değerlendirme (Halo Etkisi Önleme)

Tek bir çağrıda tüm metriklerin birlikte puanlanması, modelin bir boyuttaki izlenimini diğerlerine
taşımasına ("halo etkisi") yol açar. Autorubric ve G-Eval literatürü, **her kriterin bağımsız bir
LLM çağrısında** değerlendirilmesini önerir.

Loomina bu prensibi uygular: her hakem, her metrik için **ayrı** bir API çağrısı yapar ve o çağrıya
**yalnızca o metriğin rubriği** verilir. Sonuç: bir değerlendirme döngüsünde

- Konsensüs durumunda: 5 metrik × 2 hakem = **10 API çağrısı**
- Tahkim durumunda: +1 (J3, 5 metriği tek çağrıda) = **~11 API çağrısı**

### 4.1 Hakem sistem promptu (J1/J2, metrik başına)

```
You are a senior software engineer and code review expert. Your task is to
evaluate the provided code on exactly ONE criterion: {METRIC_LABEL}.

You must NOT consider any other quality dimensions in your assessment.
Evaluate strictly and objectively — do not favor any particular coding style
or model family.

Score on a 0-100 integer scale using this rubric:
{METRIC_RUBRIC}

Think step by step:
1. Identify what the criterion requires
2. List what the code does well on this criterion
3. List what the code fails or misses on this criterion
4. Assign a score (0-100) based only on the evidence above

Also provide 1-2 short, actionable improvement suggestions in Turkish.
IMPORTANT: Keep the "reasoning" field concise (2-4 sentences max).

Return ONLY this JSON (no surrounding text, no markdown):
{"criterion":"...","reasoning":"...","suggestions":["...","..."],"score":<0-100>}
```

**Kullanıcı mesajı:** orijinal kullanıcı promptu + sistem kısıtları (SYSTEM_CONSTRAINTS) +
değerlendirilecek kod.

---

## 5. Prompt Uyumu (promptAdherence): İki Aşamalı Hesaplama

Prompt uyumu, kodun promptdaki kısıtlara sadakatini ölçer ve iki bileşenden harmanlanır.

### 5.1 Kategori A — Programatik (nesnel) denetim

`src/lib/evaluation/promptAlignmentChecker.ts`, IFEval "verifiable instruction" metodolojisine göre
**regex tabanlı** ve LLM gerektirmeyen kesin kontroller yapar:

- Çıktıda markdown bloğu / açıklama metni sızıntısı ("sadece kod döndür" ihlali)
- Tailwind CSS zorunluluğu (istenmişse utility class varlığı)
- React zorunluluğu (istenmişse `import React` / `from 'react'`)
- Inline CSS zorunluluğu
- "Sadece HTML (React yasak)" durumunda React kullanımı

Skor: `programmaticScore = round(geçen_kural / toplam_kural × 100)` (kural yoksa 100).

### 5.2 Kategori B — Semantik (LLM) denetim

Hakem modeli, yorum gerektiren kısıtları (UI yerleşimi, istenen bileşenlerin varlığı, etkileşimler)
0–100 arası puanlar (`semanticScore`).

### 5.3 Harmanlama

Her hakem için:

```
promptAdherence = round(programmaticScore × 0.6 + semanticScore × 0.4)
```

Programatik kontroller nesnel ve kesin olduğundan daha yüksek (0.6) ağırlıklıdır; semantik kontrol
hakem yorumuna bağlı olduğundan (0.4) hafif düşük ağırlıklıdır.

> **Not:** Tahkim devreye girip promptAdherence uyuşmazlık metriği olduğunda, J3 bu metriği doğrudan
> (harmanlanmamış) 0–100 olarak verir; medyan, J1/J2'nin harmanlanmış değerleri ile J3'ün ham değeri
> üzerinden alınır.

---

## 6. Konsensüs ve Dinamik Tahkim (Seçici + Medyan Tie-Breaker)

Bu, sistemin çekirdek karar mekanizmasıdır.

### 6.1 Konsensüs eşiği

Her metrik için iki hakemin puan farkına bakılır:

```
fark = |J1_score − J2_score|
fark ≤ DISAGREEMENT_THRESHOLD (= 20)  → hemfikir
fark >  DISAGREEMENT_THRESHOLD          → uyuşmazlık
```

Eşik `src/lib/evaluation/consensusService.ts` içinde tek noktadan ayarlanır. (Kalibrasyon: ilk
testlerde her analiz tahkime gittiği için 15'ten 20'ye yükseltildi.)

### 6.2 Final skor kuralı

**Hiç uyuşmazlık yoksa** (`dual_judge_consensus`): her metrik = `round((J1 + J2) / 2)`.

**En az bir uyuşmazlık varsa** (`arbitration_j3`): J3 çağrılır ve **her metrik ayrı** belirlenir:

| Metriğin durumu | Final skor |
|---|---|
| Hemfikir (fark ≤ 20) | **ortalama(J1, J2)** — J3 dokunmaz, konsensüs korunur |
| Uyuşmazlık (fark > 20) | **medyan(J1, J2, J3)** — J3 tie-breaker |

### 6.3 Medyan tie-breaker davranışı

Medyan, üç puanı sıralayıp ortadakini seçer. Bu, aykırı (outlier) bir J3 puanını dengeler:

| J1 | J2 | J3 | Sıralı | Medyan (final) | Yorum |
|----|----|----|--------|----------------|-------|
| 40 | 80 | 55 | 40, **55**, 80 | 55 | J3 arada → kazanır |
| 40 | 80 | 10 | 10, **40**, 80 | 40 | J3 aykırı → yutulur |
| 40 | 80 | 90 | 40, **80**, 90 | 80 | J3 aykırı → yutulur |

### 6.4 Tasarım gerekçesi

Önceki tasarımda, herhangi bir uyuşmazlıkta J3 **tüm 5 metriği tek başına** yeniden yazıyordu; bu
(a) hakemlerin hemfikir olduğu metriklerdeki konsensüsü çöpe atıyor, (b) tek bir yargıcı aşırı
yetkilendiriyordu. Yeni tasarım LLM-as-a-Judge literatüründeki **medyan/çoğunluk oylaması**
yaklaşımıyla uyumludur: tek aykırı yargıca dayanıklıdır ve yalnızca gerçek anlaşmazlık olan boyutta
müdahale eder. Akademik olarak "üç bağımsız yargıcın medyanı" ifadesi, "üçüncü model her şeyi yeniden
yazdı"dan çok daha kolay savunulur.

### 6.5 Tahkimci (J3) promptu

J3, her iki hakemin tam gerekçelerini görür ancak bağımsız karar vermesi istenir (ortalama almaz):

```
You are an arbitrator judge. Two independent reviewers have disagreed on the
evaluation of the provided code. Make the final, binding decision on ALL 5 criteria.
Consider both reviewers' reasoning but form your own independent judgment.
Do NOT average their scores — evaluate the code independently on a 0-100 integer scale.

Rubrics for all 5 criteria: {ALL_RUBRICS}

Return ONLY this JSON: { arbitration_triggered_by, j1_summary, j2_summary,
final_reasoning, scores:{readability,performance,security,maintainability,promptAdherence} }
```

> J3 tüm 5 metriği döndürse de, sistem yalnızca **uyuşmazlık metrikleri** için J3'ün skorunu
> (medyan içinde) kullanır; hemfikir metrikler J1-J2 ortalamasında kalır.

### 6.6 Genel skor

```
overallScore = round( Σ(final skorlar) / 5 )
```

### 6.7 Karar yöntemleri (`decision_method`)

| Değer | Anlam |
|-------|-------|
| `dual_judge_consensus` | Hiç uyuşmazlık yok; tüm metrikler J1-J2 ortalaması |
| `arbitration_j3` | Uyuşmazlık var; seçici + medyan tie-breaker uygulandı |
| `arbitration_failed_fallback_average` | J3 çağrısı başarısız; uyuşmazlık metriklerinde J1-J2 ortalamasına düşüldü |

---

## 7. Inference Parametreleri (Reproducibility)

Tüm parametreler `src/lib/llmConfig.ts` içinde merkezîdir.

| Parametre | Kod Üretimi | Hakem (J1/J2) | Tahkimci (J3) |
|---|---|---|---|
| `temperature` | 0.7 | 0.1 | 0.1 |
| `top_p` | 0.95 | 0.95 | 0.95 |
| `max_tokens` | 16000 | 8000 | 8000 |
| `response_format` | — | `json_object`* | `json_object` |
| `stream` | false | — | — |
| `seed` | — | — | — |

\* Yalnızca destekleyen modellerde gönderilir (`SUPPORTS_JSON_FORMAT`).

- **Kod üretimi** `temperature=0.7`: yaratıcı fakat tutarlı kod.
- **Değerlendirme/tahkim** `temperature=0.1`: deterministiğe yakın, tekrarlanabilir skor.
- **Yüksek `max_tokens`:** hakem modeller reasoning (akıl yürüten) modellerdir; token bütçesinin bir
  kısmını iç akıl yürütmeye harcarlar. Düşük bütçe JSON çıktısını yarıda keser (truncation). Bu
  nedenle değerlendirme/tahkim çağrılarında yüksek `max_tokens` zorunludur.
- **Kod üretimi `max_tokens=16000`:** Büyük React/dashboard çıktıları 8192 token'da kesilebildiğinden
  (gözlemlenen truncation vakası) üretim bütçesi 16000'e çıkarılmıştır.
- **`seed` yok:** OpenRouter tüm modellerde seed'i tutarlı desteklemediğinden eklenmemiştir;
  determinizm düşük temperature ile yaklaşıklanır.

---

## 8. Sistem Promptları ve Çıktı Kısıtları

### 8.1 Üretici sistem promptu (`SYSTEM_CONSTRAINTS`, `src/lib/prompts.ts`)
> "Sen uzman bir tam-yığın (full-stack) yazılım geliştiricisisin. […] Ürettiğin her kod üretime
> hazır (production-ready), okunabilir ve çalışır durumda olmalıdır. Asla eksik veya yer tutucu
> (placeholder) kod verme. […]"

Bu sabit, hem üretici çağrısında hem de programatik prompt-uyum denetiminde tek kaynak olarak
kullanılır (kısıtlar her iki yerde aynı).

### 8.2 Çıktı kısıtları
- **Hakem/tahkimci çıktısı:** yalnızca JSON; etrafında metin veya markdown yok.
- Dayanıklılık için ayrıştırıcı, metin içindeki ilk `{` ile son `}` arasını alır (etraftaki gürültüyü
  temizler) — bkz. §9.

---

## 9. Hata Yönetimi ve Dayanıklılık

`src/lib/evaluation/judgeService.ts` içindeki `callOpenRouterJson` aşağıdaki durumlarda kısa
gecikmeli retry uygular (`RETRY_DELAYS_MS`):

- Ağ hatası
- HTTP 429 (rate limit) veya 5xx
- **Boş içerik** (genelde max_tokens reasoning'e harcanıp content'e kalmadığında)
- **JSON ayrıştırma hatası** (truncation veya bozuk çıktı)

JSON ayrıştırma `parseLooseJson` ile dayanıklı yapılır: markdown fence'leri temizlenir, ilk `{`–son
`}` aralığı alınır. Tüm denemeler tükenirse hata üst katmana iletilir.

Orchestrator düzeyinde:
- J1 **veya** J2 tamamen başarısız olursa değerlendirme başarısız sayılır (kayıt yapılmaz).
- J3 başarısız olursa `arbitration_failed_fallback_average` ile J1-J2 ortalamasına düşülür.

---

## 10. Kalıcılık (Supabase)

Giriş yapmış kullanıcılar için her analiz `evaluations` tablosuna yazılır (RLS: kullanıcı yalnızca
kendi kayıtlarına erişir). Saklanan alanlar:

- 5 metrik skoru + `overall_score`
- `decision_method`, `disagreed_metrics`
- `j1_model`, `j2_model`, `j3_model`
- `prompt_alignment_detail` (programatik/semantik kırılım, ihlaller)
- (şema ham J1/J2/J3 dökümü için `j1_raw_scores`, `j2_raw_scores`, `arbitration_result` jsonb
  sütunlarını da içerir)

Bu sayede makale için **tahkim oranı**, **metrik bazlı anlaşmazlık dağılımı** ve **J1/J2/J3 sapması**
gibi analizler sonradan veritabanından çıkarılabilir.

---

## 11. Maliyet ve İzleme

| Senaryo | API çağrısı / değerlendirme |
|---------|------------------------------|
| Konsensüs | 10 (5 metrik × 2 hakem) |
| Tahkim | ~11 (+1 J3) |

`decision_method` loglanarak **tahkim oranı** izlenmelidir. Sürekli yüksek tahkim oranı (>%30),
konsensüs eşiğinin (20) gözden geçirilmesi gerektiğine işaret eder.

---

## 12. Bilinen Sınırlar (makalede tartışılmalı)

1. **Statik analiz sınırı:** Performans ve güvenlik değerlendirmesi kodu çalıştırmadan, anti-pattern
   varlığına dayanır; statik HTML gibi basit çıktılarda ayrıştırıcılığı sınırlıdır.
2. **Anchoring:** J3, J1/J2'nin sayısal puanlarını görür; "bağımsız ol" talimatına rağmen çapalama
   riski vardır. Medyan tie-breaker bu riski kısmen damper; tam çözüm için anonimleştirme gerekir.
3. **Üretici-hakem aile örtüşmesi:** DeepSeek üretici olarak seçilirse J1 ile aile örtüşür (§2.1).
4. **Reasoning modeli gecikmesi:** Hakem modeller reasoning yaptığından bir değerlendirme onlarca
   saniye sürebilir; bu, ölçek/maliyet açısından bir kısıttır.
5. **promptAdherence harman asimetrisi:** Tahkimde J3'ün promptAdherence skoru harmanlanmamıştır
   (§5.3 notu).
6. **Önizleme (render) ≠ değerlendirme:** Hakemler kodun **metnini** puanlar, render edilmiş görüntüsünü
   değil. Modeller çıktı *biçimini* farklı verir: tam HTML belgesi, yalnızca HTML bileşeni, ya da
   React/JSX. Önizleme, bu farkın görsel kalite kıyaslamasını yanıltmaması için çıktıyı normalize eder
   (`src/utils/preview.ts` `buildPreviewDocument`):
   - **Tam HTML belgesi** → olduğu gibi.
   - **Statik HTML parçası** → Tailwind CDN enjekte edilerek sarılır (aksi halde utility class'lar ölü kalır).
   - **React/JSX** → Babel Standalone + React/ReactDOM + lucide-react (esm.sh importmap) + Tailwind içeren
     bir sandbox'ta gerçek bir React uygulaması olarak çalıştırılır.
   Eksik/kesik (truncate olmuş) veya tanımsız import içeren çıktılar (örn. `import React` olmadan gelen
   bir JSX fragment) sessiz bozuk render yerine **anlamlı bir hata** gösterir. Tüm bunlar yalnızca
   görselleştirmedir; **otomatik metin-tabanlı hakem skorlarını etkilemez.** Makalede, modellerin çıktı
   biçimi eğiliminin (tam sayfa / bileşen / React) yalnızca görsel incelemeyi etkilediği, skorların ise
   bundan bağımsız olduğu belirtilmelidir.

---

## 13. İlgili Dosyalar (uygulama referansı)

| Dosya | Sorumluluk |
|-------|------------|
| `src/lib/llmConfig.ts` | Tüm inference parametreleri |
| `src/lib/prompts.ts` | `SYSTEM_CONSTRAINTS` (üretici + checker ortak) |
| `src/lib/evaluation/promptAlignmentChecker.ts` | Programatik prompt-uyum (Kategori A) |
| `src/lib/evaluation/rubrics/*.md` + `rubrics.ts` | 5 metrik rubriği + yükleyici |
| `src/lib/evaluation/judgeService.ts` | Metrik başına hakem çağrısı + harmanlama + retry |
| `src/lib/evaluation/consensusService.ts` | Konsensüs eşiği + J3 tahkim çağrısı |
| `src/lib/evaluation/orchestrator.ts` | Akış + seçici/medyan karar mantığı |
| `src/app/api/analyze/route.ts` | Değerlendirme API uç noktası |
| `src/utils/preview.ts` | `buildPreviewDocument` — önizleme normalizasyonu (Tailwind enjeksiyonu) |
| `supabase/migrations/0001_create_evaluations.sql` | `evaluations` tablosu + RLS |
```
