<template>
  <div class="home-page">
    <banner :background="background"></banner>
    <div class="container">
      <titleBox chname="公司简介" engname="introduce"></titleBox>
      <div class="introduce">
        <div class="first-img"><div></div></div>
        <div class="second-img">
          <div class="main-photo">
            <div class="words">混凝土<span>E<br/>R<br/>P<br/></span>业界领先者</div>
            <div class="words2"><span>FROM<br/>2002</span><span>将心<br/>比心</span></div>
          </div>
        </div>
        <div class="artcle-box">
          <div class="name">将心软件<br>公司简介</div>
          <div class="line"></div>
          <div class="main-artcle">珠海将心软件有限公司是经国家信息部“双软”认证通过的专业型软件企业,公司至成立10多年以来，一直致力于计算机应用软件研发，积累了丰富的项目研发、实施、产品开发的经验。拥有一支强大的软件开发队伍，依靠精深的计算机技术、涵盖各个领域的专业知识、极其丰富的项目实施经验和严格的软件过程管理，在各开发领域已树立起质量与服务一流的企业形象。 将心软件的核心业务为信息化管理整体解决方案与软件开发业务，为国内最大的专业预拌混凝土ERP软件提供商之一，经将心研发的【将心商品混凝土ERP管理系统】应用于全国各地及海内外预拌企业，收到了良好的社会反响。凭借在混凝土行业多年的丰富实际运作经验，为用户提供包括管理资讯、ERP软件及实施、应用集成、系统集成在内的企业信息化整体解决方案。特别是混凝土行业的 E.R.P 管理软件目前在国内有300多家成功案例，覆盖国内10多个省,积累了丰富的实践经验。成为国内混凝土行业最具知名度的品牌</div>
        </div>
      </div>
    </div>
    <div class="long-banner"></div>
  </div>

</template>

<script>
    import banner from "../banner/banner";
    import titleBox from "../titleBox/titleBox";
    export default {
      name: "home",
      props:{

      },
      data() {
        return{
           background:'../src/components/banner/Photo.png'
        }
      },
      components:{
        banner,
        titleBox
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../commond/stylus/minin";

    .home-page{
      padding-top:20vw;
      .introduce{
        padding-top:25px;
        .first-img{
          position:absolute;
          right:40px;
          padding:30px;
          background:#fff;
          z-index:9;
          div{
            width:400px;
            height:320px;
            background:url("Photo.png") no-repeat center center;
            background-size:contain;
          }
        }
        .second-img{
          padding-top:320px;
          text-align:right;
          .main-photo{
            width:870px;
            height:540px;
            background:url("Photo1.png") no-repeat center center;
            background-size:contain;
            display:inline-block;
            position:relative;
          }
          .words{
            position:absolute;
            width:30px;
            font-size: 18px;
            font-family: "Adobe Heiti Std";
            left:-40px;
            top:0px;
            line-height:1.8
            letter-spacing:.3em;
            writing-mode: vertical-lr;
            writing-mode: tb-lr;
            text-align:center;
             span{
               writing-mode:horizontal-tb;
               text-align:center;
               position: relative;
               left: 3px;
             }
          }
          .words2{
            position:absolute;
            padding:20px 30px 20px 20px;
            font-family: "Myriad Pro";
            font-size: 16px;
            color: rgb(255, 255, 255);
            text-align: left;
            left:-30px;
            bottom:40px;
            background:#000;
            span{
              display:block;
              line-height:1;
              &:first-child{
                margin-bottom:15px;
              }
            }
          }
        }
        .artcle-box{
          margin-top:65px;
          text-align:right;
          .line{
            width:100px;
            height:6px;
            display: inline-block;
            background:#000;
            vertical-align:top;
            margin-top :15px;
            margin-right:30px;
          }
          .name{
            font-size: 30px;
            font-family: "Adobe Heiti Std";
            line-height: 1.2;
            text-align: right;
            display:inline-block;
            vertical-align:top;
            margin-right:30px;
          }
          .main-artcle{
            display:inline-block;
            width:500px;
            font-size: 18px;
            font-family: "Adobe Heiti Std";
            line-height: 2.022;
            text-align: left;
          }
        }
      }
      .long-banner{

      }
    }
</style>
