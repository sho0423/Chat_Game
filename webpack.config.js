const path = require('path')
//returns '/Users/shotaro_okamoto/ProperDocs/programing/React_practice/release'
// '__dirname' means the directory to which this file belongs
module.exports = {
    entry: {
        filename: path.resolve(__dirname,'./src/main.js')
    },
    output: {
        path: path.resolve(__dirname,'./out'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env','@babel/react']
                }
            }
        ]
    }
}