<template>
  <div class="login">
    <div class="login__header mb-5 mt-7">
      <h2 class="login__header-title">
        С возвращением!
      </h2>
      <h3 class="login__header-subtitle">
        Авторизируйтесь, чтобы продолжить
      </h3>
    </div>
    <phone-input
      id="phoneInput"
      ref="phoneInput"
      :phone="login"
      @click.native="phoneClick"
    />
    <div class="login__password-input mt-2">
      <v-icon class="login__password-input-icon">
        mdi-lock-open-outline
      </v-icon>
      <input v-model="password" type="password">
    </div>
    <div class="forget mt-2">
      <nuxt-link to="refresh">
        <a>Забыли пароль?</a>
      </nuxt-link>
    </div>
    <nuxt-link to="/">
      <v-btn
        :disabled="false"
        :class="{'active-btn': true}"
        depressed
        width="100%"
        height="60px"
        class="btn keyboard__btn mt-5"
        color="#E3EDF7"
      >
        Войти
      </v-btn>
    </nuxt-link>
    <transition
      enter-active-class="animated slideInUp"
      leave-active-class="animated slideOutDown"
    >
      <keyboard
        v-if="loginInput"
        v-click-outside="keyboardOutside"
        class="login__keyboard"
        :link="$store.state.register.registerLink"
        @toggleKey="keyboardClick"
        @backspace="backspace"
      />
    </transition>
  </div>
</template>

<script>
import keyboard from '../../components/keyboard'
import phoneInput from '../../components/phoneInput'
require('vue2-animate/dist/vue2-animate.min.css')

export default {
  components: {
    keyboard,
    phoneInput
  },
  layout: 'auth',
  data: () => ({
    loginInput: false,
    formClick: false,
    login: '',
    password: ''
  }),
  mounted () {
    this.loginInput = true
  },
  methods: {
    keyboardClick (digit) {
      this.login += digit
    },

    backspace () {
      this.login = this.login.slice(0, -1)
    },

    keyboardOutside () {
      setTimeout(() => {
        if (!this.formClick) { this.loginInput = false }
      }, 20)
    },

    phoneClick () {
      this.formClick = true
      this.loginInput = true
      setTimeout(() => {
        this.formClick = false
      }, 50)
    }
  }
}
</script>

<style lang="sass" scoped>
.login
  *
    color: #334669 !important
  &__header
    width: 100%
    text-align: center
    color: #334669
    opacity: .6
    &-title
      font-weight: 500
      font-size: 24px
      line-height: 29px
    &-text
      font-size: 18px
      line-height: 22px
      font-weight: normal
  &__keyboard
    position: fixed
    bottom: 0
    left: 0
  &__password-input
    width: 100%
    position: relative
    &-icon
      position: absolute
      font-size: 1.7rem
      left: 70px
      top: 50%
      transform: translateY(-50%)
    input
      width: 100%
      height: 60px
      background: #E3EDF7
      box-shadow: inset -6px -3px 5px rgba(255, 255, 255, 0.750601), inset 3px 6px 6px #C3D7E7, inset 4px 2px 6px #B1C5D5, inset 0px 2px 4px #C8D4E2
      border-radius: 20px
      padding: 20px 30px 20px 110px

.active-btn
  box-shadow: -11px -11px 20px rgba(255, 255, 255, 0.272044), -8px -40px 22px rgba(246, 251, 255, 0.384288), -8px 0px 8px rgba(244, 248, 251, 0.50254), 19px 21px 50px rgba(176, 195, 210, 0.727846) !important
  border-radius: 20px !important
  opacity: 1 !important

.forget
  width: 100%
  text-align: right
  font-size: 14px
  line-height: 17px
</style>
