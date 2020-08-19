<template>
  <div class="register pt-5">
    <nuxt-child ref="childComponent" />
    <transition
      enter-active-class="animated slideInUp"
      leave-active-class="animated slideOutDown"
    >
      <keyboard
        v-if="keyboardInput"
        class="register__keyboard"
        :link="$store.state.register.registerLink"
        @toggleKey="keyboardClick"
        @backspace="backspace"
      />
    </transition>
  </div>
</template>

<script>
import keyboard from '../../components/keyboard'
require('vue2-animate/dist/vue2-animate.min.css')

export default {
  components: {
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
