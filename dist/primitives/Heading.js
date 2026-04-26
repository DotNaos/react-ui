import { jsx as _jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
const headingVariants = cva("font-semibold font-sans leading-tight text-text m-0", {
    variants: {
        level: {
            1: "text-2xl mb-s-4",
            2: "text-xl mb-s-3",
            3: "text-base mb-s-2",
            4: "text-sm mb-s-2",
        },
    },
    defaultVariants: {
        level: 2,
    },
});
const tagMap = {
    1: "h1",
    2: "h2",
    3: "h3",
    4: "h4",
};
/**
 * Heading - Semantic headings with consistent sizing
 */
export function Heading({ children, level = 2, className, style, }) {
    const Component = tagMap[level || 2];
    return (_jsx(Component, { className: cn(headingVariants({ level }), className), style: style, children: children }));
}
