import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This is the critical change. By default, Vite uses absolute paths (e.g., '/assets/index.js').
  // When hosting on Google Cloud Storage, the site is effectively in a subdirectory,
  // which breaks absolute paths. Setting `base` to './' tells Vite to use relative paths
  // (e.g., 'assets/index.js'), which will work correctly.
  base: './',
});
