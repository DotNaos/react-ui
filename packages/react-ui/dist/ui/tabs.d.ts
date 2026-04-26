import type { TabItem } from "./types";
export interface TabsProps {
    defaultValue?: string;
    items: TabItem[];
    onValueChange?: (value: string) => void;
    value?: string;
}
export declare function Tabs({ defaultValue, items, onValueChange, value, }: TabsProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=tabs.d.ts.map