const path = require('path')

module.exports = {
  entry: './a.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  },
  mode: "none",
  devtool: 'inline-source-map',
}