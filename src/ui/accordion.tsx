import { Accordion as HeroAccordion } from "@heroui/react";
import { useTheme } from "../components/theme-provider";
import {
  Accordion as ShadcnAccordion,
  AccordionContent,
  AccordionItem as ShadcnAccordionItem,
  AccordionTrigger,
} from "../shadcn";
import type { AccordionItem } from "./types";

export interface AccordionProps {
  defaultExpandedIds?: string[];
  items: AccordionItem[];
  multiple?: boolean;
}

export function Accordion({
  defaultExpandedIds,
  items,
  multiple = false,
}: AccordionProps) {
  const { componentLibrary } = useTheme();

  if (componentLibrary === "heroui") {
    return (
      <HeroAccordion
        allowsMultipleExpanded={multiple}
        data-ui-library="heroui"
        defaultExpandedKeys={defaultExpandedIds}
        variant="default"
      >
        {items.map((item) => (
          <HeroAccordion.Item id={item.id} key={item.id}>
            <HeroAccordion.Heading>
              <HeroAccordion.Trigger>
                <span>{item.label}</span>
                <HeroAccordion.Indicator />
              </HeroAccordion.Trigger>
            </HeroAccordion.Heading>
            <HeroAccordion.Panel>
              <HeroAccordion.Body>{item.content}</HeroAccordion.Body>
            </HeroAccordion.Panel>
          </HeroAccordion.Item>
        ))}
      </HeroAccordion>
    );
  }

  if (multiple) {
    return (
      <ShadcnAccordion
        data-ui-library="shadcn"
        defaultValue={defaultExpandedIds}
        type="multiple"
      >
        {items.map((item) => (
          <ShadcnAccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.label}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </ShadcnAccordionItem>
        ))}
      </ShadcnAccordion>
    );
  }

  return (
    <ShadcnAccordion
      collapsible
      data-ui-library="shadcn"
      defaultValue={defaultExpandedIds?.[0]}
      type="single"
    >
      {items.map((item) => (
        <ShadcnAccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>{item.label}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </ShadcnAccordionItem>
      ))}
    </ShadcnAccordion>
  );
}
