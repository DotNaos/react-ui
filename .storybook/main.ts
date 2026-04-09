import type { StorybookConfig } from '@storybook/react-vite';
import tailwindcss from '@tailwindcss/vite';

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  framework: "@storybook/react-vite",
  viteFinal: async (config) => {
    config.plugins = [...(config.plugins ?? []), tailwindcss()];
    config.base = process.env.STORYBOOK_BASE_PATH ?? config.base;
    return config;
  }
};
export default config;
