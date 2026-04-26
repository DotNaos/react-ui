import type { Meta, StoryObj } from "@storybook/react-vite";
import { Circle, FolderTree, Gauge, Settings2 } from "lucide-react";
import {
  Panel as PanelComponent,
  Resizer as ResizerComponent,
  Shell as ShellComponent,
  ShellLayout as ShellLayoutComponent,
  Sidenav as SidenavComponent,
  SidenavItem as SidenavItemComponent,
  Stack,
  StatusBar as StatusBarComponent,
  Tab as TabComponent,
  TabBar as TabBarComponent,
  Text,
  Toolbar as ToolbarComponent,
} from "@dotnaos/react-ui";
import { shellTabs, sideItems, StoryFrame, StorySurface } from "./helpers";

const sideIcons = [FolderTree, Gauge, Settings2];

const meta = {
  title: "React UI/Shell",
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Panel: Story = {
  render: () => (
    <StoryFrame>
      <PanelComponent className="w-full max-w-md rounded-3xl border border-white/10 bg-black/25 p-6">
        <Text>Panel</Text>
      </PanelComponent>
    </StoryFrame>
  ),
};

export const Resizer: Story = {
  render: () => (
    <StoryFrame>
      <StorySurface widthClassName="max-w-xl" className="p-0">
        <div className="flex h-64">
          <div className="flex-1 bg-white/5" />
          <ResizerComponent />
          <div className="flex-1 bg-white/10" />
        </div>
      </StorySurface>
    </StoryFrame>
  ),
};

export const Shell: Story = {
  render: () => (
    <StoryFrame>
      <StorySurface widthClassName="max-w-6xl" className="overflow-hidden p-0">
        <ShellComponent
          className="h-[560px] bg-transparent text-white"
          sidenav={
            <SidenavComponent className="h-full bg-black/10 p-2">
              <Stack gap={2}>
                {sideItems.map((item) => {
                  const Icon = sideIcons[item.id.length % sideIcons.length] ?? Circle;

                  return (
                    <SidenavItemComponent
                      key={item.id}
                      active={item.active}
                      icon={<Icon className="size-4" />}
                      label={item.label}
                    />
                  );
                })}
              </Stack>
            </SidenavComponent>
          }
        >
          <ToolbarComponent
            center={<Text>Toolbar</Text>}
            className="border-b border-white/10 px-4 py-3"
            right={<Text color="muted">3 tabs</Text>}
          />

          <TabBarComponent className="border-b border-white/10 px-2 py-2">
            <div className="flex gap-2">
              {shellTabs.map((tab) => (
                <TabComponent
                  key={tab.id}
                  active={tab.active}
                  label={tab.label}
                  icon={<Circle className="size-3" />}
                />
              ))}
            </div>
          </TabBarComponent>

          <ShellLayoutComponent
            sidebar={
              <PanelComponent className="h-[420px] border-r border-white/10 bg-[#11161f] p-5">
                <Text>Sidebar</Text>
              </PanelComponent>
            }
            content={
              <PanelComponent className="h-[420px] bg-[#11161f] p-5">
                <Text>Content</Text>
              </PanelComponent>
            }
            inspector={
              <PanelComponent className="h-[420px] border-l border-white/10 bg-[#11161f] p-5">
                <Text>Inspector</Text>
              </PanelComponent>
            }
          />

          <StatusBarComponent
            className="border-t border-white/10 px-4 py-2"
            left={<Text size="s" color="muted">Ready</Text>}
            right={<Text size="s" color="muted">main</Text>}
          />
        </ShellComponent>
      </StorySurface>
    </StoryFrame>
  ),
};

export const ShellLayout: Story = {
  render: () => (
    <StoryFrame>
      <StorySurface widthClassName="max-w-5xl" className="overflow-hidden p-0">
        <ShellLayoutComponent
          sidebar={<PanelComponent className="h-80 border-r border-white/10 bg-white/5 p-6">Sidebar</PanelComponent>}
          content={<PanelComponent className="h-80 bg-white/10 p-6">Content</PanelComponent>}
          inspector={<PanelComponent className="h-80 border-l border-white/10 bg-white/5 p-6">Inspector</PanelComponent>}
        />
      </StorySurface>
    </StoryFrame>
  ),
};

export const Sidenav: Story = {
  render: () => (
    <StoryFrame>
      <SidenavComponent className="w-full max-w-xs rounded-3xl border border-white/10 bg-black/25 p-2">
        <Stack gap={2}>
          {sideItems.map((item) => {
            const Icon = sideIcons[item.id.length % sideIcons.length] ?? Circle;

            return (
              <SidenavItemComponent
                key={item.id}
                active={item.active}
                icon={<Icon className="size-4" />}
                label={item.label}
              />
            );
          })}
        </Stack>
      </SidenavComponent>
    </StoryFrame>
  ),
};

export const SidenavItem: Story = {
  render: () => (
    <StoryFrame>
      <StorySurface widthClassName="max-w-xs">
        <Stack gap={2}>
          <SidenavItemComponent active icon={<FolderTree className="size-4" />} label="Inbox" />
          <SidenavItemComponent icon={<Gauge className="size-4" />} label="Reports" />
        </Stack>
      </StorySurface>
    </StoryFrame>
  ),
};

export const StatusBar: Story = {
  render: () => (
    <StoryFrame>
      <StatusBarComponent
        className="w-full max-w-3xl rounded-3xl border border-white/10 bg-black/25 px-4 py-3"
        left={<Text size="s" color="muted">Ready</Text>}
        right={<Text size="s" color="muted">main</Text>}
      />
    </StoryFrame>
  ),
};

export const Tab: Story = {
  render: () => (
    <StoryFrame>
      <TabComponent active label="Overview" icon={<Circle className="size-3" />} />
    </StoryFrame>
  ),
};

export const TabBar: Story = {
  render: () => (
    <StoryFrame>
      <TabBarComponent className="w-full max-w-3xl rounded-3xl border border-white/10 bg-black/25 px-2 py-2">
        <div className="flex gap-2">
          {shellTabs.map((tab) => (
            <TabComponent key={tab.id} active={tab.active} label={tab.label} icon={<Circle className="size-3" />} />
          ))}
        </div>
      </TabBarComponent>
    </StoryFrame>
  ),
};

export const Toolbar: Story = {
  render: () => (
    <StoryFrame>
      <ToolbarComponent
        center={<Text>Toolbar</Text>}
        className="w-full max-w-3xl rounded-3xl border border-white/10 bg-black/25 px-4 py-3"
        right={<Text color="muted">Actions</Text>}
      />
    </StoryFrame>
  ),
};
