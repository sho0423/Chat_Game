const path = require('path')
//returns '/Users/shotaro_okamoto/ProperDocs/programing/React_practice/release'
// '__dirname' means the directory to which this file belongs
module.exports = {
  mode: "production",
  entry: {
    filename: path.resolve(__dirname,'./test/Routing/index.js')
  },
  output: {
    path: path.resolve(__dirname,'./test/Routing'),
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
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false }
          }
        ]
      }
    ]
  }
}