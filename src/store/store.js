import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loggedInUser: null
  },
  getters: {
    getUser: (state) => {
      return state.user
    },
    isUserLoggedIn:(state) => {
      return state.isLoggedIn
    }
  },
  mutations: {
    setLoggedIn: (state, user) => {
      state.user = user
      state.isLoggedIn = true
    },
    setLoggOut: (state) => {
      state.isLoggedIn = false
    }
  },
  actions: {
  },
  modules: {
  }
})
export default store;
