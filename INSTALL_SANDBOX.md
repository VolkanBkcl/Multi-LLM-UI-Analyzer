🛠 Sandbox Kurulum Rehberi
Bu proje artık LLM çıktılarını güvenli render etmek için Sandpack kullanmaktadır. Projenin düzgün çalışması için lütfen şu adımları takip edin:

Yeni Paketleri Yükleyin:
Terminali açın ve ana dizinde şu komutu çalıştırın:
npm install @codesandbox/sandpack-react

Next.js Önbelleğini Temizleyin:
Eski eval hatalarından kurtulmak için .next klasörünü silip projeyi yeniden başlatın:
rm -rf .next (Mac/Linux) veya rd /s /q .next (Windows)
npm run dev

Kontrol:
Modellerden kod geldiğinde artık tarayıcı konsolunda CSP hatası görmemelisiniz.