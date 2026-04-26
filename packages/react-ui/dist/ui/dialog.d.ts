import type { ReactNode } from "react";
export interface DialogProps {
    actionLabel?: string;
    children: ReactNode;
    description?: string;
    onAction?: () => void;
    title: string;
    triggerLabel: string;
}
export declare function Dialog({ actionLabel, children, description, onAction, title, triggerLabel, }: DialogProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=dialog.d.ts.map