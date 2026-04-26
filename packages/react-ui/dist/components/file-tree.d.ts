import { type ReactNode } from "react";
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
export declare function FileTree({ node, selectedPath, mappedPaths, nameOverrides, onSelect, onDrop, depth, className, defaultExpanded, renderFileIcon, }: FileTreeProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=file-tree.d.ts.map