<template>
<div class="notReflection-container">
  <div class="todos-section">
    <div class="todos-topbar">
      <img class="topbar-background" src="./../assets/image/notReflection-tab.png">
      <router-link to="/todaytodos"class="topbar-operation step-1">今日</router-link>
      <router-link to="/historytodo" class="topbar-operation step-2">历史</router-link>
      <router-link to="/Mineokr" class="topbar-operation step-3">我的OKR</router-link>
    </div>
    <div class="todos-content">
      <div class="todos-today">
        <div class="todos-title">今日三件事</div>
        <div class="todos-list">
          <div class="todos-item" v-for='(item,id) in todos' :key='id'>
            <div class="todo-work"><p>{{item.value}}</p></div>
            <div class="todos-click">OkR</div>
          </div>
        </div>
      </div>
      <div class="todos-happiness">
        <h3 class="happiness-title" >今日小确幸</h3>
        <p class="happiness-text">{{surprise}}</p>
      </div>
    </div>
    <div class="todos-confirm" @click='addBtn()'>今日反思</div>
    <div class="todos-reflect"><p class="reflect-title">{{notreflection}}</p></div>
  </div>
</div>
</template>

<script>
export default {
  name:'notreflection',
  data(){
    return{
      surprise:'',
      todos:[],
      notreflection:''
    }
  },
  created(){
    let token = localStorage.getItem('tokens');
    let todos_id =this.$route.params.id;
    let URL = 'http://localhost:3000/api/todos';
    this.axios.get(URL,{
      params:{"token":token}
    }).then(res=>{
      if(res.data.code==200){
        let newData = res.data.data[0];
        let reflect = newData.reflect;
        if(reflect != null){
          this.router.push({name:'completetodos'});
        }else{
          this.notreflection = '未反思';
        }
      }else if(res.data.code==0){
        console.log(data);
      }
    }).catch(err=>{
      console.log(err)
    })
    let URLS = 'http://localhost:3000/api/todos/' + todos_id;
    this.axios.get(URLS,{
      params:{"token":token}
    }).then(res=>{
      if(res.data.code==200){
        this.surprise=res.data.data.surprise;
        this.todos = res.data.data.todos;
      }else if(res.data.code==0){
        console.log(data)
      }
    }).catch(err=>{
      console.log(err)
    })
  },
  methods:{
    addBtn(){
      let todos_id = this.$route.query.id;
      this.$router.push({name:'reflection',query:{id:todos_id}});
    }
  }
};
</script>


<style lang="less">
@divide: 10;
@psdWidth: 750px;
@ppr: @psdWidth/@divide/1rem;
*{
  margin:0 auto;
  padding:0;
  box-sizing:border-box;
}
a{
  text-decoration: none;
}
html,body{
  width: 100%;
  height: 100%;
  background-color:#f7f7f7;
}
.notReflection-container{
  width: 750px/@ppr;
  height: 1107px/@ppr;
  background-color:#f7f7f7;
  padding-top: 30px/@ppr;
  .todos-section{
    width: 650px/@ppr;
    .todos-topbar{
      width: 100%;
      height: 79px/@ppr;
      font-size: 0;
      position:relative;
      .topbar-background{
        position:absolute;
        top:0;
        left: 0;
        width: 650px/@ppr;
        height: 79px/@ppr;
      }
      .topbar-operation{
        display: inline-block;
        width: 33.33%;
        vertical-align: top;
        text-align: center;
        font-size: 28px/@ppr;
        color: #000000;
        font-weight: 600;
        position:absolute;
        top:33px/@ppr;
      }
      .topbar-operation.step-2{
        left: 216px/@ppr;
      }
      .topbar-operation.step-3{
        left: 433px/@ppr;
      }
    }
    .todos-content{
      width: 100%;
      height: 830px/@ppr;
      background-color:#fff;
      vertical-align: top;
      border-radius:0 0 25px/@ppr 25px/@ppr;
      .todos-today{
        text-align: center;
        padding-top:60px/@ppr;
        .todos-title{
          font-size: 36px/@ppr;
          color: #000000;
          font-weight: 600;
        }
        .todos-list{
          margin-top: 60px/@ppr;
          .todos-item{
            width: 590px/@ppr;
            height: 110px/@ppr;
            border-bottom:1px/@ppr solid #000;
            font-size: 0;
            position:relative;
            .todo-work{
              display: inline-block;
              width: 472px/@ppr;
              height: 100%;
              p{
                font-size: 28px/@ppr;
                color: 333333;
                line-height: 110px/@ppr;
                text-align: left;
                font-weight: 600;
              }
            }
            .todos-click{
              display: inline-block;
              width: 118px/@ppr;
              height: 100%;
              line-height: 110px/@ppr;
              font-size: 28px/@ppr;
              color: 333;
              text-align: center;
              font-weight: 600;
            }
          }
          .todos-item:before{
            content: '';
            display: inline-block;
            width: 1px/@ppr;
            height: 54px/@ppr;
            background-color:#333;
            position:absolute;
            top: 28px/@ppr;
            right: 118px/@ppr;
          }
        }
      }
      .todos-happiness{
        width: 100%;
        padding-top:38px/@ppr;
        .happiness-title{
          text-align: center;
          font-size: 36px/@ppr;
          color: #000;
        }
        .happiness-text{
          width: 590px/@ppr;
          margin-top:20px/@ppr;
          font-size: 28px/@ppr;
          color: 000;
          font-weight: 600;
          line-height: 48px/@ppr;
        }
      }
    }
    .todos-confirm{
      margin-top: 30px/@ppr;
      width: 650px/@ppr;
      height: 88px/@ppr;
      background-color:#000000;
      color: #fff;
      font-size: 32px/@ppr;
      line-height: 88px/@ppr;
      font-weight:600;
      border-radius:5px/@ppr;
      text-align: center;
    }
    .todos-confirm-hint{
      text-align: center;
      font-size: 0;
      margin-top: 30px/@ppr/@ppr;
      padding-bottom: 30px/@ppr/@ppr;
      img{
        display: inline-block;
        margin-right:10px/@ppr/@ppr;
        vertical-align: top;
      }
      p{
        display: inline-block;
        font-size: 24px/@ppr/@ppr;
        font-weight: 600;
        color: #ff1d25;
        vertical-align: top;
      }
    }
  }
}
</style>

