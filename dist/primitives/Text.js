import { jsx as _jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
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
/**
 * Text - Body text with semantic color and size
 */
export function Text({ children, size = 'm', color = 'text', as: Component = 'span', mono = false, className, style, weight, }) {
    return (_jsx(Component, { className: cn(textVariants({ size, color, mono }), className), style: {
            ...style,
            ...(weight !== undefined ? { fontWeight: weight } : {}),
        }, children: children }));
}
