import { ReactElement } from "react";
import { useTheme } from "./theme-provider";
import { MenuButton } from "../ui";

export function ComponentLibraryToggle(): ReactElement {
  const { componentLibrary, setComponentLibrary } = useTheme();

  return (
    <MenuButton
      ariaLabel="Toggle component library"
      items={[
        { id: "shadcn", label: "shadcn" },
        { id: "heroui", label: "HeroUI" },
      ]}
      label={componentLibrary === "heroui" ? "HeroUI" : "shadcn"}
      onAction={(library) => {
        if (library === "shadcn" || library === "heroui") {
          setComponentLibrary(library);
        }
      }}
      variant="outline"
    />
  );
}
