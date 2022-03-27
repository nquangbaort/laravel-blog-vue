const mix = require('laravel-mix');
const path = require('path')
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
const webpack = {
    output: {
        chunkFilename: 'assets/js/chunks/js.[chunkhash].js',
    },
    resolve: {
        alias: {
            '@': path.resolve('resources/js/'),
            '@component': path.resolve('resources/js/components'),
            '@other': path.resolve('resources/js/components/other'),
            '@config': path.resolve('resources/js/app.config.js'),
            '@common': path.resolve('resources/js/common'),
            '@api': path.resolve('resources/js/api'),
            '@store': path.resolve('resources/js/store'),
            '@page': path.resolve('resources/js/components/page'),
            '@plugins': path.resolve('resources/js/plugins'),
            '@images': path.resolve('resources/images'),
        },
    }
};
mix.webpackConfig(webpack);
mix.js('resources/js/app.js', 'public/js')
    .extract()
    .vue()
    .sass('resources/sass/app.scss', 'public/css');
if (!mix.inProduction()) {
    mix.webpackConfig({
        devtool: 'inline-source-map'
    }).sourceMaps();
}

mix.version()
