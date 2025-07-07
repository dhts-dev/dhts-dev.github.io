import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tagger from "@dhiwise/component-tagger";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tagger()],
  build: {
    outDir: "build",
    rollupOptions: {
      onwarn(warning, defaultHandler) {
        // Ignore unresolved import warnings for i18next
        if (
          warning.code === 'UNRESOLVED_IMPORT' &&
          warning.source &&
          warning.source.includes('i18next')
        ) {
          return;
        }
        // Handle all other warnings normally
        defaultHandler(warning);
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@components': path.resolve('./src/components'),
      '@pages': path.resolve('./src/pages'),
      '@assets': path.resolve('./src/assets'),
      '@constants': path.resolve('./src/constants'),
      '@styles': path.resolve('./src/styles'),
    },
  },
  server: {
    port: "4028",
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: ['.amazonaws.com', '.builtwithrocket.new']
  }
});