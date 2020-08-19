<template>
  <v-bottom-navigation
    fixed
    background-color="#E4F0FA"
    color="#2E476E"
    height="80px"
    class="bottom-nav py-4 px-6"
  >
    <div class="wrapper">
      <button class="bottom-nav__btn">
        <v-icon color="#334669">
          mdi-home-outline
        </v-icon>
      </button>
      <button class="bottom-nav__btn">
        <v-icon color="#334669">
          mdi-book-outline
        </v-icon>
      </button>
      <button class="bottom-nav__btn">
        <v-icon color="#334669">
          mdi-tooltip-plus-outline
        </v-icon>
      </button>
      <button class="bottom-nav__btn">
        <v-icon color="#334669">
          mdi-bell-outline
        </v-icon>
      </button>
      <button style="box-shadow: inset -1px -1px 3px #FFFFFF, inset 1.5px 1.5px 3px rgba(174, 174, 192, 0.4)" class="bottom-nav__btn">
        <v-icon color="#745FF2">
          mdi-account-outline
        </v-icon>
      </button>
    </div>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'MainBottomNavbar'
}
</script>

<style lang="sass" scoped>
.bottom-nav
  &__btn
    background: #F0F0F3 !important
    box-shadow: -1px -1px 3px #FFFFFF, 1.5px 1.5px 2px rgba(174, 174, 192, 0.4)
    border-radius: 5px !important
    width: 40px !important
    height: 40px !important
    outline: none

.wrapper
  display: grid
  grid-template-columns: repeat(5, 1fr)
  grid-gap: 35px
</style>
