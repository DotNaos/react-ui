import { jsx as _jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import { getSize } from "../scale";
const gridVariants = cva("grid gap-[var(--gap,var(--inner-gap,0.5rem))]", {
    variants: {
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
});
/**
 * Grid - CSS Grid layout
 */
export function Grid({ children, columns = 2, minColumnWidth = "200px", gap, className, style, }) {
    const templateColumns = columns === "auto-fit"
        ? `repeat(auto-fit, minmax(${minColumnWidth}, 1fr))`
        : `repeat(${columns}, 1fr)`;
    const cssVars = gap ? { "--gap": getSize(gap) } : {};
    return (_jsx("div", { className: cn(gridVariants({ gap }), className), style: {
            gridTemplateColumns: templateColumns,
            ...cssVars,
            ...style,
        }, children: children }));
}
