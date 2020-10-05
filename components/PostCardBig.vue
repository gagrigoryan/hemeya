<template>
  <div class="">
    <v-card
      class="post-card"
      :width="width"
      :height="height"
      tile
      flat
    >
      <v-img
        :src="post.img ? require(`@/assets/img/${post.img}`) : ''"
        width="100%"
        height="100%"
        style="border-radius: 24px;"
        @click="clickImg"
      >
        <template v-if="post.img" v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular indeterminate color="blue lighten-2" />
          </v-row>
        </template>
      </v-img>
      <v-card
        class="post-card__info"
        width="100%"
        height="150px"
        @click="clickText"
      >
        <div class="post-card__info-text pa-7">
          {{ post.text ? post.text : 'Наберите текст...' }}
        </div>
      </v-card>
      <div class="post-card__author">
        by {{ post.authorNick }}
      </div>
    </v-card>
    <div v-if="!short" class="action mt-7">
      <v-row>
        <v-col
          cols="6"
        >
          <primary-btn class="btn" @click="publish">
            Опубликовать
          </primary-btn>
        </v-col>
        <v-col
          cols="6"
        >
          <primary-btn
            class="btn"
            color="#A0A1A3"
            @click="deleteDialog = true"
          >
            Удалить
          </primary-btn>
        </v-col>
      </v-row>
    </div>
    <m-dialog :open.sync="deleteDialog" persistent>
      <div class="dialog__content px-5 pt-11 pb-2">
        <Preloader v-if="deleteDialogLoader" :opacity=".7" />
        <p class="text-center">
          Вы точно хотите убрать эту публикацию?
        </p>
        <div class="dialog__content-action">
          <v-row>
            <v-col
              cols="6"
            >
              <primary-btn class="btn" @click="deletePost">
                Убрать
              </primary-btn>
            </v-col>
            <v-col
              cols="6"
            >
              <primary-btn
                class="btn"
                color="#A0A1A3"
                @click="deleteDialog = false"
              >
                Отмена
              </primary-btn>
            </v-col>
          </v-row>
        </div>
      </div>
    </m-dialog>
  </div>
</template>

<script>
import PrimaryBtn from './PrimaryBtn'
const dialog = () => import('./dialog')
const Preloader = () => import('./Preloader')

export default {
  name: 'PostCardBig',
  components: {
    PrimaryBtn,
    'm-dialog': dialog,
    Preloader
  },
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '400px'
    },
    // eslint-disable-next-line vue/require-default-prop
    post: {
      type: Object
    },

    short: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    deleteDialog: false,
    deleteDialogLoader: false
  }),
  methods: {
    async deletePost () {
      this.deleteDialogLoader = true
      setTimeout(() => {
        this.deleteDialogLoader = false
      }, 1400)
      await this.$router.push('/hidden')
    },

    publish () {
      this.$router.push('/hidden')
    },

    clickImg () {
      this.$emit('clickImg')
    },

    clickText () {
      this.$emit('clickText')
    }
  }
}
</script>

<style lang="sass" scoped>
.post-card
  border-radius: 24px !important
  position: relative
  font-family: Lato, sans-serif
  &__info
    color: #000
    position: absolute
    left: 0
    bottom: 0
    border-radius: 24px !important
    background: rgba(228, 240, 250, 0.7)
    &-text
      text-overflow: ellipsis !important
      overflow: hidden
      font-style: normal
      font-weight: normal
      font-size: 18px
      line-height: 22px
  &__author
    position: absolute
    right: 10px
    top: 10px
    background: rgba(0, 0, 0, 0.55)
    border-radius: 13px
    font-style: italic
    font-weight: normal
    font-size: 14px
    line-height: 16px
    color: #E3EFF9
    display: flex
    justify-content: center
    align-items: center
    padding: 6px 16px

.btn
  font-size: 11px !important

.dialog__content
  width: 100%
  height: 100%
  color: #334669
  font-size: 18px
  position: relative
</style>
