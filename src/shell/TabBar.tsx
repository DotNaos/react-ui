/**
 * TabBar - Horizontal tabs container
 *
 * Contains Tab components representing open views/documents.
 */

import { cva, type VariantProps } from "class-variance-authority";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "../lib/utils";
import { Scrollable } from "../primitives/Scrollable";

const tabBarVariants = cva(
  "flex items-center h-s-6 bg-bg-1 border-b border-border pl-s-2 pr-s-2 gap-s-1 overflow-hidden"
);

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
export function TabBar({
  children,
  actions,
  className,
  style,
}: TabBarProps) {
  return (
    <div className={cn(tabBarVariants(), className)} style={style}>
      <Scrollable
        direction="horizontal"
        className="flex-1 flex gap-s-1"
        style={{ flex: 1 }}
      >
        {children}
      </Scrollable>
      {actions && (
        <div className="shrink-0 flex items-center gap-s-1">{actions}</div>
      )}
    </div>
  );
}
