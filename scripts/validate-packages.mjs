import { execFileSync } from "node:child_process";
import path from "node:path";

const repoRoot = path.resolve(import.meta.dirname, "..");

const packages = [
  {
    name: "@dotnaos/design-system",
    dir: path.join(repoRoot, "packages", "design-system"),
    requiredPaths: [
      "package.json",
      "README.md",
      "LICENSE",
      "THIRD_PARTY_NOTICES.md",
      "dist/index.js",
      "dist/index.d.ts",
      "dist/tokens.css",
      "dist/theme.css",
      "dist/styles.css",
    ],
  },
  {
    name: "@dotnaos/react-ui",
    dir: path.join(repoRoot, "packages", "react-ui"),
    requiredPaths: [
      "package.json",
      "README.md",
      "LICENSE",
      "THIRD_PARTY_NOTICES.md",
      "dist/index.js",
      "dist/index.d.ts",
      "dist/shadcn/index.js",
      "dist/shadcn/index.d.ts",
    ],
  },
  {
    name: "@dotnaos/react-native-ui",
    dir: path.join(repoRoot, "packages", "react-native-ui"),
    requiredPaths: [
      "package.json",
      "README.md",
      "LICENSE",
      "THIRD_PARTY_NOTICES.md",
      "dist/index.js",
      "dist/index.d.ts",
    ],
  },
];

const forbiddenPrefixes = ["src/", "node_modules/", ".git/", ".github/", "apps/"];
const forbiddenExact = [".env"];
const forbiddenSuffixes = [".log"];

for (const pkg of packages) {
  const raw = execFileSync("npm", ["pack", "--dry-run", "--json"], {
    cwd: pkg.dir,
    encoding: "utf8",
  });
  const [packInfo] = JSON.parse(raw);
  const packedPaths = new Set(packInfo.files.map((file) => file.path));

  for (const requiredPath of pkg.requiredPaths) {
    if (!packedPaths.has(requiredPath)) {
      throw new Error(`${pkg.name} tarball is missing required file: ${requiredPath}`);
    }
  }

  if (![...packedPaths].some((filePath) => filePath.startsWith("dist/"))) {
    throw new Error(`${pkg.name} tarball is missing built dist output.`);
  }

  for (const filePath of packedPaths) {
    if (forbiddenPrefixes.some((prefix) => filePath.startsWith(prefix))) {
      throw new Error(`${pkg.name} tarball should not include ${filePath}`);
    }
    if (forbiddenExact.includes(filePath)) {
      throw new Error(`${pkg.name} tarball should not include ${filePath}`);
    }
    if (forbiddenSuffixes.some((suffix) => filePath.endsWith(suffix))) {
      throw new Error(`${pkg.name} tarball should not include ${filePath}`);
    }
    if (/^\.env\./.test(filePath)) {
      throw new Error(`${pkg.name} tarball should not include ${filePath}`);
    }
  }

  console.log(`Validated ${pkg.name} tarball contents (${packInfo.entryCount} entries).`);
}
