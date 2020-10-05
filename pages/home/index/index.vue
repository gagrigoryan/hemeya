<template>
  <div class="main">
    <post-filter />
    <div class="respondents mt-2">
      <div class="d-flex justify-space-between align-center px-6">
        <div class="">
          <h3>Респонденты</h3>
        </div>
        <v-btn
          class=""
          icon
          @click="openFilter"
        >
          <v-icon color="#6E81A0">
            mdi-tune
          </v-icon>
        </v-btn>
      </div>
      <div class="respondents__carousel my-6 pl-6">
        <VueSlickCarousel
          v-bind="slickOptions"
        >
          <v-card
            v-for="(item, index) in respondentItems"
            :key="index"
            class="respondents__carousel-item mr-5"
            color="transparent"
            elevation="0"
            :to="item.url"
          >
            <v-img
              :src="require(`~/assets/img/respondents/${item.img}`)"
              class="respondents__carousel-item-img"
              height="190"
              width="130"
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
              <div class="respondents__carousel-item-title">
                <h3>{{ item.title }}</h3>
              </div>
            </v-img>
          </v-card>
        </VueSlickCarousel>
      </div>
    </div>
    <v-card v-touch="swipe" color="#E4F0FA" min-height="40vh" class="home__card px-6">
      <div class="home__card-header d-flex py-5 px-2">
        <div class="home__card-header-links d-flex justify-space-between align-center">
          <nuxt-link
            to="/home"
            tag="a"
            :class="{'activeTab': $route.path === '/home'}"
          >
            Публикации
          </nuxt-link>
          <nuxt-link
            to="favorites"
            append
            tag="a"
            :class="{'activeTab': $route.path === '/home/favorites'}"
          >
            Избранное
          </nuxt-link>
          <v-btn
            icon
            fab
            width="35"
            height="35"
            @click="changeRowView"
          >
            <v-icon color="#6E81A0">
              mdi-{{ rowView ? 'apps' : 'view-day' }}
            </v-icon>
          </v-btn>
        </div>
      </div>
      <nuxt-child />
    </v-card>
  </div>
</template>

<script>
const PostFilter = () => import('../../../components/PostFilter')

export default {
  name: 'Index',
  components: {
    PostFilter
  },
  data: () => ({
    respondentItems: [
      {
        title: 'Персоны',
        img: 'person.png',
        url: '/home/persons'
      },
      {
        title: 'Бренды',
        img: 'brand.png',
        url: '/home/brands'
      },
      {
        title: 'Художники',
        img: 'favorite.jpg',
        url: '/home/painter'
      }
    ],
    pubItems: [
      {
        title: 'Публикации',
        url: 'publications'
      },
      {
        title: 'Избранное',
        url: 'favorites'
      }
    ],
    tab: null,
    slickOptions: {
      dots: false,
      autoplay: false,
      arrows: false,
      infinite: false,
      variableWidth: true
    }
  }),
  computed: {
    rowView () {
      return this.$store.getters['homePage/getRowView']
    }
  },
  methods: {
    swipe () {
      // eslint-disable-next-line no-console
      console.log('ok')
    },

    changeRowView () {
      this.$store.dispatch('homePage/ChangeRowView', !this.rowView)
    },

    openFilter () {
      this.$store.dispatch('ToggleFilterDrawer', true)
    }
  }
}
</script>

<style lang="sass" scoped>
.main
  margin: 0 !important
  position: relative

.respondents
  font-family: Roboto, sans-serif
  font-style: normal
  font-weight: normal
  font-size: 16px
  line-height: 19px
  color: #334669
  &__carousel
    &-item
      border-radius: 24px
      outline: none !important
      border: none !important
      &-title
        position: absolute
        bottom: 0
        left: 0
        width: 100%
        height: 50px
        background: rgba(228, 240, 250, 0.7)
        display: flex
        justify-content: center
        align-items: center
        h3
          font-family: Roboto, sans-serif
          font-style: normal
          font-weight: normal
          font-size: 16px
          line-height: 19px
          color: #495B7B

.home__card
  box-shadow: 25px 28px 66px rgba(176, 195, 210, 0.727846) !important
  border-top-left-radius: 24px !important
  border-top-right-radius: 24px !important
  &-header
    &-links
      width: 100%
      a
        font-weight: bold
        font-size: 16px
        line-height: 24px
        color: #6E81A0
        transition: all .2s
        display: block

.activeTab
  color: #334669 !important
</style>
