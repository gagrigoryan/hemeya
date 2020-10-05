<template>
  <div class="login pt-3">
    <h3>Твори и мысли красиво!</h3>
    <p class="mt-1">
      Авторизируйтесь, чтобы продолжить
    </p>
    <div class="email">
      <label for="email">Адрес эл. почты *</label>
      <input
        id="email"
        v-model="email"
        class="my-2"
        type="email"
        name="email"
        placeholder="hemeya@gmail.com"
      >
    </div>
    <div class="password">
      <label for="password">Пароль*</label>
      <input
        id="password"
        v-model="password"
        class="my-2"
        type="password"
        name="password"
      >
    </div>
    <nuxt-link to="reset" tag="a">
      Забыли пароль?
    </nuxt-link>
    <nuxt-link to="/home">
      <main-btn class="btn login__btn mt-10">
        Войти
      </main-btn>
    </nuxt-link>
  </div>
</template>

<script>
import MainBtn from '../../components/MainBtn'

export default {
  components: {
    MainBtn
  },
  layout: 'auth',
  data: () => ({
    email: null,
    password: null
  }),
  mounted () {
  },
  methods: {

  }
}
</script>

<style lang="sass" scoped>
.login
  color: $mainBlue
  opacity: .6
  font-size: 18px
  h3
    font-size: 24px
  h3, p
    text-align: center
  a
    color: #000
    display: block
    text-align: right
    font-size: 14px
    margin-left: auto
    margin-top: 14px

</style>
