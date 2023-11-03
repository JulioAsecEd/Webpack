const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: "./src/app.js",

    devServer: {
        static: './',
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: 'Output Management',
        }),
      ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
          {
            test: /\.css$/i, use: ['style-loader', 'css-loader'],
          },

          {
            test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', "sass-loader"]
          }

        ],
      }


}

