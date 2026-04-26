import type { PropsWithChildren } from "react";
import { type StyleProp, type TextProps as NativeTextProps, type TextStyle } from "react-native";
export type TextSize = "s" | "m" | "l";
export type TextColor = "text" | "muted" | "accent" | "danger" | "warning" | "success";
export interface TextProps extends PropsWithChildren<NativeTextProps> {
    color?: TextColor;
    mono?: boolean;
    size?: TextSize;
    style?: StyleProp<TextStyle>;
}
export declare function Text({ children, color, mono, size, style, ...props }: TextProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Text.d.ts.map