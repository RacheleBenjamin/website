import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Repo deployed to https://RacheleBenjamin.github.io/case-study-presentation/
export default defineConfig({
  base: '/case-study-presentation/',
  plugins: [react()],
})
