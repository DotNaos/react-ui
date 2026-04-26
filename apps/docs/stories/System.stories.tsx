import type { Meta, StoryObj } from "@storybook/react-vite";
import { Sparkles, SunMoon } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  Badge,
  Button,
  Card,
  Checkbox,
  ComponentLibraryToggle,
  Dialog,
  Input,
  MenuButton,
  RadioGroup,
  Select,
  Tabs,
  Textarea,
  ThemeToggle,
  Tooltip,
} from "@dotnaos/react-ui";
import { StoryFrame, StorySurface } from "./helpers";

const meta = {
  title: "React UI/System",
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const selectOptions = [
  { label: "Product", value: "product" },
  { label: "Design", value: "design" },
  { label: "Engineering", value: "engineering" },
];

const radioOptions = [
  { label: "Fast", value: "fast" },
  { label: "Balanced", value: "balanced" },
  { label: "Thorough", value: "thorough" },
];

const accordionItems = [
  {
    id: "contract",
    label: "Contract",
    content: "Keep the wrapper small and stable.",
  },
  {
    id: "provider",
    label: "Provider",
    content: "One global switch controls the library.",
  },
];

function InputExample() {
  const [value, setValue] = useState("Signal stays inside the wrapper.");

  return (
    <div className="w-full max-w-md">
      <Input
        ariaLabel="Wrapped input"
        onValueChange={setValue}
        placeholder="Type here"
        value={value}
      />
    </div>
  );
}

function TextareaExample() {
  const [value, setValue] = useState("No className prop. No Tailwind escape hatch.");

  return (
    <div className="w-full max-w-md">
      <Textarea
        ariaLabel="Wrapped textarea"
        onValueChange={setValue}
        placeholder="Write a note"
        value={value}
      />
    </div>
  );
}

function SelectExample() {
  const [value, setValue] = useState("design");

  return (
    <div className="w-full max-w-xs">
      <Select
        ariaLabel="Wrapped select"
        onValueChange={setValue}
        options={selectOptions}
        value={value}
      />
    </div>
  );
}

function MenuExample() {
  const [selection, setSelection] = useState("No action yet");

  return (
    <div className="flex flex-col items-center gap-3">
      <MenuButton
        ariaLabel="Wrapped menu"
        items={[
          { id: "rename", label: "Rename" },
          { id: "duplicate", label: "Duplicate" },
          { id: "delete", label: "Delete", tone: "danger" },
        ]}
        label="Open menu"
        onAction={setSelection}
      />
      <div className="text-sm text-zinc-400">{selection}</div>
    </div>
  );
}

function CheckboxExample() {
  const [checked, setChecked] = useState(true);

  return (
    <Checkbox
      checked={checked}
      description="This stays inside the closed component surface."
      label="Enable safe mode"
      onCheckedChange={setChecked}
    />
  );
}

function RadioGroupExample() {
  const [value, setValue] = useState("balanced");

  return (
    <div className="w-full max-w-md">
      <RadioGroup onValueChange={setValue} options={radioOptions} value={value} />
    </div>
  );
}

function TabsExample() {
  const [value, setValue] = useState("system");

  return (
    <div className="w-full max-w-xl">
      <Tabs
        items={[
          { id: "system", label: "System", content: "One provider controls the surface." },
          { id: "theme", label: "Theme", content: "Theme remains independent from library choice." },
          { id: "stories", label: "Stories", content: "Every wrapped component gets its own story." },
        ]}
        onValueChange={setValue}
        value={value}
      />
    </div>
  );
}

function AccordionExample() {
  return (
    <div className="w-full max-w-xl">
      <Accordion defaultExpandedIds={["contract"]} items={accordionItems} />
    </div>
  );
}

function DialogExample() {
  return (
    <Dialog
      actionLabel="Continue"
      description="The dialog shell is wrapped too."
      title="Confirm change"
      triggerLabel="Open dialog"
    >
      <p className="text-sm text-zinc-300">
        This is a closed dialog surface with one stable trigger pattern.
      </p>
    </Dialog>
  );
}

function CardExample() {
  return (
    <div className="w-full max-w-md">
      <Card
        description="A wrapped presentation surface."
        footer={<Badge tone="accent">Ready</Badge>}
        title="Wrapped card"
      >
        <p className="text-sm text-zinc-300">
          The layout and visual system come from the selected provider.
        </p>
      </Card>
    </div>
  );
}

function ProviderSwitchExample() {
  return (
    <div className="flex w-full max-w-2xl flex-col items-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <ComponentLibraryToggle />
        <ThemeToggle />
      </div>
      <div className="flex w-full flex-col gap-4 rounded-3xl border border-white/10 bg-black/20 p-6">
        <div className="flex flex-wrap gap-3">
          <Button leadingIcon={<Sparkles />} variant="primary">
            Primary action
          </Button>
          <Button leadingIcon={<SunMoon />} variant="secondary">
            Secondary action
          </Button>
          <Badge tone="accent">Status</Badge>
        </div>
        <Input ariaLabel="Provider switch input" placeholder="Library switch is global" />
        <Select ariaLabel="Provider switch select" options={selectOptions} placeholder="Pick a team" />
      </div>
    </div>
  );
}

export const WrappedButton: Story = {
  render: () => (
    <StoryFrame>
      <StorySurface widthClassName="w-fit max-w-fit">
        <Button leadingIcon={<Sparkles />} variant="primary">
          Wrapped button
        </Button>
      </StorySurface>
    </StoryFrame>
  ),
};

export const WrappedInput: Story = {
  render: () => (
    <StoryFrame>
      <InputExample />
    </StoryFrame>
  ),
};

export const WrappedTextarea: Story = {
  render: () => (
    <StoryFrame>
      <TextareaExample />
    </StoryFrame>
  ),
};

export const WrappedSelect: Story = {
  render: () => (
    <StoryFrame>
      <SelectExample />
    </StoryFrame>
  ),
};

export const WrappedMenu: Story = {
  render: () => (
    <StoryFrame>
      <MenuExample />
    </StoryFrame>
  ),
};

export const WrappedCheckbox: Story = {
  render: () => (
    <StoryFrame>
      <CheckboxExample />
    </StoryFrame>
  ),
};

export const WrappedRadioGroup: Story = {
  render: () => (
    <StoryFrame>
      <RadioGroupExample />
    </StoryFrame>
  ),
};

export const WrappedTabs: Story = {
  render: () => (
    <StoryFrame>
      <TabsExample />
    </StoryFrame>
  ),
};

export const WrappedAccordion: Story = {
  render: () => (
    <StoryFrame>
      <AccordionExample />
    </StoryFrame>
  ),
};

export const WrappedTooltip: Story = {
  render: () => (
    <StoryFrame>
      <StorySurface widthClassName="w-fit max-w-fit">
        <Tooltip content="Stable tooltip surface">
          <Button variant="outline">Hover me</Button>
        </Tooltip>
      </StorySurface>
    </StoryFrame>
  ),
};

export const WrappedDialog: Story = {
  render: () => (
    <StoryFrame>
      <DialogExample />
    </StoryFrame>
  ),
};

export const WrappedCard: Story = {
  render: () => (
    <StoryFrame>
      <CardExample />
    </StoryFrame>
  ),
};

export const WrappedBadge: Story = {
  render: () => (
    <StoryFrame>
      <StorySurface widthClassName="w-fit max-w-fit">
        <Badge tone="success">Wrapped badge</Badge>
      </StorySurface>
    </StoryFrame>
  ),
};

export const WrappedThemeToggle: Story = {
  render: () => (
    <StoryFrame>
      <StorySurface widthClassName="w-fit max-w-fit">
        <ThemeToggle />
      </StorySurface>
    </StoryFrame>
  ),
};

export const WrappedLibraryToggle: Story = {
  render: () => (
    <StoryFrame>
      <StorySurface widthClassName="w-fit max-w-fit">
        <ComponentLibraryToggle />
      </StorySurface>
    </StoryFrame>
  ),
};

export const GlobalProviderSwitch: Story = {
  render: () => (
    <StoryFrame>
      <ProviderSwitchExample />
    </StoryFrame>
  ),
};
