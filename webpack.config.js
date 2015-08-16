module.exports = {
    entry: "./app.js",
    output: {
        path: "./dist",
        filename: "./bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader:'webpack-traceur?annotations&runtime'}
        ]
    },
    devServer: {
        hot: true,
        port: 3000
    }
   
};