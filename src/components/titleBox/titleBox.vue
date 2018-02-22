<template>
  <div class="title-box">
    <span class="eng-title">{{engname}}</span>
    <div class="ch-title">{{chname}}</div>
  </div>
</template>

<script>
    export default {
        name: "titleBox",
        props:[
          "chname",
          "engname"
        ]
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .title-box{
    font-size: 32px;
    font-family: "Adobe Heiti Std";
    margin:0 auto;
    display:block;
    line-height:1;
    text-align:center;
    margin-top:150px;
    max-width:300px;
    .eng-title{
      font-size: 18px;
      font-family: "Myriad Pro";
    }
    .ch-title{
      position:relative;
      &:before{
        content:'';
        width:50px;
        height:4px;
        background:#000;
        display:inline-block;
        position:absolute;
        left:20px;
        top:50%;
        transform:translateY(-50%);
      }
      &:after{
        content:'';
        width:50px;
        height:4px;
        background:#000;
        display:inline-block;
        position:absolute;
        right:20px;
        top:50%;
        transform:translateY(-50%);
      }
    }
  }
</style>
