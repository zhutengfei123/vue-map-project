import Vue from 'vue'
import App from './App'
import 'element-ui/lib/theme-chalk/index.css'
import 'es6-promise/auto'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import router from './router'
import store from './store'
import BaiduMap from 'vue-baidu-map'
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts'
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.component('chart', ECharts)
Vue.use(BaiduMap, {
  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
  ak: 'YakZkrfBCcDfLPgvOdObTqXDbbEy1EYr'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
