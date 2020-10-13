<template>
  <div class="blog__item">
    <div class="blog__item-header">
      {{ item.title }}
    </div>
    <div class="blog__item-text mt-3">
      <p v-if="hide">
        {{ item.text.substr(0, 165) }}...
      </p>
      <p v-else>
        {{ item.text }}
      </p>
    </div>
    <div class="blog__item-toggle" @click="hide = !hide">
      <div v-if="hide" class="blog__item-toggle-item ml-auto">
        Открыть
        <v-icon>mdi-chevron-down</v-icon>
      </div>
      <div v-else class="blog__item-toggle-item ml-auto">
        Закрыть
        <v-icon>mdi-chevron-up</v-icon>
      </div>
    </div>
    <div class="blog__item-slider mt-2">
      <blog-item-slider :slides="item.slides" :date="item.time" />
    </div>
  </div>
</template>

<script>
import BlogItemSlider from './BlogItemSlider'

export default {
  name: 'BlogItem',
  components: {
    BlogItemSlider
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    hide: true
  })
}
</script>

<style lang="sass" scoped>
.blog__item
  color: $mainBlue
  font-family: Lato, sans-serif
  font-weight: 500
  &-header
    font-size: 16px
  &-text
    p
      font-weight: 300 !important
      font-size: 16px
      line-height: 130%
      text-align: justify
      color: #1C1C1C
  &-toggle
    width: 100%
    &-item
      width: max-content
</style>
