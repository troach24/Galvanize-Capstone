import Vue from 'vue-native-core'
import Vuex from "vuex"

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    tabs: [
      tab1 = false,
      tab2 = false,
      tab3 = false,
      tab4 = false
    ],
  },
  getters: {
    tabs(state) {
      return state.tabs
    }
  },
  actions: {

  },
  mutations: {
    setHomeTabs(state, tabs) {
      state.tab1 = false
      state.tab2 = false
      state.tab3 = false
      state.tab4 = false
    },
  }


})

export default store