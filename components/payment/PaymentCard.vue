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
    <v-img
      :src="require(`~/assets/img/${ logo }`)"
      max-height="40"
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
  </v-card>
</template>

<script>
export default {
  name: 'PaymentCard',
  props: {
    logo: {
      type: String,
      default: ''
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
  box-shadow: -11px -11px 20px rgba(255, 255, 255, 0.272044), -8px -40px 22px rgba(246, 251, 255, 0.384288), -8px 0px 8px rgba(244, 248, 251, 0.50254), 19px 21px 50px rgba(176, 195, 210, 0.727846) !important
  border-radius: 20px !important

.selected
  box-shadow: inset -6px -3px 5px rgba(255, 255, 255, 0.750601), inset 3px 6px 6px #C3D7E7, inset 4px 2px 6px #B1C5D5, inset 0px 2px 4px #C8D4E2 !important
</style>
