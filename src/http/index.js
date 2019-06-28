import { sendPost, sendGet } from './axios';

export default {
    allRequestPost(url, params, fn) {
        return sendPost(url, params)
            .then(res => {
                fn(res);
            }, err => {
                fn(err);
            });
    },
    // 以后用到GET请求时添加
    allRequestGet(url, params, fn) {
        return sendGet(url, params)
            .then(res => {
                fn(res);
            }, err => {
                fn(err);
            });
    }
};