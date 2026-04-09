import { type VariantProps, cva } from "class-variance-authority";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "../lib/utils";

const sidenavItemVariants = cva(
  "flex items-center gap-s-2 p-s-2 rounded-r-2 cursor-pointer transition-colors duration-fast ease-fast border-none w-full text-left text-s font-sans hover:bg-bg-2",
  {
    variants: {
      active: {
        true: "bg-accent text-text hover:bg-accent-hover",
        false: "bg-transparent text-text-muted",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

export interface SidenavItemProps
  extends VariantProps<typeof sidenavItemVariants> {
  /** Icon to display */
  icon: ReactNode;
  /** Label (shown when sidenav is expanded) */
  label?: string;
  /** Whether this item is currently active */
  active?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Tooltip text */
  tooltip?: string;
  /** Additional className */
  className?: string;
  /** Additional inline styles */
  style?: CSSProperties;
}

/**
 * SidenavItem - Single navigation item
 */
export function SidenavItem({
  icon,
  label,
  active = false,
  onClick,
  tooltip,
  className,
  style,
}: SidenavItemProps) {
  return (
    <button
      type="button"
      className={cn(sidenavItemVariants({ active, className }))}
      style={style}
      onClick={onClick}
      title={tooltip ?? label}
    >
      <span className="shrink-0">{icon}</span>
      {label && (
        <span className="whitespace-nowrap overflow-hidden text-ellipsis">
          {label}
        </span>
      )}
    </button>
  );
}
