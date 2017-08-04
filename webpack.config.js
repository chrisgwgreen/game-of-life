const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const extractSass = new ExtractTextPlugin({
    filename: 'style.css',
    disable: process.env.NODE_ENV === 'development'
});

module.exports = {
    entry: [
        './src/index.js',
        './src/index.scss'
    ],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    // devtool: 'inline-source-map',
    module: {
        loaders: [{
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /(node_modules)/
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        },
        // {
        //     test: /\.(jpe?g|png|gif|svg)$/i,
        //     loaders: [
        //         'file?hash=sha512&digest=hex&name=[hash].[ext]',
        //         'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        //     ]
        // }
        ],
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }],
                fallback: 'style-loader'
            })
        },{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        extractSass,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
