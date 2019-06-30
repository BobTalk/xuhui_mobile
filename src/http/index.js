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
    },
    // 以后用到PUT请求时添加
    allRequestPut(url, params, fn) {
        return sendPut(url, params)
            .then(res => {
                fn(res);
            }, err => {
                fn(err);
            });
    },
    // DELETE
    allRequestDetele(url, params, fn) {
        return sendDelete(url, params)
            .then(res => {
                fn(res);
            }, err => {
                fn(err);
            });
    }
};