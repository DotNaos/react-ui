import { jsx as _jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
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
/**
 * Icon - Wrapper for icons with locked sizes and semantic colors
 */
export function Icon({ name: IconComponent, size = "m", color = "text", customColor, className, style, }) {
    return (_jsx(IconComponent, { color: customColor, className: cn(iconVariants({ color: customColor ? undefined : color, size }), className), style: style }));
}
