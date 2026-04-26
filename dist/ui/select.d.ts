import type { SelectOption } from "./types";
export interface SelectProps {
    ariaLabel?: string;
    defaultValue?: string;
    disabled?: boolean;
    fullWidth?: boolean;
    onValueChange?: (value: string) => void;
    options: SelectOption[];
    placeholder?: string;
    value?: string;
}
export declare function Select({ ariaLabel, defaultValue, disabled, fullWidth, onValueChange, options, placeholder, value, }: SelectProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=select.d.ts.map