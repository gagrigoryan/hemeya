<template>
  <div class="publications pb-16">
    <v-row>
      <v-col
        v-for="(post, index) in posts"
        :key="index"
        :cols="rowView ? '12' : '6'"
      >
        <keep-alive>
          <v-lazy>
            <post-card :small="!rowView" :post="post" />
          </v-lazy>
        </keep-alive>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import postCard from '../../../../components/postCard'

export default {
  name: 'Favorites',
  scrollToTop: false,
  components: {
    postCard
  },
  computed: {
    rowView () {
      return this.$store.getters['homePage/getRowView']
    },

    posts () {
      return this.$store.getters['publications/getPosts']
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
