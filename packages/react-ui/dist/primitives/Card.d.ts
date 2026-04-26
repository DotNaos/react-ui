import { type VariantProps } from "class-variance-authority";
import type { CSSProperties, ReactNode } from "react";
import { type SizeIndex } from "@dotnaos/design-system";
declare const cardVariants: (props?: ({
    radius?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | null | undefined;
    padding?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface CardProps extends VariantProps<typeof cardVariants> {
    children: ReactNode;
    /** Border radius (1-5 scale, default: 4) */
    radius?: SizeIndex;
    /** Padding (1-7 scale, default: 3) */
    padding?: SizeIndex;
    /** Additional className */
    className?: string;
    /** Additional inline styles */
    style?: CSSProperties;
}
/**
 * Card - Auto-computing container
 *
 * Computes inner radius and gap for children based on its own radius and padding.
 * Children inherit --inner-radius and --inner-gap via CSS variables.
 */
export declare function Card({ children, radius, padding, className, style, }: CardProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Card.d.ts.map