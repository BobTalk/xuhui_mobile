const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
process.env.VUE_APP_Version = require("./package.json").version;
const Timestamp = new Date().getTime();

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    // 基本路径
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 删除预加载
            config.plugins.delete('preload');
            config.plugins.delete('prefetch');
            // 压缩代码
            config.optimization.minimize(true);
            // 分割代码
            config.optimization.splitChunks({
                cacheGroups: {
                    vendor: {
                        chunks: "all",
                        test: /node_modules/,
                        name: "vendor",
                        minChunks: 1,
                        maxInitialRequests: 5,
                        minSize: 0,
                        priority: 100,
                    },
                    common: {
                        chunks: "all",
                        test: /[\\/]src[\\/]js[\\/]/,
                        name: "common",
                        minChunks: 2,
                        maxInitialRequests: 5,
                        minSize: 0,
                        priority: 60
                    },
                    styles: {
                        name: 'styles',
                        test: /\.(sa|sc|c)ss$/,
                        chunks: 'all',
                        enforce: true,
                    },
                    runtimeChunk: {
                        name: 'manifest'
                    }
                }
            })
        }
    },
    configureWebpack: config => {
        config.resolve = {
            extensions: ['.js', '.vue', '.json', ".css"],
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': resolve('src'),
            }
        }

        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.plugins.push(
                //生产环境自动删除console
                new UglifyJsPlugin({
                    uglifyOptions: {
                        compress: {
                            drop_debugger: true,
                            drop_console: true,
                        },
                    },
                    sourceMap: false,
                    parallel: true,
                })
            );
        }
        if (process.env.NODE_ENV === "production") {
            config.output.filename = `js/[name].[contenthash:8]_${
            process.env.VUE_APP_Version
          }_${Timestamp}.js`;
            config.output.chunkFilename = `js/[name].[contenthash:8]_${
            process.env.VUE_APP_Version
          }_${Timestamp}.js`;
        }
    },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    // PWA 插件相关配置
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
        port: 9090,
        https: false,
        hotOnly: false,
        open: true, //配置自动启动浏览器
        proxy: {
            // 设置代理
            "/api": {
                target: "http://10.129.36.109:8082", //生产 别忘了加http
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "" //这里理解成用‘/burying’代替target里面的地址，后面组件中我们掉接口时直接用burying代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/burying/user/add’即可
                }
            }
        },
        stats: {
            children: false,
        }
    },
    // 第三方插件配置
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, "src/assets/css/reset.less")
            ]
        }
    }
}