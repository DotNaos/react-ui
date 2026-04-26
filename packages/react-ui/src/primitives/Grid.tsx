import { cva, type VariantProps } from "class-variance-authority";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@dotnaos/design-system/lib/utils";
import { getSize, type SizeIndex } from "@dotnaos/design-system";

const gridVariants = cva("grid gap-[var(--gap,var(--inner-gap,0.5rem))]", {
  variants: {
    gap: {
      1: "gap-s-1",
      2: "gap-s-2",
      3: "gap-s-3",
      4: "gap-s-4",
      5: "gap-s-5",
      6: "gap-s-6",
      7: "gap-s-7",
    },
  },
});

export interface GridProps extends Omit<VariantProps<typeof gridVariants>, "gap"> {
  children: ReactNode;
  /** Number of columns (or 'auto-fit') */
  columns?: number | "auto-fit";
  /** Minimum column width for auto-fit */
  minColumnWidth?: string;
  /** Gap between items (1-7 scale) */
  gap?: SizeIndex;
  /** Additional className */
  className?: string;
  /** Additional inline styles */
  style?: CSSProperties;
}

/**
 * Grid - CSS Grid layout
 */
export function Grid({
  children,
  columns = 2,
  minColumnWidth = "200px",
  gap,
  className,
  style,
}: GridProps) {
  const templateColumns =
    columns === "auto-fit"
      ? `repeat(auto-fit, minmax(${minColumnWidth}, 1fr))`
      : `repeat(${columns}, 1fr)`;

  const cssVars = gap ? { "--gap": getSize(gap) } : {};

  return (
    <div
      className={cn(gridVariants({ gap }), className)}
      style={
        {
          gridTemplateColumns: templateColumns,
          ...cssVars,
          ...style,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
