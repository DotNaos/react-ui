import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Accordion as HeroAccordion } from "@heroui/react";
import { useTheme } from "../components/theme-provider";
import { Accordion as ShadcnAccordion, AccordionContent, AccordionItem as ShadcnAccordionItem, AccordionTrigger, } from "../shadcn";
export function Accordion({ defaultExpandedIds, items, multiple = false, }) {
    const { componentLibrary } = useTheme();
    if (componentLibrary === "heroui") {
        return (_jsx(HeroAccordion, { allowsMultipleExpanded: multiple, "data-ui-library": "heroui", defaultExpandedKeys: defaultExpandedIds, variant: "default", children: items.map((item) => (_jsxs(HeroAccordion.Item, { id: item.id, children: [_jsx(HeroAccordion.Heading, { children: _jsxs(HeroAccordion.Trigger, { children: [_jsx("span", { children: item.label }), _jsx(HeroAccordion.Indicator, {})] }) }), _jsx(HeroAccordion.Panel, { children: _jsx(HeroAccordion.Body, { children: item.content }) })] }, item.id))) }));
    }
    if (multiple) {
        return (_jsx(ShadcnAccordion, { "data-ui-library": "shadcn", defaultValue: defaultExpandedIds, type: "multiple", children: items.map((item) => (_jsxs(ShadcnAccordionItem, { value: item.id, children: [_jsx(AccordionTrigger, { children: item.label }), _jsx(AccordionContent, { children: item.content })] }, item.id))) }));
    }
    return (_jsx(ShadcnAccordion, { collapsible: true, "data-ui-library": "shadcn", defaultValue: defaultExpandedIds?.[0], type: "single", children: items.map((item) => (_jsxs(ShadcnAccordionItem, { value: item.id, children: [_jsx(AccordionTrigger, { children: item.label }), _jsx(AccordionContent, { children: item.content })] }, item.id))) }));
}
