<template>
  <div class="notice d-flex justify-space-between">
    <div class="notice__wrapper d-flex">
      <div class="notice__img mr-2">
        <v-avatar
          size="30px"
        >
          <v-img
            :src="require(`~/assets/img/users/${item.authorImg}`)"
            width="30"
            height="30"
          />
        </v-avatar>
      </div>
      <div class="notice__info mr-2">
        <h5>@{{ item.author }}</h5>
        <p>25 мин.</p>
      </div>
      <div class="notice__action mr-2">
        <span>{{ item.action }}</span> <br>
        <span v-if="item.postName">{{ item.postName }}</span>
        <div v-if="ask" class="notice__ask-btn text-right">
          Ответить
        </div>
      </div>
    </div>
    <div v-if="item.postImg" class="notice__post-img">
      <v-img
        :src="require(`@/assets/img/fons/${ item.postImg }`)"
        width="60"
        height="60"
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
  </div>
</template>

<script>
export default {
  name: 'Notice',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    item: {
      type: Object
    },
    ask: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="sass" scoped>
.notice
  font-size: 14px
  position: relative
  &__info
    p
      font-family: Roboto, sans-serif
      font-style: normal
      font-weight: normal
      font-size: 10px
      line-height: 12px
      color: #767676
  &__action
    font-size: 14px
    color: #000
  &__ask-btn
    color: #334669
</style>
