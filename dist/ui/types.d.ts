import type { ReactNode } from "react";
export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg" | "icon";
export type BadgeTone = "default" | "accent" | "danger" | "warning" | "success";
export type SelectOption = {
    label: string;
    value: string;
};
export type MenuItem = {
    id: string;
    label: string;
    tone?: "default" | "danger";
};
export type RadioOption = {
    description?: string;
    label: string;
    value: string;
};
export type TabItem = {
    content: ReactNode;
    id: string;
    label: string;
};
export type AccordionItem = {
    content: ReactNode;
    id: string;
    label: string;
};
//# sourceMappingURL=types.d.ts.map