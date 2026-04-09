import type { CSSProperties, ReactNode } from "react";
import { cn } from "../lib/utils";

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
export function Box({ children, className, style }: BoxProps) {
  return (
    <div
      className={cn("m-0 rounded-[var(--inner-radius,0)]", className)}
      style={style}
    >
      {children}
    </div>
  );
}
