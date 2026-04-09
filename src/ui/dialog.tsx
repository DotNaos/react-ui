import { Modal as HeroModal } from "@heroui/react";
import type { ReactNode } from "react";
import { useTheme } from "../components/theme-provider";
import {
  Dialog as ShadcnDialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button as ShadcnButton,
} from "../shadcn";
import { Button } from "./button";

export interface DialogProps {
  actionLabel?: string;
  children: ReactNode;
  description?: string;
  onAction?: () => void;
  title: string;
  triggerLabel: string;
}

export function Dialog({
  actionLabel = "Confirm",
  children,
  description,
  onAction,
  title,
  triggerLabel,
}: DialogProps) {
  const { componentLibrary } = useTheme();

  if (componentLibrary === "heroui") {
    return (
      <HeroModal>
        <Button variant="outline">{triggerLabel}</Button>
        <HeroModal.Backdrop>
          <HeroModal.Container>
            <HeroModal.Dialog>
              <HeroModal.Header>
                <HeroModal.Heading>{title}</HeroModal.Heading>
                {description ? (
                  <p className="text-sm text-zinc-400">{description}</p>
                ) : null}
              </HeroModal.Header>
              <HeroModal.Body>{children}</HeroModal.Body>
              <HeroModal.Footer>
                <HeroModal.CloseTrigger />
                <Button onPress={onAction}>{actionLabel}</Button>
              </HeroModal.Footer>
            </HeroModal.Dialog>
          </HeroModal.Container>
        </HeroModal.Backdrop>
      </HeroModal>
    );
  }

  return (
    <ShadcnDialog>
      <DialogTrigger asChild>
        <ShadcnButton variant="outline">{triggerLabel}</ShadcnButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description ? (
            <DialogDescription>{description}</DialogDescription>
          ) : null}
        </DialogHeader>
        {children}
        <DialogFooter>
          <Button onPress={onAction}>{actionLabel}</Button>
        </DialogFooter>
      </DialogContent>
    </ShadcnDialog>
  );
}
