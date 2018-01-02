<template>
<div class="container">
  <div class="nav-bar">
    <div class="nav-item" v-for="item in items">
      <router-link :to="item.link">{{item.text}}</router-link>
    </div>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return{
      items:[
        { text : '网站首页' , link : '/home'},
        { text : '产品中心' , link : '/produce'},
        { text : '售后服务' , link : '/service'},
        { text : '成功案例' , link : '/demo'},
        { text : '将心公司' , link : '/firm'},
        { text : '联系我们' , link : '/contact'},
      ]
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .container{
    width: 1170px;
    margin: 0 auto;
    position: relative
  }

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
        &.active{
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
  }
</style>
