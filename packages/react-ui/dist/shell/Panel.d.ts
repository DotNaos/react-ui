/**
 * Panel - Content panel area
 *
 * A container for view content, typically used in split layouts.
 */
import { type VariantProps } from "class-variance-authority";
import type { CSSProperties, ReactNode } from "react";
declare const panelVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface PanelProps extends VariantProps<typeof panelVariants> {
    /** Panel content */
    children: ReactNode;
    /** Panel header (e.g., title, controls) */
    header?: ReactNode;
    /** Panel footer */
    footer?: ReactNode;
    /** Whether content should be scrollable */
    scrollable?: boolean;
    /** Minimum width for the panel */
    minWidth?: string;
    /** Additional className */
    className?: string;
    /** Additional inline styles */
    style?: CSSProperties;
}
/**
 * Panel - Content container
 */
export declare function Panel({ children, header, footer, scrollable, minWidth, className, style, }: PanelProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Panel.d.ts.map