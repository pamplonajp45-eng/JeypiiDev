import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  // Use "/" for Vercel, "/JeypiiDev/" for GitHub Pages
  base: process.env.VERCEL ? "/" : "/JeypiiDev/",
});
