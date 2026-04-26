import { jsx as _jsx } from "react/jsx-runtime";
import { designTokens } from "@dotnaos/design-system";
import { View } from "react-native";
const alignItems = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    stretch: "stretch",
};
const justifyContent = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    between: "space-between",
    around: "space-around",
};
export function Stack({ align = "stretch", children, direction = "vertical", gap = 2, justify = "start", style, ...props }) {
    return (_jsx(View, { ...props, style: [
            {
                alignItems: alignItems[align],
                flexDirection: direction === "vertical" ? "column" : "row",
                gap: designTokens.spacing[gap],
                justifyContent: justifyContent[justify],
            },
            style,
        ], children: children }));
}
