<template>
  <v-card
    class="fon"
    :width="width"
    flat
    tile
  >
    <v-img
      :src="require(`~/assets/img/${ img }`)"
      width="100%"
      height="100%"
      style="border-radius: 18px"
    >
      <template v-if="img" v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular indeterminate color="blue lighten-2" />
        </v-row>
      </template>
    </v-img>
    <div v-if="price" class="price pa-2 d-flex justify-space-between align-center">
      <div class="price__sum">
        {{ price }}$
      </div>
      <div class="">
        <v-btn
          class="price__btn"
          color="#334669"
          width="60"
          height="17"
          @click="$emit('buyFon', img)"
        >
          Купить
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'FonCard',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    img: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: null
    }
  }
}
</script>

<style lang="sass" scoped>
.fon
  border-radius: 18px !important
  position: relative

.price
  position: absolute
  left: 0
  bottom: 0
  width: 100%
  background: rgba(228, 240, 250, 0.7)
  font-size: 12px
  &__btn
    background: #334669
    border-radius: 5px
    font-size: 12px
    line-height: 14px
    color: #FFFFFF !important
    text-transform: unset
</style>
