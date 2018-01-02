<template>
<div class="nav-bar">
  <div class="nav-item" v-for="(item,index) in items" >
    <router-link to="/home">{{item.text}}</router-link>
  </div>
  <router-view ></router-view>
</div>

</template>

<script type="text/ecmascript-6">
    export default {
      props:{
        NavBar:{
          type:Object
        }
      },
      data() {
        return{
          items:[
            { text : '网站首页' , link : '/home'},
            { text : '产品中心' , link : '/produce'},
            { text : '售后服务' , link : '/home'},
            { text : '成功案例' , link : '/home'},
            { text : '将心公司' , link : '/home'},
            { text : '联系我们' , link : '/home'},
          ]
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .nav-bar{
    font-size:0px;
    width:100%;
    text-align:right;
    .nav-item + .nav-item{
      margin-left:40px;
    }
    .nav-item{
      padding:22px 0;
      position:relative;
      display inline-block;

      a{
        display:block;
        text-decoration none;
        color:#333;
        font-weight:600;
        font-size:14px;
      }
      &.active,&.router-link-active{
        &:after{
          content: '';
          position:absolute;
          width:100%;
          bottom:0;
          right:0;
          height:4px;
          background:#0e82c5;
        }
      }
    }
  }
</style>
