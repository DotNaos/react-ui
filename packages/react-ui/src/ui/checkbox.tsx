import { Checkbox as HeroCheckbox } from "@heroui/react";
import { useTheme } from "../components/theme-provider";
import { Checkbox as ShadcnCheckbox } from "../shadcn";

export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  description?: string;
  disabled?: boolean;
  label: string;
  name?: string;
  onCheckedChange?: (checked: boolean) => void;
}

export function Checkbox({
  checked,
  defaultChecked,
  description,
  disabled = false,
  label,
  name,
  onCheckedChange,
}: CheckboxProps) {
  const { componentLibrary } = useTheme();

  if (componentLibrary === "heroui") {
    return (
      <HeroCheckbox
        data-ui-library="heroui"
        defaultSelected={defaultChecked}
        isDisabled={disabled}
        isSelected={checked}
        name={name}
        onChange={onCheckedChange}
        variant="secondary"
      >
        <div className="flex flex-col gap-1">
          <span>{label}</span>
          {description ? (
            <span className="text-sm text-zinc-400">{description}</span>
          ) : null}
        </div>
      </HeroCheckbox>
    );
  }

  return (
    <label className="flex items-start gap-3">
      <ShadcnCheckbox
        checked={checked}
        data-ui-library="shadcn"
        defaultChecked={defaultChecked}
        disabled={disabled}
        name={name}
        onCheckedChange={(value) => onCheckedChange?.(Boolean(value))}
      />
      <span className="flex flex-col gap-1">
        <span>{label}</span>
        {description ? (
          <span className="text-sm text-zinc-400">{description}</span>
        ) : null}
      </span>
    </label>
  );
}
