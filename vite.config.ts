import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuração do Vite. Os dados do site (incluindo os de SEO local) ficam em
// src/config/site.ts e são lidos apenas pela aplicação, não por este arquivo.
export default defineConfig({
  plugins: [react()],
});
