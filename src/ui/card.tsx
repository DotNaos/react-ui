import { Card as HeroCard } from "@heroui/react";
import type { ReactNode } from "react";
import { useTheme } from "../components/theme-provider";
import {
  Card as ShadcnCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shadcn";

export interface CardProps {
  children: ReactNode;
  description?: string;
  footer?: ReactNode;
  title?: string;
}

export function Card({ children, description, footer, title }: CardProps) {
  const { componentLibrary } = useTheme();

  if (componentLibrary === "heroui") {
    return (
      <HeroCard data-ui-library="heroui" variant="default">
        {title || description ? (
          <HeroCard.Header>
            {title ? <HeroCard.Title>{title}</HeroCard.Title> : null}
            {description ? (
              <HeroCard.Description>{description}</HeroCard.Description>
            ) : null}
          </HeroCard.Header>
        ) : null}
        <HeroCard.Content>{children}</HeroCard.Content>
        {footer ? <HeroCard.Footer>{footer}</HeroCard.Footer> : null}
      </HeroCard>
    );
  }

  return (
    <ShadcnCard data-ui-library="shadcn">
      {title || description ? (
        <CardHeader>
          {title ? <CardTitle>{title}</CardTitle> : null}
          {description ? <CardDescription>{description}</CardDescription> : null}
        </CardHeader>
      ) : null}
      <CardContent>{children}</CardContent>
      {footer ? <CardFooter>{footer}</CardFooter> : null}
    </ShadcnCard>
  );
}
