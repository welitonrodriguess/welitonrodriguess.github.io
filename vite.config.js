import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying to a GitHub project page, set VITE_BASE to '/<repo-name>/'
// e.g., VITE_BASE=/portfolio
const base = process.env.VITE_BASE || '/'

export default defineConfig({
  base,
  plugins: [react()],
})
