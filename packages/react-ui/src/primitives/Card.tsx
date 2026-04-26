import { cva, type VariantProps } from "class-variance-authority";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@dotnaos/design-system/lib/utils";
import { getSize, subtractSizes, type SizeIndex } from "@dotnaos/design-system";

const cardVariants = cva("bg-bg-2 border border-border", {
  variants: {
    radius: {
      0: "rounded-r-0",
      1: "rounded-r-1",
      2: "rounded-r-2",
      3: "rounded-r-3",
      4: "rounded-r-4",
      5: "rounded-r-5",
      6: "rounded-[3.25rem]",
      7: "rounded-[5.25rem]",
    },
    padding: {
      1: "p-s-1",
      2: "p-s-2",
      3: "p-s-3",
      4: "p-s-4",
      5: "p-s-5",
      6: "p-s-6",
      7: "p-s-7",
    },
  },
  defaultVariants: {
    radius: 4,
    padding: 3,
  },
});

export interface CardProps extends VariantProps<typeof cardVariants> {
  children: ReactNode;
  /** Border radius (1-5 scale, default: 4) */
  radius?: SizeIndex;
  /** Padding (1-7 scale, default: 3) */
  padding?: SizeIndex;
  /** Additional className */
  className?: string;
  /** Additional inline styles */
  style?: CSSProperties;
}

/**
 * Card - Auto-computing container
 *
 * Computes inner radius and gap for children based on its own radius and padding.
 * Children inherit --inner-radius and --inner-gap via CSS variables.
 */
export function Card({
  children,
  radius = 4,
  padding = 3,
  className,
  style,
}: CardProps) {
  // Compute inner values for children
  const innerRadius = subtractSizes(
    (radius || 0) as SizeIndex,
    (padding || 0) as SizeIndex
  );
  const innerGap = innerRadius;

  const cssVars = {
    // Set CSS variables for children to inherit
    "--radius": getSize((radius || 0) as SizeIndex),
    "--padding": getSize((padding || 0) as SizeIndex),
    "--inner-radius": getSize(innerRadius),
    "--inner-gap": getSize(innerGap),
  };

  return (
    <div
      className={cn(cardVariants({ radius, padding }), className)}
      style={
        {
          ...cssVars,
          ...style,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
