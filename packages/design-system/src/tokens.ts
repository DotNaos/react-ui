import { SCALE } from "./scale";

const spacing = {
  1: SCALE[0] * 16,
  2: SCALE[1] * 16,
  3: SCALE[2] * 16,
  4: SCALE[3] * 16,
  5: SCALE[4] * 16,
  6: SCALE[5] * 16,
  7: SCALE[6] * 16,
} as const;

const radii = {
  0: 0,
  1: SCALE[0] * 16,
  2: SCALE[1] * 16,
  3: SCALE[2] * 16,
  4: SCALE[3] * 16,
  5: SCALE[4] * 16,
  full: 9999,
} as const;

const colors = {
  background: "#000000",
  surface: "#141414",
  surfaceMuted: "#0a0a0a",
  border: "#2a2a2a",
  text: "#fafafa",
  textMuted: "#666666",
  accent: "#3b82f6",
  accentHover: "#2563eb",
  danger: "#ef4444",
  warning: "#f59e0b",
  success: "#22c55e",
} as const;

const typography = {
  fontSans: "Inter, ui-sans-serif, system-ui, sans-serif",
  fontMono: "JetBrains Mono, ui-monospace, monospace",
  textS: 12,
  textM: 14,
  textL: 16,
  leadingTight: 1.25,
  leadingNormal: 1.5,
} as const;

export const designTokens = {
  spacing,
  radii,
  colors,
  typography,
} as const;

export { colors, radii, spacing, typography };
