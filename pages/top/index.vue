<template>
  <section class="top py-5 px-6">
    <post-filter />
    <p class="top__title">
      ТОП
    </p>
    <div class="top__navigation d-flex justify-space-between align-center mt-6">
      <div class="top__navigation-choose">
        <choose-menu v-model="chooseTheme" :themes="themes" />
      </div>
      <div class="top__navigation-icons">
        <v-btn
          fab
          icon
          width="33"
          height="33"
          color="#6E81A0"
          @click="openFilter"
        >
          <v-icon>mdi-tune</v-icon>
        </v-btn>
        <v-btn
          fab
          icon
          width="33"
          height="33"
          color="#6E81A0"
          @click="colCount *= -1"
        >
          <v-icon>
            mdi-{{ colCount > 0 ? 'apps' : 'view-day' }}
          </v-icon>
        </v-btn>
      </div>
    </div>
    <div class="top__content mt-7">
      <v-row>
        <v-col
          v-for="(post, index) in posts"
          :key="index"
          :cols="cols"
        >
          <post-card :small="colCount < 0" :post="post" />
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
import ChooseMenu from '../../components/ChooseMenu'
import postCard from '../../components/postCard'
const PostFilter = () => import('../../components/PostFilter')

export default {
  name: 'Index',
  layout: 'main',
  components: {
    ChooseMenu,
    postCard,
    PostFilter
  },
  data: () => ({
    chooseTheme: 'Публикации',
    themes: ['Публикации', 'Респонденты', 'Пользователи'],
    colCount: 1
  }),
  computed: {
    posts () {
      return this.$store.getters['publications/getPosts']
    },

    cols () {
      return this.colCount > 0 ? 12 : 6
    }
  },
  methods: {
    openFilter () {
      this.$store.dispatch('ToggleFilterDrawer', true)
    }
  }
}
</script>

<style lang="sass" scoped>
.top
  margin-top: 100px
  margin-bottom: 100px
  width: 100%
  overflow: hidden
  font-family: "Roboto", sans-serif
  &__title
    font-size: 16px
    line-height: 19px
    color: $mainBlue
</style>
