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
      </v-img>
      <div class="profile__avatar">
        <v-avatar class="mt-3 " height="100" width="100">
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

        <v-btn
          rounded
          fab
          width="30"
          height="30"
          class="camera__btn"
        >
          <v-icon color="#6E81A0">
            mdi-camera-outline
          </v-icon>
        </v-btn>
      </div>

      <v-card
        class="profile__info rounded-xl py-5 px-5"
      >
        <div class="d-flex justify-center">
          <h2>{{ user.name }}</h2>
          <v-icon
            color="#6E81A0"
            class="ml-3"
          >
            mdi-pencil-outline
          </v-icon>
        </div>

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
    </v-card>
    <v-card
      color="#E4F0FA"
      min-height="50vh"
      class="profile__card rounded-t-xl pt-5 pb-7 px-6"
    >
      <div class="profile__card-header d-flex justify-space-between align-center">
        <div
          class="profile__card-header-link"
          :class="{'active-link': activeLink === 0}"
          @click="activeLink = 0"
        >
          Публикации
        </div>
        <div
          class="profile__card-header-link"
          :class="{'active-link': activeLink === 1}"
          @click="activeLink = 1"
        >
          Избранное
        </div>
        <div
          class="profile__card-header-link"
          :class="{'active-link': activeLink === 2}"
          @click="activeLink = 2"
        >
          История
        </div>
        <v-btn
          icon
          fab
          width="35"
          height="35"
          @click="rowView = !rowView"
        >
          <v-icon color="#6E81A0">
            mdi-{{ rowView ? 'apps' : 'view-day' }}
          </v-icon>
        </v-btn>
      </div>
      <div class="profile__card-posts">
        <v-row v-if="activeLink === 0">
          <v-col
            v-for="(post, index) in posts"
            :key="index"
            :cols="rowView ? 12 : 6"
          >
            <post-card
              :small="!rowView"
              :post="post"
            />
          </v-col>
        </v-row>
        <v-row v-else-if="activeLink === 1">
          <v-col
            v-for="(post, index) in favourites"
            :key="index"
            :cols="rowView ? 12 : 6"
          >
            <post-card
              :small="!rowView"
              :post="post"
            />
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col
            v-for="(post, index) in stories"
            :key="index"
            :cols="rowView ? 12 : 6"
          >
            <post-card
              :small="!rowView"
              :post="post"
            />
          </v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<script>
import postCard from '../../components/postCard'
const ExpandedCard = () => import('../../components/ExpandedCard')
require('vue2-animate/dist/vue2-animate.min.css')

export default {
  name: 'Index',
  layout: 'main',
  components: {
    ExpandedCard,
    postCard
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
    fonFlag: false,
    activeLink: 0,
    rowView: true
  }),
  computed: {
    posts () {
      return this.$store.getters['publications/getPosts']
    },
    favourites () {
      return this.$store.getters['publications/getPosts']
    },
    stories () {
      return this.$store.getters['publications/getPosts']
    }
  }
}
</script>

<style lang="sass" scoped>
.profile
  background: #495B7B
  position: relative
  &__fon
    position: relative
  &__card
    &-header
      color: #6E81A0
      &-link
        font-weight: 700
        font-size: 16px
        transition: all .2s ease
  &__avatar
    text-align: center
    position: absolute
    top: 110px
    left: 50%
    transform: translate(-50%)
  &__info
    text-align: center
    position: absolute
    top: 240px
    left: 50%
    transform: translate(-50%)
    background: rgba(228, 240, 250, 0.7)
    width: 90%
    color: $mainBlue

.camera__btn
  position: absolute
  right: -8px
  bottom: 8px

.active-link
  color: #334669 !important
</style>
