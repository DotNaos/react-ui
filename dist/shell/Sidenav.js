import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Scrollable } from "../primitives/Scrollable";
const sidenavVariants = cva("flex flex-col h-full p-s-2 gap-s-2");
/**
 * Sidenav - Vertical navigation sidebar
 */
export function Sidenav({ children, header, footer, collapsed = false, className, style, }) {
    return (_jsxs("div", { className: cn(sidenavVariants(), className), style: style, "data-collapsed": collapsed, children: [header && _jsx("div", { className: "shrink-0", children: header }), _jsx(Scrollable, { className: "flex-1", style: { flex: 1 }, children: _jsx("div", { className: "flex flex-col gap-s-1", children: children }) }), footer && _jsx("div", { className: "shrink-0", children: footer })] }));
}
