import type { ReactNode } from "react";
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
export declare function MenuButton({ align, ariaLabel, icon, items, label, onAction, size, variant, }: MenuButtonProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=menu-button.d.ts.map