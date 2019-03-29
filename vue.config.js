const PostImport  = require('postcss-import')
const PostUrl = require('postcss-url')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/',
    configureWebpack: {
        plugins: [
            new PostImport(),
            new PostUrl()
        ]
    }
}
