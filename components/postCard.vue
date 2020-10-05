<template>
  <div class="">
    <v-card
      width="100%"
      height="200"
      class="post-card"
      :to="to"
      flat
    >
      <v-img
        :src="require(`@/assets/img/${post.img}`)"
        width="100%"
        height="100%"
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
        <v-card
          v-if="!small"
          class="post-card__info pt-3 px-6 pb-7"
          width="100%"
          height="100px"
        >
          <div class="post-card__info-header d-flex">
            <h4 class="mr-10">
              {{ post.author }}
            </h4>
            <span class="post-card__info-header-nick">@{{ post.authorNick }}</span>
          </div>
          <p>{{ post.text.substr(0, 80) }}...</p>
        </v-card>
        <v-card
          v-else
          width="100%"
          height="100px"
          class="post-card__info pt-2 pl-2 pr-1 pb-4"
        >
          <h4 class="my-0 py-0">
            {{ post.author }}
          </h4>
          <div class="small__nick">
            @{{ post.authorNick }}
          </div>
          <p class="small__text">
            {{ post.text.substr(0, 40) }}...
          </p>
        </v-card>
      </v-img>
    </v-card>
    <div v-if="!small" class="bottom d-flex justify-space-around mt-1">
      <div class="bottom__likes">
        <v-btn icon @click="like = !like">
          <v-icon v-if="!like">
            mdi-heart-outline
          </v-icon>
          <v-icon v-else color="#2E476E">
            mdi-heart
          </v-icon>
        </v-btn>
        {{ post.likes | countFilter }}
      </div>
      <div class="bottom__views">
        <v-btn icon>
          <v-icon>mdi-eye-outline</v-icon>
        </v-btn>
        {{ post.views | countFilter }}
      </div>
      <div class="bottom__comments">
        <v-btn icon>
          <v-icon>mdi-comment-processing-outline</v-icon>
        </v-btn>
        {{ post.comments | countFilter }}
      </div>
      <div class="bottom__dots">
        <v-btn icon>
          <v-icon>mdi-dots-horizontal</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  filters: {
    countFilter (value) {
      if (value < 1000) {
        return value
      } else if (value >= 1000 && value < 10000) {
        return (value / 1000).toFixed(1).toString() + 'K'
      }
      return (value / 1000).toFixed(0).toString() + 'K'
    }
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    post: Object,
    to: {
      type: String,
      default: ''
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    like: false
  })
}
</script>

<style lang="sass" scoped>
.post-card
  border-radius: 24px !important
  position: relative
  &__info
    color: #000
    position: absolute
    left: 0
    bottom: 0
    border-radius: 24px !important
    background: rgba(228, 240, 250, 0.7)
    &-header
      h4
        font-size: 18px
    p
      font-style: normal
      font-weight: normal
      font-size: 14px

.bottom
  color: #6E81A0 !important

.small
  &__text
    font-family: Lato, sans-serif
    font-style: normal
    font-weight: normal
    font-size: 14px
    line-height: 14px
    color: #000000
    display: block
  &__nick
    color: #334669
    font-size: 14px

span
  color: #334669
  font-size: 14px
</style>
