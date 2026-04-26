import { Input as HeroInput } from "@heroui/react";
import type { HTMLInputTypeAttribute } from "react";
import { useTheme } from "../components/theme-provider";
import { Input as ShadcnInput } from "../shadcn";

export interface InputProps {
  ariaLabel?: string;
  autoComplete?: string;
  defaultValue?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  id?: string;
  name?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  value?: string;
}

export function Input({
  ariaLabel,
  autoComplete,
  defaultValue,
  disabled = false,
  fullWidth = true,
  id,
  name,
  onValueChange,
  placeholder,
  type = "text",
  value,
}: InputProps) {
  const { componentLibrary } = useTheme();

  if (componentLibrary === "heroui") {
    return (
      <HeroInput
        aria-label={ariaLabel}
        autoComplete={autoComplete}
        data-ui-library="heroui"
        defaultValue={defaultValue}
        disabled={disabled}
        fullWidth={fullWidth}
        id={id}
        name={name}
        onChange={(event) => onValueChange?.(event.target.value)}
        placeholder={placeholder}
        type={type}
        value={value}
        variant="secondary"
      />
    );
  }

  return (
    <ShadcnInput
      aria-label={ariaLabel}
      autoComplete={autoComplete}
      className={fullWidth ? "w-full" : undefined}
      data-ui-library="shadcn"
      defaultValue={defaultValue}
      disabled={disabled}
      id={id}
      name={name}
      onChange={(event) => onValueChange?.(event.target.value)}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
}
