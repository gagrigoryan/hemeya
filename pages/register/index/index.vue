<template>
  <div class="">
    <div class="register__text text-center">
      Выберите мессенджер, чтобы получить проверочный код:
    </div>
    <div class="register__messengers mt-3 mb-2">
      <v-btn
        color="#1AAFFA"
        fab
        :icon="messenger !== 'telegram'"
        :dark="messenger === 'telegram'"
        class="register__messengers-item mx-2"
        @click="clickMessenger('telegram')"
      >
        <font-awesome-icon
          class="register__messengers-item-tg"
          :icon="['fab', 'telegram-plane']"
        />
      </v-btn>
      <v-btn
        color="#25D366"
        :icon="messenger !== 'whatsapp'"
        :dark="messenger === 'whatsapp'"
        fab
        class="register__messengers-item mx-2"
        @click="clickMessenger('whatsapp')"
      >
        <font-awesome-icon class="register__messengers-item-wh" :icon="['fab', 'whatsapp']" />
      </v-btn>
      <v-btn
        color="#7555DF"
        fab
        :icon="messenger !== 'viber'"
        :dark="messenger === 'viber'"
        class="register__messengers-item mx-2"
        @click="clickMessenger('viber')"
      >
        <font-awesome-icon class="register__messengers-item-vb" :icon="['fab', 'viber']" />
      </v-btn>
    </div>
    <phone-input :phone="registerPhone" />
    <div class="register__checkbox d-flex align-center">
      <v-checkbox v-model="useTerms" class="register__checkbox-radio" />
      <div class="register__checkbox-text">
        Подтверждаю, что согласен с <span>Пользовательским соглашением</span>
      </div>
    </div>
  </div>
</template>

<script>
import phoneInput from '../../../components/phoneInput'

export default {
  name: 'Index',
  components: {
    phoneInput
  },
  data: () => ({
  }),
  computed: {
    registerPhone () {
      return this.$store.getters['register/getRegisterPhone']
    },

    messenger () {
      return this.$store.getters['register/getMessenger']
    },

    useTerms: {
      get () {
        return this.$store.state.register.useTerms
      },

      set (value) {
        this.$store.dispatch('register/changeUseTerms', value)
      }
    }
  },
  mounted () {
  },
  methods: {
    clickDigit (digit) {
      this.$store.dispatch('register/addDigit', digit.toString())
    },

    clickBack () {
      this.$store.dispatch('register/removeDigit')
    },

    clickMessenger (messenger) {
      this.$store.dispatch('register/setMessenger', messenger)
    }
  }
}
</script>

<style lang="sass" scoped>
.register
  color: #334669 !important
  font-size: 16px
  &__messengers
    text-align: center
    &-item
      font-size: 2rem
  &__checkbox
    width: 100%
    justify-content: center
    &-text
      font-size: 10px
      line-height: 11px
      color: #000
      opacity: .6
      span
        text-decoration: underline
</style>
