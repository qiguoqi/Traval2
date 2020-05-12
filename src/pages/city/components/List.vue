<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper"><div class="button">{{this.currentCity}}</div></div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
            <div class="button-wrapper" v-for="item in hot" :key="item.id" @click="handleCityClick(item.name)"><div class="button">{{item.name}}</div></div>
        </div>
      </div>
      <div class="area" v-for="(item, key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="innerItem in item" :key="innerItem.id">
          <div class="item border-bottom" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: "CityList",
    props: {
      hot: Array,
      cities: Object
    },
    data () {
      return {
        letter: ""
      }
    },
    methods: {
      handleCityClick(city) {
        this.changeCity(city);
        this.$router.push("/")
      },
      ...mapMutations(["changeCity"])
    },
    mounted () {
      const _this = this;
      this.scroll = new Bscroll(this.$refs.wrapper);
      this.bus.$on("change", function(value) {
        _this.letter = value;
        if (_this.letter) {
          const element = _this.$refs[_this.letter][0];
          _this.scroll.scrollToElement(element);
        }
      })
    },
    computed: {
      ...mapState({
        currentCity: "city"
      })
    }
  }
</script>

<style lang="stylus" scoped>
.border-topbottom
  &:before
   border-color #ccc
  &:after
    border-color #ccc
.border-bottom
  &:before
    border-color #777
.list
  overflow hidden
  position absolute
  top 1.58rem
  right 0
  left 0
  bottom 0
  .title
    line-height .54rem
    background #eee
    padding-left .2rem
    color #666
    font-size .26rem
  .button-list
    overflow hidden
    padding .1rem .6rem .1rem .1rem
    .button-wrapper
      float left
      width 33.33%
      .button
        margin .1rem
        padding .1rem
        text-align center
        border .02rem solid #ccc
        border-radius .06rem
  .item-list
    .item
      line-height .76rem
      padding-left .2rem
</style>