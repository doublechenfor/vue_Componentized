const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    pages: {
        index: {
            entry: './src/main.ts'
        }
    },
    runtimeCompiler: true,
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
        },
        resolve: {
            extensions: [".ts", ".tsx", "vue", ".js", ".json"]
        },
    },
    chainWebpack: config => {
        // 修改内部svg规则
        config.module
            .rule('svg')
            .exclude.add(resolve('./packages/icons'))
            .end()
        // 新增规则，use为规则命名，loader表示使用的加载器，tap表示配置选项
        config.module
            .rule('svg-sprite')
            .test(/\.svg$/)
            .include.add(resolve('./packages/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    }
}