/**
 * Shell Types
 *
 * Domain-agnostic types for the Shell layout and tab management.
 */
// --------------------------------------------------
// Default State
// --------------------------------------------------
export const defaultSplitState = {
    enabled: false,
    leftTabId: null,
    rightTabId: null,
    ratio: 0.5,
    direction: "horizontal",
};
export const defaultShellState = {
    tabs: [],
    activeTabId: null,
    split: defaultSplitState,
    sidenavCollapsed: false,
    sidenavActiveItem: null,
};
