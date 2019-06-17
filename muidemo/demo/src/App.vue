<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
  name: 'App',
  data(){
    return {
        off:this.$store.state.onOff
    }
  },
  methods:{
    click(){
      this.$store.commit('getonOff',this.off)
    },

  },

}
</script>

<style lang="scss">
@import url('css/base.css');
@import "fonts/font_heljz6cukj/iconfont.css";
@import "fonts/fon/iconfont.css";
@import "../node_modules/swiper/dist/css/swiper.min.css";
@font-face {
  font-family: 'zz';
  src: url('./fonts/fon/iconfont.eot');
  src: url('./fonts/fon/iconfont.eot?#iefix') format('embedded-opentype'),
  url('./fonts/fon/iconfont.woff2') format('woff2'),
  url('./fonts/fon/iconfont.woff') format('woff'),
  url('./fonts/fon/iconfont.ttf') format('truetype'),
  url('./fonts/fon/iconfont.svg#iconfont') format('svg');
}

</style>
