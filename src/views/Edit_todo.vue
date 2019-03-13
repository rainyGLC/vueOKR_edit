<template>
<div class="history-contact">
  <div class="major">
    <header>
      <div class="history_top">
        <nav class="history_top_item">
          <router-link to="/todaytodos" class="today">今日</router-link>
          <img src="./../assets/image/history-frame.png">
          <router-link to="/historytodo" class="history">历史</router-link>
          <router-link to="/Mineokr" href="" class="mine">我的OKR</router-link>
        </nav>
      </div>
    </header>
    <div class="container">
      <p class="time_top"></p>
      <div class="container_first">
        <h1>今日三件事</h1>
        <div class="container_first_item">
          <div>
      <span></span>
      <p class="container_first_item_a-title"></p>
      <p class="container_first_item_a-desc">|  OKR</p>
          </div>
        </div>
      </div>
      <div class="container_second">
        <h1>今日小确幸</h1>
        <span></span>
        <p></p>
      </div>
      <div class="container_third">
        <h1>今日反思</h1>
        <p></p>
      </div>
      <div class="container_4th">
        <dl>
          <dt>幸福五元素</dt>
          <dd></dd>
        </dl>
      </div>
    </div>
  </div>
  <div class="state-section">
    <div class="state-container">
      <div class="state-title">
        <p class="state-title-text">已关联KR</p>
        <img src="./../assets/image/history-icon_close.png" class="state-map">
      </div>
      <div class="state-desc">
        <p class="state-desc-text"></p>
      </div>
      <button class="state-button">知道了</button>
    </div>
  </div>
</div>
</template>
<script type="text/javascript">

</script>

<style lang="less">
@divide: 10;
@psdWidth: 750px;
@ppr: @psdWidth/@divide/1rem;
*{
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
}
html,body{
  width: 100%;
  height: 100%;
}
.history-contact{
  width: 100%;
  height: 100%;
  .major{
    margin: 0 auto;
    width: 650px/@ppr;
    background-color: #f7f7f7;
    border-radius: 5px 5px 0 0;
    header{
      font-size: 0;
      background-color: #ffffff;
      .history_top{
        height: 90px/@ppr;
        width: 650px/@ppr;
        background-color:#a7cae4;
        margin-top: 10px/@ppr;
        position: relative;
        border-radius: 5px 5px 0 0;
        .history_top_item{
          display: flex;
          border-radius: 5px 5px 0 0;
          justify-content: space-around;
          .today{
            font-size: 28px/@ppr;
            text-decoration: none;
            color: #333333;
            line-height: 91px/@ppr;
          }
          img{
            position: absolute;
            left: 30%;
            top: -10px/@ppr;
            display: inline-block;
            width: 280px/@ppr;
            height: 100px/@ppr;
          }
          .history{
            font-size: 28px/@ppr;
            text-decoration: none;
            color: #333333;
            z-index: 999;
            padding-left: 40px/@ppr;
            line-height: 91px/@ppr;
          }
          .mine{
            font-size: 28px/@ppr;
            text-decoration: none;
            color: #333333;
            line-height: 91px/@ppr;
          }
        }
      }
    }
    .container{
      width: 100%;
      height: 100%;
      background-color: #ffffff;
      padding-top: 30px/@ppr;
      .time_top{
        width: 590px/@ppr;
        height: 40px/@ppr;
        font-size: 28px/@ppr;
        color: #000000;
        margin: 0 auto;
        text-align: center;
        background-color: #f2f8fc;
        font-weight: 200;
      }
      .container_first{
        background-color: #ffffff;
        h1{
          font-size: 36px/@ppr;
          text-align: left;
          padding-left: 30px/@ppr;
          font-weight: 400;
        }
        .container_first_item{
          width: 590px/@ppr;
          list-style: none;
          margin: 0 auto;
            .container_first_item_a{
              width: 100%;
              height: 100px/@ppr;
              box-sizing: border-box;
              border-bottom: 1px/@ppr solid #000000;
              position: relative;
              font-size: 28px/@ppr;
              display: inline-block;

            span{
              width: 30px/@ppr;
              height: 30px/@ppr;
              border-radius: 6px/@ppr;
              position: absolute;
              top: 34%;
              border:1px/@ppr solid #cccccc;
            }
            .container_first_item_a-title{
              padding-left: 50px/@ppr;
              line-height: 100px/@ppr;
              color: #cccccc;
              font-weight: 200;
              display: inline-block;
            }
            .container_first_item_a-desc{
              display: none;
            }
          }
    .active{
      .container_first_item_a-title{
        text-decoration:line-through;
        color: #333;
        font-weight: 300;
      }
            span{
              background-image:url('./../assets/image/save-frame.png');
              background-size:contain;
              background-repeat: no-repeat;
            }
            .container_first_item_a-desc{
              display: inline-block;
              float: right;
              line-height: 100px/@ppr;


            }
          }
        }
      }
      .container_second{
        position: relative;
        margin: 0 auto;
        background-color: #ffffff;
        h1{
          font-size: 36px/@ppr;
          text-align: left;
          margin-bottom: 15px/@ppr;
          font-weight: 400;
          padding-left: 30px/@ppr;
        }
        span{
          width: 30px/@ppr;
          height: 30px/@ppr;
          border:1px/@ppr solid #cccccc;
          border-radius: 6px/@ppr;
          display: block;
          box-sizing: border-box;
          position: absolute;
          top: 110px/@ppr;
          left: 30px/@ppr;
        }
        p{
          font-size: 28px/@ppr;
          color: #cccccc;
          font-weight: 200;
          padding-left: 80px/@ppr;
          box-sizing: border-box;
        }
      }
      .container_third{
        position: relative;
        margin: 0 auto;
        margin-top: 15px/@ppr;
        background-color: #ffffff;
        h1{
          font-size: 36px/@ppr;
          text-align: left;
          margin-bottom: 15px/@ppr;
          font-weight: 400;
          padding-left: 30px/@ppr;
        }
        p{
          font-size: 28px/@ppr;
          font-weight: 200;
          color: #000000;
          padding-left: 80px/@ppr;
        }
      }
      .container_4th{
        margin: 0 auto;
        margin-top: 15px/@ppr;
        background-color: #ffffff;
        dl{
          font-size: 0;
          dt{
            font-size: 36px/@ppr;
            font-weight: 400;
            margin-bottom: 10px/@ppr;
            padding-left: 30px/@ppr;
          }
          dd{
            font-size: 24px/@ppr;
            color: #ffffff;
            width: 110px/@ppr;
            height: 50px/@ppr;
            display: inline-block;
            background-color: #000000;
            line-height: 50px/@ppr;
            text-align: center;
            border-radius: 4px/@ppr;
          }
          dd:nth-child(2){
            margin-left: 30px/@ppr;
          }
          dd:nth-child(3){
            background-color: #333333;
            margin-left: 10px/@ppr;
          }
          dd:nth-child(4){
            background-color: #666666;
            margin-left: 10px/@ppr;
          }
          dd:nth-child(5){
            background-color: #999999;
            margin-left: 10px/@ppr;
          }
          dd:nth-child(6){
            background-color: #cccccc;
            margin-left: 10px/@ppr;
          }
        }
      }
      .time_down{
        width: 590px/@ppr;
        height: 40px/@ppr;
        background-color: #f2f8fc;
        font-size: 28px/@ppr;
        font-weight: 200;
        text-align: center;
        margin: 0 auto;
        margin-top: 40px/@ppr;
      }
      .container_5th{
        margin: 0 auto;
        margin-top: 15px/@ppr;
        background-color: #ffffff;
        h1{
          font-size: 36px/@ppr;
          font-weight: 400;
          text-align: left;
          padding-left: 30px/@ppr;
        }
        .container_5th_item_a{
          position: relative;
          border-bottom: 1px solid #000000;
          span{
            width: 30px/@ppr;
            height: 30px/@ppr;
            border-radius: 6px/@ppr;
            border: 1px solid #c4c4c4;
            box-sizing: border-box;
            position: absolute;
            top: 35px/@ppr;
            left: 30px/@ppr;
          }
          p{
            line-height: 100px/@ppr;
            padding-left: 80px/@ppr;
            font-size: 28px/@ppr;
            color: #c4c4c4;
            font-weight: 200;
          }
        }
        .container_5th_item_b{
          position: relative;
          border-bottom: 1px/@ppr solid #000000;
          font-size: 0;
          .img-bg-b{
            background-color: #000000;
            border-radius: 4px/@ppr;
            width: 32px/@ppr;
            height: 32px/@ppr;
            position: absolute;
            top: 35px/@ppr;
            left: 30px/@ppr;
            img{
              width: 24px/@ppr;
              height: 22px/@ppr;
              padding-left: 4px/@ppr;
              padding-top: 3px/@ppr;
              position: absolute;
            }
          }
          p{
            font-size: 28px/@ppr;
            color: #000000;
            font-weight: 200;
            line-height: 100px/@ppr;
            padding-left: 80px/@ppr;
            display: inline-block;
            text-decoration: line-through;
          }
          span{
            font-size: 28px/@ppr;
            color: #000000;
            line-height: 100px/@ppr;
            font-weight: 200;
            margin-left: 100px/@ppr;
          }
        }
        .container_5th_item_c{
          position: relative;
          border-bottom: 1px/@ppr solid #000000;
          font-size: 0;
          .img-bg-c{
            background-color: #000000;
            border-radius: 4px/@ppr;
            width: 32px/@ppr;
            height: 32px/@ppr;
            position: absolute;
            top: 35px/@ppr;
            left: 30px/@ppr;
            img{
            width: 24px/@ppr;
            height: 22px/@ppr;
            padding-left: 4px/@ppr;
            padding-top: 3px/@ppr;
            position: absolute;
            }
          }
          p{
            font-size: 28px/@ppr;
            color: #000000;
            font-weight: 200;
            line-height: 100px/@ppr;
            padding-left: 80px/@ppr;
            display: inline-block;
            text-decoration: line-through;
          }
          span{
            font-size: 28px/@ppr;
            color: #000000;
            line-height: 100px/@ppr;
            font-weight: 200;
            margin-left: 51px/@ppr;
          }
        }
      }
    }
  }
  .state-section{
    width: 100%;
    height: 100%;
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0, 0.5);
    z-index: 999;
    .state-container{
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
    width: 100%;
    background-color: #fff;
    border-radius: 5px 5px 0 0;
    padding-top: 49px/@ppr;
    .state-title{
      width: 100%;
      display: inline-block;
      font-size: 0;
      vertical-align: top;
      .state-title-text{
      display: inline-block;
      font-size: 36px/@ppr;
      font-weight: 500;
      line-height: 36px/@ppr;
      margin-left: 30px/@ppr;
      vertical-align: top;
      margin-bottom: 38px/@ppr;
      }
      .state-map{
        display: inline-block;
        float:right;
        width: 38px/@ppr;
        height: 38px/@ppr;
        margin-right: 30px/@ppr;

      }
    }
    .state-desc{
      padding: 0 30px/@ppr;

      .state-desc-text{
        font-size: 24px/@ppr;
        line-height: 30px/@ppr;
        font-weight: 400;
        color: #000;
      }
    }
    .state-button{
      height: 90px/@ppr;
      display: block;
      width: 100%;
      line-height: 90px/@ppr;
      text-align: center;
      color: #fff;
      background-color: #333;
      margin-top: 46px/@ppr;
    }

    }
  }
}
</style>
