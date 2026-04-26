import { cva, type VariantProps } from "class-variance-authority";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@dotnaos/design-system/lib/utils";

export type BadgeVariant = "default" | "accent" | "danger" | "warning" | "success";

const badgeVariants = cva(
  "inline-flex items-center justify-center px-s-2 py-s-1 text-s font-medium font-sans rounded-r-full whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-bg-2 text-text-muted",
        accent: "bg-accent text-text",
        danger: "bg-danger text-text",
        warning: "bg-warning text-bg-0",
        success: "bg-success text-bg-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: ReactNode;
  /** Variant (default/accent/danger/warning/success) */
  variant?: BadgeVariant;
  /** Additional className */
  className?: string;
  /** Additional inline styles */
  style?: CSSProperties;
}

/**
 * Badge - Small label/count
 */
export function Badge({
  children,
  variant = "default",
  className,
  style,
}: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} style={style}>
      {children}
    </span>
  );
}
