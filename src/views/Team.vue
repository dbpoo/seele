<template>
  <div class="container">
    <div class="banner-team">
      <span>{{ $t("team.tit") }}</span>
    </div>

    <div
      class="team bg-gray"
      v-for="(item, index) in list"
      :key="index"
      @click="close"
    >
      <div class="section">
        <div class="team-t">
          <div class="tit">
            {{ item.tit }} <span>{{ team }}</span>
          </div>
        </div>
        <div class="team-c" v-if="isMobile">
          <div
            class="box"
            :class="sindex == idx ? 'box-cur' : ''"
            v-for="(sitem, sindex) in item.arr"
            :key="sindex"
            @click.stop="tipsHandler(sindex)"
          >
            <ul>
              <li class="li1"><img :src="sitem.img" alt="" srcset="" /></li>
              <li class="li2">
                <span>{{ sitem.name }}</span>
              </li>
              <li class="li3"><span></span></li>
              <li class="li4">{{ sitem.position }}</li>
            </ul>
            <div
              class="tips"
              :class="'tips-' + sindex"
              v-html="sitem.tips"
            ></div>
            <div class="tips-arrow"></div>
          </div>
        </div>
        <div class="team-c" v-else>
          <div
            class="box"
            :class="sindex == idx ? 'box-cur' : ''"
            v-for="(sitem, sindex) in item.arr"
            :key="sindex"
            @mouseover="idx = sindex"
            @mouseout="idx = -1"
          >
            <ul>
              <li class="li1"><img :src="sitem.img" alt="" srcset="" /></li>
              <li class="li2">
                <span>{{ sitem.name }}</span>
              </li>
              <li class="li3"><span></span></li>
              <li class="li4">{{ sitem.position }}</li>
            </ul>
            <div
              class="tips"
              :class="'tips-' + sindex"
              v-html="sitem.tips"
            ></div>
            <div class="tips-arrow"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isMobile } from "../js/utils";

export default {
  data() {
    return {
      lang: sessionStorage.getItem("LANG"),
      team: sessionStorage.getItem("LANG") === "zh" ? "团队" : "team",
      list: this.$t("team.plist"),
      idx: -1,
      isMobile: false
    };
  },
  methods: {
    tipsHandler(index) {
      if (index == this.idx) {
        this.idx = -1;
      } else {
        this.idx = index;
      }
    },
    close(e) {
      let btn = document.querySelector(".tips");
      if (btn) {
        if (!btn.contains(event.target)) {
          this.idx = -1;
        }
      }
    }
  },
  mounted() {
    this.isMobile = isMobile();
  }
};
</script>

<style lang="less" scoped>
.banner-team {
  height: 581px;
  background: url("../assets/banner_team.jpg") center 0 no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 60px;
    color: #007586;
  }
}

.team-t {
  display: flex;
  justify-content: center;
  .tit {
    width: 600px;
    height: 225px;
    background: url("../assets/team_tit.png") center 0 no-repeat;
    font-size: 30px;
    color: #007586;
    text-align: center;
    padding-top: 130px;
    font-weight: bold;
    span {
      color: #626262;
    }
  }
}

.team-c {
  display: flex;
  flex-wrap: wrap;
  padding-top: 90px;
  .box {
    width: 25%;
    padding-bottom: 90px;
    position: relative;
    ul {
      li {
        text-align: center;
      }
      li.li1 {
        img {
          width: 143px;
        }
      }
      li.li2 {
        font-size: 24px;
        font-weight: bold;
      }
      li.li3 {
        span {
          width: 27px;
          height: 6px;
          background-color: #b4b4b5;
          display: inline-block;
        }
      }
    }
    .tips {
      display: none;
      position: absolute;
      top: 254px;
      left: 0;
      z-index: 9;
      padding: 20px;
      background-color: #f0f0f0;
      border-radius: 5px;
    }
    .tips-arrow {
      width: 24px;
      height: 19px;
      background: url("../assets/arrow.png") center 0 no-repeat;
      position: absolute;
      top: 240px;
      left: 50%;
      margin-left: -10px;
      display: none;
      z-index: 99;
    }
  }
  .box-cur {
    ul {
      li.li2,
      li.li4 {
        color: #007385;
      }
      li.li3 {
        span {
          background-color: #007385;
        }
      }
    }
    .tips,
    .tips-arrow {
      display: block;
    }
  }
}

@media screen and (max-width: 640px) {
  .banner-team {
    height: 150px;
    span {
      font-size: 40px;
    }
  }
  .team-t {
    .tit {
      width: 100%;
      height: 100px;
      font-size: 20px;
      padding-top: 46px;
      background-size: contain;
    }
  }
  .team-c {
    padding: 20px 15px;
    position: relative;
    .box {
      width: 33%;
      padding: 10px;
      position: static;
      ul {
        li.li1 {
          img {
            width: 100%;
          }
        }
        li.li2 {
          font-size: 14px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        li.li4 {
          font-size: 12px;
        }
      }

      .tips-0,
      .tips-1,
      .tips-2 {
        width: 100%;
        position: absolute;
        top: 190px;
        left: 0;
      }
      .tips-3,
      .tips-4,
      .tips-5 {
        width: 100%;
        position: absolute;
        top: 412px;
        left: 0;
      }
    }
    .box-cur {
      .tips-arrow {
        display: none;
      }
    }
  }
}
</style>
