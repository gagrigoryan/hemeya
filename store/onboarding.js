export const state = () => ({
  fons: [
    {
      id: 1,
      img: 'fon1.png'
    },
    {
      id: 2,
      img: 'fon2.png'
    },
    {
      id: 3,
      img: 'fon3.png'
    },
    {
      id: 4,
      img: 'fon4.png'
    },
    {
      id: 5,
      img: 'fon5.png'
    },
    {
      id: 6,
      img: 'fon6.png'
    },
    {
      id: 7,
      img: 'fon1.png'
    },
    {
      id: 8,
      img: 'fon2.png'
    },
    {
      id: 9,
      img: 'fon3.png'
    },
    {
      id: 10,
      img: 'fon4.png'
    }
  ],
  checkedFons: [],
  users: [
    {
      id: 1,
      name: 'Алексей Невзоров',
      profession: 'Журналист',
      img: 'user1.png',
      commentCount: 11,
      followersCount: 112
    },
    {
      id: 2,
      name: 'Лена Катина',
      profession: 'Певица',
      img: 'user2.png',
      commentCount: 13,
      followersCount: 1162
    },
    {
      id: 3,
      name: 'Алексей Невзоров',
      profession: 'Журналист',
      img: 'user1.png',
      commentCount: 11,
      followersCount: 112
    },
    {
      id: 4,
      name: 'Лена Катина',
      profession: 'Певица',
      img: 'user2.png',
      commentCount: 13,
      followersCount: 1162
    },
    {
      id: 5,
      name: 'Алексей Невзоров',
      profession: 'Журналист',
      img: 'user1.png',
      commentCount: 11,
      followersCount: 112
    },
    {
      id: 6,
      name: 'Лена Катина',
      profession: 'Певица',
      img: 'user2.png',
      commentCount: 13,
      followersCount: 1162
    },
    {
      id: 7,
      name: 'Алексей Невзоров',
      profession: 'Журналист',
      img: 'user1.png',
      commentCount: 11,
      followersCount: 112
    },
    {
      id: 8,
      name: 'Лена Катина',
      profession: 'Певица',
      img: 'user2.png',
      commentCount: 13,
      followersCount: 1162
    }
  ],
  nextLink: {
    onboarding: '/onboarding/users',
    'onboarding-users': '/onboarding/subjects',
    'onboarding-subjects': '/profile'
  },
  subjects: [
    {
      name: 'Дизайн'
    },
    {
      name: 'Бизнесс'
    },
    {
      name: 'Живопись'
    },
    {
      name: 'Маркетинг'
    },
    {
      name: 'Журналистика'
    },
    {
      name: 'Наука'
    },
    {
      name: 'Дизайн'
    },
    {
      name: 'Бизнесс'
    },
    {
      name: 'Живопись'
    },
    {
      name: 'Маркетинг'
    }
  ]
})

export const mutations = {
  SET_TUTORIAL (state, fons) {
    state.fons = fons
  }
}

export const actions = {
}

export const getters = {
  getFons (state) {
    return state.fons
  },

  getUsers (state) {
    return state.users
  },

  getSubjects (state) {
    return state.subjects
  }
}
