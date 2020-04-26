<template>
  <div class="container">
    <div class="banner-container">
      <div class="banner wow zoomInBg" data-wow-duration="3s">
        <img :src="$t('img.banner')" alt="" srcset="" class="wow fadeInUp" />
      </div>
    </div>
    <div class="col-1">
      <div class="section wow fadeInUp">
        <div class="con">
          <div class="videobox">
             <img :src="$t('img.video')" alt="" srcset="" />
            <!-- <video-player
              class="video-player vjs-custom-skin vjs-big-play-centered"
              ref="videoPlayer"
              :playsinline="true"
              :options="playerOptions"
            ></video-player> -->
          </div>
          <div class="videotxt">
            <p v-for="(item, index) in videoTxt" :key="index">{{ item }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-2">
      <div class="section wow fadeInUp">
        <ul>
          <li class="li1">
            <img src="../assets/icon_1.png" alt="" srcset="" />
          </li>
          <li class="li2">{{ $t("intro[0].tit") }}</li>
          <li class="li3">
            {{ $t("intro[0].con") }}
          </li>
        </ul>
        <ul>
          <li class="li1">
            <img src="../assets/icon_2.png" alt="" srcset="" />
          </li>
          <li class="li2">{{ $t("intro[1].tit") }}</li>
          <li class="li3">
            {{ $t("intro[1].con") }}
          </li>
        </ul>
        <ul>
          <li class="li1">
            <img src="../assets/icon_3.png" alt="" srcset="" />
          </li>
          <li class="li2">{{ $t("intro[2].tit") }}</li>
          <li class="li3">
            {{ $t("intro[2].con") }}
          </li>
        </ul>
        <ul>
          <li class="li1">
            <img src="../assets/icon_4.png" alt="" srcset="" />
          </li>
          <li class="li2">{{ $t("intro[3].tit") }}</li>
          <li class="li3">
            {{ $t("intro[3].con") }}
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="col-3">
      <div class="section wow fadeInUp">
        <div class="tit"><img :src="$t('img.tit3')" alt="" srcset="" /></div>
        <div class="con">
          <img src="../assets/img_3.jpg" alt="" srcset="" />
          <div>
            <p>
              LEBEN是一个以“医疗知识深度共享”与“医疗数据可信交换”为主要技术特点的，融合了人工智能技术与大数据的，面向全球的医疗产业智能合约协作平台。
            </p>
            <p>
              LEBEN的愿景为“全球医疗均质化”，此处“均质化”是指：在LEBEN平台的帮助下，让医疗条件并不发达地区的医疗水平，无限趋近于医疗条件发达的地区。
            </p>
          </div>
        </div>
      </div>
      <div class="section wow fadeInUp">
        <div class="tab">
          <div
            class="tab-item"
            :class="index == tabIndex ? 'tab-item-cur' : ''"
            v-for="(item, index) in tabArr"
            :key="index"
            @click="changeTab(index)"
          >
            {{ item }}
          </div>
        </div>
        <div class="img-con">
          <template v-if="tabIndex == 0">
            <img :src="$t('img.fk[0]')" alt="" srcset="" />
            <img :src="$t('img.fk[1]')" alt="" srcset="" />
            <img :src="$t('img.fk[2]')" alt="" srcset="" />
          </template>
          <template v-if="tabIndex == 1">
            <img :src="$t('img.fk[0]')" alt="" srcset="" />
            <img :src="$t('img.fk[1]')" alt="" srcset="" />
            <img :src="$t('img.fk[2]')" alt="" srcset="" />
          </template>
          <template v-if="tabIndex == 2">
            <img :src="$t('img.fk[0]')" alt="" srcset="" />
            <img :src="$t('img.fk[1]')" alt="" srcset="" />
            <img :src="$t('img.fk[2]')" alt="" srcset="" />
          </template>
        </div>
      </div>
    </div> -->
    <!-- <div class="col-4">
      <div class="section">
        <div class="history-line"></div>
        <div class="history-point wow fadeInRight">
          <ul>
            <li>{{ $t("history[0].t1") }}</li>
            <li>{{ $t("history[0].t2") }}</li>
            <li><img src="../assets/point.png" alt="" srcset="" /></li>
            <li v-html="$t('history[0].txt')"></li>
          </ul>
          <ul>
            <li>{{ $t("history[1].t1") }}</li>
            <li>{{ $t("history[1].t2") }}</li>
            <li><img src="../assets/point.png" alt="" srcset="" /></li>
            <li v-html="$t('history[1].txt')"></li>
          </ul>
          <ul>
            <li>{{ $t("history[2].t1") }}</li>
            <li>{{ $t("history[2].t2") }}</li>
            <li><img src="../assets/point.png" alt="" srcset="" /></li>
            <li v-html="$t('history[2].txt')"></li>
          </ul>
          <ul>
            <li>{{ $t("history[3].t1") }}</li>
            <li>{{ $t("history[3].t2") }}</li>
            <li><img src="../assets/point.png" alt="" srcset="" /></li>
            <li v-html="$t('history[3].txt')"></li>
          </ul>
          <ul>
            <li>{{ $t("history[4].t1") }}</li>
            <li>{{ $t("history[4].t2") }}</li>
            <li><img src="../assets/point.png" alt="" srcset="" /></li>
            <li v-html="$t('history[4].txt')"></li>
          </ul>
          <ul>
            <li>{{ $t("history[5].t1") }}</li>
            <li>{{ $t("history[5].t2") }}</li>
            <li><img src="../assets/point.png" alt="" srcset="" /></li>
            <li v-html="$t('history[5].txt')"></li>
          </ul>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { WOW } from "wowjs";
import "video.js/dist/video-js.css";
// import { videoPlayer } from "vue-video-player";

export default {
  data() {
    return {
      lang: sessionStorage.getItem("LANG"),
      tabIndex: 0,
      tabArr: ["专项疾病防控", "传染研究", "卫生防疫"],
      videoTxt: this.$t("video.txt"),
      playerOptions: {
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4", // 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
            src: "http://www.xinnengboan.com/wp-content/mp4/xinneng.mp4" // url地址
          }
        ],
        poster: require("../assets/poster.jpg"), // 你的封面地址
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }
      }
    };
  },
  methods: {
    changeTab(index) {
      this.tabIndex = index;
    }
  },
  // components: {
  //   videoPlayer
  // },
  mounted() {
    this.$nextTick(() => {
      new WOW().init({
        live: false
      });
    });
  }
};
</script>

<style lang="less" scoped>
@import "../css/animate.less";
.banner-container {
  margin: 0 auto;
  overflow: hidden;
}
.banner {
  height: 810px;
  background: url("../assets/banner.jpg") center 0 no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.col-1 {
  padding-top: 130px;
  padding-bottom: 100px;
  overflow: hidden;
  .section {
    .con {
      background-color: #fafafa;
      overflow: hidden;
      .videobox {
        width: 563px;
        height: 383px;
        margin-right: 20px;
        background-color: rgba(0, 0, 0, 0.5);
        float: left;
        img {
          width: 100%;
        }
        .video-player {
          width: 563px;
        }
      }
      .videotxt {
        padding: 10px 30px;
        p {
          text-indent: 2rem;
          padding-top: 20px;
          b {
            color: #007586;
            font-weight: bold;
          }
        }
      }
    }
  }
}

.col-2 {
  background-color: #fafafa;
  overflow: hidden;
  margin-bottom: 30px;
  .section {
    display: flex;
    flex-wrap: wrap;
    ul {
      width: 50%;
      height: 418px;
      padding-top: 50px;
      li.li1 {
        text-align: center;
        margin-bottom: 30px;
      }
      li.li2 {
        font-size: 30px;
        font-weight: bold;
        color: #007586;
        margin-bottom: 30px;
        text-align: center;
      }
      li.li3 {
        padding: 0 75px;
        color: #333;
        line-height: 30px;
      }
      &:hover {
        background-color: #f6f6f6;
        li.li3 {
          color: #007586;
        }
      }
    }
  }
}

.col-3 {
  height: 1540px;
  padding-top: 90px;
  overflow: hidden;
  .section {
    .tit {
      width: 421px;
      height: 149px;
      margin: 0 auto 88px auto;
    }
    .con {
      display: flex;
      div {
        font-size: 20px;
        padding: 30px;
        p {
          text-indent: 2rem;
          line-height: 40px;
          padding-bottom: 20px;
          b {
            color: #007586;
            font-weight: bold;
          }
        }
      }
    }
    .tab {
      height: 110px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 90px;
      border-bottom: 7px solid #007586;
      .tab-item {
        width: 309px;
        height: 85px;
        line-height: 85px;
        font-size: 30px;
        font-weight: bold;
        text-align: center;
        color: #007586;
        background: url("../assets/tab.png") 0 0 no-repeat;
      }
      .tab-item-cur {
        color: #ffffff;
        background: url("../assets/tab_cur.png") 0 0 no-repeat;
      }
    }
    .img-con {
      display: flex;
      justify-content: space-between;
      padding-top: 50px;
    }
  }
}

.col-4 {
  overflow: hidden;
  height: 418px;
  background-color: #fafafa;
  .section {
    position: relative;
  }
  .history-line {
    width: 100%;
    position: absolute;
    top: 200px;
    left: 0;
    height: 10px;
    background-color: #007082;
    border-radius: 10px;
  }
  .history-point {
    position: absolute;
    top: 125px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    ul > li {
      text-align: center;
      color: #007586;
      padding-bottom: 10px;
      font-weight: bold;
    }
  }
}

.en {
  .col-2 .section ul li.li2 {
    margin-bottom: 10px;
  }
  .col-2 .section ul li.li3 {
    line-height: 130%;
  }
}

@media screen and (max-width: 640px) {
  .banner {
    height: 260px;
    background-size: cover;
    img {
      width: 100%;
    }
  }
  .col-1 {
    height: auto;
    padding: 0;
    .section {
      .con {
        background-color: #fff;
        flex-wrap: wrap;
        .videobox {
          display: none;
        }
        .videotxt {
          padding: 20px;
          line-height: 30px;
        }
      }
    }
  }
  .col-2 {
    height: auto;
    padding: 0;
    .section {
      ul {
        width: 100%;
        height: auto;
        li.li3 {
          padding: 20px;
        }
      }
    }
  }
  .col-3 {
    height: auto;
    padding: 0;
    .section {
      .tit {
        width: 100%;
        padding: 0 20px;
        margin: 0;
        img {
          width: 100%;
        }
      }
      .con {
        flex-wrap: wrap;
        img {
          width: 100%;
        }
        div {
          padding: 20px;
        }
      }
    }
  }
}
</style>
