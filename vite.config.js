import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    // Explicitly disable parent postcss/tailwind auto-discovery to guarantee pure clean custom CSS
    postcss: false,
  },
})
