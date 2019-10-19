// vue.config.js
module.exports = {
    devServer: {
        port: 9000,
        proxy: 'http://localhost:4000'
    }
}