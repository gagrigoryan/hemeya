<template>
  <div
    class="preloader"
    :style="{'opacity': opacity}"
  >
    <v-progress-circular
      indeterminate
      color="#334669"
      size="50"
      width="3"
    />
  </div>
</template>

<script>
export default {
  name: 'Preloader',
  props: {
    opacity: {
      type: Number,
      default: 0.9
    }
  }
}
</script>

<style lang="sass" scoped>
.preloader
  width: 100%
  height: 100%
  max-height: 100vh
  position: absolute
  top: 0
  left: 0
  z-index: 999
  background: #E4EFF9
  display: flex
  justify-content: center
  align-items: center
</style>
