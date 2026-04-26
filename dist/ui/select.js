import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ListBox, Select as HeroSelect } from "@heroui/react";
import { useTheme } from "../components/theme-provider";
import { Select as ShadcnSelect, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "../shadcn";
export function Select({ ariaLabel, defaultValue, disabled = false, fullWidth = true, onValueChange, options, placeholder = "Select an option", value, }) {
    const { componentLibrary } = useTheme();
    if (componentLibrary === "heroui") {
        return (_jsxs(HeroSelect, { "aria-label": ariaLabel, "data-ui-library": "heroui", defaultSelectedKey: value === undefined ? defaultValue : undefined, fullWidth: fullWidth, isDisabled: disabled, onSelectionChange: (key) => {
                if (key != null) {
                    onValueChange?.(String(key));
                }
            }, placeholder: placeholder, selectedKey: value, variant: "secondary", children: [_jsxs(HeroSelect.Trigger, { children: [_jsx(HeroSelect.Value, {}), _jsx(HeroSelect.Indicator, {})] }), _jsx(HeroSelect.Popover, { children: _jsx(ListBox, { items: options, children: (item) => (_jsx(ListBox.Item, { id: item.value, textValue: item.label, children: item.label })) }) })] }));
    }
    return (_jsxs(ShadcnSelect, { defaultValue: defaultValue, disabled: disabled, onValueChange: onValueChange, value: value, children: [_jsx(SelectTrigger, { "aria-label": ariaLabel, className: fullWidth ? "w-full" : "w-56", "data-ui-library": "shadcn", children: _jsx(SelectValue, { placeholder: placeholder }) }), _jsx(SelectContent, { children: options.map((option) => (_jsx(SelectItem, { value: option.value, children: option.label }, option.value))) })] }));
}
