import type { ReactNode } from "react";
import type { ButtonSize, ButtonVariant } from "./types";
export interface ButtonProps {
    ariaLabel?: string;
    children?: ReactNode;
    disabled?: boolean;
    fullWidth?: boolean;
    leadingIcon?: ReactNode;
    onPress?: () => void;
    size?: ButtonSize;
    trailingIcon?: ReactNode;
    type?: "button" | "submit" | "reset";
    variant?: ButtonVariant;
}
export declare function Button({ ariaLabel, children, disabled, fullWidth, leadingIcon, onPress, size, trailingIcon, type, variant, }: ButtonProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=button.d.ts.map