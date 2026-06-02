/**
 * Loomina — Merkezi LLM Inference Parametreleri
 *
 * Tüm OpenRouter API çağrılarında kullanılan inference ayarları burada tanımlanır.
 * Makale "Deneysel Kurulum" bölümü bu dosyayı referans alır.
 *
 * Makale için raporlanabilir değerler:
 *   - Kod üretimi: temperature=0.7, top_p=0.95, max_tokens=4096
 *   - Değerlendirme (J1/J2): temperature=0.1, top_p=0.95, max_tokens=2048
 *   - Tahkimci (J3): temperature=0.1, top_p=0.95, max_tokens=3000
 *
 * seed parametresi eklenmedi: OpenRouter tüm modellerde seed'i desteklemiyor.
 * Deterministik değerlendirme için düşük temperature (0.1) yeterli.
 */

/** Kod üretimi parametreleri — yaratıcı fakat tutarlı çıktı. */
export const GENERATION_PARAMS = {
  temperature: 0.7,
  top_p: 0.95,
  max_tokens: 4096,
} as const;

/** Hakem değerlendirmesi parametreleri — deterministik, tekrarlanabilir skor. */
export const EVALUATION_PARAMS = {
  temperature: 0.1,
  top_p: 0.95,
  max_tokens: 2048,
} as const;

/** Tahkimci parametreleri — 5 metrik + uzun reasoning için daha yüksek max_tokens. */
export const ARBITRATION_PARAMS = {
  temperature: 0.1,
  top_p: 0.95,
  max_tokens: 3000,
} as const;
