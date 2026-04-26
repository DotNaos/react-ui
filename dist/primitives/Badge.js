import { jsx as _jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
const badgeVariants = cva("inline-flex items-center justify-center px-s-2 py-s-1 text-s font-medium font-sans rounded-r-full whitespace-nowrap", {
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
});
/**
 * Badge - Small label/count
 */
export function Badge({ children, variant = "default", className, style, }) {
    return (_jsx("span", { className: cn(badgeVariants({ variant }), className), style: style, children: children }));
}
