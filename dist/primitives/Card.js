import { jsx as _jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import { getSize, subtractSizes } from "../scale";
const cardVariants = cva("bg-bg-2 border border-border", {
    variants: {
        radius: {
            0: "rounded-r-0",
            1: "rounded-r-1",
            2: "rounded-r-2",
            3: "rounded-r-3",
            4: "rounded-r-4",
            5: "rounded-r-5",
            6: "rounded-[3.25rem]",
            7: "rounded-[5.25rem]",
        },
        padding: {
            1: "p-s-1",
            2: "p-s-2",
            3: "p-s-3",
            4: "p-s-4",
            5: "p-s-5",
            6: "p-s-6",
            7: "p-s-7",
        },
    },
    defaultVariants: {
        radius: 4,
        padding: 3,
    },
});
/**
 * Card - Auto-computing container
 *
 * Computes inner radius and gap for children based on its own radius and padding.
 * Children inherit --inner-radius and --inner-gap via CSS variables.
 */
export function Card({ children, radius = 4, padding = 3, className, style, }) {
    // Compute inner values for children
    const innerRadius = subtractSizes((radius || 0), (padding || 0));
    const innerGap = innerRadius;
    const cssVars = {
        // Set CSS variables for children to inherit
        "--radius": getSize((radius || 0)),
        "--padding": getSize((padding || 0)),
        "--inner-radius": getSize(innerRadius),
        "--inner-gap": getSize(innerGap),
    };
    return (_jsx("div", { className: cn(cardVariants({ radius, padding }), className), style: {
            ...cssVars,
            ...style,
        }, children: children }));
}
