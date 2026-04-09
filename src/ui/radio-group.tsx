import { Radio as HeroRadio, RadioGroup as HeroRadioGroup } from "@heroui/react";
import { useTheme } from "../components/theme-provider";
import { RadioGroup as ShadcnRadioGroup, RadioGroupItem } from "../shadcn";
import type { RadioOption } from "./types";

export interface RadioGroupProps {
  defaultValue?: string;
  disabled?: boolean;
  name?: string;
  onValueChange?: (value: string) => void;
  options: RadioOption[];
  orientation?: "horizontal" | "vertical";
  value?: string;
}

export function RadioGroup({
  defaultValue,
  disabled = false,
  name,
  onValueChange,
  options,
  orientation = "vertical",
  value,
}: RadioGroupProps) {
  const { componentLibrary } = useTheme();

  if (componentLibrary === "heroui") {
    return (
      <HeroRadioGroup
        data-ui-library="heroui"
        defaultValue={defaultValue}
        isDisabled={disabled}
        name={name}
        onChange={(value) => onValueChange?.(String(value))}
        orientation={orientation}
        value={value}
        variant="secondary"
      >
        {options.map((option) => (
          <HeroRadio key={option.value} value={option.value}>
            <div className="flex flex-col gap-1">
              <span>{option.label}</span>
              {option.description ? (
                <span className="text-sm text-zinc-400">{option.description}</span>
              ) : null}
            </div>
          </HeroRadio>
        ))}
      </HeroRadioGroup>
    );
  }

  return (
    <ShadcnRadioGroup
      className={orientation === "horizontal" ? "flex gap-6" : undefined}
      data-ui-library="shadcn"
      defaultValue={defaultValue}
      disabled={disabled}
      name={name}
      onValueChange={onValueChange}
      value={value}
    >
      {options.map((option) => (
        <label key={option.value} className="flex items-start gap-3">
          <RadioGroupItem value={option.value} />
          <span className="flex flex-col gap-1">
            <span>{option.label}</span>
            {option.description ? (
              <span className="text-sm text-zinc-400">{option.description}</span>
            ) : null}
          </span>
        </label>
      ))}
    </ShadcnRadioGroup>
  );
}
