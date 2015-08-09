module.exports = {
    entry: "./app.js",
    output: {
        path: "./dist",
        filename: "./bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    devServer: {
        hot: true,
        port: 3000
    }
};