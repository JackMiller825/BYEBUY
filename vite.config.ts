import { copyFileSync, existsSync } from "node:fs";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin, type ViteDevServer } from "vite";

function pagesFallback(): Plugin {
  return {
    name: "pages-fallback",
    apply: "build",
    closeBundle() {
      const index = "dist/index.html";
      if (existsSync(index)) copyFileSync(index, "dist/404.html");
    },
  };
}

function dashboardApi(): Plugin {
  return {
    name: "byebuy-dashboard-api",
    async configureServer(server) {
      try {
        const loaded = (await server.ssrLoadModule("/server/attach.ts")) as {
          attachApi: (target: ViteDevServer) => Promise<void>;
        };
        await loaded.attachApi(server);
      } catch (error) {
        const message = error instanceof Error ? error.message : "unknown error";
        console.error(
          `Dashboard API did not start. The public site is still available. ${message}`,
        );
      }
    },
  };
}

// Served from the domain root (byebuy.online). /dashboard is the private visitor view.
export default defineConfig({
  plugins: [react(), dashboardApi(), pagesFallback()],
  base: "/",
});
