process.env.TAMAGUI_TARGET = "native";

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", { jsxRuntime: "automatic" }]],
    plugins: [
      // if you want reanimated support
      // 'react-native-reanimated/plugin',
      ...(process.env.EAS_BUILD_PLATFORM === "android"
        ? []
        : [
            [
              "@tamagui/babel-plugin",
              {
                components: ["tamagui"],
                config: "./src/tamagui.config.ts",
              },
            ],
          ]),
      [
        "transform-inline-environment-variables",
        {
          include: "TAMAGUI_TARGET",
        },
      ],
    ],
  };
};
