process.env.TAMAGUI_TARGET = 'native'

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", { jsxRuntime: "automatic" }]],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui"],
          config: "./tamagui.config.ts",
          logTimings: true,
          disableExtraction: process.env.NODE_ENV === 'development',
        },
      ],
      ['transform-inline-environment-variables', {
        include: 'TAMAGUI_TARGET'
      }]
    ],
  };
};
