export {};

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app: any) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://43.200.13.155:8080",
      changeOrigin: true,
    })
  );
};