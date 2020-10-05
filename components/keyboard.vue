<template>
  <div class="keyboard">
    <v-card class="keyboard__wrapper pt-3 pb-3" color="#E4F0FA">
      <div class="keyboard__hr" />
      <div class="keyboard__digits">
        <div v-for="n in 9" :key="n" class="" @click="clickDigit(n)">
          <num-btn class="ma-2">
            {{ n }}
          </num-btn>
        </div>
      </div>
      <div class="keyboard__bottom">
        <div />
        <div class="" @click="clickDigit('0')">
          <num-btn class="ma-2">
            0
          </num-btn>
        </div>
        <div class="" @click="backspace">
          <num-btn class="ma-2">
            <font-awesome-icon style="color: #c8d6e5" class="auth__content-card-social-btn-gp" :icon="['fas', 'backspace']" />
          </num-btn>
        </div>
      </div>
      <div class="keyboard__btn-wrapper px-6 my-2">
        <slot />
      </div>
    </v-card>
  </div>
</template>

<script>
import numBtn from './numBtn'

export default {
  name: 'Keyboard',
  components: {
    numBtn
  },
  props: [
  ],
  computed: {
  },
  methods: {
    clickDigit (n) {
      this.$emit('toggleKey', n.toString())
    },
    backspace () {
      this.$emit('backspace')
    }
  }
}
</script>

<style lang="sass" scoped>
.keyboard
  width: 100%
  &__hr
    background: rgba(110, 129, 160, 0.235905)
    width: 35%
    height: 3px
    margin-left: 50%
    transform: translateX(-50%)
  &__wrapper
    background: #E4F0FA
    box-shadow: 25px 28px 66px rgba(176, 195, 210, 0.727846)
    border-radius: 24px 24px 0 0
    width: 100vw
  &__digits
    width: 100%
    display: grid
    grid-template-columns: 1fr 1fr 1fr
  &__bottom
    width: 100%
    display: grid
    grid-template-columns: 1fr 1fr 1fr
</style>
