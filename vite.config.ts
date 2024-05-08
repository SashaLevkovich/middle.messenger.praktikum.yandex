import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
    outDir: resolve(__dirname, 'dist'),
  },
  assetsInclude: ['public/**'],
  publicDir: 'public',
  server: {
    port: 3000,
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  resolve: {},
  plugins: [],
})
