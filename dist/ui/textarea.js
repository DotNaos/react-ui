import { jsx as _jsx } from "react/jsx-runtime";
import { TextArea as HeroTextArea } from "@heroui/react";
import { useTheme } from "../components/theme-provider";
import { Textarea as ShadcnTextarea } from "../shadcn";
export function Textarea({ ariaLabel, defaultValue, disabled = false, fullWidth = true, id, name, onValueChange, placeholder, rows = 4, value, }) {
    const { componentLibrary } = useTheme();
    if (componentLibrary === "heroui") {
        return (_jsx(HeroTextArea, { "aria-label": ariaLabel, "data-ui-library": "heroui", defaultValue: defaultValue, disabled: disabled, fullWidth: fullWidth, id: id, name: name, onChange: (event) => onValueChange?.(event.target.value), placeholder: placeholder, rows: rows, value: value, variant: "secondary" }));
    }
    return (_jsx(ShadcnTextarea, { "aria-label": ariaLabel, className: fullWidth ? "w-full" : undefined, "data-ui-library": "shadcn", defaultValue: defaultValue, disabled: disabled, id: id, name: name, onChange: (event) => onValueChange?.(event.target.value), placeholder: placeholder, rows: rows, value: value }));
}
