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
        <nuxt-link :to="link">
          <v-btn
            :disabled="!contBtn"
            :class="{'active-btn': contBtn}"
            depressed
            width="100%"
            height="60px"
            class="btn keyboard__btn"
          >
            Далее
          </v-btn>
        </nuxt-link>
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
    'link'
  ],
  computed: {
    contBtn () {
      return this.$store.getters['register/getRegisterPhone'].length > 0 && this.$store.state.register.useTerms
    }
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
  &__btn
    color: #2E476E
    background: #E8F3FB !important
    opacity: .4
    transition: all .3s ease-in !important
    &__wrapper
      width: 100%
      height: 60px
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

.active-btn
  box-shadow: -11px -11px 20px rgba(255, 255, 255, 0.272044), -8px -40px 22px rgba(246, 251, 255, 0.384288), -8px 0px 8px rgba(244, 248, 251, 0.50254), 19px 21px 50px rgba(176, 195, 210, 0.727846) !important
  border-radius: 20px !important
  opacity: 1 !important
</style>
