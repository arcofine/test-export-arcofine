module.exports = {
       stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
       addons: [
              "@storybook/addon-links",
              "@storybook/addon-essentials",
              "@storybook/addon-interactions",
              "@storybook/preset-create-react-app",
       ],
       framework: "@storybook/react",
       webpackFinal: async (config) => {
              config.module.rules.push({
                     test: /\.css$/,
                     use: ["style-loader", "css-loader"],
                     include: path.resolve(__dirname, "../src/stories"),
              });
              return config;
       },
};
