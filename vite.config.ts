import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // ixtiyoriy: qisqa yo‘llar uchun alias
    },
  },
  server: {
    port: 5173, // kerak bo‘lsa portni o‘zgartiring
  },
});

