<template>
  <div class="password">
    <h3>Сброс пароля</h3>
    <div class="password mt-8">
      <label for="password">Пароль*</label>
      <input
        id="password"
        v-model="password"
        class="my-2"
        type="password"
        name="password"
      >
    </div>
    <div class="passwordRepeat mt-5">
      <label for="passwordRepeat">Повторите пароль*</label>
      <input
        id="passwordRepeat"
        v-model="passwordRepeat"
        class="my-2"
        type="password"
        name="passwordRepeat"
      >
    </div>
    <main-btn
      class="mt-10"
      @click="reset"
    >
      Сбросить пароль
    </main-btn>
    <m-dialog :open.sync="dialog" persistent>
      <div class="dialog my-10">
        <h5>Готово</h5>
        <p class="mt-3">
          Вы восстановили аккаунт и успешно изменили пароль.
        </p>
      </div>
    </m-dialog>
  </div>
</template>

<script>
import MainBtn from '../../components/MainBtn'
const dialog = () => import('../../components/dialog')

export default {
  name: 'Password',
  layout: 'auth',
  components: {
    'm-dialog': dialog,
    MainBtn
  },
  data: () => ({
    password: null,
    passwordRepeat: null,
    dialog: false
  }),
  methods: {
    reset () {
      this.dialog = true
      setTimeout(() => {
        this.$router.push('/home')
      }, 2000)
    }
  }
}
</script>

<style lang="sass" scoped>
.password
  color: $mainBlue
  opacity: .6
  h3
    text-align: center

.dialog
  text-align: center
  h5
    font-weight: 500
    font-size: 22px
</style>
