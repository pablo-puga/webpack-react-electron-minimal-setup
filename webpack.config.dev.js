import path from 'path';
import { spawn } from 'child_process';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
const port = process.env.SERVER_PORT || 8080;
const publicPath = "http://127.0.0.1:" + port + "/dist";

export default {
    devtool: 'inline-source-map',
    target: 'electron-renderer',
    resolve: {
        modules: [
            path.resolve(__dirname, 'src/js'),
            'node_modules'
        ]
    },
    entry: [
        "react-hot-loader/patch",
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
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({}),
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin({
            filename: '[file].css'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
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