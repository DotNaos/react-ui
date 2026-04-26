import { type VariantProps } from "class-variance-authority";
import type { CSSProperties, ReactNode } from "react";
declare const sidenavVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface SidenavProps extends VariantProps<typeof sidenavVariants> {
    /** Sidenav items */
    children: ReactNode;
    /** Header content (e.g., logo, app icon) */
    header?: ReactNode;
    /** Footer content (e.g., settings, user) */
    footer?: ReactNode;
    /** Whether sidenav is collapsed */
    collapsed?: boolean;
    /** Additional className */
    className?: string;
    /** Additional inline styles */
    style?: CSSProperties;
}
/**
 * Sidenav - Vertical navigation sidebar
 */
export declare function Sidenav({ children, header, footer, collapsed, className, style, }: SidenavProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Sidenav.d.ts.map