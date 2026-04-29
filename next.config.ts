import type { NextConfig } from "next";

// Node.js v25+ ortamlarında global.localStorage bir Proxy olarak gelir ve metod atamalarını engeller.
// Next.js (react-dev-overlay) typeof localStorage !== 'undefined' kontrolü yaptığı için,
// SSR sırasında localStorage.getItem çağrıldığında 500 hatasına neden oluyor.
// Bunu aşmak için global değişkeni tamamen eziyoruz:
if (typeof globalThis.localStorage !== 'undefined' && typeof globalThis.localStorage.getItem !== 'function') {
  Object.defineProperty(globalThis, 'localStorage', {
    value: {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {}
    },
    writable: true,
    configurable: true
  });
}

const nextConfig: NextConfig = {};

export default nextConfig;
