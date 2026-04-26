import { type VariantProps } from "class-variance-authority";
import type { CSSProperties, ReactNode } from "react";
declare const sidenavItemVariants: (props?: ({
    active?: boolean | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface SidenavItemProps extends VariantProps<typeof sidenavItemVariants> {
    /** Icon to display */
    icon: ReactNode;
    /** Label (shown when sidenav is expanded) */
    label?: string;
    /** Whether this item is currently active */
    active?: boolean;
    /** Click handler */
    onClick?: () => void;
    /** Tooltip text */
    tooltip?: string;
    /** Additional className */
    className?: string;
    /** Additional inline styles */
    style?: CSSProperties;
}
/**
 * SidenavItem - Single navigation item
 */
export declare function SidenavItem({ icon, label, active, onClick, tooltip, className, style, }: SidenavItemProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SidenavItem.d.ts.map