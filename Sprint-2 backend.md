# Sprint-2 Backend Kurulumu ve Özeti (Metin Ayıklama - Parsing)

Bu dokümanda, Multi-LLM-UI-Analyzer projesinin Sprint-2 aşamasında tamamlanan **Metin Ayıklama (Parsing) ve Yapay Zeka Yanıtlarını Temizleme** görevinin (API'lerden gelen JSON/Kod yanıtlarını temizleyen fonksiyon) detayları yer almaktadır.

## 1. Görevin Amacı

OpenAI, Gemini ve Groq gibi Çoklu Dil Modelleri (LLM'ler) kod üretirken doğrudan ham kodu göndermek yerine, çoğu zaman "İşte istediğiniz kod parçası:", "Aşağıda örneği bulabilirsiniz:" gibi sohbet ve blog tarzı ek metinler gönderirler. 

Kullanıcı arayüzünde (UI) bu üretilen kodların **canlı önizlemesinin (Live Render)** yapılabilmesi için, bu sohbet metinlerinin arayüze ulaşmadan çökertilmeden temizlenip **%100 saf koda** dönüştürülmesi gerekmekteydi.

## 2. Ne Yapıldı? (Teknik Çözüm)

Bu görevin çözümü için iki farklı dosyada geliştirmeler yapıldı:

### a) Ayrıştırıcı Fonksiyonunun Geliştirilmesi (`src/lib/parser.ts`)
LLM yanıtlarından saf kodu söküp almak için modüler bir araç (`extractCodeFromMarkdown`) yazıldı. Bu fonksiyon şu adımlarla çalışır:

1. **Düzenli İfadeler (Regex) Kullanımı:** API'den dönen koca bir metin yığını içinde, sadece ``` (üç ters tırnak) ile başlayıp biten Markdown kod bloklarını yakalayan gelişmiş bir Regex kuralı (`/```[\w]*\n([\s\S]*?)```/`) tanımlandı.
2. **Dil Etiketlerini Silme:** Kullanılan yapay zekalar genellikle ```html, ```javascript, ```python şeklinde dil uzantıları girdiği için, parser sadece aradaki (`\n`'den sonraki) çekirdek metni (`match[1]`) dönecek şekilde ayarlandı.
3. **Fallback (Alternatif Plan) Koruması:** LLM bazen kodu (```) işaretleri olmadan direkt `<html>` veya `<div>` taglarıyla düz metne gömebilir. Eğer ilk adım başarısız olursa, fonksiyonumuz ikinci bir Regex adımıyla içinde HTML/Arayüz bileşenleri barındıran sarmalları (`<[a-z][\s\S]*>`) bulup yakalayacak güvenlik ağlarına sahiptir.
4. **Trim İşlemi:** Kodun başındaki ve sonundaki gereksiz satır boşluklarını kaldırarak tek tip, tertemiz bir kod string'i haline dönüştürür.

### b) API Route Entegrasyonu (`src/app/api/generate/route.ts`)
Geliştirilen bu Parser yeteneği, backend'in ana damarına (Orchestrator'a) şu şekilde bağlandı:

- Modellerden sonuçlar toplanırken (`Promise.allSettled` yapısı içinde) döngüye girer.
- İlgili modelden (`OpenAI`, `Gemini`, `Groq`) başarılı (`fulfilled`) bir sonuç geldiyse, bu dönüş değeri doğrudan arayüze gönderilmez.
- Araya bizim yazdığımız parser girer: **`generatedCode: val.generatedCode ? extractCodeFromMarkdown(val.generatedCode) : null`** 
- Bu sayede API; veriyi filtreleyip, temizleyip, formatlayıp arayüzdeki UI state sistemine (Zustand & Context) JSON içindeki saf formatıyla teslim eder.

## 3. Sonuç

Bu işlemler sonucunda frontend (`page.tsx`) taraflı hiçbir karışıklığa mahal verilmeden asenkron API yükleri temizlendi. Artık bir sonraki Sprint'in çekirdek görevi olan **"Canlı Render Önizlemesi" (Render/Preview)** için %100 hazır, kararlı bir kod veri hattı kurulmuş oldu.
