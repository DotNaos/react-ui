import { jsx as _jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
const dividerVariants = cva("bg-border border-0", {
    variants: {
        orientation: {
            horizontal: "h-px w-full",
            vertical: "w-px h-full",
        },
    },
    defaultVariants: {
        orientation: "horizontal",
    },
});
/**
 * Divider - Visual separator
 */
export function Divider({ orientation = "horizontal", spacing, className, style, }) {
    const isHorizontal = orientation === "horizontal";
    const marginClass = spacing
        ? isHorizontal
            ? `my-s-${spacing}`
            : `mx-s-${spacing}`
        : "";
    return (_jsx("hr", { className: cn(dividerVariants({ orientation }), marginClass, className), style: style }));
}
