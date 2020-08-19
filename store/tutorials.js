export const state = () => ({
  tutorials: []
})

export const mutations = {
  SET_TUTORIAL (state, tutorials) {
    state.tutorials = tutorials
  }
}

export const actions = {
  loadTutorials ({ commit, rootGetters }) {
    // const tutorials = await this.$axios.$get(rootGetters.getEndpoints.tutorials)
    const tutorials = [
      {
        _id: 1,
        title: 'Пишите интересные посты',
        text: 'Продвигайте свои мысли, бренд или размещайте платные публикации. Делитесь чем-то умным и интересным',
        img: 'tutorial_1.png'
      },
      {
        _id: 2,
        title: 'Пишите интересные посты 1',
        text: 'Продвигайте свои мысли, бренд или размещайте платные публикации. Делитесь чем-то умным и интересным',
        img: 'tutorial_2.png'
      },
      {
        _id: 3,
        title: 'Пишите интересные посты 2',
        text: 'Продвигайте свои мысли, бренд или размещайте платные публикации. Делитесь чем-то умным и интересным',
        img: 'tutorial_3.png'
      },
      {
        _id: 4,
        title: 'Пишите интересные посты 3',
        text: 'Продвигайте свои мысли, бренд или размещайте платные публикации. Делитесь чем-то умным и интересным',
        img: 'tutorial_4.png'
      }
    ]
    commit('SET_TUTORIAL', tutorials)
  }
}

export const getters = {
  getTutorials (state) {
    return state.tutorials
  }
}
