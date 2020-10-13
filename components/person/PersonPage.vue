<template>
  <div class="person__page">
    <Preloader v-if="loader" />
    <v-row v-else>
      <v-col
        v-for="(item, index) in users"
        :key="index"
        cols="6"
      >
        <v-lazy
          :options="{
            threshold: .5
          }"
          min-height="153"
          transition="fade-transition"
        >
          <person-card :item="item" />
        </v-lazy>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Preloader from '../Preloader'
import PersonCard from './PersonCard'

export default {
  name: 'PersonPage',
  components: {
    PersonCard,
    Preloader
  },
  data: () => ({
    loader: true
  }),
  computed: {
    users () {
      return this.$store.getters['onboarding/getUsers']
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
.person__page
  width: 100%
  min-height: 40vh
  position: relative
</style>
