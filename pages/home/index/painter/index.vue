<template>
  <div class="painter px-6 pt-5">
    <post-filter />
    <div class="painter__header d-flex align-center justify-space-between">
      <div class="d-flex align-center">
        <v-btn
          fab
          icon
          width="30"
          height="30"
          @click="$router.push('/home')"
        >
          <v-icon color="#6E81A0">
            mdi-chevron-left
          </v-icon>
        </v-btn>
        <p class="my-0 ml-2">
          Художники
        </p>
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
    <div class="painter__content mt-6">
      <v-row>
        <v-col
          v-for="(post, index) in posts"
          :key="index"
          cols="12"
        >
          <post-card :to="`/painter/${index}`" :post="post" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import postCard from '../../../../components/postCard'
const PostFilter = () => import('../../../../components/PostFilter')

export default {
  name: 'Index',
  components: {
    PostFilter,
    postCard
  },
  computed: {
    posts () {
      return this.$store.getters['painters/getPosts']
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
.painter
  font-family: "Roboto", sans-serif
  font-size: 16px
</style>
