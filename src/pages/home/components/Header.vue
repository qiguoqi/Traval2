<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe658;</div>
    </div>
    <div class="header-input">
      <span class="iconfont search-icon">&#xe63c;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right"><span>{{this.city}}</span><span class="iconfont arow-icon">&#xe65c;</span></div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
  .header
    display flex
    line-height .86rem
    background $bgColor
    color #fff
    .header-left
      width .64rem
      float left
      .back-icon
        position relative
        top .04rem
        text-align center
        font-size .48rem
    .header-input
      flex 1
      background #fff
      border-radius .1rem
      height .64rem
      padding-left .2rem
      line-height .64rem
      margin-top .12rem
      margin-left .2rem
      color #ccc
      .search-icon 
        position relative
        top .03rem
    .header-right
      width 1.24rem
      float right
      text-align center
      .arow-icon
        position relative
        top .06rem
        left -.06rem
        font-size .4rem

</style>