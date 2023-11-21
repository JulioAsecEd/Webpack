const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssWebpackPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development', //Indica ao webpack que este é o modo de desenvolvimento
    entry: "./src/index.js",//entrada do documento principal js

    devServer: {
        static: './dist', //indica a pasta que o server irá buscar o index.html
      },

      plugins: [
        new HtmlWebpackPlugin({
          title: 'Output Management', //titulo da página
          template: './index.html' //html template
        }),
        new miniCssWebpackPlugin({
            filename: "css/style.css" //indica o arquivo que irá carregar o style.css
        })
      ],

    output: {
        filename: "[name].bundle.js", //indica o documento js de saída
        path: path.resolve(__dirname, "dist") //indica o caminho de saída do bundle
    },

    module: {
        rules:[
            {
                test: /\.css$/i, use : [miniCssWebpackPlugin.loader, "css-loader"]
            },
            {
                test: /\.scss$/i, use: [miniCssWebpackPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    }
}

