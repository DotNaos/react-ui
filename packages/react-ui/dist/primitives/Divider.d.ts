import { type VariantProps } from "class-variance-authority";
import type { CSSProperties } from "react";
import { type SizeIndex } from "@dotnaos/design-system";
declare const dividerVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface DividerProps extends VariantProps<typeof dividerVariants> {
    /** Orientation */
    orientation?: "horizontal" | "vertical";
    /** Spacing around the divider (1-7 scale) */
    spacing?: SizeIndex;
    /** Additional className */
    className?: string;
    /** Additional inline styles */
    style?: CSSProperties;
}
/**
 * Divider - Visual separator
 */
export declare function Divider({ orientation, spacing, className, style, }: DividerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Divider.d.ts.map