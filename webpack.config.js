const path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle-[fullhash].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.jsx','.js'],
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|jpg|gift|jpeg)$/,
                loader: 'file-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'public','index.html'),
        }),
        new Webpack.DllReferencePlugin({
            manifest: require('./modules-manifest.json'),
        }),
        new AddAssetHtmlPlugin({
            filepath: path.resolve(__dirname,'dist','modules.js'),
            publicPath: '/',
        }),
        new MiniCssExtractPlugin({
            filename: '[name]-[fullhash].css',
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups:{
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                }
            }
        }
    }
};