import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  menuBarraNavegacao: {
    titulo: 'Mix Certo',
    subTitulo: 'Mercado e Atacado'
  },
  historicoNavegacao: {
    voltar: false,
    rota: null
  }
}

const mutations = {
  historicoNavegacao (state, payload) {
    state.historicoNavegacao = payload
  },

  menuBarraNavegacao (state, payload) {
    state.menuBarraNavegacao = payload
  }
}

const actions = {}
const getters = {
  historicoNavegacao (state) { return state.historicoNavegacao },
  menuBarraNavegacao (state) { return state.menuBarraNavegacao }
}

export default new Vuex.Store({state, mutations, actions, getters})
