import { jsx as _jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import { getSize } from "../scale";
const stackVariants = cva("flex gap-[var(--gap,var(--inner-gap,0.5rem))]", {
    variants: {
        direction: {
            vertical: "flex-col",
            horizontal: "flex-row",
        },
        align: {
            start: "items-start",
            center: "items-center",
            end: "items-end",
            stretch: "items-stretch",
        },
        justify: {
            start: "justify-start",
            center: "justify-center",
            end: "justify-end",
            between: "justify-between",
            around: "justify-around",
        },
        gap: {
            1: "gap-s-1",
            2: "gap-s-2",
            3: "gap-s-3",
            4: "gap-s-4",
            5: "gap-s-5",
            6: "gap-s-6",
            7: "gap-s-7",
        },
    },
    defaultVariants: {
        direction: "vertical",
        align: "stretch",
        justify: "start",
    },
});
/**
 * Stack - Vertical or horizontal flex container with gap
 *
 * If no gap is provided, inherits --inner-gap from parent context.
 */
export function Stack({ children, gap, direction = "vertical", align = "stretch", justify = "start", className, style, }) {
    const cssVars = gap ? { "--gap": getSize(gap) } : {};
    return (_jsx("div", { className: cn(stackVariants({ direction, align, justify, gap }), className), style: {
            ...cssVars,
            ...style,
        }, children: children }));
}
