# GitHub Çalışma Rehberi (Tüm Katılımcılar İçin)

Projeye katkıda bulunan tüm geliştiricilerin, kod çakışmalarını (conflict) önlemek ve düzenli bir süreç ilerletmek için aşağıdaki Git akışını uygulaması çok önemlidir.

Lütfen kod üzerinde çalışmaya başlamadan **önce** her zaman güncel kodları kendi bilgisayarınıza çektiğinizden (pull) emin olun.

---

## 🚀 Adım Adım Çalışma Akışı

### 1. Çalışmaya Başlamadan Önce: En Güncel Kodu Çekin
Bir özelliğe veya koda dokunmadan önce mutlaka ana (main) dalın en güncel halini bilgisayarınıza indirin.

```bash
# Hangi branch'te olduğunuzu kontrol edin (main'de olmalısınız)
git branch

# Ana dala (main) geçin (zaten main'deyseniz gerek yok)
git checkout main

# Uzak sunucudaki (GitHub) en güncel değişiklikleri bilgisayarınıza indirin
git pull origin main
```

*(Not: Eğer sizden önce başka bir arkadaşınız GitHub'a kod pushlamışsa, `git pull` yapmadan kendi kodlarınızı pushlamaya çalışırsanız hata alırsınız.)*


### 3. Kodlarınızı Yazın ve Değişiklikleri Git'e Ekleyin
Projeyi IDE'nizde (VS Code vb.) açın, dosyalarınızı düzenleyin ve çalışmanızı tamamlayın. İşiniz bittikten sonra bu değişiklikleri Git'e bildirmemiz gerekir.

```bash
# Değiştirilen veya yeni eklenen TÜM dosyaları takibe alın
git add .
```

### 4. Değişiklikleri İşleyin (Commit)
Yaptığınız işin ne olduğunu anlatan kısa ve açıklayıcı bir mesaj yazın.

```bash
# Örnek: git commit -m "Header tasarımı güncellendi ve butonlar eklendi"
git commit -m "Yaptığınız değişikliğin kısa özeti"
```

### 5. Kodlarınızı GitHub'a Gönderin (Push)
Artık bilgisayarınızdaki hazır kodları GitHub'a göndermenin vakti geldi. 


*Eğer yeni dal açmayıp doğrudan `main` üzerinde çalıştıysanız (Tavsiye edilmez ama gerektiğinde):*
```bash
git push origin main
```

---

## ⚠️ Özet Kural:
**`PULL` YAPMADAN ASLA ÇALIŞMAYA BAŞLAMA!**
1. Ekip arkadaşının yazdığı kodları çek (`git pull origin main`)
2. Kendi işini yap
3. Paketle (`git add .` ve `git commit -m "..."`)
4. Gönder (`git push`)
