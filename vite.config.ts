
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-typed', 'framer-motion', 'lucide-react']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          ui: ['lucide-react', 'react-hot-toast'],
          typing: ['react-typed']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
