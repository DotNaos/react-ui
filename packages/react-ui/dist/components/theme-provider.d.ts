import { ReactElement, ReactNode } from "react";
type Theme = "dark" | "light" | "system";
type ResolvedTheme = "dark" | "light";
type ComponentLibrary = "shadcn" | "heroui";
type ThemeProviderProps = {
    children: ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
    defaultComponentLibrary?: ComponentLibrary;
    componentLibraryStorageKey?: string;
};
type ThemeProviderState = {
    theme: Theme;
    resolvedTheme: ResolvedTheme;
    setTheme: (theme: Theme) => void;
    componentLibrary: ComponentLibrary;
    setComponentLibrary: (library: ComponentLibrary) => void;
};
export declare function ThemeProvider({ children, defaultTheme, storageKey, defaultComponentLibrary, componentLibraryStorageKey, ...props }: ThemeProviderProps): ReactElement;
export declare function useTheme(): ThemeProviderState;
export type { ComponentLibrary, ResolvedTheme, Theme, ThemeProviderProps, ThemeProviderState, };
//# sourceMappingURL=theme-provider.d.ts.map