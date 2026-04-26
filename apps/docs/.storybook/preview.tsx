import type { Preview } from "@storybook/react-vite";
import { ThemeProvider } from "@dotnaos/react-ui";
import "../stories/storybook.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider
        componentLibraryStorageKey="storybook-react-ui-library"
        defaultComponentLibrary="shadcn"
        defaultTheme="dark"
        storageKey="storybook-react-ui-theme"
      >
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
