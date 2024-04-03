const path = require('path');

module.exports = function override(config, env) {
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias['react'] = path.resolve('./node_modules/react');
    return config;
};