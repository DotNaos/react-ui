import type { Preview } from '@storybook/react-vite'
import "../stories/storybook.css";
import { ThemeProvider } from "../src/components/theme-provider";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="dark" storageKey="storybook-react-ui-theme">
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
