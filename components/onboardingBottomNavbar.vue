<template>
  <v-bottom-navigation
    fixed
    background-color="#E4F0FA"
    color="#2E476E"
    height="80px"
    class="bottom-nav py-4 px-2"
  >
    <div class="wrapper">
      <nuxt-link exact to="/profile">
        <v-btn class="link btn-skip">
          Пропустить
        </v-btn>
      </nuxt-link>
      <nuxt-link exact :to="$store.state.onboarding.nextLink[$route.name]">
        <v-btn
          :class="{'dis-btn': !nextActive}"
          class="link btn-next"
          style="background-color: transparent !important"
          :disabled="!nextActive"
        >
          Далее
        </v-btn>
      </nuxt-link>
    </div>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'OnboardingBottomNavbar',
  props: [
    'nextActive'
  ],
  computed: {
  }
}
</script>

<style lang="sass" scoped>
.bottom-nav
  box-shadow: 25px 28px 66px rgba(176, 195, 210, 0.727846) !important
.wrapper
  width: 100% !important
  height: 100%
  display: flex
  justify-content: space-between
  align-items: center

.link
  font-weight: 500
  font-size: 18px !important
  line-height: 22px
  color: #2E476E !important

.dis-btn
  opacity: .6 !important
</style>
