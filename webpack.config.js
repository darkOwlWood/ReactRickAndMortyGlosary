const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle-[hash].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.jsx','.js'],
    },
    module: {
        rules: [
            {
                test: /.(css|scss)$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /.(png|jpg|gift|jpeg)$/,
                loader: 'file-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'public','index.html'),
        }),
    ],
};