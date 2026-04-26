import { type VariantProps } from "class-variance-authority";
import type { CSSProperties, ReactNode } from "react";
declare const scrollableVariants: (props?: ({
    direction?: "horizontal" | "vertical" | "both" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ScrollableProps extends VariantProps<typeof scrollableVariants> {
    children: ReactNode;
    /** Direction of scroll */
    direction?: "vertical" | "horizontal" | "both";
    /** Additional className */
    className?: string;
    /** Additional inline styles */
    style?: CSSProperties;
}
/**
 * Scrollable - Scrollable region
 */
export declare function Scrollable({ children, direction, className, style, }: ScrollableProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Scrollable.d.ts.map