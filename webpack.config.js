const path = require("path")
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  plugins: [
    new NodePolyfillPlugin()
  ],
  resolve: { aliasFields: ['browser', 'browser.esm'] }
};