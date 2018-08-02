var path = require('path');
var webpack = require('webpack');

module.exports = {
    mode: "development",
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    context: path.resolve('js'),
    entry: {
        about: './about_page.js',
        home: './home_page.js',
        contact: './contact_page.js'
    },
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/',
        filename: "[name].js"
    },
    devServer: {
        contentBase: 'public'
    },
    module: {
        rules: [
            // {
            //     enforce: "pre",
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: "eslint-loader",
            //     options: {
            //         configFile: ".eslint.json"
            //     }
            // },
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.es6']
    },
    watch: true
}