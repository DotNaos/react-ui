import { pathToFileURL } from "node:url";
import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";

const packageRoot = path.resolve(import.meta.dirname, "..");
const distDir = path.join(packageRoot, "dist");
const indexJs = path.join(distDir, "index.js");
const indexDts = path.join(distDir, "index.d.ts");

async function assertExists(filePath) {
  await access(filePath, constants.F_OK);
}

await assertExists(indexJs);
await assertExists(indexDts);

const builtSource = await readFile(indexJs, "utf8");

if (builtSource.trim().length === 0) {
  throw new Error("Expected dist/index.js to be non-empty.");
}

if (!/\bexport\b/m.test(builtSource)) {
  throw new Error("Expected dist/index.js to contain ESM exports.");
}

if (/from\s+["'](?:\.\.\/src|\.\/src)/.test(builtSource) || /["'](?:\.\.\/src|\.\/src)\//.test(builtSource)) {
  throw new Error("dist/index.js still references local source files.");
}

const entryModule = await import(pathToFileURL(indexJs).href);

if (typeof entryModule.Button !== "function") {
  throw new Error("Expected Button export to be available from the CDN entrypoint.");
}

console.log("CDN smoke test passed.");
