module.exports = {
  mode: 'development',
  entry: './app/main.js',
  output:{
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  devServer:{
    contentBase:'./public'
  },
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
