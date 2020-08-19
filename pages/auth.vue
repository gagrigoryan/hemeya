<template>
  <div class="auth">
    <div class="screen__logo">
      <img src="~assets/img/logo.png">
    </div>
    <div class="auth__img">
      <v-img
        :src="require('@/assets/img/' + bgImage)"
        :lazy-src="require('@/assets/img/' + bgImage)"
        class="auth__img-item"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular indeterminate color="blue lighten-2" />
          </v-row>
        </template>
      </v-img>
    </div>

    <div class="auth__content">
      <v-card class="auth__content-card px-6">
        <div class="auth__content-card-btn">
          <nuxt-link exact to="/register">
            <v-btn class="auth__content-card-btn-item btn">
              Регистрация
            </v-btn>
          </nuxt-link>
          <div class="auth__content-card-btn-text d-flex align-center my-2">
            <v-divider class="mr-4" />
            или
            <v-divider class="ml-4" />
          </div>
          <nuxt-link to="/login">
            <v-btn class="auth__content-card-btn-item btn">
              Вход
            </v-btn>
          </nuxt-link>
        </div>

        <div class="auth__content-card-social mt-8">
          <v-btn class="auth__content-card-social-btn">
            <font-awesome-icon class="auth__content-card-social-btn-gp" :icon="['fab', 'google-plus-g']" />
          </v-btn>
          <v-btn class="auth__content-card-social-btn">
            <font-awesome-icon class="auth__content-card-social-btn-fb" :icon="['fab', 'facebook-f']" />
          </v-btn>
          <v-btn class="auth__content-card-social-btn">
            <font-awesome-icon class="auth__content-card-social-btn-vk" :icon="['fab', 'vk']" />
          </v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Auth',
  data: () => ({
    bgImage: 'auth.png'
  })
}
</script>

<style lang="sass" scoped>
.auth
  width: 100%
  font-size: 18px
  .screen__logo
    top: 20% !important
  &__img
    height: 65vh
    width: 100%
    &-item
      width: 100%
      height: 100% !important
  &__content
    &-card
      width: 100%
      height: 45vh
      border-radius: 24px 24px 0 0
      background: #E4F0FA
      box-shadow: 25px 28px 66px rgba(176, 195, 210, 0.727846)
      position: absolute
      top: 55vh
      &-btn
        margin-top: 16%
        &-text
          color: #80858D !important
          hr
            border-color: rgba(110, 129, 160, 0.235905)
            border-bottom-width: 1px
        &-item
          width: 100%
          height: 60px !important
          background: #E8F3FB
          color: #2E476E
      &-social
        width: 100%
        display: grid
        grid-template-columns: 1fr 1fr 1fr
        grid-gap: 20px
        &-btn
          background: #F0F0F3
          box-shadow: -1px -1px 3px #FFFFFF, 1.5px 1.5px 3px rgba(174, 174, 192, 0.4)
          border-radius: 5px
          height: 60px !important
          font-size: 2rem
          &-gp
            color: #D6492E
          &-fb
            color: #3B579D
          &-vk
            color: #5181B8
</style>
