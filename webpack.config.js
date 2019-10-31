module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./public"
  },
  devtool: "source-maps",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
