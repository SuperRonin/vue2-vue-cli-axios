/*
* @Author: xuexingwei
* @Date:   2017-09-29 09:30:47
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-30 09:51:47
*/

import Vue from 'vue'
import axios from 'axios'

if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = '/dev';
}else{
    axios.defaults.baseURL = 'http://www.bus365.com';
}
axios.defaults.headers.post['Content-Type'] = 'application/json';


const that = this
//请求时的拦截
axios.interceptors.request.use(function(config){
    //发送请求前做的处理
    // if (that.$store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
    //     config.headers.Authorization = `${that.$store.state.token}`;
    // }
    return config
},function(error){
    //异常请求时作处理
    return Promise.reject(error)
})

// 响应时的拦截
axios.interceptors.response.use(function(response){
    console.log(response)
    // if(!response.data.status && !response.data.departid){
        // alert('请求成功，此接口没有返回状态码 并且数据为null')
        // return
    // }
    //返回响应时做一些处理
    return response
},function(error){
    console.log(error)
    alert('网络异常')
    // if(!error.response.status){
    //     alert('请求失败,没有状态码')
    // }
    //响应异常时做一些处理
    return Promise.reject(error)
})



export default axios

