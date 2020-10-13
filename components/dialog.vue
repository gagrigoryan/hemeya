<template>
  <v-dialog
    v-model="open"
    max-width="350"
    :persistent="persistent"
    @input="$emit('input', open)"
  >
    <v-card class="dialog">
      <v-btn
        width="40px"
        height="40px"
        class="dialog__close"
        icon
        fab
        @click="$emit('update:open', false)"
      >
        <v-icon color="#6E81A0">
          mdi-close
        </v-icon>
      </v-btn>
      <slot />
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    open: Boolean,
    persistent: Boolean
  }
}
</script>

<style lang="sass" scoped>
.dialog
  background: #E4F0FA
  border-radius: 24px
  padding: 10px 18px
  &__close
    z-index: 5
    position: absolute
    top: 10px
    right: 18px
    background: #E6EEF8
    box-shadow: -7px -7px 12px rgba(255, 255, 255, 0.0155704), -13px -7px 15px rgba(246, 251, 255, 0.741505), -8px 5px 12px rgba(244, 248, 251, 0.345662), 2px 9px 30px rgba(170, 187, 201, 0.795345)
</style>

<style lang="sass">
.v-dialog
  border-radius: 24px
</style>
