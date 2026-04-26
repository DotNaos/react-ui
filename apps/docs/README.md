# docs

Storybook-based docs app for the DotNaos monorepo.

## Contents

- stories for `@dotnaos/react-ui`
- design-system CSS usage examples

## Import

The docs app is internal and consumes `@dotnaos/react-ui` and `@dotnaos/design-system` through the workspace.

## Build

```bash
pnpm --filter @dotnaos/docs build
```

## CDN usage

The docs app itself is not a CDN package.
