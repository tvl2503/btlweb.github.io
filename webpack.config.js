const path = require('path');

const entries = {
    index: ['./src/ts/index.ts', './src/ts/header.ts', './js/index.js'],
    auth: ['./src/ts/login.ts', './src/ts/header.ts', './js/index.js'],
}


module.exports = {
    mode: 'development',
    entry: {
        ...entries
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$i/,
                loader: "css-loader",
                options: {
                    url: true
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        port: 9090,
        historyApiFallback: true
    }

}