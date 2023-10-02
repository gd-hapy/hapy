const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  devServer: {
		host: 'localhost', // 项目运行的ip
		port: 8888, // 项目运行的端口号
		proxy: {
			'/v1': {
				target: 'https://m.mi.com', // 需要代理的地址
				changeOrigin: true, //是否跨域
				ws: true,
				secure: false, // 如果是https接口，需要配置这个参数
				pathRewrite: { //重写接口地址
					// '^/apiv1': 'v1'
				},
				headers: { //header设置
					referer: 'https://m.mi.com' 
				},
			},
		}
	}
})