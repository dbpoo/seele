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
            <video-player
              class="video-player vjs-custom-skin vjs-big-play-centered"
              ref="videoPlayer"
              :playsinline="true"
              :options="playerOptions"
            ></video-player>
          </div>
          <div class="videotxt">
            <p>
              Seele-N的战略定位为“<b>数据交易、全球受益、我们结算</b>”。专门针对“数据、知识与算法类资产”进行全球化交易而使用的“产业数据资产价值交换平台”，主要应用于“<b>医疗</b>”与“<b>金融</b>”两大场景。
            </p>
            <p>
              Seele-N是为数据资产交易平台服务的金融基础设施，实现数据资产的可信交易和记账服务，<b>可与各类知识计算化操作系统和数据资产交易系统无缝连接</b>。
            </p>
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
          <li class="li2">MPoW</li>
          <li class="li3">
            提出了一种名为Matrix Proof of
            Work(MPoW)的一致性算法，该算法具有记忆性，并且被认为具有抗ASIC的特性。
          </li>
        </ul>
        <ul class="">
          <li class="li1">
            <img src="../assets/icon_2.png" alt="" srcset="" />
          </li>
          <li class="li2">密码学</li>
          <li class="li3">
            SeeleTech提出多重椭圆曲线数字签名算法
            （MECDSA），通过椭圆曲线数量和六个参数的动态调整，实现了适用于不同应用场景和安全需求的动态签名机制。
          </li>
        </ul>
        <ul>
          <li class="li1">
            <img src="../assets/icon_3.png" alt="" srcset="" />
          </li>
          <li class="li2">网络传输</li>
          <li class="li3">
            通过选择节点的近邻，使消息于短时间内在整个网络中传播。该方法以传输延迟来标识节点到邻居的距离，延迟越低则邻居越近。
          </li>
        </ul>
        <ul>
          <li class="li1">
            <img src="../assets/icon_4.png" alt="" srcset="" />
          </li>
          <li class="li2">EDA</li>
          <li class="li3">
            提出了一种新的数据排序机制，称为ε-差分协议（EDA），可以支持并行数据排序。
          </li>
        </ul>
      </div>
    </div>
    <div class="col-3">
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
    </div>
    <div class="col-4">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";
import "video.js/dist/video-js.css";
import { videoPlayer } from "vue-video-player";

export default {
  data() {
    return {
      lang: sessionStorage.getItem("LANG"),
      tabIndex: 0,
      tabArr: ["专项疾病防控", "传染研究", "卫生防疫"],
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
  components: {
    videoPlayer
  },
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
  height: 643px;
  padding-top: 130px;
  overflow: hidden;
  .section {
    .con {
      display: flex;
      background-color: #fafafa;
      .videobox {
        width: 653px;
        height: 368px;
        background-color: rgba(0, 0, 0, 0.5);
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        .video-player {
          width: 653px;
        }
      }
      .videotxt {
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
  }
}

.col-2 {
  background-color: #fafafa;
  overflow: hidden;
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
  overflow: hidden;
  .section {
    padding-top: 90px;
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

@media screen and (max-width: 640px) {
}
</style>
