/**
 * StatusBar - Bottom status bar
 *
 * Displays status information, typically at the bottom of the window.
 */
import { type VariantProps } from "class-variance-authority";
import type { CSSProperties, ReactNode } from "react";
declare const statusBarVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface StatusBarProps extends VariantProps<typeof statusBarVariants> {
    /** Left content (e.g., cursor position, branch) */
    left?: ReactNode;
    /** Center content (e.g., status message) */
    center?: ReactNode;
    /** Right content (e.g., notifications, settings) */
    right?: ReactNode;
    /** Additional className */
    className?: string;
    /** Additional inline styles */
    style?: CSSProperties;
}
/**
 * StatusBar - Bottom status bar
 */
export declare function StatusBar({ left, center, right, className, style, }: StatusBarProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=StatusBar.d.ts.map