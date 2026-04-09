import type { Meta, StoryObj } from "@storybook/react-vite";
import { Panel, Resizer, Shell, ShellLayout, Sidenav, SidenavItem, StatusBar, Tab, TabBar, Toolbar } from "../src/shell";
import { Stack, Text } from "../src/primitives";
import { shellTabs, sideItems, StorySection } from "./helpers";
import { Circle, FolderTree, Gauge, Settings2 } from "lucide-react";

const sideIcons = [FolderTree, Gauge, Settings2];

const meta = {
  title: "React UI/Shell"
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const WorkspaceShell: Story = {
  render: () => (
    <div className="min-h-screen p-6">
      <StorySection title="Shell layout" description="Panels, navigation, tabs, and status framing in a single assembled story.">
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-black/30">
          <Shell
            className="h-[560px] w-full bg-transparent text-white"
            sidenav={
              <Sidenav className="h-full bg-black/10 p-2">
                <Stack gap={2}>
                  {sideItems.map((item) => {
                    const Icon = sideIcons[item.id.length % sideIcons.length] ?? Circle;

                    return (
                      <SidenavItem
                        key={item.id}
                        active={item.active}
                        icon={<Icon className="size-4" />}
                        label={item.label}
                      />
                    );
                  })}
                </Stack>
              </Sidenav>
            }
          >
            <Toolbar className="border-b border-white/10 px-4 py-3">
              <div className="flex items-center justify-between">
                <Text>Project shell</Text>
                <Text color="muted">3 active tabs</Text>
              </div>
            </Toolbar>

            <TabBar className="border-b border-white/10 px-2 py-2">
              <div className="flex gap-2">
                {shellTabs.map((tab) => (
                  <Tab
                    key={tab.id}
                    active={tab.active}
                    label={tab.label}
                    icon={<Circle className="size-3" />}
                  />
                ))}
              </div>
            </TabBar>

            <div className="flex min-h-0 flex-1">
              <ShellLayout
                sidebar={
                  <Panel className="h-[420px] border-r border-white/10 bg-[#11161f] p-5">
                    <Stack gap={3}>
                      <Text size="l" className="text-white">Navigator</Text>
                      <Text color="muted" className="text-zinc-400">File tree, search, and quick actions live here.</Text>
                    </Stack>
                  </Panel>
                }
                content={
                  <Panel className="h-[420px] bg-[#11161f] p-5">
                    <Stack gap={3}>
                      <Text size="l" className="text-white">Center panel</Text>
                      <Text color="muted" className="text-zinc-400">Use this area for the main editor, dashboard, or preview.</Text>
                    </Stack>
                  </Panel>
                }
                inspector={
                  <Panel className="h-[420px] border-l border-white/10 bg-[#11161f] p-5">
                    <Stack gap={3}>
                      <Text size="l" className="text-white">Inspector</Text>
                      <Text color="muted" className="text-zinc-400">Secondary tools and metadata fit here.</Text>
                    </Stack>
                  </Panel>
                }
              />
              <Resizer />
            </div>

            <StatusBar className="border-t border-white/10 px-4 py-2">
              <div className="flex items-center justify-between">
                <Text size="s" color="muted">Ready</Text>
                <Text size="s" color="muted">main • synced</Text>
              </div>
            </StatusBar>
          </Shell>
        </div>
      </StorySection>
    </div>
  )
};
