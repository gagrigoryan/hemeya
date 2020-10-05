<template>
  <div class="verify">
    <div class="verify__code mt-15">
      <div class="verify__code-item">
        <div v-if="verifyCode">
          {{ verifyCode[0] }}
        </div>
      </div>
      <div class="verify__code-item">
        <div v-if="verifyCode">
          {{ verifyCode[1] }}
        </div>
      </div>
      <div class="verify__code-item">
        <div v-if="verifyCode">
          {{ verifyCode[2] }}
        </div>
      </div>
      <div class="verify__code-item">
        <div v-if="verifyCode">
          {{ verifyCode[3] }}
        </div>
      </div>
    </div>
    <div class="verify__repeat mt-5">
      <v-progress-circular
        v-if="load"
        width="3"
        style="margin-left: 50%; transform: translateX(-50%)"
        color="primary"
        indeterminate
      />
      <div v-if="!attempt" class="verify__repeat-first">
        <span>Обычно сообщение приходит в течение минуты.</span>
        <span style="text-decoration: underline" @click="repeatCode">Нажмите, если не получили проверочный код.</span>
      </div>
      <div v-if="attempt && !load && timer" class="verify__repeat-first">
        <span>Код действителен еще {{ timer }} секунд.</span>
      </div>
      <div v-if="attempt && !load && !timer" class="d-flex" @click="repeatCode">
        <span class="mr-1">Время истекло.</span>
        <span style="text-decoration: underline">Повторно отправить проверочный код.</span>
      </div>
    </div>
    <transition
      enter-active-class="animated slideInUp"
      leave-active-class="animated slideOutDown"
    >
      <keyboard
        v-if="keyboardInput"
        class="verify__keyboard"
        :link="$store.state.register.registerLink"
        @toggleKey="clickDigit"
        @backspace="clickBack"
      >
        <main-btn
          :disabled="!activeBtn"
          :class="{'active-btn': activeBtn}"
          depressed
          class="btn keyboard__btn"
          @click="openDialog"
        >
          Далее
        </main-btn>
      </keyboard>
    </transition>
    <m-dialog :open.sync="dialog" :persistent="true">
      <div class="dialog">
        <v-progress-circular
          v-if="dialogLoad"
          color="primary"
          indeterminate
          class="dialog__load"
          size="50"
          width="3"
        />
        <transition
          name="fade"
        >
          <div v-if="!dialogLoad" class="dialog__content text-center">
            <font-awesome-icon class="dialog__content-icon mb-5" :icon="['far', 'check-circle']" />
            <p>Вы успешно зарегистрировались!</p>
          </div>
        </transition>
      </div>
    </m-dialog>
  </div>
</template>

<script>
import MainBtn from '../../../components/MainBtn'
import dialog from '../../../components/dialog'
import keyboard from '../../../components/keyboard'
require('vue2-animate/dist/vue2-animate.min.css')

export default {
  name: 'Verify',
  components: {
    keyboard,
    MainBtn,
    'm-dialog': dialog
  },
  data: () => ({
    keyboardInput: false,
    attempt: 0,
    load: false,
    timer: null,
    interval: null,
    dialog: false,
    dialogLoad: false
  }),
  computed: {
    verifyCode () {
      return this.$store.getters['register/getVerifyCode']
    },
    activeBtn () {
      return this.verifyCode.length === 4
    }
  },
  watch: {
    timer (val, oldVal) {
      if (val === 0) {
        this.pauseTime()
        this.timer = null
      }
    }
  },
  mounted () {
    this.keyboardInput = true
    this.$store.dispatch('register/changeRegLink', '/onboarding')
  },
  methods: {
    clickDigit (digit) {
      this.$store.dispatch('register/addCodeDigit', digit.toString())
    },

    clickBack () {
      this.$store.dispatch('register/removeCodeDigit')
    },

    async repeatCode () {
      this.attempt++
      this.load = true
      await setTimeout(() => {
        this.load = false
      }, 1800)
      await setTimeout(() => {
        this.runTime()
      }, 500)
    },

    async runTime () {
      this.timer = 180
      this.interval = await setInterval(() => {
        this.timer--
      }, 1000)
    },

    pauseTime () {
      clearInterval(this.interval)
    },

    openDialog () {
      this.dialog = true
      this.dialogLoad = true
      const delay = (time) => {
        return new Promise((resolve, reject) => setTimeout(resolve, time))
      }
      delay(2500).then(() => {
        this.dialogLoad = false
        return delay(2000)
      }).then(() => {
        this.$router.push('/onboarding')
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.verify
  width: 100%
  height: 100vh
  &__keyboard
    position: fixed
    left: 0
    bottom: 0
    &__btn
      color: #2E476E
      background: #e8f3fb !important
      opacity: .4
      transition: all .3s ease-in !important
  &__code
    display: grid
    grid-template-columns: repeat(4, 1fr)
    &-item
      display: flex
      justify-content: center
      align-items: center
      text-align: center
      width: 60px
      height: 60px
      background: #E3EDF7
      box-shadow: inset -6px -3px 5px rgba(255, 255, 255, 0.750601), inset 3px 6px 6px #C3D7E7, inset 4px 2px 6px #B1C5D5, inset 0px 2px 4px #C8D4E2
      border-radius: 18px
      font-size: 24px
      line-height: 29px
      color: #9BB9D3
  &__repeat
    span
      font-size: 12px
      line-height: 14px
      opacity: .6
      color: #000
      display: block
.active-btn
  box-shadow: -11px -11px 20px rgba(255, 255, 255, 0.272044), -8px -40px 22px rgba(246, 251, 255, 0.384288), -8px 0px 8px rgba(244, 248, 251, 0.50254), 19px 21px 50px rgba(176, 195, 210, 0.727846) !important
  border-radius: 20px !important
  opacity: 1 !important

.dialog
  width: 100%
  height: 200px
  position: relative
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  &__load
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
  &__content
    color: #334669
    &-icon
      font-size: 94px
    p
      font-size: 14px
</style>
