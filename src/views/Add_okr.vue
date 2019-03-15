<template>
 <div>
  <div class="container-main">
  <div class="container-main-list">
    <div class="objectmain">
      <div class="headline">
        <span>目标 Object <p class="redtext">*</p></span>
        <p class="subhead">心之所向，神之向往</p>
      </div>
      <div class="object-content">
        <div class="chinese-title">
        <p class="title-text">中文O</p>
        <input  class="entry-input"  type="text" name="chinese"
        placeholder="写下一个能点燃我的状态" v-model = "objective">
        </div>
      </div>
    </div>
    <div class="keyresult">
      <div class="headline">
        <span>关键成果 Key Result <p class="redtext">*</p></span>
        <p class="subhead">内心丰盈，积极行动</p>
      </div>
      <div class="key-content key-content-active"
        v-for = "(item,index) in keysultArr"
        :key ="index">
        <div class="chinese-title">
          <p class="title-text">KR</p>
          <input  class="entry-input"  type="text" name="chinese"
          placeholder='请输入KR' v-model="item.keyresult">
        </div>
        <p class="close-btn" @click ="remove(index)">X</p>
      </div>
    </div>
    <button class="addbtn" @click="add()">添加</button>
    <div class="decline">
      <span>OKR截止时间 <p class="redtext">*</p></span>
      <div class="decline-content">
        <input  class="decline-entry" name="decline"
        placeholder="请选择截止日期" v-model="deadline"
        type="date">
      </div>
    </div>
  </div>
  </div>
  <div class="options-btn">
  <button class="off" @click="cancel()">取消</button>
  <button class="save" @click="save()">保存</button>
  </div>
</div>
</template>

<script>
import okrModel from '@/global/model/okrModel.js'
export default {
  name:'Add_okr',
  data(){
    return{
      objective:'', //目标
      keysultArr:[],   //成果
      deadline:'',//时间
    }
  },
  methods:{
    add(){
      this.keysultArr.push({
        keyresult:'',
      })
    },
    remove(index){
      this.keysultArr.splice(index,1)
    },
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
    cancel(){
      let token = localStorage.getItem('tokens');
      this.$router.push({name:'mineokr',params:{token:token}})
    }
  }
};
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
.keyresult{
  margin-top:30px/@ppr;
  .headline span{
    font-size: 36px/@ppr;
    font-family: "PingFang SC";
    color: rgb(0, 0, 0);
    line-height: 1.167;
  }
}
.subhead{
  font-size: 24px/@ppr;
  font-family: "PingFang SC";
  color: rgb(179, 179, 179);
}
.title-text {
  font-size: 24px/@ppr;
  font-family: "PingFang SC";
  color: rgb(102, 102, 102);
}
.redtext {
  display: inline-block;
  color: #ff1c26;
}
.addbtn {
  border-radius: 6px/@ppr;
  width: 100%;
  height: 88px/@ppr;
  font-size: 32px/@ppr;
  color: #fff;
  background-color: #000;
  outline: none;
  border: none;
}
.container-main {
  display: block;
  height: 100%;
  width: 86.7%;
  background-color: #fff;
  margin: 30px/@ppr auto;
  border-radius: 30px/@ppr;
  .container-main-list {
    margin: 20px/@ppr 40px/@ppr;
    .objectmain{
      .headline{
        span {
          font-size: 36px/@ppr;
          font-family: "PingFang SC";
          color: #000000;
          line-height: 1.167;
        }
      }
      .object-content {
        padding: 10px/@ppr;
        margin: 10px/@ppr 0;
        background-color: #f2f8fc;
        .chinese-title {
          flex-direction: column;
          height: 100px/@ppr;
          margin: 10px/@ppr auto;
          width: 90%;
          input{
            color: #999;
            font-size: 28px/@ppr;
            height: 68px/@ppr;
            width: 100%;
            background-color: #f2f8fc;
            border: none;
            outline: none;
            border-bottom: 1px/@ppr solid #000;
          }
          input::-webkit-input-placeholder{

          }
        }
      .englis-title{
        display: flex;
        flex-direction: column;
        height: 100px/@ppr;
        margin: 10px/@ppr auto;
        width: 90%;
        input{
          color: #000;
          font-size: 28px/@ppr;
          height: 68px/@ppr;
          width: 100%;
          background-color: #f2f8fc;
          border: none;
          outline: none;
          border-bottom: 1px/@ppr solid #000;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
        }
        input::-webkit-input-placeholder{

        }
      }
      }
    }
    .decline{
      span {
        font-size: 36px/@ppr;
        font-family: "PingFang SC";
        color: rgb(0, 0, 0);
        line-height: 1.167;
      }
      .decline-content {
        background-color:#f2f8fc;
        width:590px/@ppr;
        height:100px/@ppr;
        border-radius:5px/@ppr;
        display: flex;
        flex-direction: column;
        padding:0 30px/@ppr;
        justify-content: center;
        .decline-entry{
          border:none;
          background-color:#f2f8fc;
          outline: none;
          border-bottom:1px solid #333;
          width: 530px/@ppr;
          font-size:28px/@ppr;
        }
      }
    }
  }
}
.key-content{
  position: relative;
  background-color: #f2f8fc;
  padding-bottom: 25px/@ppr;
  margin: 20px/@ppr 0;
  .chinese-title {
    flex-direction: column;
    height: 100px/@ppr;
    margin: 10px/@ppr auto;
    width: 90%;
    input{
      font-size: 28px/@ppr;
      height: 68px/@ppr;
      width: 100%;
      background-color: #f2f8fc;
      border: none;
      outline: none;
      border-bottom: 1px/@ppr solid #000;
    }
    input::-webkit-input-placeholder{
    }
    input{
      color: #000;;
    }
  }
  .englis-title {
    display: flex;
    flex-direction: column;
    height: 100px/@ppr;
    margin: 10px/@ppr auto;
    width: 90%;
    input{
      font-size: 28px/@ppr;
      height:68px/@ppr;
      width: 100%;
      background-color: #f2f8fc;
      border: none;
      outline: none;
      border-bottom: 1px/@ppr solid #000;
    }
    input::-webkit-input-placeholder{
    }
  }
  .close-btn {
    position: absolute;
    display: inline-block;
    background: #000;
    color: #fff;
    height: 48px/@ppr;
    width: 48px/@ppr;
    top: 0;
    right: 0;
    font-size: 40px/@ppr;
    text-align: center;
  }
}
.options-btn {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 130px/@ppr;
  width: 86.7%;
  .off {
    display: inline-block;
    font-size: 32px/@ppr;
    font-family: "PingFang SC";
    text-align: center;
    line-height: 88px/@ppr;
    border-radius: 6px/@ppr;
    background-color: rgb(255, 28, 38);
    width: 48%;
    height: 88px/@ppr;
    color: #fff;
    outline: none;
    border: none;
  }
  .save {
    display: inline-block;
    font-size: 32px/@ppr;
    font-family: "PingFang SC";
    color: #fff;
    text-align: center;
    line-height: 88px/@ppr;
    border-radius: 6px/@ppr;
    background-color: rgb(0, 0, 0);
    width: 48%;
    height: 88px/@ppr;
    outline: none;
    border: none;
  }
}
</style>
