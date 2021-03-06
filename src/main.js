import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
// require('swiper/dist/css/swiper.css')
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);
Vue.prototype.bus = new Vue();

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
