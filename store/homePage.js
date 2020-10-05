export const state = () => ({
  pubsRowView: true
})

export const mutations = {
  SET_ROW_VIEW (state, value) {
    state.pubsRowView = value
  }
}

export const actions = {
  ChangeRowView ({ commit }, value) {
    commit('SET_ROW_VIEW', value)
  }
}

export const getters = {
  getRowView (state) {
    return state.pubsRowView
  }
}
