<template>
  <section class="hidden px-6 py-7">
    <div class="hidden__header">
      <div>
        <p class="py-0 my-0">
          Скрытые
        </p>
      </div>
    </div>
    <div class="mt-11">
      <nuxt-child />
    </div>
  </section>
</template>

<script>

export default {
  name: 'Index',
  layout: 'main',
  components: {
  },
  data: () => ({
    loader: true
  }),
  computed: {
    posts () {
      return this.$store.getters['publications/getPosts']
    }
  },
  mounted () {
    setTimeout(() => {
      this.loader = false
    }, 1200)
  }
}
</script>

<style lang="sass" scoped>
.hidden
  margin-top: 100px
  margin-bottom: 100px
  width: 100%
  overflow: hidden
  font-family: "Roboto", sans-serif
  &__posts
    position: relative
    min-height: 400px

</style>
