import { type VariantProps } from "class-variance-authority";
import type { CSSProperties } from "react";
export type SpinnerSize = "s" | "m" | "l";
declare const spinnerVariants: (props?: ({
    size?: "s" | "m" | "l" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
    /** Size (s/m/l, default: m) */
    size?: SpinnerSize;
    /** Additional className */
    className?: string;
    /** Additional inline styles */
    style?: CSSProperties;
}
/**
 * Spinner - Loading indicator
 */
export declare function Spinner({ size, className, style }: SpinnerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Spinner.d.ts.map