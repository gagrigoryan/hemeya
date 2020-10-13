<template>
  <v-bottom-navigation
    fixed
    background-color="#E4F0FA"
    color="#2E476E"
    height="80px"
    class="bottom-nav py-4 px-6"
  >
    <div class="wrapper">
      <nuxt-link
        v-for="(item, index) in navLinks"
        :key="index"
        :to="item.url"
        append
      >
        <button
          class="bottom-nav__btn"
          :class="{'active-link': $route.path.split('/')[1] === item.name}"
        >
          <v-icon>
            {{ item.icon }}
          </v-icon>
        </button>
      </nuxt-link>
    </div>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'MainBottomNavbar',
  data: () => ({
    navLinks: [
      {
        name: 'home',
        url: '/home',
        icon: 'mdi-home-outline'
      },
      {
        name: 'feed',
        url: '/feed',
        icon: 'mdi-book-multiple-outline'
      },
      {
        name: 'add',
        url: '/add',
        icon: 'mdi-plus-box-outline'
      },
      {
        name: 'blog',
        url: '/blog',
        icon: 'mdi-book-open-outline'
      },
      {
        name: 'profile',
        url: '/profile',
        icon: 'mdi-account-outline'
      }
    ]
  })
}
</script>

<style lang="sass" scoped>
.bottom-nav
  &__btn
    background: #F0F0F3 !important
    box-shadow: -1px -1px 3px #FFFFFF, 1.5px 1.5px 2px rgba(174, 174, 192, 0.4)
    border-radius: 5px !important
    width: 40px !important
    height: 40px !important
    outline: none
    i
      color: #334669 !important

.wrapper
  display: grid
  grid-template-columns: repeat(5, 1fr)
  grid-gap: 35px

.active-link
  box-shadow: inset -1px -1px 3px #FFFFFF, inset 1.5px 1.5px 3px rgba(174, 174, 192, 0.4)
  i
    color: #745FF2 !important
</style>
