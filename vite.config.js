import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import markdownPlugin from "./vite-plugin-markdown.js";
import chapterYamlPlugin from "./vite-plugin-chapter.js";
import typecheckPlugin from "./vite-plugin-typecheck.js";
import dataPlugin from "./vite-plugin-data.js";
import reviewPlugin from "./vite-plugin-review.js";
import kbPlugin from "./vite-plugin-kb.js";
import planPlugin from "./vite-plugin-plan.js";
import outlinePlugin from "./vite-plugin-outline.js";

// the version a reader's comment records (src/lib/version.js): package.json's and the commit built from
function appVersion() {
  const { version } = JSON.parse(readFileSync(new URL("./package.json", import.meta.url), "utf8"));
  try {
    return `${version}+${execSync("git rev-parse --short=8 HEAD", { encoding: "utf8" }).trim()}`;
  } catch {
    return version;
  }
}

export default defineConfig({
  base: "./",
  define: { __APP_VERSION__: JSON.stringify(appVersion()) },
  server: {
    host: "127.0.0.1",
  },
  preview: {
    host: "127.0.0.1",
  },
  plugins: [dataPlugin(), outlinePlugin(), reviewPlugin(), kbPlugin(), planPlugin(),markdownPlugin(), chapterYamlPlugin(), preact(), typecheckPlugin()],
  build: {
    outDir: "docs",
    emptyOutDir: true,
    // the book, the translator page (TRANSLATOR_PLAN.md S8) and the admin's comments page (COMMENTS_PLAN.md C1),
    // each with its own sign-in
    rollupOptions: { input: { main: "index.html", translator: "translator/index.html", comments: "comments/index.html" } },
  },
});
