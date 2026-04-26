import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Moon, Sun } from "lucide-react";
import { MenuButton } from "../ui";
import { useTheme } from "./theme-provider";
const iconStyle = {
    transition: "transform 220ms cubic-bezier(0.22, 1, 0.36, 1), opacity 220ms cubic-bezier(0.22, 1, 0.36, 1)",
};
export function ThemeToggle({ ariaLabel = "Toggle theme", }) {
    const { resolvedTheme, setTheme } = useTheme();
    return (_jsx(MenuButton, { ariaLabel: ariaLabel, icon: (_jsxs("span", { className: "relative flex size-4 items-center justify-center", children: [_jsx(Sun, { className: "absolute size-[1.1rem]", style: {
                        ...iconStyle,
                        opacity: resolvedTheme === "dark" ? 0 : 1,
                        transform: resolvedTheme === "dark" ? "scale(0.7) rotate(-90deg)" : "scale(1) rotate(0deg)",
                    } }), _jsx(Moon, { className: "absolute size-[1.1rem]", style: {
                        ...iconStyle,
                        opacity: resolvedTheme === "dark" ? 1 : 0,
                        transform: resolvedTheme === "dark" ? "scale(1) rotate(0deg)" : "scale(0.7) rotate(90deg)",
                    } })] })), items: [
            { id: "light", label: "Light" },
            { id: "dark", label: "Dark" },
            { id: "system", label: "System" },
        ], onAction: (theme) => {
            if (theme === "light" || theme === "dark" || theme === "system") {
                setTheme(theme);
            }
        }, size: "icon", variant: "ghost" }));
}
