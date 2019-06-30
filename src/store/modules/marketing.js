import myAxios from '../../http/index.js'; //不能用es6结构
import interfaceList from '../../http/interface.js'
const state = {
    marketDJLJ: []
}
const mutations = {
    getMarketingCompDataMutation(state, data) {
        state.marketDJLJ = data
    }
}
const actions = {
    getMarketingCompDataHttp({ commit }, data = {}) {
        myAxios.allRequestPost(interfaceList.marketingPropertys, data, res => {
            console.log(res)
            commit('getMarketingCompDataMutation', res.content)
        })
    }
}
const getters = {
    getMarketingCompDataG: state => state.marketDJLJ
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};