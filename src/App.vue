<template>
  <div id="app" :class="lang">
    <div class="header">
      <div class="section">
        <a href="javascript:;" class="logo"></a>
        <div class="menu">
          <router-link to="/index">{{ $t("nav[0]") }}</router-link>
          <router-link to="/team">{{ $t("nav[1]") }}</router-link>
          <router-link to="/technology">{{ $t("nav[2]") }}</router-link>
          <router-link to="/cooperation">{{ $t("nav[3]") }}</router-link>
          <a :href="$t('whitePager')" target="_blank">{{ $t("nav[4]") }}</a>
          <router-link to="/news">{{ $t("nav[5]") }}</router-link>
          <div class="menuLanguage">
            {{ $t("language") }}
            <ul>
              <li
                :class="lang == 'zh' ? 'active' : ''"
                @click="changeLanguageVal"
              >
                中文
              </li>
              <li
                :class="lang == 'en' ? 'active' : ''"
                @click="changeLanguageVal"
              >
                English
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <router-view />
    <div class="footer">
      <div class="section">
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
      if (this.lang === "zh") {
        this.lang = "en";
        this.$i18n.locale = this.lang; // 关键语句
        sessionStorage.setItem("LANG", this.lang);
      } else {
        this.lang = "zh";
        this.$i18n.locale = this.lang; // 关键语句
        sessionStorage.setItem("LANG", this.lang);
      }
      location.reload();
    }
  }
};
</script>

<style lang="less">
@import "css/reset";
@import "css/hover";

#app {
  padding-top: 100px;
}

.section {
  width: 1200px;
  margin: 0 auto;
}

.header {
  width: 100%;
  height: 100px;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  .section {
    height: 100px;
    line-height: 100px;
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
      position: relative;
      display: flex;
      align-items: center;
      a {
        height: 100px;
        line-height: 10 0px;
        text-align: center;
        display: inline-block;
        padding: 0 20px;
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
      a.router-link-active {
        color: #007586;
        &:after {
          display: block;
        }
      }
      .menuLanguage {
        height: 100px;
        line-height: 100px;
        margin: 0 30px 0 10px;
        padding-right: 30px;
        text-align: center;
        display: inline-block;
        font-size: 18px;
        background: url("./assets/icon_arrow.png") right center no-repeat;
        position: relative;
        ul {
          background-color: #8b8b89;
          border-radius: 10px;
          position: absolute;
          top: 100px;
          right: 0;
          overflow: hidden;
          display: none;
          li {
            width: 120px;
            height: 38px;
            line-height: 38px;
            text-align: center;
            a {
              width: 100%;
              font-size: 16px;
              height: 38px;
              line-height: 38px;
              text-align: center;
              display: inline-block;
              border-radius: 0;
              margin: 0;
              padding: 0;
              color: #fff;
            }
            &.active {
              color: #fff;
              background-color: #007586;
            }
          }
        }
        &:hover {
          ul {
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
}
</style>
