import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Radio as HeroRadio, RadioGroup as HeroRadioGroup } from "@heroui/react";
import { useTheme } from "../components/theme-provider";
import { RadioGroup as ShadcnRadioGroup, RadioGroupItem } from "../shadcn";
export function RadioGroup({ defaultValue, disabled = false, name, onValueChange, options, orientation = "vertical", value, }) {
    const { componentLibrary } = useTheme();
    if (componentLibrary === "heroui") {
        return (_jsx(HeroRadioGroup, { "data-ui-library": "heroui", defaultValue: defaultValue, isDisabled: disabled, name: name, onChange: (value) => onValueChange?.(String(value)), orientation: orientation, value: value, variant: "secondary", children: options.map((option) => (_jsx(HeroRadio, { value: option.value, children: _jsxs("div", { className: "flex flex-col gap-1", children: [_jsx("span", { children: option.label }), option.description ? (_jsx("span", { className: "text-sm text-zinc-400", children: option.description })) : null] }) }, option.value))) }));
    }
    return (_jsx(ShadcnRadioGroup, { className: orientation === "horizontal" ? "flex gap-6" : undefined, "data-ui-library": "shadcn", defaultValue: defaultValue, disabled: disabled, name: name, onValueChange: onValueChange, value: value, children: options.map((option) => (_jsxs("label", { className: "flex items-start gap-3", children: [_jsx(RadioGroupItem, { value: option.value }), _jsxs("span", { className: "flex flex-col gap-1", children: [_jsx("span", { children: option.label }), option.description ? (_jsx("span", { className: "text-sm text-zinc-400", children: option.description })) : null] })] }, option.value))) }));
}
