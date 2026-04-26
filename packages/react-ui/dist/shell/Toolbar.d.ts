/**
 * Toolbar - Horizontal action bar
 *
 * Typically placed below the TabBar, contains actions, breadcrumbs, etc.
 */
import { type VariantProps } from "class-variance-authority";
import type { CSSProperties, ReactNode } from "react";
declare const toolbarVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface ToolbarProps extends VariantProps<typeof toolbarVariants> {
    /** Left content (e.g., back button, breadcrumbs) */
    left?: ReactNode;
    /** Center content (e.g., title, view controls) */
    center?: ReactNode;
    /** Right content (e.g., actions, search) */
    right?: ReactNode;
    /** Additional className */
    className?: string;
    /** Additional inline styles */
    style?: CSSProperties;
}
/**
 * Toolbar - Horizontal action bar
 */
export declare function Toolbar({ left, center, right, className, style, }: ToolbarProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Toolbar.d.ts.map