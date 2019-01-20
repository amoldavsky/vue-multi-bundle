const path = require('path');

// https://cli.vuejs.org/config/#target-browsers
// vue.config.js
module.exports = {
    filenameHashing: true,
    publicPath: './',
    // indexPath: 'test.html',
    // outputDir: 'dist/app',

    devServer: {
        // contentBase: path.join(__dirname, 'src/widget'),
        contentBase: 'dist/',
        writeToDisk: true
    },

    chainWebpack: config => {
        config.entryPoints.delete('app');

        config
            .entry('widget')
            .add(path.join(__dirname, 'src/widget/main.ts'))
            .end();

        config.entry('donr')
            .add(path.join(__dirname, 'src/runner/donr.ts'))
            .end();

        // config.entry('test')
        //     .add('./public/test.js')
        //     .end();
    },

    // https://cli.vuejs.org/guide/webpack.html#simple-configuration
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // mutate config for production...
        } else {
            // mutate for development...
        }
    },
    pages: {
        widget: {
            // entry for the *public* page
            entry: 'src/widget/main.ts',
            // the source template
            template: 'public/index.html',
            // output as dist/index.html
            filename: 'index.html'
        },
        donr: {
            entry: 'src/runner/donr.ts',
            template: 'public/donr.html',
            // filename: 'donr.js'
        }
    }
}
