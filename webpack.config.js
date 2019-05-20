const webpack = require('webpack');

module.exports = {
    entry: __dirname + '/src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
            test: /\.css$/,
                use: ['style-loader','css-loader', {
                loader: 'postcss-loader',
                options: {
                    plugins: () => [require('autoprefixer')]
                }}]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist/assets',
        publicPath: '/',
        sourceMapFilename: "bundle.map",
        filename: 'bundle.js'
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //    sourceMap: true,
        //    warnings: false,
        //    mangle: true,
        // }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: "#source-map",
    devServer: {
        contentBase: './dist'
    }
};