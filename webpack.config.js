module.exports = {
	context: __dirname,
    entry: "./app.js",
    output: {
        path: __dirname,
        filename: "./bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    devServer: {
        hot: true,
        port: 3003
    }
};