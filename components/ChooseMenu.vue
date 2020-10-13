<template>
  <v-menu
    offset-y
    class="menu"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="menu__btn pl-3 pr-1"
        v-bind="attrs"
        :width="width"
        v-on="on"
      >
        <div class="menu__btn-text">
          {{ value }}
          <v-icon color="#6E81A0">
            mdi-menu-down
          </v-icon>
        </div>
      </v-btn>
    </template>
    <v-list color="#E3EDF7">
      <v-list-item
        v-for="(theme, index) in themes"
        :key="index"
        @click="$emit('input', theme)"
      >
        {{ theme }}
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
/* eslint-disable */
export default {
  name: 'ChooseBtn',
  props: {
    themes: {
      type: Array
    },
    value: {
      type: String
    },
    width: {
      type: String,
      default: '100%'
    }
  },
  data: () => ({

  })
}
</script>

<style lang="sass" scoped>
.menu
  &__btn
    background: linear-gradient(135deg, #F4FFFF 0%, #DCE7E8 100%)
    box-shadow: -1px 1px 2px rgba(197, 207, 207, 0.2), 1px -1px 2px rgba(197, 207, 207, 0.2), -1px -1px 2px rgba(255, 255, 255, 0.9), 1px 1px 3px rgba(197, 207, 207, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(197, 207, 207, 0.5)
    border-radius: 20px
    font-family: Lato, sans-serif
    font-style: normal
    font-weight: normal
    font-size: 14px
    line-height: 24px
    color: #6E81A0
    text-transform: unset
    &-text
      width: 6.5rem
      overflow: hidden
      text-overflow: ellipsis
</style>
