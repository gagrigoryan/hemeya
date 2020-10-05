<template>
  <div class="hidden__posts mt-10">
    <Preloader v-if="loader" />
    <v-row v-else>
      <v-col
        v-for="(post, index) in posts"
        :key="index"
        cols="12"
      >
        <v-lazy>
          <post-card :to="`/hidden/${ index }`" :post="post" />
        </v-lazy>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import postCard from '../../../components/postCard'
const Preloader = () => import('../../../components/Preloader')

export default {
  name: 'Index',
  layout: 'main',
  components: {
    postCard,
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
  }
}
</script>

<style lang="sass" scoped>
.hidden__posts
    position: relative
    min-height: 400px

</style>
