<template>
  <v-btn
    class="btn"
    :width="'icon' in $attrs ? '' : '100%'"
    :min-height="'icon' in $attrs ? '' : 60"
    v-bind="$attrs"
    @click="$emit('click')"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'MainBtn',
  mounted () {
  }
}
</script>

<style lang="sass" scoped>
.btn
  background: #e8f3fb !important
  box-shadow: -11px -11px 20px rgba(255, 255, 255, 0.272044), -8px -40px 22px rgba(246, 251, 255, 0.384288), -8px 0px 8px rgba(244, 248, 251, 0.50254), 19px 21px 50px rgba(176, 195, 210, 0.727846)
  border-radius: 45px
  text-transform: unset
  font-weight: 500
  font-size: 18px !important
  line-height: 22px !important
  text-align: center
  color: #334669
</style>
