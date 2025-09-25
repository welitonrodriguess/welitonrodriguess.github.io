import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Troque 'seurepo' pelo nome do seu repositório GitHub
export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/welitonrodriguess/welitonrodriguess.github.io.git'
})
