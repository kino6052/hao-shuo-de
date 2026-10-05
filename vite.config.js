import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import markdownPlugin from "./vite-plugin-markdown.js";
import chapterYamlPlugin from "./vite-plugin-chapter.js";
import typecheckPlugin from "./vite-plugin-typecheck.js";
import dataPlugin from "./vite-plugin-data.js";
import reviewPlugin from "./vite-plugin-review.js";

export default defineConfig({
  base: "./",
  server: {
    host: "127.0.0.1",
  },
  preview: {
    host: "127.0.0.1",
  },
  plugins: [dataPlugin(), reviewPlugin(), markdownPlugin(), chapterYamlPlugin(), preact(), typecheckPlugin()],
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});
