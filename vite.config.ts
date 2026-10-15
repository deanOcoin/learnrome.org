/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // prose chunks are lazy per era, naming them here would glue them back together
          if (id.includes('generated/prose-')) return;
          if (id.includes('src/data/events') || id.includes('src/data/regions.json')) return 'corpus';
          if (id.includes('node_modules')) return 'vendor';
        },
      },
    },
  },
  test: {
    include: ['src/**/*.test.ts'],
    environment: 'node',
  },
});
