import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Dev and preview both run on port 3005. Vite's `appType: 'spa'` (the default)
// provides the history-API fallback (deep links serve index.html).
export default defineConfig({
  plugins: [vue()],
  appType: 'spa',
  server: { port: 3005, strictPort: true },
  preview: { port: 3005, strictPort: true },
})
