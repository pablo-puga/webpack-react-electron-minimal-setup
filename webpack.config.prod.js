import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
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
            },
            {
                test: /\.js$/,
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
        new ExtractTextPlugin({
            filename: 'app-bundle.css'
        })
    ],
};