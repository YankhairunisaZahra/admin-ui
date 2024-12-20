import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  resolve: {
    alias: {
      "@components": "/src/components",
    },
  },
});
