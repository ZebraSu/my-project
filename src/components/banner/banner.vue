<template>
    <div class="banner" data-img="bannerimg">

    </div>
</template>

<script>
    export default {
        name: "banner",
        props:[
          bannerimg
        ],
        data(){
          return{}
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .banner{
    height:400px;
    width:1345px;
    background:url("Photo.png") no-repeat center center;
    background-size:contain;
    position:absolute;
    right:0;
  }
</style>
