<template>
  <section class="main">
    <div class="search px-6 my-7">
      <search-filed v-model="search" />
    </div>
    <nuxt-child />
  </section>
</template>

<script>
import SearchFiled from '../../components/SearchFiled'

export default {
  name: 'Index',
  components: {
    SearchFiled
  },
  layout: 'main',
  data: () => ({
    search: null
  })
}
</script>

<style lang="sass" scoped>
.main
  margin-top: 100px
  width: 100%
  overflow: hidden

.search
  width: 100%
  height: 40px

</style>
