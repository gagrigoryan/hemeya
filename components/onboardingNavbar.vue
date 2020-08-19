<template>
  <v-app-bar app height="100px" color="#E3EFF9" elevate-on-scroll class="navbar rounded-b-xl px-6 py-2">
    <transition
      name="bounce"
      enter-active-class="bounceInLeft"
      leave-active-class="bounceOutLeft"
    >
      <prev-btn v-if="$route.name !== 'onboarding'" />
    </transition>
    <img
      class="navbar__logo ml-auto mr-auto"
      src="~assets/img/auth_logo.png"
    >
  </v-app-bar>
</template>

<script>
import prevBtn from './prevBtn'
require('vue2-animate/dist/vue2-animate.min.css')

export default {
  name: 'OnboardingNavbar',
  components: {
    prevBtn
  }
}
</script>

<style lang="sass" scoped>
</style>
