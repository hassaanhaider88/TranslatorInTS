import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["translate.svg"],
      manifest: {
        name: "HMK Translate",
        short_name: "HMKTranslate",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#3750ff",
      },
    }),
  ],
});
