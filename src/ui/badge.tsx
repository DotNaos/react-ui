import { Badge as HeroBadge } from "@heroui/react";
import type { ReactNode } from "react";
import { useTheme } from "../components/theme-provider";
import { Badge as PrimitiveBadge } from "../primitives";
import type { BadgeTone } from "./types";

export interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
}

export function Badge({ children, tone = "default" }: BadgeProps) {
  const { componentLibrary } = useTheme();

  if (componentLibrary === "heroui") {
    return (
      <HeroBadge
        color={tone}
        data-ui-library="heroui"
        size="md"
        variant={tone === "default" ? "secondary" : "primary"}
      >
        {children}
      </HeroBadge>
    );
  }

  return (
    <PrimitiveBadge variant={tone}>{children}</PrimitiveBadge>
  );
}
