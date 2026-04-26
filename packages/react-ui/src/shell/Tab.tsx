import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@dotnaos/design-system/lib/utils";
import { Icon } from "../primitives/Icon";

const tabVariants = cva(
  "flex items-center gap-s-2 px-s-3 py-s-1 rounded-r-2 cursor-pointer transition-colors duration-fast ease-fast text-s font-sans whitespace-nowrap max-w-[180px] border-none group hover:bg-bg-2",
  {
    variants: {
      active: {
        true: "bg-bg-2 text-text",
        false: "bg-transparent text-text-muted",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

export interface TabProps extends VariantProps<typeof tabVariants> {
  /** Tab label */
  label: string;
  /** Icon to display */
  icon?: ReactNode;
  /** Whether the tab has unsaved changes */
  isDirty?: boolean;
  /** Whether the tab can be closed */
  closable?: boolean;
  /** Click handler (select tab) */
  onClick?: () => void;
  /** Close handler */
  onClose?: () => void;
  /** Additional className */
  className?: string;
  /** Additional inline styles */
  style?: CSSProperties;
}

/**
 * Tab - Single tab component
 */
export function Tab({
  label,
  icon,
  active = false,
  isDirty = false,
  closable = true,
  onClick,
  onClose,
  className,
  style,
}: TabProps) {
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose?.();
  };

  return (
    <button
      type="button"
      className={cn(tabVariants({ active, className }))}
      style={style}
      onClick={onClick}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="overflow-hidden text-ellipsis">
        {label}
      </span>
      {isDirty && (
        <span
          className="w-[6px] h-[6px] rounded-full bg-accent shrink-0"
        />
      )}
      {closable && (
        <span
          onClick={handleClose}
          className="opacity-0 group-hover:opacity-100 hover:bg-bg-1 rounded p-[2px] ml-s-1 transition-opacity duration-fast shrink-0"
        >
          <Icon name={X} size="s" color="muted" />
        </span>
      )}
    </button>
  );
}
