<template>
  <v-card
    class="editCard pa-6"
    flat
  >
    <div class="input">
      <input v-model="text" class="pa-4" type="text">
      <v-btn
        class="input__btn"
        fab
        icon
        width="25"
        height="25"
        @click="addItem"
      >
        +
      </v-btn>
    </div>
    <v-row>
      <v-col
        v-for="(item, index) in value"
        :key="index"
        cols="4"
      >
        <div class="item pl-4 pr-2">
          {{ item }}
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'EditCard',
  // eslint-disable-next-line vue/require-prop-types
  props: ['value'],
  data: () => ({
    text: null
  }),
  methods: {
    addItem () {
      if (this.text) {
        const newArray = this.value
        newArray.push(this.text)
        this.$emit('input', newArray)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.editCard
  background: rgba(110, 129, 160, 0.1)
  border-radius: 17px
  input
    background: #E3EDF7
    box-shadow: inset -6px -3px 5px rgba(255, 255, 255, 0.750601), inset 3px 6px 6px #C3D7E7, inset 4px 2px 6px #B1C5D5, inset 0px 2px 4px #C8D4E2
    border-radius: 2px !important
    min-height: 30px !important
    height: 36px !important
    font-family: Lato, sans-serif
    font-style: normal
    font-weight: normal
    font-size: 12px
    line-height: 24px
    color: #8A8B8D

.input
  position: relative
  &__btn
    position: absolute
    top: 50%
    transform: translateY(-50%)
    right: 5px

.item
  background: #334669
  border-radius: 5px
  font-size: 12px
  color: #E4F0FA
  height: 20px
  text-overflow: ellipsis
  overflow: hidden
</style>
