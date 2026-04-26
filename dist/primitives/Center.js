import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../lib/utils";
/**
 * Center - Centers content both horizontally and vertically
 */
export function Center({ children, className, style }) {
    return (_jsx("div", { className: cn("flex items-center justify-center", className), style: style, children: children }));
}
