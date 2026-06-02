# Sprint 3: Kod Önizleme ve Yapay Zeka Destekli Analizör (AI Code Review)

Bu sprintte, kullanıcı deneyimini zenginleştirmek ve projenin "Analyzer" (Analizör) vizyonunu gerçeğe dönüştürmek amacıyla iki temel büyük özellik geliştirdik: **Yeni Sekmede Çalıştır (Preview)** ve **Yapay Zeka Destekli Kod İncelemesi (AI Code Review)**.

## 1. Yeni Sekmede Kod Önizleme (Blob URL Preview)

Modeller tarafından üretilen HTML/CSS/JS kodlarının tarayıcı üzerinde hızlıca test edilebilmesi için yeni bir önizleme altyapısı kuruldu.

- **`src/utils/preview.ts`**: LLM'den gelen ham metin formatındaki kodu alıp `new Blob([code], { type: 'text/html' })` mantığıyla tarayıcıda çalıştırılabilir bir HTML belgesine dönüştüren fonksiyon yazıldı. Hafıza sızıntılarını (memory leak) önlemek için geçici URL'ler 5 saniye sonra `URL.revokeObjectURL()` ile otomatik temizlenecek şekilde ayarlandı. Güvenlik için `noopener, noreferrer` parametreleri kullanıldı.
- **UI Entegrasyonu (`src/app/page.tsx`)**: Kod kutularının (ModelCard) üst kısmına ve tam ekran önizleme modalına **"Çalıştır"** butonu eklendi (Lucide-React `ExternalLink` ikonu ile birlikte).

## 2. Yapay Zeka Destekli Kod Analizi (AI Code Review)

Projenin asıl odak noktası olan "akademik kıyaslama ve kod kalitesi ölçümü" için, her bir modelin ürettiği kodu kıdemli bir yazılım uzmanı bakış açısıyla inceleyen yepyeni bir analiz sistemi geliştirildi.

- **Backend API Rotası (`src/app/api/analyze/route.ts`)**: 
  - Gönderilen kod bloğunu alan ve OpenRouter üzerinden `gpt-4o-mini` modeline ileten yeni bir API uç noktası oluşturuldu.
  - Özel bir *System Prompt* yazılarak LLM'in kodu sadece JSON formatında analiz etmesi zorunlu kılındı.
  - Olası markdown işaretlemelerini (```json) temizleyen bir veri işleme katmanı eklendi.

- **State Yönetimi (`src/store/useBenchmarkStore.ts`)**: 
  - Zustand store'u içerisindeki `ModelResult` state'ine `isAnalyzing` (yükleniyor durumu), `analysisResult` (JSON analizi) ve `analysisError` alanları eklendi.
  - Dönen JSON verisini karşılayacak yapı olan `AnalysisResult` (Okunabilirlik, Performans, Güvenlik, Sürdürülebilirlik) arayüzü tanımlandı.

- **Kullanıcı Arayüzü (UI) Entegrasyonu**:
  - **Meta Veri Barı**: Kod kutularının hemen altına, o kodun **satır sayısını** ve API'den dönme süresini (ms) gösteren bir alan eklendi.
  - **Analiz Butonu**: Kullanıcıların analizi tetikleyebilmesi için "Analiz Sonucunu Göster" butonu eklendi.
  - **AI Kod İnceleme Paneli**: API'den gelen veriler `CategoryScore` adlı yeni bir React bileşeniyle render edildi. 
    - 0-10 arası puanlar görsel ilerleme çubukları (Progress Bar) ile sunuldu.
    - Puanlara göre dinamik renkler (0-4: Kırmızı, 5-7: Sarı, 8-10: Yeşil) atandı.
    - Her kategori için sunulan "Geliştirme Önerileri" liste halinde UI'a yansıtıldı.
