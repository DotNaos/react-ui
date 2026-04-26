/**
 * Shell Types
 *
 * Domain-agnostic types for the Shell layout and tab management.
 */
/**
 * Tab - An abstract slot in the tab bar
 *
 * The Shell doesn't know what's inside a tab - it just knows
 * how to display and manage them.
 */
export interface Tab {
    /** Unique identifier for this tab */
    id: string;
    /** View identifier (key into ViewRegistry) */
    viewId: string;
    /** Input data for the view (opaque to Shell) */
    input: unknown;
    /** Display label */
    label: string;
    /** Optional icon name */
    icon?: string;
    /** Whether the tab has unsaved changes */
    isDirty?: boolean;
    /** Whether this tab can be closed */
    closable?: boolean;
    /** Optional tooltip */
    tooltip?: string;
}
/**
 * Split configuration for side-by-side views
 */
export interface SplitState {
    /** Whether split view is enabled */
    enabled: boolean;
    /** Tab ID shown on the left/top */
    leftTabId: string | null;
    /** Tab ID shown on the right/bottom */
    rightTabId: string | null;
    /** Split ratio (0-1, where 0.5 = equal split) */
    ratio: number;
    /** Split direction */
    direction: "horizontal" | "vertical";
}
/**
 * ShellState - Layout state managed by the Shell
 *
 * This is domain-agnostic - it only knows about layout.
 */
export interface ShellState {
    /** All open tabs */
    tabs: Tab[];
    /** Currently active tab ID */
    activeTabId: string | null;
    /** Split view configuration */
    split: SplitState;
    /** Whether sidenav is collapsed */
    sidenavCollapsed: boolean;
    /** Active sidenav item ID */
    sidenavActiveItem: string | null;
}
/**
 * ShellActions - Actions that can be performed on the Shell
 */
export interface ShellActions {
    openTab: (tab: Tab) => void;
    closeTab: (tabId: string) => void;
    selectTab: (tabId: string) => void;
    updateTab: (tabId: string, updates: Partial<Tab>) => void;
    moveTab: (tabId: string, toIndex: number) => void;
    enableSplit: (leftTabId: string, rightTabId: string) => void;
    disableSplit: () => void;
    setSplitRatio: (ratio: number) => void;
    setSplitDirection: (direction: "horizontal" | "vertical") => void;
    toggleSidenav: () => void;
    setSidenavItem: (itemId: string | null) => void;
}
export declare const defaultSplitState: SplitState;
export declare const defaultShellState: ShellState;
//# sourceMappingURL=types.d.ts.map