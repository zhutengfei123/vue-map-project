import axios from '../../js/axios'
import Api from '../../api'
const state = {
  initData: {},
  numData: null,
  memberChartInfo: []
}
const actions = {
  async init ({commit, rootState}, params) {
    const result = await axios.post(Api.searchReportForm, params)
    commit('getInitData', result)
  },
  async getNum ({commit, rootState}, params) {
    const result = await axios.get('/api/joreport/data/num', {'params': params})
    commit('getNumData', result)
  },
  async getMemberChartInfo ({commit, rootState}, params) {
    const result = await axios.get('/api/joreport/data/people', {'params': params})
    const data = Object.keys(result).map(r => ({name: r, value: result[r]}))
    commit('getMemberChartInfo', data)
  }
}
const mutations = {
  getInitData (state, data) {
    state.initData = data
  },
  getNumData (state, data) {
    state.numData = data
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
