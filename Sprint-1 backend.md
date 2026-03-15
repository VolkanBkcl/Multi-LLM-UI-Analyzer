# Sprint-1 Backend Kurulumu ve Özeti

Bu dokümanda, Multi-LLM-UI-Analyzer projesi için hazırlanan backend altyapısı ve LLM servis mimarisinin detayları yer almaktadır. Frontend tasarımına dokunulmamış, sadece backend fonksiyonları ve veri akış yolları hazırlanmıştır.

## 1. Neler Yapıldı?

1. **Provider Pattern & LLM Servisleri (`src/services/`):**
   - `LLMProvider.ts` interface'i oluşturuldu.
   - Bu interface'i implement eden `OpenAIService.ts`, `GeminiService.ts` ve `GroqService.ts` sınıfları yazıldı.
   - Her servise, prompt alıp modelin API'sine ileten ve çalışma süresini (`executionTime`) hesaplayan `generateCode()` fonksiyonu eklendi.

2. **API Route Orchestrator (`src/app/api/generate/route.ts`):**
   - Kullanıcıdan gelen `prompt` ve seçilen `models[]` (string array) listesini alan bir POST route oluşturuldu.
   - `Promise.allSettled` kullanılarak seçilen tüm modellere eşzamanlı istek atılması ve sonuçların (başarılı kod, süre, veya hata durumu) standart bir dizi olarak döndürülmesi sağlandı. Modüllerin paralel çalışmasıyla hız optimize edildi.

3. **State & Context Management (`src/context/BenchmarkingContext.tsx`):**
   - API'den dönen verileri (`results`), yüklenme (`isLoading`) durumunu ve olası hataları (`errors`) global state üzerinde tutmak için `BenchmarkingContext` oluşturuldu.
   - API'ye (`/api/generate`) POST isteği atan ve dönen veriyi state'lere dağıtan `runBenchmark(prompt, selectedModels)` fonksiyonu eklendi. (Fatih bu fonksiyonu UI butonlarına bağlayacak).

4. **Güvenlik ve Ortam Değişkenleri (`.env.local`):**
   - `OPENAI_API_KEY`, `GEMINI_API_KEY` ve `GROQ_API_KEY` değişkenleri proje dizinindeki `.env.local` dosyasına tanımlandı. API key'lerine process.env üzerinden güvenli bir şekilde erişilmesi sağlandı.

## 2. Gerekli Paketlerin Kurulumu

LLM API SDK'larını ve gerekli modülleri projenize kurmak için aşağıdaki komutları terminalinizde çalıştırın:

```bash
npm install @google/generative-ai openai groq-sdk axios
npm install groq-sdk
```

*(Not: Ortamda `fetch` API yetenekleri de kullanılmasına karşın test veya varyasyonlarda ihtiyacınız olması ihtimaline karşın `axios` paketi de dahil edilmiştir.)*

## 3. Backend Nasıl Başlatılacak?

Projeyi local ortamda test etmek ve çalıştırmak için:

1. Kök dizinde yer alan `.env.local` dosyasının içindeki API key anahtarlarına kendi **geçerli API anahtarlarınızı** girin.
2. Gerekli tüm bağımlılıkları terminal penceresinde kurduğunuzdan emin olun (yukarıdaki `npm install ...` komutu ile).
3. Aşağıdaki komut ile Next.js geliştirme sunucusunu başlatın:

```bash
npm run dev
```

Sunucu başladıktan sonra sistem, API isteklerini kabul etmeye ve `/api/generate` route'u üzerinden seçilen tüm LLM sağlayıcılarına asenkron olarak bağlanmaya hazır olacaktır. İstek atmak için Provider Context içerisindeki `runBenchmark` fonksiyonunu UI'dan tetikleyebilirsiniz.
