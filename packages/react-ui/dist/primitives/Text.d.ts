import { type VariantProps } from "class-variance-authority";
import type { CSSProperties, ElementType, ReactNode } from "react";
export type TextSize = "s" | "m" | "l";
export type TextColor = "text" | "muted" | "accent" | "danger" | "warning" | "success";
declare const textVariants: (props?: ({
    size?: "s" | "m" | "l" | null | undefined;
    color?: "text" | "accent" | "danger" | "warning" | "success" | "muted" | null | undefined;
    mono?: boolean | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface TextProps extends Omit<VariantProps<typeof textVariants>, "color"> {
    children: ReactNode;
    /** Size (s/m/l, default: m) */
    size?: TextSize;
    /** Color (semantic, default: text) */
    color?: TextColor;
    /** Render as different element */
    as?: ElementType;
    /** Monospace font */
    mono?: boolean;
    /** Additional className */
    className?: string;
    /** Additional inline styles */
    style?: CSSProperties;
}
/**
 * Text - Body text with semantic color and size
 */
export declare function Text({ children, size, color, as: Component, mono, className, style, weight, }: TextProps & {
    weight?: CSSProperties['fontWeight'];
}): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Text.d.ts.map