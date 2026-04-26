import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card as HeroCard } from "@heroui/react";
import { useTheme } from "../components/theme-provider";
import { Card as ShadcnCard, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "../shadcn";
export function Card({ children, description, footer, title }) {
    const { componentLibrary } = useTheme();
    if (componentLibrary === "heroui") {
        return (_jsxs(HeroCard, { "data-ui-library": "heroui", variant: "default", children: [title || description ? (_jsxs(HeroCard.Header, { children: [title ? _jsx(HeroCard.Title, { children: title }) : null, description ? (_jsx(HeroCard.Description, { children: description })) : null] })) : null, _jsx(HeroCard.Content, { children: children }), footer ? _jsx(HeroCard.Footer, { children: footer }) : null] }));
    }
    return (_jsxs(ShadcnCard, { "data-ui-library": "shadcn", children: [title || description ? (_jsxs(CardHeader, { children: [title ? _jsx(CardTitle, { children: title }) : null, description ? _jsx(CardDescription, { children: description }) : null] })) : null, _jsx(CardContent, { children: children }), footer ? _jsx(CardFooter, { children: footer }) : null] }));
}
