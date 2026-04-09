import { cva } from "class-variance-authority";

export const treeRowVariants = cva(
  "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors cursor-pointer select-none group/row relative",
  {
    variants: {
      selected: {
        true: "bg-blue-600/20 dark:bg-blue-500/25 text-blue-700 dark:text-blue-300 font-semibold ring-1 ring-blue-500/30",
        false: "hover:bg-accent/50 text-foreground/80 hover:text-foreground",
      },
      isFolder: {
        true: "",
        false: "active:scale-[0.99]",
      },
    },
    defaultVariants: {
      selected: false,
      isFolder: false,
    },
  }
);
