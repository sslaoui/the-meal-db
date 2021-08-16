const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/filter.php?c=miscellaneous', {
            target: 'http://themealdb.com/api/json/v2/9973533/',
            secure: false,
            changeOrigin: true,
        })
    );
};
