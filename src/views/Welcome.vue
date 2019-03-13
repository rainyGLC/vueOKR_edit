<template>
  <div class="welcome-background">
    <div class="background-color">
      <div class="lunar-welcome">
        <div class="lunar-logo">
          <img class="lunar-logo-image" src=".././assets/image/greet-logo.png">
        </div>
        <p class="lunar-title">探月学院OKR</p>
        <div class="lunar-container">
          <p class="lunar-desc-Chinese">
            我对阳光有信心。我对雨水有信心。我深信春天会再来。我对自己更有信心。</p>
          <p class="lunar-desc-English">I have confidence in sunshine. I have confidence in rain. I have confidence that spring will come again. Besides which you see I have confidence in me.</p>
          <p class="luna-suffix">——音乐之声 The Sound of Music (1965)</p>
        </div>
        <div class="lunar-button-container">
          <router-link to="/login" class="lunar-button">开启今天</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'welcome',
  components: {


  }
}
</script>

<style type="text/css" lang="less">
@divide:10;
@psdWidth:750px;
@ppr:@psdWidth/@divide/1rem;

*{
  margin:0 auto;
  padding:0;
}

html,body{
  display: block;
  height: 100%;
  width: 100%;
}
.welcome-background{
  background-color: #000000;
  display: inline-block;
  width: 100%;
  height: 100%;
  padding:30px/@ppr 3px/@ppr;
  .background-color{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    .lunar-welcome{
      background-color:#fff;
      display:inline-block;
      width:652px/@ppr;
      border-radius:30px;
      padding-bottom: 59px/@ppr;
      .lunar-logo{
        width: 650px/@ppr;
        height: 307px/@ppr;
        margin-bottom:30px/@ppr;
        .lunar-logo-image{
          display: inline-block;
          width: 100%;
          height: 100%;
        }
      }
      .lunar-title{
        display: block;
        text-align: left;
        font-size: 48px/@ppr;
        padding-left:62px/@ppr;
        line-height: 48px/@ppr;
        color:#333;
        font-weight: 500;
        margin-bottom:84px/@ppr;
      }
      .lunar-container{
        display: block;
        padding:0 62px/@ppr;
        text-align: left;
        position: relative;
        .lunar-desc-Chinese{
          font-size: 28px/@ppr;
          color:#333;
          line-height: 40px/@ppr;
        }
        .lunar-desc-English{
          margin-top:30px/@ppr;
          font-size: 28px/@ppr;
          color:#333;
          line-height: 40px/@ppr;
        }
        .luna-suffix{
          display: block;
          margin-top: 30px/@ppr;
          font-size: 24px/@ppr;
          text-align: right;
          color:#666666;
        }
      }
      .lunar-container:before{
        content: '';
        display: inline-block;
        width: 50px/@ppr;
        height: 2px/@ppr;
        background-color:#333;
        position:absolute;
        left:62px/@ppr;
        top:-26px/@ppr;
      }
      .lunar-button-container{
        display:flex;
        margin-top: 74px/@ppr;
        justify-content:center;
        .lunar-button{
          background-color: #333;
          display: inline-block;
          text-decoration:none;
          color: #fff;
          width: 530px/@ppr;
          height: 90px/@ppr;
          font-size: 32px/@ppr;
          line-height: 88px/@ppr;
          text-align: center;
          border-radius: 5px;
          margin:0 auto;
        }
      }
    }
  }
}



</style>
