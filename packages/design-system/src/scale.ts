/**
 * Design System Scale
 *
 * Central spacing/radius scale using an additive sequence:
 * s-1 + s-2 = s-3, s-2 + s-3 = s-4, etc.
 *
 * All values in rem (base: 1rem = 16px)
 */

/** The scale values in rem */
export const SCALE = [0.25, 0.5, 0.75, 1.25, 2, 3.25, 5.25] as const;

/** Valid size indices (1-based) */
export type SizeIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7;

/** Valid radius indices (0-based for r-0) */
export type RadiusIndex = 0 | 1 | 2 | 3 | 4 | 5 | "full";

/** Get size value as rem string */
export function getSize(index: SizeIndex): string {
  return `${SCALE[index - 1]}rem`;
}

/** Get size value as number (rem) */
export function getSizeValue(index: SizeIndex): number {
  return SCALE[index - 1];
}

/** Get radius value as rem string */
export function getRadius(index: RadiusIndex): string {
  if (index === "full") return "9999px";
  if (index === 0) return "0";
  return `${SCALE[index - 1]}rem`;
}

/**
 * Find the closest scale index for a given value
 */
function findClosestIndex(value: number): SizeIndex {
  let closest = 0;
  let minDiff = Infinity;

  for (let i = 0; i < SCALE.length; i++) {
    const diff = Math.abs(SCALE[i] - value);
    if (diff < minDiff) {
      minDiff = diff;
      closest = i;
    }
  }

  return (closest + 1) as SizeIndex;
}

/**
 * Add two size indices (returns next scale value)
 * Uses the additive property: scale[a] + scale[b] ≈ scale[c]
 */
export function addSizes(a: SizeIndex, b: SizeIndex): SizeIndex {
  const sum = SCALE[a - 1] + SCALE[b - 1];
  return findClosestIndex(sum);
}

/**
 * Subtract size b from size a (returns difference scale value)
 * Clamps to minimum of 1
 */
export function subtractSizes(a: SizeIndex, b: SizeIndex): SizeIndex {
  const diff = SCALE[a - 1] - SCALE[b - 1];
  if (diff <= 0) return 1;
  return findClosestIndex(diff);
}

/**
 * Clamp a size index to a min/max range
 */
export function clampSize(value: SizeIndex, min: SizeIndex, max: SizeIndex): SizeIndex {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

/** CSS variable name for spacing */
export function spacingVar(index: SizeIndex): string {
  return `var(--s-${index})`;
}

/** CSS variable name for radius */
export function radiusVar(index: RadiusIndex): string {
  return `var(--r-${index})`;
}
