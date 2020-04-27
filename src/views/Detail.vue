<template>
  <div class="container">
    <div class="banner-news">
      <span>{{ $t("news.tit") }}</span>
    </div>
    <div class="detail" v-if="newsCon">
      <div class="section">
        <div class="infos">
          <div class="location">{{ $t("news.tit") }} &gt; <span>{{ $t("news.tit2") }}</span></div>
          <div class="time">{{ newsDate }}</div>
        </div>
        <div class="title">{{ newsTit }}</div>
        <div class="content" v-html="newsCon"></div>
      </div>
    </div>
    <div class="loading" v-if="isLoading">
      <div class="ball-pulse">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      id: this.$route.params.id,
      newsTit: "",
      newsCon: "",
      newsDate: "",
      isLoading: true
    };
  },
  methods: {
    getCms() {
      this.$aixos
        .get("http://api.lkbt.pro/wp-json/wp/v2/posts/" + this.id)
        .then(res => {
          this.newsTit = res.data.title.rendered;
          this.newsCon = res.data.content.rendered;
          this.newsDate = this._filterTime(res.data.date);
          this.isLoading = false;
        });
    },
    _filterTime(t) {
      return t.split("T")[0];
    }
  },
  mounted() {
    this.getCms();
  }
};
</script>

<style lang="less" scoped>
.banner-news {
  height: 581px;
  background: url("../assets/banner_news.jpg") center 0 no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 60px;
    color: #007586;
  }
}
.detail {
  overflow: hidden;
  padding-top: 132px;
  background-color: #fff;
  color: #6c6c6c;
  .infos {
    display: flex;
    font-size: 20px;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #007586;
    span {
      color: #007586;
    }
  }
  .title {
    margin-top: 80px;
    margin-bottom: 65px;
    font-size: 36px;
    text-align: center;
    color: #484848;
  }
  .content {
    padding: 0 20px;
    margin-bottom: 160px;
    /deep/ p {
      color: #6c6c6c;
      text-indent: 2em;
      font-size: 24px;
      line-height: 150%;
      padding-bottom: 10px;
    }
  }
  .source {
    margin: 40px 0 160px 0;
    text-align: right;
    font-size: 20px;
  }
}

.loading {
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 640px) {
   .banner-news {
    height: 150px;
    span {
      font-size: 40px;
    }
  }
  .detail {
    padding: 0;
    .infos {
      padding: 10px 20px;
      font-size: 14px;
    }
    .title {
      margin: 20px;
      font-size: 18px;
      font-weight: bold;
    }
    .content {
      margin-bottom: 50px;
      /deep/ p {
        font-size: 14px;
        line-height: 150%;
      }
    }
    
  }
}
</style>
