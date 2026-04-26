import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Checkbox as HeroCheckbox } from "@heroui/react";
import { useTheme } from "../components/theme-provider";
import { Checkbox as ShadcnCheckbox } from "../shadcn";
export function Checkbox({ checked, defaultChecked, description, disabled = false, label, name, onCheckedChange, }) {
    const { componentLibrary } = useTheme();
    if (componentLibrary === "heroui") {
        return (_jsx(HeroCheckbox, { "data-ui-library": "heroui", defaultSelected: defaultChecked, isDisabled: disabled, isSelected: checked, name: name, onChange: onCheckedChange, variant: "secondary", children: _jsxs("div", { className: "flex flex-col gap-1", children: [_jsx("span", { children: label }), description ? (_jsx("span", { className: "text-sm text-zinc-400", children: description })) : null] }) }));
    }
    return (_jsxs("label", { className: "flex items-start gap-3", children: [_jsx(ShadcnCheckbox, { checked: checked, "data-ui-library": "shadcn", defaultChecked: defaultChecked, disabled: disabled, name: name, onCheckedChange: (value) => onCheckedChange?.(Boolean(value)) }), _jsxs("span", { className: "flex flex-col gap-1", children: [_jsx("span", { children: label }), description ? (_jsx("span", { className: "text-sm text-zinc-400", children: description })) : null] })] }));
}
