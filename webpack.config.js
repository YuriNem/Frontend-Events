module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        plugins: ['syntax-jsx', 'transform-vue-jsx'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: 'url-loader',
            },
            {
                test: /\.svg/,
                use: 'svg-url-loader',
            },
        ],
    },
};
