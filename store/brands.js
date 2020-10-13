export const state = () => ({
  brands: [
    {
      id: 1,
      name: 'Marvel',
      text: 'Marvel Comics (от англ. marvel «чудо») — американская компания, издающая комиксы, подразделение корпорации Marvel Entertainment.  ',
      img: 'brands/marvel.png',
      commentCount: 210,
      followersCount: 50000
    },
    {
      id: 2,
      name: 'Google',
      text: 'Google — американская транснациональная корпорация, реорганизованная 15 октября 2015 года в международный конгломерат Alphabet Inc., ',
      img: 'brands/google.png',
      commentCount: 210,
      followersCount: 50000
    },
    {
      id: 3,
      name: 'Marvel',
      text: 'Marvel Comics (от англ. marvel «чудо») — американская компания, издающая комиксы, подразделение корпорации Marvel Entertainment.  ',
      img: 'brands/marvel.png',
      commentCount: 210,
      followersCount: 50000
    }
  ]
})

export const mutations = {
}

export const actions = {
}

export const getters = {
  getBrands (state) {
    return state.brands
  }
}
