import { Tooltip as HeroTooltip } from "@heroui/react";
import type { ReactNode } from "react";
import { useTheme } from "../components/theme-provider";
import {
  Tooltip as ShadcnTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../shadcn";

export interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
}

export function Tooltip({ children, content }: TooltipProps) {
  const { componentLibrary } = useTheme();

  if (componentLibrary === "heroui") {
    return (
      <HeroTooltip>
        <HeroTooltip.Trigger>{children}</HeroTooltip.Trigger>
        <HeroTooltip.Content>{content}</HeroTooltip.Content>
      </HeroTooltip>
    );
  }

  return (
    <TooltipProvider>
      <ShadcnTooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>{content}</TooltipContent>
      </ShadcnTooltip>
    </TooltipProvider>
  );
}
