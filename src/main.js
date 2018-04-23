import Vue from 'vue'
import App from './App'
import 'element-ui/lib/theme-chalk/index.css'
import 'es6-promise/auto'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import router from './router'
import store from './store'
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
