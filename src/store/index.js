import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
<<<<<<< HEAD
    rol:'',
    username:'',
=======
    perfil:'',
>>>>>>> f8a6ce69f4a303b5f23d32c6ffd88958fd6cecf7
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
    setRol(state, rol) {
      state.rol = rol
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
<<<<<<< HEAD
      state.username = ''
      state.rol = ''
=======
      state.perfil = ''
>>>>>>> f8a6ce69f4a303b5f23d32c6ffd88958fd6cecf7
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
