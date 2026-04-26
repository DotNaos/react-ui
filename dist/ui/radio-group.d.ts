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
export declare function RadioGroup({ defaultValue, disabled, name, onValueChange, options, orientation, value, }: RadioGroupProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=radio-group.d.ts.map