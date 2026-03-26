import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
    server: {
    host: true, // listen on all interfaces
    port: 5173
    },
});
