import axios from 'axios';

//添加一个请求拦截器，设置全局token
axios.interceptors.request.use(function (config) {
  let token = localStorage.getItem('tokens');
  if(token){
    if(config.method === 'get'){
      config.params.tokens = token
    }else{
      config.data.tokens = token
    }
    config.headers['x-csrf-token'] = token
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
/* [请求库]
** @params url         { string }   @default => '' [接口地址，统一在global/resource文件中]
** @params data/params { object }   @default => {} [发送数据]
** @params config      { object }   配置
*/
export default {
  post: function (url='', data={}, config) {
    return axios.post(url, data, config);
  },
  put: function (url='', data={}, config) {
    return axios.put(url, data, config);
  },
  get: function (url, params={}, config) {
    let OPTIONS = Object.assign({ params }, config);
    return axios.get(url, OPTIONS)
  },
  delete: function (url='', params={}, config) {
    let OPTIONS = Object.assign({ params }, config);
    return axios.delete(url, OPTIONS)
  }
};
