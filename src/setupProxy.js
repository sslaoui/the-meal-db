const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/categories.php', {
            target: 'https://themealdb.com/api/json/v2/9973533',
            secure: false,
            changeOrigin: true,
        })
    );
    app.use(
        createProxyMiddleware('/latest.php', {
            target: 'https://themealdb.com/api/json/v2/9973533',
            secure: false,
            changeOrigin: true,
        })
    );
};
