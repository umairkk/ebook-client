import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative base so the site works both locally and when served from a
  // project sub-path (e.g. GitHub Pages: https://<user>.github.io/<repo>/).
  base: './',
  plugins: [react()],
})
