const webpack = require("webpack");
console.log(webpack.version);
module.exports = {
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    proxy: [
      {
        // 추가 예정
        context: ["/auth", "/api"],
        target: "http://3.38.172.15:8080",
        changeOrigin: true,
      },
    ],
  },
  babel: {
    plugins: ["babel-plugin-styled-components"],
  },
  webpack: {
    plugins: [
      new webpack.DefinePlugin({
        process: { env: {} },
      }),
    ],
  },
};
