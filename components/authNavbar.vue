<template>
  <nav class="auth-navbar my-2">
    <prev-btn />
    <img src="~assets/img/auth_logo.png" alt="">
  </nav>
</template>

<script>
import prevBtn from './prevBtn'

export default {
  name: 'AuthNavbar',
  components: {
    prevBtn
  },
  methods: {
  }
}
</script>

<style lang="sass" scoped>
.auth-navbar
  width: 100%
  display: flex
  align-items: center
  justify-content: space-between
</style>
