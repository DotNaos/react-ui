/**
 * Design System Scale
 *
 * Central spacing/radius scale using an additive sequence:
 * s-1 + s-2 = s-3, s-2 + s-3 = s-4, etc.
 *
 * All values in rem (base: 1rem = 16px)
 */
/** The scale values in rem */
export const SCALE = [0.25, 0.5, 0.75, 1.25, 2, 3.25, 5.25];
/** Get size value as rem string */
export function getSize(index) {
    return `${SCALE[index - 1]}rem`;
}
/** Get size value as number (rem) */
export function getSizeValue(index) {
    return SCALE[index - 1];
}
/** Get radius value as rem string */
export function getRadius(index) {
    if (index === "full")
        return "9999px";
    if (index === 0)
        return "0";
    return `${SCALE[index - 1]}rem`;
}
/**
 * Find the closest scale index for a given value
 */
function findClosestIndex(value) {
    let closest = 0;
    let minDiff = Infinity;
    for (let i = 0; i < SCALE.length; i++) {
        const diff = Math.abs(SCALE[i] - value);
        if (diff < minDiff) {
            minDiff = diff;
            closest = i;
        }
    }
    return (closest + 1);
}
/**
 * Add two size indices (returns next scale value)
 * Uses the additive property: scale[a] + scale[b] ≈ scale[c]
 */
export function addSizes(a, b) {
    const sum = SCALE[a - 1] + SCALE[b - 1];
    return findClosestIndex(sum);
}
/**
 * Subtract size b from size a (returns difference scale value)
 * Clamps to minimum of 1
 */
export function subtractSizes(a, b) {
    const diff = SCALE[a - 1] - SCALE[b - 1];
    if (diff <= 0)
        return 1;
    return findClosestIndex(diff);
}
/**
 * Clamp a size index to a min/max range
 */
export function clampSize(value, min, max) {
    if (value < min)
        return min;
    if (value > max)
        return max;
    return value;
}
/** CSS variable name for spacing */
export function spacingVar(index) {
    return `var(--s-${index})`;
}
/** CSS variable name for radius */
export function radiusVar(index) {
    return `var(--r-${index})`;
}
