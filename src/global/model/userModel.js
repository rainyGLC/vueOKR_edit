import request from './../request.js';
import api from './api.js';

export default {
  login: function(params) {
    return request.post(api.login, params).then( res => {
      let token = res.data.token;
      localStorage.setItem("tokens",token);
      return res
    })
  }
}
