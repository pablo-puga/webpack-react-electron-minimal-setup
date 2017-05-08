const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: path.resolve(__dirname, "app/dist"),
        publicPath: "/dist/",
        filename: "app-bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'app-bundle.css'
        })
    ],
};