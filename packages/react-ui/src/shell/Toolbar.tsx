/**
 * Toolbar - Horizontal action bar
 *
 * Typically placed below the TabBar, contains actions, breadcrumbs, etc.
 */

import { cva, type VariantProps } from "class-variance-authority";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@dotnaos/design-system/lib/utils";

const toolbarVariants = cva(
  "flex items-center justify-between h-s-6 px-s-3 bg-bg-1 border-b border-border gap-s-3"
);

export interface ToolbarProps extends VariantProps<typeof toolbarVariants> {
  /** Left content (e.g., back button, breadcrumbs) */
  left?: ReactNode;
  /** Center content (e.g., title, view controls) */
  center?: ReactNode;
  /** Right content (e.g., actions, search) */
  right?: ReactNode;
  /** Additional className */
  className?: string;
  /** Additional inline styles */
  style?: CSSProperties;
}

/**
 * Toolbar - Horizontal action bar
 */
export function Toolbar({
  left,
  center,
  right,
  className,
  style,
}: ToolbarProps) {
  return (
    <div className={cn(toolbarVariants(), className)} style={style}>
      <div className="flex items-center gap-s-2 flex-none">{left}</div>
      <div className="flex items-center justify-center flex-1 min-w-0">
        {center}
      </div>
      <div className="flex items-center gap-s-2 flex-none">{right}</div>
    </div>
  );
}
