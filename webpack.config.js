const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin'); не установлен плагин
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    context: path.resolve(__dirname, 'src'), // где лежат все исходники
    mode: 'development',
    entry: {
        main: './index.js',
        analitics: './analytics.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    resolve: {
        alias: {
            '@pathJs' : path.resolve(__dirname, 'src/js'),
            '@' : path.resolve(__dirname, 'src')
        }
    },
    // devtool: 'source-map',
    plugins: [
        new HTMLWebpackPlugin({
            // title: 'Webpack title', // если нет шаблона
            template: './index.html'
        }),
        // new CleanWebpackPlugin()
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist'),
                    toType: 'dir',
                    globOptions: {
                        ignore: ['*.DS_Store', 'Thumbs.db'],
                    },
                },
            ],
        }),

    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [ {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                    },
                }, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|gif|jpe?g|svg)$/i,
                type: 'asset/resource',
                generator: {
                    // filename: 'images/[name].[hash:6][ext]',
                    filename: 'images/[name][ext]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name].[hash:6][ext]',
                },
            },
        ]
    }
}
