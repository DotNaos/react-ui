import { jsx as _jsx } from "react/jsx-runtime";
import { designTokens } from "@dotnaos/design-system";
import { View } from "react-native";
export function Card({ children, padding = 3, radius = 4, style, ...props }) {
    return (_jsx(View, { ...props, style: [
            {
                backgroundColor: designTokens.colors.surface,
                borderColor: designTokens.colors.border,
                borderRadius: designTokens.radii[radius],
                borderWidth: 1,
                padding: designTokens.spacing[padding],
            },
            style,
        ], children: children }));
}
