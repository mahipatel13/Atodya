import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // IMPORTANT for deployment
  base: "/",  

  server: {
    port: 5173,
    open: true
  },

  build: {
    outDir: "dist",     // ensure output folder
    sourcemap: false
  }
})