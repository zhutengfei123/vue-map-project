import axios from '../../js/axios'
import Api from '../../api'
const state = {
  initData: {},
  numData: null,
  checkinNum: null,
  checkoutNum: null,
  checkData: [],
  sensitiveData: [],
  crimeData: [],
  memberChartInfo: []
}
const actions = {
  async init ({commit, rootState}, params) {
    const result = await axios.post(Api.searchReportForm, params)
    commit('getInitData', result)
  },
  async getNum ({commit, rootState}, params) {
    const result = await axios.get('/joreport/data/num', {'params': params})
    commit('getNumData', result)
  },
  async getCheckinNum ({commit, rootState}, params) {
    const result = await axios.get('/joreport/data/checkin/num', {'params': params})
    commit('getCheckinNum', result)
  },
  async getCheckoutNum ({commit, rootState}, params) {
    const result = await axios.get('/joreport/data/checkout/num', {'params': params})
    commit('getCheckoutNum', result)
  },
  async getCheckData ({commit, rootState}, params) {
    const result = await axios.get('/joreport/data/check', {'params': params})
    commit('getCheckData', result)
  },
  async getSensitiveData ({commit, rootState}, params) {
    const result = await axios.get('/joreport/data/sensitive', {'params': params})
    commit('getSensitiveData', result)
  },
  async getCrimeData ({commit, rootState}, params) {
    const result = await axios.get('/joreport/data/crime', {'params': params})
    commit('getCrimeData', result)
  },
  async getMemberChartInfo ({commit, rootState}, params) {
    const result = await axios.get('/joreport/data/people', {'params': params})
    const data = Object.keys(result).map(r => ({name: r, value: result[r]}))
    commit('getMemberChartInfo', data)
  }
  // 获取图片的url
  // http://9ji-tech.com:8880/joreport/img?terminal_id=ccb8a8de46d0&pic_name=1530548020543.jpg
}
const mutations = {
  getInitData (state, data) {
    state.initData = data
  },
  getNumData (state, data) {
    state.numData = data
  },
  getCheckinNum (state, data) {
    state.checkinNum = data
  },
  getCheckoutNum (state, data) {
    state.checkoutNum = data
  },
  getCheckData (state, data) {
    state.checkData = data
  },
  getSensitiveData (state, data) {
    state.sensitiveData = data
  },
  getCrimeData (state, data) {
    state.crimeData = data
  },
  getMemberChartInfo (state, data) {
    state.memberChartInfo = data
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
