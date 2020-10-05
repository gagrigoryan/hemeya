<template>
  <div class="fons">
    <div class="fons__title mb-2">
      Выберите фоны:
    </div>
    <div class="fons__wrapper">
      <v-row>
        <v-col
          v-for="fon in fons"
          :key="fon.id"
          cols="6"
        >
          <v-lazy
            :options="{
              threshold: .5
            }"
            min-height="153"
            transition="fade-transition"
          >
            <v-card class="fons__wrapper-item">
              <v-img
                :src="require('~/assets/img/fons/' + fon.img)"
                class="fons__wrapper-item-img"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular indeterminate color="blue lighten-2" />
                  </v-row>
                </template>
              </v-img>
              <!--              <div class="fons__wrapper-item-check">-->
              <!--                <font-awesome-icon class="fons__wrapper-item-check-icon mb-1 ml-1" :icon="['fas', 'check']" />-->
              <!--              </div>-->
              <div class="checkbox fons__wrapper-item-check">
                <input
                  :id="fon.id"
                  v-model="checkedFons"
                  class="fons__wrapper-item-check"
                  type="checkbox"
                  :value="fon.id"
                >
                <label :for="fon.id" class="check-label" />
              </div>
            </v-card>
          </v-lazy>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data: () => ({
    checkedFons: []
  }),
  computed: {
    fons () {
      return this.$store.getters['onboarding/getFons']
    }
  },
  layout: 'onboarding'
}
</script>

<style lang="sass" scoped>
.fons
  &__wrapper
    &-item
      background-color: #bddbf3
      border-radius: 17px
      position: relative
      &-check
        position: absolute
        top: 8px
        right: 8px

        &-icon
          color: #6E81A0
          font-size: 15px
  &__title
    font-family: Lato, sans-serif
    font-weight: bold
    font-size: 24px
    color: #334669
</style>
