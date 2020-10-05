<template>
  <div class="profile">
    <transition
      enter-active-class="animated slideInUp"
      leave-active-class="animated slideOutDown"
    >
      <expanded-card v-if="fonFlag" />
    </transition>
    <v-card
      class="profile__fon"
    >
      <v-img
        width="100%"
        height="65vh"
        :src="user.fon ? require(`~/assets/img/${ user.fon }`) : ''"
        @click="fonFlag = !fonFlag"
      >
        <template v-if="user.fon" v-slot:placeholder>
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
              <v-img :src="require(`~/assets/img/${ user.avatar }`)">
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
            <h1>{{ user.name }}</h1>
            <p>@{{ user.nickname }}</p>
            <div class="profile__user-info-data d-flex justify-space-around">
              <div>
                <div>{{ user.followers }}</div>
                Подписчиков
              </div>
              <div>
                <div>{{ user.follows }}</div>
                Подписок
              </div>
              <div>
                <div>{{ user.publications }}</div>
                Публикаций
              </div>
            </div>
          </v-card>
        </div>
      </v-img>
    </v-card>
    <v-card color="#E4F0FA" min-height="50vh" class="profile__card rounded-t-xl">
      <div class="profile__card-header">
        dcfgd
      </div>
    </v-card>
  </div>
</template>

<script>
const ExpandedCard = () => import('../../components/ExpandedCard')
require('vue2-animate/dist/vue2-animate.min.css')

export default {
  name: 'Index',
  layout: 'main',
  components: {
    ExpandedCard
  },
  data: () => ({
    user: {
      name: 'Антон Павлов',
      nickname: 'hublot_13',
      avatar: 'users/user3.png',
      fon: 'fons/fon0.png',
      followers: 173,
      follows: 1486,
      publications: 879
    },
    fonFlag: false
  })
}
</script>

<style lang="sass" scoped>
.profile
  background: #495B7B
  position: relative
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
