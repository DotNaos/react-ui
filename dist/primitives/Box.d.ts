import type { CSSProperties, ReactNode } from "react";
export interface BoxProps {
    children: ReactNode;
    /** Additional className */
    className?: string;
    /** Additional inline styles */
    style?: CSSProperties;
}
/**
 * Box - Simple container that resets margins and inherits context
 *
 * Use to wrap library components or raw elements within Cards/Panels.
 * Inherits --inner-radius from parent.
 */
export declare function Box({ children, className, style }: BoxProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Box.d.ts.map