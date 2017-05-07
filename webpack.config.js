module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: __dirname,
        filename: "app/dist/app-bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};