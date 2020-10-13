<template>
  <section class="feeds py-5 px-6">
    <post-filter />
    <search-filed v-model="search" class="search mb-4" />
    <div class="feeds__header d-flex align-center justify-space-between">
      <div class="d-flex align-center">
        <h4 class="my-0 ml-2">
          Лента
        </h4>
      </div>
      <div>
        <v-btn
          fab
          icon
          width="30"
          height="30"
          @click="openFilter"
        >
          <v-icon color="#6E81A0">
            mdi-tune
          </v-icon>
        </v-btn>
      </div>
    </div>
    <div class="feeds__content mt-6">
      <v-row>
        <v-col
          v-for="post in posts"
          :key="post.id"
          cols="12"
        >
          <post-card
            :post="post"
            :self="post.self"
          />
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
import SearchFiled from '../../components/SearchFiled'
import PostCard from '../../components/feeds/PostCard'
const PostFilter = () => import('../../components/PostFilter')

export default {
  name: 'Index',
  layout: 'main',
  components: {
    SearchFiled,
    PostFilter,
    PostCard
  },
  data: () => ({
    search: null
  }),
  computed: {
    posts () {
      return this.$store.getters['feeds/getPosts']
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
.feeds
  width: 100%
  margin-top: 100px
  margin-bottom: 100px
  overflow: hidden

.search
  width: 100%
  height: 40px
</style>
