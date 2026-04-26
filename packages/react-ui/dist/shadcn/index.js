import { c as cn, a as cva } from "../chunks/tooltip-C2kWFYCr.js";
import { A, h, f, g, B, C, W, l, k, m, i, j, n, Y, Z, _, D, $, p, s, u, q, a0, a1, r, o, v, a2, x, a3, y, a4, a5, a6, a7, a8, a9, aa, ab, ac, w, I, R, z, S, G, ad, H, ae, af, ag, ah, E, F, T, L, J, K, M, O, Q, N, P, ai, aj } from "../chunks/tooltip-C2kWFYCr.js";
import { jsx } from "react/jsx-runtime";
function Empty({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "empty",
      className: cn(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",
        className
      ),
      ...props
    }
  );
}
function EmptyHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "empty-header",
      className: cn(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        className
      ),
      ...props
    }
  );
}
const emptyMediaVariants = cva(
  "flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function EmptyMedia({
  className,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "empty-icon",
      "data-variant": variant,
      className: cn(emptyMediaVariants({ variant, className })),
      ...props
    }
  );
}
function EmptyTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "empty-title",
      className: cn("text-lg font-medium tracking-tight", className),
      ...props
    }
  );
}
function EmptyDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "empty-description",
      className: cn(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        className
      ),
      ...props
    }
  );
}
function EmptyContent({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "empty-content",
      className: cn(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
        className
      ),
      ...props
    }
  );
}
export {
  A as Accordion,
  h as AccordionContent,
  f as AccordionItem,
  g as AccordionTrigger,
  B as Button,
  C as Card,
  W as CardAction,
  l as CardContent,
  k as CardDescription,
  m as CardFooter,
  i as CardHeader,
  j as CardTitle,
  n as Checkbox,
  Y as Collapsible,
  Z as CollapsibleContent,
  _ as CollapsibleTrigger,
  D as Dialog,
  $ as DialogClose,
  p as DialogContent,
  s as DialogDescription,
  u as DialogFooter,
  q as DialogHeader,
  a0 as DialogOverlay,
  a1 as DialogPortal,
  r as DialogTitle,
  o as DialogTrigger,
  v as DropdownMenu,
  a2 as DropdownMenuCheckboxItem,
  x as DropdownMenuContent,
  a3 as DropdownMenuGroup,
  y as DropdownMenuItem,
  a4 as DropdownMenuLabel,
  a5 as DropdownMenuPortal,
  a6 as DropdownMenuRadioGroup,
  a7 as DropdownMenuRadioItem,
  a8 as DropdownMenuSeparator,
  a9 as DropdownMenuShortcut,
  aa as DropdownMenuSub,
  ab as DropdownMenuSubContent,
  ac as DropdownMenuSubTrigger,
  w as DropdownMenuTrigger,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  I as Input,
  R as RadioGroup,
  z as RadioGroupItem,
  S as Select,
  G as SelectContent,
  ad as SelectGroup,
  H as SelectItem,
  ae as SelectLabel,
  af as SelectScrollDownButton,
  ag as SelectScrollUpButton,
  ah as SelectSeparator,
  E as SelectTrigger,
  F as SelectValue,
  T as Tabs,
  L as TabsContent,
  J as TabsList,
  K as TabsTrigger,
  M as Textarea,
  O as Tooltip,
  Q as TooltipContent,
  N as TooltipProvider,
  P as TooltipTrigger,
  ai as buttonVariants,
  aj as tabsListVariants
};
