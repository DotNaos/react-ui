import { jsx as _jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
const spinnerVariants = cva("block border-2 border-border border-t-accent rounded-full animate-spin", {
    variants: {
        size: {
            s: "w-4 h-4",
            m: "w-6 h-6",
            l: "w-8 h-8",
        },
    },
    defaultVariants: {
        size: "m",
    },
});
/**
 * Spinner - Loading indicator
 */
export function Spinner({ size = "m", className, style }) {
    return (_jsx("div", { className: cn(spinnerVariants({ size }), className), style: style, role: "status", "aria-label": "Loading" }));
}
