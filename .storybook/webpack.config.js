module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.md$/,
        loader: "raw-loader"
      }
    ]
  }
};
