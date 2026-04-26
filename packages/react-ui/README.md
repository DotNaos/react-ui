# @dotnaos/react-ui

Web React components for DotNaos, built on top of the shared `@dotnaos/design-system` package.

## Contents

- layout and typography primitives
- wrapped web UI components
- shell and theme helpers for web apps

## Import

```ts
import { Button, Card, ThemeProvider } from "@dotnaos/react-ui";
```

Import the design-system CSS in your app before rendering the components.

```ts
import "@dotnaos/design-system/tokens.css";
import "@dotnaos/design-system/theme.css";
import "@dotnaos/design-system/styles.css";
```

## Build

```bash
pnpm --filter @dotnaos/react-ui build
```

## CDN usage

The browser entrypoint is `packages/react-ui/dist/index.js` in the tagged repository, for example:

```ts
import { Button } from "https://cdn.jsdelivr.net/gh/DotNaos/react-ui@vX.Y.Z/packages/react-ui/dist/index.js";
```

If you load the bundle directly in the browser, provide React through an import map:

```html
<script type="importmap">
{
  "imports": {
    "react": "https://esm.sh/react@19.2.0",
    "react-dom": "https://esm.sh/react-dom@19.2.0",
    "react-dom/client": "https://esm.sh/react-dom@19.2.0/client",
    "react/jsx-runtime": "https://esm.sh/react@19.2.0/jsx-runtime"
  }
}
</script>
```
