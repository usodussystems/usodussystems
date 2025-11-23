import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
    // Enable minification for production
    minify: 'terser',
    // Generate source maps for debugging
    sourcemap: false,
  },
  // Security: Prevent loading modules from parent directories
  server: {
    fs: {
      strict: true,
    },
  },
});
