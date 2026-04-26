# @dotnaos/design-system

Shared design tokens, CSS assets, and low-level utilities used by the DotNaos UI packages.

## Install

```bash
pnpm add @dotnaos/design-system
```

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

## Licensing

This package is published under the MIT license and includes `LICENSE` and `THIRD_PARTY_NOTICES.md` in the npm tarball.

The published output only uses open-source HeroUI packages. No HeroUI Pro code, templates, assets, or components are included.
