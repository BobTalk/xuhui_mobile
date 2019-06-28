import myAxios from '../../http/index.js'; //不能用es6结构
import interfaceList from '../../http/interface.js'
const state = {
    queryData: null
};
//同步
const mutations = {

};
//异步
const actions = {
    getCrossRuleData({ commit }, data) {
        console.log(data)
        myAxios.allRequestPost(interfaceList.againstRule, data, res => {
            console.log(res)
        })
    }
};
const getters = {

};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};