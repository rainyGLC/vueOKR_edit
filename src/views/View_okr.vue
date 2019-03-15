<template>
<div>
  <div class="container-main-lookOKR">
    <div class="coatmain">
      <div class="Object-item">
        <span class="headline">目标 Object</span>
        <div class="text-content">
            <p>{{objective}}</p>
        </div>
      </div>
      <div class="keyresult-item">
          <span class="headline">关键成果 Key Result</span>
          <div class="key-text-content"
            v-for='(item,index) in keyresults'
            :key = 'item.id'>
              <p>{{item.keyresult}}</p>
          </div>
      </div>
      <div class="decline-item">
        <span class="headline">OKR截止时间</span>
        <div class="data-item">
          <div class="dataEnd">{{deadline}}</div>
          <div class="dataGood">
            <i class="iconfont iconi-good"></i>
            <p class="remainData" id="remainData">还有{{days}}天，要加油哦！</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="compile-btn">
    <button class="compile" @click ='editbtn()'>编辑</button>
  </div>
</div>
</template>
<script>
  import okrModel from '@/global/model/okrModel.js'
  export default{
    name:'viewokr',
    data(){
      return {
        showData:[],
        keyresults:[],
        objective:'',
        deadline:'',
        days:''
      }
    },
    created(){
      let id = this.$route.params.id;
      okrModel.viewokrId(id).then(res=>{
        console.log(res)
        if(res.data.code ==200){
          console.log(res.data);
          this.keyresults=res.data.data.keyresults;
          console.log(this.keyresults);
          this.objective = res.data.data.objective;
          let deadlineTime = res.data.data.deadline;
          let date = new Date(deadlineTime);
          let nowadays = new Date();
          let total = (date - nowadays)/1000;
          let surplus = parseInt(total / (24*60*60));
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
          this.deadline = date_display;
          if(surplus <0){
            this.days = 0
          }else{
            this.days = surplus;
          }
        }
      }).catch(err=>{
        console.log(err)
      })
    },
    methods:{
      editbtn(){
       let id = this.$route.params.id;
       this.$router.push({name:'editokr',params:{id}});
      }
    }
  }
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

@divide: 10;
@psdWidth: 750px;
@ppr: @psdWidth/@divide/1rem;

body{
  background-color: #f7f7f7;
}
.headline {
    font-size: 0.36rem;
    font-family: "PingFang SC";
    color: rgb(0, 0, 0);
    line-height: 1.167;
}
.container-main-lookOKR {
    height: 100%;
    width: 86.7%;
    background: #fff;
    margin: 50px/@ppr auto;
    display: block;
    border-radius: 5px 5px 0 0;
    .coatmain {
       margin: 20px/@ppr 40px/@ppr;
       padding-bottom:188px/@ppr;
       .Object-item{
          .text-content{
            padding: 10px/@ppr;
            margin: 10px/@ppr 0;
            background-color: #f2f8fc;
            p{
              font-size: 28px/@ppr;
              font-family: "PingFang SC";
              color: rgb(51, 51, 51);
              }
          }
       }
       .keyresult-item{
          .key-text-content {
              padding: 10/@ppr;
              margin: 10/@ppr 0;
              background-color: #f2f8fc;
              p{
                font-size: 28px/@ppr;
                font-family: "PingFang SC";
                color: rgb(51, 51, 51);
              }
          }
       }
       .decline-item{
          .data-item {
              display: flex;
              justify-content: space-between;
              font-size: 28px/@ppr;
              background-color: #f2f8fc;
              height: 45px/@ppr;
              line-height: 45px/@ppr;
              .dataEnd {
                font-size: 20px/@ppr;
                margin-left: 10px/@ppr;
                line-height: 45px/@ppr;
              }
              .dataGood {
                  display: flex;
                  .remainData{
                    font-size: 20px/@ppr;
                    line-height: 45px/@ppr;
                  }
              }
          }
       }
    }
}
.compile-btn {
    width: 86.7%;
    margin: 0 auto;
    .compile{
      font-size: 32px/@ppr;
      width: 100%;
      background: #000;
      color: #fff;
      outline: none;
      height: 88px/@ppr;
    }
}
</style>
