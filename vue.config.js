
module.exports = {
<<<<<<< HEAD
=======
    publicPath:'./',
>>>>>>> 其日嘎0712提交
    devServer: {
        proxy: {
            // 配置跨域
            '/api': {
                target: "https://wap.365msmk.com/api/app/banner",
                ws:true,
                changOrigin:true,
<<<<<<< HEAD
                pathRewrite:{
=======
                pathRewrite:{  
>>>>>>> 其日嘎0712提交
                    '^/api':'/'
                }
            }
        }
    }
}
