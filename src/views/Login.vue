<template>
  <div class="lunar-login">
    <div class="lunar-container">
      <div class="lunar-logo">
        <img class="logo-image" src="./../assets/image/emter-logo.png">
      </div>
      <div class="lunar-name-input">
        <div class="name-image">
          <img src="./../assets/image/emter-name.png" class="name-map">
        </div>
        <input type="text" class="name-input" placeholder="请输入用户名称"
          v-model="name">
      </div>
      <div class="lunar-pass-input">
        <div class="lunar-pass-image">
          <img src="./../assets/image/emter-code.png" class="lunar-pass-map">
        </div>
        <input type="password" placeholder="请输入密码" class="pass-input"
          v-model ="password">
      </div>
      <div class="show">
        <div class="lunar-input-slip" v-show = "hidden">
          <div class="lunar-slip-image">
            <img src="./../assets/image/emter-slip.png" class="lunar-slip-map">
          </div>
          <p class="slip-title">{{err}}</p>
        </div>
      </div>
      <button class="lunar-login" @click="login()">登录</button>
      <div class="login-methods">
        <p class="methods-title">其它方式登录</p>
        <div class="others-way">
          <img src="./../assets/image/icon_weixin.png" class="icon-weixin">
          <img src="./../assets/image/icon_qq.png" class="icon-qq">
          <img src="./../assets/image/icon_weiruan.png" class="icon-weiruan">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userModel from '@/global/model/userModel.js';
export default {
  name: 'login',
  data(){
    return {
      name:'',
      password:'',
      hidden:false,
      err:''
    }
  },
  methods:{
    login(){
      let name = this.name;
      let password = this.password;

      if(!name || !password){
        this.hidden = false;
        return
      }
      userModel.login({
        name:name,
        password:password,
      })
      .then(res =>{
          this.err = res.data.message;
          this.hidden = true;
        if(res.data.code == 200){
          this.$router.push('/todaytodos')
        }else if(res.data.code == 0){
          this.err ='用户名输入或密码错误,请重新输入';
          this.hidden = true;
          return
        }
      }).catch(err =>{
        console.log(err)
      })
    }
  }
}
</script>
<style type="text/css" lang="less">
@divide: 10;
@psdWidth: 750px;
@ppr: @psdWidth/@divide/1rem;
.lunar-login{
  background-color:#fff;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  .lunar-container{
    text-align:center;
    padding:150px/@ppr 0 124px/@ppr;
    .lunar-logo{
      width: 200px/@ppr;
      height: 200px/@ppr;
      margin:0 auto;
      .logo-image{
        display: block;
        text-align: center;
        width: 100%;
        height: 100%;
      }
    }
    .lunar-name-input{
      margin-top:142px/@ppr;
      padding:0 30px/@ppr;
      position: relative;
      height: 68px/@ppr;
      .name-image{
        display: inline-block;
        width: 30px/@ppr;
        height: 27px/@ppr;
        vertical-align: top;
        font-size: 0;
        .name-map{
          display: inline-block;
          width: 100%;
          height: 100%;
          vertical-align: top;
        }
      }
      .name-input{
        display: inline-block;
        height: 30px/@ppr;
        width: 600px/@ppr;
        border:none;
        vertical-align:top;
        outline: none;
        font-size: 28px/@ppr;
        margin-left:30px/@ppr;
      }
    }
    .lunar-name-input:before{
      content: '';
      display: inline-block;
      width: 690px/@ppr;
      height: 2px/@ppr;
      background-color:#333;
      position:absolute;
      bottom: 0;
      left:30px/@ppr;
    }
    .lunar-pass-input{
      margin-top:37px/@ppr;
      padding:0 30px/@ppr;
      position:relative;
      height: 68px/@ppr;
      .lunar-pass-image{
        display: inline-block;
        width: 30px/@ppr;
        height: 38px/@ppr;
        vertical-align: top;
        font-size: 0;
        .lunar-pass-map{
          display: inline-block;
          width: 100%;
          height: 100%;
          vertical-align: top;
        }
      }
      .pass-input{
        display: inline-block;
        height: 30px/@ppr;
        width: 600px/@ppr;
        border:none;
        vertical-align: top;
        outline: none;
        margin-left:30px/@ppr;
      }
    }
    .lunar-pass-input:before{
        content:'';
        display: inline-block;
        width: 690px/@ppr;
        height: 2px/@ppr;
        background-color:#333;
        position: absolute;
        bottom:0;
        left:30px/@ppr;
    }
    .show{
      height: 24px/@ppr;
      margin-top:30px/@ppr;
      .lunar-input-slip{
        text-align: left;
        padding-left:30px/@ppr;
        margin-top: 30px/@ppr;
        display: block;
        font-size: 0;
        .lunar-slip-image{
          display: inline-block;
          width: 24px/@ppr;
          height: 24px/@ppr;
          .lunar-slip-map{
            display: inline-block;
            width: 100%;
            height: 100%;
          }
        }
        .slip-title{
          display: inline-block;
          font-size: 28px/@ppr;
          color: #ff1d25;
          margin-left:8px/@ppr;
        }
      }
    }
    .lunar-login{
      margin-top:170px/@ppr;
      width: 690px/@ppr;
      height: 88px/@ppr;
      background-color:#000;
      display: inline-block;
      border-radius: 5px;
      font-size: 32px/@ppr;
      color: #fff;
      outline: none;
    }
    .login-methods{
      margin-top:40px/@ppr;
      display: inline-block;
      width: 690px/@ppr;
      .methods-title{
        font-size:22px/@ppr;
        line-height: 40px/@ppr;
        float: left;
        vertical-align: top;
        color: #999;
      }
      .others-way{
        display: inline-block;
        vertical-align: top;
        float: right;
        line-height: 40px/@ppr;
        .icon-weixin, .icon-qq, .icon-weiruan{
          width: 45px/@ppr;
          height: 45px/@ppr;
          margin-left: 15px;
        }
      }
    }
  }
}
</style>











