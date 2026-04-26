import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Shell - Main application layout container
 *
 * A CSS Grid-based layout that manages:
 * - Sidenav (left icon strip)
 * - Main content area (tabs + panels)
 *
 * The Shell is domain-agnostic - it just provides layout structure.
 */
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
const shellVariants = cva("grid h-screen w-screen overflow-hidden bg-bg-0 text-text font-sans");
/**
 * Shell - The main application container
 *
 * Provides a CSS Grid layout with sidenav and content areas.
 */
export function Shell({ sidenav, children, sidenavCollapsed = false, sidenavWidth = "220px", sidenavCollapsedWidth = "48px", className, style, }) {
    const currentSidenavWidth = sidenavCollapsed
        ? sidenavCollapsedWidth
        : sidenavWidth;
    return (_jsxs("div", { className: cn(shellVariants(), className), style: {
            gridTemplateColumns: sidenav ? `${currentSidenavWidth} 1fr` : "1fr",
            ...style,
        }, children: [sidenav && (_jsx("aside", { className: "flex flex-col bg-bg-1 border-r border-border overflow-hidden transition-[width] duration-normal", children: sidenav })), _jsx("main", { className: "flex flex-col overflow-hidden min-w-0", children: children })] }));
}
