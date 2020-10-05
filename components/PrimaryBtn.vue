<template>
  <v-btn
    class="primary__btn"
    :color="color"
    :width="width"
    :height="height"
    v-bind="$attrs"
    @click="$emit('click')"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'PrimaryBtn',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '40px'
    },
    color: {
      type: String,
      default: '#334669'
    }
  }
}
</script>

<style lang="sass" scoped>
.primary__btn
  border-radius: 5px
  text-transform: unset
  font-family: Roboto, sans-serif
  font-style: normal
  font-weight: normal
  font-size: 16px
  line-height: 19px
  color: #FFFFFF
</style>
