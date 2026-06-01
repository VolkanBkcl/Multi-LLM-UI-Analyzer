# Performance (Performans) Rubriği
Kaynak: ISO/IEC 25010 §4.3 (Performance Efficiency), React Docs Performance Guidelines, Web Vitals (Google)

## Tanım
Kodun tarayıcıda gereksiz hesaplama, bellek sızıntısı ve render döngüsü tıkanmaları olmaksızın
verimli çalışması. Değerlendirme statik kod analizi düzeyinde yapılır; bilinen anti-pattern'lerin
varlığı esas alınır.

## Değerlendirme Boyutları ve Kontrol Listesi

### 1. Render Optimizasyonu (React'e Özgü)
- `useEffect` içinde eksik veya hatalı dependency array var mı? (sonsuz döngü / stale closure riski)
- Render döngüsü içinde pahalı hesaplama yapılıyor mu? (`useMemo` ile sarılmalı)
- Her render'da yeniden oluşturulan callback'ler `useCallback` ile memoize edilmiş mi?
- Parent state değişiminde gereksiz re-render olan child bileşenler `React.memo` ile korunmuş mu?
- `key` prop olarak `index` kullanılıyor mu? (liste sırası değişebiliyorsa ihlal)
- Render'da `new Date()`, `Math.random()` veya inline nesne/dizi literal oluşturuluyor mu?

### 2. Asenkron İşlem ve Veri Akışı
- API çağrıları render fonksiyonu içinde doğrudan tetikleniyor mu? (`useEffect` ile izole edilmeli)
- Kullanıcı input'una bağlı API çağrıları debounce/throttle ile sınırlandırılmış mı?
- Promise'ler hata durumunda reject'i yakalıyor mu? (unhandled promise rejection)
- Bileşen unmount olursa async çağrılar temizleniyor mu? (AbortController veya isMounted flag)

### 3. DOM ve Bellek Yönetimi
- Event listener'lar cleanup'ta kaldırılıyor mu? (bellek sızıntısı)
- setInterval / setTimeout için clearInterval / clearTimeout cleanup'ta çağrılıyor mu?
- Büyük veri setleri için virtualization veya pagination düşünülmüş mü?
- Ağır bileşenler için `React.lazy` + `Suspense` kullanılmış mı?

### 4. Algoritmik Verimlilik
- İç içe döngüler (O(n²)) gereksiz yere kullanılmış mı?
- Büyük listeler üzerinde her render'da filter/map/reduce zinciri çalışıyor mu? (memoize edilmeli)
- Global state aşırı ve gereksiz yere kullanılmış mı?

## Puanlama Kılavuzu (0–100)
- 90–100: Hiç anti-pattern yok. Memoization gerektiği yerde uygulanmış, cleanup eksiksiz, asenkron işlemler izole.
- 75–89: 1 minör anti-pattern var (ör. gereksiz tek bir `useCallback`) ancak kritik sorun yok.
- 55–74: 2–3 belirgin sorun: eksik dependency array, memoize edilmemiş hesaplama veya cleanup eksikliği.
- 35–54: Birden fazla kritik anti-pattern: sonsuz döngü riski, bellek sızıntısı potansiyeli.
- 15–34: Kodu yavaşlatacak veya çökertecek ciddi sorunlar var; temel performans prensipleri göz ardı edilmiş.
- 0–14: Sonsuz render döngüsü, bloke eden senkron işlemler veya büyük ölçekte bellek sızıntısı riski.

## Hakem Notları
- Prompt'ta React belirtilmemişse React'e özgü kontroller uygulanmaz; yalnızca algoritmik verimlilik değerlendirilir.
- Basit bileşenlerde memoization yokluğu ihlal değildir — gereksiz optimizasyon da anti-pattern sayılır.
- Kanıta dayalı statik analiz yap; kodu gerçekte çalıştırmıyorsun.
