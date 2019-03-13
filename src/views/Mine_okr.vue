<template>
  <div class="body-coat">
    <div class="bodymain">
      <div class="nav-list">
        <router-link to="/todaytodos" class = "nav-list-item">今天</router-link>
        <router-link to="/historytodo" class = "nav-list-item">历史</router-link>
        <router-link to="/mineokr" class = "nav-list-item">我的OKR</router-link>
      </div>
      <div class="bodymain-container">
        <div class="bodymain-container-list">
          <div class="container-list twodata"
            v-for='(item,index) in objectives '
            :key='item.index'
            @click = 'check(item.id)'>
            <div class="enddata-main purple">
              <span>截止日期:</span>
              <p>{{showTime(item.deadline)}}</p>
            </div>
            <p class="object-text">目标 Object</p>
            <div class="object-content">
              <p class="chinese-text">{{item.objective}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="addbtn-main">
      <div class="add-message">
        <p class="message-title">{{message}}</p>
      </div>
      <button class="addbtn" @click='add()'>添加OKR</button>
    </div>

  </div>

</template>

<script>

export default {
  name:'Mineokr',
  data(){
    return{
      objectives:[],
      message:''
    }
  },
  created(){
    let token = localStorage.getItem('tokens');
    let objectiveArr =[];
    let URL = 'http://localhost:3000/api/okr';
    this.axios.get(URL,{
      params:{"token":token}
    }).then(res=>{
      if(res.data.code == 200){
        // console.log(res.data.data.length);
        if(res.data.data.length>0){
          objectiveArr = res.data.data;
        }else{
          this.message='你还没有添加OKR!'
        }
        this.objectives = objectiveArr;
      }else if(res.data.code == 0){
        console.log(data)
      }
    }).catch(err=>{
      console.log(err)
    })
  },
  methods:{
    showTime(item){
      let date = new Date(item);
      let fullYear = date.getFullYear();
      let month = date.getMonth() + 1;
      if(month >=1 && month <=9){
        month = "0" + month;
      }
      let day = date.getDate();
      if(day >=0 && day<=9){
        day ="0" + day;
      }
      let date_display = fullYear +'-' + month + '-' +day;
      console.log(date_display);
      return date_display;
    },
    add(){
      this.$router.push('/addokr');
    },
    check(id){
      this.$router.push({name:'viewokr',params:{ id }})
    }
  }

}
</script>

<style type="text/css" lang="less">
@divide: 10;
@psdWidth: 750px;
@ppr: @psdWidth/@divide/1rem;

body{
  background-color:#f7f7f7;
}
.bodymain{
  margin:30px/@ppr 50px/@ppr;
  background-color: #fff;
  height: 100%;
  border-radius: 30px/@ppr;
  .nav-list{
    display: flex;
    justify-content: space-between;
    border-radius:5px 5px 0 0;
    background-color: #a7cae4;
    height: 89px/@ppr;
    font-size: 0;
    .nav-list-item{
      display: inline-block;
      text-align: center;
      line-height: 100px/@ppr;
      height: 90px/@ppr;
      width:33%;
      font-size:28px/@ppr;
      margin:0;
      color: #333;
    }
    .nav-list-item:last-child{
      border-bottom:#fff;
      background-image:url(./../assets/image/lookOKR-link.png);
      background-size:cover;
      background-repeat:no-repeat;
    }
  }
}
.nav-right-btn-hover{
  background:url(./../assets/image/frame.png)!important;
  background-size:100%!important;
  width:250px/@ppr!important;
  position: absolute;
  right: 0;
  top:-5px;
}
.bodymain-container{
  width:550px/@ppr;
  margin-top: 20px;
  .enddata-main{
    margin-bottom: 19px/@ppr;
    font-size:24px/@ppr;
    span{
      display: inline-block;
    }
    p{
      display: inline-block;
    }
  }
  .object-text{
    margin-bottom:10px/@ppr;
    font-size: 24px/@ppr;

  }
  .object-content{
    margin-bottom:10px/@ppr;
    background:#f2f8fc;
    padding:16px/@ppr 14px/@ppr;
    .chinese-text{
      font-size: 16px/@ppr;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
.purple{
  position:relative;
}
.purple:before{
  position: absolute;
  left:-40px/@ppr;
  top:5px/@ppr;
  display: inline-block;
  content: '';
  width:10px/@ppr;
  height: 10px/@ppr;
  border-radius:50%;
  border:5px/@ppr solid #5f1783;
  z-index: 1;
}
.addbtn-main{
  width: 100%;
  text-align:center;
  padding-bottom: 30px/@ppr;
  .add-message{
    display: inline-block;
    margin-top:20px;
    .message-title{
      font-size: 30px/@ppr;
    }
  }
  .addbtn{
    border-radius:6px;
    background-color: rgb(0,0,0);
    width:650px/@ppr;
    height: 88px/@ppr;
    color:#fff;
    font-size: 32px/@ppr;
    outline: none;
    border:none;
  }
}
</style>
