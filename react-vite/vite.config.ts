import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dev and preview both run on port 3003. Vite's default `appType: 'spa'`
// provides the history-API fallback (deep links serve index.html).
export default defineConfig({
  plugins: [react()],
  appType: 'spa',
  server: { port: 3003, strictPort: true },
  preview: { port: 3003, strictPort: true },
})
