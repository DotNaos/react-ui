import { type SizeIndex } from "@dotnaos/design-system";
import type { PropsWithChildren } from "react";
import { type StyleProp, type ViewProps, type ViewStyle } from "react-native";
export type StackDirection = "vertical" | "horizontal";
export type StackAlign = "start" | "center" | "end" | "stretch";
export type StackJustify = "start" | "center" | "end" | "between" | "around";
export interface StackProps extends PropsWithChildren<ViewProps> {
    align?: StackAlign;
    direction?: StackDirection;
    gap?: SizeIndex;
    justify?: StackJustify;
    style?: StyleProp<ViewStyle>;
}
export declare function Stack({ align, children, direction, gap, justify, style, ...props }: StackProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Stack.d.ts.map