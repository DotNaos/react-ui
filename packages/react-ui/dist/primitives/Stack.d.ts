import { type VariantProps } from "class-variance-authority";
import type { CSSProperties, ReactNode } from "react";
import { type SizeIndex } from "@dotnaos/design-system";
export type StackDirection = "vertical" | "horizontal";
export type StackAlign = "start" | "center" | "end" | "stretch";
export type StackJustify = "start" | "center" | "end" | "between" | "around";
declare const stackVariants: (props?: ({
    direction?: "horizontal" | "vertical" | null | undefined;
    align?: "stretch" | "center" | "end" | "start" | null | undefined;
    justify?: "center" | "end" | "start" | "between" | "around" | null | undefined;
    gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface StackProps extends Omit<VariantProps<typeof stackVariants>, "gap"> {
    children: ReactNode;
    /** Gap between children (1-7 scale) */
    gap?: SizeIndex;
    /** Stack direction */
    direction?: StackDirection;
    /** Align items on cross axis */
    align?: StackAlign;
    /** Justify items on main axis */
    justify?: StackJustify;
    /** Additional className */
    className?: string;
    /** Additional inline styles */
    style?: CSSProperties;
}
/**
 * Stack - Vertical or horizontal flex container with gap
 *
 * If no gap is provided, inherits --inner-gap from parent context.
 */
export declare function Stack({ children, gap, direction, align, justify, className, style, }: StackProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Stack.d.ts.map