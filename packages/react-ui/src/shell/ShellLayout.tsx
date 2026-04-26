import type { ReactElement, ReactNode } from "react";
import { cn } from "@dotnaos/design-system/lib/utils";

export type ShellSlot = ReactNode;

export interface ShellLayoutProps {
  content: ShellSlot;
  header?: ShellSlot;
  sidebar?: ShellSlot;
  inspector?: ShellSlot;
  footer?: ShellSlot;
  className?: string;
  headerClassName?: string;
  sidebarClassName?: string;
  contentClassName?: string;
  inspectorClassName?: string;
  footerClassName?: string;
}

export function ShellLayout({
  content,
  header,
  sidebar,
  inspector,
  footer,
  className,
  headerClassName,
  sidebarClassName,
  contentClassName,
  inspectorClassName,
  footerClassName,
}: ShellLayoutProps): ReactElement {
  return (
    <section
      className={cn(
        "flex min-h-[60vh] w-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-white/75 shadow-sm",
        className,
      )}
    >
      {header ? (
        <header
          className={cn(
            "flex items-center gap-4 border-b border-border/60 bg-white/80 px-6 py-4",
            headerClassName,
          )}
        >
          {header}
        </header>
      ) : null}

      <div className="flex min-h-0 flex-1">
        {sidebar ? (
          <aside
            className={cn(
              "w-64 shrink-0 border-r border-border/60 bg-white/70 px-4 py-6",
              sidebarClassName,
            )}
          >
            {sidebar}
          </aside>
        ) : null}

        <main className={cn("flex min-w-0 flex-1 flex-col", contentClassName)}>{content}</main>

        {inspector ? (
          <aside
            className={cn(
              "w-72 shrink-0 border-l border-border/60 bg-white/70 px-4 py-6",
              inspectorClassName,
            )}
          >
            {inspector}
          </aside>
        ) : null}
      </div>

      {footer ? (
        <footer
          className={cn(
            "flex items-center justify-between border-t border-border/60 bg-white/80 px-6 py-3 text-sm text-muted-foreground",
            footerClassName,
          )}
        >
          {footer}
        </footer>
      ) : null}
    </section>
  );
}
