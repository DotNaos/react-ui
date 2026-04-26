import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Panel - Content panel area
 *
 * A container for view content, typically used in split layouts.
 */
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Scrollable } from "../primitives/Scrollable";
const panelVariants = cva("flex flex-col flex-1 overflow-hidden bg-bg-1");
/**
 * Panel - Content container
 */
export function Panel({ children, header, footer, scrollable = true, minWidth = "200px", className, style, }) {
    return (_jsxs("div", { className: cn(panelVariants(), className), style: { minWidth, ...style }, children: [header && (_jsx("div", { className: "shrink-0 px-s-3 py-s-2 border-b border-border", children: header })), scrollable ? (_jsx(Scrollable, { className: "flex-1", style: { flex: 1 }, children: children })) : (_jsx("div", { className: "flex-1 overflow-hidden", children: children })), footer && (_jsx("div", { className: "shrink-0 px-s-3 py-s-2 border-t border-border", children: footer }))] }));
}
