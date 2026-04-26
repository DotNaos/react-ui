import { type VariantProps } from "class-variance-authority";
import type { CSSProperties, ComponentType, SVGProps } from "react";
export type IconSize = "s" | "m" | "l";
export type IconColor = 'text' | 'muted' | 'accent' | 'danger' | 'warning' | 'success' | 'inherit';
/** Generic icon component type (compatible with lucide-react) */
export type IconComponent = ComponentType<SVGProps<SVGSVGElement> & {
    size?: number | string;
}>;
declare const iconVariants: (props?: ({
    color?: "inherit" | "text" | "accent" | "danger" | "warning" | "success" | "muted" | null | undefined;
    size?: "s" | "m" | "l" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface IconProps extends Omit<VariantProps<typeof iconVariants>, "size" | "color"> {
    /** Icon component from the icon pack */
    name: IconComponent;
    /** Size (s/m/l, default: m) */
    size?: IconSize;
    /** Color (semantic, default: text) */
    color?: IconColor;
    /**
     * Custom color override
     * @deprecated Avoid using. Use semantic `color` prop instead.
     */
    customColor?: string;
    /** Additional className */
    className?: string;
    /** Additional inline styles */
    style?: CSSProperties;
}
/**
 * Icon - Wrapper for icons with locked sizes and semantic colors
 */
export declare function Icon({ name: IconComponent, size, color, customColor, className, style, }: IconProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Icon.d.ts.map