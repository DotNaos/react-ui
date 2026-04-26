import { Button as HeroButton, Dropdown as HeroDropdown } from "@heroui/react";
import type { ReactNode } from "react";
import { useTheme } from "../components/theme-provider";
import {
  Button as ShadcnButton,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../shadcn";
import type { ButtonSize, ButtonVariant, MenuItem } from "./types";

export interface MenuButtonProps {
  align?: "start" | "end";
  ariaLabel?: string;
  icon?: ReactNode;
  items: MenuItem[];
  label?: string;
  onAction: (id: string) => void;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

function mapShadcnVariant(variant: ButtonVariant): "default" | "destructive" | "outline" | "secondary" | "ghost" {
  switch (variant) {
    case "danger":
      return "destructive";
    case "secondary":
      return "secondary";
    case "outline":
      return "outline";
    case "ghost":
      return "ghost";
    case "primary":
    default:
      return "default";
  }
}

function mapShadcnSize(size: ButtonSize): "default" | "sm" | "lg" | "icon" {
  switch (size) {
    case "sm":
      return "sm";
    case "lg":
      return "lg";
    case "icon":
      return "icon";
    case "md":
    default:
      return "default";
  }
}

export function MenuButton({
  align = "start",
  ariaLabel,
  icon,
  items,
  label,
  onAction,
  size = "md",
  variant = "outline",
}: MenuButtonProps) {
  const { componentLibrary } = useTheme();
  const content = (
    <>
      {icon}
      {label}
    </>
  );

  if (componentLibrary === "heroui") {
    return (
      <HeroDropdown data-ui-library="heroui">
        <HeroButton
          aria-label={ariaLabel}
          data-ui-library="heroui"
          fullWidth={false}
          isIconOnly={!label && Boolean(icon)}
          onPress={() => undefined}
          size={size === "icon" ? "md" : size}
          variant={variant}
        >
          {content}
        </HeroButton>
        <HeroDropdown.Popover>
          <HeroDropdown.Menu onAction={(key) => onAction(String(key))}>
            {items.map((item) => (
              <HeroDropdown.Item
                id={item.id}
                key={item.id}
                textValue={item.label}
                variant={item.tone === "danger" ? "danger" : undefined}
              >
                {item.label}
              </HeroDropdown.Item>
            ))}
          </HeroDropdown.Menu>
        </HeroDropdown.Popover>
      </HeroDropdown>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ShadcnButton
          aria-label={ariaLabel}
          data-ui-library="shadcn"
          size={mapShadcnSize(size)}
          variant={mapShadcnVariant(variant)}
        >
          {content}
        </ShadcnButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align}>
        {items.map((item) => (
          <DropdownMenuItem
            key={item.id}
            onClick={() => onAction(item.id)}
            variant={item.tone === "danger" ? "destructive" : "default"}
          >
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
