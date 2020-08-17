import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  base: "/page",
  routes: [
    {
      path: "/",
      name: "home",
      component: resolve => require(["./views/Home"], resolve)
    },
    {
      path: "/en",
      name: "home",
      component: resolve => require(["./views/Home"], resolve)
    },
    {
      path: "/team",
      name: "team",
      component: resolve => require(["./views/Team"], resolve)
    },
    {
      path: "/about",
      name: "about",
      component: resolve => require(["./views/About"], resolve)
    },
    {
      path: "/news",
      name: "news",
      component: resolve => require(["./views/News"], resolve)
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: resolve => require(["./views/Detail"], resolve)
    }
  ]
});

router.beforeEach((to, from, next) => {
  let lang = sessionStorage.getItem("LANG") || "zh";
  let keywords =
    "Seele元一Seele,SeeleN,Seele-N,交换平台,资产价值交换平台,数据资产价值交换平台,知识互联,价值互联,可信交换,人工智能,大数据,智能合约";
  let description =
    "Seele项目团队通过深入研究，以知识互联解决知识的结构、继承、传递等体系问题，以价值互联解决知识发布、传播、使用过程中的权益冲突。知识互联+价值互联，融合建立“产业数据基础资源交换平台”，构建完整的知识链条，催生大量新型应用、新型互动模式的涌现。";

  document.title = lang === "zh" ? "Seele_Seele元一_品牌现已全新升级为Seele-N" : "Seele_Seele is now newly upgraded to Seele-N";

  if (lang === "en") {
    keywords =
      "Seele,SeeleN,Seele-N, Exchange Platform, Infrastructure Exchange Platform, Data Infrastructure Exchange Platform, Knowledge interconnection, value interconnection, Blockchain, Ethereum,Bitcoin,MTC,ETH,BTC,ICO";
    description =
      'Through in-depth research, Seele project team solves the system problems of knowledge structure, inheritance and transmission with knowledge interconnection, and solves the conflict of rights and interests in the process of knowledge release, dissemination and use with value interconnection. Knowledge interconnection + value interconnection, together established the " Industrial Data Infrastructure Exchange Platform , constructed a complete knowledge chain, has spawned a large number of new applications, new interactive models.';
  }

  document
    .querySelector('meta[name="keywords"]')
    .setAttribute("content", keywords);
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", description);

  next();
});

export default router;
