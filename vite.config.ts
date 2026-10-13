import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from the domain root (byebuy.online). Hash sections do not need rewrites.
export default defineConfig({
  plugins: [react()],
  base: "/",
});
