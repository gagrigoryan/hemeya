<template>
  <div class="search">
    <v-icon size="25" class="search__icon" color="#8A8B8D">
      mdi-magnify
    </v-icon>
    <input
      v-model="content"
      type="search"
      :placeholder="placeholder"
      @input="changeValue"
    >
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'SearchFiled',
  props: {
    placeholder: {
      type: String,
      default: 'Поиск ищет все...'
    },
    value: String
  },
  data () {
    return {
      content: this.value
    }
  },
  methods: {
    changeValue (e) {
      this.$emit('input', this.content)
    }
  }
}
</script>

<style lang="sass" scoped>
.search
  position: relative
  &__icon
    position: absolute
    top: 50%
    left: 5%
    transform: translateY(-50%)
    font-size: 30px
  input
    width: 100%
    height: 100% !important
    padding: 0 15% !important
    background: #E3EDF7
    box-shadow: inset -6px -3px 5px rgba(255, 255, 255, 0.750601), inset 3px 6px 6px #C3D7E7, inset 4px 2px 6px #B1C5D5, inset 0px 2px 4px #C8D4E2
    border-radius: 10px
    font-size: 14px
    line-height: 24px
    color: #8A8B8D
</style>
