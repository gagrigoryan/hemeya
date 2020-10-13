<template>
  <div class="card__wrapper">
    <div class="header d-flex align-center justify-space-between mb-2">
      <div class="">
        <v-avatar size="35" class="mr-1">
          <v-img
            width="35"
            height="35"
            :src="require(`~/assets/img/${ post.authorImg }`)"
          />
        </v-avatar>
        <span>@{{ post.author }}</span>
      </div>
      <div class="">
        <v-btn icon @click="actionDialog = true">
          <v-icon color="#6E81A0">
            mdi-dots-horizontal
          </v-icon>
        </v-btn>
      </div>
    </div>
    <v-card
      class="card rounded-xl"
      flat
      color="#495B7B"
      dark
    >
      <post-card-big
        short
        :post="post"
        height="280"
      />
      <div class="card__actions d-flex justify-space-between align-center px-5 py-2">
        <div class="card__actions-main">
          <v-btn class="mr-5" icon @click="like = !like">
            <v-icon v-if="!like" color="#E4F0FA">
              mdi-heart-outline
            </v-icon>
            <v-icon v-else color="#E4F0FA">
              mdi-heart
            </v-icon>
          </v-btn>
          <v-btn class="mr-5" icon>
            <v-icon color="#E4F0FA">
              mdi-comment-processing-outline
            </v-icon>
          </v-btn>
          <v-btn icon @click="shareDialog = true">
            <v-icon color="#E4F0FA">
              mdi-share-outline
            </v-icon>
          </v-btn>
        </div>
        <div class="card__actions-download">
          <a ref="download" hidden download :href="require(`@/assets/img/${post.img}`)" />
          <v-btn icon @click="downloadImg">
            <v-icon color="#E4F0FA">
              mdi-file-download-outline
            </v-icon>
          </v-btn>
        </div>
      </div>
    </v-card>
    <div class="footer pt-2">
      <div class="likes">
        Нравится: {{ post.likesCount | countFilter }}
      </div>
      <div class="theme">
        {{ post.theme }}
        <span
          v-for="(item, index) in post.hashtags"
          :key="index"
          class="ml-1"
        >
          #{{ item }}
        </span>
      </div>
      <div class="comments">
        <nuxt-link
          :to="''"
          tag="span"
        >
          Посмотреть все комментарии({{ post.commentsCount | countFilter }})
        </nuxt-link>
      </div>
    </div>
    <div class="last__comment d-flex align-center justify-space-between">
      <div class="last__comment-author d-flex align-center">
        <h4 class="mr-2">
          @{{ post.lastComment.author }}
        </h4>
        <span>{{ post.lastComment.text }}</span>
      </div>
      <v-btn small class="mr-5" icon @click="commentLike = !commentLike">
        <v-icon v-if="!commentLike" size="18" color="#6E81A0">
          mdi-heart-outline
        </v-icon>
        <v-icon v-else size="18" color="#6E81A0">
          mdi-heart
        </v-icon>
      </v-btn>
    </div>
    <share-dialog v-model="shareDialog" />
    <m-dialog :open.sync="actionDialog">
      <div class="action__dialog py-6">
        <v-list color="transparent">
          <v-list-item
            v-for="(item, index) in actionList"
            :key="index"
            @click="() => {}"
          >
            {{ item }}
          </v-list-item>
        </v-list>
      </div>
    </m-dialog>
  </div>
</template>

<script>
import PostCardBig from '../PostCardBig'
const dialog = () => import('../dialog')
const ShareDialog = () => import('../ShareDialog')

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
  components: {
    PostCardBig,
    ShareDialog,
    'm-dialog': dialog
  },
  props: {
    post: {
      type: Object,
      required: true
    },
    self: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    like: false,
    commentLike: false,
    shareDialog: false,
    actionDialog: false,
    list: [
      'Скрыть', 'Отменить подписку', 'Копировать ссылку', 'Пожаловаться'
    ],
    listSelf: [
      'Удалить', 'Редактировать', 'Копировать ссылку', 'Выключить комментарии'
    ]
  }),
  computed: {
    actionList () {
      return this.self ? this.listSelf : this.list
    }
  },
  methods: {
    downloadImg () {
      const downloadLink = this.$refs.download
      downloadLink.click()
    }
  }
}
</script>

<style lang="sass" scoped>
.card
  &__wrapper
    font-family: Lato, sans-serif

.footer
  font-size: 16px

.likes
  font-weight: 500
  font-size: 16px
  line-height: 16px
  color: #000

.theme
  color: $mainBlue
  font-weight: 500 !important
  font-size: 16px
  span
    font-weight: 400
    font-size: 14px

.comments
  span
    font-size: 14px
    color: #828282

.last__comment
  &-author
    h4
      font-weight: bold
      font-size: 16px
      color: #000
</style>
