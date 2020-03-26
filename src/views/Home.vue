<template>
  <div class="container">
    <div class="banner"></div>
    <div class="col-1">
      <div class="section">
        <div class="con">
          <img src="../assets/video.jpg" alt="" srcset="" />
          <div>
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
      <div class="section">
        <ul>
          <li class="li1"><img src="../assets/icon_1.png" alt="" srcset="" /></li>
          <li class="li2">MPoW</li>
          <li class="li3">提出了一种名为Matrix Proof of Work(MPoW)的一致性算法，该算法具有记忆性，并且被认为具有抗ASIC的特性。</li>
        </ul>
        <ul>
          <li class="li1"><img src="../assets/icon_2.png" alt="" srcset="" /></li>
          <li class="li2">密码学</li>
          <li class="li3">SeeleTech提出多重椭圆曲线数字签名算法
（MECDSA），通过椭圆曲线数量和六个参数的动态调整，实现了适用于不同应用场景和安全需求的动态签名机制。</li>
        </ul>
        <ul>
          <li class="li1"><img src="../assets/icon_3.png" alt="" srcset="" /></li>
          <li class="li2">网络传输</li>
          <li class="li3">通过选择节点的近邻，使消息于短时间内在整个网络中传播。该方法以传输延迟来标识节点到邻居的距离，延迟越低则邻居越近。</li>
        </ul>
        <ul>
          <li class="li1"><img src="../assets/icon_4.png" alt="" srcset="" /></li>
          <li class="li2">EDA</li>
          <li class="li3">提出了一种新的数据排序机制，称为ε-差分协议（EDA），可以支持并行数据排序。</li>
        </ul>
      </div>
    </div>
    <div class="col-3">
      <div class="section">
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
      <div class="section">
        <div class="tab"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: sessionStorage.getItem("LANG"),
    };
  },
  mounted() {}
};
</script>

<style lang="less">
.banner {
  height: 810px;
  background: url("../assets/banner.jpg") center 0 no-repeat;
}

.col-1 {
  height: 643px;
  padding-top: 130px;
  .section {
    background-color: #fafafa;
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
  }
}

.col-2 {
  background-color: #fafafa;
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
  }
}
</style>
