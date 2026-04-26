import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(rootDir, "src/index.ts"),
        shadcn: resolve(rootDir, "src/shadcn/index.ts"),
      },
      formats: ["es"],
      fileName: (_format, entryName) =>
        entryName === "index" ? "index.js" : `${entryName}/index.js`,
    },
    minify: false,
    rollupOptions: {
      external: [/^react(\/.*)?$/, /^react-dom(\/.*)?$/],
      output: {
        banner: "/* @dotnaos/react-ui */",
        entryFileNames: (chunkInfo) =>
          chunkInfo.name === "index" ? "index.js" : `${chunkInfo.name}/index.js`,
        chunkFileNames: "chunks/[name]-[hash].js",
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
});
