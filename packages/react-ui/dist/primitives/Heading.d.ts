import { type VariantProps } from "class-variance-authority";
import type { CSSProperties, ReactNode } from "react";
export type HeadingLevel = 1 | 2 | 3 | 4;
declare const headingVariants: (props?: ({
    level?: 1 | 2 | 3 | 4 | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface HeadingProps extends VariantProps<typeof headingVariants> {
    children: ReactNode;
    /** Heading level (1-4) */
    level?: HeadingLevel;
    /** Additional className */
    className?: string;
    /** Additional inline styles */
    style?: CSSProperties;
}
/**
 * Heading - Semantic headings with consistent sizing
 */
export declare function Heading({ children, level, className, style, }: HeadingProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Heading.d.ts.map