module.exports = {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: ['db', 'mp3', 'ttf', 'obj', 'png', 'jpg'],
      sourceExts: ['jsx', 'js', 'json', 'ts', 'tsx'],
    },
  };
  