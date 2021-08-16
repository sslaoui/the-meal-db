const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/categories', {
            target: 'http://themealdb.com/api/json/v2/9973533/',
            secure: false,
            changeOrigin: true,
        })
    );
    app.use(
        createProxyMiddleware('/latest', {
            target: 'http://themealdb.com/api/json/v2/9973533/',
            secure: false,
            changeOrigin: true,
        })
    );
};
