import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = "上海";
try {
  if (localStorage) {
    defaultCity = localStorage.city;
  }
} catch (e) {

}

export default new Vuex.Store({
  state: {
    city: localStorage.city || "上海"
  },
  mutations: {
    changeCity (state, city) {
      try {
        state.city = city;
        localStorage.city = city;
      } catch (e) {

      }
    }
  },
  actions: {
    
  },
  modules: {
  }
})
