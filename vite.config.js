import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: '/Users/alanboulesteix/Project/ThreeJs/src/main.ts'
    }
  }
});