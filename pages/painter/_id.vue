<template>
  <section class="painter py-5 px-6">
    <v-card
      class="painter__img-card"
      width="100%"
      height="17.5rem"
      flat
    >
      <v-img
        class="painter__img"
        :src="require(`~/assets/img/${ post.img }`)"
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
      </v-img>
    </v-card>
    <div class="painter__header d-flex align-center justify-space-between">
      <div class="painter__header-name mt-2">
        <h4>{{ post.author }}</h4>
      </div>
      <div class="painter__header-nick">
        <p class="my-0">
          @{{ post.authorNick }}
        </p>
      </div>
    </div>
    <div class="painter__text mt-5">
      <p>{{ post.text }}</p>
    </div>
    <div class="bottom d-flex align-center mt-1">
      <div class="bottom__likes mr-13">
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
      <div class="bottom__views mr-13">
        <v-btn icon>
          <v-icon>mdi-eye-outline</v-icon>
        </v-btn>
        {{ post.views | countFilter }}
      </div>
      <div class="bottom__comments mr-13">
        <v-btn icon>
          <v-icon>mdi-comment-processing-outline</v-icon>
        </v-btn>
        {{ post.comments | countFilter }}
      </div>
    </div>

    <div class="painter__fons">
      <h4>Купить фоны художника</h4>
      <v-row class="mt-4">
        <v-col
          cols="3"
        >
          <v-card
            width="100%"
            height="100%"
            class="painter__fons__img"
          >
            <v-img
              :src="require('~/assets/img/painter/paint0.png')"
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
            </v-img>
          </v-card>
        </v-col>
        <v-col
          cols="3"
        >
          <v-card
            width="100%"
            height="100%"
            class="painter__fons__img"
          >
            <v-img
              :src="require('~/assets/img/painter/paint1.png')"
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
            </v-img>
          </v-card>
        </v-col>
        <v-col
          cols="3"
        >
          <v-card
            width="100%"
            height="100%"
            class="painter__fons__img"
          >
            <v-img
              :src="require('~/assets/img/painter/paint2.png')"
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
            </v-img>
          </v-card>
        </v-col>
        <v-col
          cols="3"
        >
          <v-card
            width="100%"
            height="100%"
            class="painter__fons__img"
          >
            <v-img
              :src="require('~/assets/img/painter/paint3.png')"
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
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Id',
  layout: 'main',
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
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
  data: () => ({
    like: false
  }),
  computed: {
    post () {
      return this.$store.getters['painters/getPosts'][this.$route.params.id]
    }
  }
}
</script>

<style lang="sass" scoped>
.painter
  margin-top: 100px
  margin-bottom: 100px
  &__img
    &-card
      border-radius: 25px
  &__header
    font-family: Lato, sans-serif
  &__text
    p
      font-size: 14px
      line-height: 18px
  &__fons
    &-img
      border-radius: 5px
      height: 100% !important

h4
  font-style: normal
  font-weight: bold
  font-size: 18px
</style>
