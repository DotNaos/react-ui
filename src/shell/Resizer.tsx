/**
 * Resizer - Drag handle between panels
 *
 * Allows resizing of adjacent panels by dragging.
 */

import { cva, type VariantProps } from "class-variance-authority";
import type { CSSProperties } from "react";
import { useCallback, useRef, useState } from "react";
import { cn } from "../lib/utils";

const resizerVariants = cva(
  "shrink-0 transition-colors duration-fast",
  {
    variants: {
      orientation: {
        vertical: "w-s-1 h-full cursor-col-resize",
        horizontal: "h-s-1 w-full cursor-row-resize",
      },
      isDragging: {
        true: "bg-accent transition-none",
        false: "bg-border",
      },
    },
    defaultVariants: {
      orientation: "vertical",
      isDragging: false,
    },
  }
);

export interface ResizerProps
  extends Omit<VariantProps<typeof resizerVariants>, "isDragging"> {
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
export function Resizer({
  orientation = "vertical",
  onResize,
  onResizeStart,
  onResizeEnd,
  className,
  style,
}: ResizerProps) {
  const [isDragging, setIsDragging] = useState(false);
  const lastPosRef = useRef(0);

  const isVertical = orientation === "vertical";

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setIsDragging(true);
      lastPosRef.current = isVertical ? e.clientX : e.clientY;
      onResizeStart?.();

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const currentPos = isVertical ? moveEvent.clientX : moveEvent.clientY;
        const delta = currentPos - lastPosRef.current;
        lastPosRef.current = currentPos;
        onResize?.(delta);
      };

      const handleMouseUp = () => {
        setIsDragging(false);
        onResizeEnd?.();
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [isVertical, onResize, onResizeStart, onResizeEnd]
  );

  return (
    <div
      className={cn(resizerVariants({ orientation, isDragging, className }))}
      style={style}
      onMouseDown={handleMouseDown}
    />
  );
}
