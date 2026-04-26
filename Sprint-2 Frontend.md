# Sprint-2: Frontend Geliştirme Raporu 2.Hafta

Bu dosya, projenin ikinci sprint aşamasında frontend tarafında yapılan geliştirme ve iyileştirmeleri (Karanlık Tema ve Battle Mode dönüşümü) içermektedir.

## ✅ Tamamlanan Görevler

### 1. Arena.ai Arayüz Redesign'ı (Karanlık Tema)
- Tüm uygulama yapısı **Arena.ai**'ın modern "Battle Mode" (side-by-side) düzenine sadık kalınarak yeniden tasarlandı.
- `globals.css` kullanılarak tamamen "Dark Mode" odaklı bir tema sistemi kuruldu (özel CSS değişkenleri eklendi).
- Model sonuçlarını yan yana gösteren kart sistemi temizlendi ve kullanıcı dostu bir "empty state" (ilk yükleme ekranı) eklendi.

### 2. Gelişmiş Sidebar (Sol Menü) Özellikleri
- Uygulamaya navigasyon için fonksiyonel bir **Sidebar** eklendi.
- **Yeni Sohbet Butonu:** Aktif state'i, prompt'u ve oylamaları sıfırlayarak temiz bir sayfa açması sağlandı.
- **Liderlik Tablosu:** Altındaki gereksiz kategoriler temizlendi, sadece **Overview** seçeneği ve kategori yönetimi eklendi.
- **Arama Kutusu:** Tıklanınca açılan dinamik bir sohbet arama input'u entegre edildi.
- **İstatistik Taşıması:** Alt bardaki yatay istatistik barı (VoteBar) kaldırılarak, Sidebar içerisine tıklandığında açılan **"Oylama İstatistikleri"** (yüzdeli bar) yapısı olarak aktarıldı.

### 3. Dinamik Oylama ve Savaş Modu (Battle Mode)
- **Çoklu Model Desteği:** 2 veya 3 model seçimine göre oylama butonlarının ("İkisi de İyi/Kötü" veya "Hepsi İyi/Kötü") isimleri otomatik değişecek şekilde tasarlandı.
- **Kişisel Seçim:** Her modelin altına sadece o modele özel "OpenAI Daha İyi", "Gemini Daha İyi" gibi seçim butonları eklendi.
- **Top Bar:** Üst menüye "Battle Mode", "Yan Yana" ve "Direkt" seçeneklerini içeren açılır bir menü (Dropdown) eklendi.

### 4. Kod ve Yanıt Önizleme Sistemi (Preview Modal)
- Model cevap kartlarına **"👁 Önizle"** butonu eklendi (sadece yanıt geldiğinde aktif olan).
- Önizle butonuna tıklanıldığında ekranı kaplayan, yanıt metnini "monospace" fontla büyük ekranda okumayı kolaylaştıran özel bir **Modal** geliştirildi. Modal içerisine kopyalama kısayolu da entegre edildi.

### 5. Kararlılık ve Altyapı
- **Next.js Sürüm Sabitlemesi:** Webpack/Turbopack çakışmaları ve Windows Türkçe karakter problemini önlemek adına Next.js sürümü stabil versiyonda (`15.3.9`) tutuldu.
- **TypeScript:** Tüm yazılan fonksiyon ve tipler `%100` hatasız hale getirildi.

## 🛠 Kullanılan Teknolojiler
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS & Özel CSS Değişkenleri
- **Icons:** Lucide-React
- **State Management:** Zustand (Model verileri ve oylamaların resetlenmesi)
