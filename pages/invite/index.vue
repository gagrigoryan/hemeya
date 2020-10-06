<template>
  <section class="invite py-5 px-6">
    <h4 class="">
      Инвайты
    </h4>
    <v-card
      class="invite__card mt-8"
      width="100%"
      height="15.5rem"
      color="#6E81A0"
      @click="() => {}"
    >
      <div class="invite__card-title">
        Инфографика
      </div>
    </v-card>
    <div class="invite__item mt-9">
      <div class="invite__item-header d-flex align-center justify-space-between">
        <div class="invite__item-header-left">
          <p class="my-0">
            Для респондента:
          </p>
        </div>
        <div class="invite__item-header-right d-flex align-center">
          <p class="my-0">
            Доступно:
          </p>
          <div class="circle">
            5
          </div>
        </div>
      </div>
      <v-row>
        <v-col
          cols="8"
        >
          <primary-btn @click="dialog = true">
            Получить ссылку
          </primary-btn>
        </v-col>
      </v-row>
    </div>
    <div class="invite__item mt-12">
      <div class="invite__item-header d-flex align-center justify-space-between">
        <div class="invite__item-header-left">
          <p class="my-0">
            Для друзей:
          </p>
        </div>
        <div class="invite__item-header-right d-flex align-center">
          <p class="my-0">
            Доступно:
          </p>
          <div class="circle">
            5
          </div>
        </div>
      </div>
      <v-row>
        <v-col
          cols="8"
        >
          <primary-btn @click="dialog = true">
            Получить ссылку
          </primary-btn>
        </v-col>
      </v-row>
    </div>
    <m-dialog
      :open.sync="dialog"
      persistent
    >
      <div class="dialog">
        <div
          class="dialog__link my-5"
          :style="{color: successCopy ? '#0E7E38' : ''}"
        >
          {{ link }}
        </div>
        <v-btn
          class="dialog__btn"
          color="#334669"
          height="30"
          width="100"
          @click="copyLink"
        >
          Скопировать
        </v-btn>
      </div>
    </m-dialog>
  </section>
</template>

<script>
import PrimaryBtn from '../../components/PrimaryBtn'
import dialog from '../../components/dialog'

export default {
  name: 'Index',
  components: {
    PrimaryBtn,
    'm-dialog': dialog
  },
  layout: 'main',
  data: () => ({
    dialog: false,
    link: 'https://www.hemeya.com/post48485785393498734895sads4a5d8sad4as',
    successCopy: false
  }),
  methods: {
    copyLink () {
      navigator.clipboard.writeText(this.link)
        .then(() => {
          this.successCopy = true
        })
    }
  }
}
</script>

<style lang="sass" scoped>
.invite
  margin-top: 100px
  margin-bottom: 100px
  font-family: "Roboto", sans-serif
  &__card
    display: flex
    justify-content: center
    align-items: center
    border-radius: 24px
    color: #E3EFF9
    font-size: 36px
  &__item
    &-header
      font-size: 16px
      &-right
        p
          color: #979797
.circle
  width: 20px
  height: 20px
  border-radius: 50%
  border: 1px solid #6E81A0
  color: #6E81A0
  display: flex
  align-items: center
  justify-content: center
  font-size: 16px
  margin-left: 3px

.dialog
  height: 160px
  width: 100%
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  &__link
    width: 90%
    height: 36px
    line-height: 36px
    font-size: 16px
    padding-left: 7px
    overflow: hidden
    text-overflow: ellipsis
    background: #E3EDF7
    box-shadow: inset -6px -3px 5px rgba(255, 255, 255, 0.750601), inset 3px 6px 6px #C3D7E7, inset 4px 2px 6px #B1C5D5, inset 0px 2px 4px #C8D4E2
    border-radius: 10px
    transition: all .3s ease
  &__btn
    border-radius: 5px
    color: #fff
    text-transform: unset
</style>
