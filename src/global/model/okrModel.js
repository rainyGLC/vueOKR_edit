import request from './../request.js';
import api from './api.js';

export default {
  okr:function(params) {
    return request.get(api.okr)
  },
  addokr:function(params){
    return request.post(api.okr,params)
  },
  viewokrId:function(params){
    return request.get(api.okrId(params))
  },
  saveokrId:function(id,params){
    return request.put(api.okrId(id),params)
  }
}

