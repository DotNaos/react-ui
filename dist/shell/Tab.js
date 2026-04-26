import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "../lib/utils";
import { Icon } from "../primitives/Icon";
const tabVariants = cva("flex items-center gap-s-2 px-s-3 py-s-1 rounded-r-2 cursor-pointer transition-colors duration-fast ease-fast text-s font-sans whitespace-nowrap max-w-[180px] border-none group hover:bg-bg-2", {
    variants: {
        active: {
            true: "bg-bg-2 text-text",
            false: "bg-transparent text-text-muted",
        },
    },
    defaultVariants: {
        active: false,
    },
});
/**
 * Tab - Single tab component
 */
export function Tab({ label, icon, active = false, isDirty = false, closable = true, onClick, onClose, className, style, }) {
    const handleClose = (e) => {
        e.stopPropagation();
        onClose?.();
    };
    return (_jsxs("button", { type: "button", className: cn(tabVariants({ active, className })), style: style, onClick: onClick, children: [icon && _jsx("span", { className: "shrink-0", children: icon }), _jsx("span", { className: "overflow-hidden text-ellipsis", children: label }), isDirty && (_jsx("span", { className: "w-[6px] h-[6px] rounded-full bg-accent shrink-0" })), closable && (_jsx("span", { onClick: handleClose, className: "opacity-0 group-hover:opacity-100 hover:bg-bg-1 rounded p-[2px] ml-s-1 transition-opacity duration-fast shrink-0", children: _jsx(Icon, { name: X, size: "s", color: "muted" }) }))] }));
}
