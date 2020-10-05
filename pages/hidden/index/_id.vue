<template>
  <div class="hidden-post">
    <post-card-big :post="post" />
  </div>
</template>

<script>
import PostCardBig from '../../../components/PostCardBig'

export default {
  name: 'Id',
  layout: 'main',
  components: {
    PostCardBig
  },
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  data: () => ({
    post: {
      authorNick: 'hubolt_13',
      author: 'Антон Павлов',
      text: 'Взгляды и убеждения гения кажутся безумными, но часто именно они  ближе всего к непостижимой для болшинства истине.',
      img: 'auth.png'
    }
  })
}
</script>

<style lang="sass" scoped>

</style>
