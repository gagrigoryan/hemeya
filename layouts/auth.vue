<template>
  <v-app>
    <div class="auth-layout pa-6">
      <auth-navbar />
      <nuxt />
    </div>
  </v-app>
</template>

<script>
import authNavbar from '../components/authNavbar'

export default {
  name: 'Auth',
  components: {
    authNavbar
  }
}
</script>

<style lang="sass">
.auth-layout
  width: 100%
  height: 100vh
  background: #E4F0FA
  box-shadow: 50px 80px 80px rgba(0, 0, 0, 0.25)
</style>
