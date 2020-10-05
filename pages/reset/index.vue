<template>
  <div class="reset">
    <h3>Восстановление пароля</h3>
    <p class="mt-1">
      Для восстановление пароля укажите адрес электронной почты.
    </p>
    <div class="email mt-10">
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
    <main-btn
      append
      class="login__btn mt-10"
      to="password"
    >
      Восстановить
    </main-btn>
  </div>
</template>

<script>
import MainBtn from '../../components/MainBtn'

export default {
  name: 'Index',
  components: {
    MainBtn
  },
  layout: 'auth',
  data: () => ({
    email: null
  })
}
</script>

<style lang="sass" scoped>
.reset
  color: $mainBlue
  opacity: .6
  font-size: 18px
  h3, p
    text-align: center

</style>
