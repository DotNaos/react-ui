/**
 * TabBar - Horizontal tabs container
 *
 * Contains Tab components representing open views/documents.
 */
import { type VariantProps } from "class-variance-authority";
import type { CSSProperties, ReactNode } from "react";
declare const tabBarVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface TabBarProps extends VariantProps<typeof tabBarVariants> {
    /** Tab components */
    children: ReactNode;
    /** Actions to show on the right (e.g., new tab button) */
    actions?: ReactNode;
    /** Additional className */
    className?: string;
    /** Additional inline styles */
    style?: CSSProperties;
}
/**
 * TabBar - Horizontal tab container
 */
export declare function TabBar({ children, actions, className, style, }: TabBarProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TabBar.d.ts.map