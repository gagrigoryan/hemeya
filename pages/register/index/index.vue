<template>
  <div class="register">
    <h4 class="text-center register__title">
      Создай свой аккаунт!
    </h4>
    <div class="name mt-5">
      <label for="name">Имя Фамилия*</label>
      <input
        id="name"
        v-model="name"
        class="my-2"
        type="text"
        name="name"
        placeholder="Антон Павлов"
      >
    </div>
    <div class="birthday mt-5">
      <v-menu
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <label for="birthday">Дата рождения*</label>
          <input
            id="birthday"
            v-model="date"
            readonly
            class="my-2"
            type="text"
            name="name"
            placeholder="Формат: 30.12.1990 "
            v-bind="attrs"
            v-on="on"
          >
        </template>
        <v-date-picker v-model="date" no-title />
      </v-menu>
    </div>
    <div class="sex mt-5">
      <label for="">Пол*</label>
      <div class="radio d-flex mt-2">
        <div class="mr-8">
          <input id="female" v-model="sex" value="female" type="radio">
          <label for="female" class="radio-label">Женщина</label>
        </div>
        <div class="">
          <input id="male" v-model="sex" value="male" type="radio">
          <label for="male" class="radio-label">Мужчина</label>
        </div>
      </div>
    </div>
    <div class="password mt-5">
      <label for="name">Пароль*</label>
      <input
        id="password"
        v-model="password"
        class="my-2"
        type="password"
        name="password"
        placeholder="Введите пароль"
      >
    </div>
    <div class="password_repeat mt-5">
      <label for="name">Повторите пароль*</label>
      <input
        id="password_repeat"
        v-model="passwordRepeat"
        class="my-2"
        type="password"
        name="password_repeat"
        placeholder="Введите пароль"
      >
    </div>
    <div class="button mt-11">
      <main-btn
        append
        to="email"
      >
        Далее
      </main-btn>
    </div>
  </div>
</template>

<script>
import MainBtn from '../../../components/MainBtn'

export default {
  name: 'Index',
  components: {
    MainBtn
  },
  data: () => ({
    name: null,
    date: null,
    sex: 'female',
    password: null,
    passwordRepeat: null
  }),
  computed: {
    // registerPhone () {
    //   return this.$store.getters['register/getRegisterPhone']
    // },
    //
    // messenger () {
    //   return this.$store.getters['register/getMessenger']
    // },
    //
    // useTerms: {
    //   get () {
    //     return this.$store.state.register.useTerms
    //   },
    //
    //   set (value) {
    //     this.$store.dispatch('register/changeUseTerms', value)
    //   }
    // }
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
  &__title
    font-size: 18px
    opacity: .6

label
  color: #334669
  opacity: .6
</style>
