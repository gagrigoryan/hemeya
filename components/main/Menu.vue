<template>
  <v-navigation-drawer
    :value="drawer"
    class="menu py-7"
    fixed
    color="#E4EFF9"
    width="80%"
    @input="changeDrawer"
  >
    <div class="menu__header px-7">
      <div class="menu__header-avatar d-flex align-end">
        <v-avatar size="45px">
          <v-img
            :src="require(`~/assets/img/users/${user.avatar}`)"
            width="45"
            height="45"
          />
        </v-avatar>
        <p class="my-0 mx-1">
          {{ user.rating }}
        </p>
        <v-icon color="#6E81A0" size="26">
          mdi-star
        </v-icon>
      </div>
      <div class="menu__header-title mt-3">
        <h4>{{ user.name }}</h4>
        <p class="my-1">
          @{{ user.username }}
        </p>
      </div>
    </div>
    <div class="menu__links">
      <div class="menu__links-top-wrapper">
        <v-btn
          class="link__btn"
          icon
          width="100%"
          tile
          @click="topShow"
        >
          <v-icon class="link__btn-icon" size="24">
            mdi-chevron-{{ menuTopShow ? 'down' : 'up' }}
          </v-icon>
        </v-btn>
        <div class="menu__links-top">
          <v-expand-transition>
            <ul v-if="menuTopShow" class="px-7">
              <nuxt-link
                v-for="(item, index) in menuItems.menuItemsTop"
                :key="index"
                :to="item.url"
                tag="li"
                class="my-4"
              >
                <v-icon class="mr-3" color="#6E81A0" size="24">
                  {{ item.icon }}
                </v-icon>
                {{ item.title }}
              </nuxt-link>
            </ul>
          </v-expand-transition>
        </div>
      </div>
      <div class="menu__links-main">
        <ul class="px-7">
          <nuxt-link
            v-for="(item, index) in menuItems.menuItemsMain"
            :key="index"
            :to="{ path: item.url}"
            tag="li"
            class="my-4"
          >
            <v-icon class="mr-3" color="#6E81A0" size="24">
              {{ item.icon }}
            </v-icon>
            {{ item.title }}
          </nuxt-link>
        </ul>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Menu',
  data: () => ({
    user: {
      avatar: 'user2.png',
      name: 'Антон Павлов',
      username: 'hublot_13',
      rating: 4.9
    },
    menuItems: {
      menuItemsTop: [
        {
          title: 'Блог',
          url: '/blog',
          icon: 'mdi-book-open-outline'
        },
        {
          title: 'ТОП',
          url: '/top',
          icon: 'mdi-card-account-details-star-outline'
        }
      ],
      menuItemsMain: [
        {
          title: 'Настройки',
          url: '/settings',
          icon: 'mdi-cog-outline'
        },
        {
          title: 'О нас',
          url: '/about',
          icon: 'mdi-web'
        },
        {
          title: 'Поддержка',
          url: '/support',
          icon: 'mdi-bullhorn-outline'
        },
        {
          title: 'Контакты',
          url: '/contacts',
          icon: 'mdi-account-box-outline'
        },
        {
          title: 'Соглашение',
          url: '/agreement',
          icon: 'mdi-text-box-check-outline'
        },
        {
          title: 'Пригласить',
          url: '/invite',
          icon: 'mdi-share-outline'
        },
        {
          title: 'Рейтинг',
          url: '/rating',
          icon: 'mdi-star'
        },
        {
          title: 'Выйти',
          url: '/logout',
          icon: 'mdi-logout'
        }
      ]
    },
    menuTopShow: false
  }),
  computed: {
    drawer () {
      return this.$store.state.menuDrawer
    }
  },
  mounted () {
  },
  methods: {
    changeDrawer (e) {
      this.$store.dispatch('ToggleMenuDrawer', e)
    },

    topShow () {
      this.menuTopShow = !this.menuTopShow
      this.$emit('input', true)
    }
  }
}
</script>

<style lang="sass" scoped>
.menu
  z-index: 1000
  &__header
    &-avatar
      font-size: 18px
      color: #000
      p
        padding: 0 !important
  &__title
    h5
      font-size: 14px !important
      font-weight: 700
    p
      font-size: 12px !important
  &__links
    color: $mainBlue
    font-size: 14px
    &-top
      border-bottom: 1px solid #2E476E
      width: 100%
      ul
        width: 100%

ul
  padding: 0

.link__btn
  position: relative
  &-icon
    position: absolute
    right: 42px
    top: 50%
    transform: translateY(-50%)
</style>
