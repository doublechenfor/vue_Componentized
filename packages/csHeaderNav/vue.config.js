const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: config => {
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