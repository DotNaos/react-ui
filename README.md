# DotNaos UI Monorepo

This repository is a pnpm workspace managed with Turborepo and publishes the following scoped packages publicly to npm:

- `@dotnaos/design-system`
- `@dotnaos/react-ui`
- `@dotnaos/react-native-ui`

## Structure

```text
packages/
  design-system/
  react-ui/
  react-native-ui/
apps/
  docs/
```

## Commands

```bash
pnpm install
pnpm typecheck
pnpm build
pnpm test:cdn
pnpm pack:dry-run
```

## Public npm usage

```bash
pnpm add @dotnaos/react-ui
```

Import the shared CSS before rendering the web components:

```ts
import "@dotnaos/design-system/tokens.css";
import "@dotnaos/design-system/theme.css";
import "@dotnaos/design-system/styles.css";
```

## CDN usage

Recommended public npm CDN entrypoints for the web package:

```ts
import { Button } from "https://esm.sh/@dotnaos/react-ui@VERSION";
import { Button } from "https://cdn.jsdelivr.net/npm/@dotnaos/react-ui@VERSION/+esm";
import { Button } from "https://unpkg.com/@dotnaos/react-ui@VERSION/dist/index.js";
```

The unpkg entrypoint exposes the built ESM file directly. Because the package keeps `react` and `react-dom` as peer dependencies, browser-first CDN usage should prefer esm.sh or jsDelivr `+esm`, which resolve bare React imports automatically.

## Publishing

Release publishing targets the public npm registry. The repository maintainer must configure an npm publish token as a GitHub Actions secret named `NPM_TOKEN`. The publish workflow uses it only as `NODE_AUTH_TOKEN`. PR validation does not require this secret and does not publish packages.

The `@dotnaos` npm scope must already exist and the publishing account must have access to it. If the scope is unavailable, keep the package names unchanged and grant or request access before publishing.

## Licensing and notices

All published packages declare `"license": "MIT"` and include `LICENSE`, `THIRD_PARTY_NOTICES.md`, `README.md`, and `dist/**` in the npm tarball.

Only open-source shadcn/ui patterns and open-source HeroUI packages are used in this repository. No HeroUI Pro code, templates, assets, or components are included.
