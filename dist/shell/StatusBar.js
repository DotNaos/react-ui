import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * StatusBar - Bottom status bar
 *
 * Displays status information, typically at the bottom of the window.
 */
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
const statusBarVariants = cva("flex items-center justify-between h-s-4 px-s-2 bg-bg-0 border-t border-border text-s text-text-muted font-sans");
/**
 * StatusBar - Bottom status bar
 */
export function StatusBar({ left, center, right, className, style, }) {
    return (_jsxs("div", { className: cn(statusBarVariants(), className), style: style, children: [_jsx("div", { className: "flex items-center gap-s-2", children: left }), _jsx("div", { className: "flex items-center", children: center }), _jsx("div", { className: "flex items-center gap-s-2", children: right })] }));
}
