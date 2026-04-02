import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-ignore
import sri from 'vite-plugin-sri'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sri()],
  server: {
    headers: {
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    }
  },
  preview: {
    headers: {
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    }
  }
})
