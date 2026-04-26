import { Fragment as _Fragment, jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Button as HeroButton, Dropdown as HeroDropdown } from "@heroui/react";
import { useTheme } from "../components/theme-provider";
import { Button as ShadcnButton, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "../shadcn";
function mapShadcnVariant(variant) {
    switch (variant) {
        case "danger":
            return "destructive";
        case "secondary":
            return "secondary";
        case "outline":
            return "outline";
        case "ghost":
            return "ghost";
        case "primary":
        default:
            return "default";
    }
}
function mapShadcnSize(size) {
    switch (size) {
        case "sm":
            return "sm";
        case "lg":
            return "lg";
        case "icon":
            return "icon";
        case "md":
        default:
            return "default";
    }
}
export function MenuButton({ align = "start", ariaLabel, icon, items, label, onAction, size = "md", variant = "outline", }) {
    const { componentLibrary } = useTheme();
    const content = (_jsxs(_Fragment, { children: [icon, label] }));
    if (componentLibrary === "heroui") {
        return (_jsxs(HeroDropdown, { "data-ui-library": "heroui", children: [_jsx(HeroButton, { "aria-label": ariaLabel, "data-ui-library": "heroui", fullWidth: false, isIconOnly: !label && Boolean(icon), onPress: () => undefined, size: size === "icon" ? "md" : size, variant: variant, children: content }), _jsx(HeroDropdown.Popover, { children: _jsx(HeroDropdown.Menu, { onAction: (key) => onAction(String(key)), children: items.map((item) => (_jsx(HeroDropdown.Item, { id: item.id, textValue: item.label, variant: item.tone === "danger" ? "danger" : undefined, children: item.label }, item.id))) }) })] }));
    }
    return (_jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsx(ShadcnButton, { "aria-label": ariaLabel, "data-ui-library": "shadcn", size: mapShadcnSize(size), variant: mapShadcnVariant(variant), children: content }) }), _jsx(DropdownMenuContent, { align: align, children: items.map((item) => (_jsx(DropdownMenuItem, { onClick: () => onAction(item.id), variant: item.tone === "danger" ? "destructive" : "default", children: item.label }, item.id))) })] }));
}
