import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
const sidenavItemVariants = cva("flex items-center gap-s-2 p-s-2 rounded-r-2 cursor-pointer transition-colors duration-fast ease-fast border-none w-full text-left text-s font-sans hover:bg-bg-2", {
    variants: {
        active: {
            true: "bg-accent text-text hover:bg-accent-hover",
            false: "bg-transparent text-text-muted",
        },
    },
    defaultVariants: {
        active: false,
    },
});
/**
 * SidenavItem - Single navigation item
 */
export function SidenavItem({ icon, label, active = false, onClick, tooltip, className, style, }) {
    return (_jsxs("button", { type: "button", className: cn(sidenavItemVariants({ active, className })), style: style, onClick: onClick, title: tooltip ?? label, children: [_jsx("span", { className: "shrink-0", children: icon }), label && (_jsx("span", { className: "whitespace-nowrap overflow-hidden text-ellipsis", children: label }))] }));
}
