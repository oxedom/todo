const path = require('path')

module.exports = {
    entry: {
        index: './src/js/index.js',
        another: './src/js/dom.js',
    },
    output: {
        filename: '[name].bundle.js',
        // filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        runtimeChunk: 'single',
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8888,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    }
}