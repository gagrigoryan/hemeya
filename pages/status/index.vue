<template>
  <section class="status px-6 py-7">
    <status-filter @hasFiltered="addFiltered" />
    <div class="status__header d-flex justify-space-between align-center">
      <div>
        <p class="py-0 my-0">
          Просмотренные
        </p>
      </div>
      <div>
        <v-btn
          fab
          icon
          width="40"
          height="40"
          @click="openFilter"
        >
          <v-icon color="#6E81A0" size="20">
            mdi-tune
          </v-icon>
        </v-btn>
      </div>
    </div>
    <div class="status__posts mt-10">
      <Preloader v-if="loader" />
      <v-row v-else>
        <v-col
          v-for="(post, index) in posts"
          :key="index"
          cols="12"
        >
          <v-lazy>
            <post-card :post="post" />
          </v-lazy>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
import postCard from '../../components/postCard'
const StatusFilter = () => import('../../components/status/StatusFilter')
const Preloader = () => import('../../components/Preloader')

export default {
  name: 'Index',
  layout: 'main',
  components: {
    postCard,
    StatusFilter,
    Preloader
  },
  data: () => ({
    loader: true
  }),
  computed: {
    posts () {
      return this.$store.getters['publications/getPosts']
    }
  },
  mounted () {
    setTimeout(() => {
      this.loader = false
    }, 1200)
  },
  methods: {
    openFilter () {
      this.$store.dispatch('ToggleFilterDrawer', true)
    },

    async addFiltered () {
      this.loader = true
      await setTimeout(() => {
        this.loader = false
      }, 1300)
    }
  }
}
</script>

<style lang="sass" scoped>
.status
  margin-top: 100px
  margin-bottom: 100px
  width: 100%
  overflow: hidden
  font-family: "Roboto", sans-serif
  &__posts
    position: relative
    min-height: 400px

</style>
