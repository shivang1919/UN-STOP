const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'https://unstopapi.onrender.com',
      changeOrigin: true,
    })
  );
};