import { Moon, Sun } from "lucide-react";
import { ReactElement } from "react";
import { MenuButton } from "../ui";
import { useTheme } from "./theme-provider";

interface ThemeToggleProps {
  ariaLabel?: string;
}

const iconStyle = {
  transition: "transform 220ms cubic-bezier(0.22, 1, 0.36, 1), opacity 220ms cubic-bezier(0.22, 1, 0.36, 1)",
};

export function ThemeToggle({
  ariaLabel = "Toggle theme",
}: ThemeToggleProps): ReactElement {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <MenuButton
      ariaLabel={ariaLabel}
      icon={(
        <span className="relative flex size-4 items-center justify-center">
          <Sun
            className="absolute size-[1.1rem]"
            style={{
              ...iconStyle,
              opacity: resolvedTheme === "dark" ? 0 : 1,
              transform: resolvedTheme === "dark" ? "scale(0.7) rotate(-90deg)" : "scale(1) rotate(0deg)",
            }}
          />
          <Moon
            className="absolute size-[1.1rem]"
            style={{
              ...iconStyle,
              opacity: resolvedTheme === "dark" ? 1 : 0,
              transform: resolvedTheme === "dark" ? "scale(1) rotate(0deg)" : "scale(0.7) rotate(90deg)",
            }}
          />
        </span>
      )}
      items={[
        { id: "light", label: "Light" },
        { id: "dark", label: "Dark" },
        { id: "system", label: "System" },
      ]}
      onAction={(theme) => {
        if (theme === "light" || theme === "dark" || theme === "system") {
          setTheme(theme);
        }
      }}
      size="icon"
      variant="ghost"
    />
  );
}
