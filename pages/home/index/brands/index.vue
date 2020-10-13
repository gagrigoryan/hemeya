<template>
  <div class="brand px-6 pt-5">
    <post-filter />
    <div class="brand__header d-flex align-center justify-space-between">
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
          Бренды
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
    <div class="brand__content mt-6">
      <brand-page />
    </div>
  </div>
</template>

<script>
import BrandPage from '../../../../components/brand/BrandPage'
const PostFilter = () => import('../../../../components/PostFilter')

export default {
  name: 'Index',
  components: {
    PostFilter,
    BrandPage
  },
  computed: {
  },
  methods: {
    openFilter () {
      this.$store.dispatch('ToggleFilterDrawer', true)
    }
  }
}
</script>

<style lang="sass" scoped>
.brand
  font-family: "Roboto", sans-serif
  font-size: 16px
  &__content
    margin-bottom: 100px
</style>
