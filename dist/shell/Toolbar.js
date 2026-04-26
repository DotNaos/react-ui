import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Toolbar - Horizontal action bar
 *
 * Typically placed below the TabBar, contains actions, breadcrumbs, etc.
 */
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
const toolbarVariants = cva("flex items-center justify-between h-s-6 px-s-3 bg-bg-1 border-b border-border gap-s-3");
/**
 * Toolbar - Horizontal action bar
 */
export function Toolbar({ left, center, right, className, style, }) {
    return (_jsxs("div", { className: cn(toolbarVariants(), className), style: style, children: [_jsx("div", { className: "flex items-center gap-s-2 flex-none", children: left }), _jsx("div", { className: "flex items-center justify-center flex-1 min-w-0", children: center }), _jsx("div", { className: "flex items-center gap-s-2 flex-none", children: right })] }));
}
