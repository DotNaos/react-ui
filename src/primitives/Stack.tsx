import { cva, type VariantProps } from "class-variance-authority";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "../lib/utils";
import { getSize, type SizeIndex } from "../scale";

export type StackDirection = "vertical" | "horizontal";
export type StackAlign = "start" | "center" | "end" | "stretch";
export type StackJustify = "start" | "center" | "end" | "between" | "around";

const stackVariants = cva("flex gap-[var(--gap,var(--inner-gap,0.5rem))]", {
  variants: {
    direction: {
      vertical: "flex-col",
      horizontal: "flex-row",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
    },
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
  defaultVariants: {
    direction: "vertical",
    align: "stretch",
    justify: "start",
  },
});

export interface StackProps
  extends Omit<VariantProps<typeof stackVariants>, "gap"> {
  children: ReactNode;
  /** Gap between children (1-7 scale) */
  gap?: SizeIndex;
  /** Stack direction */
  direction?: StackDirection;
  /** Align items on cross axis */
  align?: StackAlign;
  /** Justify items on main axis */
  justify?: StackJustify;
  /** Additional className */
  className?: string;
  /** Additional inline styles */
  style?: CSSProperties;
}

/**
 * Stack - Vertical or horizontal flex container with gap
 *
 * If no gap is provided, inherits --inner-gap from parent context.
 */
export function Stack({
  children,
  gap,
  direction = "vertical",
  align = "stretch",
  justify = "start",
  className,
  style,
}: StackProps) {
  const cssVars = gap ? { "--gap": getSize(gap) } : {};

  return (
    <div
      className={cn(
        stackVariants({ direction, align, justify, gap }),
        className
      )}
      style={{
        ...cssVars,
        ...style,
      } as CSSProperties}
    >
      {children}
    </div>
  );
}
