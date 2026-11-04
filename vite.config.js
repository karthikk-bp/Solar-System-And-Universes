import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // Relative base './' ensures that assets resolve correctly on GitHub Pages
  // at https://karthikk-bp.github.io/Solar-System-And-Universes/
  // as well as local dev, preview, or custom domains.
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
  server: {
    port: 5173,
    open: false,
  },
  preview: {
    port: 4173,
  },
});
