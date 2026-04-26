import { Fragment as _Fragment, jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Button as HeroButton } from "@heroui/react";
import { useTheme } from "../components/theme-provider";
import { Button as ShadcnButton } from "../shadcn";
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
export function Button({ ariaLabel, children, disabled = false, fullWidth = false, leadingIcon, onPress, size = "md", trailingIcon, type = "button", variant = "primary", }) {
    const { componentLibrary } = useTheme();
    const isIconOnly = !children && Boolean(leadingIcon || trailingIcon);
    const content = (_jsxs(_Fragment, { children: [leadingIcon, children, trailingIcon] }));
    if (componentLibrary === "heroui") {
        return (_jsx(HeroButton, { "aria-label": ariaLabel, "data-ui-library": "heroui", fullWidth: fullWidth, isDisabled: disabled, isIconOnly: isIconOnly, onPress: onPress, size: size === "icon" ? "md" : size, type: type, variant: variant, children: content }));
    }
    return (_jsx(ShadcnButton, { "aria-label": ariaLabel, className: fullWidth ? "w-full" : undefined, "data-ui-library": "shadcn", disabled: disabled, onClick: onPress, size: mapShadcnSize(size), type: type, variant: mapShadcnVariant(variant), children: content }));
}
