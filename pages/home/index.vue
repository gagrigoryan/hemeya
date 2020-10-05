<template>
  <section class="main">
    <div class="search my-5 px-6">
      <v-icon class="search__icon pl-6" color="#8A8B8D">
        mdi-magnify
      </v-icon>
      <input type="search" placeholder="Поиск ищет все...">
    </div>
    <nuxt-child />
  </section>
</template>

<script>
export default {
  name: 'Index',
  layout: 'main'
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
  position: relative
  &__icon
    position: absolute
    top: 50%
    left: 10px
    transform: translateY(-45%)
    font-size: 30px
  input
    width: 100%
    height: 100%
    background: #E3EDF7
    box-shadow: inset -6px -3px 5px rgba(255, 255, 255, 0.750601), inset 3px 6px 6px #C3D7E7, inset 4px 2px 6px #B1C5D5, inset 0px 2px 4px #C8D4E2
    border-radius: 10px
    padding: 10px 35px
    font-size: 12px
    line-height: 24px
    color: #8A8B8D
</style>
