import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

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

const initialState: ThemeProviderState = {
  theme: "system",
  resolvedTheme: "dark",
  setTheme: () => null,
  componentLibrary: "shadcn",
  setComponentLibrary: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") {
    return "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  defaultComponentLibrary = "shadcn",
  componentLibraryStorageKey = "vite-ui-component-library",
  ...props
}: ThemeProviderProps): ReactElement {
  const [theme, setTheme] = useState<Theme>(
    () => {
      if (typeof window === "undefined") {
        return defaultTheme;
      }

      return (window.localStorage.getItem(storageKey) as Theme) || defaultTheme;
    },
  );
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => (
    defaultTheme === "system" ? getSystemTheme() : defaultTheme
  ));
  const [componentLibrary, setComponentLibrary] = useState<ComponentLibrary>(
    () => {
      if (typeof window === "undefined") {
        return defaultComponentLibrary;
      }

      return (
        (window.localStorage.getItem(componentLibraryStorageKey) as ComponentLibrary)
        || defaultComponentLibrary
      );
    },
  );

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

  const value = useMemo<ThemeProviderState>(
    () => ({
      theme,
      resolvedTheme,
      setTheme: (nextTheme: Theme) => {
        if (typeof window !== "undefined") {
          window.localStorage.setItem(storageKey, nextTheme);
        }

        setTheme(nextTheme);
      },
      componentLibrary,
      setComponentLibrary: (library: ComponentLibrary) => {
        if (typeof window !== "undefined") {
          window.localStorage.setItem(componentLibraryStorageKey, library);
        }

        setComponentLibrary(library);
      },
    }),
    [
      componentLibrary,
      componentLibraryStorageKey,
      resolvedTheme,
      storageKey,
      theme,
    ],
  );

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useTheme(): ThemeProviderState {
  const context = useContext(ThemeProviderContext);

  return context;
}

export type {
  ComponentLibrary,
  ResolvedTheme,
  Theme,
  ThemeProviderProps,
  ThemeProviderState,
};
