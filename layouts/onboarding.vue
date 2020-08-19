<template>
  <v-app class="onb">
    <div class="onb__wrapper px-6">
      <onboarding-navbar />
      <nuxt style="margin-top: 110px; margin-bottom: 110px" />
      <onboarding-bottom-navbar :next-active="true" />
    </div>
  </v-app>
</template>

<script>
import onboardingNavbar from '../components/onboardingNavbar'
import onboardingBottomNavbar from '../components/onboardingBottomNavbar'

export default {
  name: 'Onboarding',
  components: {
    onboardingNavbar,
    onboardingBottomNavbar
  }
}
</script>

<style lang="sass" scoped>
.onb
  background: #E3EFF9
</style>
