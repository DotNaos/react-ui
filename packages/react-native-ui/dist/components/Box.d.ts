import { designTokens, type SizeIndex } from "@dotnaos/design-system";
import type { PropsWithChildren } from "react";
import { type StyleProp, type ViewProps, type ViewStyle } from "react-native";
export interface BoxProps extends PropsWithChildren<ViewProps> {
    backgroundColor?: keyof typeof designTokens.colors;
    padding?: SizeIndex;
    radius?: keyof typeof designTokens.radii;
    style?: StyleProp<ViewStyle>;
}
export declare function Box({ backgroundColor, children, padding, radius, style, ...props }: BoxProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Box.d.ts.map