<template>
  <div class="brand__page">
    <Preloader v-if="loader" />
    <v-row v-else>
      <v-col
        v-for="(item, index) in brands"
        :key="index"
        cols="12"
      >
        <v-lazy
          :options="{
            threshold: .5
          }"
          min-height="153"
          transition="fade-transition"
        >
          <brand-card :item="item" />
        </v-lazy>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Preloader from '../Preloader'
import BrandCard from './brandCard'

export default {
  name: 'BrandPage',
  components: {
    BrandCard,
    Preloader
  },
  data: () => ({
    loader: true
  }),
  computed: {
    brands () {
      return this.$store.getters['brands/getBrands']
    }
  },
  mounted () {
    setTimeout(() => {
      this.loader = false
    }, 1000)
  }
}
</script>

<style lang="sass" scoped>
.brand__page
  width: 100%
  min-height: 40vh
  position: relative
</style>
