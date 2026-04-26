/**
 * Design System Scale
 *
 * Central spacing/radius scale using an additive sequence:
 * s-1 + s-2 = s-3, s-2 + s-3 = s-4, etc.
 *
 * All values in rem (base: 1rem = 16px)
 */
/** The scale values in rem */
export declare const SCALE: readonly [0.25, 0.5, 0.75, 1.25, 2, 3.25, 5.25];
/** Valid size indices (1-based) */
export type SizeIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7;
/** Valid radius indices (0-based for r-0) */
export type RadiusIndex = 0 | 1 | 2 | 3 | 4 | 5 | "full";
/** Get size value as rem string */
export declare function getSize(index: SizeIndex): string;
/** Get size value as number (rem) */
export declare function getSizeValue(index: SizeIndex): number;
/** Get radius value as rem string */
export declare function getRadius(index: RadiusIndex): string;
/**
 * Add two size indices (returns next scale value)
 * Uses the additive property: scale[a] + scale[b] ≈ scale[c]
 */
export declare function addSizes(a: SizeIndex, b: SizeIndex): SizeIndex;
/**
 * Subtract size b from size a (returns difference scale value)
 * Clamps to minimum of 1
 */
export declare function subtractSizes(a: SizeIndex, b: SizeIndex): SizeIndex;
/**
 * Clamp a size index to a min/max range
 */
export declare function clampSize(value: SizeIndex, min: SizeIndex, max: SizeIndex): SizeIndex;
/** CSS variable name for spacing */
export declare function spacingVar(index: SizeIndex): string;
/** CSS variable name for radius */
export declare function radiusVar(index: RadiusIndex): string;
//# sourceMappingURL=scale.d.ts.map