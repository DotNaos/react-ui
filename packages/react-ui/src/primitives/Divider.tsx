import { cva, type VariantProps } from "class-variance-authority";
import type { CSSProperties } from "react";
import { cn } from "@dotnaos/design-system/lib/utils";
import { type SizeIndex } from "@dotnaos/design-system";

const dividerVariants = cva("bg-border border-0", {
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "w-px h-full",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export interface DividerProps
  extends VariantProps<typeof dividerVariants> {
  /** Orientation */
  orientation?: "horizontal" | "vertical";
  /** Spacing around the divider (1-7 scale) */
  spacing?: SizeIndex;
  /** Additional className */
  className?: string;
  /** Additional inline styles */
  style?: CSSProperties;
}

/**
 * Divider - Visual separator
 */
export function Divider({
  orientation = "horizontal",
  spacing,
  className,
  style,
}: DividerProps) {
  const isHorizontal = orientation === "horizontal";
  const marginClass = spacing
    ? isHorizontal
      ? `my-s-${spacing}`
      : `mx-s-${spacing}`
    : "";

  return (
    <hr
      className={cn(dividerVariants({ orientation }), marginClass, className)}
      style={style}
    />
  );
}
