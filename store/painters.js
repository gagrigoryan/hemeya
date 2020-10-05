export const state = () => ({
  posts: [
    {
      authorNick: 'sup_inspiration',
      author: 'Inspiration Life',
      text: 'Неосознанный всплеск творчества в литературном, музыкальном интересa вызывает концепция Дэвида Дэмроша, который в полемике с идеями Ф. Моретти отстаивает\n' +
        'правомерность построения образа «своей (my) мировой литературы».\n' +
        'Тем самым Дэмрош подчеркивает, что концепция «мировой литературы»\n' +
        'в разные времена и в разных странах наполняется различным содержанием и представляет собой воображаемое, «виртуальное»\n' +
        'единство. ',
      img: 'painter/paint0.png',
      likes: 1123,
      views: 4400,
      comments: 98
    },
    {
      authorNick: 'sup_inspiration',
      author: 'Дуся Смирнова',
      text: 'Неосознанный всплеск творчества в литературном, музыкальном интересa вызывает концепция Дэвида Дэмроша, который в полемике с идеями Ф. Моретти отстаивает\n' +
        'правомерность построения образа «своей (my) мировой литературы».\n' +
        'Тем самым Дэмрош подчеркивает, что концепция «мировой литературы»\n' +
        'в разные времена и в разных странах наполняется различным содержанием и представляет собой воображаемое, «виртуальное»\n' +
        'единство. ',
      img: 'painter/paint1.png',
      likes: 25000,
      views: 32001,
      comments: 98
    },
    {
      authorNick: 'sup_inspiration',
      author: 'Inspiration Life',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aut beatae blanditiis dolorum earum eius enim expedita incidunt labore molestias nulla odit optio qui quos repellendus rerum sed tempore voluptatibus?',
      img: 'painter/paint1.png',
      likes: 28,
      views: 123,
      comments: 5
    },
    {
      authorNick: 'hubolt_13',
      author: 'Антон Павлов',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aut beatae blanditiis dolorum earum eius enim expedita incidunt labore molestias nulla odit optio qui quos repellendus rerum sed tempore voluptatibus?',
      img: 'painter/paint2.png',
      likes: 28,
      views: 123,
      comments: 5
    },
    {
      authorNick: 'sup_inspiration',
      author: 'Дуся Смирнова',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aut beatae blanditiis dolorum earum eius enim expedita incidunt labore molestias nulla odit optio qui quos repellendus rerum sed tempore voluptatibus?',
      img: 'painter/paint3.png',
      likes: 28,
      views: 123,
      comments: 5
    },
    {
      authorNick: 'smirnova',
      author: 'Дуся Смирнова',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aut beatae blanditiis dolorum earum eius enim expedita incidunt labore molestias nulla odit optio qui quos repellendus rerum sed tempore voluptatibus?',
      img: 'painter/paint2.png',
      likes: 6100,
      views: 2500,
      comments: 5
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
