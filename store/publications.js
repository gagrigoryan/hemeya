export const state = () => ({
  posts: [
    {
      authorNick: 'hubolt_13',
      author: 'Антон Павлов',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aut beatae blanditiis dolorum earum eius enim expedita incidunt labore molestias nulla odit optio qui quos repellendus rerum sed tempore voluptatibus?',
      img: 'auth.png',
      likes: 1123,
      views: 4400,
      comments: 98
    },
    {
      authorNick: 'hubolt_13',
      author: 'Антон Павлов',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aut beatae blanditiis dolorum earum eius enim expedita incidunt labore molestias nulla odit optio qui quos repellendus rerum sed tempore voluptatibus?',
      img: 'auth.png',
      likes: 25000,
      views: 32001,
      comments: 98
    },
    {
      authorNick: 'hubolt_13',
      author: 'Антон Павлов',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aut beatae blanditiis dolorum earum eius enim expedita incidunt labore molestias nulla odit optio qui quos repellendus rerum sed tempore voluptatibus?',
      img: 'auth.png',
      likes: 28,
      views: 123,
      comments: 5
    },
    {
      authorNick: 'hubolt_13',
      author: 'Антон Павлов',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aut beatae blanditiis dolorum earum eius enim expedita incidunt labore molestias nulla odit optio qui quos repellendus rerum sed tempore voluptatibus?',
      img: 'auth.png',
      likes: 28,
      views: 123,
      comments: 5
    },
    {
      authorNick: 'hubolt_13',
      author: 'Антон Павлов',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aut beatae blanditiis dolorum earum eius enim expedita incidunt labore molestias nulla odit optio qui quos repellendus rerum sed tempore voluptatibus?',
      img: 'auth.png',
      likes: 28,
      views: 123,
      comments: 5
    },
    {
      authorNick: 'hubolt_13',
      author: 'Антон Павлов',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aut beatae blanditiis dolorum earum eius enim expedita incidunt labore molestias nulla odit optio qui quos repellendus rerum sed tempore voluptatibus?',
      img: 'auth.png',
      likes: 28,
      views: 123,
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
