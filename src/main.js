import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import storage from "good-storage";
import VueI18n from "vue-i18n";
import axios from "axios";

Vue.use(VueI18n);
Vue.prototype.$aixos = axios;
Vue.config.productionTip = false;

const sysLang = navigator.language.substr(0, 2);
const localLang = sessionStorage.getItem("LANG");

const i18n = new VueI18n({
  locale: localLang || sysLang, // 语言标识
  messages: {
    zh: require("./lang/zh"), // 中文语言包
    en: require("./lang/en") // 英文语言包
  }
});

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
