import type { Meta, StoryObj } from "@storybook/react-vite";
import { Inbox } from "lucide-react";
import { useState } from "react";
import {
  Accordion as AccordionComponent,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button as ButtonComponent,
  Card as CardComponent,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox as CheckboxComponent,
  Collapsible as CollapsibleComponent,
  CollapsibleContent,
  CollapsibleTrigger,
  Dialog as DialogComponent,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu as DropdownMenuComponent,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Empty as EmptyComponent,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  Input as InputComponent,
  RadioGroup as RadioGroupComponent,
  RadioGroupItem,
  Select as SelectComponent,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Tabs as TabsComponent,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea as TextareaComponent,
  Tooltip as TooltipComponent,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@dotnaos/react-ui/shadcn";
import { StoryFrame, StorySurface } from "./helpers";

const meta = {
  title: "React UI/Shadcn",
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

function CheckboxExample() {
  const [checked, setChecked] = useState(true);

  return (
    <div className="flex items-center gap-3">
      <CheckboxComponent checked={checked} onCheckedChange={(value) => setChecked(Boolean(value))} />
      <span>Enabled</span>
    </div>
  );
}

function CollapsibleExample() {
  return (
    <CollapsibleComponent className="w-full rounded-2xl border border-white/10 bg-black/20 p-4">
      <CollapsibleTrigger asChild>
        <ButtonComponent variant="ghost" className="w-full justify-between">
          Toggle
        </ButtonComponent>
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-3 text-sm text-zinc-300">
        Content
      </CollapsibleContent>
    </CollapsibleComponent>
  );
}

export const Accordion: Story = {
  render: () => (
    <StoryFrame>
      <StorySurface widthClassName="max-w-lg">
        <AccordionComponent type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>Item</AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </AccordionComponent>
      </StorySurface>
    </StoryFrame>
  ),
};

export const Button: Story = {
  render: () => (
    <StoryFrame>
      <ButtonComponent>Button</ButtonComponent>
    </StoryFrame>
  ),
};

export const Card: Story = {
  render: () => (
    <StoryFrame>
      <CardComponent className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Card</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>Content</CardContent>
      </CardComponent>
    </StoryFrame>
  ),
};

export const Checkbox: Story = {
  render: () => (
    <StoryFrame>
      <CheckboxExample />
    </StoryFrame>
  ),
};

export const Collapsible: Story = {
  render: () => (
    <StoryFrame>
      <StorySurface widthClassName="max-w-lg">
        <CollapsibleExample />
      </StorySurface>
    </StoryFrame>
  ),
};

export const Dialog: Story = {
  render: () => (
    <StoryFrame>
      <DialogComponent>
        <DialogTrigger asChild>
          <ButtonComponent>Open dialog</ButtonComponent>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </DialogComponent>
    </StoryFrame>
  ),
};

export const DropdownMenu: Story = {
  render: () => (
    <StoryFrame>
      <DropdownMenuComponent>
        <DropdownMenuTrigger asChild>
          <ButtonComponent variant="outline">Open menu</ButtonComponent>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>First item</DropdownMenuItem>
          <DropdownMenuItem>Second item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuComponent>
    </StoryFrame>
  ),
};

export const Empty: Story = {
  render: () => (
    <StoryFrame>
      <EmptyComponent className="w-full max-w-md border-white/10 bg-black/20">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Inbox className="size-5" />
          </EmptyMedia>
          <EmptyTitle>No items</EmptyTitle>
          <EmptyDescription>Nothing here yet.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <ButtonComponent variant="secondary">Create item</ButtonComponent>
        </EmptyContent>
      </EmptyComponent>
    </StoryFrame>
  ),
};

export const Input: Story = {
  render: () => (
    <StoryFrame>
      <InputComponent className="max-w-md" placeholder="Input" />
    </StoryFrame>
  ),
};

export const RadioGroup: Story = {
  render: () => (
    <StoryFrame>
      <StorySurface widthClassName="max-w-md">
        <RadioGroupComponent defaultValue="first" className="flex gap-4">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="first" id="first" />
            <label htmlFor="first">First</label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="second" id="second" />
            <label htmlFor="second">Second</label>
          </div>
        </RadioGroupComponent>
      </StorySurface>
    </StoryFrame>
  ),
};

export const Select: Story = {
  render: () => (
    <StoryFrame>
      <SelectComponent defaultValue="dark">
        <SelectTrigger className="w-56">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="light">Light</SelectItem>
        </SelectContent>
      </SelectComponent>
    </StoryFrame>
  ),
};

export const Tabs: Story = {
  render: () => (
    <StoryFrame>
      <StorySurface widthClassName="max-w-lg">
        <TabsComponent defaultValue="first" className="w-full">
          <TabsList>
            <TabsTrigger value="first">First</TabsTrigger>
            <TabsTrigger value="second">Second</TabsTrigger>
          </TabsList>
          <TabsContent value="first" className="mt-4">
            First content
          </TabsContent>
          <TabsContent value="second" className="mt-4">
            Second content
          </TabsContent>
        </TabsComponent>
      </StorySurface>
    </StoryFrame>
  ),
};

export const Textarea: Story = {
  render: () => (
    <StoryFrame>
      <TextareaComponent className="max-w-lg" placeholder="Textarea" />
    </StoryFrame>
  ),
};

export const Tooltip: Story = {
  render: () => (
    <TooltipProvider>
      <StoryFrame>
        <TooltipComponent>
          <TooltipTrigger asChild>
            <ButtonComponent>Hover me</ButtonComponent>
          </TooltipTrigger>
          <TooltipContent>Tooltip</TooltipContent>
        </TooltipComponent>
      </StoryFrame>
    </TooltipProvider>
  ),
};
