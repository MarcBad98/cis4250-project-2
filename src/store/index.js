import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      fullName: '',
      address: '',
      telephone: '',
      email: ''
    },
    dataSubject: {
      isUser: true,
      fullName: '',
      address: '',
      telephone: '',
      email: ''      
    },
    reasons: [],
    erasure: '',
    hasSigned: false
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
