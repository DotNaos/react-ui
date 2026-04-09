import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { ThemeToggle as ThemeToggleComponent } from "../src";
import { FileTree as FileTreeComponent } from "../src/components/file-tree";
import { sampleFileIcon, sampleTree, StoryFrame, StorySurface } from "./helpers";

const meta = {
  title: "React UI/Components",
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

function FileTreeExample() {
  const [selectedPath, setSelectedPath] = useState("/apps/web/page.tsx");

  return (
    <StoryFrame>
      <StorySurface widthClassName="max-w-lg">
        <FileTreeComponent
          node={sampleTree}
          selectedPath={selectedPath}
          mappedPaths={new Set(["/packages/README.md"])}
          onSelect={setSelectedPath}
          renderFileIcon={sampleFileIcon}
        />
      </StorySurface>
    </StoryFrame>
  );
}

export const FileTree: Story = {
  render: () => <FileTreeExample />,
};

export const ThemeToggle: Story = {
  render: () => (
    <StoryFrame>
      <StorySurface widthClassName="max-w-xs" className="flex justify-center">
        <ThemeToggleComponent />
      </StorySurface>
    </StoryFrame>
  ),
};
