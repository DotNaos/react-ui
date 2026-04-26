import type { HTMLInputTypeAttribute } from "react";
export interface InputProps {
    ariaLabel?: string;
    autoComplete?: string;
    defaultValue?: string;
    disabled?: boolean;
    fullWidth?: boolean;
    id?: string;
    name?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    value?: string;
}
export declare function Input({ ariaLabel, autoComplete, defaultValue, disabled, fullWidth, id, name, onValueChange, placeholder, type, value, }: InputProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=input.d.ts.map