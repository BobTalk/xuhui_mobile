import Vue from 'vue';
import axios from 'axios';
let BASEURL = '';
if (process.env.NODE_ENV === "production") {
    //     // 线上
    //     Vue.prototype.onlinePath = "";
    //     BASEURL = "/analysis";
} else {
    // Vue.prototype.onlinePath = "./#/";
    BASEURL = "api";
}
let loadingInstance;
let urlArr = [];
/**
 * sendPost请求
 * @param url
 * @param params 参数默认为空对象
 * @returns {Promise}
 */
export function sendPost(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(BASEURL + url, data)
            .then(response => {
                if (response.status === 200) {
                    resolve(response.data.body);
                } else {
                    reject(response.data.body.message)
                }
            }).catch(err => {
                reject(err);
            });
    });
}

/**
 * sendGet请求
 * @param url
 * @param params 参数默认为空对象
 * @returns {Promise}
 */
export function sendGet(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.get(BASEURL + url, data)
            .then(response => {
                resolve(response.data);
            }).catch(err => {
                reject(err);
            });
    });
}
/**
 * sendPut请求
 * @param url
 * @param params 参数默认为空对象
 * @returns {Promise}
 */
export function sendPut(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'put',
            url: BASEURL + url,
            data
        }).then(response => {
            resolve(response.data);
        }).catch(err => {
            reject(err);
        });
    });
}

/**
 * sendDelete请求
 * @param url
 * @param params 参数默认为空对象
 * @returns {Promise}
 */
export function sendDelete(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'delete',
            url: BASEURL + url + "/" + data.id,
            data: data
        }).then(response => {
            resolve(response.data);
        }).catch(err => {
            reject(err);
        });
    });
}

// http request拦截器
axios.interceptors.request.use((config) => {
        if (sessionStorage.token) {
            config.headers.token = sessionStorage.token;
            config.data.usercode = sessionStorage.usercode;
        }
        let groupList = (/groupList/).test(config.url); //地区接口
        if (urlArr.length == 0 && !groupList) {
            loadingInstance = Vue.prototype.$loading({
                lock: true,
                text: '拼命加载中',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.6)'
            })
        }
        urlArr.push(config.url);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// http response 拦截器
axios.interceptors.response.use((response) => {
        urlArr.splice(0, 1);
        if (urlArr.length == 0 && loadingInstance) {
            loadingInstance.close()
        }
        return response;
    },
    (error) => {
        loadingInstance.close()
        Vue.prototype.$message.error('接口有异常')
        return Promise.reject(error);
    }
);
export default axios