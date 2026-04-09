import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  Input,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../src/shadcn";
import { StoryCard, StoryGrid, StorySection } from "./helpers";
import { Inbox } from "lucide-react";

const meta = {
  title: "React UI/Shadcn",
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

function ShadcnGallery() {
  const [checked, setChecked] = useState(true);

  return (
    <TooltipProvider>
      <div className="mx-auto min-h-screen max-w-7xl space-y-8 px-6 py-8">
        <StorySection title="Buttons, inputs, and selectors">
          <StoryGrid>
            <StoryCard title="Buttons">
              <div className="flex flex-wrap gap-3">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </StoryCard>

            <StoryCard title="Inputs">
              <div className="space-y-3">
                <Input placeholder="Project name" />
                <Textarea placeholder="Add more context..." />
              </div>
            </StoryCard>

            <StoryCard title="Selection">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Checkbox checked={checked} onCheckedChange={(value) => setChecked(Boolean(value))} />
                  <span>Enable background sync</span>
                </div>
                <RadioGroup defaultValue="fast" className="flex gap-4">
                  <div className="flex items-center gap-2"><RadioGroupItem value="fast" id="fast" /><label htmlFor="fast">Fast</label></div>
                  <div className="flex items-center gap-2"><RadioGroupItem value="safe" id="safe" /><label htmlFor="safe">Safe</label></div>
                </RadioGroup>
                <Select defaultValue="dark">
                  <SelectTrigger><SelectValue placeholder="Theme" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="light">Light</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </StoryCard>
          </StoryGrid>
        </StorySection>

        <StorySection title="Disclosure and overlays">
          <StoryGrid>
            <StoryCard title="Accordion">
              <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Release notes</AccordionTrigger>
                  <AccordionContent>Animations, tokens, and shell components were extracted into this package.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </StoryCard>

          <StoryCard title="Tabs and menu">
            <Tabs defaultValue="design">
              <TabsList>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="design" className="mt-4">Design tokens and visual primitives.</TabsContent>
              <TabsContent value="code" className="mt-4">Build output and package exports.</TabsContent>
            </Tabs>
            <div className="mt-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Open menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuItem>Archive</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </StoryCard>

          <StoryCard title="Collapsible and tooltip">
            <div className="flex items-center gap-4">
              <Collapsible className="w-full rounded-xl border border-white/10 bg-black/20 p-4">
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full justify-between">
                    Expand diagnostics
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-3 text-sm text-zinc-300">
                  Surface-level disclosure patterns work for lightweight details without opening a modal.
                </CollapsibleContent>
              </Collapsible>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button>Inspect package</Button>
                </TooltipTrigger>
                <TooltipContent>Shows lightweight context on hover</TooltipContent>
              </Tooltip>
            </div>
          </StoryCard>
          </StoryGrid>

          <div className="mt-5">
            <StoryGrid>
              <StoryCard title="Dialog">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Launch dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Share package</DialogTitle>
                      <DialogDescription>Package metadata and publish controls live here.</DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </StoryCard>

              <StoryCard title="Card">
                <Card>
                  <CardHeader>
                    <CardTitle>Card</CardTitle>
                    <CardDescription>Default content surface from the shadcn layer.</CardDescription>
                  </CardHeader>
                  <CardContent>This one shows the layout primitives working alongside shadcn components.</CardContent>
                </Card>
              </StoryCard>

              <StoryCard title="Empty state">
                <Empty className="border-white/10 bg-black/20">
                  <EmptyHeader>
                    <EmptyMedia variant="icon">
                      <Inbox className="size-5" />
                    </EmptyMedia>
                    <EmptyTitle>No items yet</EmptyTitle>
                    <EmptyDescription>Add your first item to see this surface fill with content.</EmptyDescription>
                  </EmptyHeader>
                  <EmptyContent>
                    <Button variant="secondary">Create item</Button>
                  </EmptyContent>
                </Empty>
              </StoryCard>
            </StoryGrid>
          </div>
        </StorySection>
      </div>
    </TooltipProvider>
  );
}

export const Gallery: Story = {
  render: () => <ShadcnGallery />
};
