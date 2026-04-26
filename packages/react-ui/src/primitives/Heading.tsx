import { cva, type VariantProps } from "class-variance-authority";
import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@dotnaos/design-system/lib/utils";

export type HeadingLevel = 1 | 2 | 3 | 4;

const headingVariants = cva(
  "font-semibold font-sans leading-tight text-text m-0",
  {
    variants: {
      level: {
        1: "text-2xl mb-s-4",
        2: "text-xl mb-s-3",
        3: "text-base mb-s-2",
        4: "text-sm mb-s-2",
      },
    },
    defaultVariants: {
      level: 2,
    },
  }
);

export interface HeadingProps extends VariantProps<typeof headingVariants> {
  children: ReactNode;
  /** Heading level (1-4) */
  level?: HeadingLevel;
  /** Additional className */
  className?: string;
  /** Additional inline styles */
  style?: CSSProperties;
}

const tagMap: Record<HeadingLevel, ElementType> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
};

/**
 * Heading - Semantic headings with consistent sizing
 */
export function Heading({
  children,
  level = 2,
  className,
  style,
}: HeadingProps) {
  const Component = tagMap[level || 2];

  return (
    <Component
      className={cn(headingVariants({ level }), className)}
      style={style}
    >
      {children}
    </Component>
  );
}
