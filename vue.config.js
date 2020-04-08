module.exports = {
  // 设置二级域名
  publicPath: process.env.NODE_ENV === 'production'
    ? '/test/'
    : '/',
  outputDir: 'dist/test',
  assetsDir: 'static',
  devServer: {
    proxy: {
      '/api1001': {
        target: 'http://sod-1001springgateway.sod-dev1.prd.sod',
        changeOrigin: true,
        pathRewrite: {
          '^/api1001': ''
        }
      }
    }
  }
}
