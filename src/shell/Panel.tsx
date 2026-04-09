/**
 * Panel - Content panel area
 *
 * A container for view content, typically used in split layouts.
 */

import { cva, type VariantProps } from "class-variance-authority";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "../lib/utils";
import { Scrollable } from "../primitives/Scrollable";

const panelVariants = cva(
  "flex flex-col flex-1 overflow-hidden bg-bg-1"
);

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
export function Panel({
  children,
  header,
  footer,
  scrollable = true,
  minWidth = "200px",
  className,
  style,
}: PanelProps) {
  return (
    <div
      className={cn(panelVariants(), className)}
      style={{ minWidth, ...style }}
    >
      {header && (
        <div className="shrink-0 px-s-3 py-s-2 border-b border-border">
          {header}
        </div>
      )}
      {scrollable ? (
        <Scrollable className="flex-1" style={{ flex: 1 }}>
          {children}
        </Scrollable>
      ) : (
        <div className="flex-1 overflow-hidden">{children}</div>
      )}
      {footer && (
        <div className="shrink-0 px-s-3 py-s-2 border-t border-border">
          {footer}
        </div>
      )}
    </div>
  );
}
