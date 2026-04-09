import { type VariantProps, cva } from "class-variance-authority";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "../lib/utils";
import { Scrollable } from "../primitives/Scrollable";

const sidenavVariants = cva("flex flex-col h-full p-s-2 gap-s-2");

export interface SidenavProps
  extends VariantProps<typeof sidenavVariants> {
  /** Sidenav items */
  children: ReactNode;
  /** Header content (e.g., logo, app icon) */
  header?: ReactNode;
  /** Footer content (e.g., settings, user) */
  footer?: ReactNode;
  /** Whether sidenav is collapsed */
  collapsed?: boolean;
  /** Additional className */
  className?: string;
  /** Additional inline styles */
  style?: CSSProperties;
}

/**
 * Sidenav - Vertical navigation sidebar
 */
export function Sidenav({
  children,
  header,
  footer,
  collapsed = false,
  className,
  style,
}: SidenavProps) {
  return (
    <div
      className={cn(sidenavVariants(), className)}
      style={style}
      data-collapsed={collapsed}
    >
      {header && <div className="shrink-0">{header}</div>}
      <Scrollable className="flex-1" style={{ flex: 1 }}>
        <div className="flex flex-col gap-s-1">{children}</div>
      </Scrollable>
      {footer && <div className="shrink-0">{footer}</div>}
    </div>
  );
}
