<template>
  <div class="email">
    <h4 class="text-center email__title">
      Для проверочного кода укажите ваш электронный адрес?
    </h4>
    <div class="email mt-5">
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
    <div class="license mt-5">
      <div class="checkbox">
        <input id="license" v-model="license" type="checkbox">
        <label class="check-label" for="license"><p>Подтверждаю, что согласен с <a href="#">Пользовательским соглашением</a></p></label>
      </div>
    </div>
    <div class="button mt-11">
      <main-btn
        @click="dialog = true"
      >
        Далее
      </main-btn>
    </div>
    <m-dialog :open.sync="dialog" persistent="true">
      <div class="dialog mt-12 mb-6">
        <h4 class="dialog__title">
          На вашу почту отправлено<br> письмо с проверочным кодом.
        </h4>
        <v-btn to="verify" class="dialog__btn mt-7" tile>
          Продолжить
        </v-btn>
      </div>
    </m-dialog>
  </div>
</template>

<script>
import dialog from '../../../components/dialog'
import MainBtn from '../../../components/MainBtn'

export default {
  name: 'Email',
  components: {
    'm-dialog': dialog,
    MainBtn
  },
  data: () => ({
    email: null,
    license: false,
    dialog: false
  })
}
</script>

<style lang="sass" scoped>
.email
  color: #334669 !important
  font-size: 16px
  h4
    font-size: 18px
    opacity: .6

.checkbox
  label
    p
      font-size: 12px
      color: #000
      opacity: .6
      a
        color: inherit
        text-decoration: underline !important
        line-height: 20px !important

.dialog
  width: 100%
  &__title
    font-family: Lato, sans-serif
    font-style: normal
    font-weight: normal
    font-size: 18px
    color: #334669
    text-align: center
  &__btn
    margin-left: 50%
    transform: translateX(-50%)
    text-transform: capitalize
    background: #334669 !important
    border-radius: 5px
    width: 150px
    height: 30px
    font-family: Roboto, sans-serif
    font-size: 14px
    color: #fff
</style>
