<template>
  <section class="support py-5 px-6">
    <h4>Служба поддержки</h4>
    <div class="choose__theme mt-6">
      <p class="py-0 my-2">
        Выберите тему:
      </p>
      <choose-menu v-model="chooseTheme" width="120px" :themes="themes" />
    </div>
    <div class="text mt-7">
      <textarea v-model="text" class="pa-3" />
    </div>
    <div class="btn px-11 mt-15">
      <primary-btn class="" :disabled="!text" @click="dialog = true">
        Отправить
      </primary-btn>
    </div>

    <m-dialog
      :open.sync="dialog"
      :persistent="true"
    >
      <div class="dialog__content">
        <p>Сообщение было отправлено!</p>
      </div>
    </m-dialog>
  </section>
</template>

<script>
import ChooseMenu from '../../components/ChooseMenu'
import PrimaryBtn from '../../components/PrimaryBtn'
import dialog from '../../components/dialog'

export default {
  name: 'Index',
  layout: 'main',
  components: {
    ChooseMenu,
    PrimaryBtn,
    'm-dialog': dialog
  },
  data: () => ({
    themes: [
      '1 Тема', '2 тема'
    ],
    chooseTheme: 'Тема',
    text: null,
    dialog: false
  })
}
</script>

<style lang="sass" scoped>
.support
  margin-top: 100px
  width: 100%
  overflow: hidden
  font-family: Roboto, sans-serif
  h4
    font-style: normal
    font-weight: bold
    font-size: 16px
    line-height: 19px

.text
  width: 100%
  textarea
    width: 100%
    height: 180px
    outline: none
    color: #6E81A0
    //resize: none

.dialog__content
  width: 100%
  height: 150px
  color: #334669
  font-size: 18px
  display: flex
  justify-content: center
  align-items: center
</style>
