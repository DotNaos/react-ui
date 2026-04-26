import { designTokens } from "@dotnaos/design-system";
import type { PropsWithChildren, ReactNode } from "react";
import { Pressable, View, type PressableProps, type StyleProp, type ViewStyle } from "react-native";
import { Text } from "./Text";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

const buttonHeights = {
  sm: 36,
  md: 44,
  lg: 52,
} as const;

const variantStyles: Record<ButtonVariant, ViewStyle> = {
  primary: {
    backgroundColor: designTokens.colors.accent,
    borderColor: designTokens.colors.accent,
  },
  secondary: {
    backgroundColor: designTokens.colors.surfaceMuted,
    borderColor: designTokens.colors.border,
  },
  outline: {
    backgroundColor: "transparent",
    borderColor: designTokens.colors.border,
  },
  ghost: {
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  danger: {
    backgroundColor: designTokens.colors.danger,
    borderColor: designTokens.colors.danger,
  },
};

export interface ButtonProps extends PropsWithChildren<Omit<PressableProps, "style">> {
  disabled?: boolean;
  leadingIcon?: ReactNode;
  size?: ButtonSize;
  style?: StyleProp<ViewStyle>;
  trailingIcon?: ReactNode;
  variant?: ButtonVariant;
}

export function Button({
  children,
  disabled = false,
  leadingIcon,
  size = "md",
  style,
  trailingIcon,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      {...props}
      disabled={disabled}
      style={({ pressed }) => [
        {
          alignItems: "center",
          borderRadius: designTokens.radii[4],
          borderWidth: 1,
          flexDirection: "row",
          gap: designTokens.spacing[2],
          justifyContent: "center",
          minHeight: buttonHeights[size],
          opacity: disabled ? 0.5 : pressed ? 0.85 : 1,
          paddingHorizontal: designTokens.spacing[3],
          paddingVertical: designTokens.spacing[2],
        },
        variantStyles[variant],
        style,
      ]}
    >
      {leadingIcon ? <View>{leadingIcon}</View> : null}
      {typeof children === "string" ? (
        <Text color={variant === "secondary" || variant === "outline" || variant === "ghost" ? "text" : "text"}>
          {children}
        </Text>
      ) : children}
      {trailingIcon ? <View>{trailingIcon}</View> : null}
    </Pressable>
  );
}
