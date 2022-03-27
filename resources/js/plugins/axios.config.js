import axios from 'axios'
import Vue from 'vue'
import store from "@store";
import { appConfig } from "../app.config";

const axiosIns = axios.create({
    // You can add your headers here
    // ================================
    baseURL : appConfig.apiUrl,
    // timeout: 1000,
    headers : {
        'Accept'          : 'application/json',
    }
})

axiosIns.interceptors.request.use(
    config => {
        // Do something before request is sent
        return config
    },
    error => {
        Promise.reject(error)
    },
)
axiosIns.interceptors.response.use(
    response => {
        // Do something with response data
        return response
    },
    err => {

        if (err.response.status === 404) {
            alert('404 Not Found')
        }
        store.commit('setLoading', false)
        store.commit('setToastAlert', {
            type: 'error',
            title: 'Error',
            message: err.response.data.message
        })
        return Promise.reject(err)

    },

)

Vue.prototype.$http = axiosIns

export default axiosIns
