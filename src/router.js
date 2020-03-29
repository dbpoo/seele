import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'home',
      component: resolve => require(['./views/Home'], resolve)
    }, {
      path: '/about',
      name: 'about',
      component: resolve => require(['./views/About'], resolve)
    }, {
      path: '/news',
      name: 'news',
      component: resolve => require(['./views/News'], resolve)
    }, {
      path: '/detail/:id',
      name: 'detail',
      component: resolve => require(['./views/Detail'], resolve)
    }
  ]
})
