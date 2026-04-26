import { jsx as _jsx } from "react/jsx-runtime";
import { designTokens, getSize } from "@dotnaos/design-system";
import { View } from "react-native";
export function Box({ backgroundColor, children, padding, radius, style, ...props }) {
    return (_jsx(View, { ...props, style: [
            backgroundColor ? { backgroundColor: designTokens.colors[backgroundColor] } : null,
            padding ? { padding: Number.parseFloat(getSize(padding)) * 16 } : null,
            radius !== undefined ? { borderRadius: designTokens.radii[radius] } : null,
            style,
        ], children: children }));
}
