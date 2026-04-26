import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Modal as HeroModal } from "@heroui/react";
import { useTheme } from "../components/theme-provider";
import { Dialog as ShadcnDialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Button as ShadcnButton, } from "../shadcn";
import { Button } from "./button";
export function Dialog({ actionLabel = "Confirm", children, description, onAction, title, triggerLabel, }) {
    const { componentLibrary } = useTheme();
    if (componentLibrary === "heroui") {
        return (_jsxs(HeroModal, { children: [_jsx(Button, { variant: "outline", children: triggerLabel }), _jsx(HeroModal.Backdrop, { children: _jsx(HeroModal.Container, { children: _jsxs(HeroModal.Dialog, { children: [_jsxs(HeroModal.Header, { children: [_jsx(HeroModal.Heading, { children: title }), description ? (_jsx("p", { className: "text-sm text-zinc-400", children: description })) : null] }), _jsx(HeroModal.Body, { children: children }), _jsxs(HeroModal.Footer, { children: [_jsx(HeroModal.CloseTrigger, {}), _jsx(Button, { onPress: onAction, children: actionLabel })] })] }) }) })] }));
    }
    return (_jsxs(ShadcnDialog, { children: [_jsx(DialogTrigger, { asChild: true, children: _jsx(ShadcnButton, { variant: "outline", children: triggerLabel }) }), _jsxs(DialogContent, { children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: title }), description ? (_jsx(DialogDescription, { children: description })) : null] }), children, _jsx(DialogFooter, { children: _jsx(Button, { onPress: onAction, children: actionLabel }) })] })] }));
}
