import { ListBox, Select as HeroSelect } from "@heroui/react";
import { useTheme } from "../components/theme-provider";
import {
  Select as ShadcnSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../shadcn";
import type { SelectOption } from "./types";

export interface SelectProps {
  ariaLabel?: string;
  defaultValue?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  onValueChange?: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  value?: string;
}

export function Select({
  ariaLabel,
  defaultValue,
  disabled = false,
  fullWidth = true,
  onValueChange,
  options,
  placeholder = "Select an option",
  value,
}: SelectProps) {
  const { componentLibrary } = useTheme();

  if (componentLibrary === "heroui") {
    return (
      <HeroSelect
        aria-label={ariaLabel}
        data-ui-library="heroui"
        defaultSelectedKey={value === undefined ? defaultValue : undefined}
        fullWidth={fullWidth}
        isDisabled={disabled}
        onSelectionChange={(key) => {
          if (key != null) {
            onValueChange?.(String(key));
          }
        }}
        placeholder={placeholder}
        selectedKey={value}
        variant="secondary"
      >
        <HeroSelect.Trigger>
          <HeroSelect.Value />
          <HeroSelect.Indicator />
        </HeroSelect.Trigger>
        <HeroSelect.Popover>
          <ListBox items={options}>
            {(item) => (
              <ListBox.Item id={item.value} textValue={item.label}>
                {item.label}
              </ListBox.Item>
            )}
          </ListBox>
        </HeroSelect.Popover>
      </HeroSelect>
    );
  }

  return (
    <ShadcnSelect
      defaultValue={defaultValue}
      disabled={disabled}
      onValueChange={onValueChange}
      value={value}
    >
      <SelectTrigger
        aria-label={ariaLabel}
        className={fullWidth ? "w-full" : "w-56"}
        data-ui-library="shadcn"
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </ShadcnSelect>
  );
}
