import { cva, type VariantProps } from "class-variance-authority";
import type { CSSProperties, ComponentType, SVGProps } from "react";
import { cn } from "@dotnaos/design-system/lib/utils";

export type IconSize = "s" | "m" | "l";
export type IconColor =
    | 'text'
    | 'muted'
    | 'accent'
    | 'danger'
    | 'warning'
    | 'success'
    | 'inherit';

/** Generic icon component type (compatible with lucide-react) */
export type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

const iconVariants = cva('', {
    variants: {
        color: {
            text: 'text-text',
            muted: 'text-text-muted',
            accent: 'text-accent',
            danger: 'text-danger',
            warning: 'text-warning',
            success: 'text-success',
            inherit: 'text-inherit',
        },
        size: {
            s: 'w-3 h-3',
            m: 'w-4 h-4',
            l: 'w-5 h-5',
        },
    },
    defaultVariants: {
        color: 'text',
        size: 'm',
    },
});

export interface IconProps
  extends Omit<VariantProps<typeof iconVariants>, "size" | "color"> {
  /** Icon component from the icon pack */
  name: IconComponent;
  /** Size (s/m/l, default: m) */
  size?: IconSize;
  /** Color (semantic, default: text) */
  color?: IconColor;
  /**
   * Custom color override
   * @deprecated Avoid using. Use semantic `color` prop instead.
   */
  customColor?: string;
  /** Additional className */
  className?: string;
  /** Additional inline styles */
  style?: CSSProperties;
}

/**
 * Icon - Wrapper for icons with locked sizes and semantic colors
 */
export function Icon({
  name: IconComponent,
  size = "m",
  color = "text",
  customColor,
  className,
  style,
}: IconProps) {
  return (
    <IconComponent
      color={customColor}
      className={cn(iconVariants({ color: customColor ? undefined : color, size }), className)}
      style={style}
    />
  );
}
