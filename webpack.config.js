const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: '/src/js/script.js',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
    new HTMLWebpackPlugin({ 
      template: './src/index.html',
    }) 
  ],
    module: {
        rules: [
            {
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'],
            },

            // {
            //     test: /\.html$/,
            //     use: ['html-loader'],
            // },
        ],
    },

};