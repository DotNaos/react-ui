import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import * as React from "react";

import { cn } from "../lib/utils";

const Collapsible = ({
  className,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) => (
  <CollapsiblePrimitive.Root
    data-slot="collapsible"
    className={cn("w-full", className)}
    {...props}
  />
);
Collapsible.displayName = "Collapsible";

const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <CollapsiblePrimitive.Trigger
    ref={ref}
    data-slot="collapsible-trigger"
    className={cn("flex w-full items-center", className)}
    {...props}
  />
));
CollapsibleTrigger.displayName = CollapsiblePrimitive.Trigger.displayName;

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>
>(({ className, ...props }, ref) => (
  <CollapsiblePrimitive.Content
    ref={ref}
    data-slot="collapsible-content"
    className={cn(
      "overflow-hidden data-[state=closed]:animate-collapse-up data-[state=open]:animate-collapse-down",
      className
    )}
    {...props}
  />
));
CollapsibleContent.displayName = CollapsiblePrimitive.Content.displayName;

export { Collapsible, CollapsibleContent, CollapsibleTrigger };
