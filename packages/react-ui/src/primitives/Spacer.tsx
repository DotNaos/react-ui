import type { CSSProperties } from "react";

export interface SpacerProps {
  /** Additional className */
  className?: string;
  /** Additional inline styles */
  style?: CSSProperties;
}

import { cn } from "@dotnaos/design-system/lib/utils";

/**
 * Spacer - Flexible space that fills available room
 */
export function Spacer({ className, style }: SpacerProps) {
  return <div className={cn("flex-1", className)} style={style} />;
}
