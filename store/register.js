export const state = () => ({
  messenger: 'telegram',
  registerPhone: '',
  useTerms: false,
  registerLink: '/register/verify',
  verifyCode: ''
})

export const mutations = {
  ADD_DIGIT (state, digit) {
    if (/^\d+$/.test(digit) && digit.length === 1 && state.registerPhone.length < 10) { state.registerPhone += digit }
  },
  REMOVE_DIGIT (state) {
    if (state.registerPhone.length > 0) { state.registerPhone = state.registerPhone.slice(0, -1) }
  },
  CHANGE_USE_TERMS (state, value) {
    state.useTerms = value
  },

  CHANGE_REGISTER_LINK (state, link) {
    state.registerLink = link
  },

  ADD_CODE_DIGIT (state, digit) {
    if (/^\d+$/.test(digit) && digit.length === 1 && state.verifyCode.length < 4) { state.verifyCode += digit }
  },

  REMOVE_CODE_DIGIT (state) {
    if (state.verifyCode.length > 0) { state.verifyCode = state.verifyCode.slice(0, -1) }
  },

  SET_MESSENGER (state, messenger) {
    state.messenger = messenger
  }
}

export const actions = {
  addDigit ({ commit }, digit) {
    commit('ADD_DIGIT', digit)
  },
  removeDigit ({ commit }) {
    commit('REMOVE_DIGIT')
  },
  changeUseTerms ({ commit }, value) {
    commit('CHANGE_USE_TERMS', value)
  },
  changeRegLink ({ commit }, link) {
    commit('CHANGE_REGISTER_LINK', link)
  },
  addCodeDigit ({ commit }, digit) {
    commit('ADD_CODE_DIGIT', digit)
  },
  removeCodeDigit ({ commit }) {
    commit('REMOVE_CODE_DIGIT')
  },
  setMessenger ({ commit }, messenger) {
    commit('SET_MESSENGER', messenger)
  }
}

export const getters = {
  getRegisterPhone (state) {
    return state.registerPhone
  },

  getVerifyCode (state) {
    return state.verifyCode
  },

  getMessenger (state) {
    return state.messenger
  }
}
