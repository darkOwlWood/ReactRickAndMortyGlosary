const path = require('path');
const Webpack = require('webpack');

module.exports = {
    entry:{
        modules: ['react','react-dom'],
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js',
        library: '[name]',      
    },
    plugins: [
        new Webpack.DllPlugin({
            name: '[name]',
            path: path.join(__dirname,'[name]-manifest.json'),
        }),
    ]
};