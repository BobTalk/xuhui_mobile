//接口
import "babel-polyfill";
import Vue from "vue";
import "es6-promise/auto";
import { Dialog, Loading, Message, Container, Header, DatePicker, Main, Table, TableColumn, Button } from "element-ui";
import './assets/css/reset.css';
Vue.config.productionTip = false;
Vue.use(Dialog);
Vue.use(Loading);
Vue.use(Container);
Vue.use(Header);
Vue.use(DatePicker);
Vue.use(Main);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Button);
Vue.prototype.$message = Message;
// Vue.prototype.$echarts = Echarts;
export {
    Vue
};