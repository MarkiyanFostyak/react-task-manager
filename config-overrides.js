const rewireTypescript = require('react-app-rewire-typescript');
const rewireCssModules = require('react-app-rewire-css-modules');

module.exports = function override(config, env) {
    config = rewireTypescript(config, env);
    config = rewireCssModules(config, env);
    return config;
  }