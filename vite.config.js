import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Repo deployed to https://RacheleBenjamin.github.io/website/
export default defineConfig({
  base: '/website/',
  plugins: [react()],
})
