import type { PropsWithChildren, ReactNode } from "react";
import { type PressableProps, type StyleProp, type ViewStyle } from "react-native";
export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";
export interface ButtonProps extends PropsWithChildren<Omit<PressableProps, "style">> {
    disabled?: boolean;
    leadingIcon?: ReactNode;
    size?: ButtonSize;
    style?: StyleProp<ViewStyle>;
    trailingIcon?: ReactNode;
    variant?: ButtonVariant;
}
export declare function Button({ children, disabled, leadingIcon, size, style, trailingIcon, variant, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Button.d.ts.map