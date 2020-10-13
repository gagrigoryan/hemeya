<template>
  <v-app class="error__page">
    <main-navbar />
    <div class="content__wrapper">
      <div class="content">
        <h1>{{ code }}</h1>
        <p>{{ pageNotFound }}</p>
      </div>
    </div>
    <main-bottom-navbar />
  </v-app>
</template>

<script>
import mainNavbar from '../components/mainNavbar'
import mainBottomNavbar from '../components/mainBottomNavbar'

export default {
  components: {
    mainNavbar,
    mainBottomNavbar
  },
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      code: 404,
      pageNotFound: 'Страница не найдена',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style lang="sass" scoped>
.error__page
  width: 100%
  height: 100vh
  background-color: #E4F0FA !important

.content
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  text-align: center
  &__content
    position: absolute
    left: 0
    top: 0
    width: 100%
    height: 100vh
  h1
    font-size: 52px
  p
    font-size: 26px
    font-weight: 500
</style>
