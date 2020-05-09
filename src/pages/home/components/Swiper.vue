<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HeaderSwiper",
    data() {
      return {
        swiperOption: {
          pagination: ".swiper-pagination",
          loop: true
        },
        swiperList: [{
          id: "0001",
          imgUrl: "http://img1.qunarzz.com/sight/p0/1907/43/434697bdffd1475fa3.water.jpg_600x330_3a0f0c8d.jpg"
        }, {
          id: "0002",
          imgUrl: "http://img1.qunarzz.com/sight/p0/1908/9c/9c0584bc05b14959a3.water.jpg_600x330_6bc563d9.jpg"
        }]
      }
    }
  }
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #fff
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 31.25%
  background #eee
  .swiper-img
    width 100%
    height 31.25vw
</style>