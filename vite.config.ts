import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import "isomorphic-fetch"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), legacy({
    targets: ['defaults', 'ie 11']
  })],
  publicDir: "static",
  
})
