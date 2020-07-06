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
  }
};
