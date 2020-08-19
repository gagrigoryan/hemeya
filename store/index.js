import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const host = 'https://50ba22c1-a9a3-4ba4-9aaf-8503ba85d8ec.mock.pstmn.io/'

export const state = () => ({
  host,
  endpoints: {
    tutorials: host + 'tutorials',
    countries: host + 'countries'
  }
})

export const getters = {
  getEndpoints (state) {
    return state.endpoints
  }
}
