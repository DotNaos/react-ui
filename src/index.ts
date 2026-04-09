// Design System Tokens (import this CSS in your app)
import "./tokens.css";

// Scale utilities
export * from "./scale";

// Primitives
export { Center, type CenterProps } from "./primitives/Center";
export { Divider, type DividerProps } from "./primitives/Divider";
export { Grid, type GridProps } from "./primitives/Grid";
export { Spacer, type SpacerProps } from "./primitives/Spacer";
export { Stack, type StackProps } from "./primitives/Stack";
export { Box, type BoxProps } from "./primitives/Box";
export {
  Card as PrimitiveCard,
  type CardProps as PrimitiveCardProps,
} from "./primitives/Card";
export { Scrollable, type ScrollableProps } from "./primitives/Scrollable";
export {
  Badge as PrimitiveBadge,
  type BadgeProps as PrimitiveBadgeProps,
  type BadgeVariant,
} from "./primitives/Badge";
export { FileIcon, type FileIconProps } from "./primitives/FileIcon";
export {
  Heading,
  type HeadingLevel,
  type HeadingProps,
} from "./primitives/Heading";
export {
  Icon,
  type IconColor,
  type IconComponent,
  type IconProps,
  type IconSize,
} from "./primitives/Icon";
export {
  Text,
  type TextColor,
  type TextProps,
  type TextSize,
} from "./primitives/Text";
export {
  Spinner,
  type SpinnerProps,
  type SpinnerSize,
} from "./primitives/Spinner";

// Shell components
export * from "./shell";

// Closed wrapper components
export * from "./ui";

// Theme (existing)
export * from "./components/theme-provider";
export * from "./components/theme-toggle";
export * from "./components/component-library-toggle";
export * from "./components/tree-variants";

// Utilities
export { cn } from "./lib/utils";
