import { cva, type VariantProps } from "class-variance-authority";
import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "../lib/utils";

export type TextSize = "s" | "m" | "l";
export type TextColor = "text" | "muted" | "accent" | "danger" | "warning" | "success";

const textVariants = cva("m-0 leading-normal", {
  variants: {
    size: {
      s: "text-s",
      m: "text-m",
      l: "text-l",
    },
    color: {
      text: "text-text",
      muted: "text-text-muted",
      accent: "text-accent",
      danger: "text-danger",
      warning: "text-warning",
      success: "text-success",
    },
    mono: {
      true: "font-mono",
      false: "font-sans",
    },
  },
  defaultVariants: {
    size: "m",
    color: "text",
    mono: false,
  },
});

export interface TextProps
  extends Omit<VariantProps<typeof textVariants>, "color"> {
  children: ReactNode;
  /** Size (s/m/l, default: m) */
  size?: TextSize;
  /** Color (semantic, default: text) */
  color?: TextColor;
  /** Render as different element */
  as?: ElementType;
  /** Monospace font */
  mono?: boolean;
  /** Additional className */
  className?: string;
  /** Additional inline styles */
  style?: CSSProperties;
}

/**
 * Text - Body text with semantic color and size
 */
export function Text({
    children,
    size = 'm',
    color = 'text',
    as: Component = 'span',
    mono = false,
    className,
    style,
    weight,
}: TextProps & { weight?: CSSProperties['fontWeight'] }) {
    return (
        <Component
            className={cn(textVariants({ size, color, mono }), className)}
            style={{
                ...style,
                ...(weight !== undefined ? { fontWeight: weight } : {}),
            }}
        >
            {children}
        </Component>
    );
}
