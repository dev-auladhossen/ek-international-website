import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  plugins: [vue(), tailwindcss()],
  ssgOptions: {
    dirStyle: 'nested',
    includedRoutes(paths) {
      return paths.filter((path) => !path.includes(':') && !path.includes('*'))
    },
  },
})