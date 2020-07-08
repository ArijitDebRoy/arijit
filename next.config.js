const withPWA = require('next-pwa');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = withPWA({
    localIdentName: "[local]__[hash:base64:5]",
    pwa: {
        dest: 'public',
        disable: true
    },
    crossOrigin: 'anonymous',
    webpack: (config, options) =>
    {
        config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
        config.optimization.minimizer.push(new UglifyJsPlugin());
        return config;
    }
})