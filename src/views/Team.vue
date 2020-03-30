<template>
  <div class="container">
    <div class="banner-team">
      <span>{{ $t("team.tit") }}</span>
    </div>
    <div class="team">
      <div class="section">
        <div class="team-t">
          <div class="tit">
            {{ $t("team.tit1") }} <span>{{ team }}</span>
          </div>
        </div>
        <div class="team-c">
          <div class="box" v-for="(item, index) in list1" :key="index">
            <ul>
              <li class="li1"><img :src="item.img" alt="" srcset="" /></li>
              <li class="li2">{{ item.name }}</li>
              <li class="li3"><span></span></li>
              <li class="li4">{{ item.position }}</li>
            </ul>
            <div class="tips" v-html="item.tips"></div>
            <div class="tips-arrow"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="team bg-gray">
      <div class="section">
        <div class="team-t">
          <div class="tit">
            {{ $t("team.tit2") }} <span>{{ team }}</span>
          </div>
        </div>
        <div class="team-c">
          <div class="box" v-for="(item, index) in list2" :key="index">
            <ul>
              <li class="li1"><img :src="item.img" alt="" srcset="" /></li>
              <li class="li2">{{ item.name }}</li>
              <li class="li3"><span></span></li>
              <li class="li4">{{ item.position }}</li>
            </ul>
            <div class="tips" v-html="item.tips"></div>
            <div class="tips-arrow"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="team">
      <div class="section">
        <div class="team-t">
          <div class="tit">
            {{ $t("team.tit3") }} <span>{{ team }}</span>
          </div>
        </div>
        <div class="team-c">
          <div class="box" v-for="(item, index) in list3" :key="index">
            <ul>
              <li class="li1"><img :src="item.img" alt="" srcset="" /></li>
              <li class="li2">{{ item.name }}</li>
              <li class="li3"><span></span></li>
              <li class="li4">{{ item.position }}</li>
            </ul>
            <div class="tips" v-html="item.tips"></div>
            <div class="tips-arrow"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: sessionStorage.getItem("LANG"),
      team: sessionStorage.getItem("LANG") === "zh" ? "团队" : "team1",
      list1: this.$t("team.plist1"),
      list2: this.$t("team.plist2"),
      list3: this.$t("team.plist3")
    };
  },
  mounted() {}
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
    &:hover {
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
}
</style>
