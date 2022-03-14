const path = require('path');

const entries = {
    index: ['./src/ts/index.ts', './src/ts/header.ts', './js/index.js'],
    auth: ['./src/ts/login.ts', './src/ts/header.ts', './js/index.js'],
    shop: ['./src/ts/shop.ts', './src/ts/header.ts', './js/index.js'],
    product: ['./src/ts/product.ts', './src/ts/header.ts', './js/index.js']
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
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ]
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