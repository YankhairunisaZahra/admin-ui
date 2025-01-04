import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      "@components": path.resolve(new URL('./src/components', import.meta.url).pathname),
      "@data": path.resolve(new URL('./src/data', import.meta.url).pathname),
    },
  },
});
