import { designTokens, type SizeIndex } from "@dotnaos/design-system";
import type { PropsWithChildren } from "react";
import { View, type StyleProp, type ViewProps, type ViewStyle } from "react-native";

export type StackDirection = "vertical" | "horizontal";
export type StackAlign = "start" | "center" | "end" | "stretch";
export type StackJustify = "start" | "center" | "end" | "between" | "around";

const alignItems = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
} as const;

const justifyContent = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  between: "space-between",
  around: "space-around",
} as const;

export interface StackProps extends PropsWithChildren<ViewProps> {
  align?: StackAlign;
  direction?: StackDirection;
  gap?: SizeIndex;
  justify?: StackJustify;
  style?: StyleProp<ViewStyle>;
}

export function Stack({
  align = "stretch",
  children,
  direction = "vertical",
  gap = 2,
  justify = "start",
  style,
  ...props
}: StackProps) {
  return (
    <View
      {...props}
      style={[
        {
          alignItems: alignItems[align],
          flexDirection: direction === "vertical" ? "column" : "row",
          gap: designTokens.spacing[gap],
          justifyContent: justifyContent[justify],
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}
