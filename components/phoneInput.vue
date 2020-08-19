<template>
  <div class="phone">
    <div
      class="phone-input"
    >
      <div class="phone-code">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <div style="width: 30px">
              <v-img
                v-bind="attrs"
                :src="`https://www.countryflags.io/${cntName}/flat/64.png`"
                class="flag mr-2"
                v-on="on"
              />
            </div>
          </template>

          <v-virtual-scroll
            :items="codes"
            :item-height="50"
            width="110"
            height="300"
            style="background: #E4F0FA"
          >
            <template v-slot="{ item }">
              <v-list-item
                :class="{'active_flag': item.name === cntName}"
                :dark="item.name === cntName"
                @click="cntClick(item.name, item.code)"
              >
                <v-img
                  :src="`https://www.countryflags.io/${item.name}/flat/64.png`"
                  class="flag mr-2"
                />
                <v-list-item-title>+{{ item.code }}</v-list-item-title>
              </v-list-item>
            </template>
          </v-virtual-scroll>
        </v-menu>
      </div>
      <div class="">
        + {{ cntCode }} {{ phone }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhoneInput',
  props: ['phone'],
  data: () => ({
    codes: require('~/static/codes.json'),
    cntName: 'RU',
    cntCode: '7'
  }),
  computed: {
  },
  mounted () {
    this.codes.sort((a, b) => (parseInt(a.code) > parseInt(b.code)) ? 1 : ((parseInt(b.code) > parseInt(a.code)) ? -1 : 0))
  },
  methods: {
    cntClick (name, code) {
      this.cntName = name
      this.cntCode = code
    }
  }
}
</script>

<style lang="sass" scoped>
.phone
  width: 100%
  position: relative
  color: #334669 !important
  font-size: 16px
  &-code
    width: 40px !important
  &-input
    position: relative
    width: 100%
    height: 60px
    z-index: 0
    background: #E3EDF7
    box-shadow: inset -6px -3px 5px rgba(255, 255, 255, 0.750601), inset 3px 6px 6px #C3D7E7, inset 4px 2px 6px #B1C5D5, inset 0px 2px 4px #C8D4E2
    border-radius: 20px
    outline: none
    color: #334669
    display: flex
    padding-left: 70px
    align-items: center

.flag
  width: 30px
  height: 25px

.active_flag
  background-color: #1AAFFA
</style>
