import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { designTokens } from "@dotnaos/design-system";
import { Pressable, View } from "react-native";
import { Text } from "./Text";
const buttonHeights = {
    sm: 36,
    md: 44,
    lg: 52,
};
const variantStyles = {
    primary: {
        backgroundColor: designTokens.colors.accent,
        borderColor: designTokens.colors.accent,
    },
    secondary: {
        backgroundColor: designTokens.colors.surfaceMuted,
        borderColor: designTokens.colors.border,
    },
    outline: {
        backgroundColor: "transparent",
        borderColor: designTokens.colors.border,
    },
    ghost: {
        backgroundColor: "transparent",
        borderColor: "transparent",
    },
    danger: {
        backgroundColor: designTokens.colors.danger,
        borderColor: designTokens.colors.danger,
    },
};
export function Button({ children, disabled = false, leadingIcon, size = "md", style, trailingIcon, variant = "primary", ...props }) {
    return (_jsxs(Pressable, { accessibilityRole: "button", ...props, disabled: disabled, style: ({ pressed }) => [
            {
                alignItems: "center",
                borderRadius: designTokens.radii[4],
                borderWidth: 1,
                flexDirection: "row",
                gap: designTokens.spacing[2],
                justifyContent: "center",
                minHeight: buttonHeights[size],
                opacity: disabled ? 0.5 : pressed ? 0.85 : 1,
                paddingHorizontal: designTokens.spacing[3],
                paddingVertical: designTokens.spacing[2],
            },
            variantStyles[variant],
            style,
        ], children: [leadingIcon ? _jsx(View, { children: leadingIcon }) : null, typeof children === "string" ? (_jsx(Text, { color: variant === "secondary" || variant === "outline" || variant === "ghost" ? "text" : "text", children: children })) : children, trailingIcon ? _jsx(View, { children: trailingIcon }) : null] }));
}
