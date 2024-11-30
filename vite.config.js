import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@google/generative-ai": "/node_modules/@google/generative-ai", // absolute path to node_modules
    },
  },
});
