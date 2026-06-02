# Readability (Okunabilirlik) Rubriği
Kaynak: ISO/IEC 25010 §4.2.1 (Analyzability + Understandability), Google Code Review Guidelines

## Tanım
Kodun başka bir geliştirici tarafından — bağlamı olmaksızın — makul sürede okunabilmesi,
yapısının kavranabilmesi ve değişiklik yapılmak üzere güvenle düzenlenebilmesi.

## Değerlendirme Boyutları ve Kontrol Listesi

### 1. Adlandırma Kalitesi (Naming)
- Değişken adları işlevin ne yaptığını açıkça yansıtıyor mu? (`d` değil `userData`)
- Boolean değişkenler açıklayıcı önek taşıyor mu? (`isLoading`, `hasError`, `canSubmit`)
- Event handler'lar `handle` + event + element formatında mı? (`handleButtonClick`)
- Sabit değerler (magic numbers/strings) anlamlı sabitlerle tanımlanmış mı?
- Kısaltmalar yalnızca evrensel formlar mı? (`btn`, `idx` → ihlal; `url`, `id` → kabul)

### 2. Yapısal Netlik (Structural Clarity)
- Fonksiyon/bileşen başına tek sorumluluk var mı? (SRP)
- İç içe geçme derinliği 3 seviyeyi aşıyor mu? (aşıyorsa erken return/helper kullanılmalı)
- Bileşenin uzunluğu makul mü? (~150 satır üzeri uyarı, ~300 satır üzeri ihlal)
- Ternary içinde ternary var mı? (okunabilirliği ciddi düşürür)

### 3. Yorum ve Dokümantasyon (Comments & Docs)
- Karmaşık iş mantığı (NEDEN yapıldığı) açıklanmış mı?
- Sahte-açıklama (obvious comment) var mı? (`// i'yi 1 artır → i++`) → negatif gösterge
- TypeScript kullanılıyorsa `any` tipi kullanılmış mı? → varsa doğrudan ihlal

### 4. Kod Temizliği (Code Hygiene)
- Debug kalıntıları temizlenmiş mi? (`console.log`, `debugger`, yorum satırına alınmış kodlar)
- Kullanılmayan import, değişken veya prop var mı?
- Kopya-yapıştır kod tekrarı (DRY ihlali) var mı?

### 5. Biçimlendirme Tutarlılığı (Formatting)
- Girintileme ve boşluk kullanımı tutarlı mı?
- Import sıralaması mantıklı mı? (external → internal → relative → types)
- Satır uzunluğu makul mü? (120 karakter üzeri okunabilirliği düşürür)

## Puanlama Kılavuzu (0–100)
- 90–100: Tüm boyutlarda mükemmel: adlar açıklayıcı, yapı sade, debug kalıntısı yok, kod bağlam gerektirmeden anlaşılıyor.
- 75–89: 4 boyut tam geçiyor, 1 boyutta 1–2 minör sorun (ör. 1–2 belirsiz değişken adı).
- 55–74: Genel yapı okunabilir ancak en az 2 boyutta belirgin sorunlar var (magic number, çok uzun fonksiyonlar).
- 35–54: Temel işlev anlaşılabilir fakat birden fazla boyutta ciddi sorunlar: `any`, derin iç içe geçme, anlamsız adlar.
- 15–34: Kod anlaşılması zor; çoğu boyut başarısız. Önemli yeniden yazım gerekiyor.
- 0–14: Kod tamamen okunaksız, yapılanmamış veya hiç biçimlendirilmemiş ham çıktı.

## Hakem Notları
- Bu metrik YALNIZCA okunabilirlik boyutunu kapsar. Performans veya güvenlik sorunları burada puan kırmaz.
- Kısa ve fonksiyonel kod, uzun ve açıklayıcı koddan daha yüksek puan alabilir — önemli olan orantılılık.
