import type { Meta, StoryObj } from "@storybook/react-vite";
import { Sparkles } from "lucide-react";
import {
  Badge as BadgeComponent,
  Box as BoxComponent,
  Center as CenterComponent,
  Divider as DividerComponent,
  FileIcon as FileIconComponent,
  Grid as GridComponent,
  Heading as HeadingComponent,
  Icon as IconComponent,
  PrimitiveCard as CardComponent,
  Scrollable as ScrollableComponent,
  Spacer as SpacerComponent,
  Spinner as SpinnerComponent,
  Stack as StackComponent,
  Text as TextComponent,
} from "@dotnaos/react-ui";
import { StoryFrame, StorySurface } from "./helpers";

const meta = {
  title: "React UI/Primitives",
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Badge: Story = {
  render: () => (
    <StoryFrame>
      <BadgeComponent>Badge</BadgeComponent>
    </StoryFrame>
  ),
};

export const Box: Story = {
  render: () => (
    <StoryFrame>
      <StorySurface widthClassName="max-w-md">
        <BoxComponent className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          Box
        </BoxComponent>
      </StorySurface>
    </StoryFrame>
  ),
};

export const Card: Story = {
  render: () => (
    <StoryFrame>
      <CardComponent padding={4} radius={3} className="w-full max-w-md">
        <TextComponent>Card</TextComponent>
      </CardComponent>
    </StoryFrame>
  ),
};

export const Center: Story = {
  render: () => (
    <StoryFrame>
      <StorySurface widthClassName="max-w-md">
        <div className="h-56 rounded-2xl border border-dashed border-white/15">
          <CenterComponent className="h-full">Centered</CenterComponent>
        </div>
      </StorySurface>
    </StoryFrame>
  ),
};

export const Divider: Story = {
  render: () => (
    <StoryFrame>
      <StorySurface widthClassName="max-w-lg">
        <div className="flex items-center gap-4">
          <TextComponent>Left</TextComponent>
          <DividerComponent />
          <TextComponent>Right</TextComponent>
        </div>
      </StorySurface>
    </StoryFrame>
  ),
};

export const FileIcon: Story = {
  render: () => (
    <StoryFrame>
      <StorySurface widthClassName="max-w-md">
        <div className="flex items-center justify-center gap-4">
          <FileIconComponent filename="page.tsx" />
          <FileIconComponent filename="README.md" />
          <FileIconComponent filename="assets" />
        </div>
      </StorySurface>
    </StoryFrame>
  ),
};

export const Grid: Story = {
  render: () => (
    <StoryFrame>
      <StorySurface widthClassName="max-w-xl">
        <GridComponent columns={3} gap={2}>
          <div className="rounded-xl bg-white/10 p-4 text-center">1</div>
          <div className="rounded-xl bg-white/10 p-4 text-center">2</div>
          <div className="rounded-xl bg-white/10 p-4 text-center">3</div>
        </GridComponent>
      </StorySurface>
    </StoryFrame>
  ),
};

export const Heading: Story = {
  render: () => (
    <StoryFrame>
      <HeadingComponent level={1}>Heading</HeadingComponent>
    </StoryFrame>
  ),
};

export const Icon: Story = {
  render: () => (
    <StoryFrame>
      <IconComponent name={Sparkles} size="l" />
    </StoryFrame>
  ),
};

export const Scrollable: Story = {
  render: () => (
    <StoryFrame>
      <StorySurface widthClassName="max-w-md">
        <ScrollableComponent className="h-56 rounded-2xl border border-white/10 bg-black/20 p-4">
          <div className="space-y-3">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="rounded-xl bg-white/5 px-4 py-3">
                Item {index + 1}
              </div>
            ))}
          </div>
        </ScrollableComponent>
      </StorySurface>
    </StoryFrame>
  ),
};

export const Spacer: Story = {
  render: () => (
    <StoryFrame>
      <StorySurface widthClassName="max-w-md">
        <div className="flex items-center rounded-xl bg-white/5 px-4 py-3">
          <div className="rounded-lg bg-white/10 px-4 py-2 text-center">Left</div>
          <SpacerComponent />
          <div className="rounded-lg bg-white/10 px-4 py-2 text-center">Right</div>
        </div>
      </StorySurface>
    </StoryFrame>
  ),
};

export const Spinner: Story = {
  render: () => (
    <StoryFrame>
      <SpinnerComponent size="l" />
    </StoryFrame>
  ),
};

export const Stack: Story = {
  render: () => (
    <StoryFrame>
      <StorySurface widthClassName="max-w-md">
        <StackComponent gap={2}>
          <div className="rounded-xl bg-white/10 px-4 py-3">First</div>
          <div className="rounded-xl bg-white/10 px-4 py-3">Second</div>
          <div className="rounded-xl bg-white/10 px-4 py-3">Third</div>
        </StackComponent>
      </StorySurface>
    </StoryFrame>
  ),
};

export const Text: Story = {
  render: () => (
    <StoryFrame>
      <TextComponent size="l">Text</TextComponent>
    </StoryFrame>
  ),
};
