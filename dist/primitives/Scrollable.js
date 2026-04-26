import { jsx as _jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
const scrollableVariants = cva("flex-1 min-h-0 min-w-0", {
    variants: {
        direction: {
            vertical: "overflow-y-auto overflow-x-hidden",
            horizontal: "overflow-x-auto overflow-y-hidden",
            both: "overflow-auto",
        },
    },
    defaultVariants: {
        direction: "vertical",
    },
});
/**
 * Scrollable - Scrollable region
 */
export function Scrollable({ children, direction = "vertical", className, style, }) {
    return (_jsx("div", { className: cn(scrollableVariants({ direction }), className), style: style, children: children }));
}
