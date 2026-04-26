import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../lib/utils";
/**
 * Spacer - Flexible space that fills available room
 */
export function Spacer({ className, style }) {
    return _jsx("div", { className: cn("flex-1", className), style: style });
}
