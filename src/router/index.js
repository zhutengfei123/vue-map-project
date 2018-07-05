import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('@/views')
Vue.use(Router)
const router = new Router({
  // hashbang: false,
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: []
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireLogin)) {
    if (window.localStorage.getItem('loginUserInfo')) {
      let lifeTime = JSON.parse(window.localStorage.getItem('loginUserBaseInfo')).lifeTime * 1000
      let nowTime = (new Date()).getTime()
      if (nowTime < lifeTime) {
        next()
      } else {
        this.$message.error('登录状态信息过期，请重新登录')
        next({
          path: '/login'
        })
      }
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})
export default router
