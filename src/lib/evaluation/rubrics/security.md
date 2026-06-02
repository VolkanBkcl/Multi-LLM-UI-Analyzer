# Security (Güvenlik) Rubriği
Kaynak: ISO/IEC 25010 §4.6, OWASP Top 10 2021, React Security Checklist, OWASP Frontend Security

## Tanım
Kodun yaygın frontend güvenlik açıklarına karşı dayanıklılığı. XSS, veri sızıntısı,
güvensiz depolama, injection riskleri ve hatalı kimlik doğrulama statik analizle değerlendirilir.

## Değerlendirme Boyutları ve Kontrol Listesi

### 1. XSS Koruması — KRİTİK
- `dangerouslySetInnerHTML` kullanılmış mı? (varsa DOMPurify gibi sanitization zorunlu)
- `innerHTML` ile doğrudan DOM manipülasyonu var mı?
- Kullanıcı girdisi doğrudan JSX'e string interpolation ile enjekte ediliyor mu?
- CSS-in-JS kütüphanelerinde kullanıcı girdisinden stil nesnesi oluşturuluyor mu? (CSS injection)
- `eval()`, `Function()` veya `setTimeout/setInterval(string)` kullanımı var mı?
- AI çıktısı render ediliyorsa DOMPurify ile sanitize ediliyor mu?

### 2. Kimlik Doğrulama ve Token Yönetimi — KRİTİK
- JWT veya API token'ları `localStorage`/`sessionStorage`'da açık metin olarak mı saklanıyor?
- Token'lar `console.log` veya hata mesajlarında açığa çıkıyor mu?
- Hardcoded API anahtarı, şifre veya secret doğrudan kod içine gömülmüş mü? (kritik ihlal)
- Environment variable'lar framework'e uygun prefix ile tanımlanmış mı? (`NEXT_PUBLIC_`, `VITE_`)
- Client-side route koruması (PrivateRoute) bypass edilebilir mi?

### 3. Input Doğrulama — ORTA
- Form alanları için client-side validation uygulanmış mı? (email formatı, uzunluk, tür)
- Sayısal alanlara string girilebiliyor mu? (tür zorlaması eksik)
- Dosya yükleme varsa dosya tipi ve boyut kontrolü yapılmış mı?
- URL parametreleri veya query string'ler doğrulanmadan kullanılıyor mu?

### 4. Güvenli Veri İşleme — ORTA
- Hassas veri (PII, kart bilgisi, şifre) console veya state'te gereksiz yere tutuluyor mu?
- API'den gelen hata mesajları doğrudan kullanıcıya gösteriliyor mu? (stack trace sızıntısı)
- Dış kaynaklara fetch yapılırken HTTPS zorunlu tutuluyor mu?

## Puanlama Kılavuzu (0–100)
- 90–100: Tüm kritik kontroller geçiyor: XSS koruması, güvenli token yönetimi, input validation eksiksiz.
- 75–89: Kritik kontroller geçiyor, 1 orta seviyeli eksik (ör. URL parametresi doğrulanmamış).
- 55–74: Kritik kontrollerin bir kısmı geçiyor; en az 1 kritik risk var (ör. sanitize edilmemiş dangerouslySetInnerHTML).
- 35–54: Birden fazla kritik güvenlik sorunu bir arada (ör. hem XSS riski hem güvensiz token depolama).
- 15–34: Ciddi ve yaygın güvenlik açıkları; production'a alınırsa kullanıcı verisi tehlikeye girer.
- 0–14: Hardcoded secret, sanitize edilmemiş dangerouslySetInnerHTML veya açık veri sızıntısı — kritik ihlal.

## Hakem Notları
- React kendi JSX render'ında XSS'i otomatik önler. Yalnızca `dangerouslySetInnerHTML` ve doğrudan DOM manipülasyonu risk oluşturur.
- Prompt'ta authentication zorunlu kılınmamışsa JWT ve token kontrolleri uygulanmaz.
- En düşük puanlar yalnızca kesin ve kanıtlanmış kritik ihlaller için kullanılmalıdır.
