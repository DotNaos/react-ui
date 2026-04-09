import { Tabs as HeroTabs } from "@heroui/react";
import { useTheme } from "../components/theme-provider";
import {
  Tabs as ShadcnTabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../shadcn";
import type { TabItem } from "./types";

export interface TabsProps {
  defaultValue?: string;
  items: TabItem[];
  onValueChange?: (value: string) => void;
  value?: string;
}

export function Tabs({
  defaultValue,
  items,
  onValueChange,
  value,
}: TabsProps) {
  const { componentLibrary } = useTheme();

  if (componentLibrary === "heroui") {
    return (
      <HeroTabs
        data-ui-library="heroui"
        defaultSelectedKey={value === undefined ? defaultValue : undefined}
        onSelectionChange={(key) => {
          if (key != null) {
            onValueChange?.(String(key));
          }
        }}
        selectedKey={value}
        variant="primary"
      >
        <HeroTabs.List>
          {items.map((item) => (
            <HeroTabs.Tab id={item.id} key={item.id}>
              {item.label}
            </HeroTabs.Tab>
          ))}
          <HeroTabs.Indicator />
        </HeroTabs.List>
        {items.map((item) => (
          <HeroTabs.Panel id={item.id} key={item.id}>
            {item.content}
          </HeroTabs.Panel>
        ))}
      </HeroTabs>
    );
  }

  return (
    <ShadcnTabs
      className="w-full"
      data-ui-library="shadcn"
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      value={value}
    >
      <TabsList>
        {items.map((item) => (
          <TabsTrigger key={item.id} value={item.id}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map((item) => (
        <TabsContent key={item.id} value={item.id}>
          {item.content}
        </TabsContent>
      ))}
    </ShadcnTabs>
  );
}
