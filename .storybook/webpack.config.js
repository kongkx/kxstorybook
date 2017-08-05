module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: [ /node_modules/ ]
      },
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
