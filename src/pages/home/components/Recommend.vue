<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <img :src="item.imgUrl" alt="" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    data () {
      return {
        recommendList: [{
          id: "001",
          imgUrl: "https://imgs.qunarzz.com/sight/p0/1805/85/85c96c36663eeafea3.water.jpg_200x200_f6af6080.jpg",
          title: "秦皇岛野生动物园",
          desc: "这个季节去温度还是挺舒适的"
        }, {
          id: "002",
          imgUrl: "https://imgs.qunarzz.com/sight/p0/1805/85/85c96c36663eeafea3.water.jpg_200x200_f6af6080.jpg",
          title: "秦皇岛野生动物园",
          desc: "这个季节去温度还是挺舒适的"
        }, {
          id: "003",
          imgUrl: "https://imgs.qunarzz.com/sight/p0/1805/85/85c96c36663eeafea3.water.jpg_200x200_f6af6080.jpg",
          title: "秦皇岛野生动物园",
          desc: "这个季节去温度还是挺舒适的"
        }, {
          id: "004",
          imgUrl: "https://imgs.qunarzz.com/sight/p0/1805/85/85c96c36663eeafea3.water.jpg_200x200_f6af6080.jpg",
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
.item
  overflow hidden
  display flex
  height 1.9rem
  .item-img
    height 1.7rem
    width 1.7rem
    padding .1rem
  .item-info
    flex 1
    min-width 0
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
    .item-button
      line-height .44rem
      margin-top .16rem
      background #ff9300
      padding 0 .2rem
      border-radius .06rem
      color #fff
</style>