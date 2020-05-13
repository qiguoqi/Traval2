<template>
  <div>
    <router-link to="/" >
      <div class="header-abs" v-show="showAbs">
        <div class="iconfont header-abs-back">&#xe658;</div>
      </div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link tag="div" to="/">
        <div class="iconfont header-fixed-back">&#xe658;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailHeader",
    data () {
      return {
        showAbs: true,
        opacityStyle: {
          opacity: 0
        }
      }
    },
    methods: {
      handleScroll () {
        const top = document.documentElement.scrollTop;
        if (top > 60 && top < 140) {
          const opacity = top / 140;
          this.opacityStyle = {
            opacity
          }
          this.showAbs = false;
        }
        if (top < 60) {
          this.showAbs = true;
        }
      }
    },
    activated () {
      window.addEventListener("scroll", this.handleScroll)
    },
    deactivated () {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .header-abs
    position absolute
    left .2rem
    top .05rem
    width .8rem
    height .8rem
    line-height .8rem
    border-radius .4rem
    text-align center
    background rgba(0, 0, 0, .8)
    .header-abs-back
      color #ffffff
      font-size .6rem 
  .header-fixed
    z-index 2
    position fixed
    top 0
    left 0
    right 0
    height .86rem
    line-height .86rem
    text-align center
    color #ffffff
    background $bgColor
    font-size .32rem
    .header-fixed-back
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      font-size .6rem
      color #fff
</style>