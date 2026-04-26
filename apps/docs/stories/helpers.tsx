import { File, FolderOpen, TerminalSquare } from "lucide-react";
import type { ReactNode } from "react";

export function StoryFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "flex min-h-screen items-center justify-center p-8 text-[var(--foreground)]",
        "bg-[var(--background)] transition-colors duration-200",
        className,
      ].join(" ").trim()}
    >
      {children}
    </div>
  );
}

export function StorySurface({
  children,
  className = "",
  widthClassName = "max-w-3xl",
}: {
  children: ReactNode;
  className?: string;
  widthClassName?: string;
}) {
  return (
    <div
      className={[
        `w-full ${widthClassName} rounded-3xl p-6`,
        "border border-[color:var(--separator)]",
        "bg-[var(--surface)] text-[var(--surface-foreground)]",
        "shadow-[var(--surface-shadow)] transition-colors duration-200",
        className,
      ].join(" ").trim()}
    >
      {children}
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
        { name: "react-ui", path: "/packages/react-ui", isFile: false, children: [] },
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
