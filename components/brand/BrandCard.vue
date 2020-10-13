<template>
  <v-card
    class="card rounded-xl text-center"
    flat
    color="#495B7B"
    dark
  >
    <v-img
      :src="require('~/assets/img/' + item.img)"
      class="card-img"
      height="80"
      position="center"
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
    <div class="card__content px-2">
      <div class="card-title mt-2">
        {{ item.name }}
      </div>
      <div class="card-text">
        <p>{{ item.text }}</p>
      </div>
      <div class="card-info d-flex justify-center">
        <div class="d-flex align-center ">
          <div class="card-info-comments mr-5">
            <font-awesome-icon :icon="['fas', 'quote-left']" />
            {{ item.commentCount }}
          </div>
          <div class="card-info-followers">
            <font-awesome-icon :icon="['fas', 'user-friends']" />
            {{ item.followersCount }}
          </div>
        </div>
      </div>
      <v-btn
        class="mb-5 mt-2 card-btn"
        tile
        color="#334669"
        height="20px"
        :class="{'subscribe__btn': isSubscribe}"
        @click="subscribe"
      >
        {{ isSubscribe ? 'Отписаться' : '+ Подписаться' }}
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'BrandCard',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    isSubscribe: false
  }),
  methods: {
    subscribe () {
      this.isSubscribe = !this.isSubscribe
    }
  }
}
</script>

<style lang="sass" scoped>
.card
  font-family: Lato, sans-serif
  font-style: normal
  font-weight: 500
  overflow: hidden
  &__content
    width: 100%
  &-title
    font-size: 18px
  &-text
    font-size: 14px
    line-height: 16px
  &-btn
    text-transform: capitalize !important
    border-radius: 5px
    font-family: Roboto, sans-serif
    font-style: normal
    font-weight: normal
    font-size: 12px
    line-height: 14px
    color: #E4F0FA

.subscribe__btn
  background: #E4F0FA !important
  color: #334669 !important
</style>
