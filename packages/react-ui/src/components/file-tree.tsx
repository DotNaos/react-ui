import { ChevronDown, ChevronRight, File, Folder } from "lucide-react";
import { type ReactNode, useState } from "react";
import { cn } from "@dotnaos/design-system/lib/utils";
import { treeRowVariants } from "./tree-variants";

export type FileTreeNode = {
  name: string;
  path: string;
  children: FileTreeNode[];
  isFile: boolean;
};

export type FileTreeNameOverride = {
  name: string;
  stale?: boolean;
};

export type FileTreeProps = {
  node: FileTreeNode;
  selectedPath: string | null;
  mappedPaths?: Set<string>;
  nameOverrides?: Record<string, FileTreeNameOverride>;
  onSelect: (path: string) => void;
  onDrop?: (path: string) => void;
  depth?: number;
  className?: string;
  defaultExpanded?: boolean;
  renderFileIcon?: (filename: string) => ReactNode;
};

function FileTreeItem({
  child,
  selectedPath,
  mappedPaths,
  nameOverrides,
  onSelect,
  onDrop,
  depth,
  defaultExpanded = true,
  renderFileIcon,
}: {
  child: FileTreeNode;
  selectedPath: string | null;
  mappedPaths?: Set<string>;
  nameOverrides?: Record<string, FileTreeNameOverride>;
  onSelect: (path: string) => void;
  onDrop?: (path: string) => void;
  depth: number;
  defaultExpanded?: boolean;
  renderFileIcon?: (filename: string) => ReactNode;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const isFolder = !child.isFile;
  const hasChildren = child.children.length > 0;
  const isSelected = selectedPath === child.path;
  const isMapped = mappedPaths?.has(child.path);
  const nameOverride = nameOverrides?.[child.path];
  const displayName = nameOverride?.name ?? child.name;
  const isStaleName = Boolean(nameOverride?.stale);

  return (
    <div>
      <div
        data-path={child.path}
        className={cn(
          treeRowVariants({ selected: isSelected, isFolder }),
          !isSelected && isMapped && "bg-blue-600/10 dark:bg-blue-500/15 text-blue-700/80 dark:text-blue-400/80 ring-1 ring-blue-500/10",
          "group select-none cursor-pointer"
        )}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
        onClick={(e) => {
          e.stopPropagation();
          if (isFolder) {
            setExpanded(!expanded);
          }
          onSelect(child.path);
        }}
        onDragOver={(e) => {
          if (onDrop) {
            e.preventDefault();
            e.dataTransfer.dropEffect = "link";
          }
        }}
        onDrop={(e) => {
          if (onDrop) {
            e.preventDefault();
            onDrop(child.path);
          }
        }}
      >
        <span
          className="text-muted-foreground/70 group-hover:text-muted-foreground transition-colors p-0.5 hover:bg-muted rounded"
          onClick={(e) => {
            if (isFolder && hasChildren) {
              e.stopPropagation();
              setExpanded(!expanded);
            }
          }}
        >
          {isFolder ? (
            hasChildren ? (
              expanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />
            ) : (
              <Folder className="h-4 w-4" />
            )
          ) : (
            renderFileIcon ? renderFileIcon(child.name) : <File className="h-4 w-4" />
          )}
        </span>
        {isFolder && hasChildren && (
          <span className="text-muted-foreground/70">
            <Folder className="h-4 w-4" />
          </span>
        )}
        <span className={cn("truncate", isStaleName && "text-muted-foreground/70 italic")}>{displayName}</span>
      </div>
      {isFolder && hasChildren && expanded && (
        <div className="mt-0.5">
          {child.children.map((grandchild) => (
            <FileTreeItem
              key={grandchild.path}
              child={grandchild}
              selectedPath={selectedPath}
              mappedPaths={mappedPaths}
              nameOverrides={nameOverrides}
              onSelect={onSelect}
              onDrop={onDrop}
              depth={depth + 1}
              defaultExpanded={false}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function FileTree({
  node,
  selectedPath,
  mappedPaths,
  nameOverrides,
  onSelect,
  onDrop,
  depth = 0,
  className,
  defaultExpanded = true,
  renderFileIcon,
}: FileTreeProps) {
  if (!node.children.length) return null;

  return (
    <div className={cn("space-y-0.5", className)}>
      {node.children.map((child) => (
        <FileTreeItem
          key={child.path}
          child={child}
          selectedPath={selectedPath}
          mappedPaths={mappedPaths}
          nameOverrides={nameOverrides}
          onSelect={onSelect}
          onDrop={onDrop}
          depth={depth}
          defaultExpanded={defaultExpanded}
          renderFileIcon={renderFileIcon}
        />
      ))}
    </div>
  );
}
