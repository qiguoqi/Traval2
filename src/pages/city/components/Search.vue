<template>
  <div>
    <div class="search">
      <input type="text" placeholder="输入拼音名或拼音" class="search-input" v-model="keyword">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li v-for="item in list" :key="item.id" class="search-item border-bottom">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="!list.length">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll';
  export default {
    name: "CitySearch",
    props: {
      cities: Object
    },
    data () {
      return {
        keyword: "",
        list: [],
        timer: null
      }
    },
    mounted () {
      this.scroll = new Bscroll(this.$refs.search);
    },
    watch: {
      keyword () {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        if (!this.keyword) {
          this.list = [];
          return ;
        }
        this.timer = setTimeout(() => {
          const result = [];
          for (var i in this.cities) {
            console.log("i", i);
            this.cities[i].forEach(value => {
              if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                result.push(value);
              }
            })
          }
          this.list = result;
        }, 100);
      }
    }
  }
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/varibles.styl"
.search
  height .72rem
  background $bgColor
  padding 0 .1rem
  .search-input
    box-sizing border-box
    width 100%
    height .62rem
    padding 0 .1rem
    line-height .62rem
    text-align center
    border-radius .06rem
    color #666
.search-content
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  z-index 1
  background #eeeeee
  .search-item
    background #ffffff
    line-height .62rem
    padding-left .2rem
    color #666
</style>