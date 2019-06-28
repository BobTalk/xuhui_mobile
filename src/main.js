import {
    Vue
} from "./config.js";
import App from "./App.vue";
import router from "./router/router.config";
import store from "./store/store.config";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
