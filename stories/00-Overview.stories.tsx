import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge, Box, Card, Center, Divider, FileIcon, Grid, Heading, Icon, Scrollable, Spacer, Spinner, Stack, Text } from "../src/primitives";
import { FileTree } from "../src/components/file-tree";
import { ThemeToggle } from "../src/components/theme-toggle";
import { StoryCard, StoryGrid, StorySection, sampleFileIcon, sampleTree } from "./helpers";
import { Lock, Sparkles, Wand2 } from "lucide-react";

const meta = {
  title: "React UI/Overview",
  parameters: {
    docs: {
      description: {
        component: "Visual inventory for the shared UI package."
      }
    }
  }
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const KitchenSink: Story = {
  render: () => (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-8 px-6 py-8">
      <section className="rounded-[36px] border border-white/10 bg-black/30 px-8 py-10 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <Badge variant="default">DotNaos React UI</Badge>
            <Heading level={1} className="text-5xl font-semibold tracking-tight text-white">
              Complete UI inventory
            </Heading>
            <Text size="l" color="muted" className="max-w-2xl">
              This page collects the exported building blocks, theme affordances, and file navigation pieces in one place.
            </Text>
          </div>
          <ThemeToggle className="self-start rounded-full border border-white/10 bg-white/5" />
        </div>
      </section>

      <StorySection title="Primitives" description="Layout, surface, copy, and small visual helpers.">
        <StoryGrid>
          <StoryCard title="Text and Heading">
            <Stack gap={3}>
              <Heading level={2}>Readable hierarchy</Heading>
              <Text size="l">Lead copy for a section or page.</Text>
              <Text size="m" color="muted">Muted text for secondary information.</Text>
              <Badge variant="secondary">Secondary Badge</Badge>
            </Stack>
          </StoryCard>

          <StoryCard title="Layout">
            <Stack gap={3}>
              <Grid columns={3} gap={2}>
                <Box className="rounded-r-2 bg-white/10 p-4">1</Box>
                <Box className="rounded-r-2 bg-white/10 p-4">2</Box>
                <Box className="rounded-r-2 bg-white/10 p-4">3</Box>
              </Grid>
              <Divider />
              <Center className="rounded-r-3 border border-dashed border-white/20 p-6">Centered</Center>
              <Spacer size={2} />
            </Stack>
          </StoryCard>

          <StoryCard title="Surface and icons">
            <Stack gap={3}>
              <Card padding={4} radius={3}>
                <Stack gap={2}>
                  <div className="flex items-center gap-2">
                    <Icon name={Sparkles} size="m" />
                    <Text>Surface container</Text>
                  </div>
                  <Text color="muted">Cards work as neutral containers for content.</Text>
                </Stack>
              </Card>
              <div className="flex items-center gap-3">
                <FileIcon filename="index.tsx" />
                <FileIcon filename="README.md" grayscale />
                <Icon name={Wand2} size="l" />
                <Spinner size="m" />
                <Icon name={Lock} size="s" />
              </div>
            </Stack>
          </StoryCard>
        </StoryGrid>
      </StorySection>

      <StorySection title="Utilities" description="Scrollable regions and tree-based browsing.">
        <StoryGrid>
          <StoryCard title="Scrollable">
            <Scrollable className="h-48 rounded-r-2 border border-white/10 bg-black/20 p-4">
              <Stack gap={2}>
                {Array.from({ length: 14 }).map((_, index) => (
                  <Text key={index}>Line item {index + 1}</Text>
                ))}
              </Stack>
            </Scrollable>
          </StoryCard>

          <StoryCard title="File tree" className="xl:col-span-2">
            <FileTree
              node={sampleTree}
              selectedPath="/apps/web/page.tsx"
              mappedPaths={new Set(["/packages/README.md"])}
              onSelect={() => undefined}
              renderFileIcon={sampleFileIcon}
            />
          </StoryCard>
        </StoryGrid>
      </StorySection>
    </div>
  )
};
