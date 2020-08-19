<template>
  <v-app-bar app height="100px" color="#E3EFF9" elevate-on-scroll class="navbar rounded-b-xl px-6 py-2">
    <v-btn
      class="navbar__menu btn"
      icon
      fab
    >
      <div class="wrapper pa-3">
        <div class="navbar__menu-line navbar__menu-1 ml-auto" />
        <div class="navbar__menu-line navbar__menu-2 my-1 mx-auto" />
        <div class="navbar__menu-line navbar__menu-3 mr-auto" />
      </div>
    </v-btn>
    <img
      class="navbar__logo ml-auto mr-auto"
      src="~assets/img/auth_logo.png"
    >
    <v-btn
      class="navbar__notice btn"
      icon
      fab
    >
      <v-icon color="#6E81A0">
        mdi-bell-outline
      </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'MainNavbar'
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
