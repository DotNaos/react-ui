import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import * as React from "react";
declare const Collapsible: {
    ({ className, ...props }: React.ComponentProps<typeof CollapsiblePrimitive.Root>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const CollapsibleTrigger: React.ForwardRefExoticComponent<Omit<CollapsiblePrimitive.CollapsibleTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const CollapsibleContent: React.ForwardRefExoticComponent<Omit<CollapsiblePrimitive.CollapsibleContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { Collapsible, CollapsibleContent, CollapsibleTrigger };
//# sourceMappingURL=collapsible.d.ts.map