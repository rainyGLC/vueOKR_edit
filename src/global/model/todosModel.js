import request from './../request.js';
import api from './api.js';

export default {
  todos:function(params) {
    return request.get(api.todos)
  },
  create:function(params) {
    console.log(params);
    return request.post(api.todos,params)
  },
  createId:function(params){
    return request.get(api.todosId(params))
  },
  createEdit:function(id,params){
    return request.post(api.todosId(id),params)
  }
}
