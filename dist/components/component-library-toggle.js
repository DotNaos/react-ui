import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from "./theme-provider";
import { MenuButton } from "../ui";
export function ComponentLibraryToggle() {
    const { componentLibrary, setComponentLibrary } = useTheme();
    return (_jsx(MenuButton, { ariaLabel: "Toggle component library", items: [
            { id: "shadcn", label: "shadcn" },
            { id: "heroui", label: "HeroUI" },
        ], label: componentLibrary === "heroui" ? "HeroUI" : "shadcn", onAction: (library) => {
            if (library === "shadcn" || library === "heroui") {
                setComponentLibrary(library);
            }
        }, variant: "outline" }));
}
