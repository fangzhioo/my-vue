module.exports = {
    lintOnSave: true,
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'assets',

    chainWebpack: config => {
        config.plugins.delete('preload');
        config.plugins.delete('prefetch');
    },
};
