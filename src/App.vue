<template>
  <div id="app" :class="lang">
    <div class="header">
      <div class="inner-wrap">
        <a href="javascript:;" class="logo"></a>
        <div class="menu">
          <router-link to="/">{{ $t("nav[0]") }}</router-link>
          <router-link to="/">{{ $t("nav[1]") }}</router-link>
          <router-link to="/">{{ $t("nav[2]") }}</router-link>
          <router-link to="/about">{{ $t("nav[3]") }}</router-link>
          <a :href="$t('WhitePager')" target="_blank">{{ $t("nav[4]") }}</a>
          <router-link to="/news">{{ $t("nav[5]") }}</router-link>
        </div>
      </div>
    </div>
    <router-view />
    <div class="footer">
      <div class="inner-wrap">
        <div class="footer-copyright">
          Copyright © 2019 Seele Foundation
        </div>
        <div class="footer-link">
          <a href="javascript:;" class="fl-01"></a>
          <a href="javascript:;" class="fl-02"></a>
          <a href="javascript:;" class="fl-03"></a>
          <a href="javascript:;" class="fl-04"></a>
          <a href="javascript:;" class="fl-05"></a>
          <a href="javascript:;" class="fl-06"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      menuShow: false,
      lang: sessionStorage.getItem("LANG")
    };
  },
  methods: {
    changeLanguage(key, index) {
      this.menuShow = false;
    },
    changeLanguageVal() {
      if (this.lang == "zh") {
        this.lang = "en";
        this.$i18n.locale = this.lang; //关键语句
        sessionStorage.setItem("LANG", this.lang);
      } else {
        this.lang = "zh";
        this.$i18n.locale = this.lang; //关键语句
        sessionStorage.setItem("LANG", this.lang);
      }
      location.reload();
    },
    addCookie(val) {
      sessionStorage.setItem("LANG", val);
    }
  }
};
</script>

<style lang="less">
@import "css/reset";
@import "css/hover";

.inner-wrap {
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  width: 100%;
  position: fixed;
  height: 100px;
  top: 0;
  left: 0;
  z-index: 999;
  .inner-wrap {
    height: 100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    .logo {
      width: 190px;
      height: 44px;
      display: block;
      background: url("./assets/logo.png") 0 0 no-repeat;
    }
    .menu {
      height: 90px;
      position: relative;
      display: flex;
      align-items: center;
      a {
        text-align: center;
        display: inline-block;
        padding: 10px 20px;
        font-size: 18px;
        position: relative;
        color: #3f3f3f;
        &:after {
          display: none;
          content: " ";
          position: absolute;
          width: 36px;
          height: 6px;
          overflow: hidden;
          background-color: #007586;
          bottom: 0;
          left: 50%;
          margin-left: -18px;
        }
        &:hover {
          color: #007586;
          &:after {
            display: block;
          }
        }
      }
    }
  }
}

.footer {
  border-top: 1px solid #007082;
  display: flex;
  height: 280px;
  align-items: center;
  .footer-copyright {
    text-align: center;
    font-size: 20px;
    color: #007082;
    margin-bottom: 30px;
  }
  .footer-link {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      width: 43px;
      height: 43px;
      display: block;
      margin: 0 18px;
    }
    a.fl-01 {
      background: url("./assets/fl_01.png") 0 0 no-repeat;
    }
    a.fl-02 {
      background: url("./assets/fl_02.png") 0 0 no-repeat;
    }
    a.fl-03 {
      background: url("./assets/fl_03.png") 0 0 no-repeat;
    }
    a.fl-04 {
      background: url("./assets/fl_04.png") 0 0 no-repeat;
    }
    a.fl-05 {
      background: url("./assets/fl_05.png") 0 0 no-repeat;
    }
    a.fl-06 {
      background: url("./assets/fl_06.png") 0 0 no-repeat;
    }
  }
}

.container {
  min-height: 300px;
  padding-top: 100px;
}
</style>
