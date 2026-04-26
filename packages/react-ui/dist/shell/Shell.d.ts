/**
 * Shell - Main application layout container
 *
 * A CSS Grid-based layout that manages:
 * - Sidenav (left icon strip)
 * - Main content area (tabs + panels)
 *
 * The Shell is domain-agnostic - it just provides layout structure.
 */
import { type VariantProps } from "class-variance-authority";
import type { CSSProperties, ReactNode } from "react";
declare const shellVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface ShellProps extends VariantProps<typeof shellVariants> {
    /** Sidenav content (icon strip on the left) */
    sidenav?: ReactNode;
    /** Main content area */
    children: ReactNode;
    /** Whether sidenav is collapsed (icon-only) */
    sidenavCollapsed?: boolean;
    /** Width of sidenav when expanded */
    sidenavWidth?: string;
    /** Width of sidenav when collapsed */
    sidenavCollapsedWidth?: string;
    /** Additional className */
    className?: string;
    /** Additional inline styles */
    style?: CSSProperties;
}
/**
 * Shell - The main application container
 *
 * Provides a CSS Grid layout with sidenav and content areas.
 */
export declare function Shell({ sidenav, children, sidenavCollapsed, sidenavWidth, sidenavCollapsedWidth, className, style, }: ShellProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Shell.d.ts.map