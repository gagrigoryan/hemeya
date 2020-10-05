<template>
  <v-app class="main">
    <Preloader v-show="loader" />
    <Menu />
    <main-navbar />
    <nuxt />
    <main-bottom-navbar />
  </v-app>
</template>

<script>
import Preloader from '../components/Preloader'
import mainNavbar from '../components/mainNavbar'
import mainBottomNavbar from '../components/mainBottomNavbar'
import Menu from '../components/main/Menu'

export default {
  name: 'Main',
  components: {
    mainNavbar,
    mainBottomNavbar,
    Menu,
    Preloader
  },
  data: () => ({
    loader: true
  }),
  computed: {
  },
  mounted () {
    setTimeout(() => {
      this.loader = false
    }, 650)
  }
}
</script>

<style lang="sass" scoped>
.main
  width: 100%
  height: 100%
  background-color: #E4F0FA
</style>
