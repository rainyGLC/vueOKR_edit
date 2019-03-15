import request from './../request.js';
import api from './api.js';

export default {
  todokr:function(params){
    return request.get(api.todokrId(params))
  }
}
