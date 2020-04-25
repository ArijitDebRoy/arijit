const withPWA = require('next-pwa');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const withPurgeCss = require('next-purgecss');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = withPWA(withPurgeCss(
    {
        purgeCssPaths: [
            'pages/**/*',
            'components/**/*',
            'layouts/**/*'
        ],
        purgeCss: {
            whitelist: () => [],
            whitelistPatterns: () => [/^Toastify/]
        }
    }
), {
    localIdentName: "[local]__[hash:base64:5]",
    pwa: {},
    crossOrigin: 'anonymous',
    webpack: (config, options) =>
    {
        config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
        config.optimization.minimizer.push(new UglifyJsPlugin());
        return config;
    }
});

module.exports.useFileSystemPublicRoutes = false;
