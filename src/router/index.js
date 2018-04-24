import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('@/views')
const Content1 = () => import('@/views/content1')
const Content2 = () => import('@/views/content2')
const Content3 = () => import('@/views/content3')
const Content4 = () => import('@/views/content4')
const Content5 = () => import('@/views/content5')
const Content6 = () => import('@/views/content6')
const Content7 = () => import('@/views/content7')
const Content8 = () => import('@/views/content8')
const Content9 = () => import('@/views/content9')
const Content10 = () => import('@/views/content10')
const Content11 = () => import('@/views/content11')
const Content12 = () => import('@/views/content12')
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
        { path: '/content4', name: 'content4', component: Content4 },
        { path: '/content5', name: 'content5', component: Content5 },
        { path: '/content6', name: 'content6', component: Content6 },
        { path: '/content7', name: 'content7', component: Content7 },
        { path: '/content8', name: 'content8', component: Content8 },
        { path: '/content9', name: 'content9', component: Content9 },
        { path: '/content10', name: 'content10', component: Content10 },
        { path: '/content11', name: 'content11', component: Content11 },
        { path: '/content12', name: 'content12', component: Content12 }
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
