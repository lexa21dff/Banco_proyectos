import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    perfil:'',
    user: {
      token: '',
      isAuthenticated: false,
    },
  },
  
  getters: {
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('token')) {
        state.user.token = localStorage.getItem('token'),
        state.user.isAuthenticated = true
      } else {
        state.user.token = '',
        state.user.isAuthenticated = false
      }
    },
    setToken(state, token) {
      state.user.token = token,
      state.user.isAuthenticated = true
    },
    setUsername(state, perfil) {
      state.perfil = perfil
    },
    removeToken(state) {
      state.user.token = '',
      state.user.isAuthenticated = false
    },
    clearState(state) {
      state.user = {
        token: '',
        isAuthenticated: false,
      },
      state.perfil = ''
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({
    paths: ['user', 'perfil']
  })]
})
