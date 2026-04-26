import { jsx as _jsx } from "react/jsx-runtime";
import { Input as HeroInput } from "@heroui/react";
import { useTheme } from "../components/theme-provider";
import { Input as ShadcnInput } from "../shadcn";
export function Input({ ariaLabel, autoComplete, defaultValue, disabled = false, fullWidth = true, id, name, onValueChange, placeholder, type = "text", value, }) {
    const { componentLibrary } = useTheme();
    if (componentLibrary === "heroui") {
        return (_jsx(HeroInput, { "aria-label": ariaLabel, autoComplete: autoComplete, "data-ui-library": "heroui", defaultValue: defaultValue, disabled: disabled, fullWidth: fullWidth, id: id, name: name, onChange: (event) => onValueChange?.(event.target.value), placeholder: placeholder, type: type, value: value, variant: "secondary" }));
    }
    return (_jsx(ShadcnInput, { "aria-label": ariaLabel, autoComplete: autoComplete, className: fullWidth ? "w-full" : undefined, "data-ui-library": "shadcn", defaultValue: defaultValue, disabled: disabled, id: id, name: name, onChange: (event) => onValueChange?.(event.target.value), placeholder: placeholder, type: type, value: value }));
}
