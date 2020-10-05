export const state = () => ({
  cityItems: [
    'Нижний Новгород', 'Ереван', 'Москва'
  ],
  typeItems: [
    'Бренды', 'Респонденты', 'Художники'
  ],
  dateItems: [
    'Сегодня', 'На неделе'
  ],
  cityChoose: 'Нижний Новгород',
  typeChoose: 'Бренды',
  dateChoose: 'Сегодня'
})

export const mutations = {
  SET_CITY_CHOOSE (state, value) {
    state.cityChoose = value
  },

  SET_TYPE_CHOOSE (state, value) {
    state.typeChoose = value
  },

  SET_DATE_CHOOSE (state, value) {
    state.dateChoose = value
  }
}

export const actions = {
  SetCityChoose ({ commit }, value) {
    commit('SET_CITY_CHOOSE', value)
  },

  SetTypeChoose ({ commit }, value) {
    commit('SET_TYPE_CHOOSE', value)
  },

  SetDateChoose ({ commit }, value) {
    commit('SET_DATE_CHOOSE', value)
  }
}

export const getters = {
  getCityItems (state) {
    return state.cityItems
  },

  getCityChoose (state) {
    return state.cityChoose
  },

  getTypeItems (state) {
    return state.typeItems
  },

  getTypeChoose (state) {
    return state.typeChoose
  },

  getDateItems (state) {
    return state.dateItems
  },

  getDateChoose (state) {
    return state.dateChoose
  }
}
