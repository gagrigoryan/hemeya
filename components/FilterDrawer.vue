<template>
  <v-navigation-drawer
    :value="drawer"
    class="filter-drawer pa-7"
    fixed
    right
    color="#E4EFF9"
    width="80%"
    @input="changeDrawer"
  >
    <div class="filter-drawer__header">
      <p>Фильтры</p>
    </div>
    <div class="filter-drawer__content">
      <slot />
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'FilterDrawer',
  data: () => ({
  }),
  computed: {
    drawer () {
      return this.$store.state.filterDrawer
    }
  },
  methods: {
    changeDrawer (e) {
      this.$store.dispatch('ToggleFilterDrawer', e)
    }
  }
}
</script>

<style lang="sass" scoped>
.filter-drawer
  z-index: 1000
  font-family: "Roboto", sans-serif
  &__header
    width: 100%
    font-size: 16px
    text-align: center
</style>
