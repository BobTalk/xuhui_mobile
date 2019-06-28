//vuex配置文件
import Vue from "vue";
import Vuex from "vuex";
//modules
import crossRule from './modules/crossRule.js'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        crossRule, //越规提示
    }
})