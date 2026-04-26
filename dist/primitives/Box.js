import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../lib/utils";
/**
 * Box - Simple container that resets margins and inherits context
 *
 * Use to wrap library components or raw elements within Cards/Panels.
 * Inherits --inner-radius from parent.
 */
export function Box({ children, className, style }) {
    return (_jsx("div", { className: cn("m-0 rounded-[var(--inner-radius,0)]", className), style: style, children: children }));
}
