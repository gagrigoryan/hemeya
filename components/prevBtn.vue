<template>
  <v-btn class="btn prev-btn" fab icon small @click="prevClick">
    <v-icon color="#6E81A0">
      mdi-chevron-left
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'PrevBtn',
  methods: {
    prevClick () {
      return this.$router.go(-1)
    }
  }
}
</script>

<style lang="sass" scoped>
.prev-btn
  box-shadow: -7px -7px 12px rgba(255, 255, 255, 0.0155704), -13px -7px 15px rgba(246, 251, 255, 0.741505), -8px 5px 12px rgba(244, 248, 251, 0.345662), 2px 9px 30px rgba(170, 187, 201, 0.795345) !important
</style>
