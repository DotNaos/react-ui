/**
 * Shell - Main application layout container
 *
 * A CSS Grid-based layout that manages:
 * - Sidenav (left icon strip)
 * - Main content area (tabs + panels)
 *
 * The Shell is domain-agnostic - it just provides layout structure.
 */

import { cva, type VariantProps } from "class-variance-authority";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@dotnaos/design-system/lib/utils";

const shellVariants = cva(
  "grid h-screen w-screen overflow-hidden bg-bg-0 text-text font-sans"
);

export interface ShellProps extends VariantProps<typeof shellVariants> {
  /** Sidenav content (icon strip on the left) */
  sidenav?: ReactNode;
  /** Main content area */
  children: ReactNode;
  /** Whether sidenav is collapsed (icon-only) */
  sidenavCollapsed?: boolean;
  /** Width of sidenav when expanded */
  sidenavWidth?: string;
  /** Width of sidenav when collapsed */
  sidenavCollapsedWidth?: string;
  /** Additional className */
  className?: string;
  /** Additional inline styles */
  style?: CSSProperties;
}

/**
 * Shell - The main application container
 *
 * Provides a CSS Grid layout with sidenav and content areas.
 */
export function Shell({
  sidenav,
  children,
  sidenavCollapsed = false,
  sidenavWidth = "220px",
  sidenavCollapsedWidth = "48px",
  className,
  style,
}: ShellProps) {
  const currentSidenavWidth = sidenavCollapsed
    ? sidenavCollapsedWidth
    : sidenavWidth;

  return (
    <div
      className={cn(shellVariants(), className)}
      style={{
        gridTemplateColumns: sidenav ? `${currentSidenavWidth} 1fr` : "1fr",
        ...style,
      }}
    >
      {sidenav && (
        <aside
          className="flex flex-col bg-bg-1 border-r border-border overflow-hidden transition-[width] duration-normal"
        >
          {sidenav}
        </aside>
      )}
      <main className="flex flex-col overflow-hidden min-w-0">
        {children}
      </main>
    </div>
  );
}
