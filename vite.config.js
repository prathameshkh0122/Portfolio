import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio/', // matches GitHub repo name exactly (case-sensitive)
  plugins: [react(), tailwindcss()],
})
