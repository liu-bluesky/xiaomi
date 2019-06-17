<template>
<div class="index">
  <!--login-nav开始-->
  <div class="index-login-nav">
    <topnav class="clearfix"></topnav>
  </div>
  <!--login-nav结束
  <!--顶部nav开-->
    <div class="index-header-nav">
      <navs></navs>
    </div>
  <!--顶部nav结束-->
  <!--banner开始-->
  <div class="index-banner">
    <swiper></swiper>
  </div>
  <!--banner结束-->
  <!--subjoin开始-->
  <div class="index-subjoin">
    <subjoin></subjoin>
  </div>
  <!--subjoin结束-->
  <!--宣传盒子开始-->
  <div class="index-banner-max-box">
    <recommend></recommend>
  </div>
  <!--宣传盒子结束-->
  <!--推荐开始-->
  <div class="index-recommend"></div>
  <!--推荐结束-->
    <!--热品开始-->
  <div class="index-reping clearfix">
    <reping></reping>
  </div>
  <!--热评论结束-->
  <!--内容开始-->
  <div class="index-content">
    <contents></contents>
  </div>
  <!--内容结束-->

  <!--视频开始-->
  <div class="index-video"></div>
  <!--视频结束-->

  <!--底部开始-->
  <div class="index-foot">
    <fonter></fonter>
  </div>
  <!--底部结束-->
</div>
</template>

<script>
  import swiper from '../components/index/swiper/swiper'
  import subjoin from '../components/index/subjoin/subjoin'
  import recommend from '../components/index/recommend/recommend'
  import contents from '../components/index/content/contents'
  import fonter from '../components/footer/footer'
  import navs from '../components/nav/nav'
  import topnav from '../components/topnav/topnav'
  import reping from '../components/index/reping/reping'
    export default {
        name: "index",
      components:{
        swiper,
        subjoin,
        recommend,
        contents,
        fonter,
        navs,
        topnav,
        reping
      }
    }
</script>

<style scoped lang="scss">
  .index{
    margin: 0 auto;

    .index-subjoin{
      margin-top: -86px;
    }
    .index-banner-max-box{
      margin-top: 42px;
      width: 100%;
      background-color: #f5f5f5;
    }
    .index-content{
      width: 100%;
      background-color: #f5f5f5;
      padding-bottom: 50px;
    }
    .index-header-nav{
    }
    .index-reping{
      background-color: #f5f5f5;
    }
    .index-foot{
    }
  }

</style>
