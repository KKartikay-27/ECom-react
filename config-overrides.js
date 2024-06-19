const path = require('path');

module.exports = function override(config, env) {
  config.resolve.extensions = [...config.resolve.extensions, '.mjs'];
  config.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: 'javascript/auto',
  });
  return config;
};
