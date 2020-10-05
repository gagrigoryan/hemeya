<template>
  <div class="tutorials">
    <Preloader v-show="loader" :opacity="1" />
    <div class="screen__logo">
      <img src="~assets/img/logo.png">
    </div>
    <VueSlickCarousel
      v-if="tutorials.length"
      ref="carousel"
      v-bind="slickOptions"
      class="tutorials__carousel"
      @beforeChange="beforeChangeSlide"
    >
      <div
        v-for="tutorial in tutorials"
        :key="tutorial._id"
        class="tutorials__carousel-item"
      >
        <v-img
          :src="require('~/assets/img/' + tutorial.img)"
          class="tutorials__carousel-item-img"
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
      </div>
    </VueSlickCarousel>
    <v-card class="tutorials__card px-5 py-8">
      <v-scroll-x-reverse-transition>
        <v-card-title v-if="cardContentToggle" class="tutorials__card-title mb-4">
          {{ cardTitle }}
        </v-card-title>
      </v-scroll-x-reverse-transition>
      <v-scroll-x-reverse-transition>
        <v-card-text v-if="cardContentToggle" class="tutorials__card-text">
          {{ cardText }}
        </v-card-text>
      </v-scroll-x-reverse-transition>

      <v-btn
        fab
        icon
        class="tutorials__card-btn"
        small
        @click="nextSlide"
      >
        <v-icon color="#6E81A0">
          mdi-chevron-right
        </v-icon>
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import Preloader from '../components/Preloader'

export default {
  components: {
    Preloader
  },
  data: () => ({
    slickOptions: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      arrows: false,
      lazyLoad: 'ondemand'
    },
    currentSlide: 0,
    cardContentToggle: true,
    loader: true
  }),
  computed: {
    tutorials () {
      return this.$store.getters['tutorials/getTutorials']
    },
    cardTitle () {
      return this.tutorials.length ? this.tutorials[this.currentSlide].title : ''
    },
    cardText () {
      return this.tutorials.length ? this.tutorials[this.currentSlide].text : ''
    }
  },
  created () {
    this.$store.dispatch('tutorials/loadTutorials')
  },
  mounted () {
    setTimeout(() => {
      this.loader = false
    }, 650)
  },
  methods: {
    nextSlide () {
      this.$refs.carousel.next()
    },

    beforeChangeSlide (oldSlideIndex, newSlideIndex) {
      // eslint-disable-next-line no-console
      if (oldSlideIndex === this.tutorials.length - 1 && newSlideIndex === 0) {
        this.$router.push('/auth')
        return
      }
      this.cardContentToggle = !this.cardContentToggle
      this.currentSlide = newSlideIndex
      setTimeout(() => {
        this.cardContentToggle = !this.cardContentToggle
      }, 400)
    }
  }
}
</script>

<style lang="sass" scoped>
.tutorials
  width: 100%
  height: 100vh
  overflow: hidden
  position: relative
  &__carousel
    width: 100%
    height: 80vh
    &-item
      width: 100%
      height: 80vh
      background-repeat: no-repeat
      outline: none !important
      &-img
        width: 100% !important
        height: 100% !important
  &__card
    width: 100%
    height: 30vh
    border-radius: 24px 24px 0 0
    transform: translateY(-10vh)
    background: #E4F0FA
    box-shadow: 25px 28px 66px rgba(176, 195, 210, 0.727846)
    position: absolute
    top: 80vh
    &-title
      font-weight: 500
      font-size: 22px
      padding: 0
      transition: all .3s ease
      color: #2E476E
    &-text
      line-height: 150%
      font-size: 16px
      padding: 0
      width: 85%
      transition: all .3s ease
      color: rgba(46, 71, 110, 0.62)
    &-btn
      position: absolute
      top: 50%
      right: 1rem
      transform: translateY(-50%)
      background-color: #E6EEF8 !important
      box-shadow: -7px -7px 12px rgba(255, 255, 255, 0.0155704), -13px -7px 15px rgba(246, 251, 255, 0.741505), -8px 5px 12px rgba(244, 248, 251, 0.345662), 2px 9px 30px rgba(170, 187, 201, 0.795345)
</style>

<style lang="sass">
.tutorials
  position: relative
  &__carousel
    .slick-dots
      position: fixed
      z-index: 4
      bottom: 3%
      left: 50%
      transform: translateX(-50%)
      padding: 0 !important
      li
        width: 65px !important
        height: 3px !important
        margin-right: 2.9%
        button
          &:before
            content: ''
            width: 65px !important
            height: 3px !important
            background: rgba(110, 129, 160, 1)
            display: block
</style>
