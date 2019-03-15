    启动：cd vueOKR_edit
          npm install
          npm run serve
    模块化
    文档：https://www.kancloud.cn/yunye/axios/234846
        http://www.axios-js.com/docs/
    axios全局配置
    新建global文件夹
    新建requst.js文件

    axios方法封装
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

        //添加一个请求拦截器，设置全局token
        //拦截器的作用当你调用接口的时候会判断
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
    取得token值把它存储在headers或当method方法为get时token存储在params中，否则存储在data里

    再新建一个model文件
    ／api.js放每个API接口
    例如：export default {
          login: 'http://localhost:3000/api/login',
          okr: 'http://localhost:3000/api/okr',
          todos:'http://localhost:3000/api/todos',
          todosId: (id) => 'http://localhost:3000/api/todos/' + id,
          todokrId:(id) => 'http://localhost:3000/api/todo-kr/' + id,
          okrId:(id)=> 'http://localhost:3000/api/okr/' + id
        }
    建立model.j文件
    request对象是从客户端向服务器发出请求，把请求模块化，从页面中分离出来
    eg: import request from './../request.js';
        import api from './api.js';
        新建okrModel.js文件
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

    在vue页面中引用每个所需的model.js中的方法
    模块化前Add_okr.vue中save()方法
    eg:
    在main.js引用
    import axios from 'axios'
    Vue.prototype.axios = axios
    save(){
      let objective = this.objective;
      let keyresultArr = this.keysultArr;
      let deadline = this.deadline;
      let keyresults = [];
      keyresultArr.forEach((item,index)=>{
        keyresults.push(item.keyresult)
      })
      let token = localStorage.getItem('tokens')
      if(!objective ||!deadline ||!keyresults ||!token){
        return alert('缺少参数')
      }
      let URL =' http://localhost:3000/api/okr';
      this.axios.post(URL,{
        token:token,
        objective:objective,
        keyresult:keyresults,
        deadline:deadline
      }).then(res=>{
        if(res.data.code == 200){
          this.$router.push({name:'mineokr',params:{token:token}});
        }
        else if(res.data.code == 0){
          console.log(data)
        }
      }).catch(err=>{
        console.log(err)
      })
    },

    模块化后：
    引用import okrModel from '@/global/model/okrModel.js'
    save(){
      let objective = this.objective;
      let keyresultArr = this.keysultArr;
      let deadline = this.deadline;
      let keyresults = [];
      keyresultArr.forEach((item,index)=>{
        keyresults.push(item.keyresult)
      })
      if(!objective ||!deadline ||!keyresults){
        console.log(objective,deadline,keyresults)
        return alert('缺少参数')
      }
      okrModel.addokr({
        objective:objective,
        keyresult:keyresults,
        deadline:deadline
      }).then( res => {
        if(res.data.code==200){
          this.$router.push({name:'mineokr'});
        }else if(res.data.code==0){
          console.log(data)
        }
      }).catch(err=>{
        console.log(err)
      })
    },

    注意toke存储在params/data/headers中token的不同取法
    token存储为tokens:localStorage.setItem("tokens",token);
    在params中 let token = req.params.tokens
    在data中 let token = req.bodt.tokens
    在headers中 let token = headers['x-csrf-token']


    ES6模块主要有两个功能：export和import
    export用于对外输出本模块（一个文件可以理解为一个模块）变量的接口
    import用于在一个模块中加载另一个含有export接口的模块。
    也就是说使用export命令定义了模块的对外接口以后，其他JS文件就可以通过import命令加载这个模块（文件）。这几个都是ES6的语法。


    1、export与export default均可用于导出常量、函数、文件、模块等
    2、你可以在其它文件或模块中通过import+(常量 | 函数 | 文件 | 模块)名的方式，将其导入，以便能够对其进行使用
    3、在一个文件或模块中，export、import可以有多个，export default仅有一个
    4、通过export方式导出，在导入时要加{ }，export default则不需要

    这样来说其实很多时候export与export default可以实现同样的目的，只是用法有些区别。注意第四条，通过export方式导出，在导入时要加{ }，export default则不需要。使用export default命令，为模块指定默认输出，这样就不需要知道所要加载模块的变量名。
    eg: var name="李四";
        export { name }
        //import { name } from "/.a.js" 
        可以写成：
        var name="李四";
        export default name
        //import name from "/.a.js" 这里name不需要大括号

        在一个文件或模块中，export、import可以有多个，export default仅有一个，也就是说如下代码：
        var name1="李四";
        var name2="张三";
        export { name1 ,name2 }
        也可以写成如下，也是可以的，import跟他类似。
         var name1="李四";
         var name2="张三";
         export name1;
         export name2;





    


