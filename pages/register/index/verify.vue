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
  </div>
</template>

<script>
export default {
  name: 'Verify',
  middleware ({ store, redirect }) {
    if (!store.getters['register/getRegisterPhone'].length) {
      return redirect('/register')
    }
  },
  computed: {
    verifyCode () {
      return this.$store.getters['register/getVerifyCode']
    }
  },
  mounted () {
    this.$store.dispatch('register/changeRegLink', '/onboarding')
  },
  methods: {
    clickDigit (digit) {
      this.$store.dispatch('register/addCodeDigit', digit.toString())
    },

    clickBack () {
      this.$store.dispatch('register/removeCodeDigit')
    }
  }
}
</script>

<style lang="sass" scoped>
.verify
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
</style>
