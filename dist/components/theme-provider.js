import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useMemo, useState, } from "react";
const initialState = {
    theme: "system",
    resolvedTheme: "dark",
    setTheme: () => null,
    componentLibrary: "shadcn",
    setComponentLibrary: () => null,
};
const ThemeProviderContext = createContext(initialState);
function getSystemTheme() {
    if (typeof window === "undefined") {
        return "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}
export function ThemeProvider({ children, defaultTheme = "system", storageKey = "vite-ui-theme", defaultComponentLibrary = "shadcn", componentLibraryStorageKey = "vite-ui-component-library", ...props }) {
    const [theme, setTheme] = useState(() => {
        if (typeof window === "undefined") {
            return defaultTheme;
        }
        return window.localStorage.getItem(storageKey) || defaultTheme;
    });
    const [resolvedTheme, setResolvedTheme] = useState(() => (defaultTheme === "system" ? getSystemTheme() : defaultTheme));
    const [componentLibrary, setComponentLibrary] = useState(() => {
        if (typeof window === "undefined") {
            return defaultComponentLibrary;
        }
        return (window.localStorage.getItem(componentLibraryStorageKey)
            || defaultComponentLibrary);
    });
    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }
        const root = window.document.documentElement;
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const applyTheme = () => {
            const nextResolvedTheme = theme === "system" ? getSystemTheme() : theme;
            root.classList.remove("light", "dark");
            root.classList.add(nextResolvedTheme);
            root.style.colorScheme = nextResolvedTheme;
            root.dataset.theme = theme;
            root.dataset.resolvedTheme = nextResolvedTheme;
            setResolvedTheme(nextResolvedTheme);
        };
        applyTheme();
        const handleSystemThemeChange = () => {
            if (theme === "system") {
                applyTheme();
            }
        };
        mediaQuery.addEventListener("change", handleSystemThemeChange);
        return () => {
            mediaQuery.removeEventListener("change", handleSystemThemeChange);
        };
    }, [theme]);
    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }
        const root = window.document.documentElement;
        root.dataset.componentLibrary = componentLibrary;
    }, [componentLibrary]);
    const value = useMemo(() => ({
        theme,
        resolvedTheme,
        setTheme: (nextTheme) => {
            if (typeof window !== "undefined") {
                window.localStorage.setItem(storageKey, nextTheme);
            }
            setTheme(nextTheme);
        },
        componentLibrary,
        setComponentLibrary: (library) => {
            if (typeof window !== "undefined") {
                window.localStorage.setItem(componentLibraryStorageKey, library);
            }
            setComponentLibrary(library);
        },
    }), [
        componentLibrary,
        componentLibraryStorageKey,
        resolvedTheme,
        storageKey,
        theme,
    ]);
    return (_jsx(ThemeProviderContext.Provider, { ...props, value: value, children: children }));
}
export function useTheme() {
    const context = useContext(ThemeProviderContext);
    return context;
}
