<template>
  <div>
    <div class="recommend-title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeWeekend",
    data () {
      return {
        recommendList: [{
          id: "001",
          imgUrl: "https://imgs.qunarzz.com/sight/source/1810/22/b036f54d85ea22.jpg_r_640x214_3e6eb1bb.jpg",
          title: "秦皇岛野生动物园",
          desc: "这个季节去温度还是挺舒适的"
        }, {
          id: "002",
          imgUrl: "https://imgs.qunarzz.com/sight/source/1810/22/b036f54d85ea22.jpg_r_640x214_3e6eb1bb.jpg",
          title: "秦皇岛野生动物园",
          desc: "这个季节去温度还是挺舒适的"
        }, {
          id: "003",
          imgUrl: "https://imgs.qunarzz.com/sight/source/1810/22/b036f54d85ea22.jpg_r_640x214_3e6eb1bb.jpg",
          title: "秦皇岛野生动物园",
          desc: "这个季节去温度还是挺舒适的"
        }, {
          id: "004",
          imgUrl: "https://imgs.qunarzz.com/sight/source/1810/22/b036f54d85ea22.jpg_r_640x214_3e6eb1bb.jpg",
          title: "秦皇岛野生动物园",
          desc: "这个季节去温度还是挺舒适的"
        }, ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.recommend-title
  margin-top .2rem
  background #eeeeee
  line-height .8rem
  text-indent .2rem
.item-img-wrapper
  overflow hidden
  height 0
  padding-bottom 33.9%
  .item-img
    width 100%
.item-info
  padding .1rem
  .item-title
    line-height .54rem
    font-size .32rem
    ellipsis()
  .item-desc
    line-height .4rem
    color #ccc
    ellipsis()
</style>