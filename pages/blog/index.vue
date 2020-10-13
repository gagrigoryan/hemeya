<template>
  <section class="blog py-5 px-6">
    <h4>Блог</h4>
    <div class="blog__content mt-5">
      <blog-item
        v-for="item in blogItems"
        :key="item.id"
        :item="item"
        class="mb-6"
      />
    </div>
  </section>
</template>

<script>
import BlogItem from '../../components/blog/BlogItem'

export default {
  name: 'Index',
  layout: 'main',
  components: {
    BlogItem
  },
  computed: {
    blogItems () {
      return this.$store.getters['blog/getBlogItems']
    }
  }
}
</script>

<style lang="sass" scoped>
.blog
  margin-top: 100px
  margin-bottom: 100px
  width: 100%
  overflow: hidden
  h4
    font-size: 18px
</style>
