import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'; 
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),  dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'SoyAdminUI',
      formats: ['es', 'cjs'],
      fileName: (format) => `soy-sample-ui.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // ✅ 꼭 필요!!
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    cssCodeSplit: true, // SCSS 파일 분리
  }, 
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/_global.scss" as *; `
      }
    }
  }
})
