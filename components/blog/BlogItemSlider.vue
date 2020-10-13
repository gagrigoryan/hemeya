<template>
  <v-card
    class="blog__item__slider rounded-xl"
    flat
    light
    color="#334669"
    width="100%"
    height="235"
  >
    <div class="logo">
      <v-img width="66" height="18" :src="require('~/assets/img/hemeya.svg')" />
    </div>
    <VueSlickCarousel
      ref="carousel"
      v-bind="slickOptions"
      class="carousel"
    >
      <v-img
        v-for="(slide, index) in slides"
        :key="index"
        :src="require(`~/assets/img/${ slide }`)"
        width="100%"
        height="200px"
      />
    </VueSlickCarousel>
    <div class="blog__item__slider-date ml-3 mt-1">
      {{ date }}
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'BlogItemSlider',
  props: {
    slides: {
      type: Array,
      default: null
    },
    date: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    slickOptions: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplay: false,
      arrows: false,
      lazyLoad: 'ondemand'
    }
  })
}
</script>

<style lang="sass" scoped>
.blog__item__slider
  position: relative
  overflow: hidden !important
  color: #E3EFF9 !important
  font-size: 14px

.logo
  position: absolute
  top: 10px
  left: 18px
  z-index: 100
</style>

<style lang="sass">
.carousel
  .slick-dots
    transform: translateY(5px)
    li
      button
        &:before
          content: ''
          width: 10px !important
          height: 10px !important
          border-radius: 50%
          background: #E3EFF9
          display: block
</style>
