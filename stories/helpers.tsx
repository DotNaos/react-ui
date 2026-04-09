import { File, Folder, FolderOpen, TerminalSquare } from "lucide-react";
import type { ReactNode } from "react";

export function StorySection({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <header className="mb-6 space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2>
        {description ? <p className="max-w-3xl text-sm text-white/60">{description}</p> : null}
      </header>
      {children}
    </section>
  );
}

export function StoryGrid({ children }: { children: ReactNode }) {
  return <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{children}</div>;
}

export function StoryCard({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-[22px] border border-white/10 bg-black/25 p-5 ${className}`}>
      <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/45">{title}</h3>
      <div>{children}</div>
    </div>
  );
}

export const sampleTree = {
  name: "root",
  path: "/",
  isFile: false,
  children: [
    {
      name: "apps",
      path: "/apps",
      isFile: false,
      children: [
        {
          name: "web",
          path: "/apps/web",
          isFile: false,
          children: [
            { name: "page.tsx", path: "/apps/web/page.tsx", isFile: true, children: [] },
            { name: "layout.tsx", path: "/apps/web/layout.tsx", isFile: true, children: [] },
          ],
        },
      ],
    },
    {
      name: "packages",
      path: "/packages",
      isFile: false,
      children: [
        { name: "ui", path: "/packages/ui", isFile: false, children: [] },
        { name: "README.md", path: "/packages/README.md", isFile: true, children: [] },
      ],
    },
  ],
};

export function sampleFileIcon(filename: string) {
  if (filename.endsWith(".tsx")) return <TerminalSquare className="h-4 w-4" />;
  if (filename.endsWith(".md")) return <File className="h-4 w-4" />;
  return filename.includes(".") ? <File className="h-4 w-4" /> : <FolderOpen className="h-4 w-4" />;
}

export const shellTabs = [
  { id: "home", label: "Overview", active: true },
  { id: "notes", label: "Notes.tsx" },
  { id: "settings", label: "Settings.json" },
];

export const sideItems = [
  { id: "inbox", label: "Inbox", active: true },
  { id: "library", label: "Library" },
  { id: "archive", label: "Archive" },
];

