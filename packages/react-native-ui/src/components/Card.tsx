import { designTokens, type SizeIndex } from "@dotnaos/design-system";
import type { PropsWithChildren } from "react";
import { View, type StyleProp, type ViewProps, type ViewStyle } from "react-native";

export interface CardProps extends PropsWithChildren<ViewProps> {
  padding?: SizeIndex;
  radius?: keyof typeof designTokens.radii;
  style?: StyleProp<ViewStyle>;
}

export function Card({ children, padding = 3, radius = 4, style, ...props }: CardProps) {
  return (
    <View
      {...props}
      style={[
        {
          backgroundColor: designTokens.colors.surface,
          borderColor: designTokens.colors.border,
          borderRadius: designTokens.radii[radius],
          borderWidth: 1,
          padding: designTokens.spacing[padding],
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}
