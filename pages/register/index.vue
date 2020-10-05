<template>
  <div class="register pt-5">
    <nuxt-child ref="childComponent" />
  </div>
</template>

<script>
import keyboard from '../../components/keyboard'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    keyboard
  },
  beforeRouteUpdate (to, from, next) {
    this.$store.dispatch('register/changeRegLink', '/register/verify')
    next()
  },
  data: () => ({
    keyboardInput: false
  }),
  mounted () {
    this.keyboardInput = true
  },
  methods: {
    keyboardClick (digit) {
      this.$refs.childComponent.clickDigit(digit)
    },

    backspace () {
      this.$refs.childComponent.clickBack()
    }
  },
  layout: 'auth'
}
</script>

<style lang="sass" scoped>
.register
  &__keyboard
    position: fixed
    left: 0
    bottom: 0
</style>
