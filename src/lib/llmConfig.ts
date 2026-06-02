/**
 * Loomina — Merkezi LLM Inference Parametreleri
 *
 * Tüm OpenRouter API çağrılarında kullanılan inference ayarları burada tanımlanır.
 * Makale "Deneysel Kurulum" bölümü bu dosyayı referans alır.
 *
 * Makale için raporlanabilir değerler:
 *   - Kod üretimi: temperature=0.7, top_p=0.95, max_tokens=8192
 *   - Değerlendirme (J1/J2): temperature=0.1, top_p=0.95, max_tokens=8000
 *   - Tahkimci (J3): temperature=0.1, top_p=0.95, max_tokens=8000
 *
 * NOT: Hakem modeller (ör. deepseek-v4-pro) reasoning (akıl yürüten) modellerdir; token
 * bütçesinin bir kısmını reasoning'e harcarlar. max_tokens çok düşük olursa JSON çıktısı
 * yarıda kesilir ("Unterminated string") veya content tamamen boş kalır. Bu nedenle
 * değerlendirme/tahkim için yüksek max_tokens gereklidir.
 *
 * seed parametresi eklenmedi: OpenRouter tüm modellerde seed'i desteklemiyor.
 * Deterministik değerlendirme için düşük temperature (0.1) yeterli.
 */

/** Kod üretimi parametreleri — yaratıcı fakat tutarlı çıktı. */
export const GENERATION_PARAMS = {
  temperature: 0.7,
  top_p: 0.95,
  max_tokens: 8192,
} as const;

/** Hakem değerlendirmesi parametreleri — deterministik skor; reasoning için yüksek max_tokens. */
export const EVALUATION_PARAMS = {
  temperature: 0.1,
  top_p: 0.95,
  max_tokens: 8000,
} as const;

/** Tahkimci parametreleri — 5 metrik + reasoning için yüksek max_tokens. */
export const ARBITRATION_PARAMS = {
  temperature: 0.1,
  top_p: 0.95,
  max_tokens: 8000,
} as const;
