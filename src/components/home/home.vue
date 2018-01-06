<template>
  <banner :bannerImg="bannerImg"></banner>
</template>

<script>
    import banner from "../banner/banner";
    export default {
      name: "home",
      props:{
        bannerImg:'Photo.png'
      },
      components:{
        banner
      }
    }
</script>

<style scoped>

</style>
