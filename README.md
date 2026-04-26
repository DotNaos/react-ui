# DotNaos UI Monorepo

This repository is a pnpm workspace managed with Turborepo.

## Structure

```text
packages/
  design-system/
  react-ui/
  react-native-ui/
apps/
  docs/
```

## Package overview

- `@dotnaos/design-system`: shared tokens, theme CSS, and low-level utilities
- `@dotnaos/react-ui`: web React components and shell primitives
- `@dotnaos/react-native-ui`: minimal React Native equivalents for core primitives
- `apps/docs`: Storybook docs app for the web package

## Commands

```bash
pnpm install
pnpm typecheck
pnpm build
pnpm test:cdn
```

## GitHub Packages publishing

Each package is publishable independently to GitHub Packages with `publishConfig.registry` set to `https://npm.pkg.github.com`.

## CDN usage

The web bundle is committed at `packages/react-ui/dist/index.js` so tagged releases can be loaded through jsDelivr:

```ts
import { Button } from "https://cdn.jsdelivr.net/gh/DotNaos/react-ui@vX.Y.Z/packages/react-ui/dist/index.js";
```

Import the design-system CSS separately before using the components.

## Turborepo

Root orchestration goes through Turbo:

- `pnpm build` → `turbo build`
- `pnpm typecheck` → `turbo typecheck`
- `pnpm clean` → `turbo clean`
