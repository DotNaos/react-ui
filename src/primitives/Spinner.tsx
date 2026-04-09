import { cva, type VariantProps } from "class-variance-authority";
import type { CSSProperties } from "react";
import { cn } from "../lib/utils";

export type SpinnerSize = "s" | "m" | "l";

const spinnerVariants = cva(
  "block border-2 border-border border-t-accent rounded-full animate-spin",
  {
    variants: {
      size: {
        s: "w-4 h-4",
        m: "w-6 h-6",
        l: "w-8 h-8",
      },
    },
    defaultVariants: {
      size: "m",
    },
  }
);

export interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  /** Size (s/m/l, default: m) */
  size?: SpinnerSize;
  /** Additional className */
  className?: string;
  /** Additional inline styles */
  style?: CSSProperties;
}

/**
 * Spinner - Loading indicator
 */
export function Spinner({ size = "m", className, style }: SpinnerProps) {
  return (
    <div
      className={cn(spinnerVariants({ size }), className)}
      style={style}
      role="status"
      aria-label="Loading"
    />
  );
}
