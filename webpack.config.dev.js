const path = require('path');
const spawn = require('child_process').spawn;
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const port = process.env.SERVER_PORT || 8080;
const publicPath = "http://127.0.0.1:" + port + "/dist";

module.exports = {
    entry: [
        "webpack-dev-server/client?" + "http://127.0.0.1:" + port,
        "webpack/hot/only-dev-server",
        "./src/js/app.js"
    ],
    output: {
        path: path.resolve(__dirname, "app/dist"),
        publicPath: publicPath,
        filename: "app-bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({}),
        new ExtractTextPlugin({
            filename: '[file].css'
        })
    ],
    devServer: {
        hot: true,
        port: port,
        inline: true,
        compress: true,
        headers: {'Access-Control-Allow-Origin': '*'},
        contentBase: path.resolve(__dirname, "dist"),
        setup() {
            if (process.env.START_APP === 'yes') {
                spawn(
                    'npm',
                    ['run', 'dev-app'],
                    {shell: true, env: process.env, stdio: 'inherit'}
                )
                    .on('close', code => process.exit(code))
                    .on('error', spawnError => console.error(spawnError));
            }
        }
    }
};