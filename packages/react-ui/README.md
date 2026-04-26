# @dotnaos/react-ui

Web React components for DotNaos, built on top of the shared `@dotnaos/design-system` package.

## Install

```bash
pnpm add @dotnaos/react-ui
```

Import the shared CSS before rendering the components:

```ts
import "@dotnaos/design-system/tokens.css";
import "@dotnaos/design-system/theme.css";
import "@dotnaos/design-system/styles.css";
```

## Import

```ts
import { Button, Card, ThemeProvider } from "@dotnaos/react-ui";
```

## CDN usage

Use the public npm package through npm-compatible CDNs:

```ts
import { Button } from "https://esm.sh/@dotnaos/react-ui@VERSION";
import { Button } from "https://cdn.jsdelivr.net/npm/@dotnaos/react-ui@VERSION/+esm";
import { Button } from "https://unpkg.com/@dotnaos/react-ui@VERSION/dist/index.js";
```

The unpkg entrypoint serves the built ESM file directly. Because `react`, `react-dom`, and `react/jsx-runtime` remain peer/runtime imports, esm.sh and jsDelivr `+esm` provide the smoothest browser CDN experience.

## Build

```bash
pnpm --filter @dotnaos/react-ui build
```

## Licensing

This package is published under the MIT license and includes `LICENSE` and `THIRD_PARTY_NOTICES.md` in the npm tarball.

Only open-source shadcn/ui patterns and open-source HeroUI packages are used. No HeroUI Pro code, templates, assets, or components are included.
