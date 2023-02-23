import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        secure: false,
      },
    },
  },
  plugins: [react()],

  test:{
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  }
});
