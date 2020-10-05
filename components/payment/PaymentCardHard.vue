<template>
  <v-card
    class="card pa-4"
    width="100%"
    min-height="75"
    color="#E8F3FB"
    v-bind="$attrs"
    :class="{'selected': selected}"
    flat
    @click="$emit('click')"
  >
    <div v-if="message" class="card__message">
      {{ message }}
    </div>
    <div v-else class="card__number ml-2">
      {{ number }}
    </div>
    <div class="card__img">
      <v-img
        :src="require(`~/assets/img/${ logo }`)"
        contain
        position="center"
        class=""
      >
        <template v-if="logo" v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular indeterminate color="blue lighten-2" />
          </v-row>
        </template>
      </v-img>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'PaymentCardHard',
  props: {
    logo: {
      type: String,
      default: ''
    },
    number: {
      type: String,
      default: '**** **** ****'
    },
    message: {
      type: String,
      default: null
    },
    selected: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="sass" scoped>
.card
  box-shadow: -6px -3px 5px rgba(255, 255, 255, 0.750601), 3px 6px 6px #C3D7E7, 4px 2px 6px #B1C5D5, 0px 2px 4px #C8D4E2 !important
  border-radius: 20px !important
  &__img
    overflow: hidden
    position: absolute
    bottom: 0
    right: 10px
  &__number
    font-family: Mulish, sans-serif
    font-style: normal
    font-weight: bold
    font-size: 20px
    line-height: 21px
    color: #334669

.selected
  box-shadow: inset -6px -3px 5px rgba(255, 255, 255, 0.750601), inset 3px 6px 6px #C3D7E7, inset 4px 2px 6px #B1C5D5, inset 0px 2px 4px #C8D4E2 !important
</style>
