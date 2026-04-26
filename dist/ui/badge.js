import { jsx as _jsx } from "react/jsx-runtime";
import { Badge as HeroBadge } from "@heroui/react";
import { useTheme } from "../components/theme-provider";
import { Badge as PrimitiveBadge } from "../primitives";
export function Badge({ children, tone = "default" }) {
    const { componentLibrary } = useTheme();
    if (componentLibrary === "heroui") {
        return (_jsx(HeroBadge, { color: tone, "data-ui-library": "heroui", size: "md", variant: tone === "default" ? "secondary" : "primary", children: children }));
    }
    return (_jsx(PrimitiveBadge, { variant: tone, children: children }));
}
