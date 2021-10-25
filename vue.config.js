var path = require("path");
var PrerenderSpaPlugin = require("prerender-spa-plugin");
const { push } = require("core-js/fn/array");

module.exports = {
  publicPath: "./",
  filenameHashing: false,
  configureWebpack: config => {
    config.plugins.push(
      new PrerenderSpaPlugin(path.join(__dirname, "./dist"), [
        "/",
        "/en",
        "/team",
        "/about",
        "/news",
        "/detail"
      ])
    );
  },
  devServer: {
    host: "localhost",
    port: 8080, // 端口号
    https: true, // https:{type:Boolean}
    open: false, // 配置自动启动浏览器
    proxy: {
      "/wp-json": {
        target: "https://api.lkbt.pro", // 要访问的接口域名
        ws: true, // 是否启用websockets
        changeOrigin: true // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
      }
    }
  }
};
