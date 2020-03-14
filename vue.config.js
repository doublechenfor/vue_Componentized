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
    }
}