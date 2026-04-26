/**
 * StatusBar - Bottom status bar
 *
 * Displays status information, typically at the bottom of the window.
 */

import { cva, type VariantProps } from "class-variance-authority";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@dotnaos/design-system/lib/utils";

const statusBarVariants = cva(
  "flex items-center justify-between h-s-4 px-s-2 bg-bg-0 border-t border-border text-s text-text-muted font-sans"
);

export interface StatusBarProps extends VariantProps<typeof statusBarVariants> {
  /** Left content (e.g., cursor position, branch) */
  left?: ReactNode;
  /** Center content (e.g., status message) */
  center?: ReactNode;
  /** Right content (e.g., notifications, settings) */
  right?: ReactNode;
  /** Additional className */
  className?: string;
  /** Additional inline styles */
  style?: CSSProperties;
}

/**
 * StatusBar - Bottom status bar
 */
export function StatusBar({
  left,
  center,
  right,
  className,
  style,
}: StatusBarProps) {
  return (
    <div className={cn(statusBarVariants(), className)} style={style}>
      <div className="flex items-center gap-s-2">{left}</div>
      <div className="flex items-center">{center}</div>
      <div className="flex items-center gap-s-2">{right}</div>
    </div>
  );
}
