<template>
  <v-app class="main">
    <main-navbar />
    <nuxt />
    <main-bottom-navbar />
  </v-app>
</template>

<script>
import mainNavbar from '../components/mainNavbar'
import mainBottomNavbar from '../components/mainBottomNavbar'

export default {
  name: 'Main',
  components: {
    mainNavbar,
    mainBottomNavbar
  }
}
</script>

<style lang="sass" scoped>
.main
  width: 100%
  height: 100%
  background-color: #E4F0FA
</style>
