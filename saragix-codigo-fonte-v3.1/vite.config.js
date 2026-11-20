import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    watch: {
      ignored: ['**/*.zip', '**/dist/**', '**/dist-public/**'],
    },
    proxy: {
      '/api/lichess-explorer': {
        target: 'https://explorer.lichess.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/lichess-explorer/, ''),
      },
    },
  },
  build: {
    assetsDir: '',
  },
})
