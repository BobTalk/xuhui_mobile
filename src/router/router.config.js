//vue路由配置文件
import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
let router = new Router({
    // mode: "history",
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'investPlanDetails',
        component: () =>
            import ("../views/workbench/investPlanDetails/index.vue"),
    }]
});

/**
 * 用于检测router变化时改变页面title
 */
router.beforeResolve((to, from, next) => {
    next()
});
router.beforeEach((to, from, next) => {
    // 动态改变页面title属性
    document.title = to.meta.title ? to.meta.title : "";
    next();
});

export default router;