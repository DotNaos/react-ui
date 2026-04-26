import { TextArea as HeroTextArea } from "@heroui/react";
import { useTheme } from "../components/theme-provider";
import { Textarea as ShadcnTextarea } from "../shadcn";

export interface TextareaProps {
  ariaLabel?: string;
  defaultValue?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  id?: string;
  name?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  rows?: number;
  value?: string;
}

export function Textarea({
  ariaLabel,
  defaultValue,
  disabled = false,
  fullWidth = true,
  id,
  name,
  onValueChange,
  placeholder,
  rows = 4,
  value,
}: TextareaProps) {
  const { componentLibrary } = useTheme();

  if (componentLibrary === "heroui") {
    return (
      <HeroTextArea
        aria-label={ariaLabel}
        data-ui-library="heroui"
        defaultValue={defaultValue}
        disabled={disabled}
        fullWidth={fullWidth}
        id={id}
        name={name}
        onChange={(event) => onValueChange?.(event.target.value)}
        placeholder={placeholder}
        rows={rows}
        value={value}
        variant="secondary"
      />
    );
  }

  return (
    <ShadcnTextarea
      aria-label={ariaLabel}
      className={fullWidth ? "w-full" : undefined}
      data-ui-library="shadcn"
      defaultValue={defaultValue}
      disabled={disabled}
      id={id}
      name={name}
      onChange={(event) => onValueChange?.(event.target.value)}
      placeholder={placeholder}
      rows={rows}
      value={value}
    />
  );
}
