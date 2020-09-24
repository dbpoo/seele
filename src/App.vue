<template>
  <div id="app" :class="lang">
    <div class="header">
      <div class="section">
        <a :href="lang == 'zh' ? '/index.html' : '/index_en.html'" class="logo"></a>

        <div class="menu-pc">
          <router-link :to="lang == 'zh' ? '/' : '/en'">{{ $t("nav[0]") }}</router-link>
          <a :href="$t('platform')">{{ $t("nav[7]") }}</a>
          <router-link to="/team">{{ $t("nav[1]") }}</router-link>
          <!-- <a href="javascript:;">{{ $t("nav[2]") }}</a>
          <a href="javascript:;">{{ $t("nav[3]") }}</a> -->
          <a :href="$t('whitePager')">{{ $t("nav[4]") }}</a>
          <router-link to="/news">{{ $t("nav[5]") }}</router-link>
          <a href="https://seeleview.net/" target="_blank">{{
            $t("nav[6]")
          }}</a>
          <div class="menuLanguage">
            {{ $t("language") }}
            <ul>
              <li
                :class="lang == 'zh' ? 'active' : ''"
                @click="changeLanguageVal('en')"
              >
                中文
              </li>
              <li
                :class="lang == 'en' ? 'active' : ''"
                @click="changeLanguageVal('zh')"
              >
                English
              </li>
            </ul>
          </div>
        </div>

        <div
          class="menu-toggle"
          :class="showMenu ? 'close' : ''"
          @click="showMenu = !showMenu"
        ></div>
        <div class="menu-mobile" v-show="showMenu">
          <router-link :to="lang == 'zh' ? '/' : '/en'">{{ $t("nav[0]") }}</router-link>
          <router-link to="/team">{{ $t("nav[1]") }}</router-link>
          <!-- <a href="javascript:;">{{ $t("nav[2]") }}</a>
          <a href="javascript:;">{{ $t("nav[3]") }}</a> -->
          <a :href="$t('whitePager')">{{ $t("nav[4]") }}</a>
          <router-link to="/news">{{ $t("nav[5]") }}</router-link>
          <a href="https://seeleview.net/" target="_blank">{{
            $t("nav[6]")
          }}</a>
          <div class="tit">{{ $t("language") }}</div>
          <a
            :class="lang == 'zh' ? 'active' : ''"
            @click="changeLanguageVal('en')"
          >
            中文
          </a>
          <a
            :class="lang == 'en' ? 'active' : ''"
            @click="changeLanguageVal('zh')"
          >
            English
          </a>
        </div>
      </div>
    </div>
    <router-view v-if="RouterState" />
    <div class="footer">
      <div class="section">
        <div class="footer-copyright">
          Copyright © 2020 Seele Foundation
        </div>
        <div class="footer-email">
          <span>Official Email： </span><span>contact@seelen.pro<br>business@seelen.pro</span>
        </div>
        <div class="footer-link">
          <a
            href="https://medium.com/@seelen"
            class="fl-01"
            target="_blank"
          ></a>
          <!-- <a href="https://medium.com/@seelen" class="fl-02" target="_blank"></a> -->
          <a
            href="https://t.me/seelenseelen2020"
            class="fl-03"
            target="_blank"
          ></a>
          <a
            href="https://twitter.com/n_seele"
            class="fl-04"
            target="_blank"
          ></a>
          <!-- <a href="javascript:;" class="fl-05" target="_blank"></a> -->
          <a
            href="https://weibo.com/6561132287/profile?topnav=1&wvr=6"
            class="fl-06"
            target="_blank"
          ></a>
          <a href="https://seeleview.net/" class="fl-07" target="_blank"></a>
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
      showMenu: false,
      lang: sessionStorage.getItem("LANG"),
      RouterState: true
    };
  },
  provide() {
    return {
      reload: this.reload
    };
  },
  methods: {
    reload() {
      this.RouterState = false;
      this.$nextTick(() => {
        this.RouterState = true;
      });
    },
    changeLanguageVal(language) {
      if (language === "en") {
        this.lang = "zh";
        this.$i18n.locale = this.lang; // 关键语句
        sessionStorage.setItem("LANG", this.lang);
        this.showMenu = false;
        this.$router.push({ path: "/" });
      } else if (language === "zh") {
        this.lang = "en";
        this.$i18n.locale = this.lang; // 关键语句
        sessionStorage.setItem("LANG", this.lang);
        this.showMenu = false;
        this.$router.push({ path: "/en" });
      }

      this.reload();
    },
    addCookie(val) {
      sessionStorage.setItem("LANG", val);
    }
  },
  watch: {
    $route() {
      this.showMenu = false;
    }
  },
  mounted() {}
};
</script>

<style lang="less">
@import "css/reset";
@import "css/hover";

body {
  padding-top: 100px;
}

.section {
  width: 1200px;
  margin: 0 auto;
}

.header {
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  .section {
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
  }
}

.menu-pc {
  position: relative;
  display: flex;
  align-items: center;
  a {
    height: 100px;
    line-height: 100px;
    line-height: 10 0px;
    text-align: center;
    display: inline-block;
    padding: 0 15px;
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
  a.router-link-exact-active {
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

.menu-mobile {
  display: none;
}

.menu-toggle {
  display: none;
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
    padding-bottom: 20px;
  }
  .footer-email {
    overflow: hidden;
    text-align: center;
    color: #007082;
    display: flex;
    justify-content: center;
    span{
      display: inline-block;
      text-align: left;
    }
  }
  .footer-link {
    padding-top: 20px;
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
    a.fl-07 {
      background: url("./assets/fl_07.png") 0 0 no-repeat;
    }
  }
}

.container {
  min-height: 300px;
}

@media screen and (max-width: 640px) {
  body {
    padding-top: 80px;
  }
  .section {
    width: 100%;
  }
  .menu-pc {
    display: none;
  }
  .menu-mobile {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: block;
    > a {
      height: 40px;
      line-height: 40px;
      padding-left: 20px;
      display: flex;
      border-bottom: 1px solid #3e3e3e;
    }
    .tit {
      height: 40px;
      line-height: 40px;
      color: #fff;
      background-color: #007586;
      padding-left: 20px;
      font-size: 14px;
    }
  }
  .menu-toggle {
    display: block;
    width: 32px;
    height: 32px;
    background: url(./assets/menu_switch.png) center center no-repeat;
    background-size: 32px 28px;
    &.close {
      background: url(./assets/menu_close.png) center center no-repeat;
    }
  }
  .header {
    .section {
      height: 80px;
      .logo {
        width: 120px;
        height: 28px;
        background-size: contain;
      }
    }
  }
  .footer {
    height: auto;
    padding: 30px 0;
    .footer-link {
      a {
        margin: 0 10px;
      }
    }
  }
}
</style>
