const path = require('path');
const webpack = require('webpack');
const spawn = require('child_process').spawn;
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
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({})
    ],
    devServer: {
        hot: true,
        port: port,
        inline: true,
        compress: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        contentBase: path.resolve(__dirname, "dist"),
        setup() {
            spawn(
                'npm',
                ['run', 'dev-app'],
                { shell: true, env: process.env, stdio: 'inherit' }
            )
            .on('close', code => process.exit(code))
            .on('error', spawnError => console.error(spawnError));
        }
    }
};