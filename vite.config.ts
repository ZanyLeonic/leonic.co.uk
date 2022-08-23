import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import "isomorphic-fetch";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "static",
});
