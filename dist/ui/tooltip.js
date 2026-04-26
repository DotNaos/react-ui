import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tooltip as HeroTooltip } from "@heroui/react";
import { useTheme } from "../components/theme-provider";
import { Tooltip as ShadcnTooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "../shadcn";
export function Tooltip({ children, content }) {
    const { componentLibrary } = useTheme();
    if (componentLibrary === "heroui") {
        return (_jsxs(HeroTooltip, { children: [_jsx(HeroTooltip.Trigger, { children: children }), _jsx(HeroTooltip.Content, { children: content })] }));
    }
    return (_jsx(TooltipProvider, { children: _jsxs(ShadcnTooltip, { children: [_jsx(TooltipTrigger, { asChild: true, children: children }), _jsx(TooltipContent, { children: content })] }) }));
}
