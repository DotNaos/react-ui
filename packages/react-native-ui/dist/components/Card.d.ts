import { designTokens, type SizeIndex } from "@dotnaos/design-system";
import type { PropsWithChildren } from "react";
import { type StyleProp, type ViewProps, type ViewStyle } from "react-native";
export interface CardProps extends PropsWithChildren<ViewProps> {
    padding?: SizeIndex;
    radius?: keyof typeof designTokens.radii;
    style?: StyleProp<ViewStyle>;
}
export declare function Card({ children, padding, radius, style, ...props }: CardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Card.d.ts.map