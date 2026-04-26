import { pathToFileURL } from "node:url";
import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";

const packageRoot = path.resolve(import.meta.dirname, "..");
const distDir = path.join(packageRoot, "dist");
const indexJs = path.join(distDir, "index.js");
const indexDts = path.join(distDir, "index.d.ts");
const packageJsonPath = path.join(packageRoot, "package.json");
const licensePath = path.join(packageRoot, "LICENSE");
const noticesPath = path.join(packageRoot, "THIRD_PARTY_NOTICES.md");

async function assertExists(filePath) {
  await access(filePath, constants.F_OK);
}

await assertExists(indexJs);
await assertExists(indexDts);
await assertExists(licensePath);
await assertExists(noticesPath);

const builtSource = await readFile(indexJs, "utf8");
const packageJson = JSON.parse(await readFile(packageJsonPath, "utf8"));
const expectedExports = {
  ".": {
    types: "./dist/index.d.ts",
    import: "./dist/index.js",
  },
  "./shadcn": {
    types: "./dist/shadcn/index.d.ts",
    import: "./dist/shadcn/index.js",
  },
};

if (builtSource.trim().length === 0) {
  throw new Error("Expected dist/index.js to be non-empty.");
}

if (!/\bexport\b/m.test(builtSource)) {
  throw new Error("Expected dist/index.js to contain ESM exports.");
}

if (/from\s+["'](?:\.\.\/src|\.\/src)/.test(builtSource) || /["'](?:\.\.\/src|\.\/src)\//.test(builtSource)) {
  throw new Error("dist/index.js still references local source files.");
}

if (packageJson.license !== "MIT") {
  throw new Error('Expected package.json to declare license "MIT".');
}

if (
  packageJson.exports?.["."]?.types !== expectedExports["."].types ||
  packageJson.exports?.["."]?.import !== expectedExports["."].import ||
  packageJson.exports?.["./shadcn"]?.types !== expectedExports["./shadcn"].types ||
  packageJson.exports?.["./shadcn"]?.import !== expectedExports["./shadcn"].import ||
  Object.keys(packageJson.exports ?? {}).length !== Object.keys(expectedExports).length
) {
  throw new Error("Expected package.json exports to match the npm/CDN entrypoint contract.");
}

const entryModule = await import(pathToFileURL(indexJs).href);

if (typeof entryModule.Button !== "function") {
  throw new Error("Expected Button export to be available from the CDN entrypoint.");
}

console.log("CDN smoke test passed.");
