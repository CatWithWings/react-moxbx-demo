var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        'vendor': './app/vendor.js',
        'app': './app/index.js'
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            }, 

            {
                test: /\.jsx?$/,
                loader:'react-hot-loader',
                exclude: /node_modules/
            },

            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },

            { // awesome
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "url-loader",
                options: {
                    limit : 10000,
                    minetype : 'application/font-woff'
                } 
            },
            { // awesome
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "file-loader" 
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/,
                loader: "url-loader",
                options: {
                    limit : 8192,
                    name : 'img/[name].[hash].[ext]'
                }
            },
            {
                test: /\.(scss|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:[
                        {loader: "css-loader"}, 
                        {loader: "sass-loader"}
                    ]
                })
            }
        ]
    },

    plugins: [

        new webpack.optimize.CommonsChunkPlugin({
            name: ['index', 'vendor']
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html', 
            template: 'public/index.html'
        })
    ]
};