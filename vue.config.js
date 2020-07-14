
module.exports = {

    publicPath:'./',

    devServer: {
        proxy: {
            // 配置跨域
            '/api': {
                target: "https://wap.365msmk.com/api/app/banner",
                ws:true,
                changOrigin:true,

                pathRewrite:{

                pathRewrite:{

                pathRewrite:{

                    '^/api':'/'
                }
            }
        }
    }
}}
}
