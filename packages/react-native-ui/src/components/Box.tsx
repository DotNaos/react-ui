import { designTokens, getSize, type SizeIndex } from "@dotnaos/design-system";
import type { PropsWithChildren } from "react";
import { View, type StyleProp, type ViewProps, type ViewStyle } from "react-native";

export interface BoxProps extends PropsWithChildren<ViewProps> {
  backgroundColor?: keyof typeof designTokens.colors;
  padding?: SizeIndex;
  radius?: keyof typeof designTokens.radii;
  style?: StyleProp<ViewStyle>;
}

export function Box({
  backgroundColor,
  children,
  padding,
  radius,
  style,
  ...props
}: BoxProps) {
  return (
    <View
      {...props}
      style={[
        backgroundColor ? { backgroundColor: designTokens.colors[backgroundColor] } : null,
        padding ? { padding: Number.parseFloat(getSize(padding)) * 16 } : null,
        radius !== undefined ? { borderRadius: designTokens.radii[radius] } : null,
        style,
      ]}
    >
      {children}
    </View>
  );
}
