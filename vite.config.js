import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/url-shortening-app/',
  plugins: [react()],
});

process.env.BROWSER = "chromium";