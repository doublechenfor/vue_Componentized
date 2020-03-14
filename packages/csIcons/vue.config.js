const path = require('path')
const nodeExternals = require('webpack-node-externals');
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: '',
    outputDir: 'lib',
    assetsDir: '',
    css: {
        extract: false,
        sourceMap: false
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                    }
                },
            ],
        }
    },
    chainWebpack: config => {
        config.output.libraryExport('default');
        // 修改内部svg规则
        config.module
            .rule('svg')
            .exclude.add(resolve('./'))
            .end()
        // 新增规则，use为规则命名，loader表示使用的加载器，tap表示配置选项
        config.module
            .rule('svg-sprite')
            .test(/\.svg$/)
            .include.add(resolve('./'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    }
}