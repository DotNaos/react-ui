import { designTokens } from "@dotnaos/design-system";
import type { PropsWithChildren } from "react";
import { Text as NativeText, type StyleProp, type TextProps as NativeTextProps, type TextStyle } from "react-native";

export type TextSize = "s" | "m" | "l";
export type TextColor = "text" | "muted" | "accent" | "danger" | "warning" | "success";

const textSizes = {
  s: designTokens.typography.textS,
  m: designTokens.typography.textM,
  l: designTokens.typography.textL,
} as const;

const textColors = {
  text: designTokens.colors.text,
  muted: designTokens.colors.textMuted,
  accent: designTokens.colors.accent,
  danger: designTokens.colors.danger,
  warning: designTokens.colors.warning,
  success: designTokens.colors.success,
} as const;

export interface TextProps extends PropsWithChildren<NativeTextProps> {
  color?: TextColor;
  mono?: boolean;
  size?: TextSize;
  style?: StyleProp<TextStyle>;
}

export function Text({ children, color = "text", mono = false, size = "m", style, ...props }: TextProps) {
  return (
    <NativeText
      {...props}
      style={[
        {
          color: textColors[color],
          fontFamily: mono ? designTokens.typography.fontMono : designTokens.typography.fontSans,
          fontSize: textSizes[size],
          lineHeight: textSizes[size] * designTokens.typography.leadingNormal,
        },
        style,
      ]}
    >
      {children}
    </NativeText>
  );
}
