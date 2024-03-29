import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import basicSsl from '@vitejs/plugin-basic-ssl'

// import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  root: __dirname,
  host: '0.0.0.0',
  plugins: [vue(), basicSsl()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 8080,
    https: true,
    open: true,
  },
  base: "",
})
