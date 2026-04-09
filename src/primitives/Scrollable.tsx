import { cva, type VariantProps } from "class-variance-authority";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "../lib/utils";

const scrollableVariants = cva("flex-1 min-h-0 min-w-0", {
  variants: {
    direction: {
      vertical: "overflow-y-auto overflow-x-hidden",
      horizontal: "overflow-x-auto overflow-y-hidden",
      both: "overflow-auto",
    },
  },
  defaultVariants: {
    direction: "vertical",
  },
});

export interface ScrollableProps
  extends VariantProps<typeof scrollableVariants> {
  children: ReactNode;
  /** Direction of scroll */
  direction?: "vertical" | "horizontal" | "both";
  /** Additional className */
  className?: string;
  /** Additional inline styles */
  style?: CSSProperties;
}

/**
 * Scrollable - Scrollable region
 */
export function Scrollable({
  children,
  direction = "vertical",
  className,
  style,
}: ScrollableProps) {
  return (
    <div
      className={cn(scrollableVariants({ direction }), className)}
      style={style}
    >
      {children}
    </div>
  );
}
