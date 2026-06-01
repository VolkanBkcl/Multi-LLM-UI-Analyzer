# Maintainability (Sürdürülebilirlik) Rubriği
Kaynak: ISO/IEC 25010 §4.5 (Modularity, Reusability, Analyzability, Modifiability, Testability),
SonarQube Rules, arc42 Quality Model

## Tanım
Kodun zaman içinde başka bir geliştirici tarafından değiştirilebilmesi, genişletilebilmesi
ve hata ayıklanabilmesi. ISO/IEC 25010 bu karakteristiği 5 alt boyuta ayırır.

## Değerlendirme Boyutları ve Kontrol Listesi

### 1. Modülarite ve Bileşen Mimarisi (Modularity — ISO §4.5.1)
- Her bileşen tek bir UI veya mantık sorumluluğu mu taşıyor? (SRP)
- Büyük monolitik bileşenler küçük, bağımsız alt bileşenlere ayrılmış mı?
- Props drilling 3+ seviyeyi aşıyor mu? (context API veya state management ile çözülmeli)
- Mantık (business logic) ve sunum (presentation) katmanları ayrışmış mı? (custom hook kullanımı)

### 2. Yeniden Kullanılabilirlik (Reusability — ISO §4.5.2)
- Benzer UI blokları ortak bileşenler olarak soyutlanmış mı? (Button, Card, Modal vb.)
- Sabit değerler ve konfigürasyon verisi ayrı bir dosyaya çıkarılmış mı? (`constants.ts`, `config.ts`)
- Custom hook'lar başka bileşenlerde de kullanılabilecek şekilde tasarlanmış mı?

### 3. Değiştirilebilirlik (Modifiability — ISO §4.5.4)
- Bir gereksinim değiştiğinde kaç dosyayı değiştirmek gerekiyor? (yüksekse düşük sürdürülebilirlik)
- Şartlı render mantığı okunabilir ve kolayca genişletilebilir mi?
- Magic string'ler yerine enum veya sabit diziler kullanılmış mı?
- Stil sabitleri token olarak tanımlanmış mı? (Tailwind theme veya CSS custom property)

### 4. Test Edilebilirlik (Testability — ISO §4.5.5)
- Bileşenler dışarıdan enjekte edilebilir bağımlılıklarla tasarlanmış mı?
- Saf (pure) fonksiyonlar yan etkilerden izole edilmiş mi?
- Bileşenler çok fazla global state'e bağımlı mı? (test yazmayı zorlaştırır)

### 5. Hata Yönetimi ve Savunmacı Programlama
- API çağrıları için hata durumu (error state) tanımlanmış ve yönetiliyor mu?
- Loading, error ve empty state'lerin üçü de ele alınmış mı?
- Null / undefined olabilecek değerler için optional chaining (`?.`) veya guard clause kullanılmış mı?
- Kullanıcıya gösterilen hata mesajları anlamlı mı?

## Puanlama Kılavuzu (0–100)
- 90–100: Tüm boyutlarda mükemmel: SRP uygulanmış, hata yönetimi eksiksiz, test edilebilir yapı.
- 75–89: 4+ boyut tam geçiyor; 1 boyutta minör sorun (ör. props drilling 4 seviyeye ulaşmış).
- 55–74: Temel yapı mevcut ancak en az 2 boyutta belirgin sorunlar: büyük bileşenler, eksik hata yönetimi.
- 35–54: Kod çalışıyor ama sürdürülemez: monolitik yapı, hata yönetimi yok, değiştirmek zor.
- 15–34: Neredeyse hiç yapılanma yok; her değişiklik beklenmedik yan etkiler yaratır.
- 0–14: Spaghetti kod: mimari tamamen çözülmüş, refactor etmek yerine yeniden yazmak gerekir.

## Hakem Notları
- Prompt'ta "production-ready" veya "component-based" ifadesi geçiyorsa standart daha yüksek tutulur.
- Basit tek bileşenli görevlerde (login form, product card) 5+ alt bileşene bölme beklenmez.
- Güvenlik ve performans sorunları burada puan kırmaz; yalnızca yapısal sürdürülebilirlik değerlendirilir.
