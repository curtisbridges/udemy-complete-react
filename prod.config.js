const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
  const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' })

  return {
    mode: 'production',
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                url: false,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    devtool: 'source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/',
    },
    plugins: [
      CSSExtract,
      new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY': JSON.stringify(
          process.env.FIREBASE_API_KEY
        ),
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(
          process.env.FIREBASE_AUTH_DOMAIN
        ),
        'process.env.FIREBASE_DATABASE_URL': JSON.stringify(
          process.env.FIREBASE_DATABASE_URL
        ),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(
          process.env.FIREBASE_PROJECT_ID
        ),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(
          process.env.FIREBASE_STORAGE_BUCKET
        ),
        'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(
          process.env.FIREBASE_MESSAGING_SENDER_ID
        ),
      }),
    ],
  }
}
