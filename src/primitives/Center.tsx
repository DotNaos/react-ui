import type { CSSProperties, ReactNode } from "react";

export interface CenterProps {
  children: ReactNode;
  /** Additional className */
  className?: string;
  /** Additional inline styles */
  style?: CSSProperties;
}

import { cn } from "../lib/utils";

/**
 * Center - Centers content both horizontally and vertically
 */
export function Center({ children, className, style }: CenterProps) {
  return (
    <div
      className={cn("flex items-center justify-center", className)}
      style={style}
    >
      {children}
    </div>
  );
}
