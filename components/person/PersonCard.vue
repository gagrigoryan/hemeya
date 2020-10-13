<template>
  <v-card
    class="card"
    flat
    color="#495B7B"
    dark
  >
    <v-img
      :src="require('~/assets/img/users/' + item.img)"
      class="card-img"
      height="118px"
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
    <h3 class="card-title mt-2">
      {{ item.name }}
    </h3>
    <v-card-subtitle class="card-subtitle py-0">
      {{ item.profession }}
    </v-card-subtitle>
    <div class="card-info d-flex align-center justify-space-around my-1">
      <div class="card-info-comments ">
        <font-awesome-icon :icon="['fas', 'quote-left']" />
        {{ item.commentCount }}
      </div>
      <div class="card-info-followers">
        <font-awesome-icon :icon="['fas', 'user-friends']" />
        {{ item.followersCount }}
      </div>
    </div>
    <div class="px-4" style="width: 100%;">
      <v-btn
        class="mb-5 mt-2 card-info-btn"
        tile
        color="#334669"
        height="20px"
        width="100%"
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
  name: 'PersonCard',
  props: {
    item: {
      type: Object,
      default: null
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
  border-radius: 27px !important
  position: relative
  text-align: center
  &-title
    text-align: center !important
    font-weight: 500
    font-size: 14px
    color: #E3EFF9
  &-info
    text-align: center !important
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
