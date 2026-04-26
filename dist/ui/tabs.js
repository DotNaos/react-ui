import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tabs as HeroTabs } from "@heroui/react";
import { useTheme } from "../components/theme-provider";
import { Tabs as ShadcnTabs, TabsContent, TabsList, TabsTrigger, } from "../shadcn";
export function Tabs({ defaultValue, items, onValueChange, value, }) {
    const { componentLibrary } = useTheme();
    if (componentLibrary === "heroui") {
        return (_jsxs(HeroTabs, { "data-ui-library": "heroui", defaultSelectedKey: value === undefined ? defaultValue : undefined, onSelectionChange: (key) => {
                if (key != null) {
                    onValueChange?.(String(key));
                }
            }, selectedKey: value, variant: "primary", children: [_jsxs(HeroTabs.List, { children: [items.map((item) => (_jsx(HeroTabs.Tab, { id: item.id, children: item.label }, item.id))), _jsx(HeroTabs.Indicator, {})] }), items.map((item) => (_jsx(HeroTabs.Panel, { id: item.id, children: item.content }, item.id)))] }));
    }
    return (_jsxs(ShadcnTabs, { className: "w-full", "data-ui-library": "shadcn", defaultValue: defaultValue, onValueChange: onValueChange, value: value, children: [_jsx(TabsList, { children: items.map((item) => (_jsx(TabsTrigger, { value: item.id, children: item.label }, item.id))) }), items.map((item) => (_jsx(TabsContent, { value: item.id, children: item.content }, item.id)))] }));
}
