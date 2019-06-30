import myAxios from '../../http/index.js'; //不能用es6结构
import interfaceList from '../../http/interface.js'
const state = {
    queryData: null, //越规提示数据
    crossRuleCompToggle: false, //越规提示组件是否显示
};
//同步
const mutations = {
    getCrossRuleData(state, data) {
        console.log(data)
        state.queryData = data;
        state.crossRuleCompToggle = data.length > 0;
    }
};
//异步
const actions = {
    getCrossRuleData({ commit }, data) {
        myAxios.allRequestPost(interfaceList.againstRule, data, res => {
            commit("getCrossRuleData", res.content)
        })
    }
};
const getters = {
    getCrossRuleDataG: state => state.queryData,
    getCrossRuleCompToggleG: state => state.crossRuleCompToggle
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};