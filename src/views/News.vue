<template>
  <div class="container">
    <div class="banner-news">
      <span>{{ $t("news.tit") }}</span>
    </div>
    <div class="news-list" v-if="listArr.length > 0">
      <router-link
        tag="div"
        class="item"
        v-for="(item, index) in listArr"
        :key="index"
        :to="`/detail/${item.id}`"
      >
        <img
          :src="item.better_featured_image.source_url"
          alt=""
          v-if="item.better_featured_image"
        />
        <div class="text">
          <h3>{{ item.title.rendered }}</h3>
          <p v-html="item.excerpt.rendered"></p>
          <div class="infos">
            <div class="time">[{{ _filterTime(item.date) }}]</div>
            <div class="more">{{ $t("news.more") }} &gt;&gt;</div>
          </div>
        </div>
      </router-link>
    </div>
    <div class="loadmore">
      <div class="ball-pulse" v-if="isLoading">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <a
        href="javascript:;"
        @click="getMore"
        :class="isOver ? 'is-over' : ''"
        v-else
        >{{ isOver ? $t("news.loadend") : $t("news.loadmore") }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "new",
  data() {
    return {
      lang: sessionStorage.getItem("LANG"),
      isLoading: false,
      isOver: false,
      page: 1,
      categories: sessionStorage.getItem("LANG") == "zh" ? 4 : 5,
      listArr: []
    };
  },
  methods: {
    getCms(page) {
      this.isLoading = true;
      this.$aixos
        .get(
          "http://api.lkbt.pro/wp-json/wp/v2/posts?categories=" +
            this.categories +
            "&page=" +
            page
        )
        .then(res => {
          this.isLoading = false;
          this.listArr = [...this.listArr, ...res.data];
          if (this.listArr.length == 0) {
            this.isOver = true;
          }
        })
        .catch(err => {
          if (err.isAxiosError) {
            this.isLoading = false;
            this.isOver = true;
          }
        });
    },
    getMore() {
      if (this.isOver) return;
      this.page++;
      this.getCms(this.page);
    },
    _filterTime(t) {
      return t.split("T")[0];
    }
  },
  mounted() {
    this.getCms(this.page);
  }
};
</script>

<style lang="less" scoped>
.banner-news {
  height: 581px;
  background: url("../assets/banner_news.jpg") center 0 no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 60px;
    color: #007586;
  }
}
.news-list {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 150px;
  .item {
    position: relative;
    display: flex;
    color: #6c6c6c;
    cursor: pointer;
    padding: 36px 28px;
    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 0;
      left: 0;
      bottom: -36px;
      border-top: 1px solid #c9c9c9;
    }
    &:nth-last-child(2)::after {
      border-top: 0;
    }
    img {
      margin-right: 40px;
      width: 224px;
      height: 143px;
    }
    .text {
      flex: 1;
      h3 {
        font-size: 24px;
      }
      p {
        text-indent: 2em;
        font-size: 18px;
        color: #6c6c6c;
        line-height: 40px;
        text-align: justify;
      }
      .infos {
        display: flex;
        justify-content: space-between;
        .time {
          font-size: 14px;
        }
        .more {
          font-size: 18px;
          font-weight: bold;
        }
      }
    }
    &:hover {
      background-color: #f7f7f7;
      .text {
        h3 {
          color: #007586;
        }
      }
      .infos {
        .time,
        .more {
          color: #007586;
        }
      }
    }
  }
}
.loadmore {
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: #fff;
    background-color: #007586;
    border-radius: 5px;
  }
  a,
  span {
    padding: 10px 30px;
    color: #fff;
  }
  a.is-over {
    border: 0;
    color: #ccc;
    background-color: #f1f1f1;
  }
}
</style>
