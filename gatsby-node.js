exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    externals: {
      canvas: 'canvas', // important: 'Q' capitalized
    },
    module: {
      rules: [
        {
          test: /\.gltf$/,
          use: [
            `url-loader`,
          ],
         
        },
      ],

    },
  })
}