export const state = () => ({
  tutorials: []
})

export const mutations = {
  SET_TUTORIAL (state, tutorials) {
    state.tutorials = tutorials
  }
}

export const actions = {
  async loadTutorials ({ commit, rootGetters }) {
    const tutorials = await this.$axios.$get(rootGetters.getEndpoints.tutorials)
    commit('SET_TUTORIAL', tutorials)
  }
}

export const getters = {
  getTutorials (state) {
    return state.tutorials
  }
}
