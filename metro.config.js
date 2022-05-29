const defaultSourceExts =
  require('metro-config/src/defaults/defaults').sourceExts

module.exports = {
  transformer: {
    getTransformOptions: () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    sourceExts: [...defaultSourceExts, 'cjs'],
  },
}