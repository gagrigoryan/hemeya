<template>
  <div class="profile">
    <v-card
      class="profile__fon"
    >
      <v-img
        width="100%"
        height="65vh"
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
        <div class="profile__user">
          <div class="profile__user-avatar">
            <v-avatar class="mt-3" height="100" width="100">
              <v-img :src="require('~/assets/img/users/user3.png')">
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
            </v-avatar>
          </div>

          <v-card
            class="profile__user-info ma-6 pb-7"
          >
            <h1>Антон Павлов</h1>
            <p>@hublot_13</p>
            <div class="profile__user-info-data d-flex justify-space-around">
              <div>
                <div>173</div>
                Подписчиков
              </div>
              <div>
                <div>1437</div>
                Подписок
              </div>
              <div>
                <div>879</div>
                Публикаций
              </div>
            </div>
          </v-card>
        </div>
      </v-img>
    </v-card>
    <v-card color="#E4F0FA" height="100vh" class="profile__card rounded-t-xl">
      <v-card-title>Publish information</v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Index',
  layout: 'main'
}
</script>

<style lang="sass" scoped>
.profile
  background: #495B7B
  &__card
    transform: translateY(-8vh)
  &__user
    width: 100%
    height: 100%
    margin-top: 110px
    text-align: center
    &-info
      background: rgba(228, 240, 250, 0.7)
      border-radius: 24px
</style>
