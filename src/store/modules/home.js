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
