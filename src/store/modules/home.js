import axios from '../../js/axios'
import Api from '../../api'
const state = {
  initData: {},
  numData: null,
  memberChartInfo: {}
}
const actions = {
  async init ({commit, rootState}, params) {
    const { success, msg, data } = await axios.post(Api.searchReportForm, params)
    if (success === 'false') {
      return msg
    } else {
      commit('getInitData', data)
    }
  },
  async getNum ({commit, rootState}, params) {
    const { result, status: {code, msg} } = await axios.get('/api/joreport/data/num', {'params': params})
    if (code === '00000') {
      commit('getNumData', result)
    } else {
      return msg
    }
  },
  async getMemberChartInfo ({commit, rootState}, params) {
    const { result, status: {code, msg} } = await axios.get('/api/joreport/data/people', {'params': params})
    if (code === '00000') {
      commit('getMemberChartInfo', result)
    } else {
      return msg
    }
  }
}
const mutations = {
  getInitData (state, data) {
    state.initData = data
  },
  getNumData (state, data) {
    state.numData = data
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
