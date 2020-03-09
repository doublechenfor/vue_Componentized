module.exports = {
    pages: {
        index: {
            entry: './src/main.ts'
        }
    },
    runtimeCompiler: true,
    configureWebpack: {
        resolve: {
            extensions: [".ts", ".tsx", "vue", ".js", ".json"]
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                    }
                }
            ]
        }
    }
}