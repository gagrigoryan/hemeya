<template>
  <v-app-bar app height="100px" color="#E3EFF9" elevate-on-scroll class="navbar rounded-b-xl px-6 py-2">
    <main-btn
      v-if="$route.path.split('/')[1] === 'home'"
      class="navbar__menu"
      icon
      fab
      @click="menuClick"
    >
      <div class="wrapper pa-3">
        <div class="navbar__menu-line navbar__menu-1 ml-auto" />
        <div class="navbar__menu-line navbar__menu-2 my-1 mx-auto" />
        <div class="navbar__menu-line navbar__menu-3 mr-auto" />
      </div>
    </main-btn>
    <prev-btn v-if="$route.path.split('/')[1] !== 'home'" />
    <img
      class="navbar__logo ml-auto mr-auto"
      src="~assets/img/auth_logo.png"
    >
    <main-btn
      class="navbar__notice"
      icon
      fab
      to="/notifications"
    >
      <v-icon color="#6E81A0">
        mdi-bell-outline
      </v-icon>
    </main-btn>
  </v-app-bar>
</template>

<script>
import prevBtn from './prevBtn'
import MainBtn from './MainBtn'
require('vue2-animate/dist/vue2-animate.min.css')

export default {
  name: 'MainNavbar',
  components: {
    prevBtn,
    MainBtn
  },
  methods: {
    menuClick () {
      this.$store.dispatch('ToggleMenuDrawer', true)
    }
  }
}
</script>

<style lang="sass" scoped>
.navbar
  color: #6E81A0 !important
  &__menu
    &-line
      width: 15px
      height: 2px
      background: #6E81A0
      display: block
      border-radius: 2px

.wrapper
  width: 100%
  height: 100%
</style>
