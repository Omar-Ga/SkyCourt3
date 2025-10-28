import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  optimizeDeps: {
    include: [
      'lucide-react',
      'framer-motion',
      'react-router-dom',
      'i18next',
      'react-i18next',
      'i18next-browser-languagedetector',
      '@studio-freight/lenis',
      'react-intersection-observer',
      '@use-gesture/react',
      'react-virtuoso',
      'tailwind-merge',
      'clsx',
    ],
  },
  server: {
    host: '0.0.0.0', // Use 0.0.0.0 to listen on all interfaces
    cors: {
      origin: 'https://crown-pipe-waters-specially.trycloudflare.com',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
    },
  },
});