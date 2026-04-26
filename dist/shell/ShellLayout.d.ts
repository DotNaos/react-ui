import type { ReactElement, ReactNode } from "react";
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
export declare function ShellLayout({ content, header, sidebar, inspector, footer, className, headerClassName, sidebarClassName, contentClassName, inspectorClassName, footerClassName, }: ShellLayoutProps): ReactElement;
//# sourceMappingURL=ShellLayout.d.ts.map