import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://matratzen24-lintfort.de",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
});
