import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronDown, ChevronRight, File, Folder } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";
import { treeRowVariants } from "./tree-variants";
function FileTreeItem({ child, selectedPath, mappedPaths, nameOverrides, onSelect, onDrop, depth, defaultExpanded = true, renderFileIcon, }) {
    const [expanded, setExpanded] = useState(defaultExpanded);
    const isFolder = !child.isFile;
    const hasChildren = child.children.length > 0;
    const isSelected = selectedPath === child.path;
    const isMapped = mappedPaths?.has(child.path);
    const nameOverride = nameOverrides?.[child.path];
    const displayName = nameOverride?.name ?? child.name;
    const isStaleName = Boolean(nameOverride?.stale);
    return (_jsxs("div", { children: [_jsxs("div", { "data-path": child.path, className: cn(treeRowVariants({ selected: isSelected, isFolder }), !isSelected && isMapped && "bg-blue-600/10 dark:bg-blue-500/15 text-blue-700/80 dark:text-blue-400/80 ring-1 ring-blue-500/10", "group select-none cursor-pointer"), style: { paddingLeft: `${depth * 16 + 8}px` }, onClick: (e) => {
                    e.stopPropagation();
                    if (isFolder) {
                        setExpanded(!expanded);
                    }
                    onSelect(child.path);
                }, onDragOver: (e) => {
                    if (onDrop) {
                        e.preventDefault();
                        e.dataTransfer.dropEffect = "link";
                    }
                }, onDrop: (e) => {
                    if (onDrop) {
                        e.preventDefault();
                        onDrop(child.path);
                    }
                }, children: [_jsx("span", { className: "text-muted-foreground/70 group-hover:text-muted-foreground transition-colors p-0.5 hover:bg-muted rounded", onClick: (e) => {
                            if (isFolder && hasChildren) {
                                e.stopPropagation();
                                setExpanded(!expanded);
                            }
                        }, children: isFolder ? (hasChildren ? (expanded ? _jsx(ChevronDown, { className: "h-4 w-4" }) : _jsx(ChevronRight, { className: "h-4 w-4" })) : (_jsx(Folder, { className: "h-4 w-4" }))) : (renderFileIcon ? renderFileIcon(child.name) : _jsx(File, { className: "h-4 w-4" })) }), isFolder && hasChildren && (_jsx("span", { className: "text-muted-foreground/70", children: _jsx(Folder, { className: "h-4 w-4" }) })), _jsx("span", { className: cn("truncate", isStaleName && "text-muted-foreground/70 italic"), children: displayName })] }), isFolder && hasChildren && expanded && (_jsx("div", { className: "mt-0.5", children: child.children.map((grandchild) => (_jsx(FileTreeItem, { child: grandchild, selectedPath: selectedPath, mappedPaths: mappedPaths, nameOverrides: nameOverrides, onSelect: onSelect, onDrop: onDrop, depth: depth + 1, defaultExpanded: false }, grandchild.path))) }))] }));
}
export function FileTree({ node, selectedPath, mappedPaths, nameOverrides, onSelect, onDrop, depth = 0, className, defaultExpanded = true, renderFileIcon, }) {
    if (!node.children.length)
        return null;
    return (_jsx("div", { className: cn("space-y-0.5", className), children: node.children.map((child) => (_jsx(FileTreeItem, { child: child, selectedPath: selectedPath, mappedPaths: mappedPaths, nameOverrides: nameOverrides, onSelect: onSelect, onDrop: onDrop, depth: depth, defaultExpanded: defaultExpanded, renderFileIcon: renderFileIcon }, child.path))) }));
}
