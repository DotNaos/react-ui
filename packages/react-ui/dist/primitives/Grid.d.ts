import { type VariantProps } from "class-variance-authority";
import type { CSSProperties, ReactNode } from "react";
import { type SizeIndex } from "@dotnaos/design-system";
declare const gridVariants: (props?: ({
    gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface GridProps extends Omit<VariantProps<typeof gridVariants>, "gap"> {
    children: ReactNode;
    /** Number of columns (or 'auto-fit') */
    columns?: number | "auto-fit";
    /** Minimum column width for auto-fit */
    minColumnWidth?: string;
    /** Gap between items (1-7 scale) */
    gap?: SizeIndex;
    /** Additional className */
    className?: string;
    /** Additional inline styles */
    style?: CSSProperties;
}
/**
 * Grid - CSS Grid layout
 */
export declare function Grid({ children, columns, minColumnWidth, gap, className, style, }: GridProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Grid.d.ts.map