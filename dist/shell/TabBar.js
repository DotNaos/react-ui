import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * TabBar - Horizontal tabs container
 *
 * Contains Tab components representing open views/documents.
 */
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Scrollable } from "../primitives/Scrollable";
const tabBarVariants = cva("flex items-center h-s-6 bg-bg-1 border-b border-border pl-s-2 pr-s-2 gap-s-1 overflow-hidden");
/**
 * TabBar - Horizontal tab container
 */
export function TabBar({ children, actions, className, style, }) {
    return (_jsxs("div", { className: cn(tabBarVariants(), className), style: style, children: [_jsx(Scrollable, { direction: "horizontal", className: "flex-1 flex gap-s-1", style: { flex: 1 }, children: children }), actions && (_jsx("div", { className: "shrink-0 flex items-center gap-s-1", children: actions }))] }));
}
