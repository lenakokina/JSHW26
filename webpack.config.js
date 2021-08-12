const path = require('path');

module.exports = {
    entry: './src/js/script.js',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
}