const path = require('path');

module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: path.resolve(__dirname, "app/dist"),
        publicPath: "/dist/",
        filename: "app-bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};