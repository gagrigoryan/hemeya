import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const host = 'https://50ba22c1-a9a3-4ba4-9aaf-8503ba85d8ec.mock.pstmn.io/'

export const state = () => ({
  host,
  endpoints: {
    tutorials: host + 'tutorials',
    countries: host + 'countries'
  },
  menuDrawer: false,
  filterDrawer: false
})

export const mutations = {
  TOGGLE_MENU_DRAWER (state, value) {
    state.menuDrawer = value
  },

  TOGGLE_FILTER_DRAWER (state, value) {
    state.filterDrawer = value
  }
}

export const actions = {
  ToggleMenuDrawer ({ commit }, value) {
    commit('TOGGLE_MENU_DRAWER', value)
  },

  ToggleFilterDrawer ({ commit }, value) {
    commit('TOGGLE_FILTER_DRAWER', value)
  }
}

export const getters = {
  getEndpoints (state) {
    return state.endpoints
  }
}
