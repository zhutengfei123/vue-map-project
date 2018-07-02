import axios from '../../js/axios'
import Api from '../../api'
const state = {
  initData: {}
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
    const data = await axios.get('http://9ji-tech.com:8880/joreport/data/num')
    if (typeof data === 'number') {
      // 成功
    }
  }
}
const mutations = {
  getInitData (state, data) {
    state.initData = data
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
