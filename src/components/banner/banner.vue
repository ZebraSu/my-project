<template>
    <div class="banner" :style="{backgroundImage:'url('+background+')'}">
      <div class="name-box">
          <div class="left-box">
            <div class="middle">
              <div class="logo"></div>
              <span>将心软件</span>
            </div>
          </div>
          <div class="right-box">
            <div class="words-box">
              <span>将心比心</span>
              <span>独具匠心</span>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "banner",
        props:["background"],
        data(){
          return{
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .banner{
    height:20vw;
    width:67vw;
    background:url("Photo.png") no-repeat top right;
    background-size:contain;
    position:absolute;
    right:0;
    top:71px;
    .name-box{
      width:600px;
      height:200px;
      position:absolute;
      left:-130px;
      font-size:0;
      top:50%;
      transform:translateY(-50%);
      -webkit-transform:translateY(-50%);
    }

    .left-box{
      display: inline-block;
      width:200px;
      height:200px;
      background:#f0f0f0;
      position:relative;
      &:before{
        content:'';
        width: 0;
        height: 0;
        border-top: 200px solid #f8f8f8;
        border-right: 200px solid transparent;
        position:absolute;
        top:0;
        left:0;
      }
      .middle{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        -webkit-transform:translate(-50%,-50%);
        width:100%;
        text-align:center;
        span{
          font-size:23px;
          letter-spacing:.35em;
          font-weight:500;
          color:#181818;
          font-family: "Adobe Heiti Std";
        }
      }
      .logo{
        width:50px;
        height:56px;
        background:url("logo.png");
        margin:10px auto;
      }
    }
    .right-box{
      display: inline-block;
      width:400px;
      height:200px;
      background:rgba(0,0,0,0.86);
      float:right;
      .words-box{
        padding-top:38px;
        padding-left:50px;
        font-size: 36px;
        font-family: "Adobe Heiti Std";
        color: rgb(255, 255, 255);
        line-height:1.5;
        span{
          display:block;
          letter-spacing:.5em;
          position:relative;
          &:last-child{
            &:after{
              content: '';
              width:66%
              height:4px;
              background:#0e82c5;
              bottom:-18px;
              left:0;
              display:block;
              position:absolute;
            }
          }
        }
      }
    }
  }
</style>
