// vue.config.js
module.exports = {
  devServer: {
    port: 9000,
    proxy: {
      '/GTInterview-api': {
        target: 'http://192.168.50.216:8081/',
        changeOrigin: true
      }
    }
  },
}