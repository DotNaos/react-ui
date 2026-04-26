import { jsx as _jsx } from "react/jsx-runtime";
import { designTokens } from "@dotnaos/design-system";
import { Text as NativeText } from "react-native";
const textSizes = {
    s: designTokens.typography.textS,
    m: designTokens.typography.textM,
    l: designTokens.typography.textL,
};
const textColors = {
    text: designTokens.colors.text,
    muted: designTokens.colors.textMuted,
    accent: designTokens.colors.accent,
    danger: designTokens.colors.danger,
    warning: designTokens.colors.warning,
    success: designTokens.colors.success,
};
export function Text({ children, color = "text", mono = false, size = "m", style, ...props }) {
    return (_jsx(NativeText, { ...props, style: [
            {
                color: textColors[color],
                fontFamily: mono ? designTokens.typography.fontMono : designTokens.typography.fontSans,
                fontSize: textSizes[size],
                lineHeight: textSizes[size] * designTokens.typography.leadingNormal,
            },
            style,
        ], children: children }));
}
