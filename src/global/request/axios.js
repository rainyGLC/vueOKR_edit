import axios from 'axios';
import apiURL from '@/router.js';
axios.defaults.withCredentials = true; //表示跨域请求时是否需要使用凭证
axios.defaults.xsrfHeaderName ='X-XSRF-TOKEN' ;//承载 xsrf token 的值的 HTTP 头的名称
axios.defaults.baseURL = apiURL; // 配置axios请求的地址

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  if(localStorage.getItem('tokens')){
    console.log(config,'222')

    config.headers['token'] = 'tokens';
  }
  return config;
  }, function (error) {
    // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  switch(true){
    case res.data.code && res.data.code !== 200:
    return Promise.reject(res.data);
    case !!res.data.code:
    return res.data.data;
    default:
    return res.data;
  }
  return response;
  }, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default {
  post:function(url='',data={},confige){
    return axios.post(url,data,config);
  },
  get:function(url,params={},confige){
    let OPTIONS = Object.assign({ params },config);
    return axios.get(url,confige)
  }
}
