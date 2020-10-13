export const state = () => ({
  posts: [
    {
      id: 1,
      author: 'sasha_geo',
      authorImg: 'users/user0.png',
      img: 'blog/slide_3.png',
      text: 'Взгляды и убеждения гения кажутся безумными, но часто именно они  ближе всего к непостижимой для болшинства истине.',
      likesCount: 125,
      commentsCount: 12,
      theme: 'Психология',
      hashtags: ['психология', 'психология'],
      lastComment: {
        author: 'hublot_13',
        text: 'Красиво сказано!'
      },
      self: false
    },
    {
      id: 2,
      author: 'sasha_geo',
      authorImg: 'users/user0.png',
      img: 'blog/slide_1.png',
      text: 'Взгляды и убеждения гения кажутся безумными, но часто именно они  ближе всего к непостижимой для болшинства истине.',
      likesCount: 125,
      commentsCount: 12,
      theme: 'Психология',
      hashtags: ['психология', 'психология'],
      lastComment: {
        author: 'hublot_13',
        text: 'Красиво сказано!'
      },
      self: true
    },
    {
      id: 3,
      author: 'sasha_geo',
      authorImg: 'users/user0.png',
      img: 'blog/slide_2.png',
      text: 'Взгляды и убеждения гения кажутся безумными, но часто именно они  ближе всего к непостижимой для болшинства истине.',
      likesCount: 125,
      commentsCount: 12,
      theme: 'Психология',
      hashtags: ['психология', 'психология'],
      lastComment: {
        author: 'hublot_13',
        text: 'Красиво сказано!'
      },
      self: true
    }
  ]
})

export const mutations = {
}

export const actions = {
}

export const getters = {
  getPosts (state) {
    return state.posts
  }
}
