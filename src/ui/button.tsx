import { Button as HeroButton } from "@heroui/react";
import type { ReactNode } from "react";
import { useTheme } from "../components/theme-provider";
import { Button as ShadcnButton } from "../shadcn";
import type { ButtonSize, ButtonVariant } from "./types";

export interface ButtonProps {
  ariaLabel?: string;
  children?: ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  leadingIcon?: ReactNode;
  onPress?: () => void;
  size?: ButtonSize;
  trailingIcon?: ReactNode;
  type?: "button" | "submit" | "reset";
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

export function Button({
  ariaLabel,
  children,
  disabled = false,
  fullWidth = false,
  leadingIcon,
  onPress,
  size = "md",
  trailingIcon,
  type = "button",
  variant = "primary",
}: ButtonProps) {
  const { componentLibrary } = useTheme();
  const isIconOnly = !children && Boolean(leadingIcon || trailingIcon);
  const content = (
    <>
      {leadingIcon}
      {children}
      {trailingIcon}
    </>
  );

  if (componentLibrary === "heroui") {
    return (
      <HeroButton
        aria-label={ariaLabel}
        data-ui-library="heroui"
        fullWidth={fullWidth}
        isDisabled={disabled}
        isIconOnly={isIconOnly}
        onPress={onPress}
        size={size === "icon" ? "md" : size}
        type={type}
        variant={variant}
      >
        {content}
      </HeroButton>
    );
  }

  return (
    <ShadcnButton
      aria-label={ariaLabel}
      className={fullWidth ? "w-full" : undefined}
      data-ui-library="shadcn"
      disabled={disabled}
      onClick={onPress}
      size={mapShadcnSize(size)}
      type={type}
      variant={mapShadcnVariant(variant)}
    >
      {content}
    </ShadcnButton>
  );
}
