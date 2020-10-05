<template>
  <v-card
    class="card rounded-t-xl pa-7"
    width="100%"
    height="75vh"
    color="#E4F0FA"
  >
    <div class="divider mb-4 mx-auto" />
    <div class="card__header">
      <v-row>
        <v-col
          cols="6"
        >
          <div class="checkbox">
            <input id="free" v-model="fonFilter" value="free" type="checkbox">
            <label for="free" class="check-label">Бесплатные</label>
          </div>
        </v-col>
        <v-col
          cols="5"
        >
          <div class="checkbox">
            <input id="paid" v-model="fonFilter" value="paid" type="checkbox">
            <label for="paid" class="check-label">Платные</label>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="6"
        >
          <div class="checkbox">
            <input id="exclusive" v-model="fonFilter" value="exclusive" type="checkbox">
            <label for="exclusive" class="check-label">Эксклюзивные</label>
          </div>
        </v-col>
        <v-col
          cols="5"
        >
          <div class="checkbox">
            <input id="my" v-model="fonFilter" value="my" type="checkbox">
            <label for="my" class="check-label">Свои</label>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="4"
        >
          <p class="mb-2">
            Стиль
          </p>
          <choose-menu v-model="styleChoose" class="" :themes="styleItems" />
        </v-col>
        <v-col
          cols="4"
        >
          <p class="mb-2">
            Тип
          </p>
          <choose-menu v-model="typeChoose" class="" :themes="typeItems" />
        </v-col>
        <v-col
          cols="4"
        >
          <p class="mb-2">
            Тема
          </p>
          <choose-menu v-model="themeChoose" class="" :themes="themeItems" />
        </v-col>
      </v-row>
    </div>
    <div class="card__fons">
      <v-row>
        <v-col
          v-for="(fon, index) in filteredFons"
          :key="index"
          cols="6"
        >
          <fon-card :price="fon.price ? fon.price : null" :img="fon.img" @buyFon="buyFon" />
        </v-col>
      </v-row>
    </div>
    <v-dialog
      v-model="dialog"
      max-width="90%"
      class="dialog"
    >
      <v-card
        width="100%"
        flat
        tile
        class="dialog__card"
      >
        <v-img
          :src="currFonBuy ? require(`~/assets/img/${ currFonBuy }`) : ''"
          width="100%"
          height="100%"
        >
          <template v-if="currFonBuy" v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular indeterminate color="blue lighten-2" />
            </v-row>
          </template>
          <v-card
            class="dialog__bottom px-4 pt-1 pb-6"
          >
            <div class="dialog__bottom-price">
              20$
            </div>
            <v-row>
              <v-col
                cols="6"
              >
                <primary-btn class="btn" @click="$router.push('/payment')">
                  Купить
                </primary-btn>
              </v-col>
              <v-col
                cols="6"
              >
                <primary-btn
                  class="btn"
                  color="#A0A1A3"
                  @click="cancelBuy"
                >
                  Отмена
                </primary-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-img>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import ChooseMenu from './ChooseMenu'
import FonCard from './FonCard'
const PrimaryBtn = () => import('./PrimaryBtn')

export default {
  name: 'ExpandedCard',
  components: {
    ChooseMenu,
    FonCard,
    PrimaryBtn
  },
  data: () => ({
    fonFilter: [],
    styleItems: ['1 стиль', '2 стиль', '3 стиль'],
    styleChoose: 'Стиль',
    typeItems: ['1 тип', '2 тип', '3 тип'],
    typeChoose: 'Тип',
    themeItems: ['Любая', '1 тема', '2 тема', '3 тема'],
    themeChoose: 'Любая',

    freeFons: [
      {
        img: 'fons/fon1.png',
        price: 0
      },
      {
        img: 'fons/fon2.png',
        price: 0
      },
      {
        img: 'fons/fon3.png',
        price: 0
      },
      {
        img: 'fons/fon4.png',
        price: 0
      }
    ],

    paidFons: [
      {
        img: 'fons/fon1.png',
        price: 20
      },
      {
        img: 'fons/fon2.png',
        price: 20
      },
      {
        img: 'fons/fon3.png',
        price: 20
      },
      {
        img: 'fons/fon4.png',
        price: 20
      },
      {
        img: 'fons/fon5.png',
        price: 20
      },
      {
        img: 'fons/fon6.png',
        price: 20
      },
      {
        img: 'fons/fon0.png',
        price: 20
      },
      {
        img: 'fons/fon4.png',
        price: 20
      },
      {
        img: 'fons/fon5.png',
        price: 20
      },
      {
        img: 'fons/fon6.png',
        price: 20
      },
      {
        img: 'fons/fon0.png',
        price: 20
      }
    ],

    dialog: false,
    currFonBuy: ''
  }),
  computed: {
    filteredFons () {
      if (this.fonFilter.includes('paid')) { return this.paidFons }
      return this.freeFons
    }
  },
  methods: {
    buyFon (fon) {
      this.currFonBuy = fon
      this.dialog = true
    },

    cancelBuy () {
      this.currFonBuy = ''
      this.dialog = false
    }
  }
}
</script>

<style lang="sass" scoped>
.card
  position: fixed
  bottom: 0
  left: 0
  z-index: 100

.divider
  width: 120px
  height: 3px
  background: rgba(110, 129, 160, 0.235905)

label, p
  font-family: Lato, sans-serif
  font-style: normal
  font-weight: normal
  font-size: 14px
  line-height: 24px
  color: #6E81A0

.card__fons
  overflow: auto
  height: 40vh
  overflow-x: hidden

.dialog
  margin-left: 5%
  &__card
    border-radius: 24px !important
  &__bottom
    position: absolute
    left: 0
    bottom: 0
    width: 100%
    background: rgba(228, 240, 250, 0.7)
    &-price
      font-family: Lato, sans-serif
      font-style: normal
      font-weight: normal
      font-size: 24px
      color: #000000
</style>

<style lang="sass">
.v-dialog
  border-radius: 24px
</style>
