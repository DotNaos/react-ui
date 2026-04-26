import { type VariantProps } from "class-variance-authority";
import type { CSSProperties, ReactNode } from "react";
declare const tabVariants: (props?: ({
    active?: boolean | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface TabProps extends VariantProps<typeof tabVariants> {
    /** Tab label */
    label: string;
    /** Icon to display */
    icon?: ReactNode;
    /** Whether the tab has unsaved changes */
    isDirty?: boolean;
    /** Whether the tab can be closed */
    closable?: boolean;
    /** Click handler (select tab) */
    onClick?: () => void;
    /** Close handler */
    onClose?: () => void;
    /** Additional className */
    className?: string;
    /** Additional inline styles */
    style?: CSSProperties;
}
/**
 * Tab - Single tab component
 */
export declare function Tab({ label, icon, active, isDirty, closable, onClick, onClose, className, style, }: TabProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Tab.d.ts.map