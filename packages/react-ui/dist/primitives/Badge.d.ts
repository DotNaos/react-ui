import { type VariantProps } from "class-variance-authority";
import type { CSSProperties, ReactNode } from "react";
export type BadgeVariant = "default" | "accent" | "danger" | "warning" | "success";
declare const badgeVariants: (props?: ({
    variant?: "default" | "accent" | "danger" | "warning" | "success" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface BadgeProps extends VariantProps<typeof badgeVariants> {
    children: ReactNode;
    /** Variant (default/accent/danger/warning/success) */
    variant?: BadgeVariant;
    /** Additional className */
    className?: string;
    /** Additional inline styles */
    style?: CSSProperties;
}
/**
 * Badge - Small label/count
 */
export declare function Badge({ children, variant, className, style, }: BadgeProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Badge.d.ts.map