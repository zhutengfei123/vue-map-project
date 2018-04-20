import Vue from 'vue'
import Router from 'vue-router'
// const SideMenu = () => import('@/components/sideMenu')
const Index = () => import('@/views/index')
const Content1 = () => import('@/views/content1/index')
const Content2 = () => import('@/views/content2/index')
const Content3 = () => import('@/views/content3/index')
const Content4 = () => import('@/views/content4/index')
Vue.use(Router)
const router = new Router({
  hashbang: false,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        { path: '/content1', name: 'content1', component: Content1 },
        { path: '/content2', name: 'content2', component: Content2 },
        { path: '/content3', name: 'content3', component: Content3 },
        { path: '/content4', name: 'content4', component: Content4 }
      ]
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
