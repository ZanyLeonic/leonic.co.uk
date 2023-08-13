import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.md'],
  plugins: [react()],
  publicDir: "static",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
});
