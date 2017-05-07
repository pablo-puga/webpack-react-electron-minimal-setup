const path = require('path');
const port = process.env.SERVER_PORT || 8080;
const publicPath = "http://localhost:" + port + "/dist";

module.exports = {
    entry: [
        "webpack-dev-server/client?" + publicPath,
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
    devServer: {
        port: port,
        inline: true,
        contentBase: path.resolve(__dirname, "app")
    }
};