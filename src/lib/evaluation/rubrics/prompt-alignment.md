# Prompt Alignment / Prompt Adherence (Talimat Uyumluluğu) Rubriği
Kaynak: Google IFEval (Zhou et al., 2023), DeepEval PromptAlignmentMetric, G-Eval (Confident AI)

## Tanım
Üretilen kodun sistem promptu ve kullanıcı talimatlarındaki tüm kısıtlamalara ne derece
sadık kaldığı. Hem biçimsel (format, teknoloji seçimi, çıktı yapısı) hem de semantik
(tasarım gereksinimleri, içerik zorunlulukları) uyumu kapsar.

> NOT: Bu metriğin nihai skoru iki parçadan harmanlanır:
> `Final = programmaticScore × 0.6 + semanticScore × 0.4` (her ikisi de 0–100).
> Bu rubrik, hakemin vereceği **semantik** skoru (Kategori B) yönlendirir.

## Kısıt Kategorileri

### Kategori A — Biçimsel Kısıtlar (Programatik Denetim — bu rubrik dışında hesaplanır)
String analizi ile kesin tespit edilir: çıktı formatı (sadece kod), teknoloji zorunluluğu
(Tailwind/React), stil yaklaşımı (inline CSS). Bunlar `promptAlignmentChecker` tarafından ölçülür.

### Kategori B — Semantik Kısıtlar (LLM Hakemi Değerlendirmesi)
Yorum gerektirdiğinden hakem model değerlendirir:
- UI yerleşimi: "Ürün görseli solda, detaylar sağda olsun"
- Bileşen içeriği: "Avatar, kullanıcı adı, bio ve Follow butonu içermeli"
- Etkileşim: "Sidebar açılıp kapanabilmeli"
- Veri yapısı: "3 KPI kartı göster: Revenue, Users, Bounce Rate"

## Değerlendirme Boyutları (Semantik)

### 1. İşlevsel Gereksinim Uyumu
- Prompt'ta belirtilen tüm UI bileşenleri mevcut mu?
- İstenen etkileşimler (toggle, tab geçişi, form submit) implement edilmiş mi?

### 2. Tasarım / Yerleşim Uyumu
- İstenen düzen, hizalama ve görsel yapı karşılanmış mı?

### 3. İçerik ve Veri Uyumu
- İstenen metin, alan ve veri öğeleri eksiksiz mi?
- Placeholder veya "TODO" var mı? (production-ready istenmişse ihlal)

## Puanlama Kılavuzu (0–100, semantik)
- 90–100: Tüm semantik (Kategori B) kısıtlar tam karşılanmış. Prompt'un ruhuna tam sadakat.
- 75–89: Tüm kritik kısıtlar karşılanmış; 1 minör kısıt gözden kaçmış.
- 55–74: Önemli kısıtların çoğu karşılanmış; 1 kritik kısıt ihlali veya 2–3 minör ihlal var.
- 35–54: Kısıtların yaklaşık yarısı karşılanmış; belirgin işlevsel eksikler var.
- 15–34: Yalnızca 1–2 kısıt karşılanmış; büyük bölümü göz ardı edilmiş.
- 0–14: Prompt kısıtlarıyla neredeyse hiç örtüşme yok; kod prompt'la ilgisiz.

## Hakem Notları
- Programatik (Kategori A) skoru ayrıca hesaplanır; sen YALNIZCA semantik (Kategori B) uyumu puanla.
- Kısıt sayısı az olan promptlarda bu metriğin etkisi sınırlı olsa da hesaplama formülü değişmez.
