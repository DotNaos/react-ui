/**
 * Resizer - Drag handle between panels
 *
 * Allows resizing of adjacent panels by dragging.
 */
import { type VariantProps } from "class-variance-authority";
import type { CSSProperties } from "react";
declare const resizerVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
    isDragging?: boolean | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ResizerProps extends Omit<VariantProps<typeof resizerVariants>, "isDragging"> {
    /** Orientation of the resizer */
    orientation?: "horizontal" | "vertical";
    /** Called while dragging with the delta */
    onResize?: (delta: number) => void;
    /** Called when drag starts */
    onResizeStart?: () => void;
    /** Called when drag ends */
    onResizeEnd?: () => void;
    /** Additional className */
    className?: string;
    /** Additional inline styles */
    style?: CSSProperties;
}
/**
 * Resizer - Drag handle for resizing panels
 */
export declare function Resizer({ orientation, onResize, onResizeStart, onResizeEnd, className, style, }: ResizerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Resizer.d.ts.map