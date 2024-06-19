const path = require('path');

module.exports = {
  // Other Webpack configurations
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.mjs']
  }
};
