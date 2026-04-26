# @dotnaos/design-system

Shared design tokens, CSS assets, and low-level utilities used by the DotNaos UI packages.

## Contents

- CSS token files for colors, spacing, typography, and theme utilities
- JavaScript token exports for cross-platform consumers
- Shared helpers like the scale utilities and `cn`

## Import

```ts
import { designTokens, getSize } from "@dotnaos/design-system";
```

```css
@import "@dotnaos/design-system/tokens.css";
@import "@dotnaos/design-system/theme.css";
@import "@dotnaos/design-system/styles.css";
```

## Build

```bash
pnpm --filter @dotnaos/design-system build
```

## CDN usage

CSS files can be served from the repository tag or package tarball. This package does not ship a browser JS CDN entrypoint.
