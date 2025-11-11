/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  // 1. Specifies where Storybook should look for your component stories
  stories: [
    "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)", 
  ],

  // 2. Specifies the framework (assuming Next.js for your structure)
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  // 3. Essential addons for a smooth development experience
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],

  // 4. If you have any public assets (like fonts or images)
  staticDirs: ['../public'],
};

export default config;
