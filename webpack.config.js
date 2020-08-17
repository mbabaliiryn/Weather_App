const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.js'),
  watch: true,
  devServer: {
    contentBase: './dist',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'main.js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(scss|sass|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.json', '.js'],
  },
};