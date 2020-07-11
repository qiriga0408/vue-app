
module.exports = {
    devServer: {
        proxy: {
            // 配置跨域
            '/api': {
                target: "https://test.365msmk.com/api/app/login",
                ws:true,
                changOrigin:true,
                pathRewrite:{
                    '^/api':'/'
                }
            }
        }
    }
}
